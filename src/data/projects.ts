/**
 * Repository-backed research directory. Each entry has been checked against
 * the public GitHub repository inventory; status and guarantees are not inferred.
 */
export type Project = {
  id: string;
  name: string;
  focus: string;
  repository: string;
};

export type ProjectGroup = {
  number: string;
  title: string;
  projects: Project[];
};

/** Directory subjects are verified against public repository names, not maturity claims. */
export const projectGroups: ProjectGroup[] = [
  {
    number: "01",
    title: "Runtime mediation",
    projects: [
      {
        id: "provability-fabric",
        name: "Provability Fabric",
        focus: "Research on agent execution controls, policy decisions, proof-related artifacts, and records suitable for later examination.",
        repository: "https://github.com/SentinelOps-CI/provability-fabric",
      },
      {
        id: "runtime-safety-kernels",
        name: "Runtime Safety Kernels",
        focus: "Formal specifications and implementation work concerning the trusted components used to mediate AI execution.",
        repository: "https://github.com/SentinelOps-CI/runtime-safety-kernels",
      },
      {
        id: "security-envelopes",
        name: "Security Envelopes",
        focus: "Deployment-boundary properties, including access control, isolation, and attestation interfaces.",
        repository: "https://github.com/SentinelOps-CI/security-envelopes",
      },
    ],
  },
  {
    number: "02",
    title: "Specifications and proof tooling",
    projects: [
      {
        id: "spec-to-proof",
        name: "Spec-to-Proof",
        focus: "Tools for examining the translation of natural-language specifications into formal obligations and Lean artifacts.",
        repository: "https://github.com/SentinelOps-CI/spec-to-proof",
      },
      {
        id: "speccursor",
        name: "SpecCursor",
        focus: "Dependency-upgrade workflows that examine change obligations, verification results, and their relation to existing specifications.",
        repository: "https://github.com/SentinelOps-CI/speccursor",
      },
      {
        id: "specsync",
        name: "SpecSync",
        focus: "Specification coverage and verification checks associated with software changes and pull requests.",
        repository: "https://github.com/SentinelOps-CI/SpecSync",
      },
      {
        id: "lean-toolchain",
        name: "Lean Toolchain",
        focus: "Lean 4 libraries and utilities used to develop and inspect formally stated properties.",
        repository: "https://github.com/SentinelOps-CI/lean-toolchain",
      },
    ],
  },
  {
    number: "03",
    title: "Evidence and evaluation",
    projects: [
      {
        id: "model-asset-guard",
        name: "Model Asset Guard",
        focus: "Integrity and provenance checks for model-related files, manifests, and associated artifacts.",
        repository: "https://github.com/SentinelOps-CI/model-asset-guard",
      },
      {
        id: "post-incident-proofs",
        name: "Post-Incident Proofs",
        focus: "Methods for deriving inspectable incident evidence from runtime records and recorded system behavior.",
        repository: "https://github.com/SentinelOps-CI/post-incident-proofs",
      },
      {
        id: "pf-testbed",
        name: "PF Testbed",
        focus: "Test and evaluation environments for runtime mediation, observable decisions, and integration behavior.",
        repository: "https://github.com/SentinelOps-CI/pf-testbed",
      },
      {
        id: "dataset-safety-specs",
        name: "Dataset Safety Specs",
        focus: "Formal descriptions of data lineage, admissibility conditions, and policy-related dataset properties.",
        repository: "https://github.com/SentinelOps-CI/dataset-safety-specs",
      },
    ],
  },
];

