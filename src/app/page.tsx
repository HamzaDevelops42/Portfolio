"use client"
import AnimatedCursor from "@/components/AnimatedCursor";
import HorizontalScroll from "@/components/HorizontalScroll";
import LightRays from "@/components/LightRays";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import {  useMotionValue } from "framer-motion";

export default function Page() {

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const opacity = useMotionValue(0);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement> | React.PointerEvent<HTMLElement>) => {
    x.set(e.clientX);
    y.set(e.clientY);
  };



  return (
    <main
      onPointerMove={(e) => {
        handlePointerMove(e);
      }}
      onPointerEnter={() => {
        opacity.set(1);
      }}
      onPointerLeave={() => {
        opacity.set(0);
      }}

      className="overflow-hidden bg-[var(--bg)] cursor-none"
    >
      

     <AnimatedCursor
      innerSize={8}
      outerSize={8}
      color="31, 111, 116"
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={5}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link',
        ".custom"
      ]}
    />
      {/* <motion.div
        style={{
          x,
          y,
          opacity,
        }}
        className="fixed top-0 left-0 z-[9999] size-5 rounded-full bg-[#ccc] pointer-events-none"
      ></motion.div> */}

      {/* <Navbar /> */}
      <ThemeSwitcher />

      <div style={{ width: '100%', height: '100vh', position: 'fixed' }}>
        <LightRays
          raysOrigin="top-center"
          raysColor="#00ffff"
          raysSpeed={2.3}
          lightSpread={0.28}
          rayLength={3}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays"
        />
      </div>
      <HorizontalScroll />
    </main>
  );
}