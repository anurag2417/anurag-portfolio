"use client";

import { useEffect, useState } from "react";

export default function HeroHud() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      if (documentHeight <= 0) {
        setProgress(0);
        return;
      }

      setProgress(
        Math.min(100, Math.max(0, (window.scrollY / documentHeight) * 100)),
      );
    };

    updateProgress();

    window.addEventListener("scroll", updateProgress, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", updateProgress);
    };
  }, []);

  return (
    <div className="flex items-end gap-4">
      <div className="text-right">
        <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-text-muted">
          Scroll
        </p>

        <p className="mt-1 font-mono text-[9px] tracking-[0.14em] text-text-primary">
          {Math.round(progress).toString().padStart(3, "0")}%
        </p>
      </div>

      <div className="relative h-10 w-px overflow-hidden bg-border">
        <div
          className="absolute bottom-0 left-0 w-full bg-accent transition-[height] duration-300"
          style={{
            height: `${Math.max(8, progress)}%`,
          }}
        />
      </div>
    </div>
  );
}