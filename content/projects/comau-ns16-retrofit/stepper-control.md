---
title: "Stepper Control Architecture"
description: "Planned deterministic control boundary for the Comau retrofit."
date: 2026-03-13
updated: 2026-03-13
project: "comau-ns16-retrofit"
tags:
  - robotics
  - control
  - stepper
status: active
type: project-page
summary: "Record how modern stepper-based motion control is expected to replace or bypass the legacy stack."
---

# Control objective

Replace opaque or obsolete control layers with a motion system that can be inspected, debugged, and evolved without relying on undocumented vendor tooling.

## Deterministic boundary

The deterministic control layer should own:

- axis enable and disable behaviour
- motion planning and execution
- brake coordination
- homing and hard-limit logic
- fault detection and stop conditions

## Open technical questions

- which axes can be driven directly by steppers versus needing a different motor strategy
- what torque and speed margins are required at each joint
- how existing feedback hardware can be reused, adapted, or replaced
- whether the final architecture is fully closed-loop, hybrid, or staged during development

## Documentation rule

Every drive, breakout board, controller, and wiring choice should be recorded here before it becomes tribal knowledge.

