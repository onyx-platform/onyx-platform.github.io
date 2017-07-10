---
layout: post
title:  "onyx 0.10.0: Asynchronous Barrier Snapshotting"
date:   2017-07-10 00:00:00
categories: jekyll update
author: Lucas Bradstreet
---

We’re proud to announce Onyx 0.10.0, a major step forward for Onyx’s stream processing engine.

Onyx 0.10.0 is a rewrite of the messaging and fault tolerance mechanisms to support [Asynchronous Barrier Snapshotting (ABS)](https://github.com/onyx-platform/onyx/blob/0.10.x/doc/user-guide/architecture-low-level-design.adoc#asynchronous-barrier-snapshotting).

ABS provides numerous advantages over 0.9.x's fault tolerance mechanism.

* In order processing support.
* Exactly once processing, without expensive deduplication and user supplied ID keys.
* Much lower acking / fault tolerance overhead.
* Greatly improved performance, anywhere from 3-10X faster than onyx 0.9, depending on the use case.

Onyx 0.10 also brings the following improvements:

* [Resume points](https://github.com/onyx-platform/onyx/blob/0.10.x/doc/user-guide/resume-points.adoc): a new feature that make it simple to manage state between job runs. This allows for simplified deployment / upgrades of long running streaming jobs, simpler refactoring of jobs (e.g. split one job into two jobs, but keep the state for each respective part), and more.
* Triggers can now emit aggregates to downstream tasks via [`:trigger/emit`](http://www.onyxplatform.org/docs/cheat-sheet/latest/#trigger-entry/:trigger/emit).
* Improved fault tolerance and heartbeating. Peers perform [liveness checks](http://www.onyxplatform.org/docs/cheat-sheet/latest/#peer-config/:onyx.peer/subscriber-liveness-timeout-ms) on each other in addition to the existing ZooKeeper watches.
* Greatly simplified plugin interfaces. The input plugin interface in 0.9.x required developers to checkpoint any state. 0.10.0 provides this checkpointing for free.
* State checkpointing now supports S3. BookKeeper is no longer required for windowing/trigger support.
* Improved monitoring: prometheus metrics endpoints are provided via [onyx-peer-http-query](https://github.com/onyx-platform/onyx-peer-http-query). Numerous additional metrics are now also supported, giving even greater introspection into your cluster.
* Many other small improvements...

