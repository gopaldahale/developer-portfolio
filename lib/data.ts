export interface DemoSlide {
  type: "image" | "iframe";
  src: string;
  alt?: string;
  caption?: string;
}

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  tech: string[];
  features: string[];
  liveUrl: string;
  githubUrl: string;
  category: string;
  featured: boolean;
  gradient: string;
  icon: string;
  /** Carousel slides for the Live Demo modal. Add image paths or iframe URLs when ready. */
  demoSlides?: DemoSlide[];
}

export const projects: Project[] = [
  {
    slug: "vrc-dashboard",
    title: "VRC",
    subtitle: "Admin Dashboard & Game Setup UI",
    description:
      "A fully functional admin dashboard and multi-step game configuration UI built with React, TypeScript, and shadcn/ui following component-driven architecture.",
    longDescription:
      "Built a production admin dashboard and complex multi-step game configuration flows for VRC. Architected a reusable UI component library on shadcn/ui — inputs, dropdowns, toggles, and more — ensuring consistent, accessible components across the dashboard. Managed async API submissions and multi-step form state with React, collaborating via Git feature branches, pull requests, and code reviews.",
    tech: [
      "React.js",
      "TypeScript",
      "Redux Toolkit",
      "shadcn/ui",
      "Tailwind CSS",
      "Git",
    ],
    features: [
      "Admin dashboard with complex data tables and modals",
      "Multi-step game configuration forms",
      "Reusable shadcn/ui component library",
      "Async API integration with robust state handling",
      "Component-driven, type-safe architecture",
      "Git workflow with PRs and code reviews",
    ],
    liveUrl: "#",
    githubUrl: "#",
    category: "Dashboard",
    featured: true,
    gradient: "from-fuchsia-600/20 to-purple-600/20",
    icon: "🎮",
    // Add slides when ready, e.g.:
    // demoSlides: [
    //   { type: "image", src: "/demos/vrc-dashboard.png", alt: "Admin dashboard" },
    //   { type: "iframe", src: "https://your-demo-url.com", alt: "Live preview" },
    // ],
    demoSlides: [],
  },
  {
    slug: "netarx",
    title: "Netarx",
    subtitle: "Client Portfolio Website",
    description:
      "Contributed to client portfolio websites on Next.js with Contentful CMS, achieving Lighthouse performance scores of 99–100 through SEO and caching optimizations.",
    longDescription:
      "Contributed to frontend development of client portfolio websites built on Next.js with Contentful as a headless CMS for dynamic content management. Implemented SEO best practices, API caching, and lazy loading to achieve Lighthouse performance scores of 99–100. Built reusable page components and content-driven layouts integrated with Contentful APIs for flexible, editor-friendly updates.",
    tech: [
      "Next.js",
      "React.js",
      "Tailwind CSS",
      "Contentful CMS",
      "Vercel Blob",
    ],
    features: [
      "Next.js with Contentful headless CMS integration",
      "SEO best practices and metadata optimization",
      "API caching and lazy loading for performance",
      "Lighthouse scores of 99–100",
      "Reusable, content-driven page layouts",
      "Deployed on Vercel with blob asset storage",
    ],
    liveUrl: "#",
    githubUrl: "#",
    category: "Client Site",
    featured: true,
    gradient: "from-cyan-600/20 to-blue-600/20",
    icon: "🌐",
    demoSlides: [],
  },
  {
    slug: "mailpilot",
    title: "MailPilot",
    subtitle: "AI-Powered Outlook Email Assistant",
    description:
      "Full-stack AI email assistant using React, Redux Toolkit, NestJS, and PostgreSQL — integrating Microsoft Graph API and Gemini AI for smart email workflows.",
    longDescription:
      "Built a full-stack AI-powered Outlook email assistant using React.js, Redux Toolkit, NestJS, Prisma, and PostgreSQL, improving email workflow automation by 70%. Integrated Microsoft Graph API with secure OAuth 2.0 for email retrieval, search, and sending. Developed conversational AI features with Gemini APIs for summarization, smart replies, and contextual search. Architected a scalable mono-repo SaaS system with modular backend services and clean architecture practices.",
    tech: [
      "React.js",
      "Redux Toolkit",
      "NestJS",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Microsoft Graph API",
      "Gemini AI",
    ],
    features: [
      "Microsoft Graph API with OAuth 2.0 authentication",
      "AI email summarization and smart replies via Gemini",
      "70% improvement in email workflow automation",
      "NestJS backend with Prisma and PostgreSQL",
      "Scalable mono-repo SaaS architecture",
      "Modular services with validation and security middleware",
    ],
    liveUrl: "#",
    githubUrl: "#",
    category: "SaaS",
    featured: true,
    gradient: "from-violet-600/20 to-indigo-600/20",
    icon: "✉️",
    demoSlides: [],
  },
  {
    slug: "healthdesk",
    title: "HealthDesk",
    subtitle: "Doctor Appointment Booking System",
    description:
      "MERN-based healthcare platform for patient registration, doctor search by specialization, and appointment booking with role-based dashboards.",
    longDescription:
      "Developed the frontend of a MERN-based healthcare platform enabling patient registration, doctor search by specialization, and appointment booking. Implemented role-based dashboards for Patient, Doctor, and Admin with JWT authentication and protected routes. Built Doctor and Admin panels for managing appointments, approving registrations, and monitoring platform activity, with a responsive UI using Tailwind CSS.",
    tech: [
      "React.js",
      "Context API",
      "Tailwind CSS",
      "JavaScript",
      "Node.js",
      "MongoDB",
      "JWT",
      "Axios",
    ],
    features: [
      "Patient registration and doctor search by specialization",
      "Appointment booking and management flows",
      "Role-based dashboards: Patient, Doctor, Admin",
      "JWT authentication with protected routes",
      "Doctor and Admin approval workflows",
      "REST API integration with Axios",
    ],
    liveUrl: "#",
    githubUrl: "#",
    category: "Full Stack",
    featured: true,
    gradient: "from-emerald-600/20 to-teal-600/20",
    icon: "🏥",
    demoSlides: [],
  },
];

