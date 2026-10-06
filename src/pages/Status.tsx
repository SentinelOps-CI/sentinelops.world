
import Layout from "@/components/Layout";
import Seo from "@/components/Seo";

const Status = () => {
  const services = [
    {
      name: "GitHub Repositories",
      status: "operational",
      uptime: "99.98%",
      lastIncident: "No recent incidents"
    },
    {
      name: "Documentation Sites",
      status: "operational",
      uptime: "99.95%",
      lastIncident: "No recent incidents"
    },
    {
      name: "CI/CD Pipelines",
      status: "operational",
      uptime: "99.92%",
      lastIncident: "Minor delay Jan 10"
    }
  ];

  const incidents = [
    {
      date: "2024-01-10",
      title: "CI Pipeline Delays",
      description: "Brief delays in automated testing due to dependency server maintenance",
      status: "resolved",
      duration: "45 minutes"
    },
    {
      date: "2023-12-15",
      title: "Documentation Update",
      description: "Scheduled maintenance for documentation site improvements",
      status: "resolved",
      duration: "2 hours"
    }
  ];

  return (
    <Layout>
      <Seo
        title="System Status — SentinelOps Services & Repositories"
        description="Live operational status of SentinelOps repositories, documentation, and infrastructure — recent incidents and uptime."
        path="/status"
      />
      <article className="container-prose prose-paper">
        <header className="mb-12 pb-8 border-b border-border">
          <div className="eyebrow mb-4">Operations · All systems nominal</div>
          <h1 className="font-light tracking-tight text-4xl md:text-5xl leading-[1.05]">System Status</h1>
          <p className="mt-6 text-lg italic text-foreground/80">
            Current operational state of SentinelOps repositories, documentation, and continuous-integration infrastructure.
          </p>
        </header>

        <section className="mb-16">
          <div className="eyebrow mb-6">Table I · Service Status</div>
          <dl className="divide-y divide-border border-y border-border">
            {services.map((s, i) => (
              <div key={i} className="grid grid-cols-12 gap-4 py-5 items-baseline">
                <dt className="col-span-12 sm:col-span-5 font-sans font-medium text-base">{s.name}</dt>
                <dd className="col-span-7 sm:col-span-4 text-sm text-muted-foreground italic">{s.lastIncident}</dd>
                <dd className="col-span-5 sm:col-span-3 text-right mono text-sm text-foreground">
                  {s.uptime} <span className="text-muted-foreground"> uptime</span>
                </dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="mb-16">
          <div className="eyebrow mb-6">Table II · Recent Incidents</div>
          <div className="space-y-8">
            {incidents.map((inc, i) => (
              <article key={i} className="border-l-2 border-border pl-6">
                <div className="eyebrow mb-2">
                  {new Date(inc.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
                  {" · "}duration {inc.duration} · resolved
                </div>
                <h3 className="font-light text-xl mb-2">{inc.title}</h3>
                <p className="text-base text-foreground/[0.85]">{inc.description}</p>
              </article>
            ))}
          </div>
        </section>

        <footer className="mt-16 pt-8 border-t border-border text-sm text-muted-foreground italic">
          For technical support or to report issues, see the <a href="/contact">contact page</a>.
        </footer>
      </article>
    </Layout>
  );
};

export default Status;
