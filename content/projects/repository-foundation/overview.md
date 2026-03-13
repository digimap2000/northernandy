---
title: "Overview"
description: "Why the archive is content-first and renderer-second."
date: 2026-03-13
updated: 2026-03-13
project: "repository-foundation"
tags:
  - archive
  - architecture
status: active
type: project-page
summary: "Design the repository so the archive survives site rewrites."
---

# Context

This repository is not a portfolio site with some Markdown attached to it. It is a preservation archive with a public site layered on top.

## Core decision

All durable content lives under `content/`. The site implementation stays in `site/astro/` and is free to change later.

## Why this matters

- The archive remains browsable in raw form on GitHub.
- Authors only need Markdown, assets, and predictable templates.
- AI can operate on stable source files without learning framework syntax.
- A future migration should mostly involve rebuilding the renderer.

## Constraints

- Use generic front matter only.
- Avoid framework-specific Markdown features in canonical content.
- Keep links human-readable and folder structures obvious.
- Keep derived media clearly marked as non-canonical.

