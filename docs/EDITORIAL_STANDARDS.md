# SentinelOps editorial and interface standards

Status: publication standard proposed in design PR #2.

The website is a public entry point to an open-source verification research programme. Its function is to explain technical questions, clarify the scope of claims, and direct readers to implementation evidence. The site itself is neither a proof of deployed safety nor a substitute for a versioned repository.

## Editorial requirements

Write in direct, precise English. Use terminology consistently and distinguish mathematical results from runtime observations. Avoid promotional generalities, invented dashboards, unsupported statistics, and speculative milestones presented as achieved. Link material technical claims to relevant primary sources.

| Claim class | Evidence needed | Scope to document |
| --- | --- | --- |
| Formal theorem | Exact proposition, premises, definitions, tool versions, proof-checker result | Model, axioms, and trusted components |
| Runtime enforcement | Mediated effects, threat model, coverage, bypass paths, tests | Unmediated actions and deployment assumptions |
| Empirical evaluation | Protocol, inputs, metrics, baselines, and evaluation records | Uncertainty, coverage, and generalization |
| Project implementation | Versioned source, tests, releases, and documentation | Unsupported features and unresolved issues |
| Organizational announcement | Dated first-party announcement or underlying institutional record | Objective, proposal, and completed event are separate categories |
| Service availability | Monitored endpoint or dated HTTP verification | A snapshot does not establish continuous uptime |
| Employment and funding | Confirmed vacancy, funding record, or authorized announcement | Project intentions are not completed transactions |

These requirements classify suitable evidence. They do not imply that every listed project already satisfies every obligation.

## Interface requirements

The visual system uses IBM Plex Sans, weight 400, normal style across the public interface. Hierarchy comes from scale, line length, spacing, alignment, and contrast. Restrained rules and ordered references serve as its identifying motif. No bold, italic, decorative monospace, fictional proof certificate, or marketing-style gradient belongs in the public design.

Keep accessible semantic markup, one primary heading per page, strong keyboard focus, reduced-motion behavior, responsive layouts at 320px, and server-readable page content. Browser and axe checks are regression tests rather than universal accessibility certifications.

## Editorial actions in PR #2

The homepage, research-method page, project catalogue, documentation index, media background, participation page, and editorial service directory were revised to clarify their public functions.

The eleven linked repository names and URLs in the project catalogue were checked against the public GitHub organization on 19 November 2026. Project maturity, independent validation, and proof completeness are not inferred from that metadata. A shared TypeScript directory now supports both the Projects and Documentation pages.

Removed or reframed material includes unsourced behavioral-coverage percentages, speculative sector-adoption milestones, universal mathematical-certainty claims, simulated proof outputs, static operational labels presented as live state, unsupported press history, fixed response-time commitments, and employment terms without primary confirmation.

The removal of a claim reflects insufficient evidence for publication, not a determination that the historical event is false.

## Outstanding verification

1. Legal and privacy pages identify themselves as working templates dated 1 January 2024. Compare their assertions against the actual data processing and the approved legal terms. See issue #5.
2. Long-form research articles remain substantively unchanged. Review technical claims, implementation status, and sources with the author before revising their scientific arguments.
3. Article dates are consistent across on-page structured data and the research index; independent original publication records remain necessary for historical validation.
4. The apex domain had a documented HTTPS certificate hostname mismatch. Correct the DNS/TLS configuration under issue #3 and verify publicly served routes.
5. Verify form delivery, privacy disclosures, rate limiting, contact-channel ownership, and error handling in the deployed environment.
6. Triage npm dependency advisories by exploitability and production or development scope, following issue #4.
7. Perform manual screen-reader, keyboard, zoom, and realistic device checks in addition to automated accessibility rules.

## Release procedure

Use locked dependencies, lint, TypeScript, server prerender and metadata tests, browser hydration and deep-link checks, responsive evaluation, automated accessibility screening, human review of factual changes, and public HTTPS/404 validation.

Accurate GitHub provenance is mandatory. A successful build does not certify universal correctness, independent research replication, legal compliance, or public service availability.
