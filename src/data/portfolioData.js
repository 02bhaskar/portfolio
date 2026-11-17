export const personalInfo = {
  name: "BHASKAR G",
  shortName: "Bhaskar",
  tagline: "Aspiring AI & Data Science Engineer | Full-Stack & Systems Developer",
  status: "Available for Internships & AI/DS Roles",
  location: "Coimbatore, Tamil Nadu, India",
  email: "bhaskar272006@gmail.com",
  phone: "+91 9345614976",
  github: "https://github.com/02bhaskar",
  linkedin: "https://www.linkedin.com/in/boss02",
  profileImage: "./bhaskar.jpg",
  resumeUrl: "./resume.pdf",
  bio: "Pre-final Year B.Tech student in Artificial Intelligence and Data Science at Dr. N.G.P. Institute of Technology. Passionate about architecting intelligent systems that bridge modern full-stack web applications, edge AI/ML solutions, and embedded hardware prototypes.",
  stats: [
    { label: "Academic Standing", value: "B.Tech AI & DS", sub: "2024 – 2028" },
    { label: "Core Projects", value: "5+ Flagship", sub: "Web, AI & Embedded" },
    { label: "Hackathons", value: "SIH 2026", sub: "National Participant" },
    { label: "Hardware Innovation", value: "Vishwakarma '25", sub: "Finalist" }
  ]
};

export const education = {
  degree: "B.Tech – Artificial Intelligence and Data Science",
  institution: "Dr. N.G.P. Institute of Technology",
  location: "Coimbatore, Tamil Nadu",
  status: "Pre-final Year / III Year",
  duration: "2024 – 2028",
  highlights: [
    "Specializing in Machine Learning, Generative AI, and Agentic Systems.",
    "Active member of Technical Clubs, Project Competitions, and Hackathons.",
    "Recognized for interdisciplinary projects combining hardware DSP and cloud intelligence."
  ]
};

export const skillsData = {
  "AI & Data Science": [
    { name: "Machine Learning", level: "Advanced", icon: "Brain", tags: ["Scikit-Learn", "Model Training", "Evaluation"] },
    { name: "Generative AI", level: "Intermediate", icon: "Sparkles", tags: ["LLMs", "Prompt Engineering", "RAG"] },
    { name: "Agentic AI", level: "Emerging", icon: "Bot", tags: ["Multi-Agent", "Autonomous Workflows"] },
    { name: "Reinforcement Learning", level: "Foundational", icon: "TrendingUp", tags: ["Reward Functions", "Agent Optimization"] }
  ],
  "Programming Languages": [
    { name: "Python", level: "Advanced", icon: "Code", tags: ["NumPy", "Pandas", "Automation", "OOP"] },
    { name: "Java", level: "Intermediate", icon: "Coffee", tags: ["OOP", "Data Structures", "Algorithms"] },
    { name: "JavaScript", level: "Advanced", icon: "FileCode", tags: ["ES6+", "Async/Await", "DOM", "Node"] },
    { name: "Dart", level: "Intermediate", icon: "Layers", tags: ["Flutter", "State Management", "Async"] },
    { name: "SQL", level: "Intermediate", icon: "Database", tags: ["Queries", "Joins", "Schema Design"] }
  ],
  "Frontend Development": [
    { name: "React.js", level: "Intermediate", icon: "Atom", tags: ["Hooks", "Components", "State", "Vite"] },
    { name: "HTML5 & CSS3", level: "Advanced", icon: "Layout", tags: ["Semantic HTML", "Flexbox", "Grid", "Responsive"] },
    { name: "Tailwind CSS", level: "Intermediate", icon: "Palette", tags: ["Utility-First", "Dark Theme", "Custom Tokens"] }
  ],
  "Backend & Systems": [
    { name: "Node.js", level: "Intermediate", icon: "Server", tags: ["Runtime", "Event Loop", "NPM Modules"] },
    { name: "Express.js", level: "Intermediate", icon: "Cpu", tags: ["REST APIs", "Middleware", "Routing"] },
    { name: "Embedded Systems", level: "Intermediate", icon: "Cpu", tags: ["ESP32", "Arduino IDE", "FFT / LMS DSP"] }
  ],
  "Databases": [
    { name: "MongoDB", level: "Intermediate", icon: "Database", tags: ["NoSQL", "Mongoose", "Aggregation"] },
    { name: "SQL / Relational", level: "Intermediate", icon: "Table", tags: ["PostgreSQL", "MySQL", "Normalization"] },
    { name: "Firebase", level: "Intermediate", icon: "Flame", tags: ["Firestore", "Authentication", "Cloud Sync"] }
  ],
  "Mobile & Embedded": [
    { name: "Flutter", level: "Intermediate", icon: "Smartphone", tags: ["Cross-Platform", "Widgets", "State"] },
    { name: "ESP32 & Arduino", level: "Intermediate", icon: "Radio", tags: ["Acoustics", "Sensors", "Microcontrollers"] }
  ],
  "Developer Tools": [
    { name: "Git & GitHub", level: "Advanced", icon: "GitBranch", tags: ["Version Control", "Collaboration", "Actions"] },
    { name: "VS Code", level: "Advanced", icon: "Terminal", tags: ["Extensions", "Debugging", "Productivity"] },
    { name: "Android Studio", level: "Intermediate", icon: "AppWindow", tags: ["Flutter Dev", "Emulators", "Build Tools"] }
  ]
};

