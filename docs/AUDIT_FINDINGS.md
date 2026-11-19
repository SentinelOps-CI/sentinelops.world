# SentinelOps website technical and editorial audit — November 2026

This audit is based on the public `SentinelOps-CI/sentinelops.world` main branch as retrieved in this session. No production deployment, search indexing, uptime, or external institutional statement was verified by these source-only checks.

## Priority 0: reachability and response correctness

The live `https://sentinelops.world/` domain, its sitemap and its article routes were not retrievable through the available external web fetch in this session. The local runtime also failed to resolve the domain; that runtime has outbound networking restrictions. This evidence does not establish a global DNS outage. Verify domain registration, authoritative DNS, Vercel custom-domain configuration, TLS certificate state, canonical redirects, and public HTTP response status from independent networks before announcing successful indexing.

The current Vite build returns a JavaScript application shell through a catch-all Vercel rewrite. Public article content is client-rendered. Static HTML for the canonical public routes is the central engineering improvement in the phase-one patch. The patch also creates a noindex fallback for unknown/client-only URLs. HTTP 404 status semantics for unknown URLs still need production verification.

## Priority 1: editorial metadata discrepancies

The writing index and the article pages disagree on publication dates and some titles. Article-specific JSON-LD is treated as the declared source for the generated research index, pending human verification against original publication records.

| Route | Writing index date | Article structured-data date |
|---|---|---|
| `/blog/verifiable-ai-ecosystem` | 2025-06-01 | 2025-05-30 |
| `/blog/ecosystem-development-timeline` | 2025-06-15 | 2025-07-15 |
| `/blog/mapping-the-space` | 2025-07-01 | 2025-06-15 |
| `/blog/building-verification-infrastructure` | 2025-07-15 | 2025-08-15 |
| `/blog/current-initiatives` | 2025-08-01 | 2026-10-06 |
| `/blog/how-to-get-involved` | 2025-08-15 | 2025-08-15; modified 2026-10-06 |

Do not silently select publication dates or create synthetic `lastmod` entries. Confirm the underlying publication history, align one authoritative metadata source, then update index and schema together.

## Priority 1: claims and institutional trust

- The press page contains a historical funding announcement, an asserted founding year, and a near-immediate response-time commitment; these need primary evidence or editorial correction.
- The privacy policy is explicitly identified in its own footer as a working template, while its current date is January 2024. Legal/privacy publication needs appropriate review before promotion.
- Status-page labels are hardcoded and do not establish externally verified live service telemetry. Separate a dated editorial status record from monitored uptime.
- The careers page contains specific employment conditions that need confirmation against actual recruiting arrangements.
- Individual proof and runtime claims should link to specific versioned repositories, proof targets, threat models, limitations, and replay/test material. A repository link alone does not establish all claimed safety properties.
- The brand name "SentinelOps" is shared with unrelated internet sites. Use the canonical domain and GitHub organization as consistent entity identifiers; avoid conflating other organizations with SentinelOps-CI.

## Priority 2: information architecture and durable agent access

- Make the HTML response itself complete, with titles, h1, context, article content, citations, and primary sources.
- Maintain a stable research-index JSON file, sitemap, Atom feed, and `llms.txt` as supporting discovery interfaces, not ranking shortcuts.
- Distinguish the PDF original URLs from the query-driven viewer. The current viewer accepts a user-provided `file` URL and `title`; scope permitted sources and treat user-controlled metadata as untrusted in a separate security change.
- The PDF folder stores descriptive-name aliases and short-name copies. Confirm exact byte equality, retention needs, and canonical strategy before redirects.
- Add version-specific source links and research artifact pointers once individually reviewed. Do not invent results, benchmarks, affiliations, or endorsement badges.

## Suggested acceptance gates

1. `npm ci`, lint, type-check, production build, and all 18 route HTML checks on a feature branch.
2. Vercel preview HTTP checks for canonical routes, PDF files, `robots.txt`, sitemap, research index, Atom feed, and unknown URLs.
3. Playwright tests for hydration, internal navigation, accessible headings/focus, mobile viewport, and forms; document any hydration mismatch.
4. Cross-check the publication timeline and factual public claims before broad search promotion.
5. Verify external indexing and crawl telemetry with Search Console/Bing Webmaster Tools after DNS and deployment checks.

## Additional identity finding

The SentinelOps-CI GitHub organization publicly lists a `www.sentinelops.xyz`
website, while the application repository's canonical metadata points to
`https://sentinelops.world/`. The owner has confirmed `https://sentinelops.world` as the canonical domain.
The `.xyz` profile URL is an outdated/conflicting pointer requiring a separate
review, and a permanent redirect is appropriate only if that domain is controlled
by the same organization. Live DNS, TLS, and redirect behavior remain unverified.
