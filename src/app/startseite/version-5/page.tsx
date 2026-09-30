import type { Metadata } from "next";
import { ContactPeople } from "@/components/ContactPeople";
import { ClaimBand } from "@/components/home/ClaimBand";
import { DownloadSection } from "@/components/home/DownloadSection";
import { HeroPeople } from "@/components/home/HeroPeople";
import { PraxisAccordion } from "@/components/home/PraxisAccordion";
import { Ausgangslage } from "@/components/home/story/Ausgangslage";
import { Einstieg } from "@/components/home/story/Einstieg";
import { LoesungPeople } from "@/components/home/story/LoesungPeople";

export const metadata: Metadata = { title: "Startseite – Version 5" };

// Version 5 „Menschen & Bausteine“: Personen im Hero (Variante Duo),
// Lösung mit zentriertem Kopf und zwei Baustein-Karten nebeneinander – jede mit ihrem Gesicht.
export default function StartseiteVersion5() {
  return (
    <>
      <HeroPeople />
      <Ausgangslage />

      <LoesungPeople />

      <ClaimBand />
      <Einstieg variant="timeline" />
      <PraxisAccordion look="edge" />
      <DownloadSection />
      <ContactPeople />
    </>
  );
}
