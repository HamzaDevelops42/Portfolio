// src/components/HorizontalScroll.tsx
"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { distance } from "motion";
import { Button } from "./ui/button";
import AboutMe from "./AboutMe";
import Skills from "./skills";
import Projects from "./Projects";
import Contact from "./Contact";
import { toast } from "sonner";

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalScroll() {
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!containerRef.current) return;


        const snapSound = new Audio("/sounds/snap.mp3");
        snapSound.volume = 1; // adjust loudness

        // Lenis smooth scrolling (vertical scroll driving horizontal animation)
        const lenis = new Lenis({
            lerp: 0.3,
            orientation: "vertical",
            gestureOrientation: "vertical",
            smoothWheel: true,
            wheelMultiplier: 1.5,
        });

        // RAF loop for Lenis
        let rafId = 0;
        function raf(time: number) {
            lenis.raf(time);
            rafId = requestAnimationFrame(raf);
        }
        rafId = requestAnimationFrame(raf);

        // Panels & cards
        const sections = gsap.utils.toArray<HTMLElement>(".panel");
        const cards: HTMLElement[] = sections.map((s) => {
            // prefer .card class; fallback to first child div in panel
            return (s.querySelector<HTMLElement>(".card") ?? s.querySelector<HTMLElement>("div")!) as HTMLElement;
        });

        const panelsCount = sections.length;
        // initial scale setup: first panel 1, others 0.9
        cards.forEach((card, i) => {
            const initialScale = i === 0 ? 1 : 0.9;
            gsap.set(card, { scale: initialScale });
        });


        let lastIndex = 0;

        // Main horizontal tween+ScrollTrigger
        const mainTween = gsap.to(sections, {
            xPercent: -100 * (panelsCount - 1),
            ease: "none",
            scrollTrigger: {
                trigger: containerRef.current,
                pin: true,
                scrub: 1,
                snap: {
                    snapTo: 1 / (panelsCount - 1),
                    duration: 0.5,
                    delay: 0,
                },
                end: () => `+=${containerRef.current?.offsetWidth}`,
                onUpdate(self) {


                    const progress = self.progress;
                    const indexProgress = progress * (panelsCount - 1);


                    // Playing Snap Sound
                    const currentIndex = Math.round(indexProgress);
                    if (currentIndex !== lastIndex) {
                        clearTimeout((snapSound as any)._timeoutId); // prevent overlap
                        (snapSound as any)._timeoutId = setTimeout(() => {
                            snapSound.currentTime = 0;
                            snapSound.play();
                        }, 150); // 150ms delay
                        lastIndex = currentIndex;
                    }


                    cards.forEach((card, i) => {
                        const distance = indexProgress - i
                        const scale = gsap.utils.mapRange(0, 1, 1, 0.7, Math.abs(distance));
                        const y = gsap.utils.mapRange(0, 1, 1, 300, Math.abs(distance));
                        const opacity = gsap.utils.mapRange(0, 1, 1, 0.5, Math.abs(distance));
                        // const rotateY = gsap.utils.mapRange(0, 1, 1, -90, Math.abs(distance));


                        // console.table([progress, indexProgress, distance, scale, y])

                        gsap.to(card, { y, scale, opacity, duration: 0.4, ease: "power1.out" });
                        // gsap.to(card, { y: y, duration: 0.4, ease: "power1.out" });
                    });
                },
            },
        });

        // Cleanup
        return () => {
            mainTween.scrollTrigger?.kill();
            mainTween.kill();
            lenis.destroy();
            cancelAnimationFrame(rafId);
            ScrollTrigger.getAll().forEach((st) => st.kill());
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="flex justify-center items-center h-screen w-[400vw] bg-[var(--bg)] overflow-hidden"
        >
            <section className="panel w-full h-full flex justify-center items-center">
                {/* give the inner container the class "card" (selector used above) */}
                <div className="card bg-[var(--bg-card)] w-[50vw] h-[60vh] border-2 border-[var(--my-border)] text-[var(--text)] rounded-3xl">
                    <AboutMe />
                </div>
            </section>

            <section className="panel w-full h-full flex justify-center items-center" id="projects">
                <div className="card bg-[var(--bg-card)] w-[50vw] h-[60vh] border-2 border-[var(--my-border)] text-[var(--text)] rounded-3xl">
                    <Skills />

                </div>
            </section>

            <section className="panel w-full h-full flex justify-center items-center">
                <div className="card bg-[var(--bg-card)] w-[50vw] h-[60vh] border-2 border-[var(--my-border)] text-[var(--text)] rounded-3xl">
                    <Projects />
                </div>
            </section>

            <section className="panel w-full h-full flex justify-center items-center">
                <div className="card bg-[var(--bg-card)] w-[50vw] h-[60vh] border-2 border-[var(--my-border)] text-[var(--text)] rounded-3xl">
                    <Contact />
                </div>
            </section>
        </div>
    );
}
