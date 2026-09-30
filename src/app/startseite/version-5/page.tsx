import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ContactPeople } from "@/components/ContactPeople";
import { BausteinDetails } from "@/components/home/BausteinDetails";
import { DownloadSection } from "@/components/home/DownloadSection";
import { InfoModal } from "@/components/home/InfoModal";
import { PraxisAccordion } from "@/components/home/PraxisAccordion";
import { bausteine, company, facts, pains, quickStart, team } from "@/lib/content";

export const metadata: Metadata = { title: "Startseite – Version 5" };

// Version 5 „Editorial & Bento“: Menschen schon im Hero, Problem als Bento-Raster, Bausteine mit Gesicht
// (Mark = HR Business Partner, Kathrin = Lernwelt) und Sticky-Überschrift, Schritte als große Editorial-Liste.

export default function StartseiteVersion5() {
  const [mark, kathrin] = team;
  const personFor = { hrbp: mark, lernwelt: kathrin } as const;

  return (
    <>
      {/* Hero – Editorial mit Personen */}
      <section className="relative overflow-hidden bg-white">
        <div className="mx-auto grid max-w-6xl items-end gap-12 px-4 pb-16 pt-16 sm:px-6 sm:pt-24 lg:grid-cols-[1.3fr_0.7fr] lg:pb-24">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-brand">
              Zukunftsfaktor Mensch · seit {company.since}
            </p>
            <h1 className="mt-5 text-[2.6rem] font-semibold leading-[1.02] tracking-tight text-balance text-navy sm:text-7xl">
              Ihr HR Businesspartner für Führungs-, Entwicklungs- und Veränderungsprozesse
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
              Wir begleiten Unternehmen individuell, ganzheitlich und nachhaltig – als Berater, Trainer
              und Moderatoren für KMU und Großunternehmen in ganz Deutschland.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <Link href="#kontakt" className="rounded-full bg-brand px-7 py-3.5 font-semibold text-white transition hover:bg-brand-dark">
                Klärungsgespräch vereinbaren
              </Link>
              <Link href="#bausteine" className="font-semibold text-navy underline decoration-brand decoration-2 underline-offset-8 hover:text-brand">
                Unsere zwei Bausteine
              </Link>
            </div>
          </div>

          <div className="flex flex-col items-start lg:items-end">
            <div className="flex -space-x-6">
              {team.map((p) => (
                <div key={p.name} className="size-28 overflow-hidden rounded-full border-4 border-white shadow-[0_14px_30px_rgba(24,42,54,0.18)] sm:size-36">
                  <Image src={p.image} alt={p.name} width={288} height={288} priority className="size-full object-cover" />
                </div>
              ))}
            </div>
            <p className="mt-5 max-w-[16rem] text-sm leading-relaxed text-muted lg:text-right">
              <span className="font-semibold text-ink">{mark.name}</span> und{" "}
              <span className="font-semibold text-ink">{kathrin.name}</span> – Ihre Ansprechpartner für
              Struktur und Kompetenz.
            </p>
          </div>
        </div>
      </section>

      {/* Problem – Bento */}
      <section className="bg-white pb-20 sm:pb-28">
        <div className="mx-auto grid max-w-6xl gap-4 px-4 sm:px-6 md:grid-cols-6">
          <div className="relative overflow-hidden rounded-[28px] bg-navy p-8 text-white sm:p-10 md:col-span-4 md:row-span-2">
            <Image src="/images/fingerprint.jpg" alt="" width={1280} height={818} className="pointer-events-none absolute -bottom-16 -right-28 w-[520px] max-w-none opacity-15 mix-blend-screen invert" />
            <p className="relative text-sm font-semibold uppercase tracking-widest text-white/70">Die Ausgangslage</p>
            <h2 className="relative mt-4 max-w-xl text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Mehr erreichen – mit den Menschen, die Sie haben.
            </h2>
            <p className="relative mt-6 max-w-lg text-lg leading-relaxed text-white/80">
              Märkte werden enger, Kosten höher, Fachkräfte knapper. Entscheidend ist, die vorhandenen
              Mitarbeitenden optimal einzusetzen – in der Struktur ebenso wie in der Kompetenz.
            </p>
          </div>
          {facts.slice(0, 2).map((f) => (
            <div key={f.label} className="flex flex-col justify-end rounded-[28px] bg-brand-soft p-7 md:col-span-2">
              <p className="text-5xl font-semibold tracking-tight text-navy">{f.value}</p>
              <p className="mt-2 text-muted">{f.label}</p>
            </div>
          ))}
          {pains.map((p, i) => (
            <div key={p.title} className="rounded-[28px] border border-line p-7 md:col-span-2">
              <span className="flex size-9 items-center justify-center rounded-full bg-paper text-sm font-semibold text-brand">{i + 1}</span>
              <h3 className="mt-5 text-lg font-semibold leading-snug text-navy">{p.title}</h3>
              <p className="mt-2 leading-relaxed text-muted">{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Bausteine – Sticky-Überschrift links, Karten mit Gesicht rechts */}
      <section id="bausteine" className="bg-paper py-20 sm:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand">Unsere Lösung</p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-balance text-navy sm:text-5xl">
              {company.slogan}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              Zwei Bausteine – zwei Perspektiven. Geht es um Struktur, Prozesse, Rollen und Klarheit,
              oder um Weiterentwicklung, Training und Coaching? Einzeln buchbar, stark in Kombination.
            </p>
          </div>
          <div className="space-y-6">
            {bausteine.map((b, i) => {
              const person = personFor[b.key];
              const hrbp = b.key === "hrbp";
              return (
                <article key={b.key} className="overflow-hidden rounded-[28px] bg-white ring-1 ring-line">
                  <div className="p-8 sm:p-10">
                    <p className={`text-sm font-semibold uppercase tracking-widest ${hrbp ? "text-navy" : "text-brand-dark"}`}>
                      Baustein {i + 1} · {b.claim}
                    </p>
                    <h3 className="mt-3 text-4xl font-semibold tracking-tight text-navy">{b.name}</h3>
                    <p className="mt-3 text-xl font-semibold leading-snug text-ink">{b.slogan}</p>
                    <p className="mt-5 leading-relaxed text-muted">{b.question}</p>
                    <ul className="mt-6 flex flex-wrap gap-2">
                      {b.focus.map((f) => (
                        <li key={f} className="rounded-full bg-paper px-3.5 py-1.5 text-sm font-semibold text-ink">
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={`flex flex-wrap items-center justify-between gap-4 px-8 py-5 sm:px-10 ${hrbp ? "bg-navy text-white" : "bg-brand text-white"}`}>
                    <div className="flex items-center gap-4">
                      <div className="size-12 overflow-hidden rounded-full border-2 border-white/80">
                        <Image src={person.image} alt={person.name} width={96} height={96} className="size-full object-cover" />
                      </div>
                      <div className="leading-tight">
                        <p className="font-semibold">{person.name}</p>
                        <p className="text-sm text-white/80">{person.role}</p>
                      </div>
                    </div>
                    <InfoModal
                      label="Mehr erfahren"
                      title={`${b.name} – ${b.claim}`}
                      buttonClassName={`rounded-full bg-white px-5 py-2.5 text-sm font-semibold transition hover:bg-brand-soft ${hrbp ? "text-navy" : "text-brand-dark"}`}
                    >
                      <BausteinDetails baustein={b} />
                    </InfoModal>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Schritte – große Editorial-Liste */}
      <section id="einstieg" className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-brand">So starten wir</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-navy sm:text-5xl">Zwei Schritte bis zur Entscheidung.</h2>
            </div>
            <Link href="#kontakt" className="rounded-full bg-brand px-7 py-3.5 font-semibold text-white transition hover:bg-brand-dark">
              Klärungsgespräch vereinbaren
            </Link>
          </div>
          <ol className="mt-12 border-t border-line">
            {quickStart.map((s, i) => (
              <li key={s.title} className="grid gap-4 border-b border-line py-10 md:grid-cols-[10rem_1fr_1.2fr] md:items-baseline">
                <span className="text-7xl font-semibold leading-none tracking-tight text-brand/25">0{i + 1}</span>
                <h3 className="text-3xl font-semibold tracking-tight text-navy">{s.title}</h3>
                <p className="text-lg leading-relaxed text-muted">{s.text}</p>
              </li>
            ))}
          </ol>
          <p className="mt-8 text-muted">
            Danach: Umsetzung mit dem Baustein, der passt – <span className="font-semibold text-ink">HR Business Partner, Lernwelt oder beides.</span>
          </p>
        </div>
      </section>

      <PraxisAccordion tone="paper" />
      <DownloadSection />
      <ContactPeople />
    </>
  );
}
