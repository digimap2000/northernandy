---
title: "Content model"
description: "Neutral description of the archive structure and content types."
date: 2026-03-13
updated: 2026-03-13
tags:
  - reference
  - schema
status: active
type: reference
summary: "Define the conceptual model of the archive without tying it to Astro."
---

# Collections

## Canonical

- `projects`
- `logs`
- `notes`
- `reference`

## Derived

- `derived/social`
- `derived/scripts`

# Content types

- `project`
- `project-page`
- `project-log`
- `log`
- `note`
- `reference`
- `derived-social`
- `derived-script`

# Rules

- Canonical files must remain plain Markdown.
- Front matter should stay generic and portable.
- Derived material must be traceable back to canonical source content.
- The renderer may validate and display the archive, but it must not own it.

