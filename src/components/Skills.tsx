import FadeIn from "./FadeIn";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
    ],
  },
  {
    title: "Backend",
    skills: [
      "Java",
      "Node.js",
      "Express.js",
      "REST APIs",
      "JWT Authentication",
    ],
  },
  {
    title: "Database",
    skills: [
      "MongoDB",
      "Supabase",
      "SQL",
      "MySQL",
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      "Git",
      "GitHub",
      "Vercel",
      "Postman",
      "VS Code",
      "DBeaver",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="max-w-7xl mx-auto px-6 py-40"
    >
      <div className="mb-24">
        <p className="text-gray-400 mb-4">
          Skills
        </p>

        <h2 className="text-5xl md:text-7xl font-bold">
          Technologies I work with.
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {skillCategories.map((category) => (
          <FadeIn key={category.title}>
            <div className="border border-white/10 rounded-3xl p-8 hover:border-white/20 hover:-translate-y-2 transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-8">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full border border-white/10 text-gray-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}