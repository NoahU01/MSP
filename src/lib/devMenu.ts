// Einträge des Menüpunkts "/ Entwicklung /" (analog empiria-Vorschau).
// Neue Seiten unter "unterseiten" eintragen, abgelöste Stände unter "archiv".

export type DevLink = { href: string; tag: string; title: string; note: string; indent?: boolean };

export const devMenu: { unterseiten: DevLink[]; archiv: DevLink[] } = {
  unterseiten: [
    { href: "/", tag: "⌂", title: "Startseite", note: "Aktuelle Version in Arbeit" },
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
