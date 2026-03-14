---
title: "Safety and Control Boundaries"
description: "Reference notes on what must remain deterministic during the retrofit."
date: 2026-03-13
updated: 2026-03-13
project: "comau-ns16-retrofit"
tags:
  - robotics
  - safety
  - control
status: active
type: reference
summary: "Keep a durable statement of which functions are safety-critical and cannot be delegated to AI or informal workflow."
---

# Safety-critical areas

- emergency stop chain
- power isolation and contactor logic
- brake release and brake failure handling
- limit switches and hard-stop behaviour
- fault handling that leaves the machine in a safe state

# Control boundary

Motion control, interlocks, and machine stops must remain deterministic, inspectable, and testable without any AI dependency.

# AI boundary

AI may assist with analysis, search, summarisation, and operator support, but not with safety authority.

