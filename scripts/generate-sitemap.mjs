import { writeFileSync } from "fs"
import { resolve } from "path"

const BASE_URL = "https://sentinelops.world"

const entries = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/products", changefreq: "weekly", priority: "0.9" },
  { path: "/mission", changefreq: "monthly", priority: "0.8" },
  { path: "/docs", changefreq: "weekly", priority: "0.9" },
  { path: "/blog", changefreq: "weekly", priority: "0.8" },
  { path: "/blog/verifiable-ai-ecosystem", changefreq: "monthly", priority: "0.7" },
  { path: "/blog/ecosystem-development-timeline", changefreq: "monthly", priority: "0.7" },
  { path: "/blog/mapping-the-space", changefreq: "monthly", priority: "0.7" },
  { path: "/blog/building-verification-infrastructure", changefreq: "monthly", priority: "0.7" },
  { path: "/blog/current-initiatives", changefreq: "monthly", priority: "0.7" },
  { path: "/blog/how-to-get-involved", changefreq: "monthly", priority: "0.7" },
  { path: "/careers", changefreq: "monthly", priority: "0.6" },
  { path: "/press", changefreq: "monthly", priority: "0.5" },
  { path: "/status", changefreq: "daily", priority: "0.4" },
  { path: "/contact", changefreq: "yearly", priority: "0.4" },
  { path: "/legal/terms", changefreq: "yearly", priority: "0.3" },
  { path: "/legal/privacy", changefreq: "yearly", priority: "0.3" },
  { path: "/sitemap", changefreq: "monthly", priority: "0.3" },
]

function generateSitemap(entries) {
  const urls = entries.map((e) =>
    [
      `  <url>`,
      `    <loc>${BASE_URL}${e.path}</loc>`,
      e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
      e.priority ? `    <priority>${e.priority}</priority>` : null,
      `  </url>`,
    ]
      .filter(Boolean)
      .join("\n"),
  )

  return [
    `<?xml version="1.0" encoding="UTF-8"?>`,
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
    ...urls,
    `</urlset>`,
  ].join("\n")
}

writeFileSync(resolve("public/sitemap.xml"), generateSitemap(entries))
console.log(`sitemap.xml written (${entries.length} entries)`)