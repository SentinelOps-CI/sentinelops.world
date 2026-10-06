import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, ArrowLeft, Clock, Zap, Shield, CheckCircle, Target } from "lucide-react";

const CurrentInitiatives = () => {
const liveTracks = [
{
title: "Provable Runtime Control",
icon: Shield,
deliverables:
"We produce an action-level specification and compile it into DFA-based monitors. A sidecar mediates all effects. A labeled event alphabet plus typed declassification supports the \MonNI predicate.",
outcome:
"If \MonNI accepts every execution prefix and the unwinding obligations hold, the local-to-global bridge yields termination-insensitive non-interference. Low-view equivalence on prefixes follows from the bridge.",
metrics:
"We track the ninety-fifth-percentile monitor latency, enforce zero false negatives by construction, and confirm equality of low views in controlled replays."
},
{
title: "Unified Permissions (Call/Read/Write/Grant)",
icon: CheckCircle,
deliverables:
"We implement attribute- and relationship-based guards with permission epochs and attach field-level witnesses, including Merkle-path membership and bounded taint-derivation proofs.",
outcome:
"One decision engine governs tools and documents consistently. Revocation proceeds safely within explicitly bounded epochs.",
metrics:
"We measure time to revocation, require human-readable explanations for decisions, and report the cost of verifying witnesses."
},
{
title: "Certificates & Provenance",
icon: Target,
deliverables:
"Each emission receives a CERT-V1 certificate binding policy and proof hashes plus automata and labeler hashes. The record includes the \MonNI verdict, permission decision, and witness-check outcomes. DSSE signatures and SBOM/SLSA provenance accompany the artifacts. Transparency-service digests add an optional public record.",
outcome:
"Independent parties verify the evidence through public artifacts and standard interfaces. This supports audit at arm’s length with independent access to the relevant evidence.",
metrics:
"We publish the proportion of certificates verified independently, the latency of inclusion proofs, and the completeness of provenance."
},
{
title: "Deterministic Egress",
icon: Zap,
deliverables:
"We standardize chunk size and flush cadence. Locale and time-zone settings are fixed. Optional rate padding plus a replay harness support reproducibility.",
outcome:
"Timing and length channels are bounded, and representative workloads maintain high replay determinism.",
metrics:
"We report the determinism rate, estimate residual channel capacity in bits per second under the declared profile, and track the false-block rate."
}
];

const nearTermItems = [
{
category: "Standards drafts (public RFCs)",
items: [
"We will publish CERT-V1, a certificate schema that binds proofs and runtime verdicts to emissions.",
"We will define EGRESS-DET-P1, a deterministic egress profile that constrains covert channels and enables faithful replay.",
"We will release PERM-UNIFY-R1, a unified permission model with epochs and witnesses for field-level decisions.",
"We will formalize MON-NI-BRIDGE, a statement of the preconditions under which local acceptance implies global non-interference."
]
},
{
category: "Interop events",
items: [
"We will run cross-runtime certificate verification exercises with shared replay suites.",
"We will conduct deterministic-egress evaluations that compare profiles empirically.",
"We will rehearse revocation and epoch-rollover scenarios under load.",
"We will maintain public dashboards that report results and residual risks."
]
},
{
category: "External evaluations",
items: [
"We will commission standardized testbeds from runtime-verification experts and red teams.",
"We will publish coverage metrics and residual-risk estimates derived from adversarial traces.",
"We will analyze accept-and-deny precision with respect to ground-truth specifications.",
"We will quantify monitor overhead and its variance across workloads."
]
}
];

return (
<Layout>
<Seo title="Current Initiatives · SentinelOps Blog" description="An update on active research and engineering threads across the SentinelOps verification stack and contributor community." path="/blog/current-initiatives" type="article" jsonLd={{"@context":"https://schema.org","@type":"Article","headline":"Current Initiatives","datePublished":"2025-02-12","description":"An update on active research and engineering threads across the SentinelOps verification stack and contributor community.","author":{"@type":"Organization","name":"SentinelOps"}}} />
<article className="container mx-auto px-5 sm:px-6 py-12 sm:py-20 max-w-3xl article-paper">
{/* Header */}
      <header className="mb-12 pb-8 border-b border-border">
        <Link to="/blog" className="eyebrow inline-flex items-center gap-2 hover:text-foreground transition-colors mb-8">
          <ArrowLeft className="h-3 w-3" />
          Return to writing
        </Link>

        <div className="eyebrow mb-6">
          §&nbsp;Updates &nbsp;·&nbsp; August 1, 2025 &nbsp;·&nbsp; 11 min read
        </div>

        <h1 className="font-light tracking-tight text-3xl md:text-4xl lg:text-5xl leading-[1.1] mb-8">
          Current Initiatives · What Is Running Now
        </h1>

        <p className="font-serif text-xl md:text-2xl leading-snug text-foreground/[0.85] italic">
          The phase of aspirational statements has given way to execution. Multiple stacks already compile policies into monitors and mediate effects. They also emit verifiable evidence. The immediate priority is scale and standardization. Heterogeneous implementations need clean interoperability, and auditors need direct access to public verification artifacts.
        </p>
      </header>

    {/* Live Tracks */}
    <Card className="mb-8">
      <CardContent className="p-6">
        <h2 className="text-2xl font-semibold mb-4">Live Tracks</h2>
        <div className="space-y-6">
          {liveTracks.map((track, index) => (
            <Card key={index} className="border-l-4 border-l-primary">
              <CardContent className="p-4">
                <div className="flex items-center gap-2 mb-3">
                  <track.icon className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold text-lg">{track.title}</h3>
                </div>

                <div className="space-y-3 text-sm">
                  <div>
                    <span className="font-semibold">Deliverables: </span>
                    <span className="font-normal">{track.deliverables}</span>
                  </div>
                  <div>
                    <span className="font-semibold">Outcome: </span>
                    <span className="font-normal text-muted-foreground">{track.outcome}</span>
                  </div>
                  <div>
                    <span className="font-semibold">Metrics: </span>
                    <span className="font-normal text-muted-foreground">{track.metrics}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>

    {/* Additional Tracks */}
    <div className="grid md:grid-cols-2 gap-4 mb-8">
      <Card>
        <CardContent className="p-4">
          <h3 className="font-semibold mb-3 flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-primary" />
            Conformance Testing
          </h3>
          <div className="space-y-2 text-sm">
            <p>
              <strong>Deliverables:</strong>{" "}
              <span className="font-normal">
                We provide replay kits with representative good and bad traces, adversarial generators that stress chunking and polyglot behaviors, and equivalence tests that compare a reference semantics to the deployed runtime.
              </span>
            </p>
            <p>
              <strong>Outcome:</strong>{" "}
              <span className="font-normal text-muted-foreground">
                The community gains portable quality thresholds that remain independent of any single implementation.
              </span>
            </p>
            <p>
              <strong>Metrics:</strong>{" "}
              <span className="font-normal text-muted-foreground">
                We report coverage and assess counterexample reduction quality. Drift-detection rates indicate how early the system identifies divergence ahead of incidents.
              </span>
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-4">
          <h3 className="font-semibold mb-3 flex items-center gap-2">
            <Zap className="h-5 w-5 text-primary" />
            DX Tooling
          </h3>
          <div className="space-y-2 text-sm">
            <p>
              <strong>Deliverables:</strong>{" "}
              <span className="font-normal">
                We integrate continuous-integration gates and preview counterexamples directly in the editor. Adapter scaffolding supports faster integration. Domain templates cover retrieval-augmented generation with redaction plus common operations and support-agent patterns.
              </span>
            </p>
            <p>
              <strong>Outcome:</strong>{" "}
              <span className="font-normal text-muted-foreground">
                Teams reach first enforcement within hours. This shorter cycle accelerates safe iteration.
              </span>
            </p>
            <p>
              <strong>Metrics:</strong>{" "}
              <span className="font-normal text-muted-foreground">
                We track time to first enforcement, measure authoring error rates, and monitor weekly growth in policy coverage.
              </span>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>

    {/* Near-term (6-12 months) */}
    <Card className="mb-8">
      <CardContent className="p-6">
        <h2 className="text-2xl font-semibold mb-4">Near-Term Horizon (Six to Twelve Months)</h2>
        <div className="space-y-6">
          {nearTermItems.map((category, index) => (
            <div key={index}>
              <h3 className="font-semibold mb-3">{category.category}</h3>
              <ul className="space-y-1 text-sm font-normal text-muted-foreground ml-4">
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="font-semibold mb-3">Marketplace Alpha</h3>
            <p className="text-sm font-normal text-muted-foreground ml-4">
              We will launch a curated marketplace of verified agents and templates with revenue sharing. Dependency changes trigger automated recertification through SLSA and in-toto rebuilds and checks.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>

    {/* Evidence Loop */}
    <Card className="mb-8 bg-trust/5 border-trust/20">
      <CardContent className="p-6">
        <h2 className="text-xl font-semibold mb-4">Evidence Loop</h2>
        <div className="space-y-3 text-sm font-normal">
          <p>
            We publish reproducible traces and replay artifacts spanning representative and adversarial cases. Sample certificates accompany the release. Proof, automata, and labeler hashes support independent reproduction of findings.
          </p>
          <p>
            We characterize performance envelopes by reporting latency and throughput under declared egress profiles, we define reject budgets, and we attach incident post-mortems that include minimal counterexamples together with replay bundles.
          </p>
          <p>
            We disseminate conformance results for every release, including pass–fail outcomes and drift indicators, and we attach inclusion proofs obtained from transparency logs to support ecosystem-level auditability.
          </p>
        </div>
      </CardContent>
    </Card>

    {/* Why This Fits a Field Reference */}
    <Card className="mb-8">
      <CardContent className="p-6">
        <h2 className="text-2xl font-semibold mb-4">Why This Approach Fits a Field Reference</h2>
        <div className="space-y-3 text-sm font-normal">
          <div className="flex items-start gap-2">
            <CheckCircle className="h-4 w-4 text-trust mt-0.5 flex-shrink-0" />
            <span>
              It prioritizes properties that are provable and enforceable online. Machine-checkable evidence replaces aspirational statements.
            </span>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle className="h-4 w-4 text-trust mt-0.5 flex-shrink-0" />
            <span>
              It standardizes externally facing interfaces across certificates, monitors, and replay artifacts. Diverse implementations interoperate under shared rigor.
            </span>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle className="h-4 w-4 text-trust mt-0.5 flex-shrink-0" />
            <span>
              It integrates supply-chain assurances such as SLSA and in-toto and couples them with transparency logs, thereby linking build-time provenance to runtime evidence.
            </span>
          </div>
        </div>
      </CardContent>
    </Card>

    <footer className="mt-16 pt-8 border-t border-border">
          <Link to="/blog" className="eyebrow hover:text-foreground transition-colors inline-flex items-center gap-2">
            <ArrowLeft className="h-3 w-3" />
            Back to all writing
          </Link>
        </footer>
  </article>
</Layout>


);
};

export default CurrentInitiatives;