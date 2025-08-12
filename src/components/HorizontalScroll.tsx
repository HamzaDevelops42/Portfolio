// src/components/HorizontalScroll.tsx
"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { distance } from "motion";
import { Button } from "./ui/button";

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
            className="flex justify-center items-center h-screen w-[300vw] bg-[var(--bg)] overflow-hidden"
        >
            <section className="panel w-full h-full flex justify-center items-center">
                {/* give the inner container the class "card" (selector used above) */}
                <div className="card bg-[var(--bg-card)] w-[80vw] h-[80vh] border-2 border-[var(--my-border)] text-[var(--text)]">
                    Card 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit eos quaerat perspiciatis sed neque enim aliquid vel doloribus veniam qui aperiam iure asperiores amet est, exercitationem laudantium unde? Aspernatur ipsum illo quae doloremque, animi repudiandae quidem inventore, numquam iusto eius cupiditate at quod voluptatum obcaecati aperiam! Nemo inventore sit blanditiis ea alias, aliquid ratione esse architecto at. Architecto illo, est expedita numquam suscipit iusto impedit eum nisi reprehenderit ipsam nobis tempore, cum voluptatum repellat deleniti enim deserunt quidem earum, perspiciatis alias! Officia ex animi aliquam nesciunt asperiores et quia impedit, voluptatem, amet fugiat vitae omnis ipsa exercitationem, iste obcaecati quam iure eaque odio culpa aliquid tempore nihil beatae deleniti corporis. Possimus deserunt tempora, nostrum est dicta distinctio ducimus accusamus laborum numquam nemo voluptatum omnis consequuntur sequi voluptatem voluptate quidem odit ex tenetur iusto temporibus consectetur nihil soluta quam. Itaque, facilis enim. Odit dolorem vero in repellat provident officia obcaecati accusamus impedit quo ratione neque ad velit quisquam quaerat itaque laborum, ducimus cum! Ad iusto nobis doloribus molestiae nam iure. Id magni consequuntur accusantium eos assumenda doloribus aliquam quibusdam ad? Atque doloribus qui minus aut cumque pariatur quaerat incidunt, expedita perferendis quos officiis corrupti ipsa perspiciatis neque veniam adipisci beatae. Unde similique quo tempore debitis sit eaque voluptates itaque eius vitae beatae ea molestiae accusantium ullam nesciunt, sint cumque quaerat. Deserunt eos saepe odit iusto placeat. Fugit amet magni autem expedita iste aut voluptates molestias maxime ut rerum consequatur eveniet illo eius veritatis corporis omnis repudiandae, ipsa fuga! Earum impedit illum quisquam vero, fugiat eveniet molestiae nihil, soluta fuga dolorem cum consequatur fugit corrupti deserunt. Nulla totam nisi itaque, quaerat, obcaecati animi ut, eligendi excepturi labore consectetur quae repudiandae eum? Animi, eius dolorem optio amet velit culpa delectus non quidem. Dicta ipsa eaque temporibus accusamus magni cupiditate possimus sed eius repellat. Ad blanditiis iure suscipit autem sunt sint, facere nemo ipsum praesentium. Impedit provident molestias consectetur necessitatibus unde obcaecati repellat ex enim nam est?
                    <br></br> <Button className="bg-[var(--bg-button)] text-[var(--text)] border border-[var(--my-border)] hover:bg-[var(--bg-button-hover)] cursor-pointer">Hello</Button>
                </div>
            </section>

            <section className="panel w-full h-full flex justify-center items-center">
                <div className="card bg-blue-400 w-[80vw] h-[80vh]">Card 2</div>
            </section>

            <section className="panel w-full h-full flex justify-center items-center">
                <div className="card bg-green-400 w-[80vw] h-[80vh]">Card 3</div>
            </section>
        </div>
    );
}
