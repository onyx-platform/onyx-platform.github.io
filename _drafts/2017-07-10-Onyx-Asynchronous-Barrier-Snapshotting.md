---
layout: post
title:  "onyx 0.10.0: Asynchronous Barrier Snapshotting"
date:   2017-07-10 00:00:00
categories: jekyll update
author: Lucas Bradstreet
---

We’re proud to announce Onyx 0.10.0, a major step forward for Onyx’s stream processing engine.

## Asynchronous Barrier Snapshotting

Onyx 0.10.0 is a rewrite of the messaging and fault tolerance mechanisms using [Asynchronous Barrier Snapshotting (ABS)](https://github.com/onyx-platform/onyx/blob/0.10.x/doc/user-guide/architecture-low-level-design.adoc#asynchronous-barrier-snapshotting).

Asynchronous Barrier Snapshotting provides numerous advantages over 1.9.x's fault tolerance mechanism.

### Exactly Once Processing

Onyx 0.9 supported exactly once aggregations, however these were implemented
via deduplication using user supplied ID keys, and a disk backed filter. Onyx
0.10 automatically provides exactly once aggregations without ID keys, and is
far more performant than 0.9 for this purpose.

### In Order Processing

Onyx 0.10.0 supports in-order processing, greatly improving Onyx's
applicability for applications where order matters. These use pattern
detection, dependencies between data in [Command Query Responsibility
Segregation (CQRS)](https://martinfowler.com/bliki/CQRS.html), and [Complex
Event Processing (CEP)](https://en.wikipedia.org/wiki/Complex_event_processing).

### Greatly Improved Performance

Asynchronous Barrier Snapshotting has a much lower acking / fault tolerance
overhead than 0.9's lineage tracking method. Additional performance
enchancements ensures that 0.10.0 can be anywhere from 3-10X faster than onyx
0.9, depending on the features used.

## New Features

Onyx 0.10.0 also introduces several important features and improvements.

### Resume Points

[Resume points](https://github.com/onyx-platform/onyx/blob/0.10.x/doc/user-guide/resume-points.adoc)
is a new feature that make it simple to manage state between job runs. Resume
points allow a job to migrate or copy state from running or killed jobs. This
allows for simplified deployment and upgrades of long running streaming jobs,
refactoring of jobs e.g. split state from one job into two smaller jobs, as
well as hot swapped state transitions.

### Trigger to Downstream Tasks

Triggers can now emit aggregates to downstream tasks via
[`:trigger/emit`](http://www.onyxplatform.org/docs/cheat-sheet/latest/#trigger-entry/:trigger/emit).
`:trigger/emit` allows for multiple levels of aggregation, output of
aggregation results to Onyx output plugins and more.

### Improved Fault Tolerance

Peers now heartbeat to each other, and perform peer to peer [liveness
checks](http://www.onyxplatform.org/docs/cheat-sheet/latest/#peer-config/:onyx.peer/subscriber-liveness-timeout-ms)
on each other in addition to the existing ZooKeeper watches. Stuck peers will
now be more readily detected by Onyx, ensuring tolerance to additional classes
of faults.

### Simplified Plugin Interfaces

The input and output plugin interfaces have been greatly simplified. The input plugin interface in 0.9.x required developers to checkpoint any state. 0.10.0 provides this checkpointing for free!

### S3 Checkpointing Backend

State checkpointing now supports checkpointing to Amazon S3. BookKeeper is no
longer required for windowing/trigger support, greatly reducing operational
complexity of your Onyx cluster.

### Improved Metrics

[Prometheus metrics](https://prometheus.io/) endpoints are now provided via
[onyx-peer-http-query](https://github.com/onyx-platform/onyx-peer-http-query).
Numerous additional metrics are now also supported, giving even greater
introspection into your cluster.
