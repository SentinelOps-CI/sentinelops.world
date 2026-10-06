
import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import { Link } from "react-router-dom";

const Sitemap = () => {
  const sitePages = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Mission", path: "/mission" },
    { name: "Documentation", path: "/docs" },
    { name: "Blog", path: "/blog" },
    { name: "Status", path: "/status" },
    { name: "Contact", path: "/contact" },
    { name: "Contact Success", path: "/contact/success" },
    { name: "Careers", path: "/careers" },
    { name: "Press", path: "/press" },
    { name: "Terms of Service", path: "/legal/terms" },
    { name: "Privacy Policy", path: "/legal/privacy" },
    { name: "Sitemap", path: "/sitemap" },
    { name: "Subscribe Success", path: "/subscribe/success" }
  ];

  const externalLinks = [
    { name: "GitHub Organization", url: "https://github.com/orgs/SentinelOps-CI/repositories" },
    { name: "Provability Fabric", url: "https://github.com/SentinelOps-CI/provability-fabric" },
    { name: "Spec-to-Proof", url: "https://github.com/SentinelOps-CI/spec-to-proof" },
    { name: "SpecCursor", url: "https://github.com/SentinelOps-CI/speccursor" },
    { name: "PF Testbed", url: "https://github.com/SentinelOps-CI/pf-testbed" },
    { name: "Model Asset Guard", url: "https://github.com/SentinelOps-CI/model-asset-guard" },
    { name: "Dataset Safety Specs", url: "https://github.com/SentinelOps-CI/dataset-safety-specs" },
    { name: "Runtime Safety Kernels", url: "https://github.com/SentinelOps-CI/runtime-safety-kernels" },
    { name: "Post-Incident Proofs", url: "https://github.com/SentinelOps-CI/post-incident-proofs" },
    { name: "Security Envelopes", url: "https://github.com/SentinelOps-CI/security-envelopes" },
    { name: "Lean Toolchain", url: "https://github.com/SentinelOps-CI/lean-toolchain" },
    { name: "SpecSync", url: "https://github.com/SentinelOps-CI/SpecSync" }
  ];

  return (
    <Layout>
      <Seo
        title="Sitemap · All Pages on SentinelOps"
        description="Browse the public SentinelOps site across core pages, research writing, and reference materials."
        path="/sitemap"
      />
      <article className="container-article article-paper">
        <header className="mb-12 pb-8 border-b border-border">
          <div className="eyebrow mb-4">Index · Site map</div>
          <h1 className="font-light tracking-tight text-4xl md:text-5xl leading-[1.05]">Sitemap</h1>
          <p className="mt-6 text-lg italic text-foreground/80">
            Complete index of pages and external resources published under the SentinelOps programme.
          </p>
        </header>

        <section className="mb-16">
          <div className="eyebrow mb-6">§ I · Pages</div>
          <dl className="divide-y divide-border border-y border-border">
            {sitePages.map((p, i) => (
              <div key={i} className="grid grid-cols-12 gap-4 py-3 items-baseline">
                <dt className="col-span-7 font-serif text-base">
                  <Link to={p.path}>{p.name}</Link>
                </dt>
                <dd className="col-span-5 text-right mono text-xs text-muted-foreground">{p.path}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="mb-16">
          <div className="eyebrow mb-6">§ II · External Repositories</div>
          <dl className="divide-y divide-border border-y border-border">
            {externalLinks.map((l, i) => (
              <div key={i} className="grid grid-cols-12 gap-4 py-3 items-baseline">
                <dt className="col-span-9 font-serif text-base">
                  <a href={l.url} target="_blank" rel="noopener noreferrer">{l.name} ↗</a>
                </dt>
                <dd className="col-span-3 text-right eyebrow">GitHub</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="mb-16">
          <div className="eyebrow mb-4">§ III · Machine-readable</div>
          <p>
            Machine-readable index is published at <a href="/sitemap.xml">/sitemap.xml</a> for
            search-engine and crawler use.
          </p>
        </section>
      </article>
    </Layout>
  );
};

export default Sitemap;
