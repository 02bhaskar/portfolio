export const codeSnippets = {
  hero: `// src/Hero.tsx
import React from 'react';
import { Bot, Sparkles, Terminal } from 'lucide-react';

interface DeveloperProfile {
  name: string;
  role: string;
  education: string;
  location: string;
  focusAreas: string[];
  status: 'Open to Work' | 'In Project';
}

export const BhaskarProfile: DeveloperProfile = {
  name: "BHASKAR G",
  role: "Aspiring AI & Data Science Engineer | Full-Stack Developer",
  education: "B.Tech AI & Data Science (2024–2028) @ Dr. N.G.P. iTech, Coimbatore",
  location: "Coimbatore, Tamil Nadu, India",
  status: "Open to Work",
  focusAreas: [
    "Agentic AI & Generative AI",
    "Edge Hardware & Microcontrollers (ESP32 / LMS DSP)",
    "Full-Stack Web (React, Node.js, MongoDB)",
    "Mobile Applications (Flutter & Dart)"
  ]
};

export default function Hero() {
  return (
    <div className="hero-container font-mono">
      <h1>Hello, World! I'm {BhaskarProfile.name}</h1>
      <p>{BhaskarProfile.role}</p>
    </div>
  );
}`,

  about: `# About Me - Bhaskar G

## Academic Background
- **Degree:** B.Tech in Artificial Intelligence and Data Science (2024–2028)
- **Institution:** Dr. N.G.P. Institute of Technology, Coimbatore
- **Academic Status:** Pre-final Year (Class of 2028)
- **Location:** Coimbatore, Tamil Nadu, India

## My Journey & Passion
I am driven by the intersection of theoretical data science, software engineering, and real-world embedded hardware. 

My work spans from building smart web platforms that assist farmers, to coding low-latency digital signal processing algorithms on ESP32 microcontrollers to mitigate industrial acoustic hazards.

### Core Philosophy
1. Build scalable, human-centered software architectures.
2. Integrate Agentic AI and Autonomous Decision Systems.
3. Solve tactile, ground-level problems through hardware-software fusion.`,

  skills: `{
  "developer": "Bhaskar G",
  "specialization": "Artificial Intelligence & Data Science",
  "skills": {
    "languages": ["Python", "Java", "JavaScript", "Dart", "SQL", "C++"],
    "frontend": ["React.js", "Tailwind CSS", "HTML5", "CSS3"],
    "backend": ["Node.js", "Express.js", "REST APIs"],
    "databases": ["MongoDB", "SQL", "Firebase Firestore"],
    "ai_ml": ["Machine Learning", "Generative AI", "Agentic AI", "Reinforcement Learning"],
    "embedded_mobile": ["Flutter", "ESP32", "Arduino IDE", "Acoustic DSP"],
    "tools": ["Git", "GitHub", "VS Code", "Android Studio"]
  },
  "certifications": [
    {
      "title": "NPTEL Human-Computer Interaction",
      "grade": "Elite Silver (Score: 80%)",
      "authority": "IIIT Delhi / SWAYAM"
    },
    {
      "title": "NPTEL Social Networks",
      "grade": "Elite (Score: 60%)",
      "authority": "IIT Madras / SWAYAM"
    }
  ]
}`,

  projects: `// src/Projects.ts
import { Project } from './types';

export const FlagshipProjects: Project[] = [
  {
    title: "RoutingVanguard",
    category: "AI & Smart Logistics",
    stack: ["Python", "ML", "GIS", "React", "Node.js"],
    impact: "High-terrain route optimization using GIS & weather intelligence"
  },
  {
    title: "EchoShield ANC",
    category: "Hardware & Edge DSP",
    stack: ["ESP32", "MAX9814", "PAM8403", "LMS Algorithm", "Arduino FFT"],
    impact: "Industrial active noise cancellation honored at Vishwakarma Awards 2025"
  },
  {
    title: "AgroSmart",
    category: "Full-Stack AgriTech",
    stack: ["React", "Node.js", "MongoDB", "AI Engine"],
    impact: "AI-based crop and soil health recommendations for farmers"
  },
  {
    title: "RedVolt",
    category: "Full-Stack Web & EV Systems",
    stack: ["React", "Node.js", "Express", "MongoDB", "Leaflet"],
    impact: "Full-stack EV charging platform with real-time station discovery & slot booking"
  }
];`,

  experience: `# src/Experience.yml
experience:
  - role: "Software Development Intern"
    company: "DLK Software Solutions"
    location: "Chennai, Tamil Nadu"
    type: "Internship"
    technologies: ["Full-Stack", "Web Frameworks", "API Development", "Git"]

achievements:
  - title: "Smart India Hackathon (SIH) 2026"
    status: "National level participation"
    problem_statement: "AI-Based Smart Logistics and Accessibility Intelligence Platform for North Eastern Region (NER)"
    scope: "National Hackathon - Ministry of Education"
  
  - title: "Vishwakarma Awards 2025"
    status: "Finalist"
    project: "EchoShield ANC - Active Noise Cancellation"

  - title: "NPTEL HCI Certification"
    status: "Elite Silver (Score: 80%)"
    issuer: "IIIT Delhi & NPTEL"

  - title: "NPTEL Social Networks Certification"
    status: "Elite (Score: 60%)"
    issuer: "IIT Madras & NPTEL"`,

  contact: `# .env.production
DEVELOPER_NAME="BHASKAR G"
PRIMARY_EMAIL="bhaskar272006@gmail.com"
PRIMARY_PHONE="+91 9345614976"
GITHUB_PROFILE="https://github.com/02bhaskar"
LINKEDIN_PROFILE="https://www.linkedin.com/in/boss02"
CURRENT_LOCATION="Coimbatore, Tamil Nadu, India"
ACADEMIC_INSTITUTION="Dr. N.G.P. Institute of Technology"
CURRENT_STATUS="Available for Internships & AI/Data Science Roles"
`,

  resume: `// public/resume.pdf
// Binary Document: Bhaskar resume.pdf
// Use the "Download Resume" action button or view the interactive profile summary.
`
};

