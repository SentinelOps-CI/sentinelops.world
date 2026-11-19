import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import { Link } from "react-router-dom";

const workProgramme = [
  {
    number: "01",
    title: "Specify",
    scope: "State the property and its assumptions.",
    detail: "Identify the relevant actors, effects, authorizations, environmental conditions, and failure cases. Ambiguous policy text is a starting point for formalization, not a theorem.",
  },
  {
    number: "02",
    title: "Verify",
    scope: "Check the stated proposition.",
    detail: "Use a proof assistant, model checker, or appropriately scoped test to evaluate an explicit obligation. Record tool versions, dependencies, and the trusted components of the result.",
  },
  {
    number: "03",
    title: "Mediate",
    scope: "Connect the specification to execution.",
    detail: "Place a control at the relevant action boundary. Its scope, coverage, bypass assumptions, and response to failed checks define the enforcement claim.",
  },
  {
    number: "04",
    title: "Inspect",
    scope: "Make the evidence independently examinable.",
    detail: "Retain records needed to reconstruct a decision and distinguish an implemented control from a proposed one. Versioned code and reproducible tests supply the supporting evidence.",
  },
];

const researchPrinciples = [
  {
    number: "I",
    title: "Safety first",
    description: "Safety properties need precise statements, justified assumptions, and scrutiny of the execution paths to which a verified property applies.",
  },
  {
    number: "II",
    title: "Rigour",
    description: "Formal verification and proof-carrying code provide evidence for explicit specifications and proof obligations, within their stated scope.",
  },
  {
    number: "III",
    title: "Open collaboration",
    description: "Publishing source and evidence enables external examination. Reproducible checks and clear limitations make that examination meaningful.",
  },
  {
    number: "IV",
    title: "Practical innovation",
    description: "Connect academic formal methods to actual interfaces, deployment constraints, and the engineering evidence needed to assess their use.",
  },
];

/** Dates and original project aims retained from the pre-redesign site. */
const originalRoadmap = [
  {
    year: "2024",
    title: "Foundation",
    description: "The original site described the establishment of an open-source organisation and a core verification toolchain.",
  },
  {
    year: "2025",
    title: "Industry adoption",
    description: "The previous roadmap named finance, healthcare, and autonomous-systems pilots. Confirm individual pilot records before treating these as completed deployments.",
  },
  {
    year: "2026",
    title: "Standard setting",
    description: "The original objective concerned interoperable specifications and proof-exchange standards. Contributions must be identified through the relevant artifacts.",
  },
  {
    year: "2027+",
    title: "Ubiquitous verification",
    description: "The long-range ambition is wider formal verification in consequential applications, not a forecast or a claim of universal adoption.",
  },
];

