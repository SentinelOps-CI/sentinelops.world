import { Link, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetHeader } from "@/components/ui/sheet";
import { useState } from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const GITHUB_ORG = "https://github.com/orgs/SentinelOps-CI/repositories";

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const isActive = (path: string) =>
    path === "/" ? location.pathname === "/" : location.pathname.startsWith(path);

  const navLinks = [
    { to: "/products", label: "Products" },
    { to: "/mission", label: "Mission" },
    { to: "/docs", label: "Docs" },
    { to: "/blog", label: "Writing" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-[70] bg-foreground text-background px-4 py-2"
      >
        Skip to main content
      </a>

      <div className="border-b border-foreground/[0.15] bg-[hsl(var(--navy))] text-[hsl(var(--hero-foreground))]">
        <div className="container-paper py-2 flex items-center justify-between gap-4">
          <span className="mono text-[0.62rem] uppercase tracking-[0.14em] text-white/[0.65]">
            SentinelOps research programme
          </span>
          <span className="hidden sm:block mono text-[0.62rem] uppercase tracking-[0.14em] text-white/50">
            Formal methods · Runtime verification · Open source
          </span>
        </div>
      </div>

      <header className="border-b border-[hsl(var(--rule))] bg-background/95 sticky top-0 z-40 backdrop-blur-sm">
        <nav className="container-paper py-4" role="navigation" aria-label="Main navigation">
          <div className="flex items-center justify-between gap-8">
            <Link to="/" className="flex items-center gap-3 min-w-0 group" aria-label="SentinelOps home">
              <span className="w-9 h-9 bg-white border border-foreground/10 flex items-center justify-center shrink-0">
                <img
                  src="/brand/sentinelops-mark.png"
                  alt=""
                  width="30"
                  height="30"
                  className="masthead-mark"
                />
              </span>
              <span className="min-w-0 leading-none">
                <span className="block font-sans text-[0.9rem] sm:text-[0.98rem] font-semibold tracking-[0.15em] uppercase">
                  SentinelOps
                </span>
                <span className="hidden sm:block mt-1 mono text-[0.58rem] tracking-[0.11em] uppercase text-muted-foreground">
                  Provability Fabric
                </span>
              </span>
            </Link>

            <div className="hidden md:flex items-center gap-7 lg:gap-9">
              {navLinks.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  aria-current={isActive(l.to) ? "page" : undefined}
                  className={`nav-link relative py-1 ${
                    isActive(l.to)
                      ? "text-foreground after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-px after:bg-primary"
                      : ""
                  }`}
                >
                  {l.label}
                </Link>
              ))}
              <a
                href={GITHUB_ORG}
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link border-l border-[hsl(var(--rule))] pl-7 hover:text-primary"
              >
                GitHub ↗
              </a>
            </div>

            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden min-h-10 min-w-10 border border-[hsl(var(--rule))]"
                  aria-label="Open menu"
                >
                  <Menu className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-72 sm:w-80 bg-background border-l border-[hsl(var(--rule))]">
                <SheetHeader>
                  <SheetTitle className="text-left eyebrow">Navigation</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col mt-8 border-t border-[hsl(var(--rule))]">
                  {navLinks.map((l) => (
                    <Link
                      key={l.to}
                      to={l.to}
                      onClick={() => setOpen(false)}
                      className={`py-5 border-b border-[hsl(var(--rule))] nav-link ${
                        isActive(l.to) ? "text-primary" : ""
                      }`}
                    >
                      {l.label}
                    </Link>
                  ))}
                  <a
                    href={GITHUB_ORG}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setOpen(false)}
                    className="py-5 nav-link"
                  >
                    GitHub ↗
                  </a>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </header>

      <main id="main-content" role="main">
        {children}
      </main>

      <footer className="mt-24 bg-[hsl(var(--navy))] text-[hsl(var(--hero-foreground))]" role="contentinfo">
        <div className="container-paper py-14 sm:py-16">
          <div className="grid md:grid-cols-12 gap-10 md:gap-8">
            <div className="md:col-span-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 bg-white flex items-center justify-center">
                  <img src="/brand/sentinelops-mark.png" alt="" width="30" height="30" />
                </div>
                <div>
                  <div className="font-sans font-semibold tracking-[0.14em] uppercase text-sm">SentinelOps</div>
                  <div className="mono text-[0.58rem] tracking-[0.12em] uppercase text-white/50 mt-1">Provability Fabric</div>
                </div>
              </div>
              <p className="font-serif text-lg leading-relaxed text-white/[0.78] max-w-xl">
                A research programme on provable safety for AI agents — specifications,
                machine-checked proofs, and runtime enforcement.
              </p>
              <p className="mono text-[0.62rem] uppercase tracking-[0.12em] text-white/[0.45] mt-8">
                © 2026 SentinelOps · All rights reserved
              </p>
            </div>

            <div className="md:col-span-3">
              <div className="mono text-[0.62rem] uppercase tracking-[0.12em] text-white/[0.45] mb-4">Sections</div>
              <ul className="space-y-2.5 text-sm">
                {navLinks.map((l) => (
                  <li key={l.to}>
                    <Link to={l.to} className="text-white/75 hover:text-white transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-3">
              <div className="mono text-[0.62rem] uppercase tracking-[0.12em] text-white/[0.45] mb-4">Colophon</div>
              <ul className="space-y-2.5 text-sm text-white/[0.65]">
                <li>Newsreader · IBM Plex Sans · IBM Plex Mono</li>
                <li>
                  <Link to="/legal/terms" className="hover:text-white">Terms</Link>
                  <span className="mx-2 text-white/25">/</span>
                  <Link to="/legal/privacy" className="hover:text-white">Privacy</Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-white">Contact</Link>
                  <span className="mx-2 text-white/25">/</span>
                  <Link to="/status" className="hover:text-white">Status</Link>
                  <span className="mx-2 text-white/25">/</span>
                  <Link to="/sitemap" className="hover:text-white">Sitemap</Link>
                </li>
                <li>
                  <a href={GITHUB_ORG} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                    GitHub ↗
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-14 pt-5 border-t border-white/[0.15] flex flex-wrap gap-4 items-center justify-between">
            <span className="mono text-[0.58rem] uppercase tracking-[0.12em] text-white/[0.38]">sentinelops.world</span>
            <span className="mono text-[0.58rem] uppercase tracking-[0.12em] text-white/[0.38]">Open research infrastructure</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
