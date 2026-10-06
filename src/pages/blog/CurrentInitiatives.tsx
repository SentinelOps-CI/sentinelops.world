import Layout from "@/components/Layout";
import ResearchNote from "@/components/ResearchNote";
import Seo from "@/components/Seo";

const CurrentInitiatives = () => (
  <Layout>
    <Seo
      title="Current Technical Program · SentinelOps"
      description="The active SentinelOps technical program across runtime control, permissions, evidence records, replay, and conformance testing."
      path="/blog/current-initiatives"
      type="article"
      jsonLd={{
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "Current Technical Program",
        datePublished: "2026-10-06",
        description:
          "The active SentinelOps technical program across runtime control, permissions, evidence records, replay, and conformance testing.",
        author: { "@type": "Organization", name: "SentinelOps" },
      }}
    />

    <ResearchNote
      section="Program update"
      date="October 6, 2026"
      readTime="11 min read"
      title="Current Technical Program"
      dek="SentinelOps is building a verification stack around one operational question. Which evidence supports the release of a consequential effect? The program joins action policy, permission state, runtime mediation, evidence identity, replay, and conformance testing into one inspectable execution record."
    >
      <section className="grid gap-6 border-t border-border pt-8 md:grid-cols-[150px_1fr] md:gap-10">
        <div className="eyebrow">01 · Runtime control</div>
        <div className="space-y-5">
          <h2 className="text-2xl font-medium tracking-tight">Compile governed actions into executable monitors</h2>
          <p className="leading-7 text-foreground/80">
            Action-level specifications define admissible traces over a labeled event alphabet. Compilation produces deterministic monitors plus artifacts that document the relation between the source policy and the executable transition system. Runtime mediation places those monitors on the effect path.
          </p>
          <p className="leading-7 text-foreground/80">
            The evaluation target is semantic agreement. Reference semantics and deployed verdicts need to match across representative traces and adversarial traces. Monitor cost is reported separately from semantic correctness.
          </p>
        </div>
      </section>

      <section className="grid gap-6 border-t border-border pt-8 md:grid-cols-[150px_1fr] md:gap-10">
        <div className="eyebrow">02 · Permission state</div>
        <div className="space-y-5">
          <h2 className="text-2xl font-medium tracking-tight">Use one authorization model across tools and data</h2>
          <p className="leading-7 text-foreground/80">
            Calls and data operations reference the same permission state. Attribute-based rules and relationship-based rules feed one decision record. Permission epochs fix the state snapshot associated with a decision and give revocation a defined transition model.
          </p>
          <p className="leading-7 text-foreground/80">
            Field-level decisions use compact witnesses where the policy model supports them. The evidence record identifies the witness scheme and verification result, keeping the authorization claim separate from the runtime policy claim.
          </p>
        </div>
      </section>

      <section className="grid gap-6 border-t border-border pt-8 md:grid-cols-[150px_1fr] md:gap-10">
        <div className="eyebrow">03 · Evidence record</div>
        <div className="space-y-7">
          <h2 className="text-2xl font-medium tracking-tight">Bind every verdict to the artifacts that define its meaning</h2>
          <p className="leading-7 text-foreground/80">
            The certificate schema records policy identity and monitor identity. It also records permission state and verdict data. Relevant proof artifacts are referenced separately. Signatures protect artifact identity. Supply-chain provenance documents the software build associated with the runtime record.
          </p>
          <div className="overflow-x-auto border-y border-border">
            <table className="w-full min-w-[660px] border-collapse text-left text-sm">
              <thead className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                <tr className="border-b border-border">
                  <th className="py-4 pr-6 font-medium">Record field</th>
                  <th className="py-4 pr-6 font-medium">Purpose</th>
                  <th className="py-4 font-medium">Independent check</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-foreground/75">
                <tr><td className="py-4 pr-6 font-medium text-foreground">Policy hash</td><td className="py-4 pr-6">Names the governing specification</td><td className="py-4">Hash comparison</td></tr>
                <tr><td className="py-4 pr-6 font-medium text-foreground">Monitor hash</td><td className="py-4 pr-6">Names executable semantics</td><td className="py-4">Artifact verification</td></tr>
                <tr><td className="py-4 pr-6 font-medium text-foreground">Permission state</td><td className="py-4 pr-6">Names the authorization snapshot</td><td className="py-4">State reconstruction</td></tr>
                <tr><td className="py-4 pr-6 font-medium text-foreground">Verdict</td><td className="py-4 pr-6">Records the release decision</td><td className="py-4">Reference replay</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="grid gap-6 border-t border-border pt-8 md:grid-cols-[150px_1fr] md:gap-10">
        <div className="eyebrow">04 · Replay</div>
        <div className="space-y-5">
          <h2 className="text-2xl font-medium tracking-tight">Make incident reconstruction a first-class output</h2>
          <p className="leading-7 text-foreground/80">
            Replay bundles record the execution fragment needed to reconstruct a selected decision under a declared profile. Egress normalization reduces variation caused by chunking and environment settings. The replay record also identifies state external to the bundle.
          </p>
          <p className="leading-7 text-foreground/80">
            Independent reconstruction tests focus on verdict agreement and trace agreement. Divergence is classified as an engineering defect or as a stated profile limitation.
          </p>
        </div>
      </section>

      <section className="grid gap-6 border-t border-border pt-8 md:grid-cols-[150px_1fr] md:gap-10">
        <div className="eyebrow">05 · Conformance</div>
        <div className="space-y-5">
          <h2 className="text-2xl font-medium tracking-tight">Test the deployed runtime against a reference semantics</h2>
          <p className="leading-7 text-foreground/80">
            Conformance work uses curated traces and adversarial generators. The test record compares source policy, reference decision, deployed decision, evidence record, and replay result. Counterexamples are reduced to the smallest trace that preserves the disagreement where practical.
          </p>
          <p className="leading-7 text-foreground/80">
            This programme provides implementation teams with a direct engineering target. It also provides external evaluators with a stable basis for examining changes across runtime versions.
          </p>
        </div>
      </section>

      <section className="grid gap-6 border-t border-border pt-8 md:grid-cols-[150px_1fr] md:gap-10">
        <div className="eyebrow">06 · Near-term outputs</div>
        <div className="space-y-5">
          <h2 className="text-2xl font-medium tracking-tight">Publish testable interfaces for external teams</h2>
          <p className="leading-7 text-foreground/80">
            Near-term work centers on certificate schema definition, deterministic replay profiles, unified permission semantics, and local-to-global information-flow statements. Each public interface is paired with a reference implementation or verifier plus conformance material.
          </p>
          <p className="leading-7 text-foreground/80">
            The programme treats public evidence as part of the technical output. Documentation establishes the public interface. Reference traces provide test inputs. Implementation hashes identify artifacts. Evaluation records provide external teams with material for direct claim testing.
          </p>
        </div>
      </section>
    </ResearchNote>
  </Layout>
);

export default CurrentInitiatives;
