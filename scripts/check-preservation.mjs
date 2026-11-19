/**
 * Preservation gate for the original SentinelOps website content.
 * Baseline Git blob hashes come from the production main tree as audited
 * on 19 November 2026. The six research articles, three PDF sources, the
 * brand mark, and the two legal pages remain byte-identical to main.
 *
 * Supporting-page checks test semantic inventory rather than exact wording,
 * allowing design improvements without silently discarding earlier content.
 */
import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";

const baselineBlobs = {
  "src/pages/blog/VerifiableAIEcosystem.tsx": "359192983815a30be2ca0b6d0b2db1eb9770e7cf",
  "src/pages/blog/EcosystemTimeline.tsx": "485e192e09cb3962b64f17fe8a6aeb85fe8e9c64",
  "src/pages/blog/MappingSpace.tsx": "83b0e2c4729098d0efeaa1400fd81e15f4da2d63",
  "src/pages/blog/BuildingInfrastructure.tsx": "6d0bdfc5f6710f15643b81ee796ae6eade4b1179",
  "src/pages/blog/CurrentInitiatives.tsx": "58bc400411d69f77188df3ad3209044fc0b25c53",
  "src/pages/blog/HowToGetInvolved.tsx": "88149fb3dd5785e73c5bf92ce8208f9c4ac3bd22",
  "src/pages/Privacy.tsx": "af4498ac0502a2c0b7ecdff4c4c95e0b6311cd48",
  "src/pages/Terms.tsx": "fd0f39ae017c492732f42c72b00978fd6576351e",
  "public/papers/architecture.pdf": "f5705bd34f4386446b5758a74522f63ad2d48abd",
  "public/papers/technical.pdf": "5ba119dca4af6460631652b5ed1b26639fd30fdd",
  "public/papers/whitepaper.pdf": "45fa20e20b8aa10a5776aa144bd7428cdaafb9f2",
  "public/brand/sentinelops-mark.png": "798b2fc6580c9d7b178d58c0e2320717c4f7725b",
};
for (const [path, sha] of Object.entries(baselineBlobs)) {
  const data = readFileSync(path);
  const digest = createHash("sha1")
    .update("blob " + data.length + "\0")
    .update(data)
    .digest("hex");
  assert.equal(digest, sha, path + " changed from the production content baseline");
}

const read = (path) => readFileSync(path, "utf8");
const files = {
  layout: read("src/components/Layout.tsx"),
  home: read("src/pages/Index.tsx"),
  mission: read("src/pages/Mission.tsx"),
  products: read("src/pages/Products.tsx"),
  projects: read("src/data/projects.ts"),
  docs: read("src/pages/Docs.tsx"),
  status: read("src/pages/Status.tsx"),
  press: read("src/pages/Press.tsx"),
  careers: read("src/pages/Careers.tsx"),
  blog: read("src/pages/Blog.tsx"),
};
const expected = {
  layout: ["Products", "Mission", "Docs", "Writing", "sentinelops-mark.png", "Sitemap", "Privacy", "Terms", "Status"],
  home: ["Provable safety for autonomous agents", "Provability Fabric", "Proof-carrying behaviour", "Stack", "Licence", "Mode", "Lean 4", "Rust", "WASM", "Specification-driven", "Runtime mediation", "Audit by default", "Specify", "Prove", "Enforce", "Receive new writing", "subscribe-email"],
  mission: ["Safety first", "Rigour", "Open collaboration", "Practical innovation", "Empirical testing", "Formal verification", "Foundation", "Industry adoption", "Standard setting", "Ubiquitous verification", "2024", "2025", "2026", "2027+"],
  products: ["Products.", "Original project description and classification", "originalNumber", "topics", "previousStatus", "Browse all repositories"],
  projects: ["Platform", "Build & verify", "Runtime & evidence", "Test & data", "Provability Fabric", "Spec-to-Proof", "SpecCursor", "SpecSync", "Lean Toolchain", "Runtime Safety Kernels", "Security Envelopes", "Model Asset Guard", "Post-Incident Proofs", "PF Testbed", "Dataset Safety Specs"],
  docs: ["Getting started", "Choose your tool", "Clone and install", "Run the examples", "Frequently asked questions", "Where is the API documentation?", "How do I contribute to the documentation?", "Which tool is the best starting point?", "Are integration examples available?", "What programming languages are supported?"],
  status: ["Public website", "Source repositories", "Documentation", "Newsletter", "Operational", "Published", "Active", "Operational history", "issues/3"],
  press: ["SentinelOps launches open-source AI safety verification platform", "SentinelOps receives backing for formal verification research", "2024-01-15", "2023-12-01", "Greater AI autonomy raises the value of mathematical certainty", "press@sentinelops.dev", "brand assets", "four-hour"],
  careers: ["Formal Verification Engineer", "ML Safety Researcher", "Developer Experience Engineer", "Full-time · Remote", "Safety first", "Open source", "Community", "Impact", "conference budget", "careers@sentinelops.dev"],
  blog: ["current-initiatives", "how-to-get-involved", "building-verification-infrastructure", "ecosystem-development-timeline", "mapping-the-space", "verifiable-ai-ecosystem", "/papers/architecture.pdf", "/papers/technical.pdf", "/papers/whitepaper.pdf", "handleSubscribe"],
};
for (const [page, items] of Object.entries(expected)) {
  for (const item of items) {
    assert.ok(files[page].includes(item), page + " lost original element: " + item);
  }
}
// SentinelOps is the parent organization; Provability Fabric is a project only.
assert.doesNotMatch(files.layout, /Provability Fabric|institutional-strip|site-brand__subline|site-footer__subtitle/);
assert.match(files.home, /One of the SentinelOps projects/);
assert.match(files.home, /View this project/);
const projectNames = [...files.projects.matchAll(/originalNumber:\s*"([^"]+)"/g)].map((match) => match[1]);
assert.equal(projectNames.length, 11);
assert.equal(new Set(projectNames).size, 11);
for (const item of ["01", "02", "03", "04"]) {
  assert.ok(files.projects.includes('number: "' + item + '"'));
}
console.log(
  "Preservation gate passed: 12 unchanged source/assets and original supporting-page inventory",
);