const Mission = () => (
  <Layout>
    <Seo
      title="Research Method · Formal Verification and Runtime Enforcement | SentinelOps"
      description="SentinelOps examines how formal specifications, conditional proofs, runtime mediation, and reproducible evidence connect in autonomous systems."
      path="/mission"
    />

    <section className="border-b border-[hsl(var(--rule))] bg-[hsl(var(--paper-bright))]">
      <div className="container-paper py-16 sm:py-20 lg:py-24">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          <div className="lg:col-span-3">
            <div className="hero-kicker">Research method</div>
            <div className="eyebrow mt-4">Statement of purpose</div>
          </div>
          <div className="lg:col-span-9 max-w-5xl">
            <h1 className="mb-7">From formal claims to controlled execution.</h1>
            <p className="text-xl sm:text-2xl leading-relaxed max-w-4xl text-foreground/85">
              SentinelOps investigates the conditions under which specified properties of
              autonomous software have meaningful consequences at runtime.
            </p>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground">
              The work connects precise specifications, machine-checkable arguments,
              mediation of consequential effects, and records suitable for independent review.
              Each connection introduces assumptions that need to be made explicit.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="border-b border-[hsl(var(--rule))]">
      <div className="container-article article-paper">
        <div className="eyebrow mb-4">01 / Scope of formal evidence</div>
        <h2 className="mb-6">A proof has a domain of validity.</h2>
        <p>
          Empirical testing measures observed behaviour under selected conditions. Formal
          verification establishes a defined property relative to a model and its assumptions.
          Both contribute evidence, with distinct failure modes and limits of inference.
        </p>
        <p>
          An implementation introduces further questions. The executable system must reflect
          the model, the relevant actions must pass through the specified control, and changes
          to dependencies or environmental conditions must be evaluated against the original
          claim. A theorem about an abstract transition system does not establish the safety
          of every deployed instance.
        </p>
        <div className="border-y border-[hsl(var(--rule))] py-6 my-10">
          <div className="eyebrow mb-3">Scope statement</div>
          <p className="text-base leading-relaxed mb-0">
            Verification identifies what follows from explicit assumptions. Runtime evaluation
            identifies the paths and effects actually governed by the implementation. An
            independent conclusion depends on both records.
          </p>
        </div>
        <h2 className="mb-6">The interface is the research problem.</h2>
        <p>
          For tool-using agents, critical behavior occurs at interfaces with external systems.
          A policy expressed in natural language needs a precise interpretation. A proved
          obligation needs an implementation that enforces it. Evidence about an execution
          needs enough provenance to distinguish a checked action from an unobserved path.
        </p>
      </div>
    </section>

    <section className="border-b border-[hsl(var(--rule))]">
      <div className="container-paper py-16 sm:py-20">
        <div className="section-frame mb-10">
          <div className="section-heading">
            <div className="section-index">02 / Work programme</div>
            <div className="section-title">
              <h2>Four connected research tasks.</h2>
              <p className="text-muted-foreground mt-4 max-w-2xl">
                A proposed system must account for each interface before a broad end-to-end
                claim has adequate support.
              </p>
            </div>
          </div>
        </div>
        <ol className="border-t border-[hsl(var(--rule))]">
          {workProgramme.map((item) => (
            <li key={item.number} className="grid md:grid-cols-12 gap-4 md:gap-8 py-7 border-b border-[hsl(var(--rule))]">
              <div className="md:col-span-1 eyebrow text-primary pt-1">{item.number}</div>
              <div className="md:col-span-3">
                <h3>{item.title}</h3>
                <p className="text-sm mt-2 text-foreground/80">{item.scope}</p>
              </div>
              <p className="md:col-span-8 leading-relaxed text-muted-foreground max-w-3xl">{item.detail}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>

    <section className="border-b border-[hsl(var(--rule))] bg-[hsl(var(--paper-bright))]">
      <div className="container-paper py-16 sm:py-20">
        <div className="section-frame mb-10">
          <div className="section-heading">
            <div className="section-index">03 / Research principles</div>
            <div className="section-title">
              <h2>Claims proportionate to their evidence.</h2>
            </div>
          </div>
        </div>
        <ol className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {researchPrinciples.map((principle) => (
            <li key={principle.number} className="border-t border-[hsl(var(--rule-strong))] pt-5">
              <div className="eyebrow text-primary mb-4">{principle.number}</div>
              <h3 className="mb-3">{principle.title}</h3>
              <p className="text-muted-foreground leading-relaxed max-w-xl">{principle.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>

    <section className="border-b border-[hsl(var(--rule))]">
      <div className="container-paper py-16 sm:py-20">
        <div className="section-frame section-heading mb-9">
          <div className="section-index">04 / Comparison</div>
          <div className="section-title">
            <h2>Testing and formal verification.</h2>
            <p className="mt-4 max-w-3xl text-muted-foreground">
              The original site compared empirical test coverage with adoption of formal
              verification. Its numerical estimates lacked cited measurement methods.
              This comparison preserves the subject without presenting invented percentages.
            </p>
          </div>
        </div>
        <figure className="research-comparison">
          <div>
            <h3>Empirical testing</h3>
            <p>Examines observed outcomes under selected inputs and environments.</p>
            <p className="research-comparison__detail">
              Evidence to inspect: sampling, coverage, baselines, instrumentation, and failure records.
            </p>
          </div>
          <div>
            <h3>Formal verification</h3>
            <p>Establishes a precisely stated property under a model and explicit assumptions.</p>
            <p className="research-comparison__detail">
              Evidence to inspect: formal statement, dependencies, trusted checker, and implementation correspondence.
            </p>
          </div>
          <figcaption>
            Comparison adapted from the original programme figure. No unverified
            population-level coverage or adoption estimates are asserted.
          </figcaption>
        </figure>
      </div>
    </section>

    <section className="border-b border-[hsl(var(--rule))] bg-[hsl(var(--paper-bright))]">
      <div className="container-paper py-16 sm:py-20">
        <div className="section-frame section-heading mb-9">
          <div className="section-index">05 / Roadmap</div>
          <div className="section-title">
            <h2>Programme milestones and ambitions.</h2>
            <p className="mt-4 max-w-3xl text-muted-foreground">
              The dated programme sequence is retained from the original website as
              an editorial roadmap. A milestone's inclusion does not establish that
              a project, pilot, or standard was completed on that date.
            </p>
          </div>
        </div>
        <ol className="border-t border-[hsl(var(--rule))]">
          {originalRoadmap.map((entry) => (
            <li key={entry.year} className="grid md:grid-cols-12 gap-4 md:gap-8 py-6 border-b border-[hsl(var(--rule))]">
              <div className="md:col-span-2 text-primary">{entry.year}</div>
              <h3 className="md:col-span-3 text-lg">{entry.title}</h3>
              <p className="md:col-span-7 leading-relaxed text-muted-foreground">{entry.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>

    <section>
      <div className="container-paper py-16 sm:py-20">
        <div className="grid md:grid-cols-12 gap-8">
          <div className="md:col-span-3 eyebrow">06 / Participation and evidence</div>
          <div className="md:col-span-9 max-w-3xl">
            <h2 className="mb-5">Research is collective work.</h2>
            <p className="text-muted-foreground leading-relaxed mb-7">
              Implementations, open issues, release records, and research notes provide
              different kinds of evidence. Review the project repository for the versioned
              code and tests relevant to a particular claim.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <a
                href="https://github.com/orgs/SentinelOps-CI/repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 hover:text-primary"
              >
                Inspect repositories ↗
              </a>
              <Link to="/docs" className="underline underline-offset-4 hover:text-primary">
                Documentation index ↗
              </Link>
              <Link to="/blog" className="underline underline-offset-4 hover:text-primary">
                Research notes ↗
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Mission;
