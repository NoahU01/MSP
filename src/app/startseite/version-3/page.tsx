import type { Metadata } from "next";
import { ContactPeople } from "@/components/ContactPeople";
import { ClaimBand } from "@/components/home/ClaimBand";
import { DownloadSection } from "@/components/home/DownloadSection";
import { Hero } from "@/components/home/Hero";
import { PraxisAccordion } from "@/components/home/PraxisAccordion";
import { Ausgangslage } from "@/components/home/story/Ausgangslage";
import { Einstieg } from "@/components/home/story/Einstieg";
import { Loesung } from "@/components/home/story/Loesung";

export const metadata: Metadata = { title: "Startseite – Version 3" };

// Version 3 – NUR der Hero ist zentriert, der Rest der Seite linksbündig. Story wie Version 2.
export default function StartseiteVersion3() {
  return (
    <>
      <Hero layout="centered" />
      <Ausgangslage />
      <Loesung />
      <ClaimBand />
      <Einstieg />
      <PraxisAccordion />
      <DownloadSection />
      <ContactPeople />
    </>
  );
}
