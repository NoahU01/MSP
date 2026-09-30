"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const nav = [
  { href: "/#leistungen", label: "Leistungen" },
  { href: "/#worst-case", label: "Worst Case GmbH" },
  { href: "/#vorgehen", label: "Vorgehen" },
  { href: "/#praxis", label: "Praxisbeispiele" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:h-20 sm:px-6">
        <Link href="/" className="shrink-0" onClick={() => setOpen(false)}>
          <Image
            src="/images/logo-msp.png"
            alt="MSP – HR Business Partner"
            width={300}
            height={132}
            priority
            className="h-10 w-auto sm:h-12"
          />
        </Link>

        <nav aria-label="Hauptnavigation" className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-ink/80 transition hover:text-brand"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/#kontakt"
            className="rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-dark"
          >
            Kontakt
          </Link>
        </nav>

        <button
          type="button"
          className="-mr-2 p-2 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
          onClick={() => setOpen((o) => !o)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile Navigation" className="border-t border-line bg-white md:hidden">
          <ul className="mx-auto max-w-6xl px-4 py-2">
            {[...nav, { href: "/#kontakt", label: "Kontakt" }].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-base font-medium text-ink"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
