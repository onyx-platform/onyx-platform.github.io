---
layout: post
title:  "Doubling Down on Onyx"
date:   2016-02-24 00:00:00
categories: jekyll update
author: Michael Drogalis
---

## Doubling Down on Onyx

Distributed systems are hard. Building [Onyx](https://github.com/onyx-platform/onyx) - the high performance, fault tolerant, scalable distributed data processing platform - has been no exception. From day one when I wrote the first line of code, I realized that I was investing in a long term engineering effort targeted at commerical adoption. Since then, I've been lucky enough to have dozens of wonderful developers contribute code, documentation, tutorials, and other materials. While I always had big things in mind for Onyx, its growth has wildly exceeded my expectations. Onyx core alone comprises more than 18,000 lines of Clojure. The supporting plugins and associated materials make up over an 10,000 additional lines.

All of this activity has breathed life into ideas that I've been loudly proclaiming for the last 3 years. There is tremendous benefit in dismantling what we currently understand as the model for distributed streaming and batch computation. Onyx builds on the fundamental idea that programs with fewer overlapping dependencies are easier to build, understand, and maintain. The platform carefully takes apart the elements of distributed computation (flow, parameterizarion, side effects, process, and so forth) and offers a thoughtful API for composing all of the pieces back together. Over time, we've taken ideas from personal experience, academic research, and previous products. We slowly put all of them together to design a relatively complete and robust API for expressing complex distributed activity. The result is a product that is *genuinely* different from other big names like Spark, Flink, and Storm in ways other than underlying mechanics.

This project has been the apple of my eye since its inception. I've been lucky enough to have a personal situation that's allowed me to dedicate large amounts of my free time to working on it. I've been even luckier to be able to staff a development team to support Onyx full-time, despite having never taken outside funding. The leap of faith that [Lucas Bradstreet](https://twitter.com/ghaz) and [Gardner Vickers](https://twitter.com/garmanarnar) took to push Onyx forward as a full-time gig has been beyond anything I could ask for.

My personal circumstances have never allowed me to work on Onyx as my full time job. It's becoming increasingly apparent, however, that taking Onyx to the next level is going to require more energy than I can dedicate in my spare time. I pondered the decision carefully for a long time, but ultimately I knew what I had to do. **Starting next week, I'll be joining the rest of the Onyx team to develop and support Onyx full-time.** If you like what you've already seen, you're going to thoroughly enjoy what will be coming in the next few months. We'll be spending our increased capacity on non-JVM language integration, as well as beefing up the performance of our streaming engine.

I built Onyx because it enables users to develop dramatically simpler solutions to complex problems at *significantly lower costs*. Everything that we're working on in our roadmap for the next year is aimed at making traditionally difficult pieces of the software stack (analytics pipelines, distributed workflows, low latency streaming) more tractable for commercial interests.

I can confidently say that Onyx allows users to design applications that are impossible on other platforms, mostly due to its unique abstraction model - and I'm putting my money where my mouth is. Get in touch at [support@onyxplatform.org](mailto:support@onyxplatform.org) for a free session to discuss with us about how Onyx can push your systems further. We're ready to partner up with other groups, bringing along deep wells of experience in distributed systems design, performance tuning, garbage collection tuning, monitoring, and more.

Here's to Onyx propelling simpler, more reliable stacks, and a very bright future!

-- [@MichaelDrogalis](http://www.twitter.com/MichaelDrogalis)