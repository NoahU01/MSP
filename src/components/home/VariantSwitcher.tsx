"use client";

import { useState, type ReactNode } from "react";

// Version 6: Sektion mit mehreren Darstellungsvarianten, per Dreieck-Pfeil links/rechts durchklickbar.
// Oben mittig ein kleines Etikett, welche Variante gerade zu sehen ist.
export function VariantSwitcher({ name, variants }: { name: string; variants: { label: string; node: ReactNode }[] }) {
  const [i, setI] = useState(0);
  const n = variants.length;
  const go = (d: number) => setI((x) => (x + d + n) % n);

  return (
    <div className="relative">
      {variants[i].node}

      {/* Etikett */}
      <div className="pointer-events-none absolute inset-x-0 top-3 z-30 flex justify-center">
        <div className="pointer-events-auto flex items-center gap-1 rounded-full bg-deep/85 px-1.5 py-1 text-[13px] font-semibold text-white shadow-lg backdrop-blur">
          {/* mobil: Pfeile im Etikett */}
          <button type="button" onClick={() => go(-1)} aria-label={`Vorherige Variante: ${name}`} className="flex size-7 items-center justify-center rounded-full hover:bg-white/15 sm:hidden">
            <svg viewBox="0 0 20 32" aria-hidden="true" className="h-3.5 w-2.5"><path d="M18 2 2 16l16 14Z" fill="currentColor" /></svg>
          </button>
          <span className="px-2.5 py-0.5" aria-live="polite">
            {name}: {variants[i].label} · {i + 1}/{n}
          </span>
          <button type="button" onClick={() => go(1)} aria-label={`Nächste Variante: ${name}`} className="flex size-7 items-center justify-center rounded-full hover:bg-white/15 sm:hidden">
            <svg viewBox="0 0 20 32" aria-hidden="true" className="h-3.5 w-2.5"><path d="M2 2l16 14L2 30Z" fill="currentColor" /></svg>
          </button>
        </div>
      </div>

      <Arrow dir="left" label={`Vorherige Variante: ${name}`} onClick={() => go(-1)} />
      <Arrow dir="right" label={`Nächste Variante: ${name}`} onClick={() => go(1)} />
    </div>
  );
}

function Arrow({ dir, label, onClick }: { dir: "left" | "right"; label: string; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className={`group absolute top-1/2 z-30 hidden h-24 w-12 -translate-y-1/2 items-center justify-center sm:flex ${
        dir === "left" ? "left-2" : "right-2"
      }`}
    >
      <svg viewBox="0 0 20 32" aria-hidden="true" className="h-11 w-7 text-deep/35 drop-shadow transition group-hover:scale-110 group-hover:text-brand">
        {dir === "left" ? <path d="M18 2 2 16l16 14Z" fill="currentColor" /> : <path d="M2 2l16 14L2 30Z" fill="currentColor" />}
      </svg>
    </button>
  );
}
