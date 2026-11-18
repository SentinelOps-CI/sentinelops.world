/** Build a machine-readable index and a standards-based Atom feed from on-page metadata. */
import assert from "node:assert/strict";
import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { indexedRoutes, indexedPapers, siteOrigin } from "./site-routes.mjs";
import { researchNotes } from "./research-notes.mjs";

const escapeXml = (value) => String(value).replace(/[&<>"']/g, (char) => ({
  "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&apos;",
})[char]);

/** Validate actual literal Seo JSX metadata, rather than incidental text. */
function declaredSeoMetadata(source, sourceFile) {
  const tags = [...source.matchAll(/<Seo\b([\s\S]*?)\/>/g)];
  assert.equal(tags.length, 1, `${sourceFile}: expected exactly one Seo element`);
  const raw = tags[0][1];
  function prop(name) {
    const found = raw.match(new RegExp(`\\b${name}="([^"]*)"`));
    assert.ok(found, `${sourceFile}: missing literal Seo ${name}`);
    return found[1];
  }
  function field(name, required = true) {
    const found = [...raw.matchAll(new RegExp(`\\b${name}:\\s*"([^"]*)"`, "g"))];
    assert.ok(!required || found.length === 1, `${sourceFile}: missing or duplicate ${name}`);
    assert.ok(found.length <= 1, `${sourceFile}: duplicate ${name}`);
    return found[0]?.[1];
  }
  assert.match(raw, /"@type":\s*"Article"/, `${sourceFile}: expected Article JSON-LD`);
  assert.equal(prop("type"), "article", `${sourceFile}: expected article Open Graph type`);
  return {
    path: prop("path"),
    title: prop("title"),
    description: prop("description"),
    headline: field("headline"),
    datePublished: field("datePublished"),
    dateModified: field("dateModified", false),
  };
}

for (const note of researchNotes) {
  assert.ok(indexedRoutes.includes(note.path), `Unindexed article: ${note.path}`);
  assert.match(note.datePublished, /^\d{4}-\d{2}-\d{2}$/);
  assert.equal(new Date(`${note.datePublished}T00:00:00Z`).toISOString().slice(0, 10), note.datePublished);
  if (note.dateModified) {
    assert.match(note.dateModified, /^\d{4}-\d{2}-\d{2}$/);
    assert.equal(new Date(`${note.dateModified}T00:00:00Z`).toISOString().slice(0, 10), note.dateModified);
    assert.ok(note.dateModified >= note.datePublished, `${note.path}: modification predates publication`);
  }
  const declared = declaredSeoMetadata(readFileSync(resolve(note.source), "utf8"), note.source);
  for (const [field, expected] of Object.entries({
    path: note.path,
    title: `${note.title} · SentinelOps`,
    description: note.description,
    headline: note.title,
    datePublished: note.datePublished,
    dateModified: note.dateModified,
  })) {
    assert.equal(declared[field], expected, `${note.source}: ${field} mismatch with indexed research record`);
  }
}
assert.equal(new Set(researchNotes.map((note) => note.path)).size, researchNotes.length, "Duplicate article paths");

// Reject newly introduced routes that silently lack a static page or explicit
// noindex fallback. The declared JSX routes are currently literal paths.
const appSource = readFileSync(resolve("src/App.tsx"), "utf8");
const appRoutes = [...appSource.matchAll(/<Route\s+path="([^"]+)"/g)].map((match) => match[1]);
const clientOnly = ["/contact/success", "/subscribe/success", "/papers/view"];
const expectedAppRoutes = [...indexedRoutes, ...clientOnly, "*"];
assert.equal(new Set(appRoutes).size, appRoutes.length, "Duplicate React route declarations");
assert.deepEqual([...appRoutes].sort(), [...expectedAppRoutes].sort(),
  "React router inventory differs from the prerender and client-only routes");

function declaredListing(sourceFile, marker, entryPattern, expectedCount) {
  const text = readFileSync(resolve(sourceFile), "utf8");
  const start = text.indexOf(marker);
  assert.ok(start >= 0, `${sourceFile}: missing research listing ${marker}`);
  const end = text.indexOf("\n  ];", start);
  assert.ok(end > start, `${sourceFile}: incomplete research listing ${marker}`);
  const entries = [...text.slice(start, end).matchAll(entryPattern)].map((match) => ({
    title: match.groups.title,
    date: match.groups.date,
    slug: match.groups.slug,
  }));
  assert.equal(entries.length, expectedCount, `${sourceFile}: listing count mismatch`);
  assert.equal(new Set(entries.map((entry) => entry.slug)).size, entries.length,
    `${sourceFile}: duplicate listing slug`);
  return entries;
}

