import { Home, Code2, Briefcase, FolderGit2, Mail } from "lucide-react";

export const PROFILE = {
  name: "Rahul Birdi",
  role: "React Native Developer",
  location: "Mohali, Punjab",
  phone: "+91 8146956870",
  email: "rahulbirdi75@gmail.com",
  github: "https://github.com/rahulbirdi",
  linkedin: "https://www.linkedin.com/in/rahul-birdi-196b70317",
  summary:
    "React Native developer with hands-on experience building responsive Android applications. Skilled in working with REST APIs and third-party libraries, and writing clean, maintainable code. Comfortable working across the mobile development lifecycle and collaborating with a team to build user-friendly apps.",
};

export const NAV_SECTIONS = [
  { id: "hero", label: "Home", icon: Home },
  { id: "skills", label: "Skills", icon: Code2 },
  { id: "experience", label: "Work", icon: Briefcase },
  { id: "projects", label: "Projects", icon: FolderGit2 },
  { id: "contact", label: "Contact", icon: Mail },
];

export const SKILL_GROUPS = [
  {
    title: "Mobile Development",
    pkgs: ["react", "react-native", "cli", "typescript", "javascript@es6+", "3rd-party-libs"],
  },
  {
    title: "Navigation & State",
    pkgs: ["react-navigation", "@reduxjs/toolkit"],
  },
  {
    title: "Backend & Data",
    pkgs: ["firebase/auth", "firebase/firestore", "rest-api", "mmkv", "async-storage"],
  },
  {
    title: "Workflow",
    pkgs: ["git", "github", "ai-api-integration"],
  },
];

export const EXPERIENCE = {
  title: "Mobile App Development Training",
  dates: "Jan 2026 – Jul 2026",
  org: "Meander · Mohali, Punjab",
  bullets: [
    "Worked with the team to build Android mobile apps using React Native and TypeScript.",
    "Built app screens and connected them with backend APIs and Firebase.",
    "Managed app data and state using AsyncStorage and Redux Toolkit.",
    "Learned the full process of building and publishing an app to the Play Store.",
  ],
};

export const PROJECTS = [
  {
    name: "ManifestAI",
    tagline: "AI Chrome Extension Generator",
    url: "https://github.com/rahulbirdi/ManifestAI",
    bullets: [
      "Full-stack platform that generates complete, production-ready Chrome extension code packages from natural language prompts.",
      "Interactive workspace supporting real-time code rendering, custom blueprints, and extension management workflows.",
      "Cut extension build time from hours to seconds by automating manifest generation, script linking, and asset structuring.",
    ],
    tech: ["react", "ai-api", "code-gen", "full-stack"],
  },
  {
    name: "CopePod",
    tagline: "Mobile Streaming App",
    url: "https://github.com/rahulbirdi/CopePod",
    bullets: [
      "React Native CLI streaming app with smooth navigation between screens.",
      "Tuned for fast, uninterrupted video playback.",
      "Redux Toolkit + JWT login to support multiple user profiles.",
      "Connected to REST APIs and third-party libraries for extended features.",
    ],
    tech: ["react-native-cli", "redux-toolkit", "jwt-auth", "rest-api"],
  },
];

export const EDUCATION = {
  degree: "B.Tech, Computer Science & Engineering",
  org: "Rayat Bahra Institute of Engineering & Nano Technology (RBIENT) · 2022 – 2026",
  cgpa: "8.21 / 10",
};

export const CERTS = [
  {
    title: "Data Science Methodology",
    org: "CognitiveClass.Ai — provided by IBM",
  },
  {
    title: "GenAI Job Simulation",
    org: "Forage — BCG X",
  },
  {
    title: "Head Coordinator",
    org: "Cultural & Sports Events — Leadership",
  },
];
