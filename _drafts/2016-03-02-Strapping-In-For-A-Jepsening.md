---
layout: post
title:  "Strapping in For a Jepsening"
categories: jekyll update
draft: true
author: Lucas Bradstreet
---

## Strapping in for a Jepsen'ing

### Introduction

[Onyx](https://github.com/onyx-platform/onyx), a high performance, distributed,
fault tolerant, scalable data processing platform. Onyx programs are described
using immutable data structures, putting a powerful force in the hands of the
developer to cross language and machine boundaries at runtime.

### Testing

However, distributed systems are hard. Very hard. All of this power is useless
if you cannot trust your system to handle partitions correctly, connection
losses, killed nodes, consistency issues, etc.

From the beginning, Onyx has had a variety of unit tests, and integration
tests. Over time we have also added numerous property tests to the mix.
Our property tests stress our peer coordinator and cluster scheduler, and found
numerous bugs that would have been very hard to pickup by other testing
methods. These have allowed us to develop Onyx, and add complex features at a
great rate.

However, there are various forms of tests that are difficult to formulate, or
time consuming for developers to build. That said, a paper, 
[Simple Testing Can Prevent Most Critical Failures Yuan et. al.](http://www.eecg.toronto.edu/~yuan/papers/failure_analysis_osdi14.pdf)
found that almost all distributed systems failures can be reproduced with 3 or
fewer nodes.

While we have users happily [using Onyx in
production](https://github.com/onyx-platform/onyx#companies-running-onyx-in-production),
it is likely that there are bugs waiting for the right set of scenarios to
occur. When they do, reproducing these scenarios can be incredibly time
consuming. We would much prefer to find these issues early and to have a way to
test every release against gruelling conditions that may only occasionally
occur in a production environment.

Kyle Kingsbury's [Jepsen](https://github.com/aphyr/jepsen) software and [Call
Me Maybe](https://aphyr.com/tags/jepsen) series have been blazing a path to
better testing of distributed systems. Kyle has been dragging the distributed
systems world into a more consistent (and pager friendly) future. Did I mention that he's now available [for Jepsen consulting?](http://aphyr.com).

### Starting out

As the Onyx team was new to Jepsen, we decided to initially perform a trial
test on one of our dependencies. Onyx depends on two external services. The
first is ZooKeeper, a distributed CP datastore, which we use for Onyx peer coordination, and
the second is BookKeeper, a replicated log server, which we use to build
replicated aggregation state machines to provide tolerance for our 
[State Management / Windowing](http://www.onyxplatform.org/docs/user-guide/latest/aggregation-state-management.html)
features.

As ZooKeeper has already received the [Call Me Maybe treatment](https://aphyr.com/posts/291-jepsen-zookeeper), and passed with
flying colours, we decided to first test BookKeeper. Testing our dependencies first allows us to be reasonably sure that any bugs we find are our own fault.

### Setting up our Jepsen Environment

We initially setup our Jepsen environment in the recommended way, by
implementing `jepsen.db/DB`'s setup! and teardown! procedures to completely
setup and revert ZooKeeper and BookKeeper. We quickly found this an impediment
to quick iterative development, as the setup and teardown process was quite
time consuming, and as newbies we would often make silly mistakes, requiring us
to go through the whole process over and over.

As we were using docker-in-docker to run our Jepsen nodes, we decided to add a
layer to the standard Jepsen docker containers to include a pre-installed
BookKeeper and ZooKeeper. See our Jepsen docker setup 
[README] (https://github.com/onyx-platform/onyx-jepsen/blob/master/docker/README.md) for more information.

This improved our turn around times markedly, as all we had to do from run to
run is start up a new container from scratch and it would be in exactly the
same state from run to run.

### Testing BookKeeper

Jepsen operates by spinning up `n` [server](https://github.com/aphyr/jepsen/blob/master/jepsen/src/jepsen/os.clj)
nodes (in our case 5), and `y` [clients](https://github.com/aphyr/jepsen/blob/master/jepsen/src/jepsen/client.clj)
(in our case 5). On each of the server nodes, ran a BookKeeper server, and a
ZooKeeper server which BookKeeper depends on.

Our test was configured to have 5 client threads writing to a BookKeeper ledger
configured with an [ensemble size](http://www.onyxplatform.org/docs/cheat-sheet/latest/#peer-config/:onyx.bookkeeper/ledger-ensemble-size)
of 3, and a [quorum size](http://www.onyxplatform.org/docs/cheat-sheet/latest/#peer-config/:onyx.bookkeeper/ledger-quorum-size)
of 3. This is the default configuration used by Onyx in its state management
feature.

The 5 client threads wrote to this ledger using a simple generator that wrote incrementing values to the ledger, and periodically called the nemesis.

```clojure
(gen/phases
 (->> (->> (range)
           (map (fn [x] {:type :invoke, :f :add, :value x}))
           gen/seq)
      (gen/stagger 1/10)
      (gen/delay 1)
      (gen/nemesis
        (gen/seq (cycle
                    [(gen/sleep 30)
                     {:type :info :f :start}
                     (gen/sleep 200)
                     {:type :info :f :stop}])))
                     (gen/time-limit 800)) 
      (read-ledger))
```

The nemesis was configured to [partition random halves](https://github.com/aphyr/jepsen/blob/master/jepsen/src/jepsen/nemesis.clj#L99) of the network, and in an alternate test, partition via the [bridge nemesis](https://github.com/aphyr/jepsen/blob/master/jepsen/src/jepsen/nemesis.clj#L59).

The final phase of the test was to read the ledger back. BookKeeper only allows
a ledger to only be written to by a single ledger handle, and guarantees that
values read from a ledger will be in the order that they were written. This
makes it rather easy to test for correctness: we simply read back the ledger,
and inspect the history of the writes in our Jepsen
[Checker](https://github.com/aphyr/jepsen/blob/master/jepsen/src/jepsen/checker.clj)

We quickly hit test failures. The root cause of this issue was simple to
determine. Our BookKeeper servers were committing suicide upon losing quorum.
While this is a reasonable response to this issue, it was not our assumption,
and it is not documented in BookKeeper's documentation. After creating a [JIRA
issue](https://issues.apache.org/jira/browse/BOOKKEEPER-882) for this
documentation issue, and monitoring the BookKeeper server, we were able to
achieve consistently successful test runs! Sometimes, the nemesis would cause
all writes to a ledger to fail, however this is the intended behaviour under
these conditions. The intended use is to create an additional ledger and
continue writing. Kudos to the BookKeeper team for passing these tests with
only a documentation issue.

### A simple first Onyx test

Having tested our dependencies, we next moved on to testing Onyx. 

Onyx operates by building a job composed of a workflow DAG of tasks, their
configuration, and a scheduler configuration. Onyx depends on having a durable
input stream stream as the input nodes of the DAG. This is so that unprocessed
data can be replayed in the case of input peer failures / rescheduling.

Onyx already supports numerous [plugins](http://github.com/onyx-platform/onyx/tree/master#build-status),
however we have not tested all of the constituent products for reliability
under partitions. Luckily we have tested BookKeeper, and thus we decided to
write [onyx-bookkeeper](https://github.com/onyx-platform/onyx-bookkeeper).

With our input and output task problem solved, we wrote a function to build a
simple Onyx job to read from 5 BookKeeper ledgers (XXX tasks), pass through an intermediate 
task that adds the job number to the segment, i.e. hash map, so that we could ensure that
the segment has been routed from the correct job, and write the resulting segment to new
BookKeeper ledgers.

We dynamically build Onyx jobs based on a parameter that defines how many jobs
should read from the ledgers. As the number of ledgers needs to be split up
over the number of jobs, we tested running 5 simultaneous jobs, reading from
one ledger each, as well as 1 job, reading from all 5 ledgers.

The latter of these job definitions can be seen below:

```clojure
{:workflow [[:read-ledger-3 :add-job-num]
            [:read-ledger-4 :add-job-num]
            [:read-ledger-5 :add-job-num]
            [:read-ledger-6 :add-job-num]
            [:read-ledger-7 :add-job-num]
            [:add-job-num :persist]],
 :catalog [{:bookkeeper/password-bytes #object["[B" "0x71889463" "[B@71889463"],
            :onyx/plugin :onyx.plugin.bookkeeper/read-ledgers,
            :bookkeeper/deserializer-fn :onyx.compression.nippy/zookeeper-decompress,
            :onyx/medium :bookkeeper,
            :onyx/type :input,
            :onyx/name :read-ledger-3,
            :onyx/max-pending 5000,
            :onyx/max-peers 1,
            :bookkeeper/no-recovery? true,
            :bookkeeper/zookeeper-addr "n1:2181,n2:2181,n3:2181,n4:2181,n5:2181",
            :bookkeeper/zookeeper-ledgers-root-path "/onyx/JEPSENONYXID/ledgers",
            :onyx/doc "Reads a sequence from a BookKeeper ledger",
            :bookkeeper/digest-type :mac,
            :onyx/pending-timeout 10000,
            :bookkeeper/ledger-id 3,
            :onyx/batch-size 1}
           {:bookkeeper/password-bytes #object["[B" "0x71889463" "[B@71889463"],
            :onyx/plugin :onyx.plugin.bookkeeper/read-ledgers,
            :bookkeeper/deserializer-fn :onyx.compression.nippy/zookeeper-decompress,
            :onyx/medium :bookkeeper,
            :onyx/type :input,
            :onyx/name :read-ledger-4,
            :onyx/max-pending 5000,
            :onyx/max-peers 1,
            :bookkeeper/no-recovery? true,
            :bookkeeper/zookeeper-addr "n1:2181,n2:2181,n3:2181,n4:2181,n5:2181",
            :bookkeeper/zookeeper-ledgers-root-path "/onyx/JEPSENONYXID/ledgers",
            :onyx/doc "Reads a sequence from a BookKeeper ledger",
            :bookkeeper/digest-type :mac,
            :onyx/pending-timeout 10000,
            :bookkeeper/ledger-id 4,
            :onyx/batch-size 1}
           {:bookkeeper/password-bytes #object["[B" "0x71889463" "[B@71889463"],
            :onyx/plugin :onyx.plugin.bookkeeper/read-ledgers,
            :bookkeeper/deserializer-fn :onyx.compression.nippy/zookeeper-decompress,
            :onyx/medium :bookkeeper,
            :onyx/type :input,
            :onyx/name :read-ledger-5,
            :onyx/max-pending 5000,
            :onyx/max-peers 1,
            :bookkeeper/no-recovery? true,
            :bookkeeper/zookeeper-addr "n1:2181,n2:2181,n3:2181,n4:2181,n5:2181",
            :bookkeeper/zookeeper-ledgers-root-path "/onyx/JEPSENONYXID/ledgers",
            :onyx/doc "Reads a sequence from a BookKeeper ledger",
            :bookkeeper/digest-type :mac,
            :onyx/pending-timeout 10000,
            :bookkeeper/ledger-id 5,
            :onyx/batch-size 1}
           {:bookkeeper/password-bytes #object["[B" "0x71889463" "[B@71889463"],
            :onyx/plugin :onyx.plugin.bookkeeper/read-ledgers,
            :bookkeeper/deserializer-fn :onyx.compression.nippy/zookeeper-decompress,
            :onyx/medium :bookkeeper,
            :onyx/type :input,
            :onyx/name :read-ledger-6,
            :onyx/max-pending 5000,
            :onyx/max-peers 1,
            :bookkeeper/no-recovery? true,
            :bookkeeper/zookeeper-addr "n1:2181,n2:2181,n3:2181,n4:2181,n5:2181",
            :bookkeeper/zookeeper-ledgers-root-path "/onyx/JEPSENONYXID/ledgers",
            :onyx/doc "Reads a sequence from a BookKeeper ledger",
            :bookkeeper/digest-type :mac,
            :onyx/pending-timeout 10000,
            :bookkeeper/ledger-id 6,
            :onyx/batch-size 1}
           {:bookkeeper/password-bytes #object["[B" "0x71889463" "[B@71889463"],
            :onyx/plugin :onyx.plugin.bookkeeper/read-ledgers,
            :bookkeeper/deserializer-fn :onyx.compression.nippy/zookeeper-decompress,
            :onyx/medium :bookkeeper,
            :onyx/type :input,
            :onyx/name :read-ledger-7,
            :onyx/max-pending 5000,
            :onyx/max-peers 1,
            :bookkeeper/no-recovery? true,
            :bookkeeper/zookeeper-addr "n1:2181,n2:2181,n3:2181,n4:2181,n5:2181",
            :bookkeeper/zookeeper-ledgers-root-path "/onyx/JEPSENONYXID/ledgers",
            :onyx/doc "Reads a sequence from a BookKeeper ledger",
            :bookkeeper/digest-type :mac,
            :onyx/pending-timeout 10000,
            :bookkeeper/ledger-id 7,
            :onyx/batch-size 1}
           {:onyx/name :add-job-num,
            :onyx/fn :onyx-peers.functions.functions/annotate-job-num,
            :jepsen/job-num 0,
            :onyx/params [:jepsen/job-num],
            :onyx/type :function,
            :onyx/batch-size 1}
           {:bookkeeper/password-bytes #object["[B" "0x71889463" "[B@71889463"],
            :onyx/plugin :onyx.plugin.bookkeeper/write-ledger,
            :onyx/medium :bookkeeper,
            :onyx/type :output,
            :onyx/name :persist,
            :bookkeeper/zookeeper-addr "n1:2181,n2:2181,n3:2181,n4:2181,n5:2181",
            :bookkeeper/ensemble-size 3,
            :onyx/doc "Writes messages to a BookKeeper ledger",
            :bookkeeper/digest-type :mac,
            :bookkeeper/serializer-fn :onyx.compression.nippy/zookeeper-compress,
            :onyx/batch-size 1,
            :bookkeeper/quorum-size 3}],
 :lifecycles [{:lifecycle/task :all,
               :lifecycle/calls :onyx.lifecycle.metrics.metrics/calls,
               :metrics/buffer-capacity 10000,
               :metrics/workflow-name "simple-job",
               :metrics/sender-fn :onyx.lifecycle.metrics.timbre/timbre-sender,
               :lifecycle/doc "Instruments a task's metrics to timbre"}
              {:lifecycle/task :all,
               :lifecycle/calls :onyx-peers.lifecycles.restart-lifecycle/restart-calls}
              {:lifecycle/task :persist,
               :lifecycle/calls :onyx.plugin.bookkeeper/write-ledger-calls}
              {:lifecycle/task :read-ledger-5,
               :lifecycle/calls :onyx-peers.lifecycles.restart-lifecycle/restart-calls}
              {:lifecycle/task :read-ledger-5,
               :lifecycle/calls :onyx.plugin.bookkeeper/read-ledgers-calls}
              {:lifecycle/task :read-ledger-7,
               :lifecycle/calls :onyx-peers.lifecycles.restart-lifecycle/restart-calls}
              {:lifecycle/task :read-ledger-7,
               :lifecycle/calls :onyx.plugin.bookkeeper/read-ledgers-calls}
              {:lifecycle/task :read-ledger-4,
               :lifecycle/calls :onyx-peers.lifecycles.restart-lifecycle/restart-calls}
              {:lifecycle/task :read-ledger-4,
               :lifecycle/calls :onyx.plugin.bookkeeper/read-ledgers-calls}
              {:lifecycle/task :read-ledger-3,
               :lifecycle/calls :onyx-peers.lifecycles.restart-lifecycle/restart-calls}
              {:lifecycle/task :read-ledger-3,
               :lifecycle/calls :onyx.plugin.bookkeeper/read-ledgers-calls}
              {:lifecycle/task :read-ledger-6,
               :lifecycle/calls :onyx-peers.lifecycles.restart-lifecycle/restart-calls}
              {:lifecycle/task :read-ledger-6,
               :lifecycle/calls :onyx.plugin.bookkeeper/read-ledgers-calls}],
 :task-scheduler :onyx.task-scheduler/balanced}
```

Upon completing the job, we read back from the output ledgers, and determine
whether all values written to the input ledgers were processed and written to
the output ledgers, including the correct annotation of the job name.

We quickly hit a number of issues, mostly relating to the peers join process, as well as rebooting themselves after being excised from the cluster.

* [Peer join race condition #453](https://github.com/onyx-platform/onyx/issues/453) Resolved.
* [Peers that crash on component/start will not reboot #437] (https://github.com/onyx-platform/onyx/issues/437) Resolved. 
* [Ensure peer restarts after ZooKeeper connection loss/errors #423] (https://github.com/onyx-platform/onyx/issues/423) Resolved.

While we had property tests to thoroughly test the peer join process, the above
bugs mostly appear in the impure sections of our code. These bugs operate in the real world
where peers are not always able to write their coordination log entries, do not
always manage to call their side effects, etc.

Jepsen uses excellent scientific procedures for running tests, by outputting
dated records including a `result.edn` file, and history to a timestamped directory under your test name
e.g. `store/onyx-basic/20160118T102259.000Z`. You can view a sample of
onyx-jepsen's [result.edn](https://gist.github.com/lbradstreet/60c4be48216146878f58).
In addition to the standard Jepsen output, we also copy Onyx's log output to
the test run directory. Scientists often like to keep a log of experimental results, and we
have tried to emulate one further, keeping a log of our immediate interpretations and
hypothesis, of each failed run. See this [sample if you are interested in our
process](https://github.com/onyx-platform/onyx-jepsen/blob/master/onyx-issues-log.txt#L233),
but please do not judge our notes! 

Onyx coordinates peers via a shared log, written to ZooKeeper. Each peer plays
back this log in order, gaining a full view of the cluster replica. One
advantage of this mechanism is that we can playback the log obtained by jepsen,
and debug it step by step. A great post [describing this design pattern](https://news.ycombinator.com/item?id=10765378) has been written by
[Brandon Bloom](https://twitter.com/BrandonBloom). It is this pattern that
makes testing our replica coordination, and cluster scheduler easy with
property testing, and is now paying dividends with our Jepsen testing.

To this end, we wrote a [console application](https://github.com/onyx-platform/onyx-console-dashboard) that
opens [result.edn](https://gist.github.com/lbradstreet/60c4be48216146878f58)
files, and allows us to step through the replica, diff each action, filter by
peer actions, ids, etc. This vastly simplifies debugging coordination and scheduler related issues.

### Testing Onyx's State Management feature

The previous Onyx test did not test 

### Kill -9 Me

Kill -9 testing.


-- [Lucas Bradstreet](http://www.twitter.com/ghaz)
