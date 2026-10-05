import type { CaseStudy } from "@/data/caseStudies";

type ProjectMetaProps = {
  project: CaseStudy;
};

export default function ProjectMeta({ project }: ProjectMetaProps) {
  return (
    <section className="border-y border-border px-5 md:px-10">
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-2 md:grid-cols-12">
        <div className="border-r border-border px-0 py-8 pr-5 md:col-span-3 md:py-10 md:pr-10">
          <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-text-muted">
            Role
          </p>

          <p className="mt-4 text-sm leading-relaxed text-text-primary">
            {project.role}
          </p>
        </div>

        <div className="border-r border-border px-5 py-8 md:col-span-2 md:py-10">
          <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-text-muted">
            Year
          </p>

          <p className="mt-4 text-sm text-text-primary">
            {project.year}
          </p>
        </div>

        <div className="col-span-2 px-0 py-8 md:col-span-7 md:px-10 md:py-10">
          <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-text-muted">
            Stack
          </p>

          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
            {project.stack.map((technology) => (
              <span
                key={technology}
                className="font-mono text-[9px] uppercase tracking-[0.1em] text-text-primary"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}