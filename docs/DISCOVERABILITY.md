# SentinelOps search and agent discoverability

## Approach

Public, canonical routes are prerendered to HTML during `npm run build`. Search engines and document-reading agents receive substantive page content and route-specific metadata without executing client JavaScript. React hydrates the existing page for interactive navigation and forms. The visual system and editorial copy remain unchanged in this phase.

`scripts/site-routes.mjs` is the canonical index of public prerendered routes and downloadable documents. `scripts/research-notes.mjs` records the titles, dates, and summaries already declared on the article pages; build-time validation rejects mismatches. `public/research-index.json` and `public/feed.xml` provide direct machine-readable article discovery. `scripts/generate-sitemap.mjs` derives the XML sitemap from that list; `scripts/check-prerender.mjs` fails a build missing a route, canonical URL, heading, or article markup.

Non-indexable acknowledgement pages and the query-driven PDF viewer remain client-side. Vercel's `cleanUrls` serves the static article HTML at extensionless canonical paths. A native `404.html` returns HTTP 404 for unknown paths; only the three client-only routes use the `noindex,follow` SPA shell. The PDF assets are indexed through their original URLs, not through the viewer UI.

## Validation before deployment

```sh
npm ci
npm run lint
npm run build
npm run preview
```

Inspect the HTML source (not the rendered DOM) for `/`, `/blog`, and every article route. Confirm that the `h1`, article text, canonical link, and description appear in the response. Verify `/sitemap.xml`, `/llms.txt`, `/research-index.json`, `/feed.xml`, and `/robots.txt`, including HTTP status and MIME type. Confirm deep-link refreshes and the newsletter form in a browser. Validate the Vercel preview before merging.

After deployment, test the public HTTP response with a JavaScript-free client; compare Google Search Console's indexing status and a sample of crawler logs. Sitemap submission is a discovery signal, not a guarantee of indexing or ranking. `llms.txt` is an optional, experimental discovery convention, not a standardized AI-agent ingestion protocol.

## Known boundaries and follow-up audit

- Verify canonical host redirects, HTTP 404 status for unknown paths, and metadata on deployed HTML. Vercel clean-URL and custom-404 behavior must be exercised in preview, not inferred from static configuration.
- Audit all externally verifiable organizational claims, press releases, career commitments, privacy terms, and status assertions for provenance. Do not add unsupported structured data or metrics.
- The writing index and homepage listing titles/dates are reconciled to the individual article pages' existing `Article` declarations. A source-inventory check rejects future drift. This consistency change does not independently establish the historical publication dates; primary publication records still need editorial verification.
- Next visual phase: one typeface and regular weight only, no italic styling; consistent text scale, less decorative ornamentation, narrow reading measures, distinctive restrained identity, and accessible responsive layouts.

## Release identity

The feature branch was published by the ChatGPT GitHub App following the owner's explicit authorization for this push. Its commit author and GitHub actor must be shown accurately. A GitHub App write is distinct from an authenticated personal `fraware` push. To publish later changes under `fraware`, use personally authenticated Git credentials. Do not modify audit records or impersonate another contributor.

## HTTP verification

Run `npm run check:live -- https://PREVIEW-DOMAIN.vercel.app` against a deployed preview. Every canonical route must return server-readable HTML and its production canonical URL. `/sitemap.xml`, `/feed.xml`, `/research-index.json`, `/llms.txt`, and the referenced PDFs must return source content. Unknown routes must be 404 or explicitly noindex. A 200 noindex fallback is flagged because it might be reported as a soft 404 by search engines.
