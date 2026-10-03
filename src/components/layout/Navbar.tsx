"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { gsap } from "@/lib/gsap";

const navigation = [
  {
    label: "Work",
    href: "#work",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const openMenu = () => {
    setMenuOpen(true);

    requestAnimationFrame(() => {
      const menu = document.querySelector("[data-mobile-menu]");
      const items = document.querySelectorAll("[data-menu-item]");
      const meta = document.querySelector("[data-menu-meta]");

      if (!menu) {
        return;
      }

      gsap.set(menu, {
        clipPath: "inset(0 0 100% 0)",
      });

      gsap.set(items, {
        y: 80,
        opacity: 0,
      });

      gsap.set(meta, {
        opacity: 0,
      });

      const timeline = gsap.timeline();

      timeline.to(menu, {
        clipPath: "inset(0 0 0% 0)",
        duration: 0.8,
        ease: "expo.inOut",
      });

      timeline.to(
        items,
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.08,
          ease: "power4.out",
        },
        "-=0.45",
      );

      timeline.to(
        meta,
        {
          opacity: 1,
          duration: 0.5,
          ease: "power2.out",
        },
        "-=0.45",
      );
    });
  };

  const closeMenu = () => {
    const menu = document.querySelector("[data-mobile-menu]");
    const items = document.querySelectorAll("[data-menu-item]");
    const meta = document.querySelector("[data-menu-meta]");

    if (!menu) {
      setMenuOpen(false);
      return;
    }

    const timeline = gsap.timeline({
      onComplete: () => {
        setMenuOpen(false);
      },
    });

    timeline.to(items, {
      y: -30,
      opacity: 0,
      duration: 0.35,
      stagger: 0.04,
      ease: "power2.in",
    });

    timeline.to(
      meta,
      {
        opacity: 0,
        duration: 0.2,
      },
      "<",
    );

    timeline.to(
      menu,
      {
        clipPath: "inset(0 0 100% 0)",
        duration: 0.7,
        ease: "expo.inOut",
      },
      "-=0.1",
    );
  };

  const handleMenuToggle = () => {
    if (menuOpen) {
      closeMenu();
      return;
    }

    openMenu();
  };

  const handleNavigation = (href: string) => {
    closeMenu();

    window.setTimeout(() => {
      const target = document.querySelector(href);

      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 750);
  };

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-[100] px-5 pt-5 md:px-10 md:pt-6">
        <nav
          className={`mx-auto flex h-12 max-w-[1440px] items-center justify-between transition-all duration-500 ${
            scrolled
              ? "rounded-full border border-border bg-surface/80 px-5 backdrop-blur-md"
              : "px-0"
          }`}
        >
          <Link
            href="/"
            className="relative z-[110] font-mono text-[11px] uppercase tracking-[0.12em] text-text-primary"
          >
            Anurag
          </Link>

          <div className="hidden items-center gap-10 md:flex">
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="font-mono text-[10px] uppercase tracking-[0.12em] text-text-muted transition-colors duration-300 hover:text-text-primary"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-2 md:flex">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />

            <span className="font-mono text-[9px] uppercase tracking-[0.1em] text-text-muted">
              Available for select projects
            </span>
          </div>

          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={handleMenuToggle}
            className="relative z-[110] flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.12em] text-text-muted transition-colors duration-300 hover:text-text-primary md:hidden"
          >
            <span>{menuOpen ? "Close" : "Menu"}</span>

            <span className="relative flex h-3 w-4 flex-col justify-center gap-1">
              <span
                className={`block h-px w-full bg-current transition-transform duration-300 ${
                  menuOpen ? "translate-y-[3px] rotate-45" : ""
                }`}
              />

              <span
                className={`block h-px w-full bg-current transition-transform duration-300 ${
                  menuOpen ? "-translate-y-[3px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </nav>
      </header>

      {menuOpen && (
        <div
          data-mobile-menu
          className="fixed inset-0 z-[90] flex flex-col bg-surface px-5 pb-8 pt-32 md:hidden"
        >
          <div className="flex flex-1 flex-col">
            <span className="mb-8 font-mono text-[10px] uppercase tracking-[0.14em] text-text-muted">
              Navigation
            </span>

            <div className="flex flex-col">
              {navigation.map((item, index) => (
                <button
                  key={item.label}
                  type="button"
                  data-menu-item
                  onClick={() => handleNavigation(item.href)}
                  className="group flex items-baseline justify-between border-b border-border py-5 text-left"
                >
                  <span className="flex items-baseline gap-4">
                    <span className="font-mono text-[9px] text-text-muted">
                      0{index + 1}
                    </span>

                    <span className="text-5xl font-medium uppercase tracking-[-0.06em] text-text-primary">
                      {item.label}
                    </span>
                  </span>

                  <span className="text-xl text-text-muted transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent">
                    ↗
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div
            data-menu-meta
            className="flex items-end justify-between border-t border-border pt-5"
          >
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.12em] text-text-muted">
                Bengaluru, India
              </p>

              <p className="mt-2 font-mono text-[9px] uppercase tracking-[0.12em] text-text-muted">
                Available for select projects
              </p>
            </div>

            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          </div>
        </div>
      )}
    </>
  );
}