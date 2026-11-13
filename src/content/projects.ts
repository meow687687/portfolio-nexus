export type ProjectStatus = "Released" | "Early development" | "Working prototype";

export type Project = {
  slug: string;
  name: string;
  repoUrl: string;
  evidence: readonly { label: string; href: string; kind: "source" | "documentation" }[];
  problem: string;
  approach: string;
  status: ProjectStatus;
  statusEvidence: string;
  stack: readonly string[];
  features: readonly string[];
  limitations: readonly string[];
  license: string;
  liveDemo: null | { label: string; href: string };
};

export const projects: readonly Project[] = [
  {
    slug: "relay",
    name: "relay",
    repoUrl: "https://github.com/Sumeet-basfore/relay",
    evidence: [
      { label: "Workspace manifest", href: "https://github.com/Sumeet-basfore/relay/blob/main/Cargo.toml", kind: "source" },
      { label: "CI workflow", href: "https://github.com/Sumeet-basfore/relay/blob/main/.github/workflows/ci.yml", kind: "source" },
      { label: "CHANGELOG", href: "https://github.com/Sumeet-basfore/relay/blob/main/CHANGELOG.md", kind: "documentation" },
    ],
    problem:
      "Agents that invoke tools can inherit broad credentials and access. Relay's README frames this as an ambient-credential risk.",
    approach:
      "The repository contains a Rust workspace and CI checks. The README describes Cedar authorization, credential leasing, and signed action receipts; those security features are documented claims, not independently audited here.",
    status: "Released",
    statusEvidence:
      "The CHANGELOG records v0.1.0 dated 2026-09-14. CI defines tests, formatting, clippy, and cargo-deny checks. I did not run those checks or verify the release tag.",
    stack: ["Rust", "AWS Cedar", "SQLite", "Ed25519 / DSSE"],
    features: [
      "README documents default-deny Cedar policy checks for MCP tool calls",
      "README documents credential leasing with in-memory zeroization",
      "README documents an append-only SQLite hash-chain ledger for action receipts",
    ],
    limitations: [
      "README documents Linux network-namespace isolation; macOS and Windows use a cooperative proxy mode",
      "Performance and test-count figures in the README have not been independently verified",
      "Detailed security and known-limitations documents linked from the README were not reviewed",
    ],
    license: "Apache-2.0",
    liveDemo: null,
  },
  {
    slug: "traject",
    name: "traject",
    repoUrl: "https://github.com/Sumeet-basfore/traject",
    evidence: [
      { label: "Claude JSONL adapter", href: "https://github.com/Sumeet-basfore/traject/blob/main/src/traject/adapters/claude.py", kind: "source" },
      { label: "Repeated-failure detector", href: "https://github.com/Sumeet-basfore/traject/blob/main/src/traject/detectors/repeated_failure.py", kind: "source" },
      { label: "Project configuration", href: "https://github.com/Sumeet-basfore/traject/blob/main/pyproject.toml", kind: "source" },
    ],
    problem:
      "An agent session transcript, a final Git diff, and test output each show only part of what happened during a coding task.",
    approach:
      "The inspected adapter parses Claude Code JSONL into session events, and the inspected detector identifies repeated command failures from those events. Other described detectors and the full CLI behavior are documented in the README but were not run.",
    status: "Working prototype",
    statusEvidence:
      "The pyproject declares v0.1.0. Source inspected: Claude JSONL adapter and repeated-failure detector. Runtime and tests were not run.",
    stack: ["Python 3.12", "Typer", "Pydantic v2", "Rich", "pytest", "Pyright", "Ruff"],
    features: [
      "Source inspected: Claude Code JSONL adapter maps transcript records into session events",
      "Source inspected: repeated-failure detector groups failed commands by failure signature",
      "README documents Rich terminal reports and JSON output",
    ],
    limitations: [
      "Only the Claude Code adapter is implemented in the source reviewed; other adapters are described as planned",
      "The README's example report is illustrative, not a captured run",
      "No runnable demo link was found in the reviewed public pages",
    ],
    license: "MIT",
    liveDemo: null,
  },
  {
    slug: "kiln",
    name: "Kiln",
    repoUrl: "https://github.com/Sumeet-basfore/Kiln",
    evidence: [
      { label: "README and roadmap", href: "https://github.com/Sumeet-basfore/Kiln/blob/main/README.md", kind: "documentation" },
      { label: "Workspace manifest", href: "https://github.com/Sumeet-basfore/Kiln/blob/main/Cargo.toml", kind: "source" },
    ],
    problem:
      "The project aims to bring file editing and coding-agent supervision into one terminal workspace.",
    approach:
      "The README describes a Rust modal editor with Vim-style keys and a future agent PTY workspace. The README labels the project early development; no build or runtime behavior was checked.",
    status: "Early development",
    statusEvidence:
      "README labels the project early development and says the core editor is functional. This describes the README's claim, not an independent run.",
    stack: ["Rust", "ratatui", "crossterm", "TOML configuration"],
    features: [
      "README documents modal editing with configurable keybindings",
      "README documents TOML configuration and custom themes",
      "README documents a headless mode for scripted sessions",
    ],
    limitations: [
      "Agent PTY workspace is listed on the roadmap and is not built yet",
      "Language intelligence and splits/tabs are listed as unfinished",
      "License is unavailable: README says undecided while a LICENSE file is listed",
    ],
    license: "Unavailable (conflicting repository evidence)",
    liveDemo: null,
  },
  {
    slug: "omnidoc",
    name: "OmniDoc Studio",
    repoUrl: "https://github.com/Sumeet-basfore/omnidoc",
    evidence: [
      { label: "README", href: "https://github.com/Sumeet-basfore/omnidoc/blob/main/README.md", kind: "documentation" },
      { label: "Package manifest", href: "https://github.com/Sumeet-basfore/omnidoc/blob/main/package.json", kind: "source" },
    ],
    problem:
      "The README positions OmniDoc as a response to context switching across document formats and research workflows.",
    approach:
      "The package manifest identifies an Electron application with React and TypeScript. The README documents multi-format editing, AI assistance, and web research; the application was not built or run for this portfolio review.",
    status: "Working prototype",
    statusEvidence:
      "The package manifest declares version 2.0.0 and build/typecheck scripts. Version and script declarations do not establish release availability or runtime behavior.",
    stack: ["Electron 33", "React 18", "TypeScript", "Tiptap", "PDF.js", "Tailwind CSS v4"],
    features: [
      "README documents Markdown editing with KaTeX and Mermaid rendering",
      "README documents a multi-provider LLM assistant, including local endpoints",
      "README documents web research via Tavily and Exa",
    ],
    limitations: [
      "Cloud AI and research provider features require their respective API credentials",
      "No test directory was visible in the repository listing reviewed",
      "Release and feature claims have not been independently verified",
    ],
    license: "MIT (per README)",
    liveDemo: null,
  },
];

export const featuredProjects = projects.slice(0, 4);
