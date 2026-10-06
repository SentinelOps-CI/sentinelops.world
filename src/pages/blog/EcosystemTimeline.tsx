import Layout from "@/components/Layout";
import ResearchNote from "@/components/ResearchNote";
import Seo from "@/components/Seo";

const phases = [
  {
    period: "2025",
    title: "Reference implementation",
    objective:
      "Establish a complete path from policy artifact to mediated runtime decision, certificate record, and replay bundle.",
    evidence:
      "Public schemas, reference verifiers, conformance traces, runtime measurements, and reproducible incident records.",
    exit:
      "Independent teams reproduce selected verdicts from exported artifacts and identify implementation disagreements through the conformance suite.",
  },
  {
    period: "2026",
    title: "Cross-implementation interoperability",
    objective:
      "Move from one reference stack to multiple implementations that share certificate semantics, replay profiles, and permission-state conventions.",
    evidence:
      "Cross-runtime certificate verification, replay comparison, version-transition tests, and third-party evaluation reports.",
    exit:
      "Evidence produced by one implementation is accepted by an independent verifier built from the public specification and reference material.",
  },
  {
    period: "2027",
    title: "Deployment integration",
    objective:
      "Place verification gates inside production deployment and execution workflows for consequential autonomous actions.",
    evidence:
      "Production conformance records, incident reconstruction data, policy-version histories, and public interface specifications.",
    exit:
      "Operational teams treat policy identity and verification evidence as standard deployment artifacts across supported environments.",
  },
];

const EcosystemTimeline = () => (
  <Layout>
    <Seo
      title="Verification Infrastructure Development Sequence · SentinelOps"
      description="Staged development sequence for verification infrastructure from reference implementation through production integration."
      path="/blog/ecosystem-development-timeline"
      type="article"
      jsonLd={{
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "Verification Infrastructure Development Sequence",
        datePublished: "2025-07-15",
        description:
          "Staged development sequence for verification infrastructure from reference implementation through production integration.",
        author: { "@type": "Organization", name: "SentinelOps" },
      }}
    />

    <ResearchNote
      section="Development sequence"
      date="July 15, 2025"
      readTime="8 min read"
      title="Verification Infrastructure Development Sequence"
      dek="The development sequence moves from a reference implementation to cross-implementation evidence and then to production integration. Each phase has a different technical objective. External verification artifacts provide the primary measure of progress. Adoption claims provide secondary context."
    >
      <section className="border-t border-border pt-8">
        <div className="grid gap-6 md:grid-cols-[150px_1fr] md:gap-10">
          <div className="eyebrow">01 · Sequence</div>
          <div>
            <h2 className="text-2xl font-medium tracking-tight">Three phases, three exit tests</h2>
            <div className="mt-7 divide-y divide-border border-y border-border">
              {phases.map((phase) => (
                <div key={phase.period} className="grid gap-5 py-7 md:grid-cols-[90px_170px_1fr] md:gap-7">
                  <div className="font-mono text-sm text-muted-foreground">{phase.period}</div>
                  <h3 className="font-medium">{phase.title}</h3>
                  <div className="space-y-4 text-sm leading-6 text-foreground/75">
                    <p><span className="font-medium text-foreground">Objective. </span>{phase.objective}</p>
                    <p><span className="font-medium text-foreground">Evidence. </span>{phase.evidence}</p>
                    <p><span className="font-medium text-foreground">Exit test. </span>{phase.exit}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-6 border-t border-border pt-8 md:grid-cols-[150px_1fr] md:gap-10">
        <div className="eyebrow">02 · Phase one</div>
        <div className="space-y-5">
          <h2 className="text-2xl font-medium tracking-tight">Reference implementation</h2>
          <p className="leading-7 text-foreground/80">
            The first phase establishes semantic closure across the stack. Source policy, compiled monitor, runtime verdict, evidence record, and replay result need a shared identity model. The main engineering risk is a gap between the declared semantics and the deployed decision path.
          </p>
          <p className="leading-7 text-foreground/80">
            Public conformance traces serve as the central artifact. Each trace states the expected decision under the reference semantics. The deployed runtime records its own decision and evidence bundle. Disagreement produces a test case for implementation correction.
          </p>
        </div>
      </section>

      <section className="grid gap-6 border-t border-border pt-8 md:grid-cols-[150px_1fr] md:gap-10">
        <div className="eyebrow">03 · Phase two</div>
        <div className="space-y-5">
          <h2 className="text-2xl font-medium tracking-tight">Cross-implementation interoperability</h2>
          <p className="leading-7 text-foreground/80">
            The second phase tests whether evidence preserves meaning across independently built systems. Shared schemas are necessary, though schema compatibility alone is insufficient. Certificate fields need common interpretation. Replay profiles need comparable semantics. Version transitions need explicit rules.
          </p>
          <p className="leading-7 text-foreground/80">
            Interoperability events focus on verifier agreement and replay reconstruction across implementations. Results are published as compatibility records with identified semantic differences instead of aggregate scores that hide disagreement.
          </p>
        </div>
      </section>

      <section className="grid gap-6 border-t border-border pt-8 md:grid-cols-[150px_1fr] md:gap-10">
        <div className="eyebrow">04 · Phase three</div>
        <div className="space-y-5">
          <h2 className="text-2xl font-medium tracking-tight">Production integration</h2>
          <p className="leading-7 text-foreground/80">
            The third phase moves verification records into ordinary deployment practice. Policy identity forms part of release metadata. Runtime verdicts form part of effect records. Replay artifacts join incident handling. Version transitions join change control.
          </p>
          <p className="leading-7 text-foreground/80">
            This phase is complete once external evaluation stays feasible under production constraints. Performance optimization preserves evidence identity and semantic traceability.
          </p>
        </div>
      </section>

      <section className="grid gap-6 border-t border-border pt-8 md:grid-cols-[150px_1fr] md:gap-10">
        <div className="eyebrow">05 · Programme metrics</div>
        <div className="space-y-7">
          <h2 className="text-2xl font-medium tracking-tight">Measure evidence quality directly</h2>
          <div className="overflow-x-auto border-y border-border">
            <table className="w-full min-w-[660px] border-collapse text-left text-sm">
              <thead className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                <tr className="border-b border-border">
                  <th className="py-4 pr-6 font-medium">Measure</th>
                  <th className="py-4 font-medium">Interpretation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-foreground/75">
                <tr><td className="py-4 pr-6 font-medium text-foreground">Verifier agreement</td><td className="py-4">Independent implementations reach the same result from the same declared artifacts.</td></tr>
                <tr><td className="py-4 pr-6 font-medium text-foreground">Replay consistency</td><td className="py-4">Selected traces reconstruct the production decision under the declared profile.</td></tr>
                <tr><td className="py-4 pr-6 font-medium text-foreground">Policy coverage</td><td className="py-4">Consequential effects pass through a governed decision path with named policy identity.</td></tr>
                <tr><td className="py-4 pr-6 font-medium text-foreground">Version traceability</td><td className="py-4">Evidence records preserve the policy and runtime identities associated with each decision.</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </ResearchNote>
  </Layout>
);

export default EcosystemTimeline;
