"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { homePath, localeFromPath, texts, type Locale } from "@/lib/i18n";

const locales: Locale[] = ["de", "en"];

// Sprachumschalter DE/EN rechts neben „Kontakt“. Englisch gibt es für die Startseite (/en);
// von jeder Seite führt EN dorthin, DE zurück zur deutschen Startseite.
// Setzt außerdem das lang-Attribut des Dokuments passend zur Sprache.
export function LanguageSwitch() {
  const pathname = usePathname();
  const current = localeFromPath(pathname);

  useEffect(() => {
    document.documentElement.lang = current;
  }, [current]);

  return (
    <div role="group" aria-label={texts[current].nav.switchLabel} className="flex rounded-full bg-paper p-1">
      {locales.map((l) => {
        const active = l === current;
        return (
          <Link
            key={l}
            href={active ? pathname : homePath[l]}
            hrefLang={l}
            lang={l}
            aria-current={active ? "true" : undefined}
            aria-label={l === "de" ? "Deutsch" : "English"}
            className={`rounded-full px-2.5 py-1 text-[13px] font-semibold transition sm:px-3 sm:py-1.5 ${
              active ? "bg-white text-navy shadow-[0_2px_8px_rgba(24,42,54,0.12)]" : "text-muted hover:text-navy"
            }`}
          >
            {l.toUpperCase()}
          </Link>
        );
      })}
    </div>
  );
}
