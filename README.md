# northernandy

The archive is the product. The site is only a renderer.

This repository is structured so the long-term value lives in a durable Markdown archive, while the Astro site in `site/astro/` stays replaceable.

## Principles

- `content/` is the canonical archive.
- `site/astro/` is a presentation layer and can be replaced later.
- Derived output never becomes the only place useful information exists.
- Markdown stays plain, boring, and readable in Obsidian, GitHub, and local editors.
- Front matter stays generic and portable.

## Repository shape

```text
/
  content/
    projects/
    logs/
    notes/
    reference/
    derived/
      social/
      scripts/
  assets/
    images/
    diagrams/
    documents/
  site/
    astro/
  schemas/
  scripts/
```

## Canonical and derived content

Canonical content lives in:

- `content/projects/`
- `content/logs/`
- `content/notes/`
- `content/reference/`

Derived content lives in:

- `content/derived/social/`
- `content/derived/scripts/`

Rule: everything in `content/derived/` must be reproducible from canonical material.

## Front matter

Canonical Markdown uses minimal, portable front matter:

```yaml
---
title: "KUKA KR6 Retrofit"
description: "Industrial robot conversion project"
date: 2026-03-13
project: "kuka-kr6-retrofit"
tags:
  - robotics
  - retrofit
status: active
type: project-log
summary: "Servo tuning and encoder validation."
---
```

Allowed fields are documented in `schemas/content-frontmatter.schema.json`.

## Writing workflow

### Create a new project skeleton

```sh
./scripts/new-project kuka-kr6-retrofit "KUKA KR6 Retrofit"
```

### Create a new project experiment log

```sh
./scripts/new-project-log kuka-kr6-retrofit encoder-debugging "Encoder debugging"
```

### Create a derived social draft

```sh
./scripts/new-derived-social kuka-kr6-retrofit launch-carousel "Launch carousel"
```

Templates live in `content/reference/templates/` so the writing model stays visible in the archive itself.

## Astro site

The Astro implementation lives entirely in `site/astro/` and reads Markdown directly from the top-level `content/` tree.

### Local development

```sh
cd site/astro
npm install
npm run dev
```

### Build

```sh
cd site/astro
npm run build
```

The site build mirrors shared assets and non-Markdown attachments into a generated public directory at build time. Canonical content remains in the root archive.

## Deployment

GitHub Pages deployment is handled by `.github/workflows/pages.yml`, which builds `site/astro/` and publishes the generated `dist/` output on pushes to `main`.

## Migration test

If Astro is replaced later, the intended migration path is:

1. Keep `content/`
2. Keep `assets/`
3. Rewrite `site/`
4. Adjust build scripts
5. Continue

