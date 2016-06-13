# Task Bundles

Onyx's strength has always been it's data-driven nature. This allows it to
provide a maleable job api based on datastructures, allowing simple DSL's to be
written on top.

In the last few months, we've been rolling out a DSL inspired by real-life
use cases the Distributed Masonry team has come across doing client work.
All of this is based around a new namespace in Onyx Core, the `onyx.job`
namespace.

`onyx.job/add-task` takes a task bundle and merges it into an Onyx job map
after verifying the task's schema is satisfied. It has a second variadic arity
that allows Task Bundle Modifiers to run before the final merge happens.

### Task Bundle Map
A task bundle map is just a plain clojure map of the shape

```clojure

{:task {:task-map {:onyx/name :inc
                   :onyx/type :function
                   :onyx/fn ::inc-viewcount
                   :onyx/batch-size 1
                   :myproject/special-value 100
                   :onyx/batch-timeout 1000}
        :lifecycles [{...}]
        :flow-conditions [{...}]
        :windows [{...}]
        :triggers [{...}]}

 :schema {:task-map {:myproject/special-value s/Num}
          :lifecycles {:myproject/special-state s/Str}
          :windows {...}
          :triggers {...}}}
```
A task bundle map is comprised of two parts, the `:task` key denotes
what the task is comprised of while the `:schema` key allows `add-task`
to provide schema extra schema checks around any custom values you provide.

### Tasks
We further package up these "Task Bundles" into "Tasks", which are functions
that address the fact that we often only want to change a few values in the map
to facilitate reuse. Instead of a task-bundle that increments a number at key
`:number`, we often wanted to specify our own key when we build the job.

```clojure

(s/defn inc-key
  ([task-name :- s/Keyword task-opts]
   {:task {:task-map (merge {:onyx/name task-name
                             :onyx/type :function
                             :onyx/fn ::inc-in-segment
                             :onyx/params [::inc-key]}
                            task-opts)}
    :schema {:task-map IncKeyTask}})
  ([task-name :- s/Keyword
    ks :- [s/Keyword]
    task-opts]
   (inc-key task-name (merge {::inc-key ks} task-opts))))
```
Using the two-arity form here allows users of the task
to quickly see what they *need* to provide to have a valid
task bundle. `::inc-in-segment` wont work unless we specify
in `:onyx/params` a `ks` to the number we want to increment,
so to hint at this we specify it directly in the second arity.

### Task Bundle Modifiers
The `onyx.job/add-task` function provides a second variadic
arity, taking funciton of the form

```clojure
(fn [task-bundle] ...) => {task-bundle-map}
```
This allows a sort of meta behavior to be bundled up and applied
to task bundles before they are schema checked and merged into the final
job map. This is useful for things like adding logging, triggers, or further
restricting schema. An example of adding a trigger to send window state to
MySQL below.

```clojure

(s/defn with-trigger-to-sql
  [window-id :- s/Keyword connection-uri :- s/Str]
  (fn [task-definition]
    (-> task-definition
        (update-in [:task :triggers] conj
                   {:trigger/window-id window-id
                    :trigger/refinement :onyx.refinements/accumulating
                    :trigger/on :onyx.triggers/segment
                    :trigger/threshold [5 :elements]
                    :trigger/sync :twit.persist.sql/upsert-trending
                    :sql/connection-uri {:connection-uri connection-uri}})
        (update-in [:schema :triggers] conj
                   {:sql/connection-uri {:connection-uri s/Str}}))))
```
We update both the `:task` portion to include the new trigger spec, and
the `:schema` portion so that it can participate in the validation happening
in `onyx.job/add-task`. Convention is to name task bundle modifier functions
`with-*`.

## Jobs

Task's and Task Bundle Modifiers are all about encapsulating functionality to
facilitate reuse. At this time, most of the Onyx plugins provide a task bundle
interface under `onyx.tasks.<plugin-name>`. This allows us to avoid dealing
directly with the Onyx job map, making our jobs [look like this](https://github.com/onyx-twitter-sample/twit/blob/master/src/twit/jobs/trending.clj).

```clojure
(-> base-job
    (add-task (twitter/stream :in [:id :text :createdAt] (merge batch-settings twitter-config)))
    (add-task (reshape/reshape-segment :reshape-segment batch-settings))
    (add-task (tweet/emit-hashtag-ids :split-hashtags [:id] [:text] batch-settings))
    (add-task (tweet/window-trending-hashtags :out :hashtag-window))
    (add-task (core-async-task/output :out (merge batch-settings {:onyx/group-by-key :hashtag
                                                                  :onyx/flux-policy :recover
                                                                  :onyx/min-peers 1
                                                                  :onyx/max-peers 1
                                                                  :onyx/uniqueness-key :id}))
              (tweet/with-trigger-to-sql :hashtag-window connection-uri)))
```

The [Onyx Twitter Sample](https://github.com/onyx-platform/onyx-twitter-sample)
is a repository demonstrating the use of Task Bundles and a few other related
concepts like job registration and submission. We intend this to be a community
showcase of Onyx functionality that will grow over time. Feel free to add
additional jobs demonstrating other Onyx features, or suggestions for job ideas.
