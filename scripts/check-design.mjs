/** Lightweight release checks for the one-font interface.
 * These source invariants complement build-time SSR tests; they do not replace
 * accessibility and hydration checks in a browser.
 */
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const read = (path) => readFileSync(path, "utf8");
const html = read("index.html");
const css = read("src/design.css");
const original = read("src/index.css");
const config = read("tailwind.config.ts");
const entry = read("src/main.tsx");
const layout = read("src/components/Layout.tsx");
const home = read("src/pages/Index.tsx");

const fontLoads = html.match(/<link[^>]+fonts\.googleapis\.com\/css2[^>]+>/g) || [];
assert.equal(fontLoads.length, 1, "Exactly one font stylesheet is expected");
assert.match(fontLoads[0], /IBM\+Plex\+Sans:wght@400&display=swap/);
for (const text of [html, css, original, config]) {
  assert.doesNotMatch(text, /Newsreader|IBM\+Plex\+Mono/i, "Unexpected legacy font family");
}
assert.match(css, /body \*,\s*body \*::before,\s*body \*::after/);
assert.match(css, /font-weight:\s*400\s*!important/);
assert.match(css, /font-style:\s*normal\s*!important/);
assert.match(css, /:focus-visible/);
assert.match(css, /prefers-reduced-motion:\s*reduce/);
assert.match(css, /max-width:\s*640px/);
assert.match(entry, /import '\.\/design\.css'/);
assert.match(layout, /href="#main-content"/);
assert.match(layout, /aria-current/);
assert.match(layout, /aria-label="Mobile navigation"/);
assert.match(layout, /rel="noopener noreferrer"/);
assert.match(home, /id="home-title"/);
assert.match(home, /aria-labelledby="home-title"/);
assert.match(home, /className="home-hero__aside"/);
assert.doesNotMatch(home, /policy_hash|proof_status|effect_gate|className="technical-panel/, "Homepage must not display fictional proof output");
assert.match(home, /timeZone:\s*"UTC"/, "Homepage dates need deterministic UTC rendering");
console.log("Design invariants passed: one font, regular weight, accessible chrome, factual specimen removal");
