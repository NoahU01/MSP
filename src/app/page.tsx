import { ContactPeople } from "@/components/ContactPeople";
import { ClaimBand } from "@/components/home/ClaimBand";
import { DownloadSection } from "@/components/home/DownloadSection";
import { HeroPeople } from "@/components/home/HeroPeople";
import { PraxisAccordion } from "@/components/home/PraxisAccordion";
import { Ausgangslage } from "@/components/home/story/Ausgangslage";
import { Einstieg } from "@/components/home/story/Einstieg";
import { HebelSection } from "@/components/home/story/HebelSection";
import { LoesungPeople } from "@/components/home/story/LoesungPeople";

// Startseite (auch über das MSP-Logo erreichbar), zusammengesetzt aus den gewählten Varianten:
// Header V5 → Ausgangslage V5 → Hebel-Finder → Lösung V5 → Claim-Band → Zwei Schritte V5
// → Anliegen von Geschäftspartnern V4 → Download → Kontakt V5.
// Alle Varianten bleiben unter /startseite/version-1 … version-6 erreichbar (Menü "/ Entwicklung /").
export default function Home() {
  return (
    <>
      <HeroPeople />
      <Ausgangslage />
      <HebelSection />
      <LoesungPeople />
      <ClaimBand />
      <Einstieg variant="timeline" />
      <PraxisAccordion look="outline" />
      <DownloadSection />
      <ContactPeople />
    </>
  );
}
