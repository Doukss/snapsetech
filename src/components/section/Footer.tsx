const links = [
  { label: "Accueil", href: "#accueil" },
  { label: "A propos", href: "#apropos" },
  { label: "Projets", href: "#projets-showcase" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black px-4 py-10 text-white sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-xl">
          <p className="text-sm uppercase tracking-[0.35em] text-white/38">
            Snapsetech
          </p>
          <p className="mt-4 text-2xl font-semibold sm:text-3xl">
            Des experiences digitales simples, solides et utiles.
          </p>
          <p className="mt-4 text-sm leading-7 text-white/58 sm:text-base">
            Nous accompagnons les entreprises qui veulent avancer plus vite avec
            des outils bien penses et faciles a faire evoluer.
          </p>
        </div>

        <div className="flex flex-col gap-6 lg:items-end">
          <nav className="flex flex-wrap gap-4 text-sm text-white/65">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="transition hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="text-sm text-white/45">
            <p>contact@snapsetech.com</p>
            <p className="mt-1">(c) 2026 Snapsetech. Tous droits reserves.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
