import Link from "next/link";
import { cases } from "@/lib/content";

// Praxisbeispiele nach empiria-Muster „Formate“: Text links, Akkordeon rechts.
// Einträge grau hinterlegt mit dunkelblauer Kante, Plus-Symbol als klares Akkordeon-Signal.
export function PraxisAccordion() {
  return (
    <section id="praxis" className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <p className="t-eyebrow text-brand">Anliegen von Geschäftspartnern</p>
          <h2 className="t-h2 mt-4 text-navy">
            Aus unserem <span className="u-accent">Tagesgeschäft.</span>
          </h2>
          <p className="t-lead mt-8 text-muted">
            Gemeinsam mit unseren Geschäftspartnern konkretisieren wir die Ziele, vereinbaren passende Maßnahmen
            und fokussieren uns auf die Umsetzung – konsequent und Schritt für Schritt.
          </p>
        </div>

        <div className="space-y-3">
          {cases.map((c) => (
            <details key={c.topic} className="group rounded-2xl border-l-4 border-navy bg-paper">
              <summary className="flex cursor-pointer list-none items-center gap-5 px-6 py-5 sm:px-7 [&::-webkit-details-marker]:hidden">
                <span className="flex-1">
                  <span className="block text-[15px] font-light text-muted">{c.topic}</span>
                  <span className="mt-0.5 block text-lg font-semibold leading-snug text-navy">{c.headline}</span>
                </span>
                <span
                  aria-hidden="true"
                  className="flex size-9 shrink-0 items-center justify-center rounded-full bg-white text-xl leading-none text-navy transition group-open:rotate-45 group-hover:bg-navy group-hover:text-white"
                >
                  +
                </span>
              </summary>
              <div className="space-y-5 px-6 pb-7 sm:px-7">
                <div>
                  <p className="text-[15px] font-semibold text-navy">Ausgangslage</p>
                  <p className="t-body mt-1 text-ink">{c.situation}</p>
                </div>
                <div>
                  <p className="text-[15px] font-semibold text-navy">Warum es dem Kunden wichtig war</p>
                  <p className="t-body mt-1 text-ink">{c.why}</p>
                </div>
                {c.assignment && (
                  <div>
                    <p className="text-[15px] font-semibold text-navy">Der Auftrag</p>
                    <p className="t-body mt-1 text-ink">{c.assignment}</p>
                  </div>
                )}
                <p className="t-body text-ink">
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