const blogEntries = declaredListing("src/pages/Blog.tsx", "const blogPosts = [",
  /\{ id: \d+, title: "(?<title>[^"]+)",[^\n]*?date: "(?<date>\d{4}-\d{2}-\d{2})",[^\n]*?slug: "(?<slug>[^"]+)" \},/g,
  researchNotes.length);
assert.ok(blogEntries.every((entry, i) => i === 0 || blogEntries[i - 1].date >= entry.date),
  "Writing index must show articles newest-first");
const homeEntries = declaredListing("src/pages/Index.tsx", "const writing = [",
  /\{ date: "(?<date>\d{4}-\d{2}-\d{2})", title: "(?<title>[^"]+)", slug: "(?<slug>[^"]+)",[^\n]*?\},/g,
  3);
for (const [source, list] of [["blog", blogEntries], ["home", homeEntries]]) {
  for (const entry of list) {
    const note = researchNotes.find((record) => record.path === `/blog/${entry.slug}`);
    assert.ok(note, `${source}: unindexed article ${entry.slug}`);
    assert.equal(entry.title, note.title, `${source}: title differs from article metadata for ${entry.slug}`);
    assert.equal(entry.date, note.datePublished, `${source}: date differs from article metadata for ${entry.slug}`);
  }
}


const entries = researchNotes.map(({ path, source, title, description, datePublished, dateModified }) => ({
  url: siteOrigin + path,
  title,
  description,
  datePublished,
  ...(dateModified ? { dateModified } : {}),
  declaredAuthor: "SentinelOps",
  sourceUrl: `https://github.com/SentinelOps-CI/sentinelops.world/blob/main/${source}`,
}));
const index = {
  schemaVersion: "1.0",
  site: siteOrigin + "/",
  title: "SentinelOps research index",
  note: "Dates are declarations in article page metadata; research claims need independent verification from referenced artifacts.",
  entries,
  documents: indexedPapers.map((path) => ({ url: siteOrigin + path, mediaType: "application/pdf" })),
};
writeFileSync(resolve("public/research-index.json"), JSON.stringify(index, null, 2) + "\n", "utf8");

// Atom updated is bounded by the latest declared article publication/update date.
// The feed has no fabricated current-build timestamp or speculative new entries.
const mostRecent = researchNotes.map((n) => n.dateModified || n.datePublished).sort().at(-1);
const items = [...researchNotes].sort((a, b) => (b.dateModified || b.datePublished).localeCompare(a.dateModified || a.datePublished));
const feed = [
  '<?xml version="1.0" encoding="utf-8"?>',
  '<feed xmlns="http://www.w3.org/2005/Atom">',
  `  <id>${escapeXml(siteOrigin + "/blog")}</id>`,
  '  <title>SentinelOps Research Notes</title>',
  `  <updated>${mostRecent}T00:00:00Z</updated>`,
  `  <link rel="self" type="application/atom+xml" href="${escapeXml(siteOrigin + "/feed.xml")}"/>`,
  `  <link rel="alternate" href="${escapeXml(siteOrigin + "/blog")}"/>`,
  '  <author><name>SentinelOps</name></author>',
  ...items.flatMap((n) => [
    '  <entry>',
    `    <id>${escapeXml(siteOrigin + n.path)}</id>`,
    `    <title>${escapeXml(n.title)}</title>`,
    `    <link rel="alternate" href="${escapeXml(siteOrigin + n.path)}"/>`,
    `    <published>${n.datePublished}T00:00:00Z</published>`,
    `    <updated>${n.dateModified || n.datePublished}T00:00:00Z</updated>`,
    `    <summary>${escapeXml(n.description)}</summary>`,
    '  </entry>',
  ]),
  '</feed>',
  '',
].join('\n');
writeFileSync(resolve("public/feed.xml"), feed, "utf8");
console.log(`Generated research index and Atom feed for ${entries.length} articles`);
