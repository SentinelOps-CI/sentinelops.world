import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import { Link } from "react-router-dom";

const references = [
  { title: "Research notes", path: "/blog", description: "Programme ideas, technical arguments, and references." },
  { title: "Project directory", path: "/products", description: "Repository links organized by research area." },
  { title: "Documentation", path: "/docs", description: "Entry points to implementation evidence and source material." },
];

const Press = () => (
  <Layout>
    <Seo
      title="Press and Research Background | SentinelOps"
      description="Reference material and contact details for journalists examining the SentinelOps open-source verification research programme."
      path="/press"
    />

    <section className="border-b border-[hsl(var(--rule))] bg-[hsl(var(--paper-bright))]">
      <div className="container-paper py-16 sm:py-20 lg:py-24">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          <div className="lg:col-span-3">
            <div className="hero-kicker">Background</div>
            <div className="eyebrow mt-4">Media reference</div>
          </div>
          <div className="lg:col-span-9 max-w-4xl">
            <h1 className="mb-7">Press and research background.</h1>
            <p className="text-xl sm:text-2xl leading-relaxed max-w-3xl">
              An introduction to SentinelOps and direct references for journalists and
              researchers examining its work.
            </p>
          </div>
        </div>
      </div>
    </section>

    <div className="container-paper py-16 sm:py-20">
      <section className="mb-16">
        <div className="section-frame section-heading mb-8">
          <div className="section-index">01 / About the programme</div>
          <div className="section-title"><h2>Formal methods for autonomous systems.</h2></div>
        </div>
        <div className="max-w-3xl ml-auto">
          <p className="leading-relaxed text-lg">
            SentinelOps is an open-source research programme concerned with the relation
            of formal specifications, runtime controls, and evidence for autonomous software.
            Its projects examine how particular system properties are stated, checked,
            connected to execution, and independently assessed.
          </p>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            The existence of code or a published research objective does not establish
            end-to-end safety. Claims about a specific implementation belong to its
            source version, stated assumptions, and verification record.
          </p>
        </div>
      </section>

      <section className="mb-16">
        <div className="section-frame section-heading mb-8">
          <div className="section-index">02 / References</div>
          <div className="section-title"><h2>Primary materials.</h2></div>
        </div>
        <dl className="border-t border-[hsl(var(--rule))]">
          {references.map((item) => (
            <div key={item.path} className="grid md:grid-cols-12 gap-4 md:gap-8 py-6 border-b border-[hsl(var(--rule))]">
              <dt className="md:col-span-4">
                <Link to={item.path} className="underline underline-offset-4 hover:text-primary">
                  {item.title} ↗
                </Link>
              </dt>
              <dd className="md:col-span-8 text-muted-foreground leading-relaxed">
                {item.description}
              </dd>
            </div>
          ))}
        </dl>
        <a
          href="https://github.com/orgs/SentinelOps-CI/repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6 underline underline-offset-4 hover:text-primary"
        >
          Public GitHub organization ↗
        </a>
      </section>

      <section>
        <div className="section-frame section-heading mb-8">
          <div className="section-index">03 / Correspondence</div>
          <div className="section-title"><h2>Media inquiries.</h2></div>
        </div>
        <div className="max-w-3xl ml-auto">
          <p className="text-muted-foreground leading-relaxed">
            For a technical briefing, background information, or an inquiry about a
            particular publication, use the existing media contact channel.
          </p>
          <a
            href="mailto:press@sentinelops.dev"
            className="inline-block mt-5 underline underline-offset-4 hover:text-primary"
          >
            press@sentinelops.dev ↗
          </a>
        </div>
      </section>
    </div>
  </Layout>
);

export default Press;
