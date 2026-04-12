"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import type { SiteDictionary } from "@/i18n/dictionaries";

type ProjetsProps = {
  copy: SiteDictionary["projets"];
};

export default function Projets({ copy }: ProjetsProps) {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjets = copy.items.filter(
    (projet) => activeCategory === "all" || projet.category === activeCategory,
  );

  return (
    <section
      id="projets-showcase"
      className="relative overflow-hidden bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.14),transparent_30%),linear-gradient(180deg,#040404_0%,#0a0a0a_40%,#050505_100%)] px-4 py-24 text-white sm:px-6 lg:px-8"
    >
      <div className="absolute inset-0 opacity-30">
        <div className="absolute left-0 top-16 h-72 w-72 rounded-full bg-emerald-500/15 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-green-400/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-sm uppercase tracking-[0.35em] text-white/45">
            {copy.label}
          </p>
          <h2 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            {copy.title}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
            {copy.description}
          </p>
        </motion.div>

        <section className="mt-12">
          <div className="flex flex-wrap justify-center gap-3">
            {copy.categories.map((category) => {
              const isActive = activeCategory === category.value;

              return (
                <button
                  type="button"
                  key={category.value}
                  onClick={() => setActiveCategory(category.value)}
                  className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                    isActive
                      ? "border-emerald-400/60 bg-emerald-500 text-black shadow-[0_0_30px_rgba(16,185,129,0.25)]"
                      : "border-white/10 bg-white/5 text-white/70 hover:border-white/20 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {category.label}
                </button>
              );
            })}
          </div>
        </section>

        <section className="mt-14">
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {filteredProjets.map((projet, index) => (
              <motion.article
                key={projet.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                viewport={{ once: true, amount: 0.2 }}
                className="group overflow-hidden rounded-[1.8rem] border border-white/10 bg-white/[0.04] backdrop-blur-sm"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={projet.image}
                    alt={projet.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" />

                  <div className="absolute left-5 top-5 flex flex-wrap gap-2">
                    {projet.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/15 bg-black/35 px-3 py-1 text-xs text-white/85 backdrop-blur-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <p className="text-sm font-medium uppercase tracking-[0.25em] text-emerald-300/80">
                      {projet.client}
                    </p>
                    <h3 className="mt-2 text-2xl font-semibold text-white">
                      {projet.title}
                    </h3>
                  </div>
                </div>

                <div className="space-y-5 p-6">
                  <p className="text-sm leading-7 text-white/68">
                    {projet.description}
                  </p>

                  <div className="rounded-2xl border border-emerald-400/15 bg-emerald-500/10 p-4">
                    <p className="text-xs uppercase tracking-[0.25em] text-emerald-300/70">
                      {copy.resultLabel}
                    </p>
                    <p className="mt-2 text-base font-semibold text-emerald-200">
                      {projet.results}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {projet.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/65"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href="https://mosaik-front.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-300 transition hover:gap-3 hover:text-emerald-200"
                  >
                    {copy.viewProject}
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </div>
              </motion.article>
            ))}
          </div>

          {filteredProjets.length === 0 && (
            <div className="rounded-[1.8rem] border border-dashed border-white/10 bg-white/[0.03] px-6 py-14 text-center">
              <p className="text-white/55">{copy.empty}</p>
            </div>
          )}
        </section>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mt-16 rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(16,185,129,0.18),rgba(255,255,255,0.04))] px-6 py-10 text-center backdrop-blur-sm sm:px-10"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-white/45">
            {copy.collabLabel}
          </p>
          <h3 className="mt-4 text-3xl font-semibold sm:text-4xl">
            {copy.collabTitle}
          </h3>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
            {copy.collabDescription}
          </p>
          <a
            href="#contact"
            className="mt-8 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:scale-[1.02]"
          >
            {copy.collabCta}
          </a>
        </motion.div>
      </div>
    </section>
  );
}