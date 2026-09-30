import type { Metadata } from "next";
import { ContactPeople } from "@/components/ContactPeople";
import { DownloadSection } from "@/components/home/DownloadSection";
import { Hero } from "@/components/home/Hero";
import { PraxisAccordion } from "@/components/home/PraxisAccordion";
import { Ausgangslage } from "@/components/home/story/Ausgangslage";
import { Einstieg } from "@/components/home/story/Einstieg";
import { Loesung } from "@/components/home/story/Loesung";
import { facts } from "@/lib/content";

export const metadata: Metadata = { title: "Startseite – Version 3" };

// Version 3 – zentrierte Variante: zentrierter Hero und Sektionsköpfe, Kennzahlen als ruhige Kacheln.
// Story wie Version 2.
export default function StartseiteVersion3() {
  return (
    <>
      <Hero centered />
      <Ausgangslage centered />
      <Loesung centered />

      {/* Kennzahlen */}
      <section className="bg-white pt-24 sm:pt-32">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 sm:grid-cols-3 sm:px-6">
          {facts.map((f) => (
            <div key={f.label} className="rounded-[28px] bg-paper px-8 py-10 text-center">
              <p className="text-5xl font-light tracking-tight text-navy">{f.value}</p>
              <p className="t-body mx-auto mt-3 max-w-[22ch] text-muted">{f.label}</p>
            </div>
          ))}
        </div>
      </section>

      <Einstieg centered />
      <PraxisAccordion tone="paper" centered />
      <DownloadSection />
      <ContactPeople />
    </>
  );
}