export const projectsData = [
  {
    id: "routing-vanguard",
    title: "RoutingVanguard",
    subtitle: "AI-Based Smart Logistics & Resilient Route Optimization",
    category: "AI & Systems",
    featured: true,
    fileBadge: "RoutingVanguard.ts",
    description: "An intelligent logistics platform engineered for challenging geographic terrains, combining Geographic Information Systems (GIS), predictive weather telemetry, AI route optimization, and resilient mesh connectivity.",
    longDescription: "RoutingVanguard addresses the vulnerability of supply chains and transport fleets operating in complex terrains. It utilizes algorithmic routing weighted by live weather intelligence, road conditions, and gradient data to guarantee safe delivery transit. Designed with fall-back local-first mesh data exchange for remote connectivity blackspots.",
    tags: ["AI/ML", "GIS Mapping", "Route Optimization", "Weather Intelligence", "Resilient Architecture"],
    technologies: ["Python", "Machine Learning", "GIS", "React", "Node.js", "REST APIs"],
    highlights: [
      "Dynamic cost-function route optimization based on live terrain & weather risk factors.",
      "Engineered for high-altitude, rural, and disaster-prone connectivity zones.",
      "Integrates predictive models to avert vehicle breakdowns and transit delays."
    ],
    github: "https://github.com/02bhaskar",
    demo: "#",
    status: "Active Research & Development"
  },
  {
    id: "echoshield-anc",
    title: "EchoShield ANC",
    subtitle: "Industrial Active Noise Cancellation Prototype",
    category: "Hardware & Edge DSP",
    featured: true,
    fileBadge: "EchoShieldANC.cpp",
    description: "A hardware-accelerated acoustic noise cancellation device designed to attenuate industrial acoustic hazards using real-time LMS adaptive filtering and Fast Fourier Transform algorithms.",
    longDescription: "Recognized as a Finalist at the prestigious Vishwakarma Awards 2025, EchoShield ANC captures ambient acoustic noise through high-sensitivity MAX9814 microphones, processes soundwaves using Least Mean Squares (LMS) adaptive filters on an ESP32 microcontroller, and generates an exact anti-phase cancellation signal delivered through a PAM8403 power amplifier.",
    tags: ["Embedded Systems", "LMS Algorithm", "Arduino FFT", "Acoustics", "ESP32", "DSP"],
    technologies: ["ESP32", "MAX9814 Mic", "PAM8403 Amp", "C++", "Arduino IDE", "Digital Signal Processing"],
    highlights: [
      "Selected as National Finalist at Vishwakarma Awards 2025.",
      "Real-time anti-noise phase generation with low-latency DSP computation on ESP32.",
      "Designed for factory floor acoustic safety compliance and heavy-machinery worker protection."
    ],
    github: "https://github.com/02bhaskar",
    demo: "#",
    status: "Vishwakarma Awards '25 Finalist"
  },
  {
    id: "agrosmart",
    title: "AgroSmart",
    subtitle: "AI-Powered Smart Agriculture Advisory Platform",
    category: "Web & AI",
    featured: true,
    fileBadge: "AgroSmart.jsx",
    description: "A full-stack agricultural decision support platform providing predictive crop recommendations, soil health advisories, and weather insights to empower farmers with data-driven yield optimization.",
    longDescription: "AgroSmart bridges agricultural science and accessible web technology. Farmers can input soil N-P-K levels, regional climate telemetry, and historical crop performance to receive personalized recommendations. Built with an intuitive, accessible user interface suitable for rural access.",
    tags: ["Full-Stack", "Machine Learning", "Node.js", "MongoDB", "AgriTech"],
    technologies: ["HTML5", "CSS3", "JavaScript", "Node.js", "Express.js", "MongoDB"],
    highlights: [
      "AI-driven recommendation engine tailored for crop health and fertilizer optimization.",
      "Secure backend architecture with MongoDB for persistent agronomic records.",
      "Responsive, clean UI designed for low-bandwidth rural network conditions."
    ],
    github: "https://github.com/02bhaskar",
    demo: "#",
    status: "Deployed / Functional Web System"
  },
  {
    id: "redvolt",
    title: "RedVolt",
    subtitle: "Full-Stack EV Charging Station Management Platform",
    category: "Full-Stack Web",
    featured: true,
    fileBadge: "RedVolt.jsx",
    description: "A full-stack EV charging management platform designed to simplify charging station discovery, manage real-time slot bookings, and monitor station operations.",
    longDescription: "RedVolt is a full-stack EV charging management platform designed to simplify charging station management, monitor charging sessions, and provide an efficient digital experience for EV charging operations. Features an interactive Leaflet map for discovering stations by proximity and port type, an automated booking workflow for EV drivers, and administrative dashboards for station analytics and slot status.",
    tags: ["Full-Stack", "React", "Node.js", "Express", "MongoDB", "Leaflet Maps", "JWT"],
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Leaflet", "JWT Auth"],
    highlights: [
      "Interactive Leaflet geospatial mapping for real-time EV charging station discovery and navigation.",
      "Slot reservation and booking system supporting Ultra-Fast DC, Fast DC, and AC Type 2 ports.",
      "Secure JWT-based authentication with role-based access for drivers and station administrators.",
      "RESTful API backend powered by Express and Mongoose for live slot and charging session tracking."
    ],
    github: "https://github.com/02bhaskar/RedVolt",
    demo: "#",
    status: "Functional Full-Stack Platform"
  }
];

