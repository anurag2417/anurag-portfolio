"use client";

import { useState } from "react";

const capabilities = [
  {
    number: "01",
    title: "Product Engineering",
    description:
      "Turning product ideas into reliable, production-ready digital experiences from architecture to interface.",
    technologies: "Next.js / React / TypeScript / Node.js",
  },
  {
    number: "02",
    title: "Interactive Experiences",
    description:
      "Building interfaces where motion, interaction, and visual hierarchy work together instead of competing for attention.",
    technologies: "GSAP / Motion / Lenis / WebGL",
  },
  {
    number: "03",
    title: "AI Products",
    description:
      "Designing useful AI-powered workflows around real product problems rather than adding AI as a decorative feature.",
    technologies: "LLMs / APIs / AI workflows",
  },
  {
    number: "04",
    title: "Creative Development",
    description:
      "Combining development with visual experimentation, 3D, motion, and cinematic presentation.",
    technologies: "Three.js / R3F / Blender / Figma",
  },
];

export default function Capabilities() {
  const [active, setActive] = useState(0);

  return (
    <section
      id="capabilities"
      className="border-t border-border px-5 py-28 md:px-10 md:py-40"
    >
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-12">
          <div className="md:col-span-2">
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-text-muted">
              04 / Capabilities
            </p>
          </div>

          <div className="md:col-span-9 md:col-start-4">
            <div className="mb-16">
              <h2 className="max-w-[900px] text-[clamp(3rem,6vw,6rem)] font-medium leading-[0.88] tracking-[-0.06em]">
                More than
                <br />
                just code.
              </h2>

              <p className="mt-8 max-w-[560px] text-base leading-relaxed text-text-muted md:text-lg">
                I work across product thinking, engineering, interaction, and
                visual development to turn ideas into complete digital
                experiences.
              </p>
            </div>

            <div className="border-t border-border">
              {capabilities.map((capability, index) => {
                const isActive = active === index;

                return (
                  <button
                    key={capability.number}
                    type="button"
                    onMouseEnter={() => setActive(index)}
                    onFocus={() => setActive(index)}
                    onClick={() => setActive(index)}
                    className="group block w-full border-b border-border text-left"
                  >
                    <div
                      className={`grid grid-cols-12 items-start gap-3 py-7 transition-all duration-500 md:py-9 ${
                        isActive ? "opacity-100" : "opacity-50"
                      } group-hover:opacity-100`}
                    >
                      <span className="col-span-1 pt-1 font-mono text-[9px] text-accent">
                        {capability.number}
                      </span>

                      <div className="col-span-10 md:col-span-7">
                        <h3 className="text-2xl font-medium tracking-[-0.045em] md:text-4xl">
                          {capability.title}
                        </h3>

                        <div
                          className={`grid transition-[grid-template-rows] duration-500 ${
                            isActive
                              ? "grid-rows-[1fr]"
                              : "grid-rows-[0fr]"
                          }`}
                        >
                          <div className="overflow-hidden">
                            <p className="max-w-[600px] pt-5 text-sm leading-relaxed text-text-muted md:text-base">
                              {capability.description}
                            </p>

                            <p className="pt-4 font-mono text-[9px] uppercase tracking-[0.1em] text-text-muted">
                              {capability.technologies}
                            </p>
                          </div>
                        </div>
                      </div>

                      <span
                        className={`col-span-1 justify-self-end text-xl transition-all duration-500 ${
                          isActive
                            ? "-translate-y-1 translate-x-1 text-accent"
                            : "text-text-muted"
                        }`}
                      >
                        ↗
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}