import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import { Link } from "react-router-dom";

const references = [
  { title: "Research notes", path: "/blog", description: "Programme ideas, technical arguments, and references." },
  { title: "Project directory", path: "/products", description: "Repository links organized by research area." },
  { title: "Documentation", path: "/docs", description: "Entry points to implementation evidence and source material." },
];

/** Entries from the original website, preserved without independent verification. */
const earlierNotices = [
  {
    date: "2024-01-15",
    title: "SentinelOps launches open-source AI safety verification platform",
    summary: "New tools enable developers to establish mathematical safety properties prior to deployment.",
  },
  {
    date: "2023-12-01",
    title: "SentinelOps receives backing for formal verification research",
    summary: "Funding supports development of proof-carrying behavior systems for autonomous agents.",
  },
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

<div className="lg:col-span-12 max-w-4xl">
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

      <section className="mb-16" aria-labelledby="press-archive-title">
        <div className="section-frame section-heading mb-8">
          <div className="section-index">03 / Site archive</div>
          <div className="section-title">
            <h2 id="press-archive-title">Previous announcements.</h2>
            <p className="text-muted-foreground mt-4 max-w-3xl">
              These entries reproduce the titles, dates, and summaries presented on
              the original website. Independent publication records and any funding
              documentation have not been checked. They are preserved as archival
              site content, not confirmed current announcements.
            </p>
          </div>
        </div>
        <ol className="border-t border-[hsl(var(--rule))]">
          {earlierNotices.map((item) => (
            <li key={item.date} className="grid md:grid-cols-12 gap-4 md:gap-8 py-6 border-b border-[hsl(var(--rule))]">
              <time dateTime={item.date} className="md:col-span-3 text-sm text-muted-foreground">
                {new Date(item.date).toLocaleDateString("en-GB", {
                  day: "numeric", month: "long", year: "numeric", timeZone: "UTC",
                })}
              </time>
              <div className="md:col-span-9">
                <h3 className="text-lg mb-2">{item.title}</h3>
                <p className="leading-relaxed text-muted-foreground">{item.summary}</p>
              </div>
            </li>
          ))}
        </ol>
        <details className="research-source-note mt-7">
          <summary>Original founder statement and organizational description</summary>
          <blockquote className="mt-4 border-l-2 border-[hsl(var(--rule-strong))] pl-5">
            Greater AI autonomy raises the value of mathematical certainty.
            SentinelOps connects formal verification research to the practical
            demands of deployment.
          </blockquote>
          <p className="mt-3 text-sm text-muted-foreground">
            The prior site attributed this statement to the founder and described
            SentinelOps as founded in 2023 and remote-first. Attribution and
            organizational history need primary-source confirmation.
          </p>
        </details>
      </section>

      <section>
        <div className="section-frame section-heading mb-8">
          <div className="section-index">04 / Correspondence</div>
          <div className="section-title"><h2>Media inquiries.</h2></div>
        </div>
        <div className="max-w-3xl ml-auto">
          <p className="text-muted-foreground leading-relaxed">
            For a technical briefing, background information, or an inquiry about a
            particular publication, use the existing media contact channel. The
            previous website also listed brand assets, screenshots, and a four-hour
            response objective; availability and response times need confirmation.
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
