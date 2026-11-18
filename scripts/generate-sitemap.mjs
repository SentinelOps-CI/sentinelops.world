import { writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { indexedRoutes, indexedPapers, siteOrigin } from "./site-routes.mjs";

// Do not synthesize lastmod: publication/update timestamps need a source of truth.
const paths = [...new Set([...indexedRoutes, ...indexedPapers])];
const urls = paths.map((path) => `  <url><loc>${siteOrigin}${path}</loc></url>`);
const xml = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...urls,
  '</urlset>',
  '',
].join('\n');

writeFileSync(resolve("public/sitemap.xml"), xml, "utf8");
console.log(`Wrote sitemap with ${paths.length} canonical URLs`);
