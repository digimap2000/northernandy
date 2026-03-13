---
title: "Archive pivot"
description: "Repository-wide log for the move to a content-first archive."
date: 2026-03-13
updated: 2026-03-13
project: "repository-foundation"
tags:
  - repository
  - archive
status: active
type: log
summary: "Established the root-level archive structure and isolated the Astro renderer."
---

# Context

This was the day the repository stopped being scaffolded as a website and started being scaffolded as an archive.

# Changes made

- established the canonical `content/` tree
- separated shared media into durable `assets/` folders
- moved all frontend implementation into `site/astro/`
- documented a migration-safe content model

# Observations

The folder tree now explains the system without requiring build knowledge.

# Problems

None yet beyond the normal cost of reorganising a fresh scaffold.

# Evidence

- `README.md`
- `content/`
- `site/astro/`

# Next steps

- add the first real project archive
- keep templates intentionally boring
- treat derived outputs as generated material, not record-keeping

