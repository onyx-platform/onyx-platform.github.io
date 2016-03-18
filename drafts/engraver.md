---
layout: post
title:  "Engraver: A Tool for Managing Onyx Clusters"
date:   2016-03-22 00:00:00
categories: jekyll update
author: Michael Drogalis
---

We're pleased to announce the release of our newest creation - [Engraver](https://github.com/onyx-platform/engraver). Engraver is a tool for managing and deploying [Onyx](https://github.com/onyx-platform/onyx) cluster infrastructure. We've developed Engraver to address *operational concerns*, one of the most painful aspects of dealing with large distributed applications in any ecosystem. Engraver is our recommended approach for building production-grade clusters, though its usage remains entirely optional. In this post, we'll discuss what Engraver is, why we built it, and how you can get up and running in just a few minutes.

-----------------

<p align="center">
  <img width="70%" src="{{ '/assets/images/engraver/engraver_describe.png' | prepend: site.baseurl }}">
</p>

-----------------

### Motivation

One of the most difficult challenges in software engineering is taking your system from the developer's laptop all the way to the data center with minimal disruptions and surprises along the way. When we look at the plethora of tools that are available to us to ease the journey, we can label them as either being more *general* or *specific* dev-ops tools.

DevOps tools like [Ansible](https://www.ansible.com/), [Chef](https://www.chef.io/), and [Puppet](https://puppetlabs.com/) have become sufficiently advanced and are now common-place among most teams. Containers have begun to mature, opening up a brand new world of portability ruled by [Docker](https://www.docker.com/). Execution environments such as [Mesos](http://mesos.apache.org/) and [Kubernetes](http://kubernetes.io/) continue to stabilize, offering large-scale management capabilities previously known only to big-house engineering names. These tools are agnostic to any particular implementation language, operating system, or development platform - hence making them generalized.

At the other end of the spectrum, we can talk about tools that aid in the deployment of specific types of technologies. [Clojars](clojars.org/) is a perfect example. We don't think about it often, but Clojars is a fit-to-purpose tool for moving jars to a binary repository in the cloud that we use all the time for release orchestration. Combined with Leiningen's ability to search a set of repositories, this set up works so well that most people don't think about it anymore.

There has been significantly less progress on the front of creating good technology-specific deployment tooling. While we've seen a blaze of activity on the generalized direction, the situation remains virtually stagnant at the other end of the spectrum. Since Engraver is a tool to aid in building Onyx cluster infrastructure, we'll drill in on the tooling that's beneficial for distributed computation networks.

Since the early days of Hadoop, the defacto way of moving your application specific code (an uberjar, most of the time) onto worker machines has been to "submit" your application to a master node, which in turn orchestrates the transfer of your binary artifact to the worker machines through something similar to SCP. This method of release coordination was mainly driven by the desire to colocate "code" with "data" in the Hadoop world - so it made sense at the time to take control over the deployment process by baking it straight into the platform. Fast forward 15 years to 2016. Network speeds in data centers have become fast enough to make the difference between local and remote disks transparent.

<p align="center">
  <img width="50%" src="{{ '/assets/images/engraver/scp.svg' | prepend: site.baseurl }}">
</p>

Despite this fundamental pivot in hardware performance, the "SCP-your-jar" approach to release orchestration remains the dominant process for deployment. Hadoop has not moved past this ancient practice, but more than that - we also see the same pattern in Storm, Spark, Flink, and other technologies. Onyx was designed from day 1 to be used as a library, thus overcoming the dangers of locking development teams into a One True deployment methodology. Since Onyx's creation more than 2 years ago, the decision to omit an internal deployer has paid off in spades. Cloud environments have become *more* ephemeral and 3rd party interactions even *more* pervasive. Containers completely sealed the deal.

### General Tools Aren't Enough

It's fair to question whether a whole new tool, such as Engraver, is necessary. Can't we simply use existing generalized tools like Ansible and Chef and get along okay? For the most part, we can be relatively successful about getting 80% of our system smoothly deployed. The remaining 20%, which is typically specific to the application platform that's being used, can become brutally painful without the right tooling in place. Having run Onyx (and similar systems) in production a number of times, similar situations inevitably arise that unnecessarily skyrocket the cost of these projects.

#### Networking

Services and applications need to have all of their ports properly forwarded on the correct network interfaces over their correct protocols. No one enjoys playing the game of running `netcat` over machines in your cluster to brute-force hunt down port exposure problems. Network configuration virtually always falls on the developer to handle - even if the set of services being deployed is the same each time. Engraver ships a number of modular services that we've preconfigured ahead of time to automatically adjust network settings for smooth communication.

#### Security

Did you lock down all of your ports? Can outside machines talk to boxes in your data center? Are your CIDR blocks correct? It's all too easy to temporarily modify a security setting to temporarily enable network traffic, only to forget about it later. Again - network level security continues to be the burden of the developer, even when we can anticipate a service's network availability needs. Engraver locks everything down by default, and automatically adjusts security settings based on the services that you use in your project.

#### Highly Available Configuration

Going to freak out if you have to configure ZooKeeper or Kafka for high availability one more time? Me too. Docker doesn't entirely solve this problem because public container images are frequently lower quality than one would hope, and because of variations in network topologies. Engraver services are preconfigured in clustered, highly available mode. Your failover is ready.

#### Machine-level Scaling

It's become easy enough these days to scale the amount of resources that a single application receives, but how about automatically provisioning new machines from a cloud environment and adding them to the mix? How easily can you fetch more physical resources and notify all existing services? It's not always as smooth as we'd hope. Engraver lets you scale your cluster with one simple command. Everything else just works when you scale up or down (thanks to a combination of Ansible and Docker under the hood!)

### The Best of Both Worlds

Engraver overcomes these challenges by walking a careful line between being a generalized tool for cluster infrastructure management and a specific tool for having tight control over Onyx itself. Engraver provides an API that wraps around Ansible, thus leveraging all the benefits of an existing tool without having to recreate it from scratch. It exposes a small number of commands that take an application from its infancy all the way to running in the cloud.

<p align="center">
  <img width="60%" src="{{ '/assets/images/engraver/lifecycle.svg' | prepend: site.baseurl }}">
</p>

#### Preconfigured Services

Engraver manages a set of modular, preconfigured services that run out of the box as you'd want to to at scale. When you create a new Engraver project, you can instantly start using ZooKeeper, Kafka, and Onyx in a highly available mode. We've introduced a higher level of abstraction called a *machine profile* that acts as a central point of scalability. Machine profiles let you seamlessly colocate services and unify the pieces of your architecture to be more manageable.

<p align="center">
  <img width="70%" src="{{ '/assets/images/engraver/concepts.svg' | prepend: site.baseurl }}">
</p>

#### Network Security Done Right

Finally, Engraver understands production-grade networking in AWS out of the box. We lock everything down by default, and intelligently widen security groups as services are introduced. Ports are auto-discovered at the provisioning stage, removing a major impediment to teams that want to use scalable container technology.

<p align="center">
  <img width="70%" src="{{ '/assets/images/engraver/profiles.svg' | prepend: site.baseurl }}">
</p>

### Trying it Out

Want to take Engraver for a spin? Follow along with [our tutorial](https://github.com/onyx-platform/engraver#tutorial) and you'll have a production-grade Onyx cluster running in AWS in just a few minutes.

Thanks for following along. If you want to hear more, sign up for [our newsletter](http://pivotbase.us9.list-manage.com/subscribe?u=2f6846db1c437eae3c6d5af34&id=2ce27a68df). We hope this helps you run Onyx more effectively and makes operations pleasant!
