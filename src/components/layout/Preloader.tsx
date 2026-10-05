"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

export default function Preloader() {
  const containerRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const counter = counterRef.current;

    if (!container || !counter) {
      return;
    }

    const counterObject = {
      value: 0,
    };

    const timeline = gsap.timeline();

    timeline.to(counterObject, {
      value: 100,
      duration: 1.2,
      ease: "power2.inOut",
      onUpdate: () => {
        counter.textContent = Math.round(counterObject.value)
          .toString()
          .padStart(3, "0");
      },
    });

    timeline.to(container, {
      yPercent: -100,
      duration: 1,
      ease: "expo.inOut",
    });

    return () => {
      timeline.kill();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[200] flex items-end justify-between bg-background px-5 pb-6 md:px-10 md:pb-8"
    >
      <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-text-muted">
        Anurag / Portfolio
      </span>

      <span
        ref={counterRef}
        className="font-mono text-[10px] uppercase tracking-[0.15em] text-text-primary"
      >
        000
      </span>
    </div>
  );
}