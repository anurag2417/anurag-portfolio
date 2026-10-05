
"use client";

import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";

export default function SelectedWork() {
  return (
    <section
      id="work"
      className="border-t border-border px-5 py-24 md:px-10 md:py-36"
    >
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="mb-14 grid grid-cols-1 gap-6 md:mb-20 md:grid-cols-12">
          <div className="md:col-span-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-text-muted">
              02 / Selected Work
            </p>
          </div>

          <div className="md:col-span-8 md:col-start-5">
            <h2 className="text-5xl font-medium uppercase leading-[0.9] tracking-[-0.07em] md:text-7xl lg:text-8xl">
              Products I&apos;ve built.
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-relaxed text-text-muted md:text-base">
              A selection of products exploring developer tools, learning
              experiences, and useful applications of technology.
            </p>
          </div>
        </div>

        <div className="space-y-20 md:space-y-32">
          {projects.map((project, index) => (
            <article key={project.id} className="group">
              <Link
                href={`/projects/${project.slug}`}
                data-cursor="view"
                className="block"
                aria-label={`View ${project.name} case study`}
              >
                <div className="relative aspect-[4/3] overflow-hidden border border-border bg-surface md:aspect-[16/9]">
                  <Image
                    src={project.heroImage}
                    alt={`${project.name} project visual`}
                    fill
                    priority={index === 0}
                    sizes="(max-width: 768px) 100vw, 1400px"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />

                  <div className="absolute inset-0 bg-black/10 transition-colors duration-500 group-hover:bg-black/0" />

                  <div className="absolute left-4 top-4 flex items-center gap-3 border border-white/20 bg-black/50 px-3 py-2 backdrop-blur-sm md:left-7 md:top-7">
                    <span className="font-mono text-[9px] text-white/70">
                      {project.number}
                    </span>

                    <span className="h-1 w-1 rounded-full bg-[#FF4D1C]" />

                    <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-white">
                      {project.category}
                    </span>
                  </div>

                  <div className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/40 bg-black/40 text-xl text-white transition-colors duration-300 group-hover:bg-[#FF4D1C] md:bottom-7 md:right-7 md:h-14 md:w-14">
                    ↗
                  </div>
                </div>
              </Link>

              <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-12 md:items-start">
                <div className="md:col-span-7">
                  <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
                    <h3 className="text-3xl font-medium tracking-[-0.06em] md:text-5xl">
                      {project.name}
                    </h3>

                    <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-text-muted">
                      {project.year}
                    </span>
                  </div>

                  <p className="mt-2 text-sm text-text-muted md:text-base">
                    {project.tagline}
                  </p>

                  <p className="mt-4 max-w-2xl text-sm leading-relaxed text-text-muted">
                    {project.description}
                  </p>
                </div>

                <div className="md:col-span-4 md:col-start-9">
                  <p className="mb-3 font-mono text-[9px] uppercase tracking-[0.12em] text-text-muted">
                    Technologies
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((technology) => (
                      <span
                        key={technology}
                        className="border border-border px-3 py-2 font-mono text-[9px] uppercase tracking-[0.06em] text-text-muted"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/projects/${project.slug}`}
                    className="mt-6 inline-flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.12em] text-text-primary transition-colors hover:text-[#FF4D1C]"
                  >
                    Explore project
                    <span>↗</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
