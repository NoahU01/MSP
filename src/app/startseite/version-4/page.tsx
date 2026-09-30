import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ContactPeople } from "@/components/ContactPeople";
import { BausteinDetails } from "@/components/home/BausteinDetails";
import { DownloadSection } from "@/components/home/DownloadSection";
import { HebelFinder } from "@/components/home/HebelFinder";
import { PraxisAccordion } from "@/components/home/PraxisAccordion";
import { bausteine, company, pains, quickStart } from "@/lib/content";

export const metadata: Metadata = { title: "Startseite – Version 4" };

// Version 4 „Hebel-Finder“: Split-Hero mit Einstieg in den Finder, Problem als große typografische Liste,
// interaktiver Hebel-Finder (Struktur vs. Kompetenz), Bausteine kompakt mit Aufklapper, Zeitstrahl. Story wie Version 2.

export default function StartseiteVersion4() {
  return (
    <>
      {/* Hero – geteilt: Text links, Finder-Teaser rechts */}
      <section className="relative overflow-hidden bg-white">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 pb-20 pt-16 sm:px-6 sm:pt-24 lg:grid-cols-[1.15fr_0.85fr] lg:pb-28">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-brand">
              Zukunftsfaktor Mensch · seit {company.since}
            </p>
            <h1 className="mt-5 text-4xl font-semibold leading-[1.1] tracking-tight text-balance text-navy sm:text-6xl">
              Ihr HR Businesspartner für Führungs-, Entwicklungs- und Veränderungsprozesse
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
              Wir begleiten Unternehmen individuell, ganzheitlich und nachhaltig – als Berater, Trainer
              und Moderatoren für KMU und Großunternehmen in ganz Deutschland.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="#kontakt" className="rounded-full bg-brand px-7 py-3.5 font-semibold text-white transition hover:bg-brand-dark">
                Klärungsgespräch vereinbaren
              </Link>
              <Link href="#hebel" className="rounded-full border border-navy/20 px-7 py-3.5 font-semibold text-navy transition hover:border-brand hover:text-brand">
                Wo liegt mein Hebel?
              </Link>
            </div>
          </div>

          <Link
            href="#hebel"
            className="group relative block overflow-hidden rounded-[28px] bg-paper p-8 ring-1 ring-line transition hover:ring-brand sm:p-10"
          >
            <Image
              src="/images/fingerprint.jpg"
              alt=""
              width={1280}
              height={818}
              className="pointer-events-none absolute -bottom-10 -right-24 w-[420px] max-w-none opacity-60 mix-blend-multiply"
            />
            <p className="relative text-sm font-semibold uppercase tracking-widest text-muted">In 30 Sekunden</p>
            <p className="relative mt-3 text-3xl font-semibold leading-tight text-navy">Wo liegt Ihr größter Hebel?</p>
            <div className="relative mt-8 space-y-3">
              {bausteine.map((b) => (
                <div key={b.key} className="flex items-center justify-between rounded-2xl bg-white px-5 py-4 shadow-sm">
                  <span>
                    <span className="block text-xs font-semibold uppercase tracking-widest text-muted">{b.claim}</span>
                    <span className={`font-semibold ${b.key === "hrbp" ? "text-navy" : "text-brand-dark"}`}>{b.name}</span>
                  </span>
                  <span className={`size-3 rounded-full ${b.key === "hrbp" ? "bg-navy" : "bg-brand"}`} />
                </div>
              ))}
            </div>
            <p className="relative mt-8 font-semibold text-brand">
              Jetzt herausfinden <span className="inline-block transition group-hover:translate-y-1">↓</span>
            </p>
          </Link>
        </div>
      </section>

      {/* Problem – große typografische Liste */}
      <section className="border-t border-line bg-white py-20 sm:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-brand">Die Ausgangslage</p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-balance text-navy sm:text-4xl">
              Mehr erreichen – mit den Menschen, die Sie haben.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              Der Druck auf den wirtschaftlichen Erfolg steigt, die Ressourcen werden knapper. Umso
              wichtiger ist, dass jede Investition in Menschen dort ansetzt, wo sie am meisten bewirkt.
            </p>
          </div>
          <ol className="divide-y divide-line border-y border-line">
            {pains.map((p, i) => (
              <li key={p.title} className="grid grid-cols-[3rem_1fr] gap-4 py-8">
                <span className="text-sm font-semibold text-brand">0{i + 1}</span>
                <div>
                  <h3 className="text-2xl font-semibold leading-snug text-ink sm:text-3xl">{p.title}</h3>
                  <p className="mt-3 max-w-xl leading-relaxed text-muted">{p.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Hebel-Finder */}
      <section id="hebel" className="bg-paper py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand">Hebel-Finder</p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-balance text-navy sm:text-5xl">
              Struktur oder Kompetenz – was trifft auf Sie zu?
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              {company.slogan} Dafür setzen wir genau dort an, wo Ihr größter Hebel liegt.
            </p>
          </div>
          <div className="mt-12">
            <HebelFinder />
          </div>
        </div>
      </section>

      {/* Bausteine kompakt */}
      <section id="bausteine" className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand">Unsere zwei Bausteine</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-balance text-navy sm:text-4xl">
            Einzeln buchbar. Stark in Kombination.
          </h2>
          <div className="mt-12 divide-y divide-line border-y border-line">
            {bausteine.map((b, i) => (
              <details key={b.key} className="group py-8" open={i === 0}>
                <summary className="grid cursor-pointer list-none gap-4 sm:grid-cols-[12rem_1fr_auto] sm:items-center [&::-webkit-details-marker]:hidden">
                  <span className={`text-sm font-semibold uppercase tracking-widest ${b.key === "hrbp" ? "text-navy" : "text-brand-dark"}`}>
                    Baustein {i + 1}
                  </span>
                  <span>
                    <span className="block text-3xl font-semibold tracking-tight text-navy">{b.name}</span>
                    <span className="mt-1 block text-lg text-muted">{b.slogan}</span>
                  </span>
                  <span aria-hidden="true" className="flex size-11 items-center justify-center rounded-full border border-line text-xl text-navy transition group-open:rotate-45 group-open:border-brand group-open:text-brand">
                    +
                  </span>
                </summary>
                <div className="mt-8 sm:pl-[13rem]">
                  <BausteinDetails baustein={b} />
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Zeitstrahl: Einstieg */}
      <section id="einstieg" className="bg-white pb-20 sm:pb-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="rounded-[28px] bg-brand-soft p-8 sm:p-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-dark">So starten wir</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-navy sm:text-4xl">Zwei Schritte bis zur Entscheidung.</h2>
            <ol className="relative mt-12 grid gap-10 md:grid-cols-3">
              <span aria-hidden="true" className="absolute left-0 right-0 top-6 hidden h-0.5 bg-brand/30 md:block" />
              {[...quickStart, { title: "Umsetzung", text: "Mit dem Baustein, der passt – HR Business Partner, Lernwelt oder beides." }].map((s, i) => (
                <li key={s.title} className="relative">
                  <span
                    className={`relative flex size-12 items-center justify-center rounded-full text-lg font-semibold ${
                      i < 2 ? "bg-navy text-white" : "border-2 border-dashed border-brand bg-brand-soft text-brand-dark"
                    }`}
                  >
                    {i < 2 ? i + 1 : "→"}
                  </span>
                  <h3 className="mt-5 text-xl font-semibold text-navy">{s.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted">{s.text}</p>
                </li>
              ))}
            </ol>
            <Link href="#kontakt" className="mt-12 inline-flex rounded-full bg-brand px-7 py-3.5 font-semibold text-white transition hover:bg-brand-dark">
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
