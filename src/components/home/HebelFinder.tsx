"use client";

import Link from "next/link";
import { useState, type ReactNode } from "react";
import { IconCheck } from "./Icons";

// Interaktiver „Hebel-Finder“.
// Die sechs Aussagen sind aus den Handlungsfeldern der beiden Bausteine abgeleitet (je drei pro Baustein)
// und müssen von MSP fachlich bestätigt werden. Die Auswahlfarbe ist bewusst neutral,
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
    steps: ["Rollen und Verantwortlichkeiten klären", "Abläufe und Schnittstellen analysieren", "Nachfolge und Organisation aufstellen"],
  },
  lernwelt: {
    title: "Ihr größter Hebel liegt in der Kompetenz.",
    baustein: "Lernwelt",
    text: "Die Struktur trägt – jetzt geht es darum, dass Führungskräfte und Teams das Nötige können und im Alltag anwenden.",
    steps: ["Kompetenzbedarf gezielt erheben", "Trainings und Coachings zuschneiden", "Transfer in den Alltag sichern"],
  },
  beides: {
    title: "Ihr größter Hebel liegt in der Kombination.",
    baustein: "HR Business Partner + Lernwelt",
    text: "Struktur und Kompetenz hängen bei Ihnen zusammen: Neue Rollen und Abläufe wirken erst, wenn die Menschen sie ausfüllen können.",
    steps: ["Struktur und Rollen klären", "Führungskräfte und Teams befähigen", "Beides aufeinander abstimmen"],
  },
};

function StepHead({ n, title, hint }: { n: number; title: string; hint: ReactNode }) {
  return (
    <div className="flex min-h-14 items-center gap-4">
      <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-navy text-[17px] font-semibold text-white">{n}</span>
      <div>
        <p className="text-lg font-semibold leading-tight text-navy">{title}</p>
        <p className="text-[15px] font-light text-muted">{hint}</p>
      </div>
    </div>
  );
}

export function HebelFinder() {
  const [picked, setPicked] = useState<number[]>([]);
  const toggle = (i: number) => setPicked((p) => (p.includes(i) ? p.filter((x) => x !== i) : [...p, i]));

  const hrbp = picked.filter((i) => statements[i].key === "hrbp").length;
  const lern = picked.length - hrbp;
  const result = !picked.length ? null : hrbp && lern ? results.beides : hrbp ? results.hrbp : results.lernwelt;

  return (
    <div className="overflow-hidden rounded-[32px] bg-white shadow-[0_30px_80px_rgba(24,42,54,0.12)]">
      {/* Tool-Leiste */}
      <div className="flex flex-wrap items-center justify-between gap-4 bg-deep px-6 py-5 text-white sm:px-10">
        <div className="flex items-center gap-3">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" aria-hidden="true" className="size-6 text-brand">
            <path d="M4 7h10M18 7h2M4 17h4M12 17h8" />
            <circle cx="16" cy="7" r="2" />
            <circle cx="10" cy="17" r="2" />
          </svg>
          <p className="text-[17px] font-semibold">Hebel-Finder</p>
          <span className="rounded-full bg-white/10 px-3 py-1 text-[13px] font-semibold text-white/80">Interaktiv</span>
        </div>
        <div className="flex items-center gap-4 text-[15px]">
          {picked.length > 0 && (
            <button type="button" onClick={() => setPicked([])} className="font-light text-white/70 underline-offset-4 hover:text-white hover:underline">
              Zurücksetzen
            </button>
          )}
          <span className="font-semibold" aria-live="polite">
            {picked.length} von {statements.length} ausgewählt
          </span>
        </div>
      </div>

      <div className="grid lg:grid-cols-[1.2fr_0.8fr]">
        {/* Schritt 1 */}
        <div className="p-6 sm:p-10">
          <StepHead n={1} title="Was trifft auf Ihr Unternehmen zu?" hint="Mehrfachauswahl möglich – einfach anklicken" />
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {statements.map((s, i) => {
              const on = picked.includes(i);
              return (
                <li key={s.text}>
                  <button
                    type="button"
                    aria-pressed={on}
                    onClick={() => toggle(i)}
                    className={`flex h-full min-h-24 w-full cursor-pointer items-center gap-4 rounded-2xl px-5 py-4 text-left transition ${
                      on
                        ? "bg-deep text-white shadow-[0_12px_28px_rgba(24,42,54,0.25)]"
                        : "bg-paper text-ink hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_0_0_2px_var(--color-deep)]"
                    }`}
                  >
                    <span
                      aria-hidden="true"
                      className={`flex size-7 shrink-0 items-center justify-center rounded-lg transition ${
                        on ? "bg-brand text-white" : "bg-white text-transparent shadow-[inset_0_0_0_2px_#9fb0bb]"
                      }`}
                    >
                      <IconCheck className="size-4" />
                    </span>
                    <span className="text-[17px] leading-snug">{s.text}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Schritt 2 */}
        <div className="flex flex-col bg-paper p-6 sm:p-10" aria-live="polite">
          <StepHead n={2} title="Ihr Ergebnis" hint={result ? "Erste Einordnung" : "Erscheint nach Ihrer Auswahl"} />
          <div className="mt-8">
            <div className="flex h-3 overflow-hidden rounded-full bg-white">
              <div className="bg-navy transition-all duration-500" style={{ width: `${(hrbp / (picked.length || 1)) * 100}%` }} />
              <div className="bg-brand transition-all duration-500" style={{ width: `${(lern / (picked.length || 1)) * 100}%` }} />
            </div>
            <div className="mt-2 flex justify-between text-[15px] font-light text-muted">
              <span>Struktur</span>
              <span>Kompetenz</span>
            </div>
          </div>

          {result ? (
            <div className="mt-8 flex flex-1 flex-col">
              <p className="t-h3 text-navy">{result.title}</p>
              <p className="t-body mt-3 text-muted">{result.text}</p>
              <ul className="mt-5 space-y-2">
                {result.steps.map((st) => (
                  <li key={st} className="flex items-start gap-3 text-[17px] font-light text-ink">
                    <IconCheck className="mt-1 size-4 shrink-0 text-brand" />
                    {st}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-[15px] font-light text-muted">
                Passender Baustein: <span className="font-semibold text-navy">{result.baustein}</span>
              </p>
              <div className="mt-auto pt-8">
                <Link href="#kontakt" className="inline-flex rounded-full bg-brand px-6 py-3.5 font-semibold text-white transition hover:bg-brand-dark">
                  Ergebnis im Gespräch vertiefen
                </Link>
              </div>
            </div>
          ) : (
            <div className="mt-8 flex flex-1 flex-col items-center justify-center rounded-2xl bg-white px-6 py-12 text-center">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="size-10 text-brand">
                <path d="M9 11V5a1.5 1.5 0 0 1 3 0v5m0-1a1.5 1.5 0 0 1 3 0v1m0-.5a1.5 1.5 0 0 1 3 0V14a6 6 0 0 1-6 6h-.6a5 5 0 0 1-4-2L4.6 14.8a1.5 1.5 0 0 1 2.3-1.9L9 15" />
              </svg>
              <p className="mt-4 text-lg font-semibold text-navy">Wählen Sie aus, was zutrifft.</p>
              <p className="mt-1 text-[15px] font-light text-muted">Ihr Ergebnis erscheint hier sofort.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
