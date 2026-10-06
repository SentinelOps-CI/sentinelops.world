import Layout from "@/components/Layout";
import Seo from "@/components/Seo";

const Careers = () => {
  const openings = [
    {
      title: "Formal Verification Engineer",
      type: "Full-time · Remote",
      description:
        "Develop proof systems and verification tools for behavioural safety of autonomous agents. Work primarily with Lean and Rust. Supporting systems use Coq and TypeScript.",
    },
    {
      title: "ML Safety Researcher",
      type: "Full-time · Remote",
      description:
        "Research and formalize safety constraints plus verification patterns for machine-learning systems. Publish artifacts and datasets alongside reproducible benchmarks and written results.",
    },
    {
      title: "Developer Experience Engineer",
      type: "Full-time · Remote",
      description:
        "Make formal verification accessible through technical writing and tooling. Build end-to-end developer onboarding. Maintain documentation and examples alongside CI and contributor pathways.",
    },
  ];

  const values = [
    { title: "Safety first", body: "We prioritize the soundness and reliability of AI systems above all else." },
    { title: "Open source", body: "We work in the open and publish artifacts designed for independent reproduction." },
    { title: "Community", body: "We foster an inclusive environment where diverse perspectives strengthen the work." },
    { title: "Impact", body: "We build tools that meaningfully shape the future of trustworthy AI." },
  ];

  return (
    <Layout>
      <Seo
        title="Careers · Join the Verified-AI Mission | SentinelOps"
        description="Open roles and collaboration paths at SentinelOps for researchers and engineers building open-source infrastructure for provably safe AI systems."
        path="/careers"
      />
      <article className="container-article article-paper">
        <header className="mb-12 pb-8 border-b border-border">
          <div className="eyebrow mb-4">Programme · Calls for collaboration</div>
          <h1 className="font-light tracking-tight text-4xl md:text-5xl leading-[1.05]">Careers</h1>
          <p className="mt-6 text-lg italic text-foreground/80">
            We are convening a small group of researchers and engineers committed to building the open
            infrastructure for provably safe AI. The work is technical, durable, and conducted in the open.
          </p>
        </header>

        <section className="mb-16">
          <div className="eyebrow mb-6">§ I · Open Positions</div>
          <div className="space-y-10">
            {openings.map((o, i) => (
              <article key={i} className="grid grid-cols-12 gap-4">
                <div className="col-span-12 sm:col-span-3 eyebrow pt-1">{String(i + 1).padStart(2, "0")}</div>
                <div className="col-span-12 sm:col-span-9">
                  <h3 className="font-light text-2xl mb-1 tracking-tight">{o.title}</h3>
                  <div className="eyebrow mb-3">{o.type}</div>
                  <p className="text-base">{o.description}</p>
                  <a href="mailto:careers@sentinelops.dev" className="eyebrow inline-block mt-3 hover:text-foreground transition-colors">
                    → Apply by writing to us
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <div className="eyebrow mb-6">§ II · How to Apply</div>
          <p>
            Write to <a href="mailto:careers@sentinelops.dev">careers@sentinelops.dev</a> with a brief note on
            your interest, a résumé, and any open-source contributions or publications relevant to the role.
            Initial conversations are unstructured. Subsequent steps include a technical discussion and a
            meeting with the team you would work alongside.
          </p>
        </section>

        <section className="mb-16">
          <div className="eyebrow mb-6">§ III · What We Value</div>
          <dl className="divide-y divide-border border-y border-border">
            {values.map((v, i) => (
              <div key={i} className="grid grid-cols-12 gap-4 py-5">
                <dt className="col-span-12 sm:col-span-3 font-sans font-medium text-base">{v.title}</dt>
                <dd className="col-span-12 sm:col-span-9 text-base">{v.body}</dd>
              </div>
            ))}
          </dl>
        </section>

        <footer className="mt-16 pt-8 border-t border-border text-sm text-muted-foreground italic">
          Remote-first. The role includes generous research time and a conference budget. Equipment and publication freedom support the work.
        </footer>
      </article>
    </Layout>
  );
};

export default Careers;
