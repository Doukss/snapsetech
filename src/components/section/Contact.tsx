import { Mail, MapPin, Phone } from "lucide-react";

const contactCards = [
  {
    title: "Email",
    value: "contact@snapsetech.com",
    href: "mailto:contact@snapsetech.com",
    icon: Mail,
  },
  {
    title: "Telephone",
    value: "+221 77 000 00 00",
    href: "tel:+221770000000",
    icon: Phone,
  },
  {
    title: "Zone d'intervention",
    value: "Dakar, Abidjan, Douala et a distance",
    href: "#contact",
    icon: MapPin,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[linear-gradient(180deg,#050505_0%,#0b0b0b_38%,#030303_100%)] px-4 py-24 text-white sm:px-6 lg:px-8"
    >
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="flex flex-col justify-between rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-sm sm:p-10">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-white/45">
              Contact
            </p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
              Parlons de votre prochain projet digital.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/68 sm:text-lg">
              Que vous lanciez une plateforme, un site vitrine, un outil metier
              ou une refonte, nous pouvons vous aider a cadrer, concevoir et
              livrer quelque chose de solide.
            </p>
          </div>

          <div className="mt-10 grid gap-4">
            {contactCards.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.title}
                  href={item.href}
                  className="flex items-start gap-4 rounded-[1.5rem] border border-white/10 bg-black/25 px-5 py-5 transition hover:border-emerald-400/35 hover:bg-white/[0.06]"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-500/15 text-emerald-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-white/45">
                      {item.title}
                    </p>
                    <p className="mt-2 text-base font-medium text-white/90">
                      {item.value}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(16,185,129,0.12),rgba(255,255,255,0.05))] p-8 backdrop-blur-sm sm:p-10">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block">
              <span className="text-sm text-white/65">Nom</span>
              <input
                type="text"
                placeholder="Votre nom"
                className="mt-2 w-full rounded-2xl border border-white/10 bg-black/25 px-4 py-3 text-white outline-none transition placeholder:text-white/30 focus:border-emerald-400/40"
              />
            </label>

            <label className="block">
              <span className="text-sm text-white/65">Entreprise</span>
              <input
                type="text"
                placeholder="Nom de votre entreprise"
                className="mt-2 w-full rounded-2xl border border-white/10 bg-black/25 px-4 py-3 text-white outline-none transition placeholder:text-white/30 focus:border-emerald-400/40"
              />
            </label>

            <label className="block sm:col-span-2">
              <span className="text-sm text-white/65">Email</span>
              <input
                type="email"
                placeholder="vous@entreprise.com"
                className="mt-2 w-full rounded-2xl border border-white/10 bg-black/25 px-4 py-3 text-white outline-none transition placeholder:text-white/30 focus:border-emerald-400/40"
              />
            </label>

            <label className="block sm:col-span-2">
              <span className="text-sm text-white/65">Votre besoin</span>
              <textarea
                rows={6}
                placeholder="Expliquez-nous votre projet, vos objectifs ou les problemes a resoudre."
                className="mt-2 w-full rounded-[1.5rem] border border-white/10 bg-black/25 px-4 py-3 text-white outline-none transition placeholder:text-white/30 focus:border-emerald-400/40"
              />
            </label>
          </div>

          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-md text-sm leading-6 text-white/55">
              Reponse sous 24h ouvrables. Nous pouvons demarrer par un cadrage
              rapide et sans engagement.
            </p>
            <a
              href="mailto:contact@snapsetech.com?subject=Demande%20de%20contact%20Snapsetech"
              className="inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:scale-[1.02]"
            >
              Envoyer une demande
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
