// Einträge des Menüpunkts "/ Entwicklung /" (analog empiria-Vorschau).
// Neue Seiten unter "unterseiten" eintragen, abgelöste Stände unter "archiv".

export type DevLink = { href: string; tag: string; title: string; note: string; indent?: boolean };

// Kategorie "Startseite": ein Eintrag mit zweiter Ebene (alle Startseiten-Varianten).
export const startseitenVarianten: DevLink[] = [
  { href: "/startseite/version-1", tag: "V1", title: "Version 1", note: "Leistungen, Haltung, 6 Schritte" },
  { href: "/startseite/version-2", tag: "V2", title: "Version 2", note: "Geteilter Header, Farbkarten" },
  { href: "/startseite/version-3", tag: "V3", title: "Version 3", note: "Zentrierter Header, Gleichung" },
  { href: "/startseite/version-4", tag: "V4", title: "Version 4", note: "Hebel-Finder, interaktive Karten" },
  { href: "/startseite/version-5", tag: "V5", title: "Version 5", note: "Menschen & Bausteine" },
  { href: "/startseite/version-6", tag: "V6", title: "Version 6", note: "Baukasten zum Durchklicken" },
];

export const devMenu: { unterseiten: DevLink[]; archiv: DevLink[] } = {
  unterseiten: [
    { href: "/leistungen/organisationsentwicklung", tag: "OE", title: "Organisationsentwicklung", note: "Leistung" },
    { href: "/leistungen/fuehrungskraefteentwicklung", tag: "FE", title: "Führungskräfteentwicklung", note: "Leistung" },
    { href: "/leistungen/personalentwicklung", tag: "PE", title: "Personalentwicklung", note: "Leistung" },
    { href: "/leistungen/teamentwicklung", tag: "TE", title: "Teamentwicklung", note: "Leistung" },
    { href: "/impressum", tag: "§", title: "Impressum", note: "Rechtliches" },
    { href: "/datenschutz", tag: "DS", title: "Datenschutzerklärung", note: "Rechtliches · Entwurf" },
  ],
  archiv: [
    { href: "/archiv/startseite-v1", tag: "⌂", title: "Startseite Version 1.0", note: "Früherer Stand der Startseite (30.09.2026)" },
  ],
};
