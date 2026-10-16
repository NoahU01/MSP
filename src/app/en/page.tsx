import type { Metadata } from "next";
import { ContactPeople } from "@/components/ContactPeople";
import { ClaimBand } from "@/components/home/ClaimBand";
import { DownloadSection } from "@/components/home/DownloadSection";
import { HeroPeople } from "@/components/home/HeroPeople";
import { PraxisAccordion } from "@/components/home/PraxisAccordion";
import { Einstieg } from "@/components/home/story/Einstieg";
import { HebelSection } from "@/components/home/story/HebelSection";
import { LoesungPeople } from "@/components/home/story/LoesungPeople";
import { Ausgangslage } from "@/components/home/story/Ausgangslage";
import { company } from "@/lib/content";

// Englische Startseite (Übersetzungsentwurf) – gleicher Aufbau wie die deutsche Startseite (src/app/page.tsx).
// Texte: src/lib/i18n.ts und src/lib/content-en.ts.
export const metadata: Metadata = {
  title: { absolute: `${company.name} | HR Business Partner` },
  description:
    "MSP human resources GmbH – your HR business partner for leadership, development and change processes. Organisational, leadership, personnel and team development since 2002.",
  alternates: { languages: { de: "/", en: "/en" } },
};

export default function HomeEn() {
  return (
    <div lang="en">
      <HeroPeople locale="en" />
      <Ausgangslage locale="en" />
      <HebelSection locale="en" />
      <LoesungPeople locale="en" />
      <ClaimBand locale="en" />
      <Einstieg variant="timeline" locale="en" />
      <PraxisAccordion look="outline" locale="en" />
      <DownloadSection locale="en" />
      <ContactPeople locale="en" />
    </div>
  );
}
