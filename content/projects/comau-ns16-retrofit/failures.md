---
title: "Failures"
description: "Known wrong turns, assumptions, and failure modes for the Comau retrofit."
date: 2026-03-13
updated: 2026-03-13
project: "comau-ns16-retrofit"
tags:
  - robotics
  - failures
  - retrofit
status: active
type: project-page
summary: "Capture mistakes and risky assumptions before they are forgotten."
---

# What could go wrong

## Treating model-family data as machine-confirmed data

The project already has external family-reference information for the NS-16 line, but that must not be mistaken for machine-confirmed facts about this specific robot.

## Underestimating safety-chain complexity

Industrial robot retrofits fail when safety interlocks, brakes, contactors, and limit logic are treated as minor details instead of first-class design constraints.

## Conflating AI features with motion control

AI can help with diagnostics, operator interaction, and documentation. It should not be allowed to blur the deterministic boundary around motion, interlocks, or emergency behaviour.

## Purpose of this page

Add failed ideas, incorrect assumptions, dead-end hardware choices, and unsafe simplifications here as the project progresses.
