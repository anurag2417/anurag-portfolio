export type Project = {
  id: string;
  number: string;
  name: string;
  tagline: string;
  description: string;
  year: string;
  category: string;
  stack: string[];
  slug: string;
};

export const projects: Project[] = [
  {
    id: "repoguide",
    number: "01",
    name: "RepoGuide",
    tagline: "AI Contribution Copilot",
    description:
      "A developer tool designed to make open-source contribution discovery more focused.",
    year: "2026",
    category: "Developer Tool",
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind",
      "Supabase",
      "Express",
      "GitHub API",
    ],
    slug: "repoguide",
  },
  {
    id: "kodxcamp",
    number: "02",
    name: "KodxCamp",
    tagline: "Learn by Building",
    description:
      "A browser-first programming platform built around courses, practice, projects, and feedback.",
    year: "2026",
    category: "EdTech Platform",
    stack: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind",
      "Monaco",
      "Node.js",
      "Express",
    ],
    slug: "kodxcamp",
  },
];