import Image from "next/image";
import type { SiteDictionary } from "@/i18n/dictionaries";

type AProposProps = {
  copy: SiteDictionary["apropos"];
};

export default function APropos({ copy }: AProposProps) {
  return (
    <section
      id="apropos"
      className="bg-[linear-gradient(180deg,#020202_0%,#0a0a0a_40%,#101010_100%)] px-4 py-18 text-white sm:px-6 sm:py-20 lg:px-8"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-12 sm:gap-16">
        <div className="grid items-center gap-8 sm:gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-white/45">
              {copy.label}
            </p>
            <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight text-balance sm:text-5xl lg:text-6xl">
              {copy.title}
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-7 text-pretty text-white/70 sm:text-lg sm:leading-8">
              {copy.description}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <a
                href="#projets-showcase"
                className="w-full rounded-full bg-white px-6 py-3 text-center text-sm font-semibold text-black transition hover:scale-[1.02] sm:w-auto"
              >
                {copy.ctaProjects}
              </a>
              <a
                href="#contact"
                className="w-full rounded-full border border-white/15 px-6 py-3 text-center text-sm font-semibold text-white/85 transition hover:bg-white/10 sm:w-auto"
              >
                {copy.ctaContact}
              </a>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-3 shadow-2xl">
            <div className="relative h-72 w-full overflow-hidden rounded-[1.4rem] sm:h-80 md:h-96">
              <Image
                src="/toph.jpg"
                alt={copy.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
            <div className="absolute bottom-5 left-5 rounded-2xl border border-white/10 bg-black/60 px-4 py-3 backdrop-blur-md sm:bottom-8 sm:left-8">
              <p className="text-xs uppercase tracking-[0.25em] text-white/55">
                {copy.sinceLabel}
              </p>
              <p className="mt-1 text-lg font-semibold text-white">2022</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 min-[480px]:grid-cols-2 md:grid-cols-4">
          {copy.stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-3xl border border-white/10 bg-white/5 px-5 py-6 text-center backdrop-blur-sm"
            >
              <p className="text-3xl font-semibold sm:text-4xl">{stat.value}</p>
              <p className="mt-2 text-sm text-pretty text-white/65">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="grid gap-5 sm:gap-6 lg:grid-cols-3">
          {copy.values.map((value) => (
            <article
              key={value.title}
              className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-sm sm:p-8"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-sm font-semibold text-white/80">
                {value.icon}
              </div>
              <h3 className="mt-6 text-xl font-semibold sm:text-2xl">{value.title}</h3>
              <p className="mt-3 text-base leading-7 text-pretty text-white/65">
                {value.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
