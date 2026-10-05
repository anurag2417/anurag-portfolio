"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const label = labelRef.current;

    if (!cursor || !label) {
      return;
    }

    const mediaQuery = window.matchMedia("(pointer: fine)");

    if (!mediaQuery.matches) {
      cursor.style.display = "none";
      return;
    }

    const moveCursor = (event: MouseEvent) => {
      gsap.to(cursor, {
        x: event.clientX,
        y: event.clientY,
        duration: 0.25,
        ease: "power3.out",
      });
    };

    const handlePointerOver = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const interactive = target.closest<HTMLElement>("[data-cursor]");

      if (!interactive) {
        return;
      }

      const cursorType = interactive.dataset.cursor;

      if (cursorType === "view") {
        gsap.to(cursor, {
          width: 72,
          height: 72,
          duration: 0.35,
          ease: "power3.out",
        });

        gsap.to(label, {
          opacity: 1,
          duration: 0.2,
        });

        label.textContent = "View";
      }
    };

    const handlePointerOut = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const interactive = target.closest<HTMLElement>("[data-cursor]");

      if (!interactive) {
        return;
      }

      const relatedTarget = event.relatedTarget as Node | null;

      if (relatedTarget && interactive.contains(relatedTarget)) {
        return;
      }

      gsap.to(cursor, {
        width: 10,
        height: 10,
        duration: 0.35,
        ease: "power3.out",
      });

      gsap.to(label, {
        opacity: 0,
        duration: 0.15,
      });
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseover", handlePointerOver);
    document.addEventListener("mouseout", handlePointerOut);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", handlePointerOver);
      document.removeEventListener("mouseout", handlePointerOut);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[200] hidden h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-text-primary md:flex"
    >
      <span
        ref={labelRef}
        className="font-mono text-[9px] uppercase tracking-[0.08em] text-background opacity-0"
      />
    </div>
  );
}