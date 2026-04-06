import React from "react";
import LightPillar from "@/components/ui/LightPillar";

export default function Hero() {
  return (
    <section
      id="accueil"
      className="relative flex min-h-screen w-full overflow-hidden bg-black"
    >
      <div className="absolute inset-0 h-screen w-full">
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

      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-4 py-52 text-center text-white">
        <h1 className="mb-4 font-mono text-4xl sm:text-6xl md:text-8xl lg:text-9xl">
          SnapseTech
        </h1>

        <p className="mt-2 max-w-xl text-sm font-semibold sm:text-base md:text-xl">
          Votre passage au numerique, en toute simplicite.
        </p>

        <p className="mt-6 max-w-xl text-sm font-medium leading-relaxed md:max-w-2xl sm:text-base md:text-xl">
          Avec SnapseTech, dites adieu a la complexite technique. On vous
          accompagne avec des outils sur mesure pour digitaliser votre activite
          simplement.
        </p>

        <div className="mt-8 text-2xl flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
          <a
            href="#projets"
            className="w-full rounded-lg bg-white px-6 py-3 text-center font-medium text-black transition hover:scale-105 sm:w-auto"
          >
            Commencer maintenant
          </a>
        </div>
      </div>
    </section>
  );
}
