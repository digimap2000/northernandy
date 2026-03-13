import type { CollectionEntry } from "astro:content";

export type ArchiveCollection =
  | "projects"
  | "logs"
  | "notes"
  | "reference"
  | "derivedSocial"
  | "derivedScripts";

export type ArchiveEntry =
  | CollectionEntry<"projects">
  | CollectionEntry<"logs">
  | CollectionEntry<"notes">
  | CollectionEntry<"reference">
  | CollectionEntry<"derivedSocial">
  | CollectionEntry<"derivedScripts">;

export function withBase(path: string) {
  const base = import.meta.env.BASE_URL || "/";
  if (path === "/") {
    return base;
  }

  return `${base.replace(/\/$/, "")}${path}`;
}

export function buildEntryUrl(collection: ArchiveCollection, id: string) {
  const routes = {
    projects: "/projects",
    logs: "/logs",
    notes: "/notes",
    reference: "/reference",
    derivedSocial: "/derived/social",
    derivedScripts: "/derived/scripts"
  } satisfies Record<ArchiveCollection, string>;

  return withBase(`${routes[collection]}/${id}/`);
}

export function formatDate(date?: Date) {
  if (!date) {
    return "Undated";
  }

  return new Intl.DateTimeFormat("en-GB", {
    year: "numeric",
    month: "short",
    day: "numeric"
  }).format(date);
}

function rank(entry: ArchiveEntry) {
  return entry.data.updated?.getTime() ?? entry.data.date.getTime();
}

export function sortEntries<T extends ArchiveEntry>(entries: T[]) {
  return [...entries].sort((a, b) => {
    const byDate = rank(b) - rank(a);
    if (byDate !== 0) {
      return byDate;
    }

    return a.data.title.localeCompare(b.data.title);
  });
}

export function isProjectLanding(entry: CollectionEntry<"projects">) {
  return entry.data.type === "project" || !entry.id.includes("/");
}

export function isProjectLog(entry: CollectionEntry<"projects">) {
  return entry.data.type === "project-log" || entry.id.includes("/experiments/");
}

export function getProjectSlug(entry: CollectionEntry<"projects">) {
  return entry.data.project ?? entry.id.split("/")[0];
}

export function collectionLabel(collection: ArchiveCollection) {
  const labels = {
    projects: "Projects",
    logs: "Logs",
    notes: "Notes",
    reference: "Reference",
    derivedSocial: "Derived Social",
    derivedScripts: "Derived Scripts"
  } satisfies Record<ArchiveCollection, string>;

  return labels[collection];
}

