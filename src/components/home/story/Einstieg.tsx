import Link from "next/link";
import { quickStart } from "@/lib/content";
import { IconProposal, IconTalk } from "../Icons";
import { SectionHead } from "./SectionHead";

const stepIcons = [IconTalk, IconProposal];

// Schneller Einstieg: zwei Schritte + Handlungsaufforderung als dritte Kachel.
export function Einstieg({ centered = false, flushTop = false }: { centered?: boolean; flushTop?: boolean }) {
  return (
    <section id="einstieg" className={`bg-white pb-24 sm:pb-32 ${flushTop ? "" : "pt-24 sm:pt-32"}`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHead
          centered={centered}
          eyebrow="So starten wir"
          title="Zwei Schritte bis zur Entscheidung."
          lead="Professionell, pragmatisch und ohne langes Vorgeplänkel – mit einem Partner, der weiß, was er tut."
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {quickStart.map((s, i) => {
            const I = stepIcons[i];
            return (
              <div key={s.title} className="flex flex-col rounded-[28px] bg-paper p-8 sm:p-10">
                <div className="flex items-center justify-between">
                  <span className="text-6xl font-light leading-none text-brand">{i + 1}</span>
                  <I className="size-8 text-navy" />
                </div>
                <h3 className="t-h3 mt-10 text-navy">{s.title}</h3>
                <p className="t-body mt-3 text-muted">{s.text}</p>
              </div>
            );
          })}
          <div className="flex flex-col rounded-[28px] bg-navy p-8 text-white sm:p-10">
            <p className="t-h3">Und dann?</p>
            <p className="t-body mt-3 text-white/80">
              Umsetzung mit dem Baustein, der passt – HR Business Partner, Lernwelt oder beides.
            </p>
            <div className="mt-auto pt-10">
              <Link
                href="#kontakt"
                className="inline-flex whitespace-nowrap rounded-full bg-white px-6 py-3.5 font-semibold text-navy transition hover:bg-paper"
              >
                Gespräch vereinbaren
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
