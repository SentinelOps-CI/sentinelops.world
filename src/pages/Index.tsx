import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

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
    { n: "I", title: "Specification-driven", body: "Behavioral obligations need precise specifications and a record of how policy statements are interpreted." },
    { n: "II", title: "Runtime mediation", body: "Checks have a defined execution boundary. The governed effects, coverage, and bypass assumptions determine what the control establishes." },
    { n: "III", title: "Audit by default", body: "Evidence records connect decisions to policy and implementation identity, making selected effects independently examinable." },
  ];

  const steps = [
    { figure: "Fig. 1", title: "Specify", caption: "Interpret policy text as an explicit condition with declared actors and permissions.", sample: "Illustrative policy: Explicit consent authorizes agent access to user data." },
    { figure: "Fig. 2", title: "Prove", caption: "State and check a formal obligation with recorded assumptions and toolchain versions.", sample: "Schematic proposition: authorized(action) implies allowed(action)." },
    { figure: "Fig. 3", title: "Enforce", caption: "Mediate the supported effects and preserve evidence of actual runtime decisions.", sample: "Design condition: admit an action only following the applicable check." },
  ];

  const writing = [
    { date: "2025-08-15", title: "Contributing to Verification Infrastructure", slug: "how-to-get-involved", dek: "Movements beat companies. Researchers and builders advance the verifiable AI internet through open collaboration. Auditors and adopters strengthen the same cycle." },
    { date: "2025-08-15", title: "Building Verification Infrastructure", slug: "building-verification-infrastructure", dek: "Multiple stacks already compile policies into monitors, mediate effects, and emit verifiable evidence. The next mile is scale and standards." },
    { date: "2025-06-15", title: "Mapping the Verification Space", slug: "mapping-the-space", dek: "The safety conversation is noisy. Evidence scales through properties established by proof and enforced online." },
  ];

  return (
    <Layout>
      <Seo
        title="SentinelOps | Formal Verification and Runtime Control"
        description="Research on formal specifications, conditional verification, runtime mediation, and inspectable evidence for autonomous software."
        path="/"
      />

      <section className="home-hero" aria-labelledby="home-title">
        <div className="container-paper home-hero__layout">
          <div className="home-hero__primary">
            <div>
              <div className="home-hero__kicker">Provability Fabric / Open-source research</div>
              <h1 id="home-title">Provable safety for autonomous agents.</h1>
              <p className="home-hero__summary">
                Provability Fabric investigates how specifications, machine-checked proofs,
                and runtime controls relate to the actions of autonomous software. The
                research objective is evidence for precisely scoped safety claims.
              </p>
              <div className="home-hero__actions">
                <Link to="/blog" className="home-hero__action home-hero__action--primary">
                  Read the writing <span aria-hidden="true">↗</span>
                </Link>
                <a
                  href={GITHUB_ORG}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="home-hero__action home-hero__action--secondary"
                >
                  Browse the code <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
            <div className="home-hero__metadata" aria-label="Project reference">
              <div><span>Stack</span><p>Lean 4 · Rust · WASM across projects</p></div>
              <div><span>Licence</span><p>Project-specific; see repository</p></div>
              <div><span>Mode</span><p>Open source</p></div>
            </div>
            <div className="home-hero__folio">
              <span>01 — 04</span> Specification / mediation / evidence / replay
            </div>
          </div>

          <aside className="home-hero__aside" aria-label="Illustrative proof-carrying behaviour model">
            <div className="home-hero__aside-head">
              <span>Proof-carrying behaviour</span><span>Reference model</span>
            </div>
            <p className="home-hero__aside-disclaimer">
              Conceptual interface, not a captured execution or verified certificate.
            </p>
            <ol className="home-hero__aside-list">
              <li>
                <span className="home-hero__aside-index">01 / Policy</span>
                <h2 className="home-hero__aside-title">Specify</h2>
                <p className="home-hero__aside-description">Bind an action to declared capability and effect constraints.</p>
              </li>
              <li>
                <span className="home-hero__aside-index">02 / Proof</span>
                <h2 className="home-hero__aside-title">Prove</h2>
                <p className="home-hero__aside-description">Check the formal claim under stated premises and trusted components.</p>
              </li>
              <li>
                <span className="home-hero__aside-index">03 / Runtime</span>
                <h2 className="home-hero__aside-title">Enforce</h2>
                <p className="home-hero__aside-description">Mediate supported effects and record the decision.</p>
              </li>
            </ol>
            <dl className="home-hero__evidence">
              <div><dt>Policy identity</dt><dd>Declared input</dd></div>
              <div><dt>Proof status</dt><dd>Check required</dd></div>
              <div><dt>Effect gate</dt><dd>Defined boundary</dd></div>
              <div><dt>Evidence</dt><dd>Record to inspect</dd></div>
            </dl>
            <div className="home-hero__aside-tail">
              <span>Illustration only</span><span>No runtime verdict implied</span>
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
                Formal verification establishes specified properties under explicit assumptions.
                The evidence for a deployed system must also address the correspondence
                between its specification, its executable interfaces, and the conditions
                covered by the original result.
              </p>
              <p>
                Provability Fabric studies the connection between policy constraints,
                mediation of consequential effects, and independently inspectable records.
                The objective is to make each claim and the limits of its support precise.
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
                <h2 className="mb-4">From policy text to an inspectable control.</h2>
                <p className="text-lg text-muted-foreground max-w-2xl">
                  Specification, proof, and enforcement form a proposed chain. Each transition
                  needs its own implementation and supporting evidence.
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
                <p className="text-sm text-foreground/75 border-t border-[hsl(var(--rule))] pt-5 leading-relaxed">{s.sample}</p>
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
            <p>The original principles are retained, with their scope and limits stated explicitly.</p>
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
                  <time dateTime={w.date} className="md:col-span-2 eyebrow text-muted-foreground pt-1">
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
