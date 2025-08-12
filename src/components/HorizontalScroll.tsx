"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalScroll() {
    const containerRef = useRef<HTMLDivElement>(null);



    useEffect(() => {
        const lenis = new Lenis({
            lerp: 0.3,
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 1.5
        });

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);




        const sections = gsap.utils.toArray(".panel");

        // Main animation
        gsap.to(sections, {
            xPercent: -100 * (sections.length - 1),
            ease: "none",

            // ScrollTrigger settings
            scrollTrigger: {
                trigger: containerRef.current,
                pin: true,
                scrub: 1,
                snap: {
                    snapTo: 1 / (sections.length - 1),
                    duration: 0.4, // faster snap
                    delay: 0 // no waiting delay before snapping
                },

                end: () => `+=${containerRef.current?.offsetWidth}`,
            }
        });
    }, []);

    return (
        // The Width of this container should be according to its children like for 3 childrens its 3 x 100vw = 300vw 
        <div ref={containerRef} className=" flex justify-center items-center h-screen w-[300vw] bg-[var(--bg)]" >
            <section className="panel  w-full h-full flex justify-center items-center  " >
                <div className="bg-[var(--bg-card)] w-[80vw] h-[80vh] border-2 border-[var(--border)] ">
                    hi
                </div>
            </section>
            <section className="panel   w-full h-full flex justify-center items-center" >
                <div className="bg-blue-400 w-[80vw] h-[80vh]">
                    hi
                </div>
            </section>
            <section className="panel  w-full h-full flex justify-center items-center" >
                <div className="bg-blue-400 w-[80vw] h-[80vh]">
                    hi
                </div>
            </section>
        </div>
    );
}
