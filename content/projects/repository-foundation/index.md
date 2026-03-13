---
title: "Repository Foundation"
description: "Content-first archive architecture for preserving project knowledge independent of the renderer."
date: 2026-03-13
updated: 2026-03-13
project: "repository-foundation"
tags:
  - archive
  - astro
  - documentation
status: active
type: project
summary: "Establish a durable archive that can outlive any frontend stack."
aliases:
  - "archive-foundation"
---

# Repository Foundation

This project defines the structure of the archive itself.

The goal is to keep every durable fact, decision, experiment, and lesson in plain Markdown outside the site implementation. The Astro layer exists to render the archive, not to own it.

## Goals

- Keep canonical project records readable without a build step.
- Separate derived social output from source material.
- Preserve structure that works in Git, Obsidian, and future static site generators.
- Make AI-assisted transformation straightforward because the source is explicit and well-labelled.

## Current state

The repository now has:

- a frontend-agnostic `content/` tree
- neutral schemas in `schemas/`
- repeatable authoring templates in `content/reference/templates/`
- helper scripts for project, log, and derived-social creation
- an Astro renderer isolated inside `site/astro/`

## How to use this project folder

- `overview.md` explains the architectural intent.
- `experiments/` holds dated implementation logs.
- `failures.md` records design mistakes and drift.
- `lessons-learned.md` distils what should persist across future migrations.

