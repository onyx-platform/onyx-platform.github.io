---
layout: post
title:  "Strapping in For a Jepsening"
categories: jekyll update
draft: true
author: Lucas Bradstreet
---

## Strapping in for a Jepsen'ing

[Onyx](https://github.com/onyx-platform/onyx), a high performance, distributed, fault tolerant, scalable data processing platform. Onyx programs are described using
immutable data structures, putting a powerful force in the hands of the developer to cross language and machine boundaries at runtime.

However, distributed systems are hardw Very hard. All of this power is useless
if you cannot trust your system to handle partitions correctly, connection
losses, killed nodes, consistency issues, etc.

From the beginning, Onyx has had a variety of unit tests, and integration
tests. Over time we have also added numerous property tests to the mix.
Our property tests stress our peer coordinator and cluster scheduler, and found
numerous bugs that would have been very hard to pickup by other testing
methods. These have allowed us to develop Onyx, and add complex features at a
great rate.

However, there are various forms of tests that are difficult to formulate, or
time consuming for developers to build. That said, a paper, [Simple Testing Can Prevent Most Critical Failures Yuan et. al.](http://www.eecg.toronto.edu/~yuan/papers/failure_analysis_osdi14.pdf)
found that almost all distributed systems failures can be reproduced with 3 or
fewer nodes.

Kyle Kingsbury's [Jepsen](https://github.com/aphyr/jepsen) software and [Call
Me Maybe](https://aphyr.com/tags/jepsen) series have been blazing a path to
better testing of distributed systems. Kyle has been dragging the distributed
systems world into a more consistent (and sleep friendly) future.

-- [Lucas Bradstreet](http://www.twitter.com/ghaz)
