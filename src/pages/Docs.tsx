import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const repositories = [
  { name: "Provability Fabric", url: "https://github.com/SentinelOps-CI/provability-fabric", description: "The foundational runtime for proof-carrying behaviour verification.", category: "Platform" },
  { name: "Spec-to-Proof", url: "https://github.com/SentinelOps-CI/spec-to-proof", description: "Compile natural-language specifications into Lean theorem proofs.", category: "Build & verify" },
  { name: "SpecCursor", url: "https://github.com/SentinelOps-CI/speccursor", description: "Formal qualification for dependency upgrades and changes.", category: "Build & verify" },
  { name: "SpecSync", url: "https://github.com/SentinelOps-CI/SpecSync", description: "GitHub-native specification coverage and verification gates.", category: "Build & verify" },
  { name: "Lean Toolchain", url: "https://github.com/SentinelOps-CI/lean-toolchain", description: "Optimised Lean theorem prover distribution for verification workflows.", category: "Build & verify" },
  { name: "Runtime Safety Kernels", url: "https://github.com/SentinelOps-CI/runtime-safety-kernels", description: "Minimal trusted computing base for AI system isolation.", category: "Runtime & assurance" },
  { name: "Security Envelopes", url: "https://github.com/SentinelOps-CI/security-envelopes", description: "Cryptographic containers for sensitive AI operations.", category: "Runtime & assurance" },
  { name: "Model Asset Guard", url: "https://github.com/SentinelOps-CI/model-asset-guard", description: "Integrity verification for AI models and training artefacts.", category: "Runtime & assurance" },
  { name: "Post-Incident Proofs", url: "https://github.com/SentinelOps-CI/post-incident-proofs", description: "Cryptographically sealed audit trails for forensic analysis.", category: "Runtime & assurance" },
  { name: "PF Testbed", url: "https://github.com/SentinelOps-CI/pf-testbed", description: "Testing framework for proof-carrying behaviour systems.", category: "Test & data" },
  { name: "Dataset Safety Specs", url: "https://github.com/SentinelOps-CI/dataset-safety-specs", description: "Formal specifications for training-data safety and compliance.", category: "Test & data" },
];

const categories = ["Platform", "Build & verify", "Runtime & assurance", "Test & data"];

const faqs = [
  { q: "Where can I find API documentation?", a: "Each repository contains comprehensive API documentation in its README and accompanying markdown files. Look for /docs directories inside individual repositories for detailed guides." },
  { q: "How do I contribute to the documentation?", a: "Documentation improvements are welcome. Submit pull requests to the relevant repository and follow each project's CONTRIBUTING guidelines." },
  { q: "Which tool should I start with?", a: "For runtime verification, begin with Provability Fabric. For specification management, try Spec-to-Proof. For CI/CD integration, start with SpecSync." },
  { q: "Are there integration examples available?", a: "Yes — most repositories include practical examples in their /examples directories. The PF Testbed repository contains comprehensive integration patterns and test cases." },
  { q: "What programming languages are supported?", a: "Our tools primarily support Rust, TypeScript/JavaScript, and Python. Language-specific bindings are documented in each repository's README." },
];

const Docs = () => (
  <Layout>
    <Seo
      title="Documentation — Getting Started with Verification | SentinelOps"
      description="Guides, API references, and FAQs for SentinelOps verification tools — Provability Fabric, Spec-to-Proof, SpecSync, and more."
      path="/docs"
    />

    <section className="border-b border-[hsl(var(--rule))] bg-[hsl(var(--paper-bright))]">
      <div className="container-paper py-16 sm:py-20 lg:py-24">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          <div className="lg:col-span-3 pt-2">
            <div className="hero-kicker">Reference</div>
            <div className="eyebrow mt-4">Documentation</div>
          </div>
          <div className="lg:col-span-9 max-w-4xl">
            <h1 className="mb-7">Documentation.</h1>
            <p className="font-serif text-2xl leading-relaxed text-foreground/[0.86] max-w-3xl">
              Each product maintains its primary documentation in its repository. This page
              is an index and an orientation — not a substitute for the source.
            </p>
          </div>
        </div>
      </div>
    </section>

    <div className="container-paper py-16">
      {/* Getting started */}
      <section className="mb-20">
        <header className="flex items-baseline gap-4 mb-8 pb-4 border-b border-foreground">
          <div className="eyebrow">§1</div>
          <h2 className="text-2xl">Getting started</h2>
        </header>
        <ol className="grid md:grid-cols-3 gap-px bg-[hsl(var(--rule))] border border-[hsl(var(--rule))]">
          {[
            { n: "1", title: "Choose your tool", body: "Select the verification tool that matches your use case from the index below." },
            { n: "2", title: "Clone and install", body: "Follow the installation instructions in each repository's README file." },
            { n: "3", title: "Run the examples", body: "Try the provided examples to understand the tool's capabilities and integration patterns." },
          ].map((s) => (
            <li key={s.n} className="bg-background p-8">
              <div className="display-serif italic text-3xl mb-3">{s.n}</div>
              <h3 className="mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.body}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Product index */}
      <section className="mb-20">
        <header className="flex items-baseline gap-4 mb-8 pb-4 border-b border-foreground">
          <div className="eyebrow">§2</div>
          <h2 className="text-2xl">Product index</h2>
        </header>

        {categories.map((cat) => {
          const items = repositories.filter((r) => r.category === cat);
          return (
            <div key={cat} className="mb-12">
              <h3 className="text-base mb-4 eyebrow text-foreground">{cat}</h3>
              <dl className="divide-y divide-[hsl(var(--rule))] border-t border-b border-[hsl(var(--rule))]">
                {items.map((r) => (
                  <div key={r.name} className="grid md:grid-cols-12 gap-4 md:gap-8 py-5">
                    <dt className="md:col-span-3">
                      <a
                        href={r.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground underline underline-offset-4 decoration-[hsl(var(--rule-strong))] hover:decoration-foreground"
                      >
                        {r.name} ↗
                      </a>
                    </dt>
                    <dd className="md:col-span-9 text-muted-foreground leading-relaxed">
                      {r.description}
                      <div className="mono text-xs mt-1 text-foreground/60">{r.url.replace("https://", "")}</div>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          );
        })}
      </section>

      {/* FAQ */}
      <section className="mb-20">
        <header className="flex items-baseline gap-4 mb-8 pb-4 border-b border-foreground">
          <div className="eyebrow">§3</div>
          <h2 className="text-2xl">Frequently asked questions</h2>
        </header>
        <Accordion type="single" collapsible className="border-t border-[hsl(var(--rule))]">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`q${i}`} className="border-b border-[hsl(var(--rule))]">
              <AccordionTrigger className="text-left hover:no-underline py-5 text-lg font-normal">
                <span className="display-serif italic">{f.q}</span>
              </AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed text-muted-foreground pb-5">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <div className="border-t border-foreground pt-10 max-w-2xl">
        <h2 className="mb-3">All projects</h2>
        <p className="text-muted-foreground mb-6">
          The complete collection of repositories, including utilities and experimental work.
        </p>
        <Button asChild size="lg" className="rounded-none">
          <a href="https://github.com/orgs/SentinelOps-CI/repositories" target="_blank" rel="noopener noreferrer">
            All projects on GitHub ↗
          </a>
        </Button>
      </div>
    </div>
  </Layout>
);

export default Docs;
