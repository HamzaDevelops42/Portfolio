"use client"
import HorizontalScroll from "@/components/HorizontalScroll";
import LightRays from "@/components/LightRays";
import LiquidEther from "@/components/LiquidEther";
import { Navbar } from "@/components/Navbar";
import ThemeSwitcher from "@/components/ThemeSwitcher";

export default function Page() {
  return (
    <main className="overflow-hidden bg-[var(--bg)]">


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