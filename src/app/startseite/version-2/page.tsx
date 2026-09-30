import type { Metadata } from "next";
import { ContactPeople } from "@/components/ContactPeople";
import { ClaimBand } from "@/components/home/ClaimBand";
import { DownloadSection } from "@/components/home/DownloadSection";
import { Hero } from "@/components/home/Hero";
import { PraxisAccordion } from "@/components/home/PraxisAccordion";
import { Ausgangslage } from "@/components/home/story/Ausgangslage";
import { Einstieg } from "@/components/home/story/Einstieg";
import { Loesung } from "@/components/home/story/Loesung";

export const metadata: Metadata = { title: "Startseite – Version 2" };

// Version 2 – geteilter Hero (Muster empiria), Ausgangslage mit dunkler Box, Lösung mit Modell-Skizze
// und Baustein-Karten, dunkles Claim-Band, Einstieg als Ablauf, Praxis-Akkordeon rechts.
export default function StartseiteVersion2() {
  return (
    <>
      <Hero layout="split" />
      <Ausgangslage />
      <Loesung variant="cards" />
      <ClaimBand />
      <Einstieg variant="band" />
      <PraxisAccordion look="edge" />
      <DownloadSection />
      <ContactPeople />
    </>
  );
}