export interface SkillCategory {
  name: string;
  skills: { name: string; level: number }[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    skills: [
      { name: "JavaScript (ES6+)", level: 92 },
      { name: "TypeScript", level: 88 },
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 90 },
    ],
  },
  {
    name: "Frontend",
    skills: [
      { name: "React.js", level: 95 },
      { name: "Next.js", level: 88 },
      { name: "Redux Toolkit", level: 88 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Bootstrap", level: 85 },
    ],
  },
  {
    name: "Tools & APIs",
    skills: [
      { name: "REST APIs", level: 90 },
      { name: "React Query", level: 82 },
      { name: "Git / GitHub", level: 90 },
      { name: "Postman", level: 85 },
      { name: "Figma", level: 78 },
    ],
  },
  {
    name: "Backend (Familiar)",
    skills: [
      { name: "Node.js", level: 72 },
      { name: "NestJS", level: 68 },
      { name: "PostgreSQL", level: 70 },
      { name: "MongoDB", level: 68 },
      { name: "Prisma", level: 65 },
    ],
  },
];

export const techPills = [
  "shadcn/ui",
  "React Query",
  "Contentful",
  "Vercel",
  "Railway",
  "Supabase",
  "NestJS",
  "Postman",
  "Chrome DevTools",
  "OpenAI API",
  "Microsoft Graph API",
  "React Router",
];

export interface ExperienceItem {
  role: string;
  company: string;
  duration: string;
  type: string;
  location: string;
  contributions: string[];
}

export const experience: ExperienceItem[] = [
  {
    role: "Frontend Developer",
    company: "TruPerformance Inc.",
    duration: "Aug 2023 – Present",
    type: "Full-time",
    location: "Remote",
    contributions: [
      "Developed responsive, scalable web applications using React.js, Next.js, TypeScript, and Tailwind CSS across multiple client projects",
      "Built reusable UI component libraries and complex multi-step forms, integrating REST APIs with Redux Toolkit",
      "Optimized frontend performance through SEO, API caching, and lazy loading — achieving near-perfect Core Web Vitals scores",
      "Collaborated with designers and backend teams in Agile workflows using Git and GitHub for feature branching and code reviews",
    ],
  },
];

export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  location: string;
  duration: string;
  cgpa: string;
}

export const education: EducationItem[] = [
  {
    degree: "Bachelor of Technology (B.Tech)",
    field: "Mechanical Engineering",
    institution:
      "Deogiri Institute of Engineering and Management Studies, Aurangabad",
    location: "Aurangabad",
    duration: "July 2017 – September 2021",
    cgpa: "8.59",
  },
];

export const certifications = [
  {
    name: "The Complete 2023 Web Development Bootcamp",
    issuer: "Udemy",
    year: "2023",
  },
  {
    name: "Rising Star Award",
    issuer: "TruPerformance Inc.",
    year: "Q2 2024",
  },
];
