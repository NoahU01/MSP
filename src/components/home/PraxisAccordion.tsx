import Link from "next/link";
import { SectionHead } from "./story/SectionHead";
import { cases } from "@/lib/content";

// Praxisbeispiele als ruhiges Akkordeon (FAQ-Stil):
// eine Schriftgröße, ein Schnitt pro Zeile – Hierarchie nur über Farbe. Keine Großbuchstaben, keine Zweizeiler.
export function PraxisAccordion({ tone = "white", centered = false }: { tone?: "white" | "paper"; centered?: boolean }) {
  return (
    <section id="praxis" className={`py-24 sm:py-32 ${tone === "paper" ? "bg-paper" : "bg-white"}`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <SectionHead
        centered={centered}
        eyebrow="Anliegen von Geschäftspartnern"
        title="Aus unserem Tagesgeschäft"
        lead="Gemeinsam mit unseren Geschäftspartnern konkretisieren wir die Ziele, vereinbaren passende Maßnahmen und fokussieren uns auf die Umsetzung – konsequent und Schritt für Schritt."
      />
      <div className="mt-14 space-y-3">
        {cases.map((c) => (
          <details key={c.topic} className={`group rounded-2xl px-6 sm:px-8 ${tone === "paper" ? "bg-white" : "bg-paper"}`}>
            <summary className="flex cursor-pointer list-none items-center gap-6 py-6 [&::-webkit-details-marker]:hidden">
              <span className="flex-1 text-[17px] font-semibold leading-snug text-navy transition group-hover:text-brand">
                {c.headline}
              </span>
              <span className={`hidden shrink-0 rounded-full px-4 py-1.5 text-sm font-light text-muted md:inline ${tone === "paper" ? "bg-paper" : "bg-white"}`}>
                {c.topic}
              </span>
              <svg
                viewBox="0 0 16 16"
                aria-hidden="true"
                className="size-4 shrink-0 text-navy transition-transform duration-200 group-open:rotate-180"
              >
                <path d="M3.5 6 8 10.5 12.5 6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </summary>

            <div className="pb-8">
              <dl className="grid max-w-4xl gap-x-10 gap-y-4 md:grid-cols-[10rem_1fr]">
                <dt className="text-muted md:hidden">Thema</dt>
                <dd className="leading-relaxed text-ink md:hidden">{c.topic}</dd>
                <dt className="text-muted">Ausgangslage</dt>
                <dd className="leading-relaxed text-ink">{c.situation}</dd>
                <dt className="text-muted">Warum</dt>
                <dd className="leading-relaxed text-ink">{c.why}</dd>
                {c.assignment && (
                  <>
                    <dt className="text-muted">Auftrag</dt>
                    <dd className="leading-relaxed text-ink">{c.assignment}</dd>
                  </>
                )}
              </dl>
              <p className="mt-6 leading-relaxed text-ink md:ml-[calc(10rem+2.5rem)]">
                {c.question}{" "}
                <Link href="#kontakt" className="font-semibold text-brand underline-offset-4 hover:underline">
                  Sprechen Sie uns an →
                </Link>
              </p>
            </div>
          </details>
        ))}
      </div>
      </div>
    </section>
  );
}
