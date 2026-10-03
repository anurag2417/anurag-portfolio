import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CaseStudyHero from "@/components/case-study/CaseStudyHero";
import ProjectMeta from "@/components/case-study/ProjectMeta";
import ProjectSection from "@/components/case-study/ProjectSection";
import Architecture from "@/components/case-study/Architecture";
import ProjectMedia from "@/components/case-study/ProjectMedia";
import NextProject from "@/components/case-study/NextProject";
import { caseStudies, getCaseStudy } from "@/data/caseStudies";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return caseStudies.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getCaseStudy(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.name} | Anurag`,
    description: project.description,
  };
}

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;
  const project = getCaseStudy(slug);

  if (!project) {
    notFound();
  }

  return (
    <main>
      <CaseStudyHero project={project} />

      <ProjectMeta project={project} />

      <ProjectSection
        number="01"
        label="The Problem"
        title="The starting point."
      >
        <p className="max-w-[850px] text-xl leading-relaxed text-text-muted md:text-2xl md:leading-relaxed">
          {project.problem}
        </p>
      </ProjectSection>

      <ProjectSection
        number="02"
        label="The Approach"
        title="Turning the idea into a product."
      >
        <p className="max-w-[850px] text-xl leading-relaxed text-text-muted md:text-2xl md:leading-relaxed">
          {project.approach}
        </p>
      </ProjectSection>

      <section className="border-b border-border px-5 py-16 md:px-10 md:py-24">
        <div className="mx-auto w-full max-w-[1440px]">
          <ProjectMedia />
        </div>
      </section>

      <ProjectSection
        number="03"
        label="Architecture"
        title="How the product is put together."
      >
        <Architecture architecture={project.architecture} />
      </ProjectSection>

      <ProjectSection
        number="04"
        label="Technical Details"
        title="The details behind the experience."
      >
        <div className="grid grid-cols-1 gap-px border border-border bg-border md:grid-cols-2">
          {project.technicalDetails.map((detail, index) => (
            <article
              key={detail.title}
              className="bg-background p-6 md:p-8"
            >
              <span className="font-mono text-[9px] text-accent">
                0{index + 1}
              </span>

              <h3 className="mt-6 text-2xl font-medium tracking-[-0.04em]">
                {detail.title}
              </h3>

              <p className="mt-4 text-sm leading-relaxed text-text-muted">
                {detail.description}
              </p>
            </article>
          ))}
        </div>
      </ProjectSection>

      <NextProject slug={project.nextProject} />
    </main>
  );
}