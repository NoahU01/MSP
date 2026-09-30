"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { devMenu, startseitenVarianten, storyboard, type DevLink } from "@/lib/devMenu";

const SUB_W = 280;

// Menüpunkt "/ Entwicklung /" – Verhalten wie in der empiria-Vorschau:
// Desktop öffnet bei Hover, überall per Klick; schließt bei Klick außerhalb oder Escape.
// Kategorie "Startseite" mit zweiter Ebene: öffnet nach rechts (fehlt dort Platz, nach links), mobil darunter.
export function DevMenu() {
  const [open, setOpen] = useState(false);
  const [sub, setSub] = useState(false);
  const [subStyle, setSubStyle] = useState<CSSProperties>();
  const ref = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const itemRef = useRef<HTMLButtonElement>(null);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);
  const pathname = usePathname();
  const close = () => {
    setOpen(false);
    setSub(false);
  };

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) close();
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    document.addEventListener("click", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const isDesktop = () => window.innerWidth > 900;

  const openSub = () => {
    if (isDesktop() && ref.current && panelRef.current && itemRef.current) {
      const w = ref.current.getBoundingClientRect();
      const p = panelRef.current.getBoundingClientRect();
      const it = itemRef.current.getBoundingClientRect();
      const right = p.right + 8 + SUB_W <= window.innerWidth;
      setSubStyle({ top: it.top - w.top - 12, left: right ? p.right - w.left + 8 : p.left - w.left - 8 - SUB_W, width: SUB_W });
    }
    setSub(true);
  };

  const onVariantPage = startseitenVarianten.some((l) => l.href === pathname);

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
        if (isDesktop()) timer.current = setTimeout(close, 180);
      }}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-controls="dev-menu"
        onClick={() => setOpen((o) => (isDesktop() && ref.current?.matches(":hover") ? true : !o))}
        className={`inline-flex items-center gap-1 whitespace-nowrap text-[13px] transition-colors hover:text-ink sm:gap-1.5 sm:text-[15px] ${open ? "text-ink" : "text-muted"}`}
      >
        <span className="hidden sm:inline">/ Entwicklung /</span>
        <span className="sm:hidden">Entw.</span>
        <svg viewBox="0 0 12 12" aria-hidden="true" className={`size-3 transition-transform ${open ? "rotate-180" : ""}`}>
          <path d="M2.5 4.5 6 8l3.5-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <div
        id="dev-menu"
        ref={panelRef}
        className={`absolute right-[-14px] top-[calc(100%+18px)] z-50 max-h-[calc(100vh-120px)] w-[min(390px,calc(100vw-24px))] max-[900px]:fixed max-[900px]:inset-x-3 max-[900px]:top-[72px] max-[900px]:w-auto overflow-auto rounded-[18px] border border-line bg-white p-3 text-left shadow-[0_20px_50px_rgba(0,0,0,0.14)] transition duration-150 before:absolute before:inset-x-0 before:-top-5 before:h-5 ${
          open ? "visible translate-y-0 opacity-100" : "invisible translate-y-1.5 opacity-0"
        }`}
      >
        <p className="mb-3.5 rounded-[10px] bg-[#fff400] px-3 py-2.5 text-xs leading-snug text-[#1a1817]">
          <b className="mb-0.5 block text-[13px] font-semibold">Nur in der Entwicklungsumgebung sichtbar</b>
          Dieser Menüpunkt ist in der Live-Version nicht enthalten.
        </p>

        <Group label="Startseite" />
        <div onMouseEnter={() => isDesktop() && setSub(false)}>
          <Item link={storyboard} current={pathname === storyboard.href} onNavigate={close} />
        </div>
        <button
          ref={itemRef}
          type="button"
          aria-expanded={sub}
          aria-controls="dev-sub"
          onMouseEnter={() => isDesktop() && openSub()}
          onClick={() => (sub ? setSub(false) : openSub())}
          className={`flex w-full items-center gap-3 rounded-[10px] px-2 py-2.5 text-left text-ink hover:bg-paper ${sub || onVariantPage ? "bg-paper" : ""}`}
        >
          <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-navy text-xs font-semibold text-white">⌂</span>
          <span className="flex min-w-0 flex-1 flex-col leading-tight">
            <b className="text-sm font-semibold">Varianten Startseite</b>
            <small className="mt-px text-xs text-muted">Version 1–6</small>
          </span>
          <svg viewBox="0 0 12 12" aria-hidden="true" className={`size-3 shrink-0 text-muted transition-transform max-[900px]:rotate-90 ${sub ? "max-[900px]:-rotate-90" : ""}`}>
            <path d="M4.5 2.5 8 6l-3.5 3.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        {/* mobil: zweite Ebene direkt darunter */}
        {sub && (
          <div className="ml-4 border-l-2 border-line pl-2 min-[901px]:hidden">
            {startseitenVarianten.map((l) => (
              <Item key={l.href} link={l} current={pathname === l.href} onNavigate={close} />
            ))}
          </div>
        )}

        <div onMouseEnter={() => isDesktop() && setSub(false)}>
          <Group label="Unterseiten" sub />
          {devMenu.unterseiten.map((l) => (
            <Item key={l.href} link={l} current={pathname === l.href} onNavigate={close} />
          ))}
          <Group label="Archiv" sub />
          {devMenu.archiv.map((l) => (
            <Item key={l.href} link={l} muted current={pathname === l.href} onNavigate={close} />
          ))}
        </div>
      </div>

      {/* Desktop: zweite Ebene als eigenes Fenster neben dem Menü */}
      {open && sub && subStyle && (
        <div
          id="dev-sub"
          style={subStyle}
          className="absolute z-50 hidden rounded-[18px] border border-line bg-white p-3 text-left shadow-[0_20px_50px_rgba(0,0,0,0.14)] min-[901px]:block"
        >
          <Group label="Varianten Startseite" />
          {startseitenVarianten.map((l) => (
            <Item key={l.href} link={l} current={pathname === l.href} onNavigate={close} />
          ))}
        </div>
      )}
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
