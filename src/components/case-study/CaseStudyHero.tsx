import Link from "next/link";
import type { CaseStudy } from "@/data/caseStudies";

type CaseStudyHeroProps = {
  project: CaseStudy;
};

export default function CaseStudyHero({
  project,
}: CaseStudyHeroProps) {
  return (
    <section className="relative min-h-[90vh] overflow-hidden px-5 pb-16 pt-32 md:px-10 md:pb-20 md:pt-40">
      <div className="mx-auto flex min-h-[70vh] w-full max-w-[1440px] flex-col justify-between">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="font-mono text-[10px] uppercase tracking-[0.14em] text-text-muted transition-colors hover:text-text-primary"
          >
            ← Back to portfolio
          </Link>

          <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-text-muted">
            {project.number} / {project.category}
          </span>
        </div>

        <div className="mt-24">
          <p className="mb-6 font-mono text-[10px] uppercase tracking-[0.14em] text-accent">
            {project.tagline}
          </p>

          <h1 className="max-w-[1200px] text-[clamp(4.5rem,13vw,13rem)] font-medium uppercase leading-[0.78] tracking-[-0.08em]">
            {project.name}
          </h1>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-12 md:items-end">
            <p className="max-w-[620px] text-lg leading-relaxed text-text-muted md:col-span-7 md:text-xl">
              {project.description}
            </p>

            <div className="md:col-span-3 md:col-start-10">
              <p className="font-mono text-[9px] uppercase leading-relaxed tracking-[0.12em] text-text-muted">
                A product case study
                <br />
                {project.year}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20 h-px w-full bg-border" />
      </div>
    </section>
  );
}