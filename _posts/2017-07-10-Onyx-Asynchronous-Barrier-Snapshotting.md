---
layout: post
title:  "Onyx 0.10.0: Asynchronous Barrier Snapshotting"
date:   2017-07-10 00:00:00
categories: jekyll update
author: Lucas Bradstreet
---

Distributed Masonry is proud to announce Onyx 0.10.0, a major step forward for Onyx’s stream
processing engine. Version 0.10 brings enormous performance improvements, support
for in-order message processing, and enhancements for writing stateful streaming applications.
In this post, we'll take a look at the recent activity on the project, summarize what's been
delivered, and look forward to what's ahead.

## New streaming engine

Onyx 0.10 rewrites the messaging and fault tolerance layer using the best in academic research - [Asynchronous Barrier Snapshotting
(ABS)](https://github.com/onyx-platform/onyx/blob/0.10.x/doc/user-guide/architecture-low-level-design.adoc#asynchronous-barrier-snapshotting) [algorithm](https://arxiv.org/abs/1506.08603). 
ABS is an industry-proven method for periodically injecting barrier markers into a message stream to increase performance to achieve cluster wide consistent snapshots, while allowing for fast recovery capability.

ABS is the core upgrade that clears the way for numerous advantages over Onyx's previous mechanism using
message lineage tracking. We'll examine just a few of these and talk about why they're now possible.

### Automatic exactly-once aggregations

Onyx 0.9 supported exactly once aggregations, but was only able to do so if
provided with a user-provided key in each message. That meant that each
message flowing through Onyx needed to be tracked for fault handling purposes,
and deduplicated after checking whether a message with that key has been seen
before.  With 0.10, Onyx is able to automatically provides exactly once
aggregations without any preexisting knowledge of the structure of incoming
messages. Moreover, this approach is far more performant since checkpointing
happens at consistent intervals dictated by the barriers, rather than durably
checkpointing aggregation results for each individual message.

### In-order processing

With 0.9, in-order processing wasn't possible because of our record-at-a-time
replay approach. Thanks to the properties of ABS, 0.10 is able to process
messages in the strict order that they're received. Here again, barrier
injection is able to delineate the stream of messages into "zones", and replay
happens at the granular of each barrier mark.  Peers are thus able to see the
same messages in the same order - even in the face of a recovery event.  In the
case of a recovery event, the stream will be rewound, and state recovered to
the consistent job wide-snapshot, ensuring that any state reducers will be
processed in-order. It is important to state that any side-effects performed by
tasks may be processed twice/out of order, however any accreted
state/reductions will be correctly processed.

This ends up being a big deal as a growing number of applications depend on
order. These often lean on architectures that perform pattern detection
or provenance tracking e.g. [Command Query Responsibility Segregation
(CQRS)](https://martinfowler.com/bliki/CQRS.html), and [Complex Event
Processing (CEP)](https://en.wikipedia.org/wiki/Complex_event_processing).

### Improved performance

Finally, and perhaps most importantly for some workloads, Onyx 0.10 comes with
a serious performance upgrade.  Since 0.10 injects barrier markers periodically
into the message stream, we're able to reduce the overhead of message
acknowledgments. Given the decrease in overhead, we're generally seeing a 3-10x
throughput and latency improvement for workloads dominated by Onyx
communication and processing overhead.

## Non-engine improvements

Onyx 0.10 also introduces numerous important features and improvements, including the following:

### Resume Points

[Resume points](https://github.com/onyx-platform/onyx/blob/0.10.x/doc/user-guide/resume-points.adoc)
are a new feature that make it simple to manage state between job runs. Resume
points allow for state to be transitioned from running or killed jobs. This
allows for simplified deployment and upgrades of long running streaming jobs,
refactoring of jobs e.g. split state from one job into two smaller jobs, as
well as hot swapped state transitions - made possible due to the immutability of the state snapshots.

### Trigger state to downstream tasks

Triggers can now emit aggregates to downstream tasks via
[`:trigger/emit`](http://www.onyxplatform.org/docs/cheat-sheet/latest/#trigger-entry/:trigger/emit).
`:trigger/emit` allows for multiple levels of aggregation and output
aggregation results to Onyx output mediums and more. Emitting trigger results
makes it much easier to make multiple Onyx jobs act as a cohesive whole.

### Improved Resiliency

Peers now include improved heartbeating, and perform peer to peer [liveness
checks](http://www.onyxplatform.org/docs/cheat-sheet/latest/#peer-config/:onyx.peer/subscriber-liveness-timeout-ms)
on each other in addition to the existing ZooKeeper watches. Stuck or dead peers will
now be more readily detected by Onyx, ensuring tolerance to additional classes
of faults.

### Simplified plugin interfaces

The input and output plugin interfaces have been greatly simplified. The primary problem
with 0.9's plugin interface is that the implementation details of how to asynchronously poll
for messages and handle failure bled out from the internals and into every plugin.
It also required developers to manually checkpoint state, which become untenable with each
new storage integration.

0.10 provides this checkpointing for free as result of its ABS upgrade. All a plugin needs is to return the data
to be snapshotted, and the snapshot will be asynchronously recorded and restored by Onyx. Plugin projects
have seen a reduction of 2-6x code as a result.

### S3 checkpointing backend

State checkpointing now supports durable writes to Amazon S3. BookKeeper is no
longer required for windowing/trigger support, greatly reducing operational
complexity of your Onyx cluster. Any interesting repercussion of writing entire
checkpoint blobs to S3 is that they're now individually recoverable, instead of incrementally
restoring state out of a BookKeeper log. This is useful for directly accessing window state,
even when an Onyx cluster is offline.

### New metrics

[Prometheus metrics](https://prometheus.io/) endpoints are now provided via
[onyx-peer-http-query](https://github.com/onyx-platform/onyx-peer-http-query) in Onyx core,
rather than requiring an external project integration.
Numerous additional metrics are now also supported, giving even greater
introspection into your cluster.

## Going forward

It's been about 15 months since the release of Onyx 0.9.0, and we'd like to thank the community
for its patience. Our release cycle was highly atypical this year, as we launched a commercial
[streaming platform you may have heard about](http://pyroclast.io), built on top of Onyx.

As we moved through growing our business, making sure we made Onyx's streaming engine as resilient
and performant as possible was our highest priority, which is why we took a long time between releases
to nail down. We've also been running each Onyx release candidate in production through Pyroclast
for a few weeks before we put it out in the public to ensure that we pick off any bugs that might
have been missed through normal testing. We'll continue to operate in this manner.

Thanks for your continued support and for using Onyx!
