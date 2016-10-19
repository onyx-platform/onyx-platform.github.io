---
layout: post
title:  "Onyx Local Runtime"
date:   2016-10-18 00:00:00
categories: jekyll update
author: Michael Drogalis
---

I'm pleased to announce the release of a new library for Onyx: [onyx-local-rt](https://github.com/onyx-platform/onyx-local-rt).
onyx-local-rt is an alternate runtime for Onyx that is pure and deterministic. This runtime, as the name suggests,
differs from the distributed runtime in that it only runs locally. onyx-local-rt has no dependencies aside from Onyx itself,
supports nearly the full functional API, and runs in ClojureScript.

Onyx itself can be broken down into two pieces: a programming model, and a runtime. The programming model (workflows,
catalogs, lifecycles, flow conditions, windows, and triggers) is itself an information model. That is, the means by which
Onyx programs communicate their instructions are solely through data structures. Onyx's programming model, by consequence,
makes it easy to execute jobs on any platform that adheres to the published information model.

For most users, the distributed runtime works fine. Most developers that are using Onyx require a solution that is
very high performance, resilient to faults, and widely extensible to other databases and storage engines. However,
we are increasingly seeing larger number of users who would like to use Onyx's programming model without engaging
it in a distributed context. For use cases where fault tolerance isn't requirement, onyx-local-rt offers a *very* simple
way to run Onyx programs as easily as any other Clojure program.

Another interesting use case for onyx-local-rt is testing. Executing a test with set up and tear down on the distributed, in-memory Onyx
components takes ~800 milliseconds on my MacBook Pro. Executing that same test takes under 15 milliseconds with onyx-local-rt.
In some sense, onyx-local-rt is the ultimate repl tool. Iterate on your Onyx programs for functional correctness using
the local runtime, and switch to the distributed runtime when you're ready to tune parallelism and integrate with distributed storage.

onyx-local-rt is dead easy to use. Call `init` with an Onyx job. Add new segments to an input with `add-segment`. Transition
the runtime step-by-step into the future by calling `tick`, or as a convenience, invoke `drain`, which will call `tick`
on your behalf until all inflight messages have completed their path through the job. Using `new-segment` in conjunction
with `drain` allows for integrating with custom, user-implemented fault handling.

Just as a quick example (Can I say it again? It works in ClojureScript, too!):

```clojure
(:require [onyx-local-rt.api :as api])

;; ^:export the function if using in ClojureScript.
(defn ^:export my-inc [segment]
  (update-in segment [:n] inc))

(def job
  {:workflow [[:in :inc] [:inc :out]]
   :catalog [{:onyx/name :in
              :onyx/type :input
              :onyx/batch-size 20}
             {:onyx/name :inc
              :onyx/type :function
              :onyx/fn ::my-inc
              :onyx/batch-size 20}
             {:onyx/name :out
              :onyx/type :output
              :onyx/batch-size 20}]
   :lifecycles []})

(pprint
 (-> (api/init job)
     (api/new-segment :in {:n 41})
     (api/new-segment :in {:n 84})
     (api/drain)
     (api/stop)
     (api/env-summary)))

;; =>
;; {:next-action :lifecycle/start-task?,
;;  :tasks
;;  {:in {:inbox []},
;;   :inc {:inbox []},
;;   :out {:inbox [], :outputs [{:n 42} {:n 85}]}}}
```

We hope that onyx-local-rt will serve as a fundamental tool for developing Onyx programs in the future. Keep rocking!