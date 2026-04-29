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
}

export const projects: Project[] = [
  {
    slug: "healthdesk",
    title: "HealthDesk",
    subtitle: "Doctor Appointment Booking System",
    description:
      "A full-stack MERN healthcare platform enabling patient registration, doctor search by specialization, and appointment booking with role-based dashboards.",
    longDescription:
      "HealthDesk is a comprehensive healthcare management platform built on the MERN stack. It provides a seamless experience for patients to find doctors by specialization, book appointments, and manage their health records. Doctors can manage their schedules, approve or reject appointments, and view patient details. Admins have full oversight of the platform including approval workflows and analytics.",
    tech: [
      "React JS",
      "Node.js",
      "MongoDB",
      "Express",
      "JWT Auth",
      "Redux Toolkit",
      "Tailwind CSS",
      "Axios",
    ],
    features: [
      "Patient registration and profile management",
      "Doctor search by specialization and availability",
      "Real-time appointment booking and management",
      "Role-based dashboards for Patient, Doctor, and Admin",
      "JWT authentication with protected routes",
      "Admin panel for platform monitoring and approvals",
    ],
    liveUrl: "#",
    githubUrl: "#",
    category: "Full Stack",
    featured: true,
    gradient: "from-violet-600/20 to-cyan-600/20",
    icon: "🏥",
  },
  {
    slug: "vrc-dashboard",
    title: "VRC Admin Dashboard",
    subtitle: "Game Setup & Configuration UI",
    description:
      "A fully functional admin dashboard and game configuration UI built with React JS, TypeScript, and Redux Toolkit for complex multi-step game setup flows.",
    longDescription:
      "The VRC (Very Rich Challenge) Admin Dashboard is a sophisticated game management platform built with a component-driven architecture. It features complex multi-step game configuration workflows, centralized state management with Redux Toolkit, and a library of reusable, type-safe UI components. The dashboard handles intricate data flows across multiple game setup stages.",
    tech: [
      "React JS",
      "TypeScript",
      "Redux Toolkit",
      "Tailwind CSS",
      "Git",
      "GitHub",
    ],
    features: [
      "Multi-step game configuration forms",
      "Centralized Redux Toolkit state management",
      "Reusable type-safe component library",
      "Responsive admin dashboard layout",
      "Complex data tables, modals, and drawers",
      "Feature branch Git workflow with PR reviews",
    ],
    liveUrl: "#",
    githubUrl: "#",
    category: "Dashboard",
    featured: true,
    gradient: "from-fuchsia-600/20 to-purple-600/20",
    icon: "🎮",
  },
  {
    slug: "react-component-library",
    title: "React UI Library",
    subtitle: "Reusable Component System",
    description:
      "A production-ready library of accessible React components built with TypeScript and Tailwind CSS, designed for rapid enterprise application development.",
    longDescription:
      "A carefully crafted component library designed for enterprise-grade applications. Each component follows accessibility best practices (WCAG 2.1), supports dark/light theming, and is fully typed with TypeScript. Includes form elements, data display components, navigation, and layout primitives—all with comprehensive documentation.",
    tech: ["React JS", "TypeScript", "Tailwind CSS", "CSS Modules", "Rollup"],
    features: [
      "Accessible components following WCAG 2.1 standards",
      "Full TypeScript support with strict types",
      "Dark and light theme variants",
      "Comprehensive component documentation",
      "Tree-shakeable exports for optimal bundle size",
      "Animated micro-interactions and transitions",
    ],
    liveUrl: "#",
    githubUrl: "#",
    category: "Library",
    featured: true,
    gradient: "from-emerald-600/20 to-teal-600/20",
    icon: "🧩",
  },
];

export interface SkillCategory {
  name: string;
  skills: { name: string; level: number }[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    skills: [
      { name: "React JS", level: 95 },
      { name: "JavaScript (ES6+)", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 90 },
    ],
  },
  {
    name: "Styling",
    skills: [
      { name: "Tailwind CSS", level: 92 },
      { name: "Bootstrap", level: 85 },
      { name: "AOS", level: 78 },
      { name: "Swiper JS", level: 80 },
    ],
  },
  {
    name: "State & API",
    skills: [
      { name: "Redux Toolkit", level: 88 },
      { name: "Context API", level: 85 },
      { name: "REST APIs", level: 90 },
      { name: "Axios", level: 88 },
      { name: "JWT Auth", level: 82 },
    ],
  },
  {
    name: "Backend & Tools",
    skills: [
      { name: "Node JS", level: 72 },
      { name: "Express JS", level: 70 },
      { name: "MongoDB", level: 68 },
      { name: "Git / GitHub", level: 88 },
      { name: "Vercel", level: 85 },
    ],
  },
];

export const techPills = [
  "React JS",
  "TypeScript",
  "Tailwind CSS",
  "Redux Toolkit",
  "Node.js",
  "MongoDB",
  "REST APIs",
  "JWT Auth",
  "Git",
  "Vercel",
  "Next.js",
  "Express",
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
    role: "Front-End Engineer",
    company: "TruPerformance Inc.",
    duration: "Aug 2023 – Present",
    type: "Full-time",
    location: "Remote",
    contributions: [
      "Built pixel-perfect, cross-browser UIs with React JS and modern JavaScript",
      "Improved page load speed by 30% through Core Web Vitals optimization (LCP, FID, CLS)",
      "Developed reusable, modular components integrated with REST APIs",
      "Implemented responsive layouts using Tailwind CSS and Bootstrap",
      "Integrated third-party APIs and lead-capture forms for business automation",
      "Collaborated with design and back-end teams via Git & GitHub workflows",
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
    institution: "Deogiri Institute of Engineering and Management Studies",
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
