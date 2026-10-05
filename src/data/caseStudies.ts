
export type CaseStudy = {
  slug: string;
  number: string;
  name: string;
  category: string;
  year: string;
  tagline: string;
  description: string;
  role: string;
  duration: string;
  stack: string[];
  liveUrl?: string;
  githubUrl?: string;
  problem: string;
  approach: string;
  architecture: {
    name: string;
    description: string;
    technologies: string[];
  }[];
  technicalDetails: {
    title: string;
    description: string;
  }[];
  media: {
    src: string;
    alt: string;
    caption: string;
  }[];
  nextProject: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "repoguide",
    number: "01",
    name: "RepoGuide",
    category: "Developer Tool",
    year: "2026",
    tagline: "AI Contribution Copilot",
    description:
      "A developer tool designed to make open-source contribution discovery more focused, giving developers a clearer path from finding a repository to understanding where they can contribute.",
    role: "Product / Frontend / Full Stack",
    duration: "2026",
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "Express",
      "GitHub API",
      "Groq",
    ],
    problem:
      "Finding a useful open-source issue is often harder than writing the code itself. Developers have to search through repositories, understand project context, filter issues by difficulty, and decide whether an issue is actually suitable for them.",
    approach:
      "RepoGuide brings that discovery process into a focused workflow. Repository information comes from GitHub, project data is organized around contribution difficulty, and an AI layer helps turn repository context into a more understandable starting point for contributors.",
    architecture: [
      {
        name: "Client",
        description:
          "A responsive Next.js application responsible for the product interface, project discovery, filtering, and contribution workflow.",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
      },
      {
        name: "Application Server",
        description:
          "An Express backend handles application-specific server logic and communication between the client, external services, and persistence layer.",
        technologies: ["Node.js", "Express", "TypeScript"],
      },
      {
        name: "Data Layer",
        description:
          "Supabase provides the persistence and authentication layer used by the application.",
        technologies: ["Supabase", "PostgreSQL"],
      },
      {
        name: "External Services",
        description:
          "GitHub provides repository and issue information while the AI layer processes relevant project context.",
        technologies: ["GitHub API", "Groq"],
      },
    ],
    technicalDetails: [
      {
        title: "Repository discovery",
        description:
          "GitHub data is transformed into a focused discovery experience instead of exposing developers to the full complexity of GitHub search.",
      },
      {
        title: "Difficulty filtering",
        description:
          "Repositories and issues are organized around contribution difficulty so developers can narrow the search to work that matches their current experience.",
      },
      {
        title: "AI assistance",
        description:
          "The AI layer uses project context to help explain contribution opportunities and reduce the amount of manual investigation required before starting.",
      },
      {
        title: "Product architecture",
        description:
          "The application separates the frontend, backend, persistence, external APIs, and AI services so each part can evolve independently.",
      },
    ],
    media: [
      {
        src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1800&q=85",
        alt: "Developer workspace with laptop and code",
        caption: "RepoGuide / Developer workflow",
      },
      {
        src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1800&q=85",
        alt: "Programming code displayed on a screen",
        caption: "Repository discovery",
      },
      {
        src: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1800&q=85",
        alt: "Computer hardware and electronic components",
        caption: "Technical architecture",
      },
      {
        src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1800&q=85",
        alt: "Team collaborating around computers",
        caption: "Building for open-source contributors",
      },
    ],
    nextProject: "kodxcamp",
  },
  {
    slug: "kodxcamp",
    number: "02",
    name: "KodxCamp",
    category: "EdTech Platform",
    year: "2026",
    tagline: "Learn by Building",
    description:
      "A browser-first programming platform combining interactive lessons, coding practice, projects, progress tracking, and live learning.",
    role: "Product / Engineering",
    duration: "2026",
    stack: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Monaco",
      "Node.js",
      "Express",
    ],
    problem:
      "Programming education often separates explanation, practice, projects, and feedback across different tools. KodxCamp is designed around keeping the learning loop inside one browser-first environment.",
    approach:
      "The platform combines structured lessons, browser-based code execution, practice problems, projects, progress tracking, and course experiences into one learning system.",
    architecture: [
      {
        name: "Client",
        description:
          "A React and TypeScript application provides the course experience, coding environment, project interface, and student dashboard.",
        technologies: ["React", "TypeScript", "Vite", "Tailwind CSS"],
      },
      {
        name: "Code Environment",
        description:
          "Monaco provides the editor experience while browser-side runtimes handle supported programming languages.",
        technologies: ["Monaco", "Web Workers", "Pyodide", "WebAssembly"],
      },
      {
        name: "Server",
        description:
          "The Node.js and Express backend handles application data, authentication, courses, problems, submissions, and progress.",
        technologies: ["Node.js", "Express", "TypeScript"],
      },
    ],
    technicalDetails: [
      {
        title: "Browser-first execution",
        description:
          "The platform is designed around running supported programming experiences directly in the browser where possible.",
      },
      {
        title: "Learning progression",
        description:
          "Courses, lessons, problems, projects, completion state, and XP are connected into a continuous learning experience.",
      },
      {
        title: "Editor experience",
        description:
          "Monaco provides a familiar development environment without forcing students to leave the learning platform.",
      },
    ],
    media: [
      {
        src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1800&q=85",
        alt: "Laptop used for online learning",
        caption: "KodxCamp / Learning experience",
      },
      {
        src: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1800&q=85",
        alt: "Digital learning and computer workspace",
        caption: "Student dashboard",
      },
      {
        src: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1800&q=85",
        alt: "Code displayed on a developer's screen",
        caption: "Browser-based coding",
      },
      {
        src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1800&q=85",
        alt: "Students collaborating on a project",
        caption: "Learning by building",
      },
    ],
    nextProject: "repoguide",
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((caseStudy) => caseStudy.slug === slug);
}
