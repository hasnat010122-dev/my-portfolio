export const profile = {
  name: "Hasnat Ahmed",
  initials: "HA",
  title: "AI Developer & Product Builder",
  founderRole: "Founder, Next Gen AI",
  education: "BS Artificial Intelligence — In Progress",
  location: "Pakistan · Working globally",
  tagline:
    "I design intelligent products that turn difficult operational problems into clear, dependable software.",
  bio:
    "I’m an AI undergraduate, product builder, and founder of Next Gen AI. My work sits at the intersection of applied AI, full-stack engineering, and operational product design—especially in healthcare, where small improvements in accuracy and workflow can create meaningful real-world impact.",
  email: "hasnat010122@gmail.com",
  phone: "+92 329 6676307",
  github: "https://github.com/hasnat010122-dev",
  nextGenAI: "https://nextaigen.org/",
  medStock: "https://medstock.nextaigen.org/",
};

export const navigation = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
];

export const proofPoints = [
  { value: "01", label: "Live AI product" },
  { value: "04", label: "Active product directions" },
  { value: "AI", label: "Degree in progress" },
];

export const projects = [
  {
    id: "medstock",
    number: "01",
    title: "MedStock Pro",
    category: "Healthcare · Pharmacy operations",
    status: "Live product",
    statusTone: "live",
    description:
      "An intelligent pharmacy operations platform connecting medicine capture, batch-aware inventory, billing, purchasing, and management signals in one focused workflow.",
    outcome:
      "Designed to reduce fragmented records and make day-to-day pharmacy operations easier to understand and control.",
    tags: ["React", "AI/OCR", "Inventory", "PWA", "Analytics"],
    liveUrl: "https://medstock.nextaigen.org/",
    accent: "cobalt",
  },
  {
    id: "nextgen",
    number: "02",
    title: "Next Gen AI",
    category: "AI studio · Product ecosystem",
    status: "Founder project",
    statusTone: "founder",
    description:
      "A product and applied-AI studio focused on useful intelligent systems for healthcare, industry, and complex operational environments.",
    outcome:
      "Establishes the design, engineering, and product foundation behind a growing portfolio of AI-enabled systems.",
    tags: ["Product strategy", "Applied AI", "Web systems", "Brand"],
    liveUrl: "https://nextaigen.org/",
    accent: "sage",
  },
  {
    id: "clinic-os",
    number: "03",
    title: "Clinical Operations OS",
    category: "Healthcare · Clinical workflow",
    status: "In development",
    statusTone: "build",
    description:
      "A role-based clinic operating environment for registration, patient queues, consultation, procedures, billing, and operational coordination.",
    outcome:
      "Explores how thoughtful software can reduce front-desk friction and create better visibility across the patient journey.",
    tags: ["React", "Workflow UX", "Billing", "Role systems"],
    liveUrl: null,
    accent: "sand",
  },
  {
    id: "medical-intelligence",
    number: "04",
    title: "Medical Document Intelligence",
    category: "Healthcare · Document AI",
    status: "Research direction",
    statusTone: "research",
    description:
      "Human-reviewed extraction and organization of information from medicine labels, reports, and operational medical documents.",
    outcome:
      "Investigates practical AI assistance while keeping verification, accountability, and medical judgment visible.",
    tags: ["Computer vision", "OCR", "Python", "Human review"],
    liveUrl: null,
    accent: "violet",
  },
];

export const capabilityGroups = [
  {
    number: "01",
    title: "Applied AI",
    description:
      "Designing focused AI features around a specific user decision or operational task.",
    items: ["OCR & extraction", "Computer vision", "Model integration", "Human review flows"],
  },
  {
    number: "02",
    title: "Product Engineering",
    description:
      "Turning an idea into a usable, coherent product—not just a collection of screens.",
    items: ["React interfaces", "Workflow architecture", "Responsive systems", "PWA thinking"],
  },
  {
    number: "03",
    title: "Software Development",
    description:
      "Building maintainable logic and data flows with attention to reliability and clarity.",
    items: ["JavaScript", "Python", "Java", "C++", "HTML & CSS"],
  },
  {
    number: "04",
    title: "Product Direction",
    description:
      "Connecting domain problems, business value, UX, and technical execution.",
    items: ["Product framing", "System mapping", "Prototyping", "Founder-led delivery"],
  },
];

export const journey = [
  {
    period: "Now",
    role: "Founder & Product Builder",
    organization: "Next Gen AI",
    detail:
      "Building applied-AI products and exploring intelligent systems across healthcare and industrial operations.",
  },
  {
    period: "2026",
    role: "Creator",
    organization: "MedStock Pro",
    detail:
      "Designed and shipped a live pharmacy operations product with inventory, billing, and AI-assisted medicine capture.",
  },
  {
    period: "In progress",
    role: "BS Artificial Intelligence",
    organization: "Undergraduate study",
    detail:
      "Developing foundations in AI, software engineering, problem solving, and intelligent-system design.",
  },
  {
    period: "Continuous",
    role: "Independent learning",
    organization: "Engineering & security",
    detail:
      "Expanding full-stack development, cyber-security awareness, and domain knowledge in medical operations.",
  },
];
