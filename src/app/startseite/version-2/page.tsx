import type { Metadata } from "next";
import Link from "next/link";
import { ContactPeople } from "@/components/ContactPeople";
import { DownloadSection } from "@/components/home/DownloadSection";
import { Hero } from "@/components/home/Hero";
import { PraxisAccordion } from "@/components/home/PraxisAccordion";
import { Stoerer } from "@/components/home/Stoerer";
import { Section } from "@/components/Section";
import { bausteine, company, pains, quickStart, type Baustein } from "@/lib/content";

export const metadata: Metadata = { title: "Startseite – Version 2" };

// Startseite Version 2 – Landingpage-Logik:
// Hero → Grundproblem → Lösung: zwei Bausteine (einzeln oder kombiniert) → Störer → schneller Einstieg in 2 Schritten
// → Praxis → Download → Ansprechpartner/Kontakt

export default function StartseiteVersion2() {
  return (
    <>
      <Hero
        primary={{ href: "#kontakt", label: "Klärungsgespräch vereinbaren" }}
        secondary={{ href: "#bausteine", label: "Unsere zwei Bausteine" }}
      />

      {/* Grundproblem */}
      <section className="border-t border-line bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand">Die Ausgangslage</p>
          <div className="mt-3 grid gap-10 lg:grid-cols-2 lg:gap-16">
            <h2 className="text-3xl font-semibold leading-tight tracking-tight text-balance text-navy sm:text-5xl">
              Mehr erreichen – mit den Menschen, die Sie haben.
            </h2>
            <div className="space-y-5 text-lg leading-relaxed text-muted lg:pt-2">
              <p>
                Der Druck auf den wirtschaftlichen Erfolg steigt: Märkte werden enger, Kosten höher,
                Fachkräfte knapper. Unternehmen müssen genau überlegen, mit welchen Ressourcen sie
                ihre Ziele erreichen.
              </p>
              <p>
                Die wichtigste Ressource sind die Mitarbeitenden, die bereits an Bord sind. Sie
                optimal einzusetzen und weiterzuentwickeln, entscheidet über den Erfolg –{" "}
                <strong className="font-semibold text-ink">in der Struktur ebenso wie in der Kompetenz.</strong>
              </p>
            </div>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {pains.map((p, i) => (
              <div key={p.title} className="rounded-2xl border border-line p-7">
                <span className="text-sm font-semibold text-brand">0{i + 1}</span>
                <h3 className="mt-3 text-lg font-semibold leading-snug text-navy">{p.title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{p.text}</p>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-16 max-w-3xl text-center text-2xl font-semibold leading-snug text-balance text-navy sm:text-3xl">
            Die Frage ist nicht, <em className="not-italic text-muted">ob</em> Sie in Ihre Menschen
            investieren – sondern wo der Einsatz die größte Wirkung für Ihr Unternehmen hat.
          </p>
        </div>
      </section>

      {/* Lösung: zwei Bausteine */}
      <Section
        id="bausteine"
        tone="paper"
        eyebrow="Unsere Lösung"
        title={company.slogan}
        intro="Mit zwei Bausteinen und einem Ziel: Ihrem Unternehmenserfolg. Je nachdem, wo Ihr größter Hebel liegt, setzen wir an der Struktur an, an der Kompetenz – oder an beidem."
      >
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {bausteine.map((b, i) => (
            <BausteinCard key={b.key} baustein={b} index={i + 1} />
          ))}
        </div>

        <Kombination />
      </Section>

      <Stoerer />

      {/* Schneller Einstieg */}
      <Section
        id="einstieg"
        eyebrow="So starten wir"
        title="Zwei Schritte bis zur Entscheidung."
        intro="Kein langes Vorgeplänkel: Wir kommen schnell miteinander ins Gespräch – professionell, pragmatisch und mit einem Partner an Ihrer Seite, der weiß, was er tut."
      >
        <ol className="mt-12 grid items-stretch gap-4 md:grid-cols-[1fr_auto_1fr_auto_0.8fr]">
          {quickStart.map((step, i) => (
            <QuickStep key={step.title} n={i + 1} title={step.title} text={step.text} arrow={i < quickStart.length} />
          ))}
          <li className="flex flex-col justify-center rounded-2xl border border-dashed border-line p-7">
            <p className="text-sm font-semibold uppercase tracking-widest text-muted">Danach</p>
            <p className="mt-2 font-semibold text-navy">Umsetzung mit dem Baustein, der passt.</p>
            <p className="mt-2 text-[15px] leading-relaxed text-muted">
              HR Business Partner, Lernwelt oder beides kombiniert.
            </p>
          </li>
        </ol>
        <div className="mt-10">
          <Link
            href="#kontakt"
            className="inline-flex rounded-full bg-brand px-7 py-3.5 font-semibold text-white transition hover:bg-brand-dark"
          >
            Klärungsgespräch vereinbaren
          </Link>
        </div>
      </Section>

      <PraxisAccordion tone="paper" />
      <DownloadSection />
      <ContactPeople />
    </>
  );
}

function BausteinCard({ baustein: b, index }: { baustein: Baustein; index: number }) {
  const accent = b.key === "hrbp" ? "bg-navy" : "bg-brand";
  const text = b.key === "hrbp" ? "text-navy" : "text-brand-dark";
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-line">
      <div className={`h-1.5 ${accent}`} />
      <div className="flex flex-1 flex-col p-7 sm:p-9">
        <p className="text-sm font-semibold uppercase tracking-widest text-muted">
          Baustein {index} · {b.claim}
        </p>
        <h3 className={`mt-2 text-3xl font-semibold tracking-tight ${text}`}>{b.name}</h3>
        <p className="mt-3 text-xl font-semibold leading-snug text-ink">{b.slogan}</p>

        <p className="mt-6 rounded-xl bg-paper px-5 py-4 font-semibold leading-snug text-ink">{b.question}</p>
        <p className="mt-6 leading-relaxed text-muted">{b.text}</p>

        <ul className="mt-6 flex flex-wrap gap-2">
          {b.focus.map((f) => (
            <li key={f} className="rounded-full border border-line px-3.5 py-1.5 text-sm font-semibold text-ink">
              {f}
            </li>
          ))}
        </ul>

        {/* Zweite Ebene: Details zum Aufklappen */}
        <details className="group mt-8 border-t border-line pt-5">
          <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-navy hover:text-brand [&::-webkit-details-marker]:hidden">
            Was dazu gehört
            <span aria-hidden="true" className="transition group-open:rotate-45">
              +
            </span>
          </summary>
          <div className="mt-5 grid gap-6 sm:grid-cols-2">
            {b.details.map((d) => (
              <div key={d.title}>
                <p className="font-semibold text-ink">
                  {d.href ? (
                    <Link href={d.href} className="hover:text-brand">
                      {d.title} →
                    </Link>
                  ) : (
                    d.title
                  )}
                </p>
                <ul className="mt-2 space-y-1.5 text-[15px] text-muted">
                  {d.items.map((item) => (
                    <li key={item} className="flex gap-2.5">
                      <span className={`mt-2 size-1.5 shrink-0 rounded-full ${accent}`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </details>
      </div>
    </article>
  );
}

// Grafik: einzeln buchbar oder kombiniert – am Ende zählt der Unternehmenserfolg.
function Kombination() {
  return (
    <div className="mt-8 grid items-center gap-10 rounded-2xl bg-white p-7 ring-1 ring-line sm:p-10 md:grid-cols-[auto_1fr] md:gap-14">
      <svg viewBox="0 0 300 190" role="img" aria-label="Zwei sich überschneidende Kreise: HR Business Partner und Lernwelt, in der Schnittmenge die Kombination" className="mx-auto w-full max-w-[320px]">
        <circle cx="110" cy="95" r="85" fill="#005482" fillOpacity="0.12" stroke="#005482" strokeWidth="2" />
        <circle cx="190" cy="95" r="85" fill="#009aa3" fillOpacity="0.14" stroke="#009aa3" strokeWidth="2" />
        <text x="66" y="92" textAnchor="middle" fontSize="11.5" fontWeight="600" fill="#005482">HR Business</text>
        <text x="66" y="108" textAnchor="middle" fontSize="11.5" fontWeight="600" fill="#005482">Partner</text>
        <text x="230" y="100" textAnchor="middle" fontSize="12" fontWeight="600" fill="#00838b">Lernwelt</text>
        <text x="150" y="92" textAnchor="middle" fontSize="11" fontWeight="600" fill="#000">Kombi-</text>
        <text x="150" y="107" textAnchor="middle" fontSize="11" fontWeight="600" fill="#000">niert</text>
      </svg>
      <div>
        <h3 className="text-2xl font-semibold tracking-tight text-navy">Einzeln buchbar. Stark in Kombination.</h3>
        <ul className="mt-5 space-y-4 leading-relaxed text-muted">
          <li>
            <strong className="font-semibold text-ink">Nur Struktur:</strong> Sie brauchen Klarheit in Rollen,
            Prozessen oder Nachfolge – der HR Business Partner schafft sie.
          </li>
          <li>
            <strong className="font-semibold text-ink">Nur Kompetenz:</strong> Die Struktur steht, aber Wissen
            und soziale Kompetenzen fehlen – die Lernwelt setzt genau dort an.
          </li>
          <li>
            <strong className="font-semibold text-ink">Beides:</strong> Neue Strukturen werden von
            Menschen getragen, die sie beherrschen. Das Gelernte trifft auf klare Rollen.
          </li>
        </ul>
        <p className="mt-6 font-semibold text-ink">
          In jedem Fall gilt: Jede Maßnahme muss auf Ihren Unternehmenserfolg einzahlen.
        </p>
      </div>
    </div>
  );
}

function QuickStep({ n, title, text, arrow }: { n: number; title: string; text: string; arrow: boolean }) {
  return (
    <>
      <li className="rounded-2xl bg-navy p-7 text-white">
        <span className="flex size-11 items-center justify-center rounded-full bg-white text-lg font-semibold text-navy">
          {n}
        </span>
        <h3 className="mt-5 text-xl font-semibold">{title}</h3>
        <p className="mt-2 leading-relaxed text-white/80">{text}</p>
      </li>
      {arrow && (
        <li aria-hidden="true" className="flex items-center justify-center text-2xl text-brand max-md:rotate-90">
          →
        </li>
      )}
    </>
  );
}
