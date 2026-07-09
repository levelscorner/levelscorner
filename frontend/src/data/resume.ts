export const experience = [
  {
    company: "Persistent Systems",
    role: "Lead Software Engineer",
    period: "Oct 2024 – Present",
    location: "Bengaluru, India",
    clients: [
      {
        name: "Client: Intuit — Recipe (Data Curation / Developer Platform)",
        period: "Apr 2026 – Present",
        points: [
          "Sole engineer designing and building an agentic Slack support bot that serves as the first line of support for the Recipe platform across topics, pipeline configuration, asset and recipe creation, and UI workflows.",
          "Architected an orchestration loop that answers from a RAG knowledge base first, then investigates through MCP tools over Git, Splunk, Jira, and internal diagnostics when evidence is missing.",
          "Built a custom MCP server exposing manual diagnostic actions as agent tools, reducing repeated human triage work and creating a path toward a more AI-native internal platform.",
          "Executed a manual blue-green Aurora PostgreSQL major-version upgrade from v11 to v17.9 for the pipeline-configuration service, remediating a compliance blocker with zero data loss.",
        ],
      },
      {
        name: "Client: Vuclip (OTT Platform)",
        period: "Mar 2025 – Mar 2026",
        points: [
          "Owned backend development across multiple Go microservices handling retail provisioning and subscription lifecycle management at scale.",
          "Designed and implemented a Semi-Managed Subscription system automating deactivation, suspension, and resumption from per-partner configuration.",
          "Extended partner-facing REST flows and drove migration of legacy subscription services from Java to Go.",
          "Coordinated end-to-end and production validation with zero critical post-release incidents while also remediating security vulnerabilities across repositories.",
        ],
      },
      {
        name: "Client: NewRelic (Developer Platform)",
        period: "Nov 2024 – Feb 2025",
        points: [
          "Built CI/CD infrastructure with automated Trivy scanning and rebuilding of vulnerable Docker images, reducing manual intervention in vulnerability management.",
        ],
      },
    ],
    tags: ["Python", "Go", "Agentic AI", "RAG", "MCP", "LangChain", "AWS", "PostgreSQL"],
  },
  {
    company: "CSG",
    role: "Senior Software Development Engineer",
    period: "Dec 2023 – Oct 2024",
    location: "Bengaluru, India",
    clients: [
      {
        name: "Charging System Orchestration",
        period: "",
        points: [
          "Led design and delivery of Go microservices for scalable backend solutions.",
          "Designed and implemented payment and reservations for the CSO microservice, integrating multiple services through REST APIs across the payment and reservation lifecycle.",
          "Improved communication, scalability, and operational reliability across telecom billing flows.",
        ],
      },
    ],
    tags: ["Go", "Microservices", "REST APIs", "AWS"],
  },
  {
    company: "MachaniRobotics",
    role: "Software Developer — Robotics & AI",
    period: "Jan 2021 – Dec 2023",
    location: "Bengaluru, India",
    clients: [
      {
        name: "Genesis / Gaia / ApexDrive",
        period: "",
        points: [
          "Re-architected a monolith into a Dockerized mono-repo and improved delivery efficiency across the robotics software stack.",
          "Built Gaia, a Go gateway using gRPC, GraphQL, Protocol Buffers, Nginx, and Envoy for authentication and request orchestration.",
          "Developed ApexDrive, a C++ limb-driver microservice for precise humanoid motion control.",
          "Improved facial-recognition pipelines through embeddings and augmentation, and integrated ChatGPT APIs with TTS and STT for robot interaction.",
        ],
      },
    ],
    tags: ["Go", "C++", "gRPC", "GraphQL", "Envoy", "Nginx", "Docker"],
  },
  {
    company: "Oracle",
    role: "Software Developer (Systems)",
    period: "Jul 2018 – Dec 2020",
    location: "Bengaluru, India",
    clients: [
      {
        name: "vSTP / SIGTRAN stack",
        period: "",
        points: [
          "Built features in a 3G signaling stack covering SIGTRAN SCCP, packet segmentation, and firewall management.",
          "Improved data transmission reliability and reduced operational risk across the signaling network.",
          "Automated test suites in Python to improve code coverage and system reliability.",
        ],
      },
      {
        name: "Oracle — IT Intern",
        period: "Aug 2017 – Jun 2018",
        points: [
          "Worked on point-of-sale software features, upgrades, and test validation for retailer-facing systems.",
        ],
      },
    ],
    tags: ["C++", "Python", "Systems programming", "3G", "Testing"],
  },
];

export const skills = [
  { category: "Agentic AI", items: ["MCP", "RAG", "LangChain", "Tool orchestration", "LLM routing"] },
  { category: "Backend", items: ["Go", "Python", "gRPC", "REST APIs", "GraphQL", "PostgreSQL"] },
  { category: "Systems", items: ["C++", "Distributed systems", "Reliability", "Migrations", "Debugging"] },
  { category: "Infrastructure", items: ["AWS", "Docker", "CI/CD", "Nginx", "Envoy", "SageMaker"] },
  { category: "Earlier foundations", items: ["Java", "Telecom", "Robotics", "Bazel"] },
];

export const education = [
  {
    degree: "Master of Computer Science",
    institution: "Amrita University",
    period: "2016 – 2018",
    location: "Coimbatore, TN",
    cgpa: "8.0",
  },
  {
    degree: "B.E. Electrical & Electronics",
    institution: "Vinayaka University",
    period: "2009 – 2013",
    location: "Salem, TN",
    cgpa: "6.5",
  },
  {
    degree: "Diploma in Java",
    institution: "NIIT",
    period: "2013 – 2014",
    location: "Bengaluru, KA",
    cgpa: "7.0",
  },
];
