import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const Blog = () => {
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
        if (error.code === "23505") toast({ title: "Already subscribed", description: "This email is already on the list." });
        else throw error;
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

  const blogPosts = [
    { id: 5, title: "Current Technical Program", description: "An account of the programme areas, current implementations, and questions still open to validation.", date: "2026-10-06", category: "Updates", readTime: "11 min", slug: "current-initiatives" },
    { id: 6, title: "Contributing to Verification Infrastructure", description: "Technical participation guide for public work across the SentinelOps verification stack.", date: "2025-08-15", category: "Participation", readTime: "7 min", slug: "how-to-get-involved" },
    { id: 4, title: "Building Verification Infrastructure", description: "Design questions for connecting formal specifications to runtime controls and reproducible evidence.", date: "2025-08-15", category: "Infrastructure", readTime: "10 min", slug: "building-verification-infrastructure" },
    { id: 2, title: "Verification Infrastructure Development Sequence", description: "A proposed development sequence for specifications, verification tools, runtime controls, and evaluation.", date: "2025-07-15", category: "Roadmap", readTime: "8 min", slug: "ecosystem-development-timeline" },
    { id: 3, title: "Mapping the Verification Space", description: "A taxonomy of technical properties, verification interfaces, and evidence boundaries.", date: "2025-06-15", category: "Technical", readTime: "15 min", slug: "mapping-the-space" },
    { id: 1, title: "The Verifiable AI Ecosystem", description: "A vision for verification infrastructure and the conditions needed to evaluate its claims.", date: "2025-05-30", category: "Vision", readTime: "12 min", slug: "verifiable-ai-ecosystem" },
  ];

  const researchPapers = [
    { id: 1, title: "System Architecture", description: "Architecture reference for the verification programme.", type: "Architecture", pages: "19 pages", url: "/papers/architecture.pdf" },
    { id: 2, title: "Technical Guide", description: "Technical reference covering implementation and verification topics.", type: "Technical", pages: "14 pages", url: "/papers/technical.pdf" },
    { id: 3, title: "Whitepaper", description: "Programme overview and research direction.", type: "Whitepaper", pages: "37 pages", url: "/papers/whitepaper.pdf" },
  ];

  return (
    <Layout>
      <Seo
        title="Research Notes and Reference Papers | SentinelOps"
        description="SentinelOps research notes on formal specifications, verification, runtime enforcement, evidence records, and open-source implementations."
        path="/blog"
      />

      <section className="border-b border-[hsl(var(--rule))] bg-[hsl(var(--paper-bright))]">
        <div className="container-paper py-16 sm:py-20 lg:py-24">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-14 items-start">
            <div className="lg:col-span-3 pt-2">
              <div className="hero-kicker">Journal</div>
              <div className="eyebrow mt-4">Research & writing</div>
            </div>
            <div className="lg:col-span-9 max-w-4xl">
              <h1 className="mb-7">Research notes.</h1>
              <p className="font-serif text-2xl leading-relaxed text-foreground/[0.86] max-w-3xl">
                Essays, technical notes, and reference documents examine how formal properties
                relate to actual agent execution. Each text has its own evidentiary scope.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="container-paper py-16">
        <section className="mb-24">
          <header className="flex items-baseline gap-4 mb-6 pb-4 border-b border-foreground">
            <div className="eyebrow">§1</div>
            <h2 className="text-2xl">Articles and notes</h2>
          </header>
          <ol className="divide-y divide-[hsl(var(--rule))] border-b border-[hsl(var(--rule))]">
            {blogPosts.map((post) => (
              <li key={post.id}>
                <Link
                  to={`/blog/${post.slug}`}
                  className="grid md:grid-cols-12 gap-4 md:gap-8 py-8 group hover:bg-muted/30 -mx-4 px-4 transition-colors"
                >
                  <div className="md:col-span-2">
                    <time className="eyebrow text-foreground block">
                      {new Date(post.date).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric", timeZone: "UTC" })}
                    </time>
                    <span className="eyebrow text-muted-foreground mt-1 block">{post.category}</span>
                  </div>
                  <div className="md:col-span-8">
                    <h3 className="text-2xl mb-2 group-hover:underline underline-offset-4 decoration-[hsl(var(--rule-strong))]">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">{post.description}</p>
                  </div>
                  <div className="md:col-span-2 md:text-right">
                    <span className="eyebrow text-muted-foreground">{post.readTime}</span>
                    <div className="nav-link mt-1">Read ↗</div>
                  </div>
                </Link>
              </li>
            ))}
          </ol>
        </section>

        <section className="mb-24">
          <header className="flex items-baseline gap-4 mb-8 pb-4 border-b border-foreground">
            <div className="eyebrow">§2</div>
            <h2 className="text-2xl">Reference documents</h2>
          </header>
          <ol className="divide-y divide-[hsl(var(--rule))] border-b border-[hsl(var(--rule))]">
            {researchPapers.map((paper, i) => (
              <li key={paper.id} className="grid md:grid-cols-12 gap-4 md:gap-8 py-8">
                <div className="md:col-span-2 display-serif italic text-3xl">{`§${i + 1}`}</div>
                <div className="md:col-span-7">
                  <div className="eyebrow text-muted-foreground mb-1">{paper.type} · {paper.pages}</div>
                  <h3 className="text-xl mb-2">{paper.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{paper.description}</p>
                </div>
                <div className="md:col-span-3 md:text-right flex md:block gap-4">
                  <Link
                    to={`/papers/view?file=${paper.url}&title=${encodeURIComponent(paper.title)}`}
                    className="block text-foreground underline underline-offset-4 decoration-[hsl(var(--rule-strong))] hover:decoration-foreground"
                  >
                    View ↗
                  </Link>
                  <a
                    href={paper.url}
                    download
                    className="block text-muted-foreground underline underline-offset-4 decoration-[hsl(var(--rule))] hover:text-foreground"
                  >
                    Download (PDF)
                  </a>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="border-t border-foreground pt-10">
          <div className="grid md:grid-cols-12 gap-8 items-end max-w-4xl">
            <div className="md:col-span-6">
              <div className="eyebrow mb-3">Correspondence</div>
              <h2 className="mb-2">Receive new writing.</h2>
              <p className="text-muted-foreground">Occasional research dispatches for technical readers.</p>
            </div>
            <form onSubmit={handleSubscribe} className="md:col-span-6 flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="you@institution.edu"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 h-12 rounded-none border-foreground bg-background"
              />
              <Button type="submit" size="lg" disabled={isSubmitting} className="rounded-none">
                {isSubmitting ? "…" : "Subscribe"}
              </Button>
            </form>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Blog;
