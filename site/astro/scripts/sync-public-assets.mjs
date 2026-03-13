import { cp, mkdir, rm, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const astroRoot = path.resolve(scriptDir, "..");
const repoRoot = path.resolve(astroRoot, "../..");
const generatedPublic = path.join(astroRoot, ".generated-public");
const contentRoot = path.join(repoRoot, "content");
const assetsRoot = path.join(repoRoot, "assets");

async function exists(target) {
  try {
    await stat(target);
    return true;
  } catch {
    return false;
  }
}

async function syncDir(source, target) {
  if (!(await exists(source))) {
    return;
  }

  await mkdir(path.dirname(target), { recursive: true });
  await cp(source, target, {
    recursive: true,
    filter: (entry) => !entry.endsWith(".md")
  });
}

await rm(generatedPublic, { recursive: true, force: true });
await mkdir(generatedPublic, { recursive: true });

await syncDir(assetsRoot, path.join(generatedPublic, "assets"));
await syncDir(contentRoot, generatedPublic);
