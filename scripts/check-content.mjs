/**
 * Editorial trust boundaries for public-facing pages.
 *
 * The script protects against reintroducing known unsupported assertions.
 * It is a regression guard, not a substitute for verifying factual claims
 * against primary project records.
 */
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const read = (path) => readFileSync(path, "utf8");
const source = {
  home: read("src/pages/Index.tsx"),
  mission: read("src/pages/Mission.tsx"),
  projects: read("src/pages/Products.tsx"),
  catalogue: read("src/data/projects.ts"),
  docs: read("src/pages/Docs.tsx"),
  status: read("src/pages/Status.tsx"),
  press: read("src/pages/Press.tsx"),
  careers: read("src/pages/Careers.tsx"),
  blog: read("src/pages/Blog.tsx"),
};
const forbidden = [
  [/≈80%|≈5%|Typical coverage of behavioural scenarios/gi, ["mission"]],
  [/Testing approximates\. Proof guarantees|mathematical certainty/gi, ["mission"]],
  [/Every action ships with cryptographic evidence|every action an AI agent/gi, ["home"]],
  [/proof_status|policy_hash|effect_gate/gi, ["home"]],
  [/\bstate:\s*"Operational"|Current incident register is clear|\bstate:\s*"Active"/gi, ["status"]],
];
for (const [pattern, pages] of forbidden) {
  for (const page of pages) {
    assert.doesNotMatch(source[page], pattern, page + ": unsupported factual claim");
  }
}
assert.match(source.mission, /explicit assumptions/i);
assert.match(source.mission, /trusted components/i);
assert.match(source.status, /does not measure\s+availability continuously/);
assert.match(source.status, /issues\/3/);
assert.match(source.press, /primary materials/i);
assert.match(source.careers, /not a listing of\s+confirmed paid vacancies/i);
assert.match(source.press, /previous website/i, "Historical press entries need context");
assert.match(source.careers, /No active vacancy/i, "Earlier role profiles must be unconfirmed");
assert.match(source.status, /earlierState/i, "Old status labels should remain contextualized");
assert.match(source.projects, /earlier site|original project catalogue/i, "Project descriptions need editorial scope");
assert.match(source.projects, /@\/data\/projects/);
assert.match(source.docs, /@\/data\/projects/);
assert.match(source.blog, /<h1[^>]*>Writing\.<\/h1>/);

const projects = [...source.catalogue.matchAll(/repository:\s*"(https:\/\/github\.com\/SentinelOps-CI\/[^"]+)"/g)]
  .map((match) => match[1]);
assert.equal(projects.length, 11, "Project catalogue inventory changed unexpectedly");
assert.equal(new Set(projects).size, projects.length, "Duplicate repository in project catalogue");
assert.ok(projects.every((url) => !url.endsWith("/")), "Project links use canonical repository URLs");
assert.doesNotMatch(source.projects, /statusStyles|status:\s*"(?:Core|Active|Beta|Research)"/);
console.log("Editorial invariants passed: 11 repository sources and scoped public claims");
