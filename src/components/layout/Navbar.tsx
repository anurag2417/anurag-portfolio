"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 40);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleMenu = () => {
        gsap.to(window, {
            scrollTo: 0,
            duration: 0.8,
        });
    };

    return (
        <header
            className={`fixed inset-x-0 top-0 z-50 px-5 transition-all duration-500 md:px-10 ${scrolled ? "pt-4" : "pt-6"
                }`}
        >
            <nav
                className={`mx-auto flex h-12 max-w-[1440px] items-center justify-between transition-all duration-500 ${scrolled
                    ? "rounded-full border border-border bg-surface/80 px-5 backdrop-blur-md"
                    : "px-0"
                    }`}
            >
                <Link
                    href="/"
                    className="font-mono text-[11px] uppercase tracking-[0.12em]"
                >
                    Anurag
                </Link>

                <div className="hidden items-center gap-10 md:flex">
                    <a
                        href="#work"
                        className="font-mono text-[10px] uppercase tracking-[0.12em] text-text-muted transition-colors duration-300 hover:text-text-primary"
                    >
                        Work
                    </a>

                    <a
                        href="#about"
                        className="font-mono text-[10px] uppercase tracking-[0.12em] text-text-muted transition-colors duration-300 hover:text-text-primary"
                    >
                        About
                    </a>

                    <a
                        href="#contact"
                        className="font-mono text-[10px] uppercase tracking-[0.12em] text-text-muted transition-colors duration-300 hover:text-text-primary"
                    >
                        Contact
                    </a>
                </div>

                <button
                    type="button"
                    className="font-mono text-[10px] uppercase tracking-[0.12em] text-text-muted transition-colors duration-300 hover:text-text-primary md:hidden"
                >
                    Menu
                </button>

                <div className="hidden items-center gap-2 md:flex">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    <span className="font-mono text-[9px] uppercase tracking-[0.1em] text-text-muted">
                        Available for select projects
                    </span>
                </div>
            </nav>
        </header>
    );
}