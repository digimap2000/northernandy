---
title: "Mechanical and Electrical Scope"
description: "Physical scope of the retrofit across axes, cabinet, power, and interlocks."
date: 2026-03-13
updated: 2026-03-13
project: "comau-ns16-retrofit"
tags:
  - robotics
  - electrical
  - mechanical
status: active
type: project-page
summary: "Define which physical parts of the robot and cabinet need to be documented before control changes begin."
---

# Context

This retrofit depends on understanding the machine as a physical system, not just as a motion target.

## Areas to document

- robot arm mechanical condition
- axis transmissions and backlash observations
- existing motors and brake hardware
- encoder, resolver, or other feedback devices
- cabinet power distribution
- contactors, relays, and safety-chain devices
- limit switches, homing references, and external I/O

## Why this matters

The control architecture is only credible if it maps cleanly onto the actual machine. Missing brake logic, unknown feedback hardware, or undocumented cabinet wiring will dominate the retrofit long before software polish matters.

## First-pass audit outputs

- axis-by-axis hardware inventory
- cabinet photo set
- labelled connector map
- mains and low-voltage power summary
- list of items to retain, replace, or isolate

