import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import { Link } from "react-router-dom";

const publicSurfaces = [
  { number: "01", name: "Public website", description: "Production site and public research pages.", href: "https://sentinelops.world/", label: "sentinelops.world", earlierState: "Operational" },
  { number: "02", name: "Source repositories", description: "Source control, implementation history, and release records.", href: "https://github.com/orgs/SentinelOps-CI/repositories", label: "GitHub · SentinelOps-CI", earlierState: "Published" },
  { number: "03", name: "Documentation", description: "Technical documentation and project reference sources.", href: "https://sentinelops.world/docs", label: "sentinelops.world/docs", earlierState: "Published" },
  { number: "04", name: "Newsletter", description: "Public subscription interface for research updates; no uptime or delivery monitoring is asserted.", href: "https://sentinelops.world/blog", label: "Subscription form", earlierState: "Active" },
  { number: "05", name: "Research archive", description: "Previously published research notes and documents.", href: "https://sentinelops.world/blog", label: "Writing index", earlierState: "" },
];

/** An editorial register, not a live monitor or uptime assertion. */
const Status = () => (
  <Layout>
    <Seo
      title="Public Infrastructure and Incident Records | SentinelOps"
      description="Public SentinelOps endpoints, recorded service incidents, and links to source repositories. This page does not provide live uptime telemetry."
      path="/status"
    />

    <section className="border-b border-[hsl(var(--rule))] bg-[hsl(var(--paper-bright))]">
      <div className="container-paper py-16 sm:py-20 lg:py-24">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          <div className="lg:col-span-3">
            <div className="hero-kicker">Infrastructure</div>
            <div className="eyebrow mt-4">Public reference</div>
          </div>
          <div className="lg:col-span-9 max-w-4xl">
            <h1 className="mb-7">Public services and incidents.</h1>
            <p className="text-xl sm:text-2xl leading-relaxed max-w-3xl">
              A directory of public SentinelOps services and recorded technical issues.
            </p>
            <p className="mt-5 text-base text-muted-foreground leading-relaxed max-w-3xl">
              This page is maintained as a dated editorial record. It does not measure
              availability continuously, publish uptime percentages, or represent a live
              incident-monitoring system.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="border-b border-[hsl(var(--rule))]">
      <div className="container-paper py-16 sm:py-20">
        <div className="section-frame mb-10">
          <div className="section-heading">
            <div className="section-index">01 / Public endpoints</div>
            <div className="section-title">
              <h2>Service register.</h2>
              <p className="text-muted-foreground mt-3 max-w-2xl">
                This register retains the original website, source, documentation, and
                newsletter entries. Their earlier status labels are editorial, not live monitoring.
              </p>
            </div>
          </div>
        </div>

        <dl className="border-t border-[hsl(var(--rule-strong))]">
          {publicSurfaces.map((surface) => (
            <div
              key={surface.number}
              className="grid md:grid-cols-12 gap-4 md:gap-8 py-7 border-b border-[hsl(var(--rule))]"
            >
              <dt className="md:col-span-1 eyebrow text-primary pt-1">{surface.number}</dt>
              <dd className="md:col-span-3">
                <h3 className="text-lg">{surface.name}</h3>
              </dd>
              <dd className="md:col-span-5 text-muted-foreground leading-relaxed">
                {surface.description}
                {surface.earlierState && (
                  <div className="mt-2 text-xs">
                    Earlier site label: {surface.earlierState} (not live telemetry)
                  </div>
                )}
              </dd>
              <dd className="md:col-span-3 md:text-right">
                <a
                  href={surface.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 hover:text-primary text-sm"
                >
                  {surface.label} ↗
                </a>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>

    <section className="border-b border-[hsl(var(--rule))] bg-[hsl(var(--paper-bright))]">
      <div className="container-paper py-16 sm:py-20">
        <div className="section-frame mb-10">
          <div className="section-heading">
            <div className="section-index">02 / Recorded issue</div>
            <div className="section-title">
              <h2>Operational history and incident record.</h2>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-12 gap-6 md:gap-10 border-t border-[hsl(var(--rule))] pt-7">
          <div className="md:col-span-3">
            <div className="eyebrow mb-2">Observed</div>
            <time dateTime="2026-11-19" className="text-sm">19 November 2026</time>
          </div>
          <div className="md:col-span-7 max-w-3xl">
            <p className="leading-relaxed">
              An external HTTPS check of the apex domain received a certificate for the
              <span className="mx-1">www</span> hostname, which failed hostname validation.
              The DNS response also included conflicting apex addresses. The production build
              succeeded separately from this network-level issue.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Configuration investigation and acceptance checks are tracked in the public
              repository. The issue record contains the latest documented progress; this
              page does not claim the incident has been resolved.
            </p>
            <a
              href="https://github.com/SentinelOps-CI/sentinelops.world/issues/3"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-5 underline underline-offset-4 hover:text-primary"
            >
              View incident record ↗
            </a>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div className="container-paper py-14 sm:py-16">
        <div className="grid md:grid-cols-12 gap-6">
          <div className="md:col-span-3 eyebrow">03 / Report a problem</div>
          <div className="md:col-span-9 max-w-3xl">
            <h2 className="mb-4">Technical issue reporting.</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Issues with public infrastructure and research materials belong in the relevant
              repository's issue tracker. For correspondence that is unsuitable for a
              public issue, use the contact page.
            </p>
            <div className="flex flex-wrap gap-5">
              <a
                href="https://github.com/SentinelOps-CI/sentinelops.world/issues"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 hover:text-primary"
              >
                Website issue tracker ↗
              </a>
              <Link to="/contact" className="underline underline-offset-4 hover:text-primary">
                Contact SentinelOps ↗
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Status;
