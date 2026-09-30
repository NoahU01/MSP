import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { Section } from "@/components/Section";
import { cases, company, services, steps } from "@/lib/content";

// Neue Startseite (ab 01.10.2026). Vorherige Version: /archiv/startseite-v1
// Zwischenstand bis zur neuen Grundstory: Hero → Leistungen → Haltung → Störer → Vorgehen → Praxis (Akkordeon) → Kontakt

const pillars = [
  {
    title: "Erfahrung",
    text: `Seit ${company.since} begleiten wir KMU und Großunternehmen in ganz Deutschland – als Berater, Trainer und Moderatoren.`,
  },
  {
    title: "Empathie",
    text: "Wir hören zu, bevor wir handeln. So reagieren wir sensibel auf das, was Menschen in Veränderungen wirklich bewegt.",
  },
  {
    title: "Fach- und Methodenwissen",
    text: "Fundierte Analysen und erprobte Methoden sorgen dafür, dass Maßnahmen messbar wirken – und nicht nur gut klingen.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero – Subheadline, Headline und Text unverändert aus Version 1.0 */}
      <section className="relative overflow-hidden bg-white">
        <Image
          src="/images/fingerprint.jpg"
          alt=""
          width={1280}
          height={818}
          priority
          className="pointer-events-none absolute -right-40 top-0 h-full w-auto max-w-none opacity-80 mix-blend-multiply sm:-right-20 lg:right-0"
        />
        <div className="relative mx-auto max-w-6xl px-4 pb-20 pt-16 sm:px-6 sm:pb-32 sm:pt-28">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand">
            Zukunftsfaktor Mensch · seit {company.since}
          </p>
          <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-[1.1] tracking-tight text-balance text-navy sm:text-6xl">
            Ihr HR Businesspartner für Führungs-, Entwicklungs- und Veränderungsprozesse
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
            Wir begleiten Unternehmen individuell, ganzheitlich und nachhaltig – als Berater, Trainer
            und Moderatoren für KMU und Großunternehmen in ganz Deutschland.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="#kontakt"
              className="rounded-full bg-brand px-7 py-3.5 font-semibold text-white transition hover:bg-brand-dark"
            >
              Gespräch vereinbaren
            </Link>
            <Link
              href="#leistungen"
              className="rounded-full border border-navy/20 bg-white/70 px-7 py-3.5 font-semibold text-navy transition hover:border-brand hover:text-brand"
            >
              Unsere Leistungen
            </Link>
          </div>
        </div>
      </section>

      {/* Leistungen */}
      <Section id="leistungen" eyebrow="Unsere Leistungen" title="Vier Hebel für Ihren Unternehmenserfolg">
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {services.map((s, i) => (
            <Link
              key={s.slug}
              href={`/leistungen/${s.slug}`}
              className="group flex flex-col rounded-2xl border border-line bg-white p-8 transition hover:-translate-y-0.5 hover:border-brand hover:shadow-lg hover:shadow-brand/10"
            >
              <span className="text-sm font-semibold text-brand">0{i + 1}</span>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-navy">{s.title}</h3>
              {s.subtitle && <p className="text-sm text-muted">{s.subtitle}</p>}
              <p className="mt-4 leading-relaxed text-muted">{s.teaser}</p>
              <span className="mt-auto pt-8 text-sm font-semibold text-brand">
                Mehr erfahren <span className="inline-block transition group-hover:translate-x-1">→</span>
              </span>
            </Link>
          ))}
        </div>
      </Section>

      {/* Haltung */}
      <Section eyebrow="Unsere Haltung" title="Der Mensch im Mittelpunkt. Der Unternehmenserfolg im Blick.">
        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {pillars.map((p) => (
            <div key={p.title} className="border-t-2 border-brand pt-6">
              <h3 className="text-xl font-semibold text-navy">{p.title}</h3>
              <p className="mt-3 leading-relaxed text-muted">{p.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Störer: Zukunftsfaktor Mensch mit klarer Businesslogik */}
      <Section tone="ink">
        <div className="grid gap-12 md:grid-cols-5 md:items-center">
          <p className="text-3xl font-semibold leading-tight tracking-tight text-balance sm:text-4xl md:col-span-2">
            Damit sich der Zukunftsfaktor Mensch optimal entwickelt{" "}
            <span className="underline decoration-brand decoration-4 underline-offset-8">
              und gezielt zum Unternehmenserfolg beiträgt.
            </span>
          </p>
          <div className="space-y-5 text-lg leading-relaxed text-white/80 md:col-span-3">
            <p>
              Unternehmenserfolg steht und fällt mit den Menschen, die dafür arbeiten und
              Verantwortung tragen. Deshalb ist Personal- und Organisationsentwicklung für uns kein
              Wohlfühlprogramm, sondern ein Hebel für Ihre Unternehmensziele.
            </p>
            <p>
              Jede Maßnahme beginnt bei der Frage, was sie zum Geschäft beiträgt: klare
              Verantwortlichkeiten und schlanke Abläufe, Führungskräfte, die Ergebnisse liefern,
              Teams, die effizient zusammenarbeiten, und Mitarbeitende, die bleiben. Daran messen
              wir unsere Arbeit.
            </p>
          </div>
        </div>
      </Section>

      {/* Vorgehen */}
      <Section
        id="vorgehen"
        tone="paper"
        eyebrow="Der Rahmen für Ihren Erfolg"
        title="In sechs Schritten vom Ziel zur gelebten Veränderung."
      >
        <ol className="relative mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-6 lg:gap-6">
          <span aria-hidden="true" className="absolute left-0 right-0 top-5 hidden h-px bg-line lg:block" />
          {steps.map((step, i) => (
            <li key={step.title} className="relative">
              <span className="relative flex size-10 items-center justify-center rounded-full bg-navy font-semibold text-white ring-8 ring-paper">
                {i + 1}
              </span>
              <h3 className="mt-5 font-semibold text-navy">{step.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted">{step.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* Praxis – schlichtes Akkordeon (FAQ-Stil) */}
      <Section
        id="praxis"
        eyebrow="Anliegen von Geschäftspartnern"
        title="Aus unserem Tagesgeschäft"
        intro="Gemeinsam mit unseren Geschäftspartnern konkretisieren wir die Ziele, vereinbaren passende Maßnahmen und fokussieren uns auf die Umsetzung – konsequent und Schritt für Schritt."
      >
        <div className="mt-12 border-t border-line">
          {cases.map((c) => (
            <details key={c.title} className="group border-b border-line">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-lg font-semibold leading-snug text-navy transition hover:text-brand [&::-webkit-details-marker]:hidden">
                {c.title}
                <span
                  aria-hidden="true"
                  className="relative size-4 shrink-0 before:absolute before:inset-x-0 before:top-1/2 before:h-0.5 before:-translate-y-1/2 before:bg-current after:absolute after:inset-y-0 after:left-1/2 after:w-0.5 after:-translate-x-1/2 after:bg-current after:transition group-open:after:rotate-90 group-open:after:opacity-0"
                />
              </summary>
              <div className="max-w-3xl space-y-4 pb-7 leading-relaxed text-muted">
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
        <div className="mt-12 flex flex-col gap-6 rounded-2xl bg-brand p-8 text-white sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-white/80">Imagebroschüre</p>
            <p className="mt-1 text-2xl font-semibold">„Zukunftsfaktor Mensch“</p>
          </div>
          <a
            href={company.brochureUrl}
            className="self-start rounded-full bg-white px-7 py-3.5 font-semibold text-navy transition hover:bg-brand-soft sm:self-auto"
          >
            PDF herunterladen ↓
          </a>
        </div>
      </Section>

      {/* Ansprechpartner + Kontakt */}
      <Section
        id="kontakt"
        tone="ink"
        eyebrow="Kontakt"
        title="Lassen Sie uns über Ihre Situation sprechen."
        intro="Ein erstes Gespräch ist unverbindlich. Wir hören zu, stellen die richtigen Fragen und sagen Ihnen offen, ob und wie wir unterstützen können."
      >
        <div className="mt-12 grid gap-12 lg:grid-cols-3">
          <div className="space-y-6">
            <div>
              <p className="text-sm text-white/60">Ihr Ansprechpartner</p>
              <p className="text-xl font-semibold">{company.ceo}</p>
              <p className="text-white/80">Geschäftsführer</p>
            </div>
            <div>
              <p className="text-sm text-white/60">Telefon</p>
              <a href={company.phoneHref} className="text-xl font-semibold hover:underline">
                {company.phone}
              </a>
            </div>
            <div>
              <p className="text-sm text-white/60">E-Mail</p>
              <a href={`mailto:${company.email}`} className="text-xl font-semibold hover:underline">
                {company.email}
              </a>
            </div>
            <div>
              <p className="text-sm text-white/60">Adresse</p>
              <p className="text-lg">
                {company.street}, {company.zip} {company.city}
              </p>
            </div>
          </div>
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
        </div>
      </Section>
    </>
  );
}
