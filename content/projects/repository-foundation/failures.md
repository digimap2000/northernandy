---
title: "Failures"
description: "Record of architectural choices that worked against durability."
date: 2026-03-13
updated: 2026-03-13
project: "repository-foundation"
tags:
  - archive
  - failures
status: active
type: project-page
summary: "Keep a record of where the archive drifted toward renderer-coupled structure."
---

# Known failures and anti-patterns

## Renderer-first scaffolding

The first pass placed content directly into a Jekyll-shaped site. That would have made a future migration more expensive than it needed to be.

## Mixed concerns

Site templates, content files, and deployment assumptions were initially too close together. That design was removed in favour of a clean archive boundary.

## What this page is for

This file should record mistakes such as:

- metadata drift
- duplicated summaries that diverge from source material
- derived content becoming more complete than canonical records
- renderer-specific syntax leaking into archive Markdown

