
"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import HeroCanvas from "@/components/three/HeroCanvas";
import HeroHud from "@/components/ui/HeroHud";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const sceneRef = useRef<HTMLDivElement>(null);
  const linesRef = useRef<HTMLSpanElement[]>([]);

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const context = gsap.context(() => {
      if (reducedMotion) {
        gsap.set([sceneRef.current, ...linesRef.current], {
          clearProps: "all",
        });
        return;
      }

      const timeline = gsap.timeline({ delay: 1.85 });

      timeline.fromTo(
        sceneRef.current,
        { opacity: 0, scale: 0.92, y: 20 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1.2,
          ease: "expo.out",
        }
      );

      timeline.fromTo(
        linesRef.current,
        { yPercent: 110 },
        {
          yPercent: 0,
          duration: 1,
          stagger: 0.08,
          ease: "power4.out",
        },
        "-=0.75"
      );
    }, heroRef);

    return () => context.revert();
  }, []);

  const addLine = (element: HTMLSpanElement | null) => {
    if (element && !linesRef.current.includes(element)) {
      linesRef.current.push(element);
    }
  };

  return (
    <section
      ref={heroRef}
      className="relative flex min-h-[100svh] flex-col overflow-hidden px-5 pb-6 pt-28 md:min-h-screen md:px-10 md:pb-10 md:pt-32"
    >
      <div className="mx-auto grid w-full max-w-[1440px] flex-1 grid-cols-1 items-center gap-2 md:grid-cols-12 md:gap-6">
        <div className="relative z-10 md:col-span-7">
          <div className="mb-5 flex items-center gap-3 md:mb-7">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />

            <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-text-muted sm:text-[10px] sm:tracking-[0.14em]">
              Product Builder / Creative Developer
            </span>
          </div>

          <h1 className="text-[clamp(3.65rem,15.5vw,6rem)] font-medium uppercase leading-[0.8] tracking-[-0.075em] md:text-[clamp(4.5rem,9.5vw,9.5rem)]">
            <span className="block overflow-hidden">
              <span ref={addLine} className="block">
                Building
              </span>
            </span>

            <span className="block overflow-hidden">
              <span ref={addLine} className="block">
                Digital
              </span>
            </span>

            <span className="block overflow-hidden">
              <span ref={addLine} className="block">
                Products.
              </span>
            </span>
          </h1>

          <div className="mt-6 max-w-[420px] sm:mt-8 md:ml-[5vw]">
            <p className="max-w-[340px] text-sm leading-relaxed text-text-muted sm:text-base md:text-lg">
              I build digital products with a developer&apos;s precision and a
              director&apos;s eye.
            </p>

            <a
              href="#work"
              data-cursor="view"
              className="group mt-5 inline-flex min-h-12 items-center gap-4 border border-border px-5 py-3 font-mono text-[10px] uppercase tracking-[0.12em] transition-colors duration-300 hover:border-text-primary sm:mt-7"
            >
              <span>View Work</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                ↗
              </span>
            </a>
          </div>
        </div>

        <div className="relative z-0 flex items-center justify-center md:col-span-5">
          <div
            ref={sceneRef}
            className="h-[250px] w-full max-w-[340px] sm:h-[300px] md:h-[560px] md:max-w-none"
          >
            <HeroCanvas />
          </div>
        </div>
      </div>

      <div className="mt-2 flex items-end justify-between gap-4 md:absolute md:bottom-6 md:left-10 md:right-10 md:mt-0">
        <p className="font-mono text-[9px] uppercase tracking-[0.12em] text-text-muted">
          Bengaluru, India
        </p>

        <HeroHud />
      </div>
    </section>
  );
}
