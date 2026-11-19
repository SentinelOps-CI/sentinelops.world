/** Fail the build if discoverability regressions remove server-readable HTML. */
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { resolve, join } from "node:path";
import { indexedRoutes, indexedPapers, siteOrigin } from "./site-routes.mjs";
import { researchNotes } from "./research-notes.mjs";

const dist = resolve("dist");
for (const path of indexedRoutes) {
  const file = path === "/" ? join(dist, "index.html") : join(dist, `${path.slice(1)}.html`);
  const html = await readFile(file, "utf8");
  assert.match(html, /<div id="root" data-prerendered="true">[\s\S]+<\/div>/, `${path}: missing HTML root`);
  assert.match(html, /<main\s+id="main-content"/, `${path}: missing substantive page markup`);
  assert.match(html, /<h1\b/, `${path}: missing primary heading`);
  const canonicalTags = [...html.matchAll(/<link\b[^>]*\brel="canonical"[^>]*>/gi)].map((match) => match[0]);
  assert.equal(canonicalTags.length, 1, `${path}: missing or duplicate canonical`);
  assert.ok(canonicalTags[0].includes(`href="${siteOrigin}${path}"`), `${path}: wrong canonical URL`);
  assert.match(html, /<title\b[^>]*>[^<]+<\/title>/, `${path}: missing title`);
  assert.match(html, /name="description"/, `${path}: missing description`);
  assert.ok(html.includes(`property="og:url" content="${siteOrigin}${path}"`), `${path}: wrong Open Graph URL`);
  assert.equal((html.match(/<h1\b/g) || []).length, 1, `${path}: expected one primary heading`);
  assert.equal((html.match(/name="description"/g) || []).length, 1, `${path}: duplicate descriptions`);
  assert.equal((html.match(/property="og:title"/g) || []).length, 1, `${path}: duplicate OG title`);
  const structuredData = [...html.matchAll(/<script\b(?=[^>]*\btype="application\/ld\+json")[^>]*>([\s\S]*?)<\/script>/gi)]
    .map((match) => JSON.parse(match[1]));
  assert.ok(structuredData.some((data) => data["@type"] === "Organization"), `${path}: missing valid Organization JSON-LD`);
  if (researchNotes.some((note) => note.path === path)) {
    const article = structuredData.find((data) => data["@type"] === "Article");
    assert.ok(article, `${path}: missing valid Article JSON-LD`);
    assert.equal(article.url, siteOrigin + path, `${path}: Article URL mismatch`);
    const record = researchNotes.find((note) => note.path === path);
    assert.equal(article.headline, record.title, `${path}: Article headline mismatch`);
    assert.equal(article.description, record.description, `${path}: Article description mismatch`);
    assert.equal(article.datePublished, record.datePublished, `${path}: Article publication date mismatch`);
    assert.equal(article.dateModified, record.dateModified, `${path}: Article modification date mismatch`);
    assert.equal(article.mainEntityOfPage?.["@id"], siteOrigin + path, `${path}: missing article page identity`);
    assert.equal(article.publisher?.["@id"], `${siteOrigin}/#organization`, `${path}: missing publisher identity`);
  }
  assert.doesNotMatch(html, /<meta\b(?=[^>]*\bname="robots")(?=[^>]*\bcontent="noindex)[^>]*>/i, `${path}: indexed route unexpectedly noindexed`);
  if (researchNotes.some((note) => note.path === path)) {
    assert.match(html, /property="og:type" content="article"/, `${path}: missing article Open Graph type`);
    const article = html.match(/<article\b[^>]*>([\s\S]*?)<\/article>/);
    assert.ok(article, `${path}: missing article body`);
    const text = article[1].replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
    assert.ok(text.length >= 800, `${path}: article body unexpectedly short (${text.length} characters)`);
  }
}
const vercel = JSON.parse(await readFile(resolve("vercel.json"), "utf8"));
assert.equal(vercel.cleanUrls, true, "Vercel must serve static .html files at canonical paths");
assert.equal(vercel.trailingSlash, false, "Canonical URLs use no trailing slash except root");
assert.deepEqual(vercel.rewrites, [
  { source: "/contact/success", destination: "/spa-fallback" },
  { source: "/subscribe/success", destination: "/spa-fallback" },
  { source: "/papers/view", destination: "/spa-fallback" },
], "Only client-only routes should be rewritten; unknown paths must 404");
const fallback = await readFile(join(dist, "spa-fallback.html"), "utf8");
assert.match(fallback, /name="robots" content="noindex,follow"/);
const notFound = await readFile(join(dist, "404.html"), "utf8");
assert.match(notFound, /name="robots" content="noindex,follow"/);
assert.match(notFound, /<h1[^>]*>Page Unavailable<\/h1>/);
assert.ok(!notFound.includes('rel="canonical"'), "404 must not advertise a canonical link");
assert.match(notFound, /<main id="main-content"/);

// Vite must copy all machine-readable assets and the original PDFs to dist.
const exported = ["sitemap.xml", "robots.txt", "llms.txt", "feed.xml", "research-index.json"];
for (const asset of exported) {
  const source = await readFile(resolve("public", asset));
  const deployed = await readFile(join(dist, asset));
  assert.ok(source.equals(deployed), `${asset}: dist asset does not match source`);
}
for (const paper of indexedPapers) {
  const bytes = await readFile(join(dist, paper.slice(1)));
  assert.ok(bytes.subarray(0, 5).toString("ascii") === "%PDF-", `${paper}: missing PDF source`);
}

const sitemap = await readFile(resolve("public/sitemap.xml"), "utf8");
const sitemapLocs = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
const expectedLocs = [...indexedRoutes, ...indexedPapers].map((path) => siteOrigin + path);
assert.deepEqual([...sitemapLocs].sort(), [...expectedLocs].sort(), "Sitemap URL inventory differs from route inventory");
assert.equal(new Set(sitemapLocs).size, sitemapLocs.length, "Sitemap contains duplicate URLs");
for (const path of ["/contact/success", "/subscribe/success", "/papers/view"]) {
  assert.ok(!sitemap.includes(`<loc>${siteOrigin}${path}</loc>`), `sitemap: unexpected ${path}`);
}
console.log(`Checked ${indexedRoutes.length} static HTML pages and ${indexedPapers.length} PDF entries`);

const researchIndex = JSON.parse(await readFile(resolve("public/research-index.json"), "utf8"));
const feed = await readFile(resolve("public/feed.xml"), "utf8");
assert.equal(researchIndex.entries.length, researchNotes.length);
for (const note of researchNotes) {
  const url = siteOrigin + note.path;
  assert.ok(researchIndex.entries.some((entry) => entry.url === url && entry.datePublished === note.datePublished),
    `research index: mismatch for ${url}`);
  assert.ok(feed.includes(`<id>${url}</id>`), `Atom feed: missing ${url}`);
}
console.log(`Checked ${researchNotes.length} article records in JSON index and Atom feed`);
