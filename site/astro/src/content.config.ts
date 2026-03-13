import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const archiveTypes = [
  "project",
  "project-page",
  "project-log",
  "log",
  "note",
  "reference",
  "derived-social",
  "derived-script"
] as const;

const archiveSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  date: z.coerce.date(),
  updated: z.coerce.date().optional(),
  project: z.string().optional(),
  tags: z.array(z.string()).default([]),
  status: z.string().optional(),
  type: z.enum(archiveTypes),
  summary: z.string().optional(),
  aliases: z.array(z.string()).default([])
});

function normaliseId(entry: string) {
  return entry
    .replace(/\\/g, "/")
    .replace(/\.md$/, "")
    .replace(/\/index$/, "");
}

const projects = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: new URL("../../../content/projects", import.meta.url),
    generateId: ({ entry }) => normaliseId(entry)
  }),
  schema: archiveSchema
});

const logs = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: new URL("../../../content/logs", import.meta.url),
    generateId: ({ entry }) => normaliseId(entry)
  }),
  schema: archiveSchema
});

const notes = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: new URL("../../../content/notes", import.meta.url),
    generateId: ({ entry }) => normaliseId(entry)
  }),
  schema: archiveSchema
});

const reference = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: new URL("../../../content/reference", import.meta.url),
    generateId: ({ entry }) => normaliseId(entry)
  }),
  schema: archiveSchema
});

const derivedSocial = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: new URL("../../../content/derived/social", import.meta.url),
    generateId: ({ entry }) => normaliseId(entry)
  }),
  schema: archiveSchema
});

const derivedScripts = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: new URL("../../../content/derived/scripts", import.meta.url),
    generateId: ({ entry }) => normaliseId(entry)
  }),
  schema: archiveSchema
});

export const collections = {
  projects,
  logs,
  notes,
  reference,
  derivedSocial,
  derivedScripts
};
