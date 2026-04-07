"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { href: "#accueil", label: "Accueil" },
  { href: "#apropos", label: "A propos" },
  { href: "#projets-showcase", label: "Les projets" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-8">
      <nav className="flex w-full max-w-4xl items-center justify-between rounded-full border border-white/15 bg-black/45 px-5 py-3 shadow-[0_0_30px_rgba(0,0,0,0.35)] backdrop-blur-xl">
        {/* Logo */}
        <Link href="#accueil" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-green-400 to-emerald-600">
            <span className="text-sm font-bold text-white">S</span>
          </div>
          <span className="text-lg font-semibold text-white">Snapsetech</span>
        </Link>

        {/* Menu desktop */}
        <ul className="hidden gap-2 text-sm text-white sm:flex sm:gap-3">
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

        {/* Bouton Contact desktop */}
        <Link
          href="#contact"
          className="hidden rounded-full bg-[#FF006E] px-5 py-2 text-sm font-semibold text-white transition hover:from-green-600 hover:to-emerald-700 hover:shadow-lg sm:block"
        >
          Commencer
        </Link>

        {/* Menu hamburger mobile */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          className="flex flex-col gap-1.5 sm:hidden"
        >
          <span
            className={`h-0.5 w-6 rounded-full bg-white transition-all duration-300 ${
              isOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 rounded-full bg-white transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 rounded-full bg-white transition-all duration-300 ${
              isOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Menu mobile déroulant */}
      <div
        id="mobile-menu"
        className={`absolute left-4 right-4 top-[88px] overflow-hidden rounded-2xl border border-white/15 bg-black/80 backdrop-blur-xl transition-all duration-300 sm:hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-2 p-4">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block rounded-xl px-4 py-3 font-medium text-white/80 transition hover:bg-white/10 hover:text-white"
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block rounded-xl bg-[#FF006E] px-4 py-3 text-center font-semibold text-white transition hover:from-green-600 hover:to-emerald-700"
            >
              Commencer
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
