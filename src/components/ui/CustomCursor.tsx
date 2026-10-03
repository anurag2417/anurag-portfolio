"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    if (!cursor) {
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

    const handleEnter = () => {
      gsap.to(cursor, {
        scale: 1,
        opacity: 1,
        duration: 0.2,
      });
    };

    const handleLeave = () => {
      gsap.to(cursor, {
        scale: 0,
        opacity: 0,
        duration: 0.2,
      });
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseenter", handleEnter);
    window.addEventListener("mouseleave", handleLeave);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseenter", handleEnter);
      window.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed left-0 top-0 z-[100] hidden h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-text-primary md:block"
    />
  );
}