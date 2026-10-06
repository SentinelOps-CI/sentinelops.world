import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import { Button } from "@/components/ui/button";

type Product = {
  num: string;
  id: string;
  title: string;
  status: "Core" | "Active" | "Beta" | "Research";
  abstract: string;
  tags: string[];
  repo: string;
};

const sections: { code: string; name: string; items: Product[] }[] = [
  {
    code: "§1",
    name: "Platform",
    items: [
      {
        num: "1.1",
        id: "provability-fabric",
        title: "Provability Fabric",
        status: "Core",
        abstract:
          "The foundational runtime for proof-carrying behaviour. Intercepts agent actions, validates attached proofs against policy, and admits only verified operations.",
        tags: ["Runtime verification", "Proof-carrying code", "Policy engine", "Rust · WASM"],
        repo: "https://github.com/SentinelOps-CI/provability-fabric",
      },
    ],
  },
  {
    code: "§2",
    name: "Build & verify",
    items: [
      { num: "2.1", id: "spec-to-proof", title: "Spec-to-Proof", status: "Active", abstract: "Compile natural-language specifications into Lean theorem proofs. Transforms policy documents into machine-checkable mathematical artefacts.", tags: ["LLM-to-Lean", "Policy compilation"], repo: "https://github.com/SentinelOps-CI/spec-to-proof" },
      { num: "2.2", id: "speccursor", title: "SpecCursor", status: "Active", abstract: "Formal qualification for dependency upgrades. Ensures code changes preserve existing behavioural guarantees through automated proof verification.", tags: ["Dependency safety", "Change verification"], repo: "https://github.com/SentinelOps-CI/speccursor" },
      { num: "2.3", id: "specsync", title: "SpecSync", status: "Active", abstract: "GitHub-native specification coverage and verification gates, integrated into pull-request workflows.", tags: ["GitHub Actions", "CI/CD gates"], repo: "https://github.com/SentinelOps-CI/SpecSync" },
      { num: "2.4", id: "lean-toolchain", title: "Lean Toolchain", status: "Active", abstract: "A curated distribution of the Lean theorem prover with extensions for AI safety verification workflows.", tags: ["Lean 4", "Verification library"], repo: "https://github.com/SentinelOps-CI/lean-toolchain" },
    ],
  },
  {
    code: "§3",
    name: "Runtime & assurance",
    items: [
      { num: "3.1", id: "runtime-safety-kernels", title: "Runtime Safety Kernels", status: "Active", abstract: "A minimal trusted computing base — lightweight kernels providing hardware-level isolation for AI workloads with minimal attack surface.", tags: ["Isolation", "Hardware security"], repo: "https://github.com/SentinelOps-CI/runtime-safety-kernels" },
      { num: "3.2", id: "security-envelopes", title: "Security Envelopes", status: "Beta", abstract: "Encrypted execution environments providing confidentiality and integrity guarantees for AI model inference and training.", tags: ["Encrypted execution", "Confidential computing"], repo: "https://github.com/SentinelOps-CI/security-envelopes" },
      { num: "3.3", id: "model-asset-guard", title: "Model Asset Guard", status: "Active", abstract: "Cryptographic verification of model weights, training data, and associated metadata to prevent tampering and ensure provenance.", tags: ["Model integrity", "Provenance"], repo: "https://github.com/SentinelOps-CI/model-asset-guard" },
      { num: "3.4", id: "post-incident-proofs", title: "Post-Incident Proofs", status: "Research", abstract: "An immutable, cryptographically sealed log of AI system behaviour, suitable for forensic analysis and compliance reporting.", tags: ["Audit trails", "Forensics"], repo: "https://github.com/SentinelOps-CI/post-incident-proofs" },
    ],
  },
  {
    code: "§4",
    name: "Test & data",
    items: [
      { num: "4.1", id: "pf-testbed", title: "PF Testbed", status: "Active", abstract: "A testing framework for proof-carrying behaviour systems.", tags: ["Testing", "Integration patterns"], repo: "https://github.com/SentinelOps-CI/pf-testbed" },
      { num: "4.2", id: "dataset-safety-specs", title: "Dataset Safety Specs", status: "Active", abstract: "Formal specifications for training-data safety and compliance.", tags: ["Data safety", "Compliance"], repo: "https://github.com/SentinelOps-CI/dataset-safety-specs" },
    ],
  },
];

const statusStyles: Record<Product["status"], string> = {
  Core: "border-foreground text-foreground",
  Active: "border-foreground/40 text-foreground/80",
  Beta: "border-foreground/40 text-foreground/80",
  Research: "border-muted-foreground/40 text-muted-foreground",
};

const Products = () => {
  return (
    <Layout>
      <Seo
        title="Products — Open-Source AI Verification Tools | SentinelOps"
        description="Provability Fabric, Spec-to-Proof, SpecSync, SpecCursor, Lean Toolchain, Runtime Safety Kernels and more — the SentinelOps suite for verifiable AI."
        path="/products"
      />

      <section className="border-b border-[hsl(var(--rule))] bg-[hsl(var(--paper-bright))]">
        <div className="container-paper py-16 sm:py-20 lg:py-24">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-14 items-start">
            <div className="lg:col-span-3 pt-2">
              <div className="hero-kicker">Catalogue</div>
              <div className="eyebrow mt-4">Open-source verification tools</div>
            </div>
            <div className="lg:col-span-9 max-w-4xl">
              <h1 className="mb-7">Products.</h1>
              <p className="font-serif text-2xl leading-relaxed text-foreground/[0.86] max-w-3xl">
                A suite of open-source tools for building verifiable AI systems — from
                specification, through proof, to runtime. Each tool is published under a
                permissive licence and developed in public.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="container-paper py-16">
        {sections.map((sec) => (
          <section key={sec.code} className="mb-20">
            <header className="flex items-baseline gap-4 mb-8 pb-4 border-b border-foreground">
              <div className="eyebrow">{sec.code}</div>
              <h2 className="text-2xl">{sec.name}</h2>
            </header>

            <ol className="divide-y divide-[hsl(var(--rule))]">
              {sec.items.map((p) => (
                <li key={p.id} id={p.id} className="grid md:grid-cols-12 gap-6 md:gap-10 py-10 scroll-mt-24">
                  <div className="md:col-span-2">
                    <div className="display-serif italic text-3xl text-foreground mb-2">§{p.num}</div>
                    <span className={`inline-block border px-2 py-0.5 text-xs uppercase tracking-wider ${statusStyles[p.status]}`}>
                      {p.status}
                    </span>
                  </div>
                  <div className="md:col-span-10">
                    <h3 className="text-2xl mb-3">{p.title}</h3>
                    <p className="text-foreground/[0.85] leading-relaxed mb-4 max-w-3xl">{p.abstract}</p>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 mb-5 text-sm text-muted-foreground">
                      {p.tags.map((t) => (
                        <span key={t}>· {t}</span>
                      ))}
                    </div>
                    <div className="flex gap-6 text-sm">
                      <a
                        href={p.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground underline underline-offset-4 decoration-[hsl(var(--rule-strong))] hover:decoration-foreground"
                      >
                        Repository ↗
                      </a>
                      <a
                        href={p.repo + "#readme"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground underline underline-offset-4 decoration-[hsl(var(--rule))] hover:text-foreground"
                      >
                        Overview
                      </a>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </section>
        ))}

        <div className="border-t border-foreground pt-10 max-w-2xl">
          <h2 className="mb-3">Looking for the full index?</h2>
          <p className="text-muted-foreground mb-6">
            All repositories, including utilities and experimental work, are listed on the
            SentinelOps GitHub organisation.
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
};

export default Products;
