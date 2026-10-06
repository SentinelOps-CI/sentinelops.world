import Layout from "@/components/Layout";
import ResearchNote from "@/components/ResearchNote";
import Seo from "@/components/Seo";

const HowToGetInvolved = () => (
  <Layout>
    <Seo
      title="Contributing to Verification Infrastructure · SentinelOps"
      description="Contribution guide for SentinelOps verification infrastructure, from formal specifications through runtime controls and independent evaluation."
      path="/blog/how-to-get-involved"
      type="article"
      jsonLd={{
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "Contributing to Verification Infrastructure",
        datePublished: "2025-08-15",
        dateModified: "2026-10-06",
        description:
          "Contribution guide for SentinelOps verification infrastructure, from formal specifications through runtime controls and independent evaluation.",
        author: { "@type": "Organization", name: "SentinelOps" },
      }}
    />

    <ResearchNote
      section="Participation note"
      date="Revised October 6, 2026"
      readTime="7 min read"
      title="Contributing to Verification Infrastructure"
      dek="SentinelOps is developed through public technical artifacts. Useful contributions improve specifications, runtime enforcement, evidence production, replay, or independent evaluation. Each contribution earns its value through an inspectable claim and a reproducible result."
    >
      <section className="grid gap-6 border-t border-border pt-8 md:grid-cols-[150px_1fr] md:gap-10">
        <div className="eyebrow">01 · Contribution standard</div>
        <div className="space-y-5 text-base leading-7 text-foreground/80">
          <h2 className="text-2xl font-medium tracking-tight text-foreground">
            Tie every contribution to a verifiable object
          </h2>
          <p>
            Source changes need tests tied to the claimed behavior. Specification changes need explicit semantics and worked examples. Evaluation changes need reproducible inputs plus machine-readable outputs. Documentation changes need correspondence with the implementation.
          </p>
          <p>
            Technical discussion has highest value once it resolves a specific engineering or formal question. The project favors contributions that reduce ambiguity between a stated guarantee and the mechanism used to establish it.
          </p>
        </div>
      </section>

      <section className="grid gap-6 border-t border-border pt-8 md:grid-cols-[150px_1fr] md:gap-10">
        <div className="eyebrow">02 · Work surfaces</div>
        <div>
          <h2 className="text-2xl font-medium tracking-tight">
            Work across the verification chain
          </h2>
          <div className="mt-7 divide-y divide-border border-y border-border">
            {[
              [
                "Policy and semantics",
                "Define the governed action model. Specify state transitions. State admissibility rules in a form suitable for implementation and review.",
              ],
              [
                "Runtime mediation",
                "Improve effect interception and monitor execution. Test rejection behavior. Record the active policy identity at the execution boundary.",
              ],
              [
                "Evidence and replay",
                "Strengthen certificate structure. Bind records to executed traces. Improve independent reconstruction of runtime decisions.",
              ],
              [
                "Evaluation",
                "Construct adversarial traces. Measure verifier agreement. Publish reproducible evaluation records tied to declared configurations.",
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
        <div className="eyebrow">03 · Public repositories</div>
        <div className="space-y-7">
          <h2 className="text-2xl font-medium tracking-tight">
            Start from an existing technical surface
          </h2>
          <p className="leading-7 text-foreground/80">
            Contribution starts from the public artifact closest to the proposed change. Read its tests and current interfaces. Reproduce the relevant behavior locally. Scope the change around one claim suitable for independent examination.
          </p>

          <div className="divide-y divide-border border-y border-border">
            <div className="grid gap-3 py-6 md:grid-cols-[190px_1fr] md:gap-8">
              <a
                href="https://github.com/SentinelOps-CI/provability-fabric"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium underline underline-offset-4 decoration-border hover:decoration-foreground"
              >
                Provability Fabric
              </a>
              <p className="leading-7 text-foreground/75">
                Runtime control, formal policy machinery, evidence generation, replay, and conformance work for agent execution.
              </p>
            </div>

            <div className="grid gap-3 py-6 md:grid-cols-[190px_1fr] md:gap-8">
              <a
                href="https://github.com/SentinelOps-CI/model-asset-guard"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium underline underline-offset-4 decoration-border hover:decoration-foreground"
              >
                Model Asset Guard
              </a>
              <p className="leading-7 text-foreground/75">
                Verification work for fixed model artifacts, with emphasis on integrity checks across model assets and associated metadata.
              </p>
            </div>

            <div className="grid gap-3 py-6 md:grid-cols-[190px_1fr] md:gap-8">
              <a
                href="https://github.com/SentinelOps-CI/sentinelops.world"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium underline underline-offset-4 decoration-border hover:decoration-foreground"
              >
                SentinelOps website
              </a>
              <p className="leading-7 text-foreground/75">
                Public documentation and research notes. Contributions here need technical correspondence with the repositories they describe.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-6 border-t border-border pt-8 md:grid-cols-[150px_1fr] md:gap-10">
        <div className="eyebrow">04 · Review standard</div>
        <div className="space-y-7">
          <h2 className="text-2xl font-medium tracking-tight">
            Review the claim and the artifact together
          </h2>
          <div className="overflow-x-auto border-y border-border">
            <table className="w-full min-w-[640px] border-collapse text-left text-sm">
              <thead className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                <tr className="border-b border-border">
                  <th className="py-4 pr-6 font-medium">Change</th>
                  <th className="py-4 font-medium">Review question</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-foreground/75">
                <tr>
                  <td className="py-4 pr-6 font-medium text-foreground">Specification</td>
                  <td className="py-4">Is the claim scope explicit and testable from the declared semantics?</td>
                </tr>
                <tr>
                  <td className="py-4 pr-6 font-medium text-foreground">Runtime code</td>
                  <td className="py-4">Does the execution path mediate the intended effect and expose rejection behavior?</td>
                </tr>
                <tr>
                  <td className="py-4 pr-6 font-medium text-foreground">Evidence artifact</td>
                  <td className="py-4">Does the record bind the decision to the relevant policy identity and executed trace?</td>
                </tr>
                <tr>
                  <td className="py-4 pr-6 font-medium text-foreground">Evaluation</td>
                  <td className="py-4">Does the published record support independent reconstruction of the result?</td>
                </tr>
                <tr>
                  <td className="py-4 pr-6 font-medium text-foreground">Documentation</td>
                  <td className="py-4">Does the text correspond to the current implementation and public interfaces?</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="grid gap-6 border-t border-border pt-8 md:grid-cols-[150px_1fr] md:gap-10">
        <div className="eyebrow">05 · First contribution</div>
        <div className="space-y-7">
          <h2 className="text-2xl font-medium tracking-tight">
            Keep the first change bounded and reproducible
          </h2>
          <div className="divide-y divide-border border-y border-border">
            {[
              ["01", "Read", "Study the relevant repository documentation, tests, and current interfaces."],
              ["02", "Reproduce", "Establish the current behavior from a fixed revision and record the configuration used."],
              ["03", "Change", "Implement one bounded improvement with tests or evidence tied to the stated claim."],
              ["04", "Submit", "Open a focused pull request that states the claim scope and includes the material needed for independent review."],
            ].map(([number, title, body]) => (
              <div key={number} className="grid gap-3 py-5 md:grid-cols-[64px_110px_1fr] md:gap-6">
                <div className="font-mono text-xs text-muted-foreground">{number}</div>
                <h3 className="font-medium">{title}</h3>
                <p className="leading-7 text-foreground/75">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-6 border-t border-border pt-8 md:grid-cols-[150px_1fr] md:gap-10">
        <div className="eyebrow">06 · Coordination</div>
        <div className="space-y-5">
          <h2 className="text-2xl font-medium tracking-tight">
            Keep technical decisions close to the public record
          </h2>
          <p className="leading-7 text-foreground/80">
            SentinelOps favors public technical records for design choices that affect claims, interfaces, or evaluation. Review centers on claim scope, reproducibility, and external checkability. High-leverage contributions make the relation between a stated guarantee and its supporting artifact easier to inspect.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-3 pt-2 text-sm">
            <a
              href="https://github.com/orgs/SentinelOps-CI/repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 decoration-border hover:decoration-foreground"
            >
              Browse SentinelOps repositories
            </a>
            <a
              href="/docs"
              className="underline underline-offset-4 decoration-border hover:decoration-foreground"
            >
              Read technical documentation
            </a>
          </div>
        </div>
      </section>
    </ResearchNote>
  </Layout>
);

export default HowToGetInvolved;
