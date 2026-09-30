import Link from "next/link";
import { Section } from "@/components/Section";
import { cases } from "@/lib/content";

// Praxisbeispiele als ruhiges Akkordeon (FAQ-Stil):
// eine Schriftgröße, ein Schnitt pro Zeile – Hierarchie nur über Farbe. Keine Großbuchstaben, keine Zweizeiler.
export function PraxisAccordion({ tone }: { tone?: "white" | "paper" }) {
  return (
    <Section
      id="praxis"
      tone={tone}
      eyebrow="Anliegen von Geschäftspartnern"
      title="Aus unserem Tagesgeschäft"
      intro="Gemeinsam mit unseren Geschäftspartnern konkretisieren wir die Ziele, vereinbaren passende Maßnahmen und fokussieren uns auf die Umsetzung – konsequent und Schritt für Schritt."
    >
      <div className="mt-12 border-t border-line">
        {cases.map((c) => (
          <details key={c.topic} className="group border-b border-line">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-[17px] font-semibold leading-snug [&::-webkit-details-marker]:hidden">
              <span>
                <span className="whitespace-nowrap text-muted">
                  {c.topic}
                  <span aria-hidden="true" className="px-2 text-line">
                    /
                  </span>
                </span>{" "}
                <span className="text-navy transition group-hover:text-brand">{c.headline}</span>
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
    </Section>
  );
}
