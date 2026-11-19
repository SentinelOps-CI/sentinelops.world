import { Link, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetHeader } from "@/components/ui/sheet";
import { useState } from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const GITHUB_ORG = "https://github.com/orgs/SentinelOps-CI/repositories";

const navLinks = [
  { to: "/blog", label: "Research" },
  { to: "/products", label: "Systems" },
  { to: "/mission", label: "Method" },
  { to: "/docs", label: "Docs" },
] as const;

/**
 * Shared institutional navigation and footer.
 * The route structure, research content, and external source destinations remain unchanged.
 */
const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (path: string) =>
    location.pathname === path || location.pathname.startsWith(path + "/");

  return (
    <div className="site-shell min-h-screen bg-background text-foreground">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <div className="institutional-strip">
        <div className="container-paper institutional-strip__inner">
          <span>SentinelOps / Formal methods and agent execution</span>
          <span className="institutional-strip__right">Open research / Versioned sources</span>
        </div>
      </div>

      <header className="site-header">
        <div className="container-paper site-header__inner">
          <Link to="/" className="site-brand" aria-label="SentinelOps — home">
            <span className="site-brand__mark" aria-hidden="true">
              <img
                src="/brand/sentinelops-mark.png"
                alt=""
                width="30"
                height="30"
              />
            </span>
            <span className="site-brand__text">
              <span className="site-brand__name">SentinelOps</span>
              <span className="site-brand__subline">Provability Fabric</span>
            </span>
          </Link>

          <nav className="site-nav" aria-label="Main navigation">
            {navLinks.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                aria-current={isActive(item.to) ? "page" : undefined}
                className={["site-nav__link", isActive(item.to) ? "site-nav__link--active" : ""].join(" ")}
              >
                {item.label}
              </Link>
            ))}
            <a
              className="site-nav__external"
              href={GITHUB_ORG}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub <span aria-hidden="true">↗</span>
            </a>
          </nav>

          <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
            <SheetTrigger asChild>
              <button
                type="button"
                className="site-menu-trigger"
                aria-label="Open navigation"
                aria-expanded={menuOpen}
              >
                <Menu aria-hidden="true" size={20} />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="site-menu-panel w-72 sm:w-80">
              <SheetHeader>
                <SheetTitle className="site-menu-title">Navigation</SheetTitle>
              </SheetHeader>
              <nav aria-label="Mobile navigation" className="site-mobile-nav">
                {navLinks.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => setMenuOpen(false)}
                    aria-current={isActive(item.to) ? "page" : undefined}
                    className="site-mobile-nav__link"
                  >
                    {item.label}
                  </Link>
                ))}
                <a
                  href={GITHUB_ORG}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMenuOpen(false)}
                  className="site-mobile-nav__link"
                >
                  GitHub <span aria-hidden="true">↗</span>
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <main id="main-content" className="site-main">
        {children}
      </main>

      <footer className="site-footer" role="contentinfo">
        <div className="container-paper">
          <div className="site-footer__main">
            <div className="site-footer__identity">
              <Link to="/" className="site-footer__name">SentinelOps</Link>
              <p>
                Open research on formal specifications, runtime mediation, and inspectable
                evidence for autonomous software.
              </p>
              <a href={GITHUB_ORG} target="_blank" rel="noopener noreferrer" className="site-footer__source">
                Inspect the source <span aria-hidden="true">↗</span>
              </a>
            </div>
            <nav aria-label="Footer navigation" className="site-footer__links">
              <div className="site-footer__links-title">Explore</div>
              {navLinks.map((item) => (
                <Link to={item.to} key={item.to}>{item.label}</Link>
              ))}
            </nav>
            <nav aria-label="Policies and contact" className="site-footer__links">
              <div className="site-footer__links-title">Reference</div>
              <Link to="/contact">Contact</Link>
              <Link to="/status">Status</Link>
              <Link to="/sitemap">Sitemap</Link>
              <Link to="/legal/privacy">Privacy</Link>
              <Link to="/legal/terms">Terms</Link>
            </nav>
          </div>

          <div className="site-footer__baseline">
            <span>© 2026 SentinelOps · All rights reserved</span>
            <span>sentinelops.world</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
