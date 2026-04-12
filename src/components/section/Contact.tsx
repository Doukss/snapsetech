import { Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "@/components/section/ContactForm";
import type { SiteDictionary } from "@/i18n/dictionaries";

type ContactProps = {
  copy: SiteDictionary["contact"];
};

const iconMap = {
  mail: Mail,
  phone: Phone,
  mapPin: MapPin,
};

export default function Contact({ copy }: ContactProps) {
  return (
    <section
      id="contact"
      className="bg-[linear-gradient(180deg,#050505_0%,#0b0b0b_38%,#030303_100%)] px-4 py-20 text-white sm:px-6 sm:py-24 lg:px-8"
    >
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="flex flex-col justify-between rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm sm:p-10">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-white/45">
              {copy.label}
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-balance sm:text-5xl">
              {copy.title}
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-7 text-pretty text-white/68 sm:text-lg sm:leading-8">
              {copy.description}
            </p>
          </div>

          <div className="mt-10 grid gap-4">
            {copy.cards.map((item) => {
              const Icon = iconMap[item.icon];

              return (
                <a
                  key={item.title}
                  href={item.href}
                  className="flex items-start gap-4 rounded-[1.5rem] border border-white/10 bg-black/25 px-4 py-4 transition hover:border-emerald-400/35 hover:bg-white/[0.06] sm:px-5 sm:py-5"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-500/15 text-emerald-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-[0.24em] text-white/45">
                      {item.title}
                    </p>
                    <p className="mt-2 break-words text-sm font-medium text-white/90 sm:text-base">
                      {item.value}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        <ContactForm copy={copy.form} />
      </div>
    </section>
  );
}
