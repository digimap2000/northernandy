---
title: "AI Integration Boundary"
description: "Where AI is useful in the project and where it should remain out of the control loop."
date: 2026-03-13
updated: 2026-03-13
project: "comau-ns16-retrofit"
tags:
  - robotics
  - ai
  - systems
status: active
type: project-page
summary: "Define AI as an assistive layer for analysis and interface work, not a substitute for deterministic machine control."
---

# Intended uses

AI can be valuable in this project when it helps interpret, summarise, or navigate complex information.

## Useful roles

- turning logs and notes into clearer summaries
- helping compare experiments across time
- extracting structured information from cabinet photos, labels, and documentation
- assisting with operator-facing interfaces and higher-level task descriptions

## Non-negotiable limits

AI should not be trusted as the authoritative source for:

- emergency-stop handling
- hard real-time motion control
- final safety decisions
- undocumented hardware assumptions presented as fact

## Good boundary

Use AI above the deterministic control layer, never in place of it.

