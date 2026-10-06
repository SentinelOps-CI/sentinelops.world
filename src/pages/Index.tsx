import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const GITHUB_ORG = "https://github.com/orgs/SentinelOps-CI/repositories";

const Index = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      toast({ title: "Email required", description: "Please enter your email address.", variant: "destructive" });
      return;
    }
    setIsSubmitting(true);
    try {
      const { error } = await supabase.from("subscribers").insert([{ email: email.trim().toLowerCase() }]);
      if (error) {
        if (error.code === "23505") {
          toast({ title: "Already subscribed", description: "This email is already on the list." });
        } else throw error;
      } else {
        toast({ title: "Subscribed", description: "Thank you. We'll be in touch." });
        setEmail("");
      }
    } catch (err) {
      console.error(err);
      toast({ title: "Subscription failed", description: "Please try again later.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const principles = [
    {
      n: "I",
      title: "Specification-driven",
      body: "Every behavioural requirement starts as a formal specification. Policy statements translate into machine-checkable constraints.",
    },
    {
      n: "II",
      title: "Runtime mediation",
      body: "Execution admits behaviour accompanied by a valid proof. Verification occurs in-line at runtime.",
    },
    {
      n: "III",
      title: "Audit by default",
      body: "Every action ships with cryptographic evidence. Post-incident analysis follows directly from the evidence record.",
    },
  ];

  const steps = [
    {
      figure: "Fig. 1",
      title: "Specify",
      caption: "Policy text is compiled into a formal specification.",
      sample: `"Explicit consent authorizes\nagent access to user data."`,
    },
    {
      figure: "Fig. 2",
      title: "Prove",
      caption: "Automated theorem proving produces a Lean certificate.",
      sample: "∀ a : Action, authorized(a) → allowed(a)",
    },
    {
      figure: "Fig. 3",
      title: "Enforce",
      caption: "The runtime admits only actions with valid certificates.",
      sample: "→ certificate verified · action admitted",
    },
  ];

  const writing = [
    { date: "2025-08-15", title: "How to Get Involved · On-Ramps & Programs", slug: "how-to-get-involved", dek: "Movements beat companies. Researchers and builders advance the verifiable AI internet through open collaboration. Auditors and adopters strengthen the same cycle." },
    { date: "2025-07-15", title: "Building Verification Infrastructure", slug: "building-verification-infrastructure", dek: "Multiple stacks already compile policies into monitors, mediate effects, and emit verifiable evidence. The next mile is scale and standards." },
    { date: "2025-07-01", title: "Mapping the Space · Taxonomy & Interfaces", slug: "mapping-the-space", dek: "The safety conversation is noisy. Evidence scales through properties established by proof and enforced online." },
  ];

  return (
    <Layout>
      <Seo
        title="SentinelOps | Verified AI Runtime"
        description="SentinelOps is a research programme on provable safety for AI agents. Formal specifications and machine-checked proofs connect directly to runtime enforcement."
        path="/"
      />

      <section className="border-b border-[hsl(var(--rule))] overflow-hidden">
        <div className="container-paper">
          <div className="grid lg:grid-cols-12 min-h-[680px] lg:min-h-[720px]">
            <div className="lg:col-span-7 py-16 sm:py-24 lg:py-28 lg:pr-14 xl:pr-20 flex flex-col justify-between">
              <div>
                <div className="hero-kicker mb-8">Provability Fabric</div>
                <h1 className="max-w-4xl mb-8">
                  Provable safety for <span className="display-serif">autonomous agents</span>.
                </h1>
                <p className="font-serif text-2xl sm:text-[1.72rem] leading-[1.38] max-w-3xl text-foreground/90 mb-6">
                  We are building an open-source fabric in which every action an AI agent
                  takes is mediated, every outbound effect is attestable, and every guarantee
                  is backed by machine-checked proofs.
                </p>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mb-10">
                  Specifications compile to proofs. Proofs are checked at runtime.
                  Evidence is recorded for audit. The result is a substrate that supports
                  rigorous analysis of AI systems.
                </p>

                <div className="flex flex-wrap gap-3 items-center">
                  <Button asChild size="lg" className="h-12 px-6 font-medium">
                    <Link to="/blog">
                      Read the writing
                      <ArrowUpRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="h-12 px-6 font-medium border-foreground/50 bg-transparent">
                    <a href={GITHUB_ORG} target="_blank" rel="noopener noreferrer">
                      Browse the code ↗
                    </a>
                  </Button>
                </div>
              </div>

              <div className="grid sm:grid-cols-3 gap-4 mt-16 pt-5 border-t border-[hsl(var(--rule))]">
                <div>
                  <div className="eyebrow mb-1">Stack</div>
                  <div className="mono text-sm text-foreground/[0.85]">Lean 4 · Rust · WASM</div>
                </div>
                <div>
                  <div className="eyebrow mb-1">Licence</div>
                  <div className="mono text-sm text-foreground/[0.85]">Apache 2.0 · MIT</div>
                </div>
                <div>
                  <div className="eyebrow mb-1">Mode</div>
                  <div className="mono text-sm text-foreground/[0.85]">Open source</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 lg:border-l border-[hsl(var(--rule))] lg:pl-10 xl:pl-14 py-10 lg:py-16 flex items-center">
              <div className="technical-panel w-full">
                <div className="px-6 sm:px-8 pt-6 sm:pt-8 pb-5 flex items-start justify-between gap-5">
                  <div>
                    <div className="mono text-[0.62rem] tracking-[0.13em] uppercase text-white/50 mb-2">Runtime specimen / PF-01</div>
                    <div className="font-serif text-2xl sm:text-3xl text-white leading-tight">Proof-carrying behaviour</div>
                  </div>
                  <div className="mono text-[0.58rem] tracking-[0.1em] uppercase text-white/[0.55] border border-white/20 px-2 py-1">verified</div>
                </div>

                <div className="px-6 sm:px-8 py-6 border-t border-white/[0.15]">
                  <div className="mono text-[0.68rem] leading-relaxed text-white/[0.68] whitespace-pre-wrap">
                    <span className="text-white/[0.35]">policy / </span>
                    Agent action must satisfy the declared capability and effect constraints.
                  </div>
                </div>

                <div className="px-6 sm:px-8">
                  <div className="spec-line">
                    <span className="spec-line-index">01</span>
                    <span className="spec-line-label">specify</span>
                    <span className="spec-line-state">bound</span>
                  </div>
                  <div className="spec-line">
                    <span className="spec-line-index">02</span>
                    <span className="spec-line-label">prove</span>
                    <span className="spec-line-state">checked</span>
                  </div>
                  <div className="spec-line">
                    <span className="spec-line-index">03</span>
                    <span className="spec-line-label">enforce</span>
                    <span className="spec-line-state">admitted</span>
                  </div>
                </div>

                <div className="px-6 sm:px-8 py-7 mt-2 border-t border-white/[0.15]">
                  <div className="mono text-[0.64rem] tracking-[0.08em] uppercase text-white/[0.48] mb-3">Certificate</div>
                  <div className="mono text-[0.7rem] leading-6 text-white/[0.78]">
                    policy_hash&nbsp;&nbsp;&nbsp;7f2a…91cd<br />
                    proof_status&nbsp;&nbsp;valid<br />
                    effect_gate&nbsp;&nbsp;&nbsp;admit<br />
                    evidence&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;recorded
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[hsl(var(--rule))] bg-[hsl(var(--paper-bright))]">
        <div className="container-paper py-14 sm:py-16">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-14">
            <div className="lg:col-span-3">
              <div className="eyebrow">Abstract</div>
            </div>
            <div className="lg:col-span-9 grid md:grid-cols-2 gap-7 md:gap-10 font-serif text-lg leading-relaxed">
              <p>
                Modern AI agents reach deployment faster than rigorous analysis keeps pace.
                Testing estimates behaviour. Formal proof establishes stated properties.
                High-consequence domains such as medicine and critical infrastructure demand
                verified actions and explicit evidence.
              </p>
              <p>
                <em>Provability Fabric</em> uses <strong>proof-carrying behaviour</strong> as its
                operating model. Specifications are first-class artefacts. Proofs travel with
                actions. The runtime serves as the verifier.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[hsl(var(--rule))]">
        <div className="container-paper py-20 sm:py-24">
          <div className="section-frame mb-12">
            <div className="section-heading">
              <div className="section-index">01 / Method</div>
              <div className="section-title">
                <h2 className="mb-4">From natural language to machine-checked guarantee.</h2>
                <p className="text-lg text-muted-foreground max-w-2xl">
                  Three stages run in sequence. Each output feeds the next stage. Their combined
                  record forms the audit trail.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 border-y border-[hsl(var(--rule))] md:divide-x divide-[hsl(var(--rule))]">
            {steps.map((s, i) => (
              <article key={s.figure} className="py-8 md:px-7 lg:px-9 first:pl-0 last:pr-0 border-b md:border-b-0 border-[hsl(var(--rule))]">
                <div className="flex items-center justify-between mb-8">
                  <div className="figure-caption">{s.figure}</div>
                  <div className="mono text-xs text-muted-foreground">0{i + 1}</div>
                </div>
                <h3 className="mb-3">{s.title}</h3>
                <p className="text-sm text-muted-foreground mb-7 min-h-[3.3rem]">{s.caption}</p>
                <pre className="mono text-foreground/[0.78] whitespace-pre-wrap border-t border-[hsl(var(--rule))] pt-5 min-h-[5.6rem] leading-relaxed">
{s.sample}
                </pre>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[hsl(var(--navy))] text-[hsl(var(--hero-foreground))]">
        <div className="container-paper py-20 sm:py-24">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-4">
              <div className="mono text-[0.66rem] uppercase tracking-[0.11em] text-white/[0.45] mb-5">02 / Principles</div>
              <h2 className="!text-white mb-4">Proof over promises.</h2>
              <p className="text-white/[0.62] max-w-sm">
                Three commitments distinguish a verified system from a tested system.
              </p>
            </div>
            <ol className="lg:col-span-8 grid sm:grid-cols-3 border-t border-white/20 sm:border-t-0 sm:border-l border-white/20">
              {principles.map((p) => (
                <li key={p.n} className="py-7 sm:py-0 sm:px-7 lg:px-8 border-b sm:border-b-0 sm:border-r border-white/20 last:border-r-0">
                  <div className="font-serif italic text-4xl text-white/[0.35] mb-5">{p.n}</div>
                  <h3 className="!text-white text-xl mb-4">{p.title}</h3>
                  <p className="text-sm text-white/[0.64] leading-relaxed">{p.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="border-b border-[hsl(var(--rule))]">
        <div className="container-paper py-20 sm:py-24">
          <div className="section-frame mb-10">
            <div className="section-heading">
              <div className="section-index">03 / Selected writing</div>
              <div className="section-title flex items-end justify-between gap-6 flex-wrap">
                <h2>From the journal.</h2>
                <Link to="/blog" className="nav-link text-primary hover:text-primary/70 border-b border-primary pb-1">
                  All entries ↗
                </Link>
              </div>
            </div>
          </div>

          <ul className="border-t border-[hsl(var(--rule))]">
            {writing.map((w, i) => (
              <li key={w.slug} className="border-b border-[hsl(var(--rule))]">
                <Link
                  to={`/blog/${w.slug}`}
                  className="group grid md:grid-cols-12 gap-4 md:gap-8 py-7 md:py-8 transition-colors hover:bg-[hsl(var(--paper-bright))] md:-mx-5 md:px-5"
                >
                  <div className="md:col-span-1 mono text-xs text-muted-foreground">0{i + 1}</div>
                  <time className="md:col-span-2 eyebrow text-muted-foreground pt-1">
                    {new Date(w.date).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" })}
                  </time>
                  <div className="md:col-span-7">
                    <h3 className="text-xl mb-2 group-hover:text-primary transition-colors">{w.title}</h3>
                    <p className="font-serif text-lg text-muted-foreground leading-snug max-w-2xl">{w.dek}</p>
                  </div>
                  <div className="md:col-span-2 md:text-right pt-1">
                    <span className="nav-link text-foreground group-hover:text-primary">Read ↗</span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section>
        <div className="container-paper py-20 sm:py-24">
          <div className="border border-foreground bg-[hsl(var(--paper-bright))] grid md:grid-cols-12">
            <div className="md:col-span-6 p-7 sm:p-10 lg:p-12 md:border-r border-[hsl(var(--rule))]">
              <div className="eyebrow mb-4">Correspondence</div>
              <h2 className="mb-4">Receive new writing.</h2>
              <p className="text-muted-foreground max-w-lg">
                Occasional dispatches on formal methods, runtime verification, and the
                infrastructure of trustworthy AI.{" "}
              </p>
            </div>
            <form onSubmit={handleSubscribe} className="md:col-span-6 p-7 sm:p-10 lg:p-12 flex flex-col justify-end">
              <label htmlFor="subscribe-email" className="eyebrow mb-3">Email address</label>
              <div className="flex flex-col sm:flex-row gap-0">
                <Input
                  id="subscribe-email"
                  type="email"
                  placeholder="you@institution.edu"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 h-12 border-foreground bg-transparent sm:border-r-0"
                />
                <Button type="submit" size="lg" disabled={isSubmitting} className="h-12 sm:min-w-36">
                  {isSubmitting ? "Subscribing…" : "Subscribe"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
