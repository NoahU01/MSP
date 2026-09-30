import type { Metadata } from "next";
import { ContactPeople } from "@/components/ContactPeople";
import { ClaimBand } from "@/components/home/ClaimBand";
import { DownloadSection } from "@/components/home/DownloadSection";
import { Hero } from "@/components/home/Hero";
import { PraxisAccordion } from "@/components/home/PraxisAccordion";
import { Ausgangslage } from "@/components/home/story/Ausgangslage";
import { Einstieg } from "@/components/home/story/Einstieg";
import { HebelSection } from "@/components/home/story/HebelSection";
import { Loesung } from "@/components/home/story/Loesung";

export const metadata: Metadata = { title: "Startseite – Version 4" };

// Version 4 „Hebel-Finder“: interaktives Werkzeug im Zentrum, danach Lösung, Einstieg, Praxis.
export default function StartseiteVersion4() {
  return (
    <>
      <Hero overlap />
      <Ausgangslage />

      <HebelSection />

      <Loesung variant="hover" />
      <ClaimBand />
      <Einstieg variant="timeline" />
      <PraxisAccordion look="outline" />
      <DownloadSection />
      <ContactPeople />
    </>
  );
}
