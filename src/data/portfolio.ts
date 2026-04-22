export type ExperienceItem = {
  company: string;
  role: string;
  location: string;
  start: string;
  end: string;
  years: number[];
  technologies: string[];
  highlights: string[];
};

export type ProjectItem = {
  title: string;
  summary: string;
  impact: string;
  stack: string[];
  theme: "light" | "mid" | "dark";
};

export const profile = {
  name: "Aastha Kumar",
  title: "UI/UX-minded Senior Frontend Engineer",
  subtitle:
    "Crafting cinematic product journeys, intelligent interfaces, and design-led frontend systems for ambitious digital brands.",
  location: "Cramlington, UK",
  email: "aasthakumar2909@gmail.com",
  phone: "+44 7586 209339",
  availability: "Open to remote, hybrid, and visa-sponsored opportunities",
  summary: [
    "Senior Frontend Engineer with 8 years of experience designing and delivering scalable, high-performance web applications across frontend and backend systems.",
    "Deep expertise in React, TypeScript, and Node.js, with a strong record of leading end-to-end feature development, shaping UI architecture, and mentoring engineering teams in enterprise environments.",
    "Experienced in AI-driven interfaces, modern framework adoption, and cloud-minded delivery for products that need both visual craft and engineering rigor."
  ],
  heroTags: [
    "AI product interfaces",
    "Motion-rich experiences",
    "Scalable design systems",
    "Enterprise frontend architecture"
  ],
  socials: [
    {
      label: "Email",
      href: "mailto:aasthakumar2909@gmail.com"
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/aastha-kumar/"
    },
    {
      label: "GitHub",
      href: "https://github.com/aasthakumar96"
    },
    {
      label: "Portfolio",
      href: "https://aasthakumar-portfolio.netlify.app/"
    }
  ]
};

export const skillGroups = [
  {
    title: "Frontend Systems",
    value: 96,
    items: ["React", "TypeScript", "Next.js", "Redux", "Zustand", "Tailwind CSS"]
  },
  {
    title: "Motion + UX Craft",
    value: 91,
    items: ["Framer Motion", "Atomic Design", "Accessibility", "Interaction Design"]
  },
  {
    title: "Backend + APIs",
    value: 84,
    items: ["Node.js", "Express", "REST APIs", "Architecture"]
  },
  {
    title: "Delivery Leadership",
    value: 89,
    items: ["Mentoring", "CI/CD", "Agile", "Figma", "Jira", "Confluence"]
  }
];

export const experiences: ExperienceItem[] = [
  {
    company: "Sage Group PLC",
    role: "Senior Developer",
    location: "Newcastle, UK",
    start: "Feb 2025",
    end: "Present",
    years: [2026, 2025],
    technologies: ["React", "Redux", "Node.js", "TypeScript", "Next.js"],
    highlights: [
      "Led the Product Catalogue Admin UI to improve internal workflow efficiency across product teams.",
      "Architected Sage AI Hub for scalable AI feature integration across the portfolio.",
      "Delivered Sage Nexus, a governed Next.js framework for enterprise AI solutions.",
      "Mentored junior engineers through code reviews, pairing, and onboarding support."
    ]
  },
  {
    company: "Sage Group PLC",
    role: "React Developer",
    location: "Newcastle, UK",
    start: "Jan 2023",
    end: "Jan 2025",
    years: [2025, 2024, 2023],
    technologies: ["React", "Atomic Design", "Accessibility", "Design Systems"],
    highlights: [
      "Led frontend delivery for enterprise applications serving tens of thousands of users.",
      "Owned the redesign and revamp of Sage.com with stronger component consistency and maintainability.",
      "Established shared component standards adopted across multiple product teams.",
      "Mentored junior developers and reinforced engineering best practices through reviews."
    ]
  },
  {
    company: "Adobe",
    role: "Software Engineer II",
    location: "Noida, India",
    start: "Feb 2021",
    end: "Dec 2023",
    years: [2023, 2022, 2021],
    technologies: ["React", "Electron", "Analytics", "Migration Strategy"],
    highlights: [
      "Led migration from Angular to React across internal services to improve performance and maintainability.",
      "Built a cross-platform React + Electron app for build distribution.",
      "Created an analytics dashboard that reduced mean time to detection for build failures.",
      "Designed tooling that replaced manual product configuration workflows."
    ]
  },
  {
    company: "Adobe",
    role: "Software Engineer",
    location: "Noida, India",
    start: "Jul 2018",
    end: "Jan 2021",
    years: [2021, 2020, 2019, 2018],
    technologies: ["React", "Node.js", "Express", "MEAN Stack", "Testing Tools"],
    highlights: [
      "Built UI features for Adobe Creative Cloud experiences used by millions of end users.",
      "Developed REST APIs with Node.js and Express across multiple product teams.",
      "Delivered end-to-end features within Agile cycles while maintaining code quality.",
      "Created internal automation tools that reduced manual QA effort."
    ]
  }
];

export const timelineYears = [2026, 2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018];

export const projects: ProjectItem[] = [
  {
    title: "Sage AI Hub",
    summary: "A scalable React and TypeScript foundation for AI-driven product experiences across the Sage ecosystem.",
    impact: "Unified the way teams ship governed AI features and accelerated internal product delivery.",
    stack: ["React", "TypeScript", "Design Systems", "AI UX"],
    theme: "light"
  },
  {
    title: "Sage.com Redesign",
    summary: "A full React-led revamp of the public web experience using atomic design principles and shared components.",
    impact: "Improved consistency, maintainability, and the long-term health of the frontend platform.",
    stack: ["React", "Atomic Design", "Accessibility", "Component Systems"],
    theme: "mid"
  },
  {
    title: "Adobe Build Analytics",
    summary: "An internal dashboard and desktop tooling suite for release visibility, distribution, and operational insight.",
    impact: "Reduced time-to-detection for failures and streamlined release operations for engineering teams.",
    stack: ["React", "Electron", "Node.js", "Analytics UX"],
    theme: "dark"
  }
];

export const education = {
  degree: "Bachelor of Technology, Computer Science",
  period: "2014 – 2018",
  institution: "North Cap University, Gurugram, India"
};
