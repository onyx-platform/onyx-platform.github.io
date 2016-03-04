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
BookKeeper and ZooKeeper: [README]
(https://github.com/onyx-platform/onyx-jepsen/blob/master/docker/README.md).

This improved our turn around times markedly, as all we had to do from run to
run is start up a new container from scratch and it would be in exactly the
same state from run to run.

### Testing BookKeeper

Jepsen operates by spinning up `n` [server](https://github.com/aphyr/jepsen/blob/master/jepsen/src/jepsen/os.clj) nodes (in our case 5), and `y` [clients](https://github.com/aphyr/jepsen/blob/master/jepsen/src/jepsen/client.clj) (in our case 5). On each of the server nodes, ran a BookKeeper server, and a ZooKeeper server which BookKeeper depends on.

Our test was configured to have 5 client threads writing to a BookKeeper ledger configured with an [ensemble size](http://www.onyxplatform.org/docs/cheat-sheet/latest/#peer-config/:onyx.bookkeeper/ledger-ensemble-size) of 3, and a [quorum size](http://www.onyxplatform.org/docs/cheat-sheet/latest/#peer-config/:onyx.bookkeeper/ledger-quorum-size) of 3. This is the default configuration used by Onyx in its state management feature.

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

The final phase of the test was to read the ledger back. BookKeeper only allows a ledger to only be written to by a single ledger handle, and guarantees that values read from a ledger will be in the order that they were written. This makes it rather easy to test for correctness: we simply read back the ledger, and inspect the history of the writes in our Jepsen [Checker](https://github.com/aphyr/jepsen/blob/master/jepsen/src/jepsen/checker.clj)

We quickly hit test failures. The root cause of this issue was simple to determine. Our BookKeeper servers were committing suicide upon losing quorum. While this is a reasonable response to this issue, it was not our assumption, and it is not documented in BookKeeper's documentation. After creating a [JIRA issue](https://issues.apache.org/jira/browse/BOOKKEEPER-882) for this documentation issue, and monitoring the BookKeeper server, we were able to achieve consistently successful test runs! Sometimes, the nemesis would cause all writes to a ledger to fail, however this is the intended behaviour under these conditions. The intended use is to create an additional ledger and continue writing. Kudos to the BookKeeper team for passing these tests with only a documentation issue.

### Testing Onyx

Having tested the services 


-- [Lucas Bradstreet](http://www.twitter.com/ghaz)
