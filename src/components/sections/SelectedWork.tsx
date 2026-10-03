"use client";

import Link from "next/link";
import { useRef } from "react";
import { projects } from "@/data/projects";

export default function SelectedWork() {
  const cardRefs = useRef<HTMLAnchorElement[]>([]);

  const addCard = (element: HTMLAnchorElement | null) => {
    if (element && !cardRefs.current.includes(element)) {
      cardRefs.current.push(element);
    }
  };

  return (
    <section
      id="work"
      className="border-t border-border px-5 py-28 md:px-10 md:py-40"
    >
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="mb-20 grid grid-cols-1 gap-8 md:grid-cols-12">
          <div className="md:col-span-2">
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-text-muted">
              02 / Selected Work
            </p>
          </div>

          <div className="md:col-span-7 md:col-start-4">
            <h2 className="text-[clamp(3rem,6vw,6rem)] font-medium leading-[0.9] tracking-[-0.06em]">
              Products I&apos;ve
              <br />
              built.
            </h2>

            <p className="mt-8 max-w-[520px] text-base leading-relaxed text-text-muted md:text-lg">
              A selection of products, platforms, and experiments where
              engineering meets product thinking and visual design.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-24 md:gap-36">
          {projects.map((project, index) => (
            <Link
              key={project.id}
              ref={addCard}
              href={`/projects/${project.slug}`}
              data-cursor="view"
              className="group block"
            >
              <article>
                <div className="relative overflow-hidden border border-border bg-surface">
                  <div className="relative aspect-[16/10] overflow-hidden md:aspect-[16/8.5]">
                    <div
                      className={`absolute inset-0 transition-transform duration-1000 ease-out group-hover:scale-[1.035] ${
                        index === 0
                          ? "bg-[radial-gradient(circle_at_65%_45%,rgba(255,77,28,0.18),transparent_25%),linear-gradient(135deg,#171614_0%,#0E0D0C_65%)]"
                          : "bg-[radial-gradient(circle_at_40%_40%,rgba(237,232,223,0.10),transparent_20%),linear-gradient(135deg,#171614_0%,#0E0D0C_70%)]"
                      }`}
                    />

                    <div className="absolute inset-0">
                      {index === 0 ? (
                        <>
                          <div className="absolute left-[15%] top-[20%] h-[42%] w-[32%] border border-border bg-background/70 transition-transform duration-1000 group-hover:-translate-y-3 group-hover:translate-x-2 md:left-[20%] md:w-[28%]" />

                          <div className="absolute right-[12%] top-[15%] h-[65%] w-[42%] border border-border bg-surface/70 transition-transform duration-1000 group-hover:translate-y-3 group-hover:-translate-x-3 md:right-[18%] md:w-[34%]">
                            <div className="absolute left-[8%] right-[8%] top-[12%] h-px bg-border" />
                            <div className="absolute left-[8%] top-[24%] h-2 w-[42%] bg-text-primary/20" />
                            <div className="absolute left-[8%] top-[34%] h-1.5 w-[65%] bg-text-muted/20" />
                            <div className="absolute left-[8%] top-[44%] h-1.5 w-[52%] bg-text-muted/20" />
                            <div className="absolute bottom-[12%] left-[8%] h-[24%] w-[84%] border border-border" />
                          </div>

                          <div className="absolute bottom-[18%] left-[18%] h-2 w-2 rounded-full bg-accent shadow-[0_0_30px_rgba(255,77,28,0.8)] transition-transform duration-700 group-hover:scale-150" />
                        </>
                      ) : (
                        <>
                          <div className="absolute left-[12%] top-[14%] h-[72%] w-[76%] border border-border bg-background/70 transition-transform duration-1000 group-hover:scale-[1.02] md:left-[20%] md:w-[60%]">
                            <div className="absolute left-0 top-0 h-8 w-full border-b border-border bg-surface" />

                            <div className="absolute left-[5%] top-[15%] h-[70%] w-[18%] border-r border-border">
                              <div className="mb-5 h-2 w-[55%] bg-text-primary/30" />
                              <div className="mb-3 h-1 w-[75%] bg-text-muted/20" />
                              <div className="mb-3 h-1 w-[65%] bg-text-muted/20" />
                              <div className="mb-3 h-1 w-[70%] bg-text-muted/20" />
                            </div>

                            <div className="absolute right-[5%] top-[15%] h-[12%] w-[68%] border border-border" />

                            <div className="absolute bottom-[10%] right-[5%] h-[52%] w-[68%] border border-border">
                              <div className="absolute left-[5%] top-[8%] h-2 w-[28%] bg-text-primary/20" />
                              <div className="absolute bottom-[12%] left-[5%] h-[45%] w-[90%] border border-border" />
                            </div>
                          </div>

                          <div className="absolute right-[14%] top-[18%] h-2 w-2 rounded-full bg-accent shadow-[0_0_30px_rgba(255,77,28,0.6)] transition-transform duration-700 group-hover:scale-150" />
                        </>
                      )}
                    </div>

                    <div className="absolute inset-0 bg-background/0 transition-colors duration-500 group-hover:bg-background/5" />

                    <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between md:bottom-7 md:left-7 md:right-7">
                      <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-text-muted">
                        {project.category}
                      </span>

                      <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-text-muted">
                        {project.year}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-12 md:items-start">
                  <div className="md:col-span-7">
                    <div className="flex items-baseline gap-4">
                      <span className="font-mono text-[10px] text-text-muted">
                        {project.number}
                      </span>

                      <h3 className="text-3xl font-medium tracking-[-0.045em] md:text-5xl">
                        {project.name}
                      </h3>
                    </div>

                    <p className="mt-3 pl-8 text-sm text-text-muted md:text-base">
                      {project.tagline}
                    </p>
                  </div>

                  <div className="md:col-span-3 md:col-start-9">
                    <p className="text-sm leading-relaxed text-text-muted">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex items-start justify-between md:col-span-1 md:col-start-12 md:justify-end">
                    <span className="text-xl text-text-muted transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent">
                      ↗
                    </span>
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 border-t border-border pt-4">
                  {project.stack.map((technology) => (
                    <span
                      key={technology}
                      className="font-mono text-[9px] uppercase tracking-[0.1em] text-text-muted"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </article>
            </Link>
          ))}
        </div>

        <div className="mt-24 flex justify-end border-t border-border pt-6">
          <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-text-muted">
            02 / 02
          </span>
        </div>
      </div>
    </section>
  );
}