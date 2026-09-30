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
        <details key={c.topic} className="group border-b border-line">
          <summary className="grid cursor-pointer list-none grid-cols-[1fr_auto] items-center gap-x-6 gap-y-1 py-5 transition hover:text-brand md:grid-cols-[15rem_1fr_auto] [&::-webkit-details-marker]:hidden">
              <span className="text-xs font-semibold uppercase tracking-widest text-brand md:text-[13px]">{c.topic}</span>
              <span className="col-start-1 row-start-2 text-lg font-semibold leading-snug text-navy md:col-start-2 md:row-start-1">
                {c.headline}
              </span>
              <span
                aria-hidden="true"
                className="relative col-start-2 row-span-2 row-start-1 size-4 shrink-0 text-navy before:absolute before:inset-x-0 before:top-1/2 before:h-0.5 before:-translate-y-1/2 before:bg-current after:absolute after:inset-y-0 after:left-1/2 after:w-0.5 after:-translate-x-1/2 after:bg-current after:transition group-open:after:rotate-90 group-open:after:opacity-0 md:col-start-3 md:row-span-1"
              />
            </summary>
          <div className="max-w-3xl space-y-4 pb-7 leading-relaxed text-muted md:ml-[calc(15rem+1.5rem)]">
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
