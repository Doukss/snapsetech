import Image from "next/image";

const stats = [
  { value: "+50", label: "Entreprises digitalisees" },
  { value: "+12", label: "Pays couverts" },
  { value: "100%", label: "Satisfaction client" },
  { value: "24/7", label: "Support disponible" },
];

const valeurs = [
  {
    title: "Innovation",
    description: "Des solutions adaptees aux realites du terrain.",
    icon: "01",
  },
  {
    title: "Simplicite",
    description: "Une technologie claire, utile et accessible.",
    icon: "02",
  },
  {
    title: "Impact",
    description: "Des outils penses pour faire grandir votre activite.",
    icon: "03",
  },
];

export default function APropos() {
  return (
    <section
      id="apropos"
      className="bg-[linear-gradient(180deg,#020202_0%,#0a0a0a_40%,#101010_100%)] px-4 py-20 text-white sm:px-6 lg:px-8"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-16">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-white/45">
              A propos
            </p>
            <h2 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Digitaliser votre activite avec plus de clarte, de vitesse et de
              serenite.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
              Chez Snapsetech, nous concevons des experiences web, des outils
              metier et des parcours digitaux simples a prendre en main. Notre
              objectif est de transformer les besoins complexes en solutions
              fiables, elegantes et faciles a utiliser.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projets"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:scale-[1.02]"
              >
                Decouvrir nos projets
              </a>
              <a
                href="#contact"
                className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white/85 transition hover:bg-white/10"
              >
                Parler de votre projet
              </a>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-3 shadow-2xl">
            <div className="relative h-80 w-full overflow-hidden rounded-[1.4rem] md:h-96">
              <Image
                src="/toph.jpg"
                alt="Equipe Snapsetech"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
            <div className="absolute bottom-8 left-8 rounded-2xl border border-white/10 bg-black/60 px-4 py-3 backdrop-blur-md">
              <p className="text-xs uppercase tracking-[0.25em] text-white/55">
                Depuis
              </p>
              <p className="mt-1 text-lg font-semibold text-white">2024</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-3xl border border-white/10 bg-white/5 px-5 py-6 text-center backdrop-blur-sm"
            >
              <p className="text-3xl font-semibold sm:text-4xl">{stat.value}</p>
              <p className="mt-2 text-sm text-white/65">{stat.label}</p>
            </div>
          ))}
        </div>

        <div id="projets" className="grid gap-6 lg:grid-cols-3">
          {valeurs.map((valeur) => (
            <article
              key={valeur.title}
              className="rounded-[1.75rem] border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-sm font-semibold text-white/80">
                {valeur.icon}
              </div>
              <h3 className="mt-6 text-2xl font-semibold">{valeur.title}</h3>
              <p className="mt-3 text-base leading-7 text-white/65">
                {valeur.description}
              </p>
            </article>
          ))}
        </div>

        {/* <div
          id="contact"
          className="rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.12),rgba(255,255,255,0.04))] px-6 py-10 text-center backdrop-blur-sm sm:px-10"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-white/50">
            Contact
          </p>
          <h3 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Pret a construire quelque chose de solide ?
          </h3>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
            Nous vous aidons a transformer une idee, un besoin ou un process en
            solution digitale concrete.
          </p>
          <a
            href="mailto:contact@snapsetech.com"
            className="mt-8 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:scale-[1.02]"
          >
            contact@snapsetech.com
          </a>
        </div> */}
      </div>
    </section>
  );
}
