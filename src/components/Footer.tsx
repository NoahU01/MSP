"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment } from "react";
import { content, localeFromPath, texts } from "@/lib/i18n";

// Schmale Fußzeile nach Vorbild empiria: links Firma und Jahr, rechts die Rechtslinks.
// Adresse und Kontaktwege stehen direkt darüber im Kontaktbereich.
// Rechtstexte gibt es nur auf Deutsch; die englische Seite verlinkt sie.
export function Footer() {
  const locale = localeFromPath(usePathname());
  const { company } = content(locale);
  const t = texts[locale].footer;
  const links = [
    { href: "/impressum", label: t.imprint },
    { href: "/datenschutz", label: t.privacy },
  ];
  return (
    <footer className="bg-deep text-[15px] font-light text-white/75">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-4 py-7 text-center sm:px-6 md:flex-row md:justify-between md:text-left">
        <p>
          {company.name} {new Date().getFullYear()}
        </p>
        <p className="flex flex-wrap justify-center gap-x-5 gap-y-1 md:gap-x-3">
          {links.map((l, i) => (
            <Fragment key={l.href}>
              {i > 0 && (
                <span aria-hidden="true" className="hidden md:inline">
                  |
                </span>
              )}
              <Link href={l.href} className="inline-block py-1 transition hover:text-white">
                {l.label}
              </Link>
            </Fragment>
          ))}
        </p>
      </div>
    </footer>
  );
}
