import React from "react";
import LightPillar from "@/components/ui/LightPillar";

export default function Hero() {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      <div className="absolute inset-0 w-full h-screen">
        <div style={{ width: "100%", height: "600px", position: "relative" }}>
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

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 py-16 text-center text-white">
        {/* NOM */}
        <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-extrabold mb-4 leading-tight">
          Malick Mbodji
        </h1>

        {/* TITRE */}
        <p className="mt-2 text-sm sm:text-base md:text-xl font-semibold max-w-xl">
          Développeur Full Stack · Architecte SaaS · Créateur d’expériences
          digitales
        </p>

        {/* DESCRIPTION */}
        <p className="mt-6 max-w-xl md:max-w-2xl text-sm sm:text-base md:text-xl font-light leading-relaxed">
          Je transforme des idées complexes en expériences web fluides —
          innovation et performance au service de votre vision.
        </p>

        {/* BOUTONS */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <button className="w-full sm:w-auto px-6 py-3 rounded-lg bg-white text-black font-extrabold hover:scale-105 transition">
            Voir mes projets →
          </button>

          <button className="w-full sm:w-auto px-6 py-3 rounded-lg border border-gray-600 hover:bg-white/10 transition">
            Me contacter
          </button>
        </div>
      </div>
    </div>
  );
}
