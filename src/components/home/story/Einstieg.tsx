import Link from "next/link";
import { quickStart } from "@/lib/content";
import { IconCheck, IconProposal, IconTalk } from "../Icons";

// Schneller Einstieg als Ablauf: drei Stationen mit Icon-Kreisen, verbunden durch eine Linie,
// jede mit ihrem konkreten Ergebnis.
const stations = [
  { ...quickStart[0], icon: IconTalk, result: "Klarheit über den größten Hebel" },
  { ...quickStart[1], icon: IconProposal, result: "Entscheidungsreife Vorlage" },
  {
    title: "Umsetzung",
    text: "Mit dem Baustein, der passt – HR Business Partner, Lernwelt oder beides kombiniert.",
    icon: IconCheck,
    result: "Entwicklung, die messbar wirkt",
  },
];

export function Einstieg() {
  return (
    <section id="einstieg" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div className="max-w-2xl">
            <p className="t-eyebrow text-brand">So starten wir</p>
            <h2 className="t-h2 mt-4 text-navy">Zwei Schritte bis zur Entscheidung.</h2>
            <p className="t-lead mt-6 text-muted">
              Professionell, pragmatisch und ohne langes Vorgeplänkel – mit einem Partner, der weiß, was er tut.
            </p>
          </div>
          <Link
            href="#kontakt"
            className="rounded-full bg-brand px-7 py-3.5 font-semibold text-white transition hover:bg-brand-dark"
          >
            Klärungsgespräch vereinbaren
          </Link>
        </div>

        <ol className="relative mt-16 grid gap-6 rounded-[32px] bg-paper p-8 sm:p-12 md:grid-cols-3 md:gap-10 max-md:gap-12">
          {/* Verbindungslinie auf Höhe der Icon-Kreise */}
          <span aria-hidden="true" className="absolute left-[16%] right-[16%] top-[5.5rem] hidden h-0.5 bg-brand md:block" />
          {stations.map((s, i) => {
            const I = s.icon;
            const last = i === stations.length - 1;
            return (
              <li key={s.title} className="relative flex flex-col items-start md:items-center md:text-center">
                <span
                  className={`relative flex size-20 items-center justify-center rounded-full shadow-[0_12px_30px_rgba(24,42,54,0.12)] ${
                    last ? "bg-brand text-white" : "bg-white text-navy"
                  }`}
                >
                  <I className="size-9" />
                </span>
                <p className="mt-6 text-[15px] font-semibold text-brand">{last ? "Danach" : `Schritt ${i + 1}`}</p>
                <h3 className="t-h3 mt-1 text-navy">{s.title}</h3>
                <p className="t-body mt-3 text-muted md:mb-5">{s.text}</p>
                <p className="mt-5 rounded-full bg-white px-4 py-2 text-[15px] font-semibold text-navy md:mt-auto">{s.result}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
