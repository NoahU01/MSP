"use client";

import Link from "next/link";
import { useState } from "react";
import { IconCheck } from "./Icons";

// Interaktiver „Hebel-Finder“.
// Die sechs Aussagen sind aus den Handlungsfeldern der beiden Bausteine abgeleitet (je drei pro Baustein)
// und müssen von MSP fachlich bestätigt werden. Die Auswahlfarbe ist bewusst neutral (Dunkelblau-Grau),
// damit sie das Ergebnis nicht vorwegnimmt.
const statements = [
  { key: "hrbp", text: "Zuständigkeiten und Rollen sind nicht klar geregelt." },
  { key: "lernwelt", text: "Führungskräften fehlt Handwerkszeug für ihre Rolle." },
  { key: "hrbp", text: "Eine Nachfolge oder Umstrukturierung steht an." },
  { key: "lernwelt", text: "Konflikte oder Kommunikation bremsen die Zusammenarbeit." },
  { key: "hrbp", text: "Abläufe und Schnittstellen kosten zu viel Zeit." },
  { key: "lernwelt", text: "Weiterbildung findet statt, kommt aber im Alltag nicht an." },
] as const;

const results = {
  hrbp: {
    title: "Ihr größter Hebel liegt in der Struktur.",
    baustein: "HR Business Partner",
    text: "Bevor Menschen ihre Leistung entfalten können, braucht es klare Rollen, tragfähige Strukturen und Abläufe, die funktionieren.",
    steps: ["Rollen und Verantwortlichkeiten klären", "Abläufe und Schnittstellen analysieren", "Nachfolge und Organisation zukunftsfähig aufstellen"],
  },
  lernwelt: {
    title: "Ihr größter Hebel liegt in der Kompetenz.",
    baustein: "Lernwelt",
    text: "Die Struktur trägt – jetzt geht es darum, dass Führungskräfte und Teams das Nötige können und es im Alltag anwenden.",
    steps: ["Kompetenzbedarf gezielt erheben", "Trainings und Coachings passgenau zuschneiden", "Transfer in den Arbeitsalltag sichern"],
  },
  beides: {
    title: "Ihr größter Hebel liegt in der Kombination.",
    baustein: "HR Business Partner + Lernwelt",
    text: "Struktur und Kompetenz hängen bei Ihnen zusammen: Neue Rollen und Abläufe wirken erst, wenn die Menschen sie auch ausfüllen können.",
    steps: ["Struktur und Rollen klären", "Führungskräfte und Teams gezielt befähigen", "Beides aufeinander abstimmen und nachhalten"],
  },
};

export function HebelFinder() {
  const [picked, setPicked] = useState<number[]>([]);
  const toggle = (i: number) => setPicked((p) => (p.includes(i) ? p.filter((x) => x !== i) : [...p, i]));

  const hrbp = picked.filter((i) => statements[i].key === "hrbp").length;
  const lern = picked.length - hrbp;
  const result = !picked.length ? null : hrbp && lern ? results.beides : hrbp ? results.hrbp : results.lernwelt;

  return (
    <div className="rounded-[32px] bg-white p-6 shadow-[0_30px_80px_rgba(24,42,54,0.10)] sm:p-10">
      {/* Tool-Kopf */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <span className="flex size-12 items-center justify-center rounded-2xl bg-navy text-white">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" aria-hidden="true" className="size-6">
              <path d="M4 7h10M18 7h2M4 17h4M12 17h8" />
              <circle cx="16" cy="7" r="2" />
              <circle cx="10" cy="17" r="2" />
            </svg>
          </span>
          <div>
            <p className="text-lg font-semibold text-navy">Hebel-Finder</p>
            <p className="text-[15px] font-light text-muted">Interaktiv · in 30 Sekunden zu Ihrem Ergebnis</p>
          </div>
        </div>
        <div className="flex items-center gap-4 text-[15px]">
          {picked.length > 0 && (
            <button type="button" onClick={() => setPicked([])} className="font-light text-muted underline-offset-4 hover:underline">
              Zurücksetzen
            </button>
          )}
          <span className="rounded-full bg-paper px-4 py-2 font-semibold text-navy" aria-live="polite">
            {picked.length} von {statements.length} ausgewählt
          </span>
        </div>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
        <div>
          <p className="t-body text-ink">
            <span className="font-semibold">Schritt 1:</span> Klicken Sie alles an, was auf Ihr Unternehmen zutrifft.
          </p>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {statements.map((s, i) => {
              const on = picked.includes(i);
              return (
                <li key={s.text}>
                  <button
                    type="button"
                    aria-pressed={on}
                    onClick={() => toggle(i)}
                    className={`flex h-full w-full cursor-pointer items-start gap-4 rounded-2xl p-5 text-left transition ${
                      on
                        ? "bg-white shadow-[0_0_0_2px_var(--color-deep)]"
                        : "bg-paper hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(24,42,54,0.08)]"
                    }`}
                  >
                    <span
                      aria-hidden="true"
                      className={`mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-lg transition ${
                        on ? "bg-deep text-white" : "bg-white shadow-[inset_0_0_0_1.5px_#b9c4cb]"
                      }`}
                    >
                      {on && <IconCheck className="size-4" />}
                    </span>
                    <span className="t-body leading-snug text-ink">{s.text}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Ergebnis */}
        <div className="flex flex-col rounded-3xl bg-paper p-7 sm:p-8" aria-live="polite">
          <p className="t-body text-ink">
            <span className="font-semibold">Schritt 2:</span> Ihr Ergebnis
          </p>
          <div className="mt-5 flex h-2.5 overflow-hidden rounded-full bg-white">
            <div className="bg-navy transition-all duration-500" style={{ width: `${(hrbp / (picked.length || 1)) * 100}%` }} />
            <div className="bg-brand transition-all duration-500" style={{ width: `${(lern / (picked.length || 1)) * 100}%` }} />
          </div>
          <div className="mt-2 flex justify-between text-[15px] font-light text-muted">
            <span>Struktur</span>
            <span>Kompetenz</span>
          </div>

          {result ? (
            <>
              <p className="t-h3 mt-8 text-navy">{result.title}</p>
              <p className="t-body mt-3 text-muted">{result.text}</p>
              <p className="t-body mt-6 font-semibold text-ink">Typische erste Schritte</p>
              <ul className="mt-3 space-y-2">
                {result.steps.map((st) => (
                  <li key={st} className="t-body flex items-start gap-3 text-ink">
                    <IconCheck className="mt-1 size-4 shrink-0 text-brand" />
                    {st}
                  </li>
                ))}
              </ul>
              <p className="t-body mt-6 text-muted">
                Passender Baustein: <span className="font-semibold text-navy">{result.baustein}</span>
              </p>
              <div className="mt-auto pt-8">
                <Link href="#kontakt" className="inline-flex rounded-full bg-brand px-6 py-3.5 font-semibold text-white transition hover:bg-brand-dark">
                  Ergebnis im Gespräch vertiefen
                </Link>
              </div>
            </>
          ) : (
            <div className="my-auto py-10 text-center">
              <p className="t-h3 text-navy">Noch keine Auswahl</p>
              <p className="t-body mx-auto mt-3 max-w-xs text-muted">
                Wählen Sie links mindestens eine Aussage – Ihr Ergebnis erscheint hier sofort.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
