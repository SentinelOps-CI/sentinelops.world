import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Mission = () => {
  const principles = [
    { n: "I", title: "Safety first", body: "Every AI system operating in a consequential domain should provide mathematical guarantees about its behaviour." },
    { n: "II", title: "Precision and rigour", body: "Formal verification and proof-carrying code ensure that systems behave exactly as specified — without ambiguity, without exception." },
    { n: "III", title: "Open collaboration", body: "Verified AI is collective infrastructure. We build in public so the substrate is auditable by anyone." },
    { n: "IV", title: "Practical innovation", body: "We bridge the gap between academic theorem-proving and production deployment, making formal methods usable." },
  ];

  const timeline = [
    { year: "2024", title: "Foundation", body: "Established the core verification toolchain and the open-source organisation." },
    { year: "2025", title: "Industry adoption", body: "Extending verified behaviour across finance, healthcare, and autonomous-systems pilots." },
    { year: "2026", title: "Standard setting", body: "Contributing to interoperable specifications and proof-exchange standards." },
    { year: "2027+", title: "Ubiquitous verification", body: "Formal verification as the default for AI in safety-critical applications." },
  ];

  return (
    <Layout>
      <Seo
        title="Mission — Provably Safe AI Systems | SentinelOps"
        description="Building the infrastructure for verified artificial intelligence — where every AI system ships with mathematical proofs of its behaviour."
        path="/mission"
      />

      {/* Hero */}
      <section className="border-b border-[hsl(var(--rule))] bg-[hsl(var(--paper-bright))]">
        <div className="container-paper py-16 sm:py-20 lg:py-24">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-14 items-start">
            <div className="lg:col-span-3 pt-2">
              <div className="hero-kicker">Mission</div>
              <div className="eyebrow mt-4">A statement of intent</div>
            </div>
            <div className="lg:col-span-9 max-w-5xl">
              <h1 className="mb-8">
                Making AI systems <span className="display-serif italic">provably</span> safe and reliable.
              </h1>
              <div className="grid md:grid-cols-2 gap-7 md:gap-10 max-w-4xl">
                <p className="font-serif text-2xl leading-relaxed text-foreground/90">
                  We are building the infrastructure for verified artificial intelligence — a
                  substrate in which every AI system in a consequential domain ships with
                  mathematical proofs of its behaviour.
                </p>
                <p className="text-base text-muted-foreground border-t md:border-t-0 md:border-l border-[hsl(var(--rule))] pt-5 md:pt-1 md:pl-8">
                  The shift is from <em>testing</em> to <em>proving</em>; from confidence to certainty.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prose body */}
      <section className="border-b border-[hsl(var(--rule))]">
        <div className="container-prose prose-paper">
          <div className="eyebrow mb-4">§1 · The problem</div>
          <h2 className="mb-6">Testing approximates. Proof guarantees.</h2>
          <p className="dropcap">
            Traditional AI development relies on empirical validation. Test coverage may
            reach ninety percent of expected scenarios; the remaining ten percent is the
            domain in which incidents occur. When the system in question is approving a
            transaction, dispensing a medication, or steering a vehicle, that residual
            uncertainty is unacceptable.
          </p>
          <p>
            Formal verification — proof in the mathematical sense — closes the gap. A
            verified property is true not because we have failed to find a counter-example,
            but because no counter-example can exist. The same technique that underwrites
            cryptographic protocols and aerospace control systems is now possible, at
            production speed, for the policies that govern AI behaviour.
          </p>

          <figure className="my-12 border border-[hsl(var(--rule))] p-6 bg-background">
            <div className="grid grid-cols-2 gap-6 text-sm">
              <div>
                <div className="eyebrow mb-2">Empirical testing</div>
                <div className="display-serif italic text-4xl">≈80%</div>
                <p className="text-muted-foreground text-sm mt-2">Typical coverage of behavioural scenarios.</p>
              </div>
              <div>
                <div className="eyebrow mb-2">Formal verification</div>
                <div className="display-serif italic text-4xl">≈5%</div>
                <p className="text-muted-foreground text-sm mt-2">Share of deployed AI systems with proof-backed properties.</p>
              </div>
            </div>
            <figcaption className="figure-caption mt-6">Fig. 1 — The gap this programme is built to close.</figcaption>
          </figure>

          <div className="eyebrow mt-16 mb-4">§2 · Vision</div>
          <h2 className="mb-6">A future where "it should work" becomes "we can prove it works".</h2>
          <p>
            AI systems in critical applications operate with mathematical certainty.
            Autonomous vehicles, medical devices, financial systems, and the
            infrastructure of cities — each ships with proofs of the properties their
            operators care about, and a runtime that admits only behaviour consistent
            with those proofs.
          </p>
        </div>
      </section>

      {/* Principles */}
      <section className="border-b border-[hsl(var(--rule))]">
        <div className="container-paper py-20">
          <div className="max-w-2xl mb-12">
            <div className="eyebrow mb-3">§3 · Principles</div>
            <h2>Four commitments.</h2>
          </div>
          <ol className="grid md:grid-cols-2 gap-x-12 gap-y-12">
            {principles.map((p) => (
              <li key={p.n} className="border-t-2 border-foreground pt-5">
                <div className="display-serif italic text-3xl mb-2">{p.n}</div>
                <h3 className="mb-3">{p.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{p.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Roadmap */}
      <section className="border-b border-[hsl(var(--rule))]">
        <div className="container-paper py-20">
          <div className="max-w-2xl mb-12">
            <div className="eyebrow mb-3">§4 · Roadmap</div>
            <h2>Milestones.</h2>
          </div>
          <ol className="border-t border-[hsl(var(--rule))]">
            {timeline.map((t) => (
              <li key={t.year} className="grid md:grid-cols-12 gap-4 md:gap-8 py-6 border-b border-[hsl(var(--rule))]">
                <div className="md:col-span-2 eyebrow text-foreground">{t.year}</div>
                <div className="md:col-span-3">
                  <h3 className="text-xl">{t.title}</h3>
                </div>
                <p className="md:col-span-7 text-muted-foreground leading-relaxed">{t.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="container-paper py-20">
          <div className="max-w-3xl">
            <div className="eyebrow mb-3">Join the programme</div>
            <h2 className="mb-4">Research is collective work.</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl">
              Whether you are a researcher, an engineer, or an organisation deploying AI
              in consequential settings, there is a place for you in advancing the
              verifiable substrate.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button size="lg" asChild className="rounded-none">
                <a href="https://github.com/orgs/SentinelOps-CI/repositories" target="_blank" rel="noopener noreferrer">
                  Contribute on GitHub ↗
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild className="rounded-none border-foreground">
                <Link to="/products">Explore the products</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Mission;
