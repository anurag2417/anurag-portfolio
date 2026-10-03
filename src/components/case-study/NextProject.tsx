import Link from "next/link";
import { getCaseStudy } from "@/data/caseStudies";

type NextProjectProps = {
  slug: string;
};

export default function NextProject({
  slug,
}: NextProjectProps) {
  const project = getCaseStudy(slug);

  if (!project) {
    return null;
  }

  return (
    <section className="px-5 py-28 md:px-10 md:py-40">
      <div className="mx-auto w-full max-w-[1440px]">
        <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-text-muted">
          Next project
        </p>

        <Link
          href={`/projects/${project.slug}`}
          data-cursor="view"
          className="group mt-8 block border-t border-border pt-8"
        >
          <div className="flex items-end justify-between gap-8">
            <div>
              <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-accent">
                {project.number}
              </span>

              <h2 className="mt-4 text-[clamp(4rem,10vw,10rem)] font-medium uppercase leading-[0.8] tracking-[-0.075em]">
                {project.name}
              </h2>

              <p className="mt-6 text-sm text-text-muted">
                {project.tagline}
              </p>
            </div>

            <span className="pb-3 text-3xl text-text-muted transition-all duration-500 group-hover:-translate-y-2 group-hover:translate-x-2 group-hover:text-accent">
              ↗
            </span>
          </div>
        </Link>
      </div>
    </section>
  );
}