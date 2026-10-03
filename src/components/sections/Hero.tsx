"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import ProductCore from "@/components/ui/ProductCore";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const linesRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const context = gsap.context(() => {
      const timeline = gsap.timeline({
        delay: 1.9,
      });

      timeline.fromTo(
        linesRef.current,
        {
          yPercent: 110,
        },
        {
          yPercent: 0,
          duration: 1.1,
          stagger: 0.08,
          ease: "power4.out",
        },
      );
    }, heroRef);

    return () => {
      context.revert();
    };
  }, []);

  const addLine = (element: HTMLDivElement | null) => {
    if (element && !linesRef.current.includes(element)) {
      linesRef.current.push(element);
    }
  };

  return (
    <section
      ref={heroRef}
      className="relative flex min-h-screen items-center overflow-hidden px-5 pb-10 pt-28 md:px-10 md:pb-12 md:pt-32"
    >
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-10 md:grid-cols-12 md:items-center">
        <div className="relative z-10 md:col-span-8">
          <div className="mb-7 flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />

            <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-text-muted">
              Product Builder / Creative Developer
            </span>
          </div>

          <h1 className="overflow-hidden text-[17vw] font-medium uppercase leading-[0.78] tracking-[-0.075em] md:text-[11vw] lg:text-[10.5vw]">
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
              <span ref={addLine} className="block text-text-primary">
                Products.
              </span>
            </span>
          </h1>

          <div className="mt-10 max-w-[460px] md:ml-[8vw]">
            <p className="text-base leading-relaxed text-text-muted md:text-lg">
              I build digital products with a developer&apos;s precision and a
              director&apos;s eye.
            </p>

            <a
              href="#work"
              className="group mt-7 inline-flex items-center gap-4 border border-border px-5 py-3 font-mono text-[10px] uppercase tracking-[0.12em] transition-colors duration-300 hover:border-text-primary"
            >
              <span>View Work</span>

              <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                ↗
              </span>
            </a>
          </div>
        </div>

        <div className="relative flex items-center justify-center md:col-span-4">
          <ProductCore />
        </div>
      </div>

      <div className="absolute bottom-7 left-5 right-5 flex items-end justify-between md:left-10 md:right-10">
        <div>
          <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-text-muted">
            Bengaluru, India
          </p>
        </div>

        <div className="flex items-end gap-3">
          <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-text-muted">
            Scroll
          </span>

          <span className="h-8 w-px bg-border" />
        </div>
      </div>
    </section>
  );
}