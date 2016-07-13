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

The trade offs between these systems could (and do) fill multiple blog
posts. Onyx has been successfully implemented on top of all three (and others!)
but due to the projects design sensibilities and serendipitous compatibility
with our architecture, Kubernetes sticks out.

The Kubernetes project, Greek for "Ship Captain", was born out of research at
Google on their Borg and Omega container orchestration frameworks. Using
declarative files to describe different aspects of your data center, it
offers abstractions for nearly every type of application. It provides a
layer over your underlying infrastructure that allows you to use the same API's
regardless if you're running on AWS, GCE, or locally.

The amount of leverage this gives you is immense. However, getting it right
still requires knowledge of how different components in your applications
interact.

### Zookeeper
Zookeeper is the heart of many distributed systems. An Apache project with 15+
years of battle under it's belt, it certainly has stood the test of time.
Unfortunatly, it shows its age when it comes to deployment.

Many of these problems have been solved with Zookeeper 3.5.0 introducing
dynamic configuration, removing the requirement that all cluster members
are known globally at startup. Zookeeper still requires a notion of unique
identity, something that is incompatible with Docker's ["Cattle"](https://blog.engineyard.com/2014/pets-vs-cattle)
over "Pets" approach to containers and hosts.

Keeping with the analogy, Kubernetes provides [PetSets.](http://kubernetes.io/docs/user-guide/petset/)
Petsets give us two important features that can be used to piece together
and identity for a container running Zookeeper. First, each [Pod](http://kubernetes.io/docs/user-guide/pods/)
is given an ordinal hostname that persists across crashes and restarts.
This is to say given a PetSet of 3 Zookeeper pods, Kubernetes will start

`zookeeper-1`,
`zookeeper-2`,
`zookeeper-3`

If `zookeeper-2` were to crash, Kubernetes will start a new pod with
`zookeeper-2` as the pod's hostname.

This is great for deriving identity, we now can parse our hostname to figure out
who we are, and other cluster members can use our hostname to lookup our IP
address. We still need a way to store our data between restarts. Luckily,
Kubernetes will restore any volumes that were mounted to a restarted PetSet
member.

The steps to setup Zookeeper are relatively straightforward.

First, we must query our Zookeeper service to see if there are any
entries for other PetSet pods. Kubernetes allows us to use the annotation
`service.alpha.kubernetes.io/tolerate-unready-endpoints: "true"` on our PetSet
service. This will create DNS `A`-records for each PetSet pod even if the pod
has not yet started. We'll end up with a list of routeable FQDN's.

For a PetSet of size 3, this will look like this.
`zookeeper-1.zookeeper.default.svc.cluster.local`,
`zookeeper-2.zookeeper.default.svc.cluster.local`,
`zookeeper-3.zookeeper.default.svc.cluster.local`

We will find the entry that matches our hostname, and write out to a volume our
ordinal id `zookeeper-<id>.zookeeper.default.svc.cluster.local`. This is Zookeepers
`myid` file.

We will then parse through the list of Pets, writing out Zookeeper configurations
for them `server.<id>=<peer>:2888:3888:observer;2181`. If we find our entry, we
set ourselves as a `participant` instead of an `observer`.

From the perspective of `zookeeper-2`, our Zookeeper config file will be:

```
server.1=zookeeper-1.zookeeper.default.svc.cluster.local:2888:3888:observer;2181
server.2=zookeeper-2.zookeeper.default.svc.cluster.local:2888:3888:participant;2181
server.3=zookeeper-3.zookeeper.default.svc.cluster.local:2888:3888:observer;2181
```

Finally, we'll start Zookeeper with this bootstrapping config and fire a cluster
reconfiguration. From the perspective of `zookeeper-2`, this looks like:

``` apacheconf
/opt/zookeeper/bin/zkCli.sh reconfig -add "server.2=zookeeper-2.zookeeper.default.svc.cluster.local:2888:3888:participant;2181"
```
