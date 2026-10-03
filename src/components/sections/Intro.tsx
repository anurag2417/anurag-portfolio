"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

const text =
  "I like turning complicated ideas into products that feel simple.";

export default function Intro() {
  const sectionRef = useRef<HTMLElement>(null);
  const wordsRef = useRef<HTMLSpanElement[]>([]);

  useEffect(() => {
    const context = gsap.context(() => {
      gsap.fromTo(
        wordsRef.current,
        {
          color: "#2B2926",
        },
        {
          color: "#EDE8DF",
          stagger: 0.08,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            end: "bottom 55%",
            scrub: true,
          },
        },
      );
    }, sectionRef);

    return () => {
      context.revert();
    };
  }, []);

  const words = text.split(" ");

  return (
    <section
      ref={sectionRef}
      className="border-t border-border px-5 py-32 md:px-10 md:py-52"
    >
      <div className="mx-auto grid w-full max-w-[1440px] md:grid-cols-12">
        <div className="md:col-span-2">
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-text-muted">
            01 / Intro
          </p>
        </div>

        <div className="md:col-span-9 md:col-start-4">
          <p className="max-w-[1050px] text-[clamp(2.8rem,6vw,6rem)] font-medium leading-[0.95] tracking-[-0.055em]">
            {words.map((word, index) => (
              <span
                key={`${word}-${index}`}
                ref={(element) => {
                  if (element && !wordsRef.current.includes(element)) {
                    wordsRef.current.push(element);
                  }
                }}
                className="mr-[0.2em] inline-block text-border"
              >
                {word}
              </span>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
}