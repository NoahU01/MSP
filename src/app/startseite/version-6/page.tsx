import type { Metadata } from "next";
import { ContactPeople } from "@/components/ContactPeople";
import { ClaimBand } from "@/components/home/ClaimBand";
import { DownloadSection } from "@/components/home/DownloadSection";
import { Hero } from "@/components/home/Hero";
import { HeroPeople } from "@/components/home/HeroPeople";
import { Ausgangslage } from "@/components/home/story/Ausgangslage";
import { Einstieg } from "@/components/home/story/Einstieg";
import { HebelSection } from "@/components/home/story/HebelSection";
import { LoesungPeople } from "@/components/home/story/LoesungPeople";
import { VariantSwitcher } from "@/components/home/VariantSwitcher";

export const metadata: Metadata = { title: "Startseite – Version 6 (Baukasten)" };

// Version 6 „Baukasten“: Header (V3–V5) und Ausgangslage (V2/V3) per Pfeil umschaltbar.
// Lösung fest aus Version 5 (mit Gesichtern), Zwei Schritte fest aus Version 5.
// Reihenfolge: Header → Ausgangslage → Hebel-Finder → Lösung → Claim-Band → Zwei Schritte → Download → Kontakt.
export default function StartseiteVersion6() {
  return (
    <>
      <VariantSwitcher
        name="Header"
        variants={[
          { label: "Version 3", node: <Hero layout="centered" /> },
          { label: "Version 4", node: <Hero overlap /> },
          { label: "Version 5", node: <HeroPeople /> },
        ]}
      />
      <VariantSwitcher
        name="Ausgangslage"
        variants={[
          { label: "Version 2", node: <Ausgangslage /> },
          { label: "Version 3", node: <Ausgangslage variant="plain" /> },
        ]}
      />
      <HebelSection />
      <LoesungPeople />
      <ClaimBand />
      <Einstieg variant="timeline" />
      <DownloadSection />
      <ContactPeople />
    </>
  );
}
