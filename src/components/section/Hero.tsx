import React from "react";
import LightPillar from "@/components/ui/LightPillar";
import type { SiteDictionary } from "@/i18n/dictionaries";

type HeroProps = {
  copy: SiteDictionary["hero"];
};

export default function Hero({ copy }: HeroProps) {
  return (
    <section
      id="accueil"
      className="relative flex min-h-[100svh] w-full overflow-hidden bg-black"
    >
      <div className="absolute inset-0 h-full w-full">
        <div style={{ width: "100%", height: "100%", position: "relative" }}>
          <LightPillar
            topColor="#5227FF"
            bottomColor="#FF9FFC"
            intensity={1}
            rotationSpeed={0.3}
            glowAmount={0.002}
            pillarWidth={3}
            pillarHeight={0.4}
            noiseIntensity={0.5}
            pillarRotation={25}
            interactive={false}
            mixBlendMode="screen"
            quality="high"
          />
        </div>
      </div>

      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-4 pb-20 pt-32 text-center text-white sm:pb-24 sm:pt-40 md:py-44">
        <h1 className="mb-4 text-balance font-mono text-4xl leading-none sm:text-6xl md:text-8xl lg:text-9xl">
          {copy.title}
        </h1>

        <p className="mt-2 max-w-xl text-pretty text-sm font-semibold sm:text-base md:text-xl">
          {copy.tagline}
        </p>

        <p className="mt-6 max-w-xl text-pretty text-sm font-medium leading-relaxed sm:text-base md:max-w-2xl md:text-xl">
          {copy.description}
        </p>

        <div className="mt-8 flex w-full flex-col gap-4 text-xs sm:w-auto sm:flex-row">
          <a
            href="#contact"
            className="w-full rounded-lg bg-white px-6 py-3 text-center text-sm font-medium text-black transition hover:scale-105 sm:w-auto"
          >
            {copy.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
