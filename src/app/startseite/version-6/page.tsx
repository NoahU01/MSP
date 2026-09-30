import type { Metadata } from "next";
import { ContactPeople } from "@/components/ContactPeople";
import { ClaimBand } from "@/components/home/ClaimBand";
import { DownloadSection } from "@/components/home/DownloadSection";
import { Hero } from "@/components/home/Hero";
import { HeroPeople } from "@/components/home/HeroPeople";
import { Ausgangslage } from "@/components/home/story/Ausgangslage";
import { Einstieg } from "@/components/home/story/Einstieg";
import { HebelSection } from "@/components/home/story/HebelSection";
import { Loesung } from "@/components/home/story/Loesung";
import { LoesungPeople } from "@/components/home/story/LoesungPeople";
import { VariantSwitcher } from "@/components/home/VariantSwitcher";

export const metadata: Metadata = { title: "Startseite – Version 6 (Baukasten)" };

// Version 6 „Baukasten“: Sektionen mit Pfeilen links/rechts, um die Varianten aus Version 2–5 zu vergleichen.
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
      <VariantSwitcher
        name="Lösung"
        variants={[
          { label: "Version 2", node: <Loesung variant="cards" /> },
          { label: "Version 3", node: <Loesung variant="equation" /> },
          { label: "Version 4", node: <Loesung variant="hover" /> },
          { label: "Version 5", node: <LoesungPeople /> },
        ]}
      />
      <ClaimBand />
      <VariantSwitcher
        name="Zwei Schritte"
        variants={[
          { label: "Version 2", node: <Einstieg variant="band" /> },
          { label: "Version 3", node: <Einstieg variant="cards" /> },
          { label: "Version 4 / 5", node: <Einstieg variant="timeline" /> },
        ]}
      />
      <DownloadSection />
      <ContactPeople />
    </>
  );
}
