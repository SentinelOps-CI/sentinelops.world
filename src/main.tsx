import { createRoot, hydrateRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import App from './App.tsx'
import './index.css'
import './design.css'

const root = document.getElementById("root");
if (!root) throw new Error("Missing application root");

const app = <HelmetProvider><App /></HelmetProvider>;
if (root.dataset.prerendered === "true") {
  hydrateRoot(root, app);
} else {
  // The static fallback is deliberately noindexed before JavaScript loads.
  // Helmet installs the route-specific noindex tag, avoiding duplicates.
  document.querySelector('meta[data-spa-fallback-noindex="true"]')?.remove();
  createRoot(root).render(app);
}
