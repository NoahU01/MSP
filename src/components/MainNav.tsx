"use client";

import { usePathname } from "next/navigation";
import { useState, type MouseEvent } from "react";
import { homePath, localeFromPath, texts } from "@/lib/i18n";

// Hauptmenü: springt zu den Sektionen der Startseite.
// Hat die aktuelle Seite die Sektion (z. B. eine Startseiten-Variante), wird dorthin gescrollt, sonst zur Startseite.
const ids = ["hebel", "bausteine", "einstieg"] as const;

// Menüeinträge in der Sprache der aktuellen Seite (Texte in src/lib/i18n.ts)
function useMainNav() {
  const locale = localeFromPath(usePathname());
  const t = texts[locale].nav;
  return { t, items: ids.map((id) => ({ id, label: t.items[id], href: `${homePath[locale]}#${id}` })) };
}

function go(e: MouseEvent<HTMLAnchorElement>, id: string, after?: () => void) {
  const el = document.getElementById(id);
  if (el) {
    e.preventDefault();
    el.scrollIntoView({ behavior: "smooth" });
    history.replaceState(null, "", `#${id}`);
  }
  after?.();
}

export function MainNav() {
  const { items: mainNav } = useMainNav();
  return (
    <ul className="hidden items-center gap-7 lg:flex">
      {mainNav.map((n) => (
        <li key={n.id}>
          <a href={n.href} onClick={(e) => go(e, n.id)} className="text-[15px] font-semibold text-navy transition hover:text-brand">
            {n.label}
          </a>
        </li>
      ))}
    </ul>
  );
}

export function MobileNav() {
  const { t, items: mainNav } = useMainNav();
  const [open, setOpen] = useState(false);
  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-nav"
        aria-label={open ? t.closeMenu : t.openMenu}
        onClick={() => setOpen((o) => !o)}
        className="flex size-9 items-center justify-center rounded-full text-navy hover:bg-paper"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" aria-hidden="true">
          {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
        </svg>
      </button>
      {open && (
        <ul id="mobile-nav" className="absolute inset-x-0 top-full bg-white px-4 pb-4 shadow-[0_20px_40px_rgba(24,42,54,0.08)] sm:px-6">
          {mainNav.map((n) => (
            <li key={n.id}>
              <a
                href={n.href}
                onClick={(e) => go(e, n.id, () => setOpen(false))}
                className="block rounded-xl px-3 py-3.5 text-lg font-semibold text-navy hover:bg-paper"
              >
                {n.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
