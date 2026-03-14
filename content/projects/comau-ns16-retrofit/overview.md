---
title: "Overview"
description: "Scope, motivation, and boundaries for the Comau NS16 retrofit."
date: 2026-03-13
updated: 2026-03-13
project: "comau-ns16-retrofit"
tags:
  - robotics
  - retrofit
  - scope
status: active
type: project-page
summary: "Define what this retrofit is trying to achieve and which boundaries matter from the start."
---

# Context

The Comau NS16 project is not just a controller swap. It is a full documentation and modernisation effort around an industrial robot platform that needs to become understandable, maintainable, and extensible again.

## Background

Industrial robots of this age can remain mechanically valuable long after their original controller stacks become awkward to maintain, hard to integrate, or functionally limiting. This project treats the robot as a durable machine worth preserving, while replacing the control and integration layers with something transparent and serviceable.

## Boundaries

- In scope:
  - hardware identification
  - control architecture redesign
  - stepper-drive integration planning
  - wiring, interlock, and cabinet documentation
  - AI-assisted interfaces that sit above deterministic control
- Out of scope:
  - letting AI directly own safety-critical control decisions
  - treating undocumented assumptions as facts
  - burying key knowledge in derived media or demo copy

## Unknowns to resolve early

- exact model suffix and mechanical variant
- original controller generation and cabinet state
- existing motor, brake, and feedback hardware per axis
- which parts of the original safety chain can be preserved versus replaced
