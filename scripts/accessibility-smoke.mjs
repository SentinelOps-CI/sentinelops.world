/**
 * WCAG-oriented automated accessibility audit of the locally served production build.
 * This supplements manual accessibility reviews; automated rules do not certify WCAG.
 */
import { mkdir, writeFile } from "node:fs/promises";
import { chromium } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

const origin = process.env.SMOKE_ORIGIN ?? "http://127.0.0.1:4173";
const outputDir = "artifacts/browser-smoke";
await mkdir(outputDir, { recursive: true });
const targets = [
  { path: "/", width: 1440 },
  { path: "/blog/current-initiatives", width: 1440 },
  { path: "/contact", width: 1440 },
  { path: "/mission", width: 1440 },
  { path: "/products", width: 1440 },
  { path: "/docs", width: 1440 },
  { path: "/status", width: 1440 },
  { path: "/press", width: 1440 },
  { path: "/careers", width: 1440 },
  { path: "/", width: 320 },
  { path: "/products", width: 320 },
  { path: "/status", width: 320 },
];
const tags = ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"];

const browser = await chromium.launch({ channel: "chrome", headless: true });
const reports = [];
let serious = 0;
let moderate = 0;
try {
  for (const target of targets) {
    const context = await browser.newContext({
      viewport: { width: target.width, height: 820 },
      reducedMotion: "reduce",
    });
    const page = await context.newPage();
    try {
      const response = await page.goto(origin + target.path, {
        waitUntil: "load",
        timeout: 30000,
      });
      if (response?.status() !== 200) {
        throw new Error("Accessibility target unavailable: " + target.path);
      }

      const results = await new AxeBuilder({ page })
        .withTags(tags)
        .analyze();

      const violations = results.violations.map((violation) => ({
        id: violation.id,
        impact: violation.impact,
        description: violation.help,
        helpUrl: violation.helpUrl,
        affectedElements: violation.nodes.length,
        examples: violation.nodes.slice(0, 3).map((node) => ({
          target: node.target,
          summary: node.failureSummary,
        })),
      }));

      for (const violation of violations) {
        if (violation.impact === "critical" || violation.impact === "serious") serious += 1;
        else moderate += 1;
      }

      reports.push({
        url: target.path,
        viewport: target.width,
        passes: results.passes.length,
        incomplete: results.incomplete.length,
        violations,
      });
      console.log(
        "AXE " + target.width + "px " + target.path +
        ": violations=" + violations.length +
        " passes=" + results.passes.length +
        " needs-review=" + results.incomplete.length,
      );
      for (const violation of violations) {
        console.error(
          "  " + violation.impact + " " + violation.id + ": " + violation.description +
          " (" + violation.affectedElements + " elements)",
        );
      }
    } finally {
      await context.close();
    }
  }
} finally {
  await browser.close();
}

await writeFile(
  outputDir + "/accessibility-report.json",
  JSON.stringify({
    scope: "Automated WCAG 2.x A/AA tagged axe rules on production-build HTML",
    caveat: "Manual screen-reader, keyboard, and full WCAG conformance review is not replaced by automated scanning.",
    reports,
  }, null, 2) + "\n",
  "utf8",
);

console.log("Accessibility review: " + serious + " serious/critical, " + moderate + " remaining lower-impact rule findings");
if (serious) process.exitCode = 1;
