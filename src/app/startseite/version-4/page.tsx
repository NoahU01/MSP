import type { Metadata } from "next";
import { ContactPeople } from "@/components/ContactPeople";
import { BausteinTabs } from "@/components/home/BausteinTabs";
import { DownloadSection } from "@/components/home/DownloadSection";
import { HebelFinder } from "@/components/home/HebelFinder";
import { Hero } from "@/components/home/Hero";
import { PraxisAccordion } from "@/components/home/PraxisAccordion";
import { Ausgangslage } from "@/components/home/story/Ausgangslage";
import { Einstieg } from "@/components/home/story/Einstieg";
import { SectionHead } from "@/components/home/story/SectionHead";

export const metadata: Metadata = { title: "Startseite – Version 4" };

// Version 4 „Hebel-Finder“: ruhiger Hero, kompakte Ausgangslage, interaktives Tool im Zentrum,
// Bausteine als Umschalter, Einstieg in 2 Schritten.
export default function StartseiteVersion4() {
  return (
    <>
      <Hero next={{ href: "#ausgangslage", label: "Was Sie davon haben" }} />
      <Ausgangslage compact />

      {/* Hebel-Finder */}
      <section id="hebel" className="bg-paper py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHead
            eyebrow="Hebel-Finder"
            title="Wo liegt Ihr größter Hebel – in der Struktur oder in der Kompetenz?"
            lead="Probieren Sie es aus: Wählen Sie, was auf Ihr Unternehmen zutrifft, und erhalten Sie sofort eine erste Einordnung."
          />
          <div className="mt-14">
            <HebelFinder />
          </div>
        </div>
      </section>

      {/* Bausteine */}
      <section id="bausteine" className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHead
            eyebrow="Unsere zwei Bausteine"
            title="Einzeln buchbar. Stark in Kombination."
            lead="Entwicklung wird im Unternehmen spür- und messbar – über die Struktur, über die Kompetenz oder über beides."
          />
          <div className="mt-14">
            <BausteinTabs />
          </div>
        </div>
      </section>

      <Einstieg flushTop />
      <PraxisAccordion tone="paper" />
      <DownloadSection />
      <ContactPeople />
    </>
  );
}
