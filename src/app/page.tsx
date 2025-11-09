"use client"
import HorizontalScroll from "@/components/HorizontalScroll";
import LightRays from "@/components/LightRays";
import LiquidEther from "@/components/LiquidEther";
import { Navbar } from "@/components/Navbar";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import { motion, useMotionValue, useSpring } from "framer-motion";

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

      <motion.div
        style={{
          x,
          y,
          opacity,
        }}
        className="fixed top-0 left-0 z-[9999] size-5 rounded-full bg-[#ccc] pointer-events-none"
      ></motion.div>

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