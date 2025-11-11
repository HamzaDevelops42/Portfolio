"use client"
import AnimatedCursor from "@/components/AnimatedCursor";
import HorizontalScroll from "@/components/HorizontalScroll";
import LightRays from "@/components/LightRays";
import ThemeSwitcher from "@/components/ThemeSwitcher";

export default function Page() {

  


  return (
    <main className="overflow-hidden bg-[var(--bg)] cursor-none">

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