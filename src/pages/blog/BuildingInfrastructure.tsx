import Layout from "@/components/Layout";
import ResearchNote from "@/components/ResearchNote";
import Seo from "@/components/Seo";

const BuildingInfrastructure = () => (
  <Layout>
    <Seo
      title="Building Verification Infrastructure · SentinelOps"
      description="Technical note on the institutional structure and engineering structure of verification infrastructure for autonomous systems."
      path="/blog/building-verification-infrastructure"
      type="article"
      jsonLd={{
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "Building Verification Infrastructure",
        datePublished: "2025-08-15",
        description:
          "Technical note on the institutional structure and engineering structure of verification infrastructure for autonomous systems.",
        author: { "@type": "Organization", name: "SentinelOps" },
      }}
    />

    <ResearchNote
      section="Infrastructure note"
      date="August 15, 2025"
      readTime="10 min read"
      title="Building Verification Infrastructure"
      dek="Verification infrastructure is an engineering system and an institutional system at the same time. Specifications define admissible behavior. Monitors govern execution. Certificates record the basis for each decision. Replay artifacts support independent examination. Durable adoption depends on stable interfaces across that chain."
    >
      <section className="grid gap-6 border-t border-border pt-8 md:grid-cols-[150px_1fr] md:gap-10">
        <div className="eyebrow">01 · Unit of deployment</div>
        <div className="space-y-5 text-base leading-7 text-foreground/80">
          <h2 className="text-2xl font-medium tracking-tight text-foreground">Treat verification as infrastructure</h2>
          <p>
            Runtime verification has little institutional value as an isolated checker. Production use needs a chain that starts with an explicit policy and ends with evidence tied to an executed trace. Each stage needs an interface stable enough for independent implementation and external review.
          </p>
          <p>
            The relevant deployment unit is a verification contract. It states the governed actions. It identifies the active policy snapshot. It fixes the monitor semantics. It records the artifacts used to justify acceptance or rejection. This contract turns an internal control into an inspectable system boundary.
          </p>
        </div>
      </section>

      <section className="grid gap-6 border-t border-border pt-8 md:grid-cols-[150px_1fr] md:gap-10">
        <div className="eyebrow">02 · Division of work</div>
        <div>
          <h2 className="text-2xl font-medium tracking-tight">Different institutions own different proof obligations</h2>
          <div className="mt-7 divide-y divide-border border-y border-border">
            {[
              [
                "Research groups",
                "Establish semantics, proof obligations, monitor synthesis methods, and reference theorems. Their output is a claim with an explicit scope plus artifacts that support independent checking.",
              ],
              [
                "Platform teams",
                "Integrate mediation into execution paths. Their responsibility is complete effect interception, stable policy identity, deterministic evidence production, and operational failure handling.",
              ],
              [
                "Independent evaluators",
                "Test conformance between the declared semantics and the deployed runtime. Their work centers on adversarial traces, replay, implementation drift, and evidence verification from public interfaces.",
              ],
              [
                "Standards bodies and funders",
                "Create shared schemas and durable test requirements. Funding terms gain leverage through public artifacts, conformance suites, and reproducible evaluation records.",
              ],
            ].map(([title, body]) => (
              <div key={title} className="grid gap-3 py-6 md:grid-cols-[190px_1fr] md:gap-8">
                <h3 className="font-medium text-foreground">{title}</h3>
                <p className="leading-7 text-foreground/75">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-6 border-t border-border pt-8 md:grid-cols-[150px_1fr] md:gap-10">
        <div className="eyebrow">03 · Shared interfaces</div>
        <div className="space-y-7">
          <h2 className="text-2xl font-medium tracking-tight">Interoperability starts with evidence identity</h2>
          <p className="leading-7 text-foreground/80">
            Cross-implementation verification depends on a small set of stable objects. Policy identity ties an execution to a governed specification. Monitor identity ties a verdict to executable semantics. Certificate identity ties an emitted result to the relevant policy and runtime decision. Replay identity ties an incident record to the trace used for external examination.
          </p>
          <div className="overflow-x-auto border-y border-border">
            <table className="w-full min-w-[640px] border-collapse text-left text-sm">
              <thead className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                <tr className="border-b border-border">
                  <th className="py-4 pr-6 font-medium">Interface</th>
                  <th className="py-4 pr-6 font-medium">Primary object</th>
                  <th className="py-4 font-medium">External question</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-foreground/75">
                <tr><td className="py-4 pr-6 font-medium text-foreground">Specification</td><td className="py-4 pr-6">Policy artifact</td><td className="py-4">Which behavior is governed?</td></tr>
                <tr><td className="py-4 pr-6 font-medium text-foreground">Compilation</td><td className="py-4 pr-6">Monitor plus proof artifact</td><td className="py-4">Does execution reflect the declared semantics?</td></tr>
                <tr><td className="py-4 pr-6 font-medium text-foreground">Runtime</td><td className="py-4 pr-6">Verdict record</td><td className="py-4">Which policy state governed this effect?</td></tr>
                <tr><td className="py-4 pr-6 font-medium text-foreground">Evidence</td><td className="py-4 pr-6">Certificate and replay bundle</td><td className="py-4">Is the decision independently checkable?</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="grid gap-6 border-t border-border pt-8 md:grid-cols-[150px_1fr] md:gap-10">
        <div className="eyebrow">04 · Deployment sequence</div>
        <div className="space-y-7">
          <h2 className="text-2xl font-medium tracking-tight">Move from observation to enforcement through evidence</h2>
          <div className="divide-y divide-border border-y border-border">
            {[
              ["Observe", "Run the monitor against production traces and record disagreement between intended policy and observed behavior."],
              ["Shadow", "Evaluate policy decisions in the execution path and preserve the original effect path for comparison."],
              ["Enforce", "Bind effect release to the monitor verdict and record the active policy identity in the emitted evidence."],
              ["Audit", "Reconstruct selected traces through an independent verifier and compare the result with the production record."],
            ].map(([stage, body], index) => (
              <div key={stage} className="grid gap-3 py-5 md:grid-cols-[64px_130px_1fr] md:gap-6">
                <div className="font-mono text-xs text-muted-foreground">0{index + 1}</div>
                <h3 className="font-medium">{stage}</h3>
                <p className="leading-7 text-foreground/75">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-6 border-t border-border pt-8 md:grid-cols-[150px_1fr] md:gap-10">
        <div className="eyebrow">05 · Institutional test</div>
        <div className="space-y-5">
          <h2 className="text-2xl font-medium tracking-tight">The system succeeds only if third parties verify it</h2>
          <p className="leading-7 text-foreground/80">
            Interoperability rests on public schemas and reference verifiers. Independent replay adds a second test. Published failure records add a third. The strongest infrastructure programme treats external reproduction as a primary engineering output.
          </p>
          <p className="leading-7 text-foreground/80">
            Progress is best tracked through evidence quality. Relevant measures include policy coverage, verifier agreement, replay consistency, revocation behavior, monitor cost, and the fraction of incidents reconstructed from exported artifacts. These measures connect formal claims to operational performance.
          </p>
        </div>
      </section>
    </ResearchNote>
  </Layout>
);

export default BuildingInfrastructure;
