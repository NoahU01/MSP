import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ContactPeople } from "@/components/ContactPeople";
import { BausteinDetails } from "@/components/home/BausteinDetails";
import { DownloadSection } from "@/components/home/DownloadSection";
import { InfoModal } from "@/components/home/InfoModal";
import { Marquee, marqueeTopics } from "@/components/home/Marquee";
import { PraxisAccordion } from "@/components/home/PraxisAccordion";
import { bausteine, company, facts, pains, quickStart } from "@/lib/content";

export const metadata: Metadata = { title: "Startseite – Version 3" };

// Version 3 „Zentriert & Marker“: zentrierter Hero mit Textmarker, Laufband, Problem-Karten mit Wasserzeichen-Ziffern,
// Bausteine mit Pop-up als zweite Ebene, Kennzahlen, Einstieg in 2 Schritten. Story wie Version 2.

export default function StartseiteVersion3() {
  return (
    <>
      {/* Hero – zentriert (nur hier), Fingerabdruck als Wasserzeichen dahinter */}
      <section className="relative overflow-hidden bg-white">
        <Image
          src="/images/fingerprint.jpg"
          alt=""
          width={1280}
          height={818}
          priority
          className="pointer-events-none absolute left-1/2 top-1/2 w-[900px] max-w-none -translate-x-1/2 -translate-y-1/2 opacity-45 mix-blend-multiply"
        />
        <div className="relative mx-auto max-w-4xl px-4 pb-20 pt-20 text-center sm:px-6 sm:pb-28 sm:pt-32">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand">
            Zukunftsfaktor Mensch · seit {company.since}
          </p>
          <h1 className="mt-6 text-4xl font-semibold leading-[1.1] tracking-tight text-balance text-navy sm:text-6xl">
            Ihr HR Businesspartner für <span className="hl-marker">Führungs-, Entwicklungs- und Veränderungsprozesse</span>
          </h1>
          <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
            Wir begleiten Unternehmen individuell, ganzheitlich und nachhaltig – als Berater, Trainer
            und Moderatoren für KMU und Großunternehmen in ganz Deutschland.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="#kontakt" className="rounded-full bg-brand px-7 py-3.5 font-semibold text-white transition hover:bg-brand-dark">
              Klärungsgespräch vereinbaren
            </Link>
            <Link href="#bausteine" className="rounded-full border border-navy/20 bg-white/80 px-7 py-3.5 font-semibold text-navy transition hover:border-brand hover:text-brand">
              Unsere zwei Bausteine
            </Link>
          </div>
          <Link href="#problem" aria-label="Weiter nach unten" className="mx-auto mt-16 flex size-11 animate-bounce items-center justify-center rounded-full border border-line text-navy">
            ↓
          </Link>
        </div>
      </section>

      <Marquee items={marqueeTopics} />

      {/* Problem – Karten mit großen Wasserzeichen-Ziffern */}
      <section id="problem" className="bg-paper py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand">Die Ausgangslage</p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-balance text-navy sm:text-5xl">
              Mehr erreichen – <span className="hl-marker">mit den Menschen, die Sie haben.</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              Märkte werden enger, Kosten höher, Fachkräfte knapper. Wer wirtschaftlich erfolgreich
              bleiben will, muss die vorhandenen Mitarbeitenden optimal einsetzen und entwickeln – in
              der Struktur ebenso wie in der Kompetenz.
            </p>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {pains.map((p, i) => (
              <div key={p.title} className="relative overflow-hidden rounded-3xl bg-white p-8 shadow-sm ring-1 ring-line">
                <span aria-hidden="true" className="pointer-events-none absolute -right-2 -top-6 text-[120px] font-semibold leading-none text-brand/10">
                  {i + 1}
                </span>
                <h3 className="relative text-xl font-semibold leading-snug text-navy">{p.title}</h3>
                <p className="relative mt-3 leading-relaxed text-muted">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bausteine – zwei große Karten, Details als Pop-up */}
      <section id="bausteine" className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand">Unsere Lösung</p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-balance text-navy sm:text-5xl">
              {company.slogan}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              Zwei Bausteine, ein Ziel: Ihr Unternehmenserfolg. Einzeln buchbar – oder ineinandergreifend.
            </p>
          </div>

          <div className="relative mt-14 grid gap-6 lg:grid-cols-2">
            {bausteine.map((b, i) => {
              const hrbp = b.key === "hrbp";
              return (
                <article
                  key={b.key}
                  className={`flex flex-col rounded-3xl p-8 sm:p-10 ${hrbp ? "bg-navy text-white" : "bg-brand-soft text-ink"}`}
                >
                  <p className={`text-sm font-semibold uppercase tracking-widest ${hrbp ? "text-white/70" : "text-brand-dark"}`}>
                    Baustein {i + 1} · {b.claim}
                  </p>
                  <h3 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">{b.name}</h3>
                  <p className={`mt-3 text-xl font-semibold leading-snug ${hrbp ? "text-white" : "text-navy"}`}>{b.slogan}</p>
                  <p className={`mt-6 leading-relaxed ${hrbp ? "text-white/80" : "text-muted"}`}>{b.question}</p>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {b.focus.map((f) => (
                      <li key={f} className={`rounded-full px-3.5 py-1.5 text-sm font-semibold ${hrbp ? "bg-white/10" : "bg-white"}`}>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-8">
                    <InfoModal
                      label="Mehr erfahren"
                      title={`${b.name} – ${b.claim}`}
                      buttonClassName={`rounded-full px-6 py-3 font-semibold transition ${hrbp ? "bg-white text-navy hover:bg-brand-soft" : "bg-navy text-white hover:bg-navy-dark"}`}
                    >
                      <BausteinDetails baustein={b} />
                    </InfoModal>
                  </div>
                </article>
              );
            })}
            {/* „+“ in der Mitte: Bausteine greifen ineinander */}
            <span aria-hidden="true" className="absolute left-1/2 top-1/2 hidden size-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-3xl font-semibold text-navy shadow-lg ring-1 ring-line lg:flex">
              +
            </span>
          </div>
        </div>
      </section>

      {/* Kennzahlen */}
      <section className="border-y border-line bg-white">
        <div className="mx-auto grid max-w-6xl divide-y divide-line px-4 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:px-6">
          {facts.map((f) => (
            <div key={f.label} className="py-10 text-center">
              <p className="text-5xl font-semibold tracking-tight text-navy">{f.value}</p>
              <p className="mx-auto mt-2 max-w-[22ch] text-muted">{f.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Einstieg in 2 Schritten */}
      <section id="einstieg" className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand">So starten wir</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance text-navy sm:text-5xl">
              Zwei Schritte bis zur Entscheidung.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              Professionell, pragmatisch und ohne langes Vorgeplänkel – mit einem Partner, der weiß, was er tut.
            </p>
          </div>
          <div className="relative mt-14 grid gap-6 md:grid-cols-2">
            {quickStart.map((s, i) => (
              <div key={s.title} className="rounded-3xl border border-line p-8 sm:p-10">
                <span className="text-sm font-semibold uppercase tracking-widest text-brand">Schritt {i + 1}</span>
                <h3 className="mt-3 text-2xl font-semibold text-navy">{s.title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{s.text}</p>
              </div>
            ))}
            <span aria-hidden="true" className="absolute left-1/2 top-1/2 hidden size-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-brand text-xl text-white md:flex">
              →
            </span>
          </div>
          <div className="mt-10 text-center">
            <Link href="#kontakt" className="inline-flex rounded-full bg-brand px-8 py-4 font-semibold text-white transition hover:bg-brand-dark">
              Klärungsgespräch vereinbaren
            </Link>
          </div>
        </div>
      </section>

      <PraxisAccordion tone="paper" />
      <DownloadSection />
      <ContactPeople />
    </>
  );
}
