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
        const context = gsap.context(() => {
            const timeline = gsap.timeline({
                delay: 1.85,
            });

            timeline.fromTo(
                sceneRef.current,
                {
                    opacity: 0,
                    scale: 0.82,
                    y: 30,
                },
                {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    duration: 1.3,
                    ease: "expo.out",
                },
            );

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
            className="relative min-h-screen overflow-hidden px-5 pb-8 pt-28 md:px-10 md:pb-10 md:pt-32"
        >
            <div className="mx-auto grid min-h-[calc(100vh-8rem)] w-full max-w-[1440px] grid-cols-1 items-center gap-6 md:grid-cols-12">
                <div className="relative z-10 md:col-span-7">
                    <div className="mb-7 flex items-center gap-3">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent" />

                        <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-text-muted">
                            Product Builder / Creative Developer
                        </span>
                    </div>

                    <h1 className="overflow-hidden text-[clamp(4.5rem,9.5vw,9.5rem)] font-medium uppercase leading-[0.78] tracking-[-0.075em]">
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
                            <span ref={addLine} className="block">
                                Products.
                            </span>
                        </span>
                    </h1>

                    <div className="mt-8 max-w-[420px] md:ml-[5vw]">
                        <p className="text-base leading-relaxed text-text-muted md:text-lg">
                            I build digital products with a developer&apos;s precision and a
                            director&apos;s eye.
                        </p>

                        <a
                            href="#work"
                            data-cursor="view"
                            className="group mt-7 inline-flex items-center gap-4 border border-border px-5 py-3 font-mono text-[10px] uppercase tracking-[0.12em] transition-colors duration-300 hover:border-text-primary"
                        >
                            <span>View Work</span>

                            <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                                ↗
                            </span>
                        </a>
                    </div>
                </div>

                <div className="relative z-0 flex items-center justify-center md:col-span-5">
                    <div
                        ref={sceneRef}
                        className="h-[360px] w-full md:h-[560px]"
                    >
                        <HeroCanvas />
                    </div>
                </div>
            </div>

            <div className="absolute bottom-6 left-5 right-5 flex items-end justify-between md:left-10 md:right-10">
                <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-text-muted">
                    Bengaluru, India
                </p>

                <HeroHud />
            </div>
        </section>
    );
}