"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { services } from "@/lib/content";
import { devTools } from "@/lib/flags";
import { content, localeFromPath, texts } from "@/lib/i18n";

// Rechtstexte (Impressum, Datenschutz) gibt es nur auf Deutsch; die englische Seite verlinkt sie.
export function Footer() {
  const locale = localeFromPath(usePathname());
  const { company } = content(locale);
  const t = texts[locale].footer;
  return (
    <footer className="bg-deep text-white/80">
      <div
        className={`mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 ${devTools ? "md:grid-cols-3" : "md:grid-cols-2"}`}
      >
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

        {/* Leistungs-Unterseiten gibt es nur in der Entwicklungsumgebung */}
        {devTools && (
          <div>
            <p className="font-semibold text-white">{t.services}</p>
            <ul className="mt-2 space-y-0.5 text-sm">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/leistungen/${s.slug}`}
                    className="inline-block py-1 hover:text-white"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div>
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
