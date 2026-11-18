/**
 * Render public React routes to self-contained, crawlable HTML at build time.
 * Hydration preserves the existing client navigation and application behavior.
 * No network calls or speculative publication dates are introduced here.
 */
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { resolve, join } from "node:path";
import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server.js";
import helmetPackage from "react-helmet-async";
import { createServer } from "vite";
import { indexedRoutes } from "./site-routes.mjs";

const { HelmetProvider } = helmetPackage;
const dist = resolve("dist");
const template = await readFile(join(dist, "index.html"), "utf8");

// Static metadata from index.html remains as the SPA fallback. Each rendered
// route replaces that metadata with its own react-helmet-async values.
function stripFallbackMetadata(html) {
  return html
    .replace(/<title>[\s\S]*?<\/title>\s*/i, "")
    .replace(/<meta\s+name="description"[^>]*>\s*/gi, "")
    .replace(/<meta\s+property="og:(?:title|description|type|url|site_name)"[^>]*>\s*/gi, "");
}

function renderDocument(base, body, helmet) {
  const head = [
    helmet.title.toString(),
    helmet.meta.toString(),
    helmet.link.toString(),
    helmet.script.toString(),
  ].filter(Boolean).join("\n    ");
  const output = stripFallbackMetadata(base)
    .replace("</head>", `    ${head}\n  </head>`)
    .replace('<div id="root"></div>', `<div id="root" data-prerendered="true">${body}</div>`);

  if (!output.includes('data-prerendered="true"') || !output.includes('rel="canonical"')) {
    throw new Error("Prerender output lacks the React root or canonical metadata");
  }
  return output;
}

const vite = await createServer({
  server: { middlewareMode: true, hmr: false },
  appType: "custom",
  logLevel: "error",
});

try {
  const { AppRoutes } = await vite.ssrLoadModule("/src/App.tsx");
  if (typeof AppRoutes !== "function") throw new Error("AppRoutes export missing");

  for (const path of indexedRoutes) {
    const helmetContext = {};
    const app = React.createElement(
      HelmetProvider,
      { context: helmetContext },
      React.createElement(StaticRouter, { location: path }, React.createElement(AppRoutes)),
    );
    const body = renderToString(app);
    const helmet = helmetContext.helmet;
    if (!helmet) throw new Error(`Helmet metadata unavailable for ${path}`);
    const html = renderDocument(template, body, helmet);
    const destination = path === "/"
      ? join(dist, "index.html")
      : join(dist, `${path.slice(1)}.html`);
    await mkdir(resolve(destination, ".."), { recursive: true });
    await writeFile(destination, html, "utf8");
    console.log(`Prerendered ${path}`);
  }

  // Native Vercel 404: rendering the actual NotFound component preserves
  // semantic HTML and a correct error status (Vercel serves dist/404.html).
  // The route is not in the sitemap and has no canonical link.
  const unknownContext = {};
  const unknownApp = React.createElement(
    HelmetProvider,
    { context: unknownContext },
    React.createElement(StaticRouter, { location: "/__sentinelops_unknown_page__" },
      React.createElement(AppRoutes)),
  );
  const unknownBody = renderToString(unknownApp);
  const unknownHelmet = unknownContext.helmet;
  if (!unknownHelmet) throw new Error("404 Helmet metadata unavailable");
  const unknownHead = [
    unknownHelmet.title.toString(),
    unknownHelmet.meta.toString(),
    unknownHelmet.link.toString(),
    unknownHelmet.script.toString(),
  ].filter(Boolean).join("\n    ");
  const notFound = stripFallbackMetadata(template)
    .replace("</head>", `    ${unknownHead}\n  </head>`)
    .replace('<div id="root"></div>',
      `<div id="root" data-prerendered="true">${unknownBody}</div>`);
  if (!notFound.includes('name="robots" content="noindex,follow"')
      || !notFound.includes("Page Unavailable")) {
    throw new Error("404 output missing noindex or error markup");
  }
  await writeFile(join(dist, "404.html"), notFound, "utf8");

  // Unrecognized / non-indexable SPA routes retain interactive React routing,
  // while the fallback response explicitly opts out of search indexing.
  const fallback = template.replace(
    "</head>", '    <meta name="robots" content="noindex,follow" />\n  </head>',
  );
  await writeFile(join(dist, "spa-fallback.html"), fallback, "utf8");
} finally {
  await vite.close();
}
