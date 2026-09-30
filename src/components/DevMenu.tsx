"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { devMenu, type DevLink } from "@/lib/devMenu";

// Menüpunkt "/ Entwicklung /" – Verhalten wie in der empiria-Vorschau:
// Desktop öffnet bei Hover, überall per Klick; schließt bei Klick außerhalb oder Escape.
export function DevMenu() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);
  const pathname = usePathname();

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("click", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const isDesktop = () => window.innerWidth > 900;

  return (
    <div
      ref={ref}
      className="relative inline-flex items-center"
      onMouseEnter={() => {
        if (!isDesktop()) return;
        clearTimeout(timer.current);
        setOpen(true);
      }}
      onMouseLeave={() => {
        if (isDesktop()) timer.current = setTimeout(() => setOpen(false), 180);
      }}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-controls="dev-menu"
        onClick={() => setOpen((o) => (isDesktop() && ref.current?.matches(":hover") ? true : !o))}
        className={`inline-flex items-center gap-1 whitespace-nowrap text-[13px] sm:gap-1.5 sm:text-[15px] transition-colors hover:text-ink ${open ? "text-ink" : "text-muted"}`}
      >
        <span className="hidden sm:inline">/ Entwicklung /</span>
        <span className="sm:hidden">Entw.</span>
        <svg viewBox="0 0 12 12" aria-hidden="true" className={`size-3 transition-transform ${open ? "rotate-180" : ""}`}>
          <path d="M2.5 4.5 6 8l3.5-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <div
        id="dev-menu"
        className={`absolute right-[-14px] top-[calc(100%+18px)] z-50 max-h-[calc(100vh-120px)] w-[min(390px,calc(100vw-24px))] overflow-auto rounded-[18px] border border-line bg-white p-3 text-left shadow-[0_20px_50px_rgba(0,0,0,0.14)] transition duration-150 before:absolute before:inset-x-0 before:-top-5 before:h-5 ${
          open ? "visible translate-y-0 opacity-100" : "invisible translate-y-1.5 opacity-0"
        }`}
      >
        <p className="mb-3.5 rounded-[10px] bg-[#fff400] px-3 py-2.5 text-xs leading-snug text-[#1a1817]">
          <b className="mb-0.5 block text-[13px] font-semibold">Nur in der Entwicklungsumgebung sichtbar</b>
          Dieser Menüpunkt ist in der Live-Version nicht enthalten.
        </p>
        <Group label="Unterseiten" />
        {devMenu.unterseiten.map((l) => (
          <Item key={l.href} link={l} current={pathname === l.href} onNavigate={() => setOpen(false)} />
        ))}
        <Group label="Archiv" sub />
        {devMenu.archiv.map((l) => (
          <Item key={l.href} link={l} muted current={pathname === l.href} onNavigate={() => setOpen(false)} />
        ))}
      </div>
    </div>
  );
}

function Group({ label, sub }: { label: string; sub?: boolean }) {
  return (
    <p
      className={`mx-2 mb-2 mt-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-muted ${
        sub ? "mt-3.5 border-t border-line pt-3" : ""
      }`}
    >
      {label}
    </p>
  );
}

function Item({
  link,
  muted,
  current,
  onNavigate,
}: {
  link: DevLink;
  muted?: boolean;
  current?: boolean;
  onNavigate: () => void;
}) {
  return (
    <Link
      href={link.href}
      onClick={onNavigate}
      className={`flex items-center gap-3 rounded-[10px] px-2 py-2.5 text-ink hover:bg-paper ${current ? "bg-paper" : ""} ${
        link.indent ? "pl-[30px]" : ""
      }`}
    >
      <span
        className={`flex size-8 shrink-0 items-center justify-center rounded-lg text-xs font-semibold ${
          muted ? "bg-line text-muted" : "bg-navy text-white"
        }`}
      >
        {link.tag}
      </span>
      <span className="flex min-w-0 flex-col leading-tight">
        <b className="text-sm font-semibold">{link.title}</b>
        <small className="mt-px text-xs text-muted">{link.note}</small>
      </span>
    </Link>
  );
}
