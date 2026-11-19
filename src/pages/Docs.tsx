import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import { Link } from "react-router-dom";
import { projectGroups } from "@/data/projects";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const reviewSteps = [
  {
    number: "01",
    title: "Choose your tool",
    detail: "Select a project by its intended function, then open the authoritative repository and examine its README, releases, and issues.",
  },
  {
    number: "02",
    title: "Clone and install",
    detail: "Follow the repository's setup instructions. Record the revision, dependency versions, and relevant proof or test obligations.",
  },
  {
    number: "03",
    title: "Run the examples",
    detail: "Execute provided examples or tests where available. Compare results with the stated specification and record limitations.",
  },
];

const Docs = () => (
  <Layout>
    <Seo
      title="Documentation and Verification Sources | SentinelOps"
      description="Entry points to SentinelOps source repositories, documented specifications, test artifacts, and the evidence needed to assess verification claims."
      path="/docs"
    />

    <section className="border-b border-[hsl(var(--rule))] bg-[hsl(var(--paper-bright))]">
      <div className="container-paper py-16 sm:py-20 lg:py-24">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          <div className="lg:col-span-3">
            <div className="hero-kicker">Technical reference</div>
            <div className="eyebrow mt-4">Source documentation</div>
          </div>
          <div className="lg:col-span-9 max-w-5xl">
            <h1 className="mb-7">Documentation begins with the source.</h1>
            <p className="text-xl sm:text-2xl leading-relaxed max-w-4xl">
              This directory connects the research programme with its public implementations.
              Each repository is the reference point for the code, supported behavior,
              test procedures, and changes relevant to that project.
            </p>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground">
              Repository descriptions identify a field of work. A particular guarantee
              must be evaluated against the corresponding version, assumptions, and
              verification record.
            </p>
          </div>
        </div>
      </div>
    </section>

    <div className="container-paper py-16 sm:py-20">
      <section className="mb-20">
        <div className="section-frame section-heading mb-9">
          <div className="section-index">01 / Method</div>
          <div className="section-title">
            <h2>Getting started.</h2>
          </div>
        </div>
        <ol className="grid md:grid-cols-3 border-t border-b border-[hsl(var(--rule))] md:divide-x divide-[hsl(var(--rule))]">
          {reviewSteps.map((step) => (
            <li key={step.number} className="py-7 md:py-9 md:px-7 lg:px-9 first:pl-0 last:pr-0">
              <div className="eyebrow text-primary mb-5">{step.number}</div>
              <h3 className="mb-3">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{step.detail}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mb-20">
        <div className="section-frame section-heading mb-9">
          <div className="section-index">02 / Repositories</div>
          <div className="section-title">
            <h2>Implementation index.</h2>
            <p className="text-muted-foreground mt-4 max-w-2xl">
              Links lead to public source repositories. Check their individual instructions
              and dependencies before attempting to reproduce a result.
            </p>
          </div>
        </div>
        {projectGroups.map((group) => (
          <div key={group.number} className="mb-12">
            <h3 className="text-base mb-5">{group.title}</h3>
            <dl className="border-t border-[hsl(var(--rule))]">
              {group.projects.map((project) => (
                <div key={project.id} className="grid md:grid-cols-12 gap-3 md:gap-8 py-5 border-b border-[hsl(var(--rule))]">
                  <dt className="md:col-span-4">
                    <a
                      href={project.repository}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline underline-offset-4 hover:text-primary"
                    >
                      {project.name} ↗
                    </a>
                  </dt>
                  <dd className="md:col-span-8 text-muted-foreground leading-relaxed text-sm">
                    {project.focus}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        ))}
      </section>

      <section className="mb-20">
        <div className="section-frame section-heading mb-9">
          <div className="section-index">03 / Reading evidence</div>
          <div className="section-title">
            <h2>What an implementation record establishes.</h2>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-5xl">
          <div>
            <h3 className="text-lg mb-3">Machine-checked results</h3>
            <p className="text-muted-foreground leading-relaxed">
              An accepted proof is evidence for its formal statement under the assumptions
              and trusted components of the checker. Source code and build provenance determine
              whether that statement applies to a particular executable.
            </p>
          </div>
          <div>
            <h3 className="text-lg mb-3">Runtime and empirical results</h3>
            <p className="text-muted-foreground leading-relaxed">
              Tests and execution traces document behavior under the evaluated conditions.
              The test environment, coverage, instrumentation, and handling of failed
              checks determine the strength of the resulting claim.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-20" aria-labelledby="documentation-faq">
        <div className="section-frame section-heading mb-9">
          <div className="section-index">04 / Questions</div>
          <div className="section-title">
            <h2 id="documentation-faq">Frequently asked questions.</h2>
          </div>
        </div>
        <Accordion type="single" collapsible className="border-t border-[hsl(var(--rule))]">
          {[
  {
    "q": "Where is the API documentation?",
    "a": "Each project is documented in its source repository. Check the README and any documentation directories for the revision you intend to use; their scope differs by project."
  },
  {
    "q": "How do I contribute to the documentation?",
    "a": "Open a focused pull request in the relevant public repository. Follow the project's contribution instructions and include a link to the source or behavior your change documents."
  },
  {
    "q": "Which tool is the best starting point?",
    "a": "Start with Provability Fabric for runtime mediation, Spec-to-Proof for specification translation, or SpecSync for source-change verification workflows. Inspect the current implementation status before adopting a tool."
  },
  {
    "q": "Are integration examples available?",
    "a": "Some repositories publish examples and tests. Inspect the project README, examples directory where present, and the PF Testbed for test and integration material."
  },
  {
    "q": "What programming languages are supported?",
    "a": "The project collection includes Rust, Lean 4, Python, and TypeScript/JavaScript. Check a particular repository for supported bindings and toolchain versions."
  }
].map((item, index) => (
            <AccordionItem value={"faq-" + index} key={item.q} className="border-b border-[hsl(var(--rule))]">
              <AccordionTrigger className="text-left py-5 text-base hover:no-underline">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed text-muted-foreground pb-5">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <section className="border-t border-[hsl(var(--rule-strong))] pt-9">
        <div className="grid md:grid-cols-12 gap-6">
          <div className="md:col-span-3 eyebrow">Further reading</div>
          <div className="md:col-span-9 max-w-3xl">
            <p className="text-muted-foreground leading-relaxed mb-6">
              The research notes explain the programme's ideas and questions. Technical
              claims about an implementation must be checked against its repository.
            </p>
            <div className="flex flex-wrap gap-5 text-sm">
              <Link to="/blog" className="underline underline-offset-4 hover:text-primary">
                Research notes ↗
              </Link>
              <Link to="/products" className="underline underline-offset-4 hover:text-primary">
                Project directory ↗
              </Link>
              <a
                href="https://github.com/orgs/SentinelOps-CI/repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 hover:text-primary"
              >
                Full source index ↗
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  </Layout>
);

export default Docs;
