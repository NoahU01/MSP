import type { Metadata } from "next";
import { ContactPeople } from "@/components/ContactPeople";
import { DownloadSection } from "@/components/home/DownloadSection";
import { Hero } from "@/components/home/Hero";
import { PraxisAccordion } from "@/components/home/PraxisAccordion";
import { Stoerer } from "@/components/home/Stoerer";
import { Ausgangslage } from "@/components/home/story/Ausgangslage";
import { Einstieg } from "@/components/home/story/Einstieg";
import { Loesung } from "@/components/home/story/Loesung";

export const metadata: Metadata = { title: "Startseite – Version 2" };

// Version 2 – Landingpage-Logik, linksbündig, strenges Typo-System (siehe globals.css):
// Hero → Ausgangslage → Lösung (zwei Bausteine) → Störer → Einstieg in 2 Schritten → Praxis → Download → Kontakt
export default function StartseiteVersion2() {
  return (
    <>
      <Hero />
      <Ausgangslage />
      <Loesung />
      <Stoerer />
      <Einstieg />
      <PraxisAccordion tone="paper" />
      <DownloadSection />
      <ContactPeople />
    </>
  );
}
