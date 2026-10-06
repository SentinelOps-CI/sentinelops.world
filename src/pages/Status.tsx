import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import { Link } from "react-router-dom";

const Status = () => {
  const services = [
    {
      index: "01",
      name: "Public website",
      endpoint: "sentinelops.world",
      state: "Operational",
      detail: "Production site and public research pages",
    },
    {
      index: "02",
      name: "Source repositories",
      endpoint: "GitHub · SentinelOps-CI",
      state: "Published",
      detail: "Source control and release history for SentinelOps projects",
    },
    {
      index: "03",
      name: "Documentation",
      endpoint: "sentinelops.world/docs",
      state: "Published",
      detail: "Technical documentation and research references",
    },
    {
      index: "04",
      name: "Newsletter",
      endpoint: "Supabase",
      state: "Active",
      detail: "Subscription endpoint for SentinelOps updates",
    },
  ];

  return (
    <Layout>
      <Seo
        title="System Status · SentinelOps"
        description="Operational record for SentinelOps infrastructure, service state, and incident reporting."
        path="/status"
      />

      <section className="border-b border-[hsl(var(--rule))] bg-[hsl(var(--paper-bright))]">
        <div className="container-paper py-16 sm:py-20 lg:py-24">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-end">
            <div className="lg:col-span-8">
              <div className="hero-kicker mb-7">Operations</div>
              <h1 className="max-w-4xl">System status.</h1>
              <p className="font-serif text-xl sm:text-2xl leading-[1.45] text-foreground/[0.82] mt-7 max-w-3xl">
                Public operational record for SentinelOps infrastructure. Service state and incident
                reporting are maintained here.
              </p>
            </div>

            <div className="lg:col-span-4 lg:border-l border-[hsl(var(--rule))] lg:pl-8">
              <div className="eyebrow mb-3">Current state</div>
              <div className="flex items-center gap-3">
                <span className="block h-2.5 w-2.5 bg-primary" aria-hidden="true" />
                <span className="font-sans text-xl font-medium">Operational</span>
              </div>
              <p className="text-sm text-muted-foreground mt-3 max-w-sm">
                Current incident register is clear. Service-impacting events are published on this page.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[hsl(var(--rule))]">
        <div className="container-paper py-16 sm:py-20">
          <div className="section-frame mb-10">
            <div className="section-heading">
              <div className="section-index">01 / Public surfaces</div>
              <div className="section-title">
                <h2>Service register</h2>
                <p className="text-muted-foreground mt-3 max-w-2xl">
                  Status labels describe the public SentinelOps surfaces represented in the production site.
                </p>
              </div>
            </div>
          </div>

          <div className="border-y border-[hsl(var(--rule-strong))]">
            {services.map((service) => (
              <div
                key={service.index}
                className="grid md:grid-cols-12 gap-4 md:gap-6 py-6 border-b border-[hsl(var(--rule))] last:border-b-0 items-start"
              >
                <div className="md:col-span-1 mono text-[0.68rem] text-muted-foreground pt-1">
                  {service.index}
                </div>
                <div className="md:col-span-4">
                  <h3 className="text-lg font-medium">{service.name}</h3>
                  <div className="mono text-[0.68rem] text-muted-foreground mt-1.5">{service.endpoint}</div>
                </div>
                <div className="md:col-span-5 text-sm text-foreground/[0.72] leading-relaxed">
                  {service.detail}
                </div>
                <div className="md:col-span-2 md:text-right">
                  <span className="inline-flex items-center gap-2 mono text-[0.66rem] uppercase tracking-[0.08em]">
                    <span className="block h-1.5 w-1.5 bg-primary" aria-hidden="true" />
                    {service.state}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[hsl(var(--rule))] bg-[hsl(var(--navy))] text-[hsl(var(--hero-foreground))]">
        <div className="container-paper py-16 sm:py-20">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
            <div className="lg:col-span-4">
              <div className="mono text-[0.66rem] uppercase tracking-[0.11em] text-white/[0.45] mb-5">
                02 / Incident record
              </div>
              <h2 className="!text-white">Operational history.</h2>
            </div>
            <div className="lg:col-span-8 lg:border-l border-white/20 lg:pl-10">
              <div className="mono text-[0.62rem] uppercase tracking-[0.12em] text-white/[0.45] mb-4">
                Current register
              </div>
              <p className="font-serif text-2xl leading-relaxed text-white/[0.82] max-w-3xl">
                Clear. Service-impacting events are recorded here with scope and resolution notes. Each entry includes duration.
              </p>
              <div className="mt-8 pt-6 border-t border-white/[0.15] grid sm:grid-cols-2 gap-6 text-sm text-white/[0.62]">
                <p>
                  Public infrastructure status follows the production surfaces listed above.
                </p>
                <p>
                  Provider-specific incidents are available through the relevant provider status services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container-paper py-14 sm:py-16">
          <div className="grid md:grid-cols-12 gap-6 items-start">
            <div className="md:col-span-3 eyebrow">Issue reporting</div>
            <div className="md:col-span-9 max-w-2xl">
              <p className="font-serif text-xl leading-relaxed">
                Technical issues and service-impacting reports are accepted through the SentinelOps contact channel.
              </p>
              <Link to="/contact" className="inline-block mt-5 nav-link text-primary hover:text-foreground">
                Contact SentinelOps ↗
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Status;
