import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, ArrowLeft, Clock, Users, BookOpen, Code, Target, CheckSquare } from "lucide-react";

const HowToGetInvolved = () => {
const programs = [
{
letter: "A",
title: "Research & Standards",
icon: BookOpen,
workingGroups:
"Working groups focus first on information-flow control and non-interference. Provenance plus certificate design form a second track. Deterministic egress and permission epochs form a third. Another group studies bridges between zero-knowledge proofs and trusted execution environments.",
deliverables:
"The program delivers numbered RFCs with accompanying proofs and reference monitors, formal conformance suites that permit independent verification, and position and vision papers that align research with practice."
},
{
letter: "B",
title: "Engineering & Pilots",
icon: Code,
workingGroups:
"Pilot cohorts use a staged workflow that progresses from observe to shadow and enforce. Cohorts share metrics and evidence across organizations.",
deliverables:
"Interoperability labs convene quarterly plug-fests that certify implementations against the conformance suite. Developer-experience grants fund authoring tools and adapters. Test generators plus marketplace integrations extend the same programme."
},
{
letter: "C",
title: "Evaluation & Evidence",
icon: Target,
workingGroups:
"Independent evaluation teams operate standardized testbeds and publish residual-risk reports. Coverage plus drift form the core metrics, with overhead reported separately.",
deliverables:
"The program maintains optional transparency logs for certificate digests and publishes reproducible artifacts that enable audit at arm’s length."
},
{
letter: "D",
title: "Community & Education",
icon: Users,
workingGroups:
"Reading groups study runtime verification and information-flow control. Provenance and succinct zero-knowledge proofs form additional tracks, with emphasis on implementation details.",
deliverables:
"Fellowships support contributors across proofs and runtime systems. Standards work forms a third path. Monthly technical sessions present demonstrations and incident reviews, followed by lessons learned."
}
];

const checklist = [
"Run the sidecar in observe-only mode and export traces.",
"Draft a policy in ActionDSL, compile monitors, and execute replays.",
"Enable shadowing on low-risk clauses and validate certificates in continuous integration.",
"Switch to enforcement with a defined reject budget and publish evidence packs.",
"Join a working group and propose or implement an RFC."
];

const kpiCategories = [
{
title: "Technical Performance",
items: [
"Measure the coverage as the percentage of effects that are labeled and monitored.",
"Track the rate at which certificates are verified independently.",
"Verify the determinism of replays under declared egress profiles.",
"Monitor adherence to the reject budget across releases.",
"Quantify the performance overhead introduced by monitoring and evidence generation."
]
},
{
title: "Ecosystem Growth",
items: [
"Count the number of verified agents and reusable templates.",
"Record the frequency and breadth of interoperability events.",
"Report the number of independent evaluations completed per quarter."
]
},
{
title: "Adoption & Impact",
items: [
"Record platform integrations that enforce deploy gates based on certificates.",
"Document deployments in regulated environments that rely on verifiable evidence.",
"Publish public incident reports that include replay bundles for external review."
]
}
];

return (
<Layout>
<Seo title="How to Get Involved · SentinelOps Blog" description="Contributor onboarding for SentinelOps · issues to start with, repos by category, and the channels where the community coordinates." path="/blog/how-to-get-involved" type="article" jsonLd={{"@context":"https://schema.org","@type":"Article","headline":"How to Get Involved","datePublished":"2025-01-18","description":"Contributor onboarding for SentinelOps · issues to start with, repos by category, and the channels where the community coordinates.","author":{"@type":"Organization","name":"SentinelOps"}}} />
<article className="container mx-auto px-5 sm:px-6 py-12 sm:py-20 max-w-3xl article-paper">
{/* Header */}
      <header className="mb-12 pb-8 border-b border-border">
        <Link to="/blog" className="eyebrow inline-flex items-center gap-2 hover:text-foreground transition-colors mb-8">
          <ArrowLeft className="h-3 w-3" />
          Return to writing
        </Link>

        <div className="eyebrow mb-6">
          §&nbsp;Community &nbsp;·&nbsp; July 1, 2025 &nbsp;·&nbsp; 9 min read
        </div>

        <h1 className="font-light tracking-tight text-3xl md:text-4xl lg:text-5xl leading-[1.1] mb-8">
          How to Get Involved · On-Ramps and Programs
        </h1>

        <p className="font-serif text-xl md:text-2xl leading-snug text-foreground/[0.85] italic">
          Movements outlast companies through shared methods and open evidence. Verifiable AI infrastructure depends on coordinated work across research and engineering. Audit plus adoption complete the institutional cycle. Repeated specification and proof feed execution. Demonstration closes the cycle and establishes rigorous practice as the norm.
        </p>
      </header>

    {/* Programs */}
    <Card className="mb-8">
      <CardContent className="p-6">
        <h2 className="text-2xl font-semibold mb-4">Programs (choose your lane)</h2>
        <div className="space-y-6">
          {programs.map((program, index) => (
            <Card key={index} className="border-l-4 border-l-primary">
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-semibold text-sm flex-shrink-0">
                    {program.letter}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <program.icon className="h-5 w-5 text-primary" />
                      <h3 className="font-semibold text-lg">{program.title}</h3>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div>
                        <span className="font-semibold">Working Groups: </span>
                        <span className="font-normal">{program.workingGroups}</span>
                      </div>
                      <div>
                        <span className="font-semibold">Deliverables: </span>
                        <span className="font-normal text-muted-foreground">{program.deliverables}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>

    {/* Starter Checklist */}
    <Card className="mb-8 bg-trust/5 border-trust/20">
      <CardContent className="p-6">
        <h2 className="text-2xl font-semibold mb-4">Starter Checklist (any organization)</h2>
        <div className="space-y-3">
          {checklist.map((item, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="bg-trust text-white w-6 h-6 rounded-full flex items-center justify-center font-semibold text-sm flex-shrink-0">
                {index + 1}
              </div>
              <span className="text-sm font-normal">{item}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>

    {/* Ecosystem KPIs */}
    <Card className="mb-8">
      <CardContent className="p-6">
        <h2 className="text-2xl font-semibold mb-4">Ecosystem KPIs</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {kpiCategories.map((category, index) => (
            <Card key={index}>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-3">{category.title}</h3>
                <ul className="space-y-1">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2">
                      <CheckSquare className="h-3 w-3 text-trust mt-1 flex-shrink-0" />
                      <span className="text-xs font-normal">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>

    {/* Code of Practice */}
    <Card className="mb-8">
      <CardContent className="p-6">
        <h2 className="text-2xl font-semibold mb-4">Code of Practice</h2>
        <div className="space-y-3 text-sm font-normal">
          <div className="flex items-start gap-2">
            <CheckSquare className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
            <span>Evidence takes precedence over rhetoric. Projects publish open artifacts and maintain respectful collaboration.</span>
          </div>
          <div className="flex items-start gap-2">
            <CheckSquare className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
            <span>Every effort states its guarantee scope and explicit exclusions.</span>
          </div>
          <div className="flex items-start gap-2">
            <CheckSquare className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
            <span>Governance is multi-stakeholder, with transparent roadmaps and explicit deprecation policies. The ecosystem evolves under shared standards and preserves evidence interoperability.</span>
          </div>
        </div>
      </CardContent>
    </Card>

    {/* Get Started CTA */}
    <Card className="bg-gradient-to-r from-primary/5 to-trust/5 border-primary/20">
      <CardContent className="p-8 text-center">
        <Users className="h-12 w-12 text-primary mx-auto mb-4" />
        <h2 className="text-2xl font-semibold mb-3">Ready to Get Started?</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto font-normal">
          Join the community building verifiable AI infrastructure. Choose a programme aligned with your expertise and contribute artifacts designed for independent verification.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild className="font-medium">
            <a
              href="https://github.com/orgs/SentinelOps-CI/repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join on GitHub
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild className="font-medium">
            <Link to="/docs">Read Documentation</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  </article>
</Layout>


);
};

export default HowToGetInvolved;