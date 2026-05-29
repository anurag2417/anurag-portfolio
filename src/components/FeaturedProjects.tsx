import Image from "next/image";
import FadeIn from "./FadeIn";

const projects = [
  {
    title: "FinanceFlow",
    description:
      "A multi-tenant SaaS debt and interest tracking platform that helps users manage lending, borrowing, automated interest calculations, reports, and financial analytics through a secure dashboard.",
    image: "/images/financeflow.png",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "Chart.js",
    ],
    liveUrl: "https://interest-calculator-app-khaki.vercel.app/login",
    githubUrl:
      "https://github.com/anurag2417/interest-calculator-app",
  },
  {
    title: "AlgoStreak",
    description:
      "A mentor-student coding consistency platform that enables group management, streak tracking, leaderboards, reports, and daily problem-solving accountability.",
    image: "/images/algostreak.png",
    technologies: [
      "Next.js",
      "Supabase",
      "TypeScript",
      "Tailwind",
      "React",
    ],
    liveUrl: "https://algostreak-black.vercel.app/",
    githubUrl:
      "https://github.com/anurag2417/algostreak-platform",
  },
];

export default function FeaturedProjects() {
  return (
    <section
      id="projects"
      className="max-w-7xl mx-auto px-6 py-40"
    >
      <div className="mb-24">
        <p className="text-gray-400 mb-4">
          Featured Work
        </p>

        <h2 className="text-5xl md:text-7xl font-bold">
          Projects I'm proud of.
        </h2>
      </div>

      <div className="space-y-20">
        {projects.map((project) => (
          <FadeIn key={project.title}>
            <div className="grid lg:grid-cols-2 gap-16 items-center border border-white/10 rounded-4xl p-8 md:p-12 hover:border-white/20 transition-all duration-300">
              <div>
                <Image
                  src={project.image}
                  alt={project.title}
                  width={1200}
                  height={800}
                  className="rounded-3xl"
                />
              </div>

              <div>
                <h3 className="text-4xl md:text-5xl font-bold mb-6">
                  {project.title}
                </h3>

                <p className="text-xl text-gray-400 leading-relaxed mb-8">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3 mb-10">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 border border-white/10 rounded-full text-sm text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-white text-black rounded-full font-medium hover:scale-105 active:scale-95 transition"
                  >
                    Live Demo
                  </a>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 border border-white/20 rounded-full hover:scale-105 active:scale-95 transition"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}