---
layout: post
title:  "Onyx at Scale"
date:   2015-06-13 00:00:00
categories: kubernetes deployments
author: Gardner Vickers
---

# Onyx at Scale
Onyx has never tried to push a deployment strategy on the user, this has
been a core principal since day one. Partly a side-effect of Onyx's master-less
design, and partly because we did not feel we had a great solution that would
play well with the multitude of distributed apps in a modern data processing
pipeline.

When Onyx was starting out, orchestration **tools** dominated the landscape.
Projects like Chef, Puppet, and Ansible offered variations on the same theme,
allowing developers to manage their data centers with a familiar language and
complementary abstractions. Docker was gaining in popularity too, offering
immutable environments for applications.

Around this time, there were numerous attempts at marrying the two technologies,
developers wanted the benefits of flexible orchestration and managment with the
assurance their individual app environments would not change out from under them.
They wanted declarative interfaces for managing what used require highly
procedural managment. Quite a few platforms emerged promising this.

Onyx, like any distributed system, faces numerous challenges around scheduling,
state, and fail-over. We also have clearly defined interaction and control over
the processes we manage. Applications in the modern data center are rarely so
constrained. The number of different services making up a companies environment
vary greatly in resource needs, scheduling concerns, fail over requirements, and
idiosyncratic behaviors. Orchestrating infrastructure is, in many ways, far more
difficult than orchestrating a high-speed stream/batch computation.

## Data Center as an Operating System

Today, the landscape has begun to stabilize, there are a few main offerings
in the declarative container orchestration space.
- [Mesos/Marathon](http://mesos.apache.org/)
- [Swarm](https://docs.docker.com/swarm/)
- [**Kubernetes**]()

The trade offs between these systems can (and do) fill multiple blog
posts. Onyx has been successfully implemented on top of all three (and others!)
but due to the projects design sensibilities and serendipitous compatibility
with our architecture, Kubernetes sticks out.

The Kubernetes project, Greek for "Ship Captain", was born out of research at
Google on their Borg and Omega container orchestration frameworks. Using
declarative files to describe different aspects of your data center, it
offers abstractions for nearly every type of application. It provides a
layer over your underlying infrastructure that allows you to use the same API's
regardless if you're running on AWS, GCE, or locally.
