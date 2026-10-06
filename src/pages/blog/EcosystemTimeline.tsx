import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, ArrowLeft, Clock, Target, CheckCircle } from "lucide-react";

const EcosystemTimeline = () => {
const timeline = [
{
year: "2025",
title: "Prove It Works (multi-site pilots)",
metrics: [
"Policy coverage reaches at least 90% of all mediated effects.",
"Independent verifiers confirm at least 99.99% certificate verification.",
"Replay determinism achieves at least 99.9% under the EGRESS-DET-P1 profile.",
"The p95 monitor overhead stays below 2 milliseconds per event.",
"Pilots record zero unmediated egress incidents."
]
},
{
year: "2026",
title: "Prove It Scales (standards and marketplace)",
metrics: [
"At least ten verified agents or templates are listed and undergo automatic recertification upon updates.",
"At least five independent evaluations are completed and at least three interoperability events publish their results.",
"Time to first enforcement falls below one day for new adopters transitioning from observe-only mode."
]
},
{
year: "2027",
title: "Verification by Default (platform adoption)",
metrics: [
"At least five regulated deployments rely on certificate gates for release decisions.",
"At least three major platforms include built-in certificate verification.",
"Mean time to recovery is at most two hours using replay kits, and public evidence packs are available for audits."
]
}
];

return (
<Layout>
<Seo title="Ecosystem Development Timeline · SentinelOps Blog" description="Milestones, releases, and research threads charting the path toward a fully verifiable AI ecosystem built on open-source proofs." path="/blog/ecosystem-development-timeline" type="article" jsonLd={{"@context":"https://schema.org","@type":"Article","headline":"Ecosystem Development Timeline","datePublished":"2025-05-15","description":"Milestones, releases, and research threads charting the path toward a fully verifiable AI ecosystem built on open-source proofs.","author":{"@type":"Organization","name":"SentinelOps"}}} />
<article className="container mx-auto px-5 sm:px-6 py-12 sm:py-20 max-w-3xl article-paper">
{/* Header */}
      <header className="mb-12 pb-8 border-b border-border">
        <Link to="/blog" className="eyebrow inline-flex items-center gap-2 hover:text-foreground transition-colors mb-8">
          <ArrowLeft className="h-3 w-3" />
          Return to writing
        </Link>

        <div className="eyebrow mb-6">
          §&nbsp;Roadmap &nbsp;·&nbsp; July 15, 2025 &nbsp;·&nbsp; 8 min read
        </div>

        <h1 className="font-light tracking-tight text-3xl md:text-4xl lg:text-5xl leading-[1.1] mb-8">
          Ecosystem Development Timeline · 2025 → 2027
        </h1>

        <p className="font-serif text-xl md:text-2xl leading-snug text-foreground/[0.85] italic">
          Safety matures through cadence. Specifications lead to proofs. Systems execute under verified controls, demonstrations establish performance, and standards encode shared interfaces. Repetition across domains makes verification the default expectation.
        </p>
      </header>

    {/* Timeline */}
    <div className="space-y-8 mb-12">
      {timeline.map((phase, index) => (
        <Card key={index} className="border-l-4 border-l-primary">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <Badge className="font-semibold text-sm">{phase.year}</Badge>
              <Target className="h-5 w-5 text-primary" />
            </div>
            <h2 className="text-2xl font-semibold mb-4">{phase.title}</h2>

            <h3 className="font-semibold mb-3 text-lg">Exit Criteria</h3>
            <div className="space-y-2">
              {phase.metrics.map((metric, metricIndex) => (
                <div key={metricIndex} className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-trust mt-0.5 flex-shrink-0" />
                  <span className="text-sm font-normal">{metric}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>

    {/* 2025 Details */}
    <Card className="mb-8 bg-trust/5 border-trust/20">
      <CardContent className="p-6">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Badge>2025</Badge>
          Prove It Works (multi-site pilots)
        </h2>

        <h3 className="font-semibold mb-3">Deliverables</h3>
        <div className="space-y-2 text-sm font-normal mb-4">
          <p>
            Public reference stack demonstrates the pipeline from policy to DFA and monitor. Sidecar mediation leads to certificate generation and reproducible replay, supported by documentation and an accessible repository.
          </p>
          <p>
            Unified permission control uses field-level witnesses and a staged progression from observe to shadow and enforce. Adopters gain stronger evidence and preserve operational stability through this sequence.
          </p>
          <p>
            Pilot cohorts run in at least two sectors, such as healthcare egress and enterprise software-as-a-service, to test generality under realistic constraints and regulatory expectations.
          </p>
          <p>
            Open conformance tests and demonstration datasets support third-party evaluation. Replay bundles and evidence packs support independent reproduction through public interfaces.
          </p>
        </div>

        <h3 className="font-semibold mb-3">Dependencies and Risks</h3>
        <div className="space-y-1 text-sm text-muted-foreground font-normal">
          <p>
            Pilots depend on partner availability plus timely privacy and legal review. Redacted publication preserves evidentiary value.
          </p>
          <p>
            Engineering capacity is required to implement and maintain labeler witnesses across adapters so that field-level guarantees remain trustworthy and inexpensive to verify.
          </p>
        </div>
      </CardContent>
    </Card>

    {/* 2026 Details */}
    <Card className="mb-8 bg-primary/5 border-primary/20">
      <CardContent className="p-6">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Badge>2026</Badge>
          Prove It Scales (standards and marketplace)
        </h2>

        <h3 className="font-semibold mb-3">Deliverables</h3>
        <div className="space-y-2 text-sm font-normal mb-4">
          <p>
            Focused research consortia publish refinements of non-interference variants and formalize epoch semantics. Joint work on monitor minimization produces reference proofs and monitors for clear external adoption.
          </p>
          <p>
            Marketplace alpha provides verified agents and templates. Dependency changes trigger automatic recertification, preserving evidence quality through software evolution.
          </p>
          <p>
            Independent evaluations by runtime-verification experts and red teams culminate in public reports. Those reports quantify residual risk and coverage. Overhead plus drift under stress complete the evaluation record.
          </p>
          <p>
            Interoperability demonstrations link certificates to transparency logs and, where appropriate, incorporate trusted hardware or succinct proofs as optional anchors of computation.
          </p>
        </div>

        <h3 className="font-semibold mb-3">Dependencies and Risks</h3>
        <div className="space-y-1 text-sm text-muted-foreground font-normal">
          <p>
            Standardization progresses with restrained certificate complexity. Stable core fields support adoption and cross-implementation evidence comparison.
          </p>
          <p>
            Marketplace governance depends on clear moderation and revocation procedures. Evidence quality thresholds protect trust as scale increases.
          </p>
        </div>
      </CardContent>
    </Card>

    {/* 2027 Details */}
    <Card className="mb-8 bg-secondary/20 border-border">
      <CardContent className="p-6">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Badge>2027</Badge>
          Verification by Default
        </h2>

        <h3 className="font-semibold mb-3">Deliverables</h3>
        <div className="space-y-2 text-sm font-normal mb-4">
          <p>
            Major platforms integrate certificate gates directly into deployment workflows for autonomous agents. Enforcement then operates through systematic verification gates instead of ad-hoc checks or manual review.
          </p>
          <p>
            Multi-organization position paper plus ecosystem standards codify evidence expectations for provable behavior. Reference implementations across multiple languages reduce adoption barriers.
          </p>
          <p>
            Sector-specific reference profiles emerge first in healthcare and finance. Public-sector profiles extend the same model, aligning operational practice with domain constraints and regulatory duties.
          </p>
        </div>

        <h3 className="font-semibold mb-3">Dependencies and Risks</h3>
        <div className="space-y-1 text-sm text-muted-foreground font-normal">
          <p>
            Platform roadmaps and policy alignment determine the pace of certificate-gate adoption. Fast, developer-friendly gates reduce incentives for circumvention.
          </p>
        </div>
      </CardContent>
    </Card>

    {/* Cross-cutting SLOs */}
    <Card className="mb-8">
      <CardContent className="p-6">
        <h2 className="text-xl font-semibold mb-4">Cross-Cutting SLOs and Governance</h2>
        <p className="text-sm text-muted-foreground mb-4 font-normal">
          These objectives apply across all phases and keep verification evidence measurable, repeatable, and transparent.
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h3 className="font-semibold mb-2">Evidence SLOs</h3>
            <div className="space-y-1 text-sm font-normal">
              <p>
                Certificate verification succeeds at least 99.99% of the time through independent verifiers operating independently of vendor-specific internals.
              </p>
              <p>
                Replay determinism holds at least 99.9% under declared profiles. This supports reproducible incidents and minimal counterexamples.
              </p>
              <p>
                Public evidence, including conformance results and replay bundles, is published on a monthly cadence to maintain external accountability.
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Governance</h3>
            <div className="space-y-1 text-sm font-normal">
              <p>
                Open RFCs and numbered standards provide shared terminology for evidence. Stable interfaces retain value through implementation churn.
              </p>
              <p>
                Quarterly interoperability events exercise cross-implementation conformance and publish outcomes for community scrutiny.
              </p>
              <p>
                Transparent deprecation policies protect early adopters through ecosystem evolution and keep evidence comparable across versions.
              </p>
            </div>
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

export default EcosystemTimeline;