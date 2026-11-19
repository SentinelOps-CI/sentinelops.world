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
          <div className="lg:col-span-3">
            <div className="hero-kicker">Participation</div>
            <div className="eyebrow mt-4">Research and careers</div>
          </div>
          <div className="lg:col-span-9 max-w-4xl">
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

      <section>
        <div className="section-frame section-heading mb-8">
          <div className="section-index">03 / Correspondence</div>
          <div className="section-title"><h2>Employment inquiries.</h2></div>
        </div>
        <div className="max-w-3xl ml-auto">
          <p className="text-muted-foreground leading-relaxed">
            For a question about potential roles or formal collaboration, include your
            research interests and links to relevant work. Any vacancy, hiring process,
            compensation, or work arrangement must be confirmed directly.
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
