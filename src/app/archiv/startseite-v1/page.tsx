import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { Section } from "@/components/Section";
import { cases, company, services, steps } from "@/lib/content";

export const metadata: Metadata = { title: "Archiv – Startseite Version 1.0" };

// Archiv: Stand der Startseite vom 30.09.2026 (erste Version). Nicht mehr weiterentwickeln.
export default function StartseiteV1() {
  return (
    <>
      {/* Hero */}
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
          <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-[1.1] tracking-tight text-balance sm:text-6xl">
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
              className="rounded-full border border-ink/15 bg-white/70 px-7 py-3.5 font-semibold text-ink transition hover:border-brand hover:text-brand"
            >
              Unsere Leistungen
            </Link>
          </div>
        </div>
      </section>

      {/* Über uns */}
      <Section
        tone="paper"
        eyebrow="Ihr Partner mit individuellen Lösungen"
        title="Der Mensch steht im Mittelpunkt."
      >
        <div className="mt-8 grid gap-8 text-lg leading-relaxed text-muted md:grid-cols-2">
          <p>
            Mit dem Anspruch, Unternehmen individuell, ganzheitlich und nachhaltig zu unterstützen,
            bei Veränderungsprozessen zu begleiten und definierte Meilensteine zu erreichen, sind wir
            seit {company.since} als HR Businesspartner für unsere Geschäftspartner da.
          </p>
          <p>
            Wir unterstützen genau da, wo wir gebraucht werden. Unser Vorgehen ist von Erfahrung,
            Empathie, Fach- und Methodenwissen geprägt – so reagieren wir sensibel und
            lösungsorientiert auf jede Herausforderung.
          </p>
        </div>
      </Section>

      {/* Leistungen */}
      <Section
        id="leistungen"
        eyebrow="Unsere Leistungen"
        title="Vier Hebel für Ihren Unternehmenserfolg"
      >
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {services.map((s, i) => (
            <Link
              key={s.slug}
              href={`/leistungen/${s.slug}`}
              className="group flex flex-col rounded-2xl border border-line bg-white p-8 transition hover:-translate-y-0.5 hover:border-brand hover:shadow-lg hover:shadow-brand/10"
            >
              <span className="text-sm font-semibold text-brand">0{i + 1}</span>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight">{s.title}</h3>
              {s.subtitle && <p className="text-sm text-muted">{s.subtitle}</p>}
              <p className="mt-4 leading-relaxed text-muted">{s.teaser}</p>
              <ul className="mt-6 space-y-2 text-sm">
                {s.items.slice(0, 3).map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand" />
                    {item}
                  </li>
                ))}
              </ul>
              <span className="mt-auto pt-8 text-sm font-semibold text-brand">
                Mehr erfahren <span className="inline-block transition group-hover:translate-x-1">→</span>
              </span>
            </Link>
          ))}
        </div>
      </Section>

      {/* Zukunftsfaktor Mensch */}
      <Section tone="ink">
        <div className="grid gap-12 md:grid-cols-5 md:items-center">
          <p className="text-3xl font-semibold leading-tight tracking-tight text-balance sm:text-4xl md:col-span-2">
            Damit sich der <span className="underline decoration-brand decoration-4 underline-offset-8">Zukunftsfaktor Mensch</span> in Ihrem
            Unternehmen optimal entwickelt.
          </p>
          <div className="space-y-5 text-lg leading-relaxed text-white/75 md:col-span-3">
            <p>
              Unternehmenserfolg steht und fällt mit den Menschen, die dafür arbeiten und
              Verantwortung tragen – Führungskräfte ebenso wie Fachkräfte und Teams. Der Wettbewerb
              um gut ausgebildete Mitarbeitende wird sich weiter verschärfen. Wer zukunftsfähig
              bleiben will, muss rechtzeitig die richtigen Weichen stellen.
            </p>
            <p>
              Veränderungen sind fester Bestandteil der Arbeitswelt. Strukturen, Prozesse,
              Qualifikationen und Führungsleitlinien gehören deshalb regelmäßig auf den Prüfstand.
            </p>
          </div>
        </div>
      </Section>

      {/* Worst Case GmbH */}
      <Section
        id="worst-case"
        eyebrow="Wo wir konkret helfen"
        title={<>Paradebeispiele aus der „Worst Case GmbH“</>}
        intro="Sätze, die man in vielen Unternehmen so oder ähnlich hört – und was dahintersteckt."
      >
        <div className="mt-16 space-y-20 sm:space-y-28">
          {services.map((s, i) => (
            <article key={s.slug} className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
              <div className={i % 2 ? "md:order-2" : ""}>
                <Image
                  src={s.worstCase.image}
                  alt={s.worstCase.imageAlt}
                  width={2000}
                  height={1500}
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="rounded-2xl"
                />
              </div>
              <div>
                <blockquote className="border-l-4 border-brand pl-6 text-2xl font-semibold leading-snug text-balance sm:text-3xl">
                  „{s.worstCase.quote}“
                </blockquote>
                <p className="mt-8 text-sm font-semibold uppercase tracking-widest text-brand">
                  Lösung: {s.title}
                  {s.subtitle && ` ${s.subtitle}`}
                </p>
                <p className="mt-3 leading-relaxed text-muted">{s.worstCase.text}</p>
                <Link
                  href={`/leistungen/${s.slug}`}
                  className="mt-6 inline-block font-semibold text-brand hover:underline"
                >
                  Zu {s.title} →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* Vorgehen */}
      <Section
        id="vorgehen"
        tone="paper"
        eyebrow="Unser Vorgehen"
        title="Der Rahmen für Ihren Erfolg"
        intro="Sechs Schritte, die dafür sorgen, dass Veränderung nicht nur beginnt, sondern bleibt."
      >
        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, i) => (
            <li key={step.title} className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-line">
              <span className="flex size-10 items-center justify-center rounded-full bg-brand-soft font-semibold text-brand">
                {i + 1}
              </span>
              <h3 className="mt-5 text-xl font-semibold">{step.title}</h3>
              <p className="mt-2 leading-relaxed text-muted">{step.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* Praxisbeispiele */}
      <Section
        id="praxis"
        eyebrow="Anliegen von Geschäftspartnern"
        title="Aus unserem Tagesgeschäft"
        intro="Gemeinsam konkretisieren wir mit unseren Geschäftspartnern die Ziele, vereinbaren passende Maßnahmen und fokussieren uns auf die Umsetzung – konsequent und Schritt für Schritt."
      >
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cases.map((c) => (
            <article key={c.title} className="flex flex-col rounded-2xl border border-line p-7">
              <h3 className="text-lg font-semibold">{c.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-muted">{c.situation}</p>
              <p className="mt-auto pt-6 text-sm font-semibold text-brand">{c.question}</p>
            </article>
          ))}
          <a
            href={company.brochureUrl}
            className="flex flex-col justify-between rounded-2xl bg-brand p-7 text-white transition hover:bg-brand-dark"
          >
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-white/80">Download</p>
              <h3 className="mt-3 text-2xl font-semibold">Imagebroschüre „Zukunftsfaktor Mensch“</h3>
            </div>
            <span className="mt-8 font-semibold">PDF herunterladen ↓</span>
          </a>
        </div>
      </Section>

      {/* Kontakt */}
      <Section
        id="kontakt"
        tone="ink"
        eyebrow="Kontakt"
        title="Lassen Sie uns über Ihre Situation sprechen."
        intro="Sie möchten wissen, wie Sie den Zukunftsfaktor Mensch in Ihrem Unternehmen optimal entwickeln? Wir freuen uns auf Ihren Anruf, Ihre E-Mail oder Ihre Nachricht."
      >
        <div className="mt-12 grid gap-12 lg:grid-cols-3">
          <div className="space-y-6">
            <div>
              <p className="text-sm text-white/50">Telefon</p>
              <a href={company.phoneHref} className="text-xl font-semibold hover:text-brand">
                {company.phone}
              </a>
            </div>
            <div>
              <p className="text-sm text-white/50">E-Mail</p>
              <a href={`mailto:${company.email}`} className="text-xl font-semibold hover:text-brand">
                {company.email}
              </a>
            </div>
            <div>
              <p className="text-sm text-white/50">Adresse</p>
              <p className="text-lg">
                {company.name}
                <br />
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
