---
title: "Comau NS16 Retrofit"
description: "Conversion of a Comau NS16 industrial robot to modern stepper-based control with AI-assisted tooling and interfaces."
date: 2026-03-13
updated: 2026-03-13
cover: "/assets/images/projects/comau-ns16-retrofit.svg"
project: "comau-ns16-retrofit"
tags:
  - robotics
  - retrofit
  - stepper
  - ai
  - industrial-robot
status: active
type: project
summary: "Retrofit a Comau NS16 robot with modern motion control, clean documentation, and constrained AI integration."
aliases:
  - "comau-ns16-modernisation"
---

# Project summary

This project is the conversion of a Comau NS16 industrial robot from its legacy control environment to a modern stepper-based control stack, with AI used as an assistive layer for documentation, diagnostics, and higher-level interaction.

## Goals

- establish a documented electrical and mechanical baseline for the robot
- replace or bypass obsolete control layers with a modern, inspectable motion stack
- keep safety-critical behaviour deterministic and separate from AI-assisted features
- preserve the full retrofit process as a durable archive, not just a final showcase

## Current state

The archive structure is in place and the first reference pages capture what is confirmed, what is only a family-level reference, and what still needs direct inspection of the physical machine.

## Structure

- `overview.md`
- `mechanical-and-electrical.md`
- `stepper-control.md`
- `ai-integration.md`
- `reference/`
- `experiments/`
- `failures.md`
- `lessons-learned.md`

## Working rule

No design note, social summary, or AI-generated draft should become the only place where important facts about this robot are recorded.