export const experienceData = [
  {
    role: "Software Development Intern",
    company: "DLK Software Solutions",
    location: "Chennai, Tamil Nadu",
    period: "Internship Exposure",
    type: "Internship",
    description: "Engaged in full-stack software development workflows, hands-on module engineering, API integration, and collaborative codebase version control.",
    highlights: [
      "Developed and tested full-stack software modules using modern web frameworks.",
      "Collaborated with senior engineers on backend integration and database query optimization.",
      "Practiced Agile sprint routines, code reviews, and Git version control."
    ]
  }
];

export const achievementsData = [
  {
    title: "Smart India Hackathon (SIH) 2026",
    organization: "Ministry of Education & AICTE, Government of India",
    year: "2026",
    category: "National Hackathon",
    badge: "National level participation",
    problemStatement: "AI-Based Smart Logistics and Accessibility Intelligence Platform for North Eastern Region (NER)",
    description: "National level participation under the official problem statement: \"AI-Based Smart Logistics and Accessibility Intelligence Platform for North Eastern Region (NER)\". Engineered resilient terrain routing, GIS analytics, and local-first logistics architecture."
  },
  {
    title: "Vishwakarma Awards 2025",
    organization: "Maker Bhavan Foundation & National Engineering Initiative",
    year: "2025",
    category: "Hardware Innovation",
    badge: "Finalist",
    description: "Selected as National Finalist for EchoShield ANC, an active acoustic noise cancellation device leveraging ESP32 DSP and LMS adaptive filtering algorithms."
  },
  {
    title: "NPTEL Certification – Human-Computer Interaction",
    organization: "IIIT Delhi & NPTEL / SWAYAM",
    year: "Certified",
    score: "Score: 80%",
    badge: "Elite Silver",
    description: "Completed rigorous academic certification on UI/UX psychology, cognitive ergonomics, interaction design models, and usability testing with an Elite Silver distinction."
  },
  {
    title: "NPTEL Certification – Social Networks",
    organization: "Indian Institute of Technology Madras (IIT Madras) & NPTEL",
    year: "Certified",
    score: "Score: 60%",
    badge: "Elite",
    description: "Certified with Elite distinction in graph theory, social contagion, network dynamics, information diffusion, and structural balance models by IIT Madras."
  }
];

export const workspaceFiles = [
  { id: "hero", name: "Hero.tsx", path: "src/Hero.tsx", icon: "React", lang: "typescript", modified: false },
  { id: "about", name: "About.md", path: "src/About.md", icon: "Markdown", lang: "markdown", modified: false },
  { id: "skills", name: "Skills.json", path: "src/Skills.json", icon: "Json", lang: "json", modified: false },
  { id: "projects", name: "Projects.ts", path: "src/Projects.ts", icon: "Code", lang: "typescript", modified: true },
  { id: "experience", name: "Experience.yml", path: "src/Experience.yml", icon: "Yaml", lang: "yaml", modified: false },
  { id: "resume", name: "Resume.pdf", path: "public/resume.pdf", icon: "FileText", lang: "pdf", modified: false },
  { id: "contact", name: "Contact.env", path: ".env.production", icon: "Settings", lang: "bash", modified: false }
];

