/**
 * Minimal localhost-only server for testing Vercel's clean-URL dist layout.
 * This is a test fixture, never a production server.
 *
 * Usage: PORT=4173 node scripts/serve-dist.mjs
 */
import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { extname, resolve, sep } from "node:path";
import { indexedRoutes } from "./site-routes.mjs";

const root = resolve("dist");
const port = Number(process.env.PORT || 4173);
const indexed = new Set(indexedRoutes);
const fallback = new Set(["/contact/success", "/subscribe/success", "/papers/view"]);
const mime = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".pdf": "application/pdf",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
};
if (!Number.isInteger(port) || port < 1 || port > 65535) {
  throw new Error("Invalid test server PORT");
}

const server = createServer(async (request, response) => {
  if (request.method !== "GET" && request.method !== "HEAD") {
    response.writeHead(405, { Allow: "GET, HEAD" }).end();
    return;
  }
  try {
    const pathname = decodeURIComponent(new URL(request.url ?? "/", "http://localhost").pathname);
    if (pathname.includes("\0") || pathname.includes("\\") || pathname.includes("..")) {
      response.writeHead(400).end("Invalid path");
      return;
    }
    let relative;
    let status = 200;
    if (pathname === "/") relative = "index.html";
    else if (indexed.has(pathname)) relative = pathname.slice(1) + ".html";
    else if (fallback.has(pathname)) relative = "spa-fallback.html";
    else if (extname(pathname)) relative = pathname.slice(1);
    else { relative = "404.html"; status = 404; }

    const resolved = resolve(root, relative);
    if (resolved !== root && !resolved.startsWith(root + sep)) {
      response.writeHead(400).end("Invalid path");
      return;
    }

    try {
      const info = await stat(resolved);
      if (!info.isFile()) throw new Error("Not a file");
    } catch {
      relative = "404.html";
      status = 404;
    }
    const file = resolve(root, relative);
    const data = await readFile(file);
    response.writeHead(status, {
      "Content-Type": mime[extname(file)] || "application/octet-stream",
      "Content-Length": data.length,
      "Cache-Control": "no-store",
      "X-Content-Type-Options": "nosniff",
    });
    response.end(request.method === "HEAD" ? undefined : data);
  } catch (error) {
    console.error("Test HTTP error:", error);
    response.writeHead(500).end("Test server failure");
  }
});
server.listen(port, "127.0.0.1", () => {
  console.log("Local dist smoke server listening on 127.0.0.1:" + port);
});
