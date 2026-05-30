import { copyFile, mkdir, readdir, readFile, rm, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { buildGuidePages } from "./render-guide.mjs";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const wikiRoot = path.resolve(scriptDir, "..");
const parentRepoRoot = path.resolve(wikiRoot, "..");
const bundledSourceRoot = path.join(wikiRoot, "source");
const usingBundledSource = await pathExists(path.join(bundledSourceRoot, "extracted", "structured"));
const sourceRoot = usingBundledSource ? bundledSourceRoot : parentRepoRoot;
const docsRoot = path.join(wikiRoot, "docs");
const publicExtracted = path.join(docsRoot, "public", "assets", "extracted");
const devPublicExtracted = path.join(wikiRoot, "public", "assets", "extracted");

const sourceWiki = usingBundledSource ? path.join(sourceRoot, "wiki") : path.join(sourceRoot, "docs", "wiki");
const sourceDocs = path.join(sourceRoot, "docs");
const sourceExtracted = path.join(sourceRoot, "extracted");

const generatedRootFiles = [
  "index.md",
  "cards.md",
  "card-catalog.md",
  "professions.md",
  "profession-catalog.md",
  "monsters.md",
  "monster-catalog.md",
  "buildings.md",
  "talents.md",
  "achievements.md",
  "mechanics.md",
  "resources.md",
  "resource-catalog.md",
  "original-analysis.md",
  "remaster-roadmap.md"
];
const generatedDirs = ["cards", "professions", "monsters", "mechanics", "buildings", "talents"];
const generatedWikiPages = new Set([
  "README.md",
  "cards.md",
  "card-catalog.md",
  "professions.md",
  "profession-catalog.md",
  "monsters.md",
  "monster-catalog.md",
  "buildings.md",
  "talents.md",
  "achievements.md",
  "mechanics.md",
  "resources.md",
  "resource-catalog.md"
]);

await mkdir(docsRoot, { recursive: true });
for (const filename of generatedRootFiles) {
  await rm(path.join(docsRoot, filename), { force: true });
}
for (const dirname of generatedDirs) {
  await rm(path.join(docsRoot, dirname), { recursive: true, force: true });
}
await rm(publicExtracted, { recursive: true, force: true });
await rm(devPublicExtracted, { recursive: true, force: true });
await mkdir(publicExtracted, { recursive: true });
await mkdir(devPublicExtracted, { recursive: true });

for (const filename of (await readdir(sourceWiki)).filter((item) => item.endsWith(".md")).sort()) {
  if (generatedWikiPages.has(filename)) {
    continue;
  }
  const source = path.join(sourceWiki, filename);
  const target = path.join(docsRoot, filename === "README.md" ? "index.md" : filename);
  const raw = await readFile(source, "utf8");
  const transformed = raw
    .replaceAll("../../extracted/", "/assets/extracted/")
    .replaceAll("../mechanics/", "mechanics/");
  await writeFile(target, transformed, "utf8");
}

const guideStats = await buildGuidePages({ repoRoot: sourceRoot, docsRoot });

await copyFile(path.join(sourceDocs, "original-analysis.md"), path.join(docsRoot, "original-analysis.md"));
await copyFile(path.join(sourceDocs, "remaster-roadmap.md"), path.join(docsRoot, "remaster-roadmap.md"));

const referencedExtracted = await collectReferencedExtracted(docsRoot);

let copied = 0;
for (const relative of [...referencedExtracted].sort()) {
  const source = path.join(sourceExtracted, relative);
  try {
    const info = await stat(source);
    if (!info.isFile()) {
      continue;
    }
  } catch {
    continue;
  }
  const target = path.join(publicExtracted, relative);
  await mkdir(path.dirname(target), { recursive: true });
  await copyFile(source, target);
  const devTarget = path.join(devPublicExtracted, relative);
  await mkdir(path.dirname(devTarget), { recursive: true });
  await copyFile(source, devTarget);
  copied += 1;
}

console.log(
  `Synced player wiki, ${guideStats.cardPages} card pages, ${guideStats.professionPages} profession pages, ${guideStats.monsterPages} monster pages, ${guideStats.buildingPages} building pages, ${guideStats.talentPages} talent pages, ${guideStats.achievements} achievements, mechanics docs, and ${copied} extracted assets.`
);

async function collectReferencedExtracted(root) {
  const found = new Set();
  for (const file of await listMarkdownFiles(root)) {
    const raw = await readFile(file, "utf8");
    for (const match of raw.matchAll(/(?:\/assets\/extracted\/|\.\.\/\.\.\/extracted\/)([^)\s"'<]+)/g)) {
      found.add(match[1]);
    }
  }
  return found;
}

async function pathExists(filePath) {
  try {
    await stat(filePath);
    return true;
  } catch {
    return false;
  }
}

async function listMarkdownFiles(root) {
  const files = [];
  for (const entry of await readdir(root, { withFileTypes: true })) {
    if (entry.name === ".vitepress" || entry.name === "public") {
      continue;
    }
    const fullPath = path.join(root, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await listMarkdownFiles(fullPath)));
    } else if (entry.isFile() && entry.name.endsWith(".md")) {
      files.push(fullPath);
    }
  }
  return files;
}
