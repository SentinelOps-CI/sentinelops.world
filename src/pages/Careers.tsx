import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import { Link } from "react-router-dom";

const areas = [
  {
    number: "01",
    title: "Formal methods",
    description: "Theorem statements, proof obligations, trusted components, and the translation of policy requirements into precise specifications.",
  },
  {
    number: "02",
    title: "Runtime control",
    description: "Mediation of agent actions, admissibility decisions, tool interfaces, and evidence about the effects that an execution boundary governs.",
  },
  {
    number: "03",
    title: "Reproducible evaluation",
    description: "Test design, independent checks, failure analysis, and clear records of what an experiment or verifier result establishes.",
  },
  {
    number: "04",
    title: "Technical documentation",
    description: "Accurate implementation guides, architecture explanations, and contributor-facing material tied to versioned source.",
  },
];

/** Original site role profiles, retained with vacancy status unverified. */
const earlierRoleProfiles = [
  {
    title: "Formal Verification Engineer",
    arrangement: "Full-time · Remote",
    description: "Develop proof systems and verification tools for behavioural safety of autonomous agents. Work primarily with Lean and Rust. Supporting systems use Coq and TypeScript.",
  },
  {
    title: "ML Safety Researcher",
    arrangement: "Full-time · Remote",
    description: "Research and formalize safety constraints plus verification patterns for machine-learning systems. Publish artifacts and datasets alongside reproducible benchmarks and written results.",
  },
  {
    title: "Developer Experience Engineer",
    arrangement: "Full-time · Remote",
    description: "Make formal verification accessible through technical writing and tooling. Build end-to-end developer onboarding. Maintain documentation and examples alongside CI and contributor pathways.",
  },
];

const originalValues = [
  { title: "Safety first", description: "We prioritize the soundness and reliability of AI systems above all else." },
  { title: "Open source", description: "We work in the open and publish artifacts designed for independent reproduction." },
  { title: "Community", description: "We foster an inclusive environment where diverse perspectives strengthen the work." },
  { title: "Impact", description: "We build tools that meaningfully shape the future of trustworthy AI." },
];

const Careers = () => (
  <Layout>
    <Seo
      title="Research Participation and Careers | SentinelOps"
      description="Areas of technical contribution to SentinelOps verification research, public repositories, and a contact path for employment inquiries."
      path="/careers"
    />

    <section className="border-b border-[hsl(var(--rule))] bg-[hsl(var(--paper-bright))]">
      <div className="container-paper py-16 sm:py-20 lg:py-24">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-14 items-start">

<div className="lg:col-span-12 max-w-4xl">
            <h1 className="mb-7">Contribute to the research.</h1>
            <p className="text-xl sm:text-2xl leading-relaxed max-w-3xl">
              SentinelOps maintains public source repositories concerned with formal
              verification and controlled execution of autonomous systems.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-5 max-w-3xl">
              This page describes areas of technical contribution; it is not a listing of
              confirmed paid vacancies. Employment availability and terms must be established
              through direct correspondence.
            </p>
          </div>
        </div>
      </div>
    </section>

    <div className="container-paper py-16 sm:py-20">
      <section className="mb-16">
        <div className="section-frame section-heading mb-9">
          <div className="section-index">01 / Research areas</div>
          <div className="section-title"><h2>Where contributions matter.</h2></div>
        </div>
        <ol className="border-t border-[hsl(var(--rule))]">
          {areas.map((area) => (
            <li key={area.number} className="grid md:grid-cols-12 gap-4 md:gap-8 py-7 border-b border-[hsl(var(--rule))]">
              <div className="md:col-span-1 eyebrow text-primary pt-1">{area.number}</div>
              <div className="md:col-span-4"><h3>{area.title}</h3></div>
              <div className="md:col-span-7 text-muted-foreground leading-relaxed">{area.description}</div>
            </li>
          ))}
        </ol>
      </section>

      <section className="mb-16">
        <div className="section-frame section-heading mb-8">
          <div className="section-index">02 / Open-source work</div>
          <div className="section-title"><h2>Begin with a specific repository.</h2></div>
        </div>
        <div className="max-w-3xl ml-auto">
          <p className="text-muted-foreground leading-relaxed mb-6">
            Technical questions, narrowly scoped improvements, and reproducible issue reports
            are most useful alongside the implementation they concern. Review a project's
            contribution instructions and existing discussion before proposing a change.
          </p>
          <a
            href="https://github.com/orgs/SentinelOps-CI/repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 hover:text-primary"
          >
            Inspect the source repositories ↗
          </a>
        </div>
      </section>

      <section className="mb-16" aria-labelledby="career-profiles">
        <div className="section-frame section-heading mb-8">
          <div className="section-index">03 / Earlier role profiles</div>
          <div className="section-title">
            <h2 id="career-profiles">Technical roles described on the original site.</h2>
            <p className="mt-4 max-w-3xl text-muted-foreground">
              The original website presented three full-time, remote positions.
              These descriptions are retained for continuity. No active vacancy,
              hiring commitment, compensation, or work arrangement is confirmed here.
            </p>
          </div>
        </div>
        <ol className="border-t border-[hsl(var(--rule))]">
          {earlierRoleProfiles.map((role, i) => (
            <li key={role.title} className="grid md:grid-cols-12 gap-4 md:gap-8 py-7 border-b border-[hsl(var(--rule))]">
              <div className="md:col-span-1 text-sm text-primary">0{i + 1}</div>
              <div className="md:col-span-4">
                <h3 className="text-lg">{role.title}</h3>
                <p className="text-sm mt-2 text-muted-foreground">
                  Original listing: {role.arrangement}
                </p>
              </div>
              <p className="md:col-span-7 leading-relaxed text-muted-foreground">{role.description}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mb-16" aria-labelledby="values-heading">
        <div className="section-frame section-heading mb-8">
          <div className="section-index">04 / Principles</div>
          <div className="section-title">
            <h2 id="values-heading">What we value.</h2>
          </div>
        </div>
        <dl className="border-t border-[hsl(var(--rule))]">
          {originalValues.map((value) => (
            <div key={value.title} className="grid md:grid-cols-12 gap-4 md:gap-8 py-5 border-b border-[hsl(var(--rule))]">
              <dt className="md:col-span-3 text-lg">{value.title}</dt>
              <dd className="md:col-span-9 text-muted-foreground leading-relaxed">{value.description}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section>
        <div className="section-frame section-heading mb-8">
          <div className="section-index">05 / Correspondence</div>
          <div className="section-title"><h2>Employment inquiries.</h2></div>
        </div>
        <div className="max-w-3xl ml-auto">
          <p className="text-muted-foreground leading-relaxed">
            For a question about potential roles or formal collaboration, include your
            research interests, a résumé, and links to relevant contributions or
            publications. The original site described technical interviews, research
            time, equipment support, publication freedom, and a conference budget.
            Those arrangements and any vacancy must be confirmed directly.
          </p>
          <div className="flex flex-wrap gap-5 mt-6">
            <a
              href="mailto:careers@sentinelops.dev"
              className="underline underline-offset-4 hover:text-primary"
            >
              careers@sentinelops.dev ↗
            </a>
            <Link to="/contact" className="underline underline-offset-4 hover:text-primary">
              Other contact channels ↗
            </Link>
          </div>
        </div>
      </section>
    </div>
  </Layout>
);

export default Careers;
