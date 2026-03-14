---
title: "Project bootstrap and reference capture"
description: "Initial archive setup for the Comau NS16 retrofit."
date: 2026-03-13
project: "comau-ns16-retrofit"
tags:
  - robotics
  - archive
  - audit
status: active
type: project-log
summary: "Created the project folder, documented initial scope, and captured first reference distinctions."
---

# Context

Before any hardware work progresses, the project needs a durable written baseline that separates confirmed facts from assumptions and keeps future experiments grounded.

# Changes made

- created the canonical project folder for the Comau NS16 retrofit
- added overview, mechanical and electrical, stepper control, and AI boundary pages
- added project-specific reference pages for confirmed facts, family-reference data, and safety boundaries
- established the first progress log entry

# Observations

The biggest early risk is not lack of ideas but lack of disciplined fact separation. The project already benefits from clearly distinguishing user-confirmed scope from family-level catalogue data and from future machine-audit findings.

# Problems

- the exact machine variant is not yet confirmed
- hardware inventory, cabinet documentation, and motor-feedback details still need direct inspection
- the eventual stepper strategy cannot be validated until the mechanical load path is better understood

# Evidence

- `content/projects/comau-ns16-retrofit/index.md`
- `content/projects/comau-ns16-retrofit/reference/project-facts.md`
- `content/projects/comau-ns16-retrofit/reference/family-reference.md`

# Next steps

- inspect the robot and controller cabinet directly
- capture nameplate, model suffix, and axis hardware details
- document the original control and safety chain before modifying it
- start axis-by-axis feasibility notes for the stepper conversion

