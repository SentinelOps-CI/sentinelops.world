/**
 * Chromium smoke test for the production dist, served with canonical clean URLs.
 * Reports hydration errors, broken navigation, font regressions, mobile overflow,
 * and deep-link failures. Runs only against the localhost test server.
 */
import assert from "node:assert/strict";
import { mkdir } from "node:fs/promises";
import { chromium } from "@playwright/test";

const origin = process.env.SMOKE_ORIGIN ?? "http://127.0.0.1:4173";
const artifacts = "artifacts/browser-smoke";
await mkdir(artifacts, { recursive: true });

const browser = await chromium.launch({ headless: true });
const failures = [];
let checks = 0;

async function check(name, operation) {
  try {
    await operation();
    checks += 1;
    console.log("PASS " + name);
  } catch (error) {
    failures.push({ name, error: String(error) });
    console.error("FAIL " + name + ": " + String(error));
  }
}

function watchHydrationErrors(page) {
  const errors = [];
  page.on("pageerror", (error) => errors.push(String(error)));
  page.on("console", (message) => {
    if (message.type() === "error" &&
        /hydrat|text content does not match|server html|did not match|react error/i.test(message.text())) {
      errors.push(message.text());
    }
  });
  return errors;
}

async function assertTypography(page) {
  const samples = await page.evaluate(() =>
    ["body", "h1", ".site-brand__name", ".eyebrow", "main p", ".site-footer__name"]
      .map((selector) => {
        const node = document.querySelector(selector);
        if (!node) return null;
        const style = getComputedStyle(node);
        return {
          selector,
          family: style.fontFamily,
          weight: style.fontWeight,
          style: style.fontStyle,
        };
      }).filter(Boolean),
  );
  assert.ok(samples.length >= 5, "Typography sample missing");
  for (const sample of samples) {
    assert.match(sample.family, /IBM Plex Sans/i, sample.selector + " uses another font");
    assert.equal(sample.weight, "400", sample.selector + " has non-regular weight");
    assert.equal(sample.style, "normal", sample.selector + " is italic");
  }
}

async function assertViewport(page) {
  const size = await page.evaluate(() => ({
    viewport: window.innerWidth,
    document: document.documentElement.scrollWidth,
    body: document.body.scrollWidth,
  }));
  assert.ok(
    size.document <= size.viewport + 1 && size.body <= size.viewport + 1,
    "Horizontal overflow: " + JSON.stringify(size),
  );
}

try {
  const desktop = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    reducedMotion: "reduce",
  });
  const page = await desktop.newPage();
  const desktopErrors = watchHydrationErrors(page);

  await check("Desktop homepage loads SSR HTML and hydrates", async () => {
    const response = await page.goto(origin + "/", { waitUntil: "load", timeout: 30000 });
    assert.equal(response?.status(), 200);
    await page.locator("main h1").waitFor();
    assert.equal(await page.locator("main h1").count(), 1);
    assert.match(await page.locator("main h1").innerText(), /Verification at the point of execution/);
    assert.equal(await page.locator("link[rel=canonical]").count(), 1);
    await assertTypography(page);
    await assertViewport(page);
    await page.screenshot({ path: artifacts + "/home-desktop.png", fullPage: true });
  });

  await check("Client-side research navigation survives hydration", async () => {
    await page.getByRole("navigation", { name: "Main navigation" })
      .getByRole("link", { name: "Research" }).click();
    await page.waitForURL("**/blog");
    assert.match(await page.locator("main h1").innerText(), /Writing/);
    await page.locator('main a[href="/blog/current-initiatives"]').first().click();
    await page.waitForURL("**/blog/current-initiatives");
    assert.match(await page.locator("main h1").innerText(), /Current Technical Program/);
    await assertTypography(page);
    await page.screenshot({ path: artifacts + "/research-article-desktop.png", fullPage: true });
  });

  await check("Deep-linked article renders and hydrates without navigation", async () => {
    const response = await page.goto(origin + "/blog/verifiable-ai-ecosystem", { waitUntil: "load" });
    assert.equal(response?.status(), 200);
    assert.match(await page.locator("main h1").innerText(), /Verifiable AI Ecosystem/);
    assert.equal(await page.locator('script[type="application/ld+json"]').count() >= 2, true);
  });

  await check("Unknown URL returns native 404", async () => {
    const response = await page.goto(origin + "/__sentinelops_unknown_test__", { waitUntil: "load" });
    assert.equal(response?.status(), 404);
    assert.match(await page.locator("main h1").innerText(), /Page Unavailable/);
  });

  await check("Desktop has no hydration errors", async () => {
    assert.deepEqual(desktopErrors, []);
  });
  await desktop.close();

  for (const width of [768, 375, 320]) {
    const context = await browser.newContext({
      viewport: { width, height: 820 },
      isMobile: true,
      deviceScaleFactor: 1,
      reducedMotion: "reduce",
    });
    const mobilePage = await context.newPage();
    const mobileErrors = watchHydrationErrors(mobilePage);
    await check("Responsive homepage at " + width + "px", async () => {
      const response = await mobilePage.goto(origin + "/", { waitUntil: "load" });
      assert.equal(response?.status(), 200);
      await mobilePage.locator("main h1").waitFor();
      await assertTypography(mobilePage);
      await assertViewport(mobilePage);
      if (width === 375) {
        await mobilePage.screenshot({ path: artifacts + "/home-mobile.png", fullPage: true });
      }
    });

    if (width === 375) {
      await check("Mobile drawer navigation works", async () => {
        await mobilePage.getByRole("button", { name: "Open navigation" }).click();
        await mobilePage.getByRole("navigation", { name: "Mobile navigation" })
          .getByRole("link", { name: "Research" }).click();
        await mobilePage.waitForURL("**/blog");
        assert.match(await mobilePage.locator("main h1").innerText(), /Writing/);
      });
    }
    await check("No hydration errors at " + width + "px", async () => {
      assert.deepEqual(mobileErrors, []);
    });
    await context.close();
  }
} finally {
  await browser.close();
}

console.log("Browser smoke checks passed: " + checks + "; failed: " + failures.length);
if (failures.length) {
  for (const { name, error } of failures) console.error(name + ": " + error);
  process.exitCode = 1;
}
