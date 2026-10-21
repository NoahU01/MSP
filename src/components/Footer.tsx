"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { content, localeFromPath, texts } from "@/lib/i18n";

// Rechtstexte (Impressum, Datenschutz) gibt es nur auf Deutsch; die englische Seite verlinkt sie.
export function Footer() {
  const locale = localeFromPath(usePathname());
  const { company } = content(locale);
  const t = texts[locale].footer;
  return (
    <footer className="bg-deep text-white/80">
      {/* Links Firma und Kontaktwege, rechts die Rechtstexte – auf DE und EN gleich, auf daniel wie live. */}
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-14 sm:px-6 md:flex-row md:justify-between">
        <div>
          <p className="font-semibold text-white">{company.name}</p>
          <p className="mt-1 text-sm font-semibold text-brand">
            {company.slogan}
          </p>
          <p className="mt-3 text-sm leading-relaxed">
            {company.street}
            <br />
            {company.zip} {company.city}
          </p>
          <p className="mt-3 text-sm leading-relaxed">
            <a href={company.phoneHref} className="inline-block py-1 hover:text-white">
              {company.phone}
            </a>
            <br />
            <a href={`mailto:${company.email}`} className="inline-block py-1 hover:text-white">
              {company.email}
            </a>
          </p>
        </div>

        <div className="md:min-w-48">
          <p className="font-semibold text-white">{t.service}</p>
          <ul className="mt-2 space-y-0.5 text-sm">
            <li>
              <Link href="/impressum" className="inline-block py-1 hover:text-white">
                {t.imprint}
              </Link>
            </li>
            <li>
              <Link href="/datenschutz" className="inline-block py-1 hover:text-white">
                {t.privacy}
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <p className="mx-auto max-w-6xl px-4 py-6 text-xs text-white/50 sm:px-6">
          © {company.since}–{new Date().getFullYear()} {company.name} · {t.copyright}
        </p>
      </div>
    </footer>
  );
}
