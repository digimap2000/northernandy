---
title: "Archive architecture pivot"
description: "Move from a renderer-first scaffold to a content-first archive structure."
date: 2026-03-13
project: "repository-foundation"
tags:
  - archive
  - migration
  - astro
status: active
type: project-log
summary: "Restructured the repository so content lives outside the site implementation."
---

# Context

The repository needed to pivot from a site-first scaffold to an archive-first structure before more material accumulated.

# Changes made

- moved canonical material into `content/`
- separated derived outputs into `content/derived/`
- isolated Astro inside `site/astro/`
- added neutral schemas and templates
- added helper scripts for repeatable authoring

# Observations

Once the content tree is separated from the renderer, the repository becomes easier to reason about. The writing model is visible directly in the folders instead of being hidden in framework conventions.

# Problems

Asset serving requires an explicit site-layer sync step because the renderer is intentionally isolated from the canonical root tree.

# Evidence

- `content/projects/repository-foundation/`
- `schemas/content-frontmatter.schema.json`
- `site/astro/src/content.config.ts`

# Next steps

- start adding real project folders
- add more reference templates as patterns stabilise
- keep testing whether raw repo browsing remains comprehensible

