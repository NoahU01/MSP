import Link from "next/link";
import { Section } from "@/components/Section";
import { cases } from "@/lib/content";

// Praxisbeispiele als schlichtes Akkordeon (FAQ-Stil).
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
        <details key={c.title} className="group border-b border-line">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-lg font-semibold leading-snug text-navy transition hover:text-brand [&::-webkit-details-marker]:hidden">
            {c.title}
            <span
              aria-hidden="true"
              className="relative size-4 shrink-0 before:absolute before:inset-x-0 before:top-1/2 before:h-0.5 before:-translate-y-1/2 before:bg-current after:absolute after:inset-y-0 after:left-1/2 after:w-0.5 after:-translate-x-1/2 after:bg-current after:transition group-open:after:rotate-90 group-open:after:opacity-0"
            />
          </summary>
          <div className="max-w-3xl space-y-4 pb-7 leading-relaxed text-muted">
            <p>
              <strong className="font-semibold text-ink">Ausgangslage: </strong>
              {c.situation}
            </p>
            <p>
              <strong className="font-semibold text-ink">Warum es dem Kunden wichtig war: </strong>
              {c.why}
            </p>
            {c.assignment && (
              <p>
                <strong className="font-semibold text-ink">Der Auftrag: </strong>
                {c.assignment}
              </p>
            )}
            <p className="font-semibold text-ink">
              {c.question}{" "}
              <Link href="#kontakt" className="text-brand underline-offset-4 hover:underline">
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
