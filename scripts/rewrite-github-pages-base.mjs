import { promises as fs } from "node:fs";
import path from "node:path";

const repoBase = process.env.VITEPRESS_BASE || "/dream-quest-wiki/";
const base = repoBase.startsWith("/") ? repoBase : `/${repoBase}`;
const normalizedBase = base.endsWith("/") ? base : `${base}/`;
const distRoot = path.resolve("docs/.vitepress/dist");

const siteRoots = [
  "assets",
  "cards",
  "professions",
  "monsters",
  "buildings",
  "talents",
  "achievements",
  "mechanics"
];

const extensions = new Set([".html", ".js", ".css"]);
const exactRootAttributes = /\b(href|src)=["']\/["']/g;
const exactRootLinks = [
  /("link":")\/(")/g,
  /(\\\"link\\\":\\\")\/(\\\")/g
];
const pathPrefixPattern = new RegExp(
  `(["'=])/(?!${escapeRegExp(normalizedBase.slice(1))})(?:${siteRoots.join("|")})(?=[/#?\\\\"'])`,
  "g"
);

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await walk(fullPath)));
    } else if (extensions.has(path.extname(entry.name))) {
      files.push(fullPath);
    }
  }
  return files;
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function rewriteContent(content) {
  let rewritten = content.replace(exactRootAttributes, (match, attr) => `${attr}="${normalizedBase}"`);
  for (const pattern of exactRootLinks) {
    rewritten = rewritten.replace(pattern, `$1${normalizedBase}$2`);
  }
  return rewritten.replace(pathPrefixPattern, (match, prefix) => `${prefix}${normalizedBase}${match.slice(2)}`);
}

const files = await walk(distRoot);
let changed = 0;

for (const file of files) {
  const content = await fs.readFile(file, "utf8");
  const rewritten = rewriteContent(content);
  if (rewritten !== content) {
    await fs.writeFile(file, rewritten);
    changed += 1;
  }
}

console.log(`Rewrote ${changed} files for GitHub Pages base ${normalizedBase}`);
