---
layout: post
title:  "A Preview of Pyroclast: Enhanced Big Data Processing with Simulation"
date:   2017-02-08 00:00:00
categories: jekyll update
author: Michael Drogalis
---

Distributed Masonry is pleased to offer the first public look at our newest product: [Pyroclast](http://pyroclast.io/). Pyroclast is a fully-hosted cloud PaaS that extends the Onyx Platform’s core mission: to make large scale distributed data processing more economical for businesses. Working with high volumes of data typically involves curating a highly skilled, high salaried team of engineers, a significant investment in tooling, and a lengthy delivery schedule between the project start date and return on investment.

Today’s post will dive into one of Pyroclast’s novel technical innovations for reducing the cost of working with big data: Simulation. If you’re interested in what you see in this post, you can [apply for early access](https://docs.google.com/forms/d/e/1FAIpQLSfdUSjnM5yquDXRbGfDBwkzbF9ICQhOvkFm3E1fj74cVTnJxA/viewform) to Pyroclast or [request a demo](https://docs.google.com/forms/d/e/1FAIpQLSfdUSjnM5yquDXRbGfDBwkzbF9ICQhOvkFm3E1fj74cVTnJxA/viewform).

### The Status Quo

When we take a look at what makes any activity expensive, the first thing to do is understand where we’re spending the majority of our time. In the construction and verification of high volume data pipelines, we assert that companies spend a large fraction of their time waiting. A number of activities involved in the creation of data pipelines are inherently slow, thus causing dead time.

We categorize the prototypical stages of developing distributed data pipelines into the following:

- Configuration and code authoring

- Compilation

- Testing

- Deployment

- Measurement

As in the usual model of single-threaded, localized programming, engineers write, test, and compile code in a number of iterations and loops as they make progress. In terms of dead time, these activities are relatively efficient—particularly in dynamic environments that support read-eval-print loops.

The catch with writing *distributed* data pipelines is that compilation and deployment are painfully slow stages to pass through. In JVM environments, for example, compilation typically requires assembling the application and its dependencies into an uberjar. For non-trivial applications, this creates a lag on the order of minutes. Moreover, because we’re working in a distributed context, copies of the application package must be synced to all the nodes in the cluster—producing a lag of similar magnitude. Because the latter depends on the former, these phases cannot be pipelined. Hence: engineers working with big data tools end up spending a lot of their day checking Twitter waiting for something to finish.

### What Can Possibly Go Wrong?

From a process perspective, the deterministic expense of a full compile/deploy cycle of a data pipeline application might seem like a one-time cost—something that is only done once we are absolutely sure our application is correct. In the real world, we tend to perform this cycle far more frequently. We believe that we have a correct program, only to repeatedly watch it fail in its natural habitat - a networked environment. A common reason for defects sneaking into applications is that, much like single threaded programming, bugs tend to exist at the *edges* of components. Integration testing is a notoriously difficult exercise, and this effect is exacerbated when a localized execution environment differs from its fully distributed runtime. What seems a reasonable facsimile for development may prove to be chimerical, at the cost of further development cycles at best, and production defects at worst.

Pyroclast chooses to overcome this difficulty by utilizing *Simulation*. Simulation, as a general concept, allows us to iterate on a small scale, yet accurate, model of a full scale operation. In effect, Pyroclast’s Simulation offers a significantly shorter feedback cycle that makes it easier to explore scenarios and correct defects at the time of their creation. 

### Taking Feedback from Minutes to Milliseconds

Short feedback cycles means increased visibility and less wasted time. In Pyroclast, data pipelines are expressed and visualized as directed, acyclic graphs of inputs, functions, and outputs.

<hr/>

<img src="{{ '/assets/images/pipeline.png' | prepend: site.baseurl }}">
*A data pipeline that reads historical Wikipedia page view information from S3 and rolls up parsed search terms.*

<hr/>

With a pipeline created in Pyroclast, either through the in-browser editor, or uploaded programmatically, you have access to the *Simulator*. The Simulator is a visualization of the *lineage*, also known as *provenance*, of records of data that pass through your data pipeline. When a single record is fed through the Simulator, the corresponding inputs and outputs of every node in the pipeline will be displayed. As we discussed earlier, defects tend to situate themselves at the *edges* of a components. Pyroclast’s simulator visualizes and updates each edge on every keystroke.

<hr/>

<img src="{{ '/assets/images/data-typeahead.gif' | prepend: site.baseurl }}">
*Typing data in the simulator updates its lineage trace in real time.*

<hr/>

This behavior applies in a reciprocal manner: changes to the data pipeline itself will instantaneously be reflected to the data inside the Simulator. In practice, one begins feel as if data is being *grown* from its origins.

<hr/>

<img src="{{ '/assets/images/pipeline-typeahead.gif' | prepend: site.baseurl }}">
*Adjusting the data pipeline automatically reruns the Simulator on every change.*

<hr/>

Feedback is instant - often on the order of single-digit milliseconds. Pyroclast is able to achieve this by virtualizing distributed activity inside the browser. When the Simulation is run on each keystroke, **no internet activity takes place**. Pyroclast’s Simulation makes informal reasoning a breeze, but has paved the way to formal verification features like mass data scenario testing, dynamic specifications, and invariant assertions.

### How It Works

Pyroclast is able to offer a fluid simulation experience by building on top of Onyx’s programming model. Onyx programs are modeled by EDN data structures - and nothing else. Leaving simulation aside for the moment, as data pipelines are crafted inside Pyroclast, a backing Onyx representation is maintained in memory. On every keystroke and mouse click, **Pyroclast dynamically recompiles an underlying distributed program**. The compilation is fast - typically a couple of milliseconds. This, however, isn’t enough to achieve a fully interactive experience. The backing Onyx model needs an execution environment.

Onyx “proper” runs on the Java Virtual Machine - a server side technology. onyx-local-rt is a stateless, threadless implementation of Onyx that can run on either the JVM or in JavaScript thanks to the Clojure programming language. onyx-local-rt shares virtually all of its code with Onyx through Clojure’s conditional reader, meaning that it is negligible cost to ensure that both environments are lock-step in their behavior.

Wielding Pyroclast’s on-the-fly compiler, we can capture changes in both data and code to trigger a fresh simulation cycle near-instantly. Some additional steps have been taken to cull intermediate data values (e.g. edge display) and allow backtracking from output data back through to its inputs.

### What if Demo Day was Day 1?

In this post, we explored the most basic features of Pyroclast’s Simulator. Simulation is a powerful technique for cutting the feedback cycle that engineers traditionally endure from minutes down to milliseconds. Instantaneous feedback behind a unified data processing application means that members of all roles your business can transform and explore high volumes of real time data. Instead of mobilizing an engineering team and waiting 3 months for the first demo, simulation lets you demo on Day 1.

We’ve barely scratched the surface in today’s discussion. In future posts, we’ll dive deeper into more Pyroclast features, including a realtime visualization of the Google Dataflow/Apache Beam model, seamless transition between realtime and batch computation, deep parametric deployments, and more. If you liked what you saw in this post, you can [apply for early access for your company](https://docs.google.com/forms/d/e/1FAIpQLSfdUSjnM5yquDXRbGfDBwkzbF9ICQhOvkFm3E1fj74cVTnJxA/viewform) or [request a demo](https://docs.google.com/forms/d/e/1FAIpQLSfdUSjnM5yquDXRbGfDBwkzbF9ICQhOvkFm3E1fj74cVTnJxA/viewform).