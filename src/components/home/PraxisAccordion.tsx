import Link from "next/link";
import { content, texts, type Locale } from "@/lib/i18n";
import { FadeScroll } from "./FadeScroll";

// Praxisbeispiele nach empiria-Muster „Formate“: Text links, Akkordeon rechts.
// Einträge grau hinterlegt mit dunkelblauer Kante, Plus-Symbol als klares Akkordeon-Signal.
// name="praxis": Es ist immer nur ein Eintrag geöffnet (natives exklusives Akkordeon).
// Nur vier Einträge sichtbar, der fünfte läuft transparent aus – der Rest ist per Scrollen erreichbar.
// look: "edge" = grau mit dunkelblauer Kante links, "fill" = nur hellgrau hinterlegt, "outline" = dünner hellgrauer Rand.
const looks = {
  edge: "rounded-2xl border-l-4 border-navy bg-paper",
  fill: "rounded-2xl bg-paper",
  outline: "rounded-2xl border border-line bg-white",
};

export function PraxisAccordion({ look = "edge", locale = "de" }: { look?: keyof typeof looks; locale?: Locale }) {
  const { cases } = content(locale);
  const t = texts[locale].praxis;
  return (
    <section id="praxis" className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <p className="t-eyebrow text-brand">{t.eyebrow}</p>
          <h2 className="t-h2 mt-4 text-navy">
            {t.title[0]}
            <span className="u-accent">{t.title[1]}</span>
          </h2>
          <p className="t-lead mt-8 text-muted">{t.lead}</p>
          <p className="t-lead mt-6 text-muted">{t.references}</p>
        </div>

        <FadeScroll visible={4}>
        <div className="space-y-3 pb-2">
          {cases.map((c) => (
            <details key={c.topic} name="praxis" className={`group ${looks[look]}`}>
              <summary className="flex cursor-pointer list-none items-center gap-5 px-6 py-5 sm:px-7 [&::-webkit-details-marker]:hidden">
                <span className="flex-1">
                  <span className="block text-[15px] font-light text-muted">{c.topic}</span>
                  <span className="mt-0.5 block text-lg font-semibold leading-snug text-navy">{c.headline}</span>
                </span>
                <span
                  aria-hidden="true"
                  className={`flex size-9 shrink-0 items-center justify-center rounded-full ${look === "outline" ? "bg-paper" : "bg-white"} text-xl leading-none text-navy transition group-open:rotate-45 group-hover:bg-navy group-hover:text-white`}
                >
                  +
                </span>
              </summary>
              <div className="space-y-5 px-6 pb-7 sm:px-7">
                <div>
                  <p className="text-[15px] font-semibold text-navy">{t.situation}</p>
                  <p className="t-body mt-1 text-ink">{c.situation}</p>
                </div>
                <div>
                  <p className="text-[15px] font-semibold text-navy">{t.why}</p>
                  <p className="t-body mt-1 text-ink">{c.why}</p>
                </div>
                {c.assignment && (
                  <div>
                    <p className="text-[15px] font-semibold text-navy">{t.assignment}</p>
                    <p className="t-body mt-1 text-ink">{c.assignment}</p>
                  </div>
                )}
                <p className="t-body text-ink">
                  {c.question}{" "}
                  <Link href="#kontakt" className="font-semibold text-brand underline-offset-4 hover:underline">
                    {t.talk}
                  </Link>
                </p>
              </div>
            </details>
          ))}
        </div>
        </FadeScroll>
      </div>
    </section>
  );
}
