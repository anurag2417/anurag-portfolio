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
      "(prefers-reduced-motion: reduce)",
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
        { opacity: 0, scale: 0.94, y: 12 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1.2,
          ease: "expo.out",
        },
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
        "-=0.8",
      );
    }, heroRef);

    return () => {
      context.revert();
    };
  }, []);

  const addLine = (element: HTMLSpanElement | null) => {
    if (element && !linesRef.current.includes(element)) {
      linesRef.current.push(element);
    }
  };

  return (
    <section
      ref={heroRef}
      className="relative flex min-h-[100svh] flex-col overflow-hidden px-5 pb-6 pt-28 sm:px-8 md:min-h-screen md:px-10 md:pb-10 md:pt-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_76%_44%,rgba(255,77,28,0.055),transparent_38%)]" />

      <div className="relative mx-auto grid w-full max-w-[1440px] flex-1 grid-cols-1 items-center gap-3 md:grid-cols-12 md:gap-4 lg:gap-6">
        <div className="relative z-10 md:col-span-7">
          <div className="mb-6 flex items-center gap-3 md:mb-8">
            <span className="h-1.5 w-1.5 shrink-0 animate-pulse rounded-full bg-accent" />

            <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-text-muted sm:text-[10px] sm:tracking-[0.14em]">
              Product Builder / Creative Developer
            </span>
          </div>

          <h1 className="text-[clamp(3.65rem,15vw,6.4rem)] font-medium uppercase leading-[0.79] tracking-[-0.075em] md:text-[clamp(4.5rem,8.7vw,8.7rem)]">
            <span className="block overflow-hidden pb-[0.08em]">
              <span ref={addLine} className="block">
                Building
              </span>
            </span>

            <span className="block overflow-hidden pb-[0.08em]">
              <span ref={addLine} className="block">
                Digital
              </span>
            </span>

            <span className="block overflow-hidden pb-[0.08em]">
              <span ref={addLine} className="block text-accent">
                Products.
              </span>
            </span>
          </h1>

          <div className="mt-7 max-w-[440px] sm:mt-9 md:ml-[4vw]">
            <p className="max-w-[340px] text-sm leading-relaxed text-text-muted sm:text-base md:text-lg">
              I build digital products with a developer&apos;s precision and a
              director&apos;s eye.
            </p>

            <a
              href="#work"
              data-cursor="view"
              className="group mt-6 inline-flex min-h-12 items-center gap-5 border border-border px-5 py-3 font-mono text-[10px] uppercase tracking-[0.12em] transition-colors duration-300 hover:border-accent hover:text-accent sm:mt-7"
            >
              <span>View Work</span>

              <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                ↗
              </span>
            </a>
          </div>
        </div>

        <div className="relative z-0 -mt-1 flex min-h-[300px] items-center justify-center md:col-span-5 md:mt-0 md:min-h-0">
          <div className="pointer-events-none absolute left-1/2 top-1/2 aspect-square w-[90%] max-w-[540px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,77,28,0.07),transparent_68%)]" />

          <div
            ref={sceneRef}
            className="relative h-[320px] w-full max-w-[430px] sm:h-[390px] sm:max-w-[480px] md:h-[min(65vh,650px)] md:min-h-[440px] md:max-w-none lg:h-[min(72vh,720px)]"
          >
            <HeroCanvas />
          </div>

          <div className="pointer-events-none absolute bottom-5 left-2 hidden font-mono text-[9px] uppercase tracking-[0.14em] text-text-muted/70 md:block">
            Interactive / 3D
          </div>

          <div className="pointer-events-none absolute right-2 top-8 hidden font-mono text-[9px] text-text-muted/70 md:block">
            001 — CORE
          </div>
        </div>
      </div>

      <div className="relative mt-3 flex items-end justify-between gap-4 md:absolute md:bottom-6 md:left-10 md:right-10 md:mt-0">
        <p className="font-mono text-[9px] uppercase tracking-[0.12em] text-text-muted">
          Bengaluru, India
        </p>

        <HeroHud />
      </div>
    </section>
  );
}
