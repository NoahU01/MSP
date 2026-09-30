"use client";

import { usePathname } from "next/navigation";

// CTA „Kontakt“ in der Menüzeile: auf Startseiten zur Kontaktsektion der Seite, sonst zur Startseite.
export function ContactButton() {
  const pathname = usePathname();
  const onHome = pathname === "/" || pathname.startsWith("/startseite/");
  return (
    <a
      href={onHome ? "#kontakt" : "/#kontakt"}
      aria-label="Kontakt"
      className="flex items-center gap-2 rounded-full bg-brand p-2 text-sm font-semibold text-white transition hover:bg-brand-dark sm:px-5 sm:py-2.5"
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="size-4 sm:hidden">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-10 6L2 7" />
      </svg>
      <span className="hidden sm:inline">Kontakt</span>
    </a>
  );
}
