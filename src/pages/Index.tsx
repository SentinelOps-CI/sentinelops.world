import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
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
    { date: "2025-08-15", title: "Contributing to Verification Infrastructure", slug: "how-to-get-involved", dek: "Movements beat companies. Researchers and builders advance the verifiable AI internet through open collaboration. Auditors and adopters strengthen the same cycle." },
    { date: "2025-08-15", title: "Building Verification Infrastructure", slug: "building-verification-infrastructure", dek: "Multiple stacks already compile policies into monitors, mediate effects, and emit verifiable evidence. The next mile is scale and standards." },
    { date: "2025-06-15", title: "Mapping the Verification Space", slug: "mapping-the-space", dek: "The safety conversation is noisy. Evidence scales through properties established by proof and enforced online." },
  ];

  return (
    <Layout>
      <Seo
        title="SentinelOps | Verified AI Runtime"
        description="SentinelOps is a research programme on provable safety for AI agents. Formal specifications and machine-checked proofs connect directly to runtime enforcement."
        path="/"
      />

      <section className="home-hero" aria-labelledby="home-title">
        <div className="container-paper home-hero__layout">
          <div className="home-hero__primary">
            <div>
              <div className="home-hero__kicker">Formal methods / runtime systems</div>
              <h1 id="home-title">Verification at the point of execution.</h1>
              <p className="home-hero__summary">
                SentinelOps studies the interfaces connecting formal specifications, runtime
                controls, and the evidence needed to examine autonomous-system behaviour.
              </p>
              <div className="home-hero__actions">
                <Link to="/blog" className="home-hero__action home-hero__action--primary">
                  Read the research <span aria-hidden="true">↗</span>
                </Link>
                <a
                  href={GITHUB_ORG}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="home-hero__action home-hero__action--secondary"
                >
                  Inspect source <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
            <div className="home-hero__folio">
              <span>01 — 04</span> Specification / mediation / evidence / replay
            </div>
          </div>

          <aside className="home-hero__aside" aria-label="Research programme areas">
            <div className="home-hero__aside-head">
              <span>Research focus</span>
              <span>01 / 03</span>
            </div>
            <ol className="home-hero__aside-list">
              <li>
                <span className="home-hero__aside-index">01</span>
                <h2 className="home-hero__aside-title">Specification</h2>
                <p className="home-hero__aside-description">Explicit policy and claim boundaries.</p>
              </li>
              <li>
                <span className="home-hero__aside-index">02</span>
                <h2 className="home-hero__aside-title">Runtime mediation</h2>
                <p className="home-hero__aside-description">Decision points governing consequential effects.</p>
              </li>
              <li>
                <span className="home-hero__aside-index">03</span>
                <h2 className="home-hero__aside-title">Independent evidence</h2>
                <p className="home-hero__aside-description">Records for inspection, reproduction, and disagreement.</p>
              </li>
            </ol>
            <div className="home-hero__aside-tail">
              <span>Public research</span>
              <span>SentinelOps</span>
            </div>
          </aside>
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

      <section className="programme-principles" aria-labelledby="principles-heading">
        <div className="container-paper programme-principles__inner">
          <div className="programme-principles__intro">
            <span className="programme-principles__kicker">02 / Principles</span>
            <h2 id="principles-heading">Proof over promises.</h2>
            <p>Three commitments distinguish a verified system from a tested system.</p>
          </div>
          <ol className="programme-principles__list">
            {principles.map((p) => (
              <li key={p.n}>
                <span className="programme-principles__number">{p.n}</span>
                <div>
                  <h3>{p.title}</h3>
                  <p>{p.body}</p>
                </div>
              </li>
            ))}
          </ol>
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
                    {new Date(w.date).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric", timeZone: "UTC" })}
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
