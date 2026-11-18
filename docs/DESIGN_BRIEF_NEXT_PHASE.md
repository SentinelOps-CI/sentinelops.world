# SentinelOps — frontend redesign brief (next phase)

This document describes the next design phase. The phase-one patch does not change the site's visual presentation or research prose.

## Editorial direction

The site should feel like a serious engineering research institution with a recognizable technical identity. The distinguishing motif is a restrained verification ledger: precise thin rules, stable references, clear provenance, generous negative space, and quiet composition. Every decoration must carry information or aid navigation. Avoid stock illustrations, artificial dashboards, promotional gradients, gratuitous animation, and exaggerated claims.

## Typography and interaction constraints

Use one licensed/open-source font family across the entire interface, including titles, annotations, navigation, tables, and code. IBM Plex Sans is the existing site's most pragmatic candidate. Use regular weight (400) and normal style throughout, including semantic strong/emphasis elements, with hierarchy expressed through scale, spacing, alignment, and contrast. Do not use italics or bold weight. Preserve semantic HTML markup and accessibility; visual weight is a CSS concern. Use sufficient size and line height for long technical articles. Keep keyboard focus highly distinguishable and honor reduced motion.

## Proposed information architecture

Home should answer what SentinelOps does, the scope of the claims, where evidence is published, and how to inspect it. Products should link each repository to its status, spec, test entry point, and limitations. Research should present signed-off articles with explicit dates and references. Documentation should identify source repositories as authoritative where relevant. Organization and contact content must be factual and attributable. Pages that imply live operational status must distinguish real telemetry from editorial snapshots.

## Trust audit before launch

Verify all public statements about funding, organization history, employment conditions, operational status, privacy, independent validation, and production readiness against primary records. The existing press page includes dated funding statements, the privacy page explicitly calls itself a working template, and the status page shows fixed labels without demonstrated live telemetry. Resolve these as facts and product-policy decisions before increasing promotional reach. Do not invent biographies, customers, endorsements, scientific results, or certifications.

## Acceptance criteria

- One font family, normal style, regular weight across desktop/mobile and all component states.
- WCAG-oriented keyboard and contrast review; usable 320px layout and long-form reading experience.
- Each major page has one clear purpose and an unambiguous primary next action.
- Clear distinctions between aspirations, prototypes, deployed systems, and independently replicated results.
- Lighthouse and real-browser accessibility/performance tests, with regression checks for rendered research content.
- No content change without editorial review; use visual and information hierarchy first.
