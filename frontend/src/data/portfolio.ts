export const profile = {
  name: "Abhinav Rana",
  firstName: "Abhinav",
  brand: "levelscorner",
  role: "Lead Software Engineer — Agentic AI & Backend Platforms",
  location: "Bengaluru, India",
  email: "rabhinavcs@gmail.com",
  linkedin: "https://linkedin.com/in/abhinavrl4f",
  github: "https://github.com/levelscorner",
  website: "https://levelscorner.com",
  heroTitle: "I build backend platforms, agentic AI systems, and reliable infrastructure for high-consequence software.",
  heroSummary:
    "From telecom signaling and humanoid robotics to Go microservices and agentic AI, I work on systems that need strong contracts, clear orchestration, and operational sanity when the edges get messy.",
  currentFocus:
    "Currently leading AI-native platform work at Persistent Systems across agentic support, backend platforms, and production-grade execution flows.",
  availability:
    "Open to senior backend, platform, and agentic AI engineering conversations.",
};

export const proofStats = [
  { value: "8+", label: "years across systems, backend, and AI" },
  { value: "Go · Python · C++", label: "core languages across current and foundational work" },
  { value: "Microservices → Agents", label: "depth from service contracts to LLM orchestration" },
  { value: "0 → prod", label: "comfortable owning design, delivery, and rollout" },
] as const;

export const featuredProjects = [
  {
    title: "Recipe support agent · Intuit",
    type: "Professional / Agentic AI",
    summary:
      "Designed and built an agentic Slack support bot for Recipe, Intuit's data curation and developer platform. It answers from a RAG knowledge base first, then investigates with tools when evidence is missing.",
    highlights: [
      "LangChain orchestration loop with Claude via Intuit GenOS and SageMaker",
      "Custom MCP server exposing internal diagnostics and support actions as tools",
      "RAG over code, docs, Slack history, meeting transcripts, and runbooks",
      "Escalation path only when investigation cannot confidently resolve the issue",
    ],
    stack: ["Python", "LangChain", "Claude", "MCP", "RAG", "Slack"],
  },
  {
    title: "Clotho",
    type: "Personal / Agent platform",
    summary:
      "Greenfield multi-tenant agent platform built around compiled-plan orchestration: an LLM plans a typed execution graph and a deterministic interpreter runs it with human approval before execution.",
    highlights: [
      "pgvector memory with secret-redaction before embedding and per-tenant retrieval",
      "BYOK AES-256-GCM credential vault and multi-provider LLM routing",
      "Durable execution and human-in-the-loop control via Hatchet",
      "21 packages with TDD-first workflow and architecture decision records",
    ],
    stack: ["Go", "pgvector", "Hatchet", "AES-GCM", "Postgres"],
  },
  {
    title: "chotu.studio / auto-shorts",
    type: "Personal / Creative AI system",
    summary:
      "AI studio that turns a creative brief into a finished short through a seven-stage orchestrated DAG covering story, characters, cinematography, frames, motion, audio, and assembly.",
    highlights: [
      "Durable run-ledger for crash recovery without double-billing",
      "Multi-provider generative-media integration behind a unified adapter",
      "Per-run cost and latency metering",
      "545 backend tests and 458 frontend tests documented in the project README",
    ],
    stack: ["Python", "FastAPI", "React", "MCP", "Claude"],
  },
  {
    title: "Genesis / Gaia / ApexDrive",
    type: "Professional / Robotics platform",
    summary:
      "At MachaniRobotics I worked across the software spine of humanoid robotics: gateway services, protocol orchestration, facial-recognition pipelines, and a C++ limb-driver controlling motion in the hardware stack.",
    highlights: [
      "Go gateway with gRPC, GraphQL, protobuf, Nginx, and Envoy",
      "C++ limb-driver for precise humanoid movement control",
      "Facial-recognition pipeline improvements through embeddings and augmentation",
      "Conversational robot interface using ChatGPT APIs with TTS and STT",
    ],
    stack: ["Go", "C++", "gRPC", "GraphQL", "Envoy", "Nginx"],
  },
] as const;

export const focusAreas = [
  {
    title: "Agentic AI systems",
    summary:
      "I care about the non-demo parts: tool contracts, retrieval quality, escalation boundaries, durable execution, and keeping LLM workflows inspectable when reality gets noisy.",
    bullets: [
      "Multi-agent orchestration and planning loops",
      "RAG, tool use, MCP servers, and agent memory",
      "Production concerns: latency, cost, observability, and safe fallbacks",
    ],
  },
  {
    title: "Backend platforms",
    summary:
      "Most of my work lives where system contracts matter. I like service boundaries, operational clarity, and data flows that remain boring in production.",
    bullets: [
      "Go microservices, gRPC, REST, GraphQL, and event-driven systems",
      "Schema discipline, migrations, rollout safety, and production validation",
      "Platform work spanning provisioning, subscription lifecycle, and developer tooling",
    ],
  },
  {
    title: "Systems thinking",
    summary:
      "I started close to the wire in telecom and robotics. That background still shapes how I approach correctness, performance, and the cost of vague abstractions.",
    bullets: [
      "C++ systems foundations and packet-level thinking",
      "Hardware-aware robotics control and real-world constraints",
      "Preference for clarity over magic in architecture and implementation",
    ],
  },
] as const;

export const notes = [
  {
    title: "Why most internal AI support bots fail after the demo",
    summary:
      "The problem is usually not the model. It is weak retrieval, shallow tool contracts, and no disciplined escalation boundary when the bot leaves the happy path.",
    bullets: [
      "Answer from evidence first, not from vibes",
      "Treat tools as product surfaces with contracts, retries, and observability",
      "Escalation is a design feature, not an admission of failure",
    ],
  },
  {
    title: "What migrating backend services to Go actually buys you",
    summary:
      "The win is rarely just throughput. The bigger gain is simpler operational behavior, clearer ownership, and a codebase the team can reason about during incidents.",
    bullets: [
      "Reduce moving parts before you benchmark hero numbers",
      "Migration succeeds when API edges and rollout plans are boring",
      "Operational confidence matters as much as language preference",
    ],
  },
  {
    title: "Building agent platforms without lying to yourself",
    summary:
      "If the plan is fuzzy, the execution graph should not be. Typed interfaces, durable state, and explicit human checkpoints are what make agent systems trustworthy.",
    bullets: [
      "Use typed execution units where possible",
      "Persist enough state to recover without duplicated side effects",
      "Keep humans in the loop where cost or risk is asymmetric",
    ],
  },
] as const;

export const contactChannels = [
  {
    label: "Email",
    value: "rabhinavcs@gmail.com",
    href: "mailto:rabhinavcs@gmail.com",
    description: "Best path for hiring, consulting, and serious engineering conversations.",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/abhinavrl4f",
    href: "https://linkedin.com/in/abhinavrl4f",
    description: "Professional profile, background, and direct outreach.",
  },
  {
    label: "GitHub",
    value: "github.com/levelscorner",
    href: "https://github.com/levelscorner",
    description: "Code, experiments, and public project surface area.",
  },
  {
    label: "Resume",
    value: "Download PDF",
    href: "/resume.pdf",
    description: "Latest resume aligned with the current portfolio story.",
  },
] as const;
