# Original-site content preservation audit

Baseline: SentinelOps production main, commit 0b6287677aaad63e71288bf0fa489d0f29ace428.

Purpose: design changes must retain the substance, functions, and recognizable identity of the pre-redesign website. Removing an unsupported claim from promotional presentation is different from deleting the historical material. Preserve the earlier text under an explicit archival label until its evidence is checked.

## Preserved source content

| Original site element | Retained location or treatment |
| --- | --- |
| SentinelOps brand mark and Provability Fabric subline | Header and footer, original brand asset unchanged |
| Products, Mission, Docs, Writing, GitHub navigation | Original names and destinations restored in desktop/mobile navigation |
| Homepage: Provable safety for autonomous agents | Original lead headline restored with research-objective explanation |
| Homepage: Provability Fabric, proof-carrying behaviour | Dedicated reference-model panel explicitly identified as illustrative |
| Homepage: policy, proof, enforcement, certificate/evidence fields | Reference-model steps and conceptual evidence fields, without fabricated hashes or synthetic verified results |
| Homepage: Stack, Licence, Mode | Three metadata fields restored; licence attribution is project-specific |
| Homepage: Specify, Prove, Enforce | Original three stages restored with correctly scoped explanatory text |
| Homepage: three principles | Specification-driven, Runtime mediation, Audit by default restored |
| Homepage: three selected writings and newsletter | Original entries and abstracts, source links, and subscription functionality retained |
| Mission: four commitments | Safety first, Rigour, Open collaboration, Practical innovation restored |
| Mission: empirical testing vs. formal verification comparison | Two-column technical comparison retained; unsupported numerical estimates omitted |
| Mission: dated roadmap | Original 2024/2025/2026/2027+ milestone subjects retained as editorial programme history |
| Mission: contribution call to action | Public project/source/research participation routes retained |
| Products: four categories, eleven projects | Original taxonomy and project ordering restored from main |
| Products: descriptions, topic tags, Core/Active/Beta/Research labels | Source descriptions and original labels retained in explicitly historical disclosures, alongside technical scope |
| Docs: Getting started three steps | Original choose, install, and examples journey restored |
| Docs: repository index and five FAQs | All original topic questions restored with source-aware answers |
| Writing: six articles and three PDFs | Original index restored; all articles and PDF source bytes unchanged |
| Writing and homepage newsletter forms | Original subscription handling retained; service delivery is a separate operational gate |
| Status: website, source, documentation, newsletter | All four original public entries, historical status labels contextualized |
| Status: operational history and contact reporting | Dated incident description and issue-reporting links retained; no invented uptime claims |
| Press: original statements, dated notices, media inquiry channel | Two original notices and former statement retained as explicitly unverified historical website material |
| Careers: three role descriptions, values, application material | Original job profiles and values restored as prior listings; current vacancy and terms are unconfirmed |
| Contact: media, careers, privacy, legal and GitHub | Original destinations and page sections retained |
| Legal: Terms and Privacy | Both original pages unchanged, still identified as working templates pending approval |
| Footer: brand mark, links, copyright, programme identity | Retained with updated typography |
| SEO: public URLs, crawlable pages, structured data, feeds | Merged implementation preserved; no research URLs removed |

This matrix checks coverage of original material, not scientific validation of that material. Publication histories, project capabilities, factual announcements, and contractual commitments need separate sources.

## Exact original-file invariants

The six research articles, three original PDF files, both legal pages, and the brand mark are checked byte-for-byte against their Git blob identities from main. The build invokes the preservation gate alongside the discoverability and editorial tests.

Do not revise articles indirectly via site-wide copy scripts or branding substitutions. An article change is a substantive scientific edit subject to its own author-reviewed source audit.

## Non-template visual identity criteria

- Original SentinelOps brand mark, Provability Fabric identity, and distinct technical vocabulary lead the design.
- The hero contains a traceable schematic of policy, proof, and runtime mediation rather than fictional operational console output.
- No decorative metrics, certification badges, generic AI-generated graphics, stock team photos, or invented reference logos.
- Type uses one intentional family; hierarchy is built through scale and spacing, not arbitrary piles of cards and badges.
- Preserve technical tags and categories because they help experts navigate the repositories.
- Treat archival material as archival. It must not visually impersonate confirmed news, active hiring, live telemetry, or verified production guarantees.
- Desktop and mobile screenshots require human editorial review as well as automated visual/regression screening.

## Release requirements

Run the preservation gate, editorial source checks, ESLint, TypeScript, production prerender, browser smoke, and axe screening on the final commit. Compare screenshots with the main site and review every removed heading, link, list, technical specimen, form, and archive. Keep the redesign in draft until explicit review and domain verification.

The known DNS/TLS issue, legal policy templates, npm advisory triage, and full production form validation remain separate unresolved tasks.
