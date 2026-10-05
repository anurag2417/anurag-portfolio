
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
  heroImage: string;
};

export const projects: Project[] = [
  {
    id: "repoguide",
    number: "01",
    name: "RepoGuide",
    tagline: "AI Contribution Copilot",
    description:
      "A developer tool that helps people discover relevant open-source issues and turn contribution ideas into an actionable starting point.",
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
    heroImage:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1800&q=85",
  },
  {
    id: "kodxcamp",
    number: "02",
    name: "KodxCamp",
    tagline: "Learn by Building",
    description:
      "A browser-first programming platform combining interactive lessons, coding practice, projects, progress tracking, and live learning.",
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
    heroImage:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1800&q=85",
  },
];
