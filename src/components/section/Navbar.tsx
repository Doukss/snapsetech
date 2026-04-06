import Link from "next/link";

const navItems = [
  { href: "#accueil", label: "Accueil" },
  { href: "#apropos", label: "A propos" },
  { href: "#projets", label: "Les projets" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-8">
      <nav className="flex w-full max-w-4xl items-center justify-between rounded-full border border-white/15 bg-black/45 px-5 py-3 shadow-[0_0_30px_rgba(0,0,0,0.35)] backdrop-blur-xl">
        
        {/* Logo */}
        <Link href="#accueil" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-green-400 to-emerald-600">
            <span className="text-sm font-bold text-white">S</span>
          </div>
          <span className="hidden text-lg font-semibold text-white sm:block">
            Snapsetech
          </span>
        </Link>

        {/* Navigation Links */}
        <ul className="flex flex-wrap items-center justify-center gap-2 text-sm text-white sm:gap-3">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="rounded-full px-4 py-2 font-medium text-white/80 transition hover:bg-white/10 hover:text-white"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Bouton Contact avec background */}
        <Link
          href="#contact"
          className="rounded-full bg-[#FF006E] px-5 py-2 text-sm font-semibold text-white transition hover:from-green-600 hover:to-emerald-700 hover:shadow-lg"
        >
          Commencer
        </Link>
      </nav>
    </header>
  );
}