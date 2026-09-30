"use client";

import Link from "next/link";
import { useState } from "react";
import { bausteine } from "@/lib/content";

// Interaktiver „Hebel-Finder“: Aussagen anklicken → Empfehlung HR Business Partner, Lernwelt oder Kombination.
const statements = [
  { key: "hrbp", text: "Zuständigkeiten und Rollen sind nicht klar geregelt." },
  { key: "lernwelt", text: "Führungskräfte brauchen mehr Handwerkszeug für ihre Rolle." },
  { key: "hrbp", text: "Eine Nachfolge oder Umstrukturierung steht an." },
  { key: "lernwelt", text: "Konflikte oder Kommunikation bremsen die Zusammenarbeit." },
  { key: "hrbp", text: "Abläufe und Schnittstellen kosten zu viel Zeit." },
  { key: "lernwelt", text: "Weiterbildung findet statt, kommt aber im Alltag nicht an." },
] as const;

export function HebelFinder() {
  const [picked, setPicked] = useState<number[]>([]);
  const toggle = (i: number) => setPicked((p) => (p.includes(i) ? p.filter((x) => x !== i) : [...p, i]));

  const hrbp = picked.filter((i) => statements[i].key === "hrbp").length;
  const lern = picked.length - hrbp;
  const total = picked.length || 1;
  const [hrbpInfo, lernInfo] = bausteine;

  let result: { title: string; text: string } | null = null;
  if (picked.length) {
    if (hrbp && lern)
      result = {
        title: "Ihr Hebel: beide Bausteine kombiniert",
        text: "Struktur und Kompetenz greifen bei Ihnen ineinander. Neue Rollen und Abläufe brauchen Menschen, die sie ausfüllen können – hier wirkt die Kombination am stärksten.",
      };
    else if (hrbp)
      result = { title: `Ihr Hebel: ${hrbpInfo.name}`, text: `${hrbpInfo.slogan} Wir schaffen Klarheit in Struktur, Rollen und Prozessen.` };
    else result = { title: `Ihr Hebel: ${lernInfo.name}`, text: `${lernInfo.slogan} Wir setzen bei Wissen und sozialer Kompetenz an.` };
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
      <ul className="grid gap-3 sm:grid-cols-2">
        {statements.map((s, i) => {
          const on = picked.includes(i);
          return (
            <li key={s.text}>
              <button
                type="button"
                aria-pressed={on}
                onClick={() => toggle(i)}
                className={`flex h-full w-full items-start gap-3 rounded-2xl border p-5 text-left transition ${
                  on ? "border-brand bg-brand-soft" : "border-line bg-white hover:border-brand/50"
                }`}
              >
                <span
                  aria-hidden="true"
                  className={`mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-md border text-xs font-semibold ${
                    on ? "border-brand bg-brand text-white" : "border-line"
                  }`}
                >
                  {on && "✓"}
                </span>
                <span className="leading-snug text-ink">{s.text}</span>
              </button>
            </li>
          );
        })}
      </ul>

      <div className="flex flex-col rounded-3xl bg-white p-7 shadow-[0_20px_50px_rgba(24,42,54,0.08)] ring-1 ring-line sm:p-9" aria-live="polite">
        <p className="text-sm font-semibold uppercase tracking-widest text-muted">Ihr Ergebnis</p>
        <div className="mt-5 flex h-3 overflow-hidden rounded-full bg-paper">
          <div className="bg-navy transition-all duration-500" style={{ width: `${(hrbp / total) * 100}%` }} />
          <div className="bg-brand transition-all duration-500" style={{ width: `${(lern / total) * 100}%` }} />
        </div>
        <div className="mt-3 flex justify-between text-sm">
          <span className="font-semibold text-navy">Struktur · {hrbpInfo.name}</span>
          <span className="font-semibold text-brand-dark">Kompetenz · {lernInfo.name}</span>
        </div>
        {result ? (
          <>
            <p className="mt-8 text-2xl font-semibold leading-snug text-navy">{result.title}</p>
            <p className="mt-3 leading-relaxed text-muted">{result.text}</p>
            <Link
              href="#kontakt"
              className="mt-8 inline-flex self-start rounded-full bg-brand px-6 py-3 font-semibold text-white transition hover:bg-brand-dark"
            >
              Im Klärungsgespräch vertiefen
            </Link>
          </>
        ) : (
          <p className="mt-8 leading-relaxed text-muted">
            Wählen Sie links alles aus, was auf Ihr Unternehmen zutrifft – wir zeigen Ihnen, wo Ihr größter Hebel liegt.
          </p>
        )}
      </div>
    </div>
  );
}
