import Link from "next/link";
import type { ReactNode } from "react";
import { IconArrowRight, IconCheck, IconProposal, IconTalk } from "../Icons";

// Schneller Einstieg – drei Varianten, jeweils mit einer kurzen Zeile pro Schritt:
// "band"     dunkles Band mit drei Stationen und CTA (V2)
// "cards"    große Nummernkarten + CTA-Karte (V3)
// "timeline" Stationen mit Icon-Kreisen und Verbindungslinie (V4/V5)
const steps = [
  { title: "Klärungsgespräch", short: "Wo liegt Ihr größter Hebel?", icon: IconTalk },
  { title: "Konkreter Vorschlag", short: "Umsetzbar und entscheidungsreif.", icon: IconProposal },
  { title: "Umsetzung", short: "Mit dem Baustein, der passt.", icon: IconCheck },
];

const cta = "Klärungsgespräch vereinbaren";

function Head({ children }: { children?: ReactNode }) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-8">
      <div className="max-w-2xl">
        <p className="t-eyebrow text-brand">So starten wir</p>
        <h2 className="t-h2 mt-4 text-navy">Zwei Schritte bis zur Entscheidung.</h2>
      </div>
      {children}
    </div>
  );
}

export function Einstieg({ variant = "timeline" }: { variant?: "band" | "cards" | "timeline" }) {
  return (
    <section id="einstieg" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {variant === "band" && (
          <>
            <Head>
              <Link href="#kontakt" className="rounded-full bg-brand px-7 py-3.5 font-semibold text-white transition hover:bg-brand-dark">
                {cta}
              </Link>
            </Head>
            <div className="mt-14 grid items-center gap-8 rounded-[32px] bg-navy p-8 text-white sm:p-12 lg:grid-cols-[1fr_auto_1fr_auto_1fr] lg:gap-8">
              {steps.map((s, i) => (
                <StepBand key={s.title} n={i + 1} title={s.title} short={s.short} arrow={i < steps.length - 1} />
              ))}
            </div>
          </>
        )}

        {variant === "cards" && (
          <>
            <Head />
            {/* Schritt 1 hervorgehoben (türkis) mit CTA – dort steigen wir ein. Alle Karten gleich aufgebaut. */}
            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {steps.map((s, i) => {
                const I = s.icon;
                const first = i === 0;
                return (
                  <div
                    key={s.title}
                    className={`flex flex-col rounded-[28px] p-8 sm:p-10 ${first ? "bg-brand text-white shadow-[0_24px_60px_rgba(0,154,163,0.3)]" : "bg-paper"}`}
                  >
                    <div className="flex h-20 items-start justify-between">
                      <span className={`text-7xl font-light leading-none ${first ? "text-white" : "text-brand"}`}>{i + 1}</span>
                      <I className={`size-10 ${first ? "text-white" : "text-navy"}`} />
                    </div>
                    <h3 className={`t-h3 mt-10 ${first ? "text-white" : "text-navy"}`}>{s.title}</h3>
                    <p className={`mt-2 text-lg font-light ${first ? "text-white/90" : "text-muted"}`}>{s.short}</p>
                    {first && (
                      <div className="mt-auto pt-8">
                        <Link
                          href="#kontakt"
                          className="inline-flex whitespace-nowrap rounded-full bg-white px-6 py-3.5 font-semibold text-brand-dark transition hover:bg-paper"
                        >
                          {cta}
                        </Link>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </>
        )}

        {variant === "timeline" && (
          <>
            <Head />
            {/* Schritt 1 hervorgehoben, CTA zentriert direkt unter dem Ablauf als nächster Schritt. */}
            <ol className="relative mt-14 grid gap-12 rounded-[32px] bg-paper p-8 sm:p-12 md:grid-cols-3 md:gap-10">
              <span aria-hidden="true" className="absolute left-[16%] right-[16%] top-[5.5rem] hidden h-0.5 bg-brand/40 md:block" />
              {steps.map((s, i) => {
                const I = s.icon;
                const first = i === 0;
                return (
                  <li key={s.title} className="relative flex flex-col items-start md:items-center md:text-center">
                    <span
                      className={`flex size-20 items-center justify-center rounded-full ${
                        first ? "bg-brand text-white shadow-[0_14px_34px_rgba(0,154,163,0.4)] ring-8 ring-brand/15" : "bg-white text-navy shadow-[0_12px_30px_rgba(24,42,54,0.12)]"
                      }`}
                    >
                      <I className="size-9" />
                    </span>
                    <p className="mt-6 text-[15px] font-semibold text-brand">{i === 2 ? "Danach" : `Schritt ${i + 1}`}</p>
                    <h3 className="t-h3 mt-1 text-navy">{s.title}</h3>
                    <p className="mt-2 text-lg font-light text-muted">{s.short}</p>
                  </li>
                );
              })}
            </ol>
            <div className="mt-10 text-center">
              <Link href="#kontakt" className="inline-flex rounded-full bg-brand px-8 py-4 text-lg font-semibold text-white transition hover:bg-brand-dark">
                {cta}
              </Link>
            </div>
          </>
        )}
      </div>
    </section>
  );
}

function StepBand({ n, title, short, arrow }: { n: number; title: string; short: string; arrow: boolean }) {
  return (
    <>
      <div className="flex items-center gap-5">
        <span className="text-6xl font-light leading-none text-brand">{n}</span>
        <div>
          <p className="text-xl font-semibold leading-tight">{title}</p>
          <p className="mt-1 text-[15px] font-light text-white/75">{short}</p>
        </div>
      </div>
      {arrow && <IconArrowRight aria-hidden="true" className="hidden size-6 text-white/40 lg:block" />}
    </>
  );
}
