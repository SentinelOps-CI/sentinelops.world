import Layout from "@/components/Layout";
import Seo from "@/components/Seo";

const Press = () => {
  const pressReleases = [
    {
      date: "2024-01-15",
      title: "SentinelOps launches open-source AI safety verification platform",
      summary: "New tools enable developers to mathematically prove AI system safety before deployment.",
    },
    {
      date: "2023-12-01",
      title: "SentinelOps receives backing for formal verification research",
      summary: "Funding supports development of proof-carrying behavior systems for autonomous agents.",
    },
  ];

  return (
    <Layout>
      <Seo
        title="Press & Media — SentinelOps"
        description="Press releases, founder quotes, brand assets, and background on SentinelOps — the open-source verification platform for safer AI."
        path="/press"
      />
      <article className="container-prose prose-paper">
        <header className="mb-12 pb-8 border-b border-border">
          <div className="eyebrow mb-4">Communications · Press dossier</div>
          <h1 className="font-light tracking-tight text-4xl md:text-5xl leading-[1.05]">Press</h1>
          <p className="mt-6 text-lg italic text-foreground/80">
            Resources for journalists, researchers, and partners covering SentinelOps and the broader
            verified-AI programme.
          </p>
        </header>

        <section className="mb-16">
          <div className="eyebrow mb-6">§ I — About SentinelOps</div>
          <p>
            SentinelOps develops open-source safety and verification tools for AI systems, enabling
            developers to construct machine-checkable guarantees about system behaviour before deployment.
            The work spans formal specification, runtime mediation, evidence schemas, and reproducible
            audit artifacts.
          </p>
          <p>
            Founded in 2023. Remote-first organisation.
          </p>
        </section>

        <section className="mb-16">
          <div className="eyebrow mb-6">§ II — Statement</div>
          <blockquote className="font-serif italic text-xl leading-snug text-foreground/[0.85]">
            As AI systems become more autonomous, we need mathematical certainty rather than testing and
            monitoring alone. SentinelOps connects formal verification research to the practical demands
            of deployment.
          </blockquote>
          <p className="eyebrow mt-4">— Founder, SentinelOps</p>
        </section>

        <section className="mb-16">
          <div className="eyebrow mb-6">§ III — Releases</div>
          <div className="space-y-8">
            {pressReleases.map((r, i) => (
              <article key={i} className="border-l-2 border-border pl-6">
                <div className="eyebrow mb-2">
                  {new Date(r.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
                </div>
                <h3 className="font-light text-xl mb-2 tracking-tight">{r.title}</h3>
                <p className="text-base text-foreground/[0.85]">{r.summary}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <div className="eyebrow mb-6">§ IV — Inquiries</div>
          <p>
            For interviews, embargoed information, or background briefings, write to{" "}
            <a href="mailto:press@sentinelops.dev">press@sentinelops.dev</a>. We typically respond within
            four hours on business days.
          </p>
          <p>
            Brand assets and screenshots are available on request.
          </p>
        </section>
      </article>
    </Layout>
  );
};

export default Press;
