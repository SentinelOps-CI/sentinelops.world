import Layout from "@/components/Layout";
import ResearchNote from "@/components/ResearchNote";
import Seo from "@/components/Seo";

const MappingSpace = () => (
  <Layout>
    <Seo
      title="Mapping the Verification Space · SentinelOps"
      description="Technical taxonomy of verification objectives and evidence boundaries for autonomous systems."
      path="/blog/mapping-the-space"
      type="article"
      jsonLd={{
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "Mapping the Verification Space",
        datePublished: "2025-06-15",
        description:
          "Technical taxonomy of verification objectives and evidence boundaries for autonomous systems.",
        author: { "@type": "Organization", name: "SentinelOps" },
      }}
    />

    <ResearchNote
      section="Technical taxonomy"
      date="June 15, 2025"
      readTime="15 min read"
      title="Mapping the Verification Space"
      dek="Verification for autonomous systems spans several distinct questions. One question concerns permitted actions. Another concerns information flow. Others concern provenance, execution context, or reproducibility. Serious system design keeps these claims separate and connects them through explicit interfaces."
    >
      <section className="grid gap-6 border-t border-border pt-8 md:grid-cols-[150px_1fr] md:gap-10">
        <div className="eyebrow">01 · Claim classes</div>
        <div className="space-y-7">
          <h2 className="text-2xl font-medium tracking-tight">Verification starts by naming the property</h2>
          <div className="divide-y divide-border border-y border-border">
            {[
              ["Action admissibility", "The runtime decides whether an effect is permitted under the active policy state. Finite-state monitors fit temporal constraints and action sequences with explicit event semantics."],
              ["Information flow", "The system tracks provenance and sensitivity across data movement. Local acceptance rules need a stated bridge to any broader non-interference claim."],
              ["Permission state", "Calls and data operations reference a defined authorization state. Epoch semantics fix the policy snapshot used for each decision and give revocation a testable meaning."],
              ["Artifact provenance", "Certificates bind runtime records to the policy and implementation artifacts used for evaluation. Signatures and supply-chain records support independent identity checks."],
              ["Execution context", "Trusted hardware or cryptographic proofs address claims about the environment in which computation occurred. Those mechanisms answer a different question from runtime policy enforcement."],
              ["Replay consistency", "Recorded traces support reconstruction of selected executions. Deterministic profiles improve incident analysis and implementation comparison."],
            ].map(([title, body]) => (
              <div key={title} className="grid gap-3 py-6 md:grid-cols-[180px_1fr] md:gap-8">
                <h3 className="font-medium text-foreground">{title}</h3>
                <p className="leading-7 text-foreground/75">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-6 border-t border-border pt-8 md:grid-cols-[150px_1fr] md:gap-10">
        <div className="eyebrow">02 · Boundaries</div>
        <div className="space-y-6">
          <h2 className="text-2xl font-medium tracking-tight">Enforcement, attestation, and audit answer different questions</h2>
          <p className="leading-7 text-foreground/80">
            Runtime enforcement decides whether an effect proceeds. Attestation records facts about software or execution context. Audit reconstructs the basis for a prior decision. Each function keeps its own guarantee even under one product surface.
          </p>
          <p className="leading-7 text-foreground/80">
            Claim boundaries matter most at interfaces. Binary attestation addresses software identity or execution context. Certificate validity addresses evidence binding to a named policy. Replay addresses reconstruction under a declared trace model. Each claim has a distinct evidentiary target.
          </p>
        </div>
      </section>

      <section className="grid gap-6 border-t border-border pt-8 md:grid-cols-[150px_1fr] md:gap-10">
        <div className="eyebrow">03 · Runtime interface</div>
        <div className="space-y-7">
          <h2 className="text-2xl font-medium tracking-tight">The runtime boundary needs four stable identities</h2>
          <div className="grid gap-px border border-border bg-border md:grid-cols-2">
            {[
              ["Policy identity", "Names the specification governing the current decision."],
              ["State identity", "Names the monitor and authorization state used at the decision point."],
              ["Artifact identity", "Names the implementation and proof artifacts associated with the verdict."],
              ["Trace identity", "Names the recorded execution fragment used for replay and external review."],
            ].map(([title, body]) => (
              <div key={title} className="bg-background p-6">
                <h3 className="font-medium">{title}</h3>
                <p className="mt-3 leading-7 text-foreground/75">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-6 border-t border-border pt-8 md:grid-cols-[150px_1fr] md:gap-10">
        <div className="eyebrow">04 · Evaluation</div>
        <div className="space-y-6">
          <h2 className="text-2xl font-medium tracking-tight">Evaluation follows the claim boundary</h2>
          <p className="leading-7 text-foreground/80">
            Monitor evaluation tests semantic agreement and execution coverage. Information-flow evaluation tests observer views under controlled trace variation. Permission evaluation tests state transitions and revocation semantics. Provenance evaluation tests identity binding. Replay evaluation tests reconstruction fidelity.
          </p>
          <div className="overflow-x-auto border-y border-border">
            <table className="w-full min-w-[700px] border-collapse text-left text-sm">
              <thead className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                <tr className="border-b border-border">
                  <th className="py-4 pr-6 font-medium">Claim</th>
                  <th className="py-4 pr-6 font-medium">Primary test</th>
                  <th className="py-4 font-medium">Failure signal</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-foreground/75">
                <tr><td className="py-4 pr-6 font-medium text-foreground">Action policy</td><td className="py-4 pr-6">Reference semantics against runtime verdict</td><td className="py-4">Verdict disagreement</td></tr>
                <tr><td className="py-4 pr-6 font-medium text-foreground">Information flow</td><td className="py-4 pr-6">Low-view comparison across controlled traces</td><td className="py-4">Observer-view divergence</td></tr>
                <tr><td className="py-4 pr-6 font-medium text-foreground">Permission state</td><td className="py-4 pr-6">Epoch and revocation transition tests</td><td className="py-4">State mismatch</td></tr>
                <tr><td className="py-4 pr-6 font-medium text-foreground">Evidence record</td><td className="py-4 pr-6">Independent certificate verification</td><td className="py-4">Broken identity binding</td></tr>
                <tr><td className="py-4 pr-6 font-medium text-foreground">Replay</td><td className="py-4 pr-6">Trace reconstruction under declared profile</td><td className="py-4">Reconstruction divergence</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="grid gap-6 border-t border-border pt-8 md:grid-cols-[150px_1fr] md:gap-10">
        <div className="eyebrow">05 · Design rule</div>
        <div className="space-y-5">
          <h2 className="text-2xl font-medium tracking-tight">Keep guarantees compositional</h2>
          <p className="leading-7 text-foreground/80">
            Verification infrastructure gains credibility through narrow claims with explicit dependencies. Runtime monitors establish action-policy properties. Provenance records establish artifact identity. Attestation mechanisms establish facts about execution context. The system record links those claims through named artifacts and stated assumptions.
          </p>
          <p className="leading-7 text-foreground/80">
            This separation supports replacement of individual components and preserves the meaning of evidence across implementation changes. It also provides external evaluators with a tractable target for independent checking.
          </p>
        </div>
      </section>
    </ResearchNote>
  </Layout>
);

export default MappingSpace;
