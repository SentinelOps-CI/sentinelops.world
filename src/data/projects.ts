/** Repository inventory reconciled with the main-branch product catalogue.
 * Previous descriptions and status names are retained as historical editorial copy;
 * neither status nor an implementation guarantee is asserted by their inclusion.
 */
export type Project = {
  id: string;
  name: string;
  focus: string;
  previousDescription: string;
  previousStatus: "Core" | "Active" | "Beta" | "Research";
  topics: string[];
  originalNumber: string;
  repository: string;
};

export type ProjectGroup = {
  number: string;
  title: string;
  projects: Project[];
};

export const projectGroups: ProjectGroup[] = [
  {
    number: "01",
    title: "Platform",
    projects: [
      {
        id: "provability-fabric",
        name: "Provability Fabric",
        focus: "Research on agent execution controls, policy decisions, proof-related artifacts, and records suitable for later examination.",
        previousDescription: "The foundational runtime for proof-carrying behaviour. Intercepts agent actions, validates attached proofs against policy, and admits only verified operations.",
        previousStatus: "Core",
        topics: ["Runtime verification","Proof-carrying code","Policy engine","Rust · WASM"],
        originalNumber: "1.1",
        repository: "https://github.com/SentinelOps-CI/provability-fabric",
      },
    ],
  },
  {
    number: "02",
    title: "Build & verify",
    projects: [
      {
        id: "spec-to-proof",
        name: "Spec-to-Proof",
        focus: "Tools for examining the translation of natural-language specifications into formal obligations and Lean artifacts.",
        previousDescription: "Compile natural-language specifications into Lean theorem proofs. Transforms policy documents into machine-checkable mathematical artefacts.",
        previousStatus: "Active",
        topics: ["LLM-to-Lean","Policy compilation"],
        originalNumber: "2.1",
        repository: "https://github.com/SentinelOps-CI/spec-to-proof",
      },
      {
        id: "speccursor",
        name: "SpecCursor",
        focus: "Dependency-upgrade workflows that examine change obligations, verification results, and their relation to existing specifications.",
        previousDescription: "Formal qualification for dependency upgrades. Ensures code changes preserve existing behavioural guarantees through automated proof verification.",
        previousStatus: "Active",
        topics: ["Dependency safety","Change verification"],
        originalNumber: "2.2",
        repository: "https://github.com/SentinelOps-CI/speccursor",
      },
      {
        id: "specsync",
        name: "SpecSync",
        focus: "Specification coverage and verification checks associated with software changes and pull requests.",
        previousDescription: "GitHub-native specification coverage and verification gates, integrated into pull-request workflows.",
        previousStatus: "Active",
        topics: ["GitHub Actions","CI/CD gates"],
        originalNumber: "2.3",
        repository: "https://github.com/SentinelOps-CI/SpecSync",
      },
      {
        id: "lean-toolchain",
        name: "Lean Toolchain",
        focus: "Lean 4 libraries and utilities used to develop and inspect formally stated properties.",
        previousDescription: "Curated Lean theorem prover distribution with extensions for AI safety verification workflows.",
        previousStatus: "Active",
        topics: ["Lean 4","Verification library"],
        originalNumber: "2.4",
        repository: "https://github.com/SentinelOps-CI/lean-toolchain",
      },
    ],
  },
  {
    number: "03",
    title: "Runtime & evidence",
    projects: [
      {
        id: "runtime-safety-kernels",
        name: "Runtime Safety Kernels",
        focus: "Formal specifications and implementation work concerning the trusted components used to mediate AI execution.",
        previousDescription: "Minimal trusted computing kernels provide hardware-level isolation for AI workloads with a reduced attack surface.",
        previousStatus: "Active",
        topics: ["Isolation","Hardware security"],
        originalNumber: "3.1",
        repository: "https://github.com/SentinelOps-CI/runtime-safety-kernels",
      },
      {
        id: "security-envelopes",
        name: "Security Envelopes",
        focus: "Deployment-boundary properties, including access control, isolation, and attestation interfaces.",
        previousDescription: "Encrypted execution environments providing confidentiality and integrity guarantees for AI model inference and training.",
        previousStatus: "Beta",
        topics: ["Encrypted execution","Confidential computing"],
        originalNumber: "3.2",
        repository: "https://github.com/SentinelOps-CI/security-envelopes",
      },
      {
        id: "model-asset-guard",
        name: "Model Asset Guard",
        focus: "Integrity and provenance checks for model-related files, manifests, and associated artifacts.",
        previousDescription: "Cryptographic verification of model weights, training data, and associated metadata to prevent tampering and ensure provenance.",
        previousStatus: "Active",
        topics: ["Model integrity","Provenance"],
        originalNumber: "3.3",
        repository: "https://github.com/SentinelOps-CI/model-asset-guard",
      },
      {
        id: "post-incident-proofs",
        name: "Post-Incident Proofs",
        focus: "Methods for deriving inspectable incident evidence from runtime records and recorded system behavior.",
        previousDescription: "An immutable, cryptographically sealed log of AI system behaviour, suitable for forensic analysis and compliance reporting.",
        previousStatus: "Research",
        topics: ["Audit trails","Forensics"],
        originalNumber: "3.4",
        repository: "https://github.com/SentinelOps-CI/post-incident-proofs",
      },
    ],
  },
  {
    number: "04",
    title: "Test & data",
    projects: [
      {
        id: "pf-testbed",
        name: "PF Testbed",
        focus: "Test and evaluation environments for runtime mediation, observable decisions, and integration behavior.",
        previousDescription: "Testing framework for proof-carrying behaviour systems.",
        previousStatus: "Active",
        topics: ["Testing","Integration patterns"],
        originalNumber: "4.1",
        repository: "https://github.com/SentinelOps-CI/pf-testbed",
      },
      {
        id: "dataset-safety-specs",
        name: "Dataset Safety Specs",
        focus: "Formal descriptions of data lineage, admissibility conditions, and policy-related dataset properties.",
        previousDescription: "Formal specifications for training-data safety and compliance.",
        previousStatus: "Active",
        topics: ["Data safety","Compliance"],
        originalNumber: "4.2",
        repository: "https://github.com/SentinelOps-CI/dataset-safety-specs",
      },
    ],
  },
];
