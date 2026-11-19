/**
 * Release gate for every public page, internal link, published asset,
 * client-only route, and the 404 page.
 *
 * Runs against the locally served production output. External services,
 * live form submissions, and DNS remain independent operational checks.
 */
import assert from "node:assert/strict";
import { mkdir, writeFile } from "node:fs/promises";
import { chromium } from "@playwright/test";
import { indexedPapers, indexedRoutes, siteOrigin } from "./site-routes.mjs";

const origin = process.env.SMOKE_ORIGIN ?? "http://127.0.0.1:4173";
const clients = ["/contact/success", "/subscribe/success", "/papers/view"];
const resources = [
  "/sitemap.xml", "/robots.txt", "/feed.xml", "/research-index.json",
  "/llms.txt", ...indexedPapers,
];
const knownRoutes = new Set([...indexedRoutes, ...clients]);
const failures = [], results = [], destinations = new Set();
const browser = await chromium.launch({ channel: "chrome", headless: true });

async function check(name, task) {
  try {
    const detail = await task();
    results.push({ name, passed: true, ...detail });
    console.log("AUDIT PASS " + name);
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    failures.push({ name, message });
    results.push({ name, passed: false, message });
    console.error("AUDIT FAIL " + name + ": " + message);
  }
}

try {
  assert.equal(indexedRoutes.length, 18, "Unexpected published-route inventory");
  for (const width of [1440, 320]) {
    const context = await browser.newContext({
      viewport: { width, height: 900 }, reducedMotion: "reduce",
    });
    try {
      for (const path of indexedRoutes) {
        const page = await context.newPage();
        const runtimeErrors = [];
        page.on("pageerror", (error) => runtimeErrors.push(error.message));
        page.on("console", (message) => {
          if (message.type() === "error" &&
            /hydrat|did not match|server html|react error/i.test(message.text())) {
            runtimeErrors.push(message.text());
          }
        });
        try {
          await check(width + "px " + path, async () => {
            const response = await page.goto(origin + path, {
              waitUntil: "load", timeout: 30_000,
            });
            assert.equal(response?.status(), 200, "Expected HTTP 200");
            assert.match(response?.headers()["content-type"] ?? "", /text\/html/i);
            assert.equal(await page.locator("main#main-content").count(), 1);
            assert.equal(await page.locator("main h1").count(), 1);
            assert.equal(await page.locator('link[rel="canonical"]').count(), 1);
            assert.equal(
              await page.locator('link[rel="canonical"]').getAttribute("href"),
              siteOrigin + path, "Canonical URL mismatch",
            );
            assert.equal(await page.locator('meta[name="robots"][content*="noindex"]').count(), 0);
            assert.match(await page.title(), /SentinelOps/);
            const description = await page.locator('meta[name="description"]').getAttribute("content");
            assert.ok(description?.trim().length > 30, "Missing metadata description");

            const inspection = await page.evaluate(() => ({
              documentWidth: document.documentElement.scrollWidth,
              bodyWidth: document.body.scrollWidth,
              viewportWidth: window.innerWidth,
              overflowingElements: [...document.querySelectorAll("main *")]
                .map((element) => {
                  const r = element.getBoundingClientRect();
                  return {
                    tag: element.tagName.toLowerCase(),
                    className: typeof element.className === "string" ? element.className.slice(0, 100) : "",
                    left: Math.round(r.left), right: Math.round(r.right),
                    width: Math.round(r.width),
                    text: (element.textContent ?? "").trim().slice(0, 90),
                  };
                })
                .filter((element) => element.right > window.innerWidth + 2 || element.left < -2)
                .sort((a, b) => b.right - a.right)
                .slice(0, 8),
              scrollableTables: [...document.querySelectorAll(".article-paper .overflow-x-auto")]
                .map((region) => ({
                  clientWidth: region.clientWidth,
                  scrollWidth: region.scrollWidth,
                  tabIndex: region.tabIndex,
                  role: region.getAttribute("role"),
                  label: region.getAttribute("aria-label"),
                })),
              brokenImages: [...document.images]
                .filter((img) => !img.complete || img.naturalWidth === 0)
                .map((img) => img.getAttribute("src")),
              links: [...document.querySelectorAll("main a[href], header a[href], footer a[href]")]
                .map((link) => ({
                  href: link.getAttribute("href"),
                  target: link.getAttribute("target"),
                  rel: link.getAttribute("rel") ?? "",
                })),
            }));
            assert.ok(inspection.documentWidth <= width + 1, "Document horizontal overflow: " + JSON.stringify({ doc: inspection.documentWidth, body: inspection.bodyWidth, offenders: inspection.overflowingElements }));
            assert.ok(inspection.bodyWidth <= width + 1, "Body horizontal overflow");
            assert.deepEqual(inspection.brokenImages, [], "Broken image");
            if (width === 320 && path.startsWith("/blog/")) {
              assert.equal(inspection.scrollableTables.length, 1, "Research table container missing");
              for (const table of inspection.scrollableTables) {
                assert.ok(table.scrollWidth > table.clientWidth, "Research table must scroll within page");
                assert.equal(table.tabIndex, 0, "Research table needs keyboard focus");
                assert.equal(table.role, "region");
                assert.ok(table.label?.trim(), "Scrollable region needs an accessible name");
              }
            }
            assert.deepEqual(runtimeErrors, [], "React hydration/runtime error");

            for (const link of inspection.links) {
              if (!link.href) continue;
              const target = new URL(link.href, origin + path);
              assert.notEqual(target.protocol, "javascript:", "Invalid JavaScript link");
              if (target.origin !== origin) continue;
              if (target.pathname === path && target.hash && target.hash !== "#") {
                const id = decodeURIComponent(target.hash.substring(1));
                assert.ok(await page.evaluate((value) =>
                  document.getElementById(value) !== null, id), "Broken fragment " + link.href);
              }
              destinations.add(target.pathname);
            }
            return { path, width, links: inspection.links.length };
          });
        } finally {
          await page.close();
        }
      }
    } finally {
      await context.close();
    }
  }

  const context = await browser.newContext({ viewport: { width: 1280, height: 800 } });
  try {
    for (const path of clients) {
      const page = await context.newPage();
      try {
        await check("Client-only " + path, async () => {
          const response = await page.goto(origin + path, { waitUntil: "load" });
          assert.equal(response?.status(), 200);
          assert.equal(await page.locator('meta[name="robots"][content*="noindex"]').count(), 1);
          assert.equal(await page.locator("main h1").count(), 1);
          const heading = await page.locator("main h1").innerText();
          if (path === "/contact/success") assert.doesNotMatch(heading, /message received/i);
          if (path === "/subscribe/success") assert.doesNotMatch(heading, /you are subscribed/i);
          return { path };
        });
      } finally {
        await page.close();
      }
    }

    await check("Approved PDF viewer", async () => {
      const page = await context.newPage();
      try {
        const url = origin + "/papers/view?file=%2Fpapers%2Farchitecture.pdf&title=System%20Architecture";
        const response = await page.goto(url, { waitUntil: "load" });
        assert.equal(response?.status(), 200);
        await page.locator('iframe[title="System Architecture"]').waitFor({ timeout: 12_000 });
        return { path: "/papers/architecture.pdf" };
      } finally { await page.close(); }
    });

    await check("PDF viewer blocks external files and forged titles", async () => {
      const page = await context.newPage();
      const suspicious = [];
      page.on("request", (request) => {
        if (request.url().startsWith("https://invalid.example.test/")) suspicious.push(request.url());
      });
      try {
        const url = origin + "/papers/view?file=https%3A%2F%2Finvalid.example.test%2Ftracking.pdf&title=Forged%20Verified%20Result";
        await page.goto(url, { waitUntil: "load" });
        await page.locator("main h1").waitFor();
        assert.equal(await page.locator("main h1").innerText(), "Document unavailable");
        assert.equal(await page.locator("iframe").count(), 0);
        assert.deepEqual(suspicious, []);
        return { blocked: true };
      } finally { await page.close(); }
    });

    await check("Unknown page returns HTTP 404", async () => {
      const page = await context.newPage();
      try {
        const response = await page.goto(origin + "/__audit_unknown_route__", { waitUntil: "load" });
        assert.equal(response?.status(), 404);
        assert.equal(await page.locator('meta[name="robots"][content*="noindex"]').count(), 1);
        return { status: 404 };
      } finally { await page.close(); }
    });

    for (const path of resources) {
      await check("Resource " + path, async () => {
        const response = await context.request.get(origin + path);
        assert.equal(response.status(), 200);
        const body = await response.body();
        assert.ok(body.length > 10, "Empty resource");
        if (path.endsWith(".pdf")) {
          assert.equal(body.subarray(0, 5).toString("ascii"), "%PDF-");
          assert.match(response.headers()["content-type"] ?? "", /application\/pdf/i);
        }
        return { path, bytes: body.length };
      });
    }

    for (const path of [...destinations].sort()) {
      await check("Internal link " + path, async () => {
        const response = await context.request.get(origin + path);
        assert.equal(response.status(), 200, "Broken internal destination");
        assert.ok(
          knownRoutes.has(path) || resources.includes(path) || path.startsWith("/assets/"),
          "Missing route inventory entry " + path,
        );
        return { path };
      });
    }
  } finally { await context.close(); }
} finally {
  await browser.close();
}

await mkdir("artifacts/browser-smoke", { recursive: true });
await writeFile("artifacts/browser-smoke/all-pages-audit.json", JSON.stringify({
  auditedPublicRoutes: indexedRoutes.length,
  desktopAndMobile: [1440, 320],
  clientOnlyRoutes: clients,
  resources,
  checks: results.length,
  failures,
  results,
}, null, 2) + "\n");

console.log("Complete site audit: " + results.length + " checks; failures=" + failures.length);
if (failures.length) process.exitCode = 1;
