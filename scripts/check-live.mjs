/**
 * Verify that a deployed site actually serves its prerendered, indexable HTML.
 * Usage: node scripts/check-live.mjs https://preview.example.vercel.app
 * This performs only safe, read-only HTTP requests; it does not submit a sitemap.
 */
import assert from "node:assert/strict";
import { indexedRoutes, indexedPapers, siteOrigin } from "./site-routes.mjs";

const origin = new URL(process.argv[2] ?? siteOrigin);
assert.ok(["https:", "http:"].includes(origin.protocol), "Expected an HTTP(S) deployment URL");
assert.equal(origin.pathname, "/", "Specify a deployment origin, not a nested page");

const failures = [];
const warnings = [];

async function get(path) {
  const response = await fetch(new URL(path, origin), {
    redirect: "follow",
    headers: { "accept": "text/html,application/xml,application/json,application/pdf;q=0.9,*/*;q=0.1" },
    signal: AbortSignal.timeout(15000),
  });
  return { response, body: await response.text() };
}

for (const path of indexedRoutes) {
  try {
    const { response, body } = await get(path);
    assert.equal(response.status, 200, `HTTP ${response.status}`);
    assert.match(response.headers.get("content-type") ?? "", /text\/html/i, "Unexpected MIME type");
    assert.match(body, /<main\s+id="main-content"/, "No server-rendered main content");
    assert.match(body, /<h1\b/, "Missing primary heading");
    assert.ok(body.includes(`href="${siteOrigin}${path}"`), "Missing production canonical URL");
    assert.equal((body.match(/rel="canonical"/g) || []).length, 1, "Duplicate canonical tags");
    assert.doesNotMatch(body, /<meta\s+name="robots"\s+content="noindex/i, "Indexable page marked noindex");
  } catch (error) {
    failures.push(`${path}: ${error.message}`);
  }
}

for (const path of ["/sitemap.xml", "/robots.txt", "/feed.xml", "/research-index.json", "/llms.txt", ...indexedPapers]) {
  try {
    const { response, body } = await get(path);
    assert.equal(response.status, 200, `HTTP ${response.status}`);
    assert.ok(body.length > 10, "Empty resource");
    if (path.endsWith(".pdf")) {
      assert.match(response.headers.get("content-type") ?? "", /application\/pdf/i, "PDF MIME type mismatch");
      // A decoded PDF is binary; only verify the returned magic prefix here.
      assert.ok(body.startsWith("%PDF-"), "PDF magic header missing");
    }
  } catch (error) {
    failures.push(`${path}: ${error.message}`);
  }
}

try {
  const { response, body } = await get("/__sentinelops_nonexistent_check_926db2");
  assert.equal(response.status, 404, "Unknown route must return HTTP 404, not a soft-404 response");
  assert.match(body, /name="robots" content="noindex,follow"/, "404 must be noindexed");
} catch (error) {
  failures.push(`unknown route: ${error.message}`);
}

// Client-only routes retain SPA behavior, while their initial responses remain
// nonindexable. Source HTML does not contain the destination's dynamic data.
for (const path of ["/contact/success", "/subscribe/success", "/papers/view"]) {
  try {
    const { response, body } = await get(path);
    assert.equal(response.status, 200, `HTTP ${response.status}`);
    assert.match(body, /name="robots" content="noindex,follow"/, "Client-only route must be noindexed");
  } catch (error) {
    failures.push(`${path}: ${error.message}`);
  }
}

console.log(`Checked ${indexedRoutes.length} HTML routes, ${indexedPapers.length} PDFs, and discovery resources at ${origin.href}`);
for (const issue of warnings) console.warn(`WARNING: ${issue}`);
for (const issue of failures) console.error(`FAIL: ${issue}`);
if (failures.length) process.exitCode = 1;
else console.log("Deployment discovery smoke test passed");
