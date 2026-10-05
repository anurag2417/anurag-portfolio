
"use client";

import { useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import { gsap } from "@/lib/gsap";

export default function PageTransition() {
  const curtainRef = useRef<HTMLDivElement>(null);
  const isTransitioning = useRef(false);
  const previousPath = useRef<string | null>(null);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const curtain = curtainRef.current;

    if (!curtain) return;

    gsap.set(curtain, {
      scaleY: 0,
      transformOrigin: "top",
    });

    if (previousPath.current === null) {
      previousPath.current = pathname;
      return;
    }

    if (previousPath.current !== pathname) {
      previousPath.current = pathname;

      gsap.set(curtain, {
        scaleY: 1,
        transformOrigin: "bottom",
      });

      gsap.to(curtain, {
        scaleY: 0,
        duration: 0.85,
        ease: "expo.inOut",
        onComplete: () => {
          isTransitioning.current = false;
        },
      });
    }
  }, [pathname]);

  useEffect(() => {
    const curtain = curtainRef.current;

    if (!curtain) return;

    const handleClick = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const target = event.target;

      if (!(target instanceof Element)) return;

      const link = target.closest("a[href]");

      if (!(link instanceof HTMLAnchorElement)) return;

      if (
        link.target === "_blank" ||
        link.hasAttribute("download") ||
        link.getAttribute("rel") === "external"
      ) {
        return;
      }

      const url = new URL(link.href);

      if (url.origin !== window.location.origin) return;

      if (
        url.pathname === window.location.pathname &&
        url.search === window.location.search
      ) {
        return;
      }

      event.preventDefault();

      if (isTransitioning.current) return;

      isTransitioning.current = true;

      gsap.to(curtain, {
        scaleY: 1,
        transformOrigin: "bottom",
        duration: 0.65,
        ease: "expo.inOut",
        onComplete: () => {
          router.push(`${url.pathname}${url.search}${url.hash}`);
        },
      });
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [router]);

  return (
    <div
      ref={curtainRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[150] bg-accent"
      style={{
        transform: "scaleY(0)",
        transformOrigin: "top",
      }}
    />
  );
}
