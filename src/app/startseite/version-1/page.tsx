import type { Metadata } from "next";
import Link from "next/link";
import { ContactPeople } from "@/components/ContactPeople";
import { DownloadSection } from "@/components/home/DownloadSection";
import { Hero } from "@/components/home/Hero";
import { PraxisAccordion } from "@/components/home/PraxisAccordion";
import { Stoerer } from "@/components/home/Stoerer";
import { Section } from "@/components/Section";
import { company, services, steps } from "@/lib/content";

export const metadata: Metadata = { title: "Startseite – Version 1" };

// Startseite Version 1 (Stand 30.09.2026): Hero → Leistungen → Haltung → Störer → Vorgehen → Praxis (Akkordeon) → Download → Ansprechpartner/Kontakt

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

export default function StartseiteVersion1() {
  return (
    <>
      <Hero next={{ href: "#leistungen", label: "Was Sie davon haben" }} />

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

      <Stoerer />

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

      <PraxisAccordion />

      <DownloadSection />

      {/* Ansprechpartner + Kontakt */}
      <ContactPeople />
    </>
  );
}
