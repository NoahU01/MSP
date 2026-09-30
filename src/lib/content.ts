// Zentrale Inhalte der Website. Texte basieren auf msphr.de (Stand 2025), gestrafft.

export const company = {
  name: "MSP human resources GmbH",
  shortName: "MSP",
  claim: "Ihr HR Businesspartner für Führungs-, Entwicklungs- und Veränderungsprozesse",
  // Übergreifender Slogan (wie auf LinkedIn)
  slogan: "Entwicklung wird im Unternehmen spür- und messbar.",
  since: 2002,
  ceo: "Mark Schweitzer-Pullar",
  street: "Untere Gasse 64",
  zip: "74564",
  city: "Crailsheim",
  phone: "+49 79 51 27 89 70",
  phoneHref: "tel:+497951278970",
  email: "info@msphr.de",
  vatId: "DE 2230 74168",
  registerCourt: "Amtsgericht Ulm", // lt. CD-Handbuch 2018 – aktuell halten
  registerNumber: "HRB 671366",
  customerLoginUrl: "https://msphr.de/customer-login/",
};

export type Service = {
  slug: string;
  title: string;
  subtitle?: string;
  teaser: string;
  items: string[];
  /** Warum das Thema für den Unternehmenserfolg wichtig ist */
  why: string;
};

export const services: Service[] = [
  {
    slug: "organisationsentwicklung",
    title: "Organisationsentwicklung",
    teaser:
      "Strukturen, Rollen und Prozesse so gestalten, dass sie zu Ihren unternehmerischen Zielen passen – heute und morgen.",
    items: [
      "Strategische Unternehmens- und Führungsnachfolge",
      "Etablierung neuer Organisationsformen und Strukturen",
      "Rollenverständnis und Anforderungsprofile von Fach- und Führungskräften",
      "Schnittstellenmanagement",
      "Prozessentwicklung",
    ],
    why: "Um komplexe Unternehmensaufgaben effizient, effektiv und nachhaltig zu organisieren, braucht es Weitsicht. Markt- und Personalveränderungen müssen berücksichtigt und in die Zukunft gedacht werden. Agiles Arbeiten und die Herausforderungen der Digitalisierung erfordern häufig einen neuen Blick und die Bereitschaft, Bewährtes auf den Prüfstand zu stellen. Bestehende Strukturen, aber auch Führungs- und Kommunikationsprozesse werden deshalb ganzheitlich betrachtet und den unternehmerischen Zielen angepasst.",
  },
  {
    slug: "fuehrungskraefteentwicklung",
    title: "Führungskräfteentwicklung",
    teaser:
      "Führungskompetenz gezielt aufbauen, Potenziale früh erkennen und Nachfolge sichern.",
    items: [
      "Führungskräfteentwicklung und -coaching",
      "Entwicklung von Führungsteams und deren Führungsleistung",
      "„Karriere“- oder „Talent“-Programme für eine Führungslaufbahn",
      "Transfersicherung",
      "Maßgeschneiderte Trainings und Workshops für Persönlichkeitsentwicklung und Führungskompetenz",
    ],
    why: "Die Anforderungen an Führungskräfte sind hoch und haben sich stark gewandelt. Mitarbeitende haben heute oft genaue Vorstellungen davon, wie sie geführt werden möchten. Nicht jeder ist dieser Aufgabe gewachsen – und nicht immer wird eine mögliche Führungskraft als solche erkannt. Wer sich nicht frühzeitig um Führungsnachwuchs in den eigenen Reihen kümmert, steuert auf Nachfolge-Engpässe zu. Die gezielte Entwicklung von Führungskompetenzen und das Erkennen von Potenzialen sind deshalb integraler Bestandteil einer ganzheitlichen Personalstrategie.",
  },
  {
    slug: "personalentwicklung",
    title: "Personalentwicklung",
    teaser:
      "Mitarbeitende binden und weiterentwickeln – systematisch, ganzheitlich und messbar.",
    items: [
      "Strategische Personalentwicklungskonzepte",
      "Mitarbeiterbindungsprogramme",
      "Karriere- bzw. Nachfolgeplanung",
      "Bildungsbedarfs- und Persönlichkeitsanalysen",
      "Maßgeschneiderte Trainings und Workshops zu allen Bereichen der sozialen Kompetenz",
      "Beurteilungssysteme",
      "Bildungscontrolling unter systemischen Gesichtspunkten",
    ],
    why: "Wer die Unzufriedenheit seiner Mitarbeitenden nicht ernst nimmt, muss sich über hohe Fluktuation und mangelnde Arbeitsergebnisse nicht wundern. Ein schlechtes Arbeitsklima und fehlendes Vertrauen sind nicht nur unangenehm, sondern in Zeiten digitaler Transparenz sogar gefährlich. Dabei geht es um weit mehr als gute Stimmung: Mitarbeitende wollen wahrgenommen werden und die Möglichkeit erhalten, sich einzubringen und mit dem Unternehmen weiterzuentwickeln. Die Grundlagen dafür müssen systematisch geschaffen werden.",
  },
  {
    slug: "teamentwicklung",
    title: "Teamentwicklung",
    subtitle: "auf Führungs- und Mitarbeiterebene",
    teaser:
      "Zusammenarbeit stärken, Konflikte klären und eine tragfähige Teamkultur entwickeln.",
    items: [
      "Teamanalysen auf unterschiedlichen Unternehmensebenen",
      "Konfliktklärung",
      "Mediationsprozesse",
      "Reflexion im Team",
      "Vertrauensfördernde Maßnahmen",
      "Gruppendynamische Prozesse",
      "Entwicklung einer Teamkultur",
    ],
    why: "Wichtige Herausforderungen sind nur im Team zu meistern – und eine gute Arbeitsatmosphäre ist dafür die Grundlage. Vertrauensvolle Zusammenarbeit entsteht, wenn der Einzelne wahrgenommen wird und sich gerne als Teil des Ganzen versteht. Schon kleine Unstimmigkeiten können, wenn sie unbeachtet bleiben, zu langfristiger Unzufriedenheit und gestörten Abläufen führen. Führungskräfte sind hier in der Verantwortung, Teamgeist, Loyalität und Kooperationsbereitschaft zu fördern. Der objektive Blick von außen hilft, Probleme und ihre Ursachen zu erkennen und Konflikte aufzulösen.",
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

export type CaseStudy = {
  /** Kurzes Thema (Überzeile / linke Spalte) */
  topic: string;
  /** Kernaussage */
  headline: string;
  /** Was vorlag */
  situation: string;
  /** Business-Kontext: warum der Kunde das wollte */
  why: string;
  /** Was MSP konkret übernommen hat (nur, wo bekannt) */
  assignment?: string;
  question: string;
};

// Quelle: Praxisbeispiele msphr.de. Das "Warum" ist daraus abgeleitet – von MSP inhaltlich bestätigen lassen.
export const cases: CaseStudy[] = [
  {
    topic: "Unternehmensnachfolge",
    headline: "Führungskräfte kommen mit Lösungen statt mit Problemen",
    situation:
      "In einem Familienunternehmen haben die Kinder als geschäftsführende Gesellschafter übernommen. Bislang landeten Probleme aus dem Alltag ungefiltert bei der Geschäftsführung.",
    why: "Die neue Generation braucht Freiraum für die strategische Weiterentwicklung des Unternehmens. Wenn jede Entscheidung über ihren Tisch geht, wird die Geschäftsführung zum Engpass und das Unternehmen verliert Tempo. Eigenverantwortliche Führungskräfte sind die Voraussetzung dafür, dass der Generationenwechsel gelingt.",
    assignment:
      "Die Leitfrage der Gesellschafter: „Wie gelingt es, dass unsere Führungskräfte nicht mehr mit Problemen, sondern mit Lösungsvorschlägen zu uns kommen?“",
    question: "Sie stehen vor derselben Herausforderung?",
  },
  {
    topic: "Führung in der Produktion",
    headline: "Schichtleiter gezielt entwickeln",
    situation:
      "Eine Mitarbeiterumfrage zeigt hohe Unzufriedenheit mit der Führung auf Schichtleiterebene – vor allem bei den sozialen Kompetenzen.",
    why: "Schichtleiter führen die Menschen, die täglich produzieren. Wo Führung dort nicht funktioniert, leiden Motivation, Zusammenarbeit und Qualität – und gute Mitarbeitende gehen. Standort- und Personalleitung wollten deshalb kein einmaliges Training, sondern ein nachhaltiges Entwicklungskonzept.",
    question: "Ähnliche Rückmeldungen aus Ihrer Mitarbeiterumfrage?",
  },
  {
    topic: "Mitarbeiterjahresgespräch",
    headline: "Vom Pflichttermin zum Führungsinstrument",
    situation:
      "Ein Mittelständler führte bereits Jahresgespräche – die Umsetzungsqualität entsprach aber nicht der ursprünglichen Zielsetzung.",
    why: "Gut geführte Jahresgespräche sind eines der wirksamsten Führungsinstrumente: Ziele vereinbaren, Leistung einordnen, Entwicklung planen. Als lästige Pflicht verschenkt ein Unternehmen genau diesen Hebel.",
    assignment:
      "Den bisherigen Prozess analysieren und gemeinsam mit den Führungskräften neu gestalten – damit sie Sinn und Nutzen für die Organisation, für sich und ihre Mitarbeitenden selbst mittragen.",
    question: "Sie interessieren sich für unser Vorgehen?",
  },
  {
    topic: "Zwei Produktionsstandorte",
    headline: "Kommunikationskultur stärken, Führungstalente binden",
    situation:
      "Zwei Produktionsstandorte eines internationalen Konzerns wollen den Umgang miteinander neu ausrichten und junge Talente strategisch auf eine mögliche Führungsaufgabe vorbereiten.",
    why: "Führungsnachwuchs aus den eigenen Reihen sichert die Nachfolge und bindet Talente ans Unternehmen, statt sie an den Wettbewerb zu verlieren. Eine offene Kommunikationskultur ist dafür die Grundlage.",
    assignment:
      "Eine Personalentwicklungsmaßnahme, in der sich Teilnehmende und ihre Vorgesetzten mit der Führungsrolle auseinandersetzen und ihre sozialen Kompetenzen weiterentwickeln.",
    question: "Kommunikationskultur und Talentförderung sind auch bei Ihnen Thema?",
  },
  {
    topic: "Nach der Restrukturierung",
    headline: "Neu formierte Teams schnell arbeitsfähig machen",
    situation:
      "Die Auslagerung einer Produktlinie führt zu personellen Umverteilungen. Mehrere Teams werden neu zusammengesetzt.",
    why: "Nach einer Restrukturierung zählt, dass die Teams schnell wieder effizient und effektiv arbeiten. Unklare Rollen und Verunsicherung kosten sonst über Monate Leistung.",
    assignment:
      "Teamanalysen für die betroffenen Bereiche mit der Leitfrage „Was kann ich als Teammitglied eigenverantwortlich tun, um das neue Team weiterzuentwickeln?“ – plus konkrete Empfehlungen für die Führungskräfte.",
    question: "Interesse an Team- und Persönlichkeitsanalysen?",
  },
  {
    topic: "Vertrieb",
    headline: "Leitung entlasten mit einer Teamleiterstruktur",
    situation:
      "Der Vertriebsleiter (Prokurist) eines mittelständischen Unternehmens trägt einen Großteil der Verantwortung allein.",
    why: "Er will sich entlasten und die internen Vertriebsprozesse optimieren. Eine Teamleiterstruktur verteilt Verantwortung, beschleunigt Entscheidungen und macht den Vertrieb unabhängiger von einer einzelnen Person.",
    assignment:
      "Komplette Begleitung des Strukturwandels: Auswahl geeigneter Teamleiter und erste Trainings zur Stärkung der neu geschaffenen Rolle.",
    question: "Organisatorische Veränderungen stehen an?",
  },
  {
    topic: "Kandidaten-Check",
    headline: "Teure Fehlbesetzungen vermeiden",
    situation:
      "Ein Maschinenbauer hat innerhalb kurzer Zeit mehrere Personalentscheidungen getroffen, die sich als Enttäuschung herausstellten.",
    why: "Fehlbesetzungen sind teuer: Einarbeitung, Produktivitätsverlust, erneute Suche und Unruhe im Team. Gesucht war deshalb ein Weg, Personalentscheidungen systematisch abzusichern.",
    assignment:
      "Ein Tool, das die Passung zwischen Kandidat:innen und Position analysiert und die Verantwortlichen im Auswahlprozess unterstützt – und das sich auch in Personal- und Teamentwicklung sowie bei Konflikten einsetzen lässt.",
    question: "Sie wollen Personalentscheidungen absichern?",
  },
];

export const steps = [
  {
    title: "Zielsetzung",
    text: "Nur klar definierte Ziele führen zu klarem Erfolg. Sie wissen, was Sie erreichen möchten – wir finden heraus, wie wir Sie dabei unterstützen.",
  },
  {
    title: "Analyse",
    text: "Unser objektiver Blick auf Führungsprozesse, Abläufe, Zusammenarbeit, Kommunikation und Arbeitsklima zeigt, wo Potenzial liegt.",
  },
  {
    title: "Briefing",
    text: "Die Verantwortlichen werden von Anfang an in die Entwicklung und den Veränderungsprozess eingebunden.",
  },
  {
    title: "Individuelle Konzepte",
    text: "Maßnahmen, exakt auf Ihr Unternehmen zugeschnitten. MSP begleitet aktiv als Impulsgeber, Moderator und Trainer.",
  },
  {
    title: "Dialog",
    text: "Gespräche mit Teams und Mitarbeitenden, Führungsdialoge mit Entscheidern – alle Beteiligten kennen Fortschritte, Hindernisse und Ergebnisse.",
  },
  {
    title: "Nachbetreuung",
    text: "Auch nach Projektabschluss stehen wir beratend und nachjustierend zur Seite. So werden „Rückfälle“ vermieden und neue Arbeitsweisen verankert.",
  },
];

export type Person = {
  name: string;
  /** Kurze Bezeichnung (1–3 Wörter) passend zum Baustein */
  role: string;
  /** Baustein, für den die Person steht */
  baustein: string;
  image: string;
  linkedin: string;
};

export const team: Person[] = [
  {
    name: "Mark Schweitzer-Pullar",
    role: "Strukturarchitekt", // steht für: "Strukturen, die tragen. Führung, die wirkt."
    baustein: "MSP HR Business Partner",
    image: "/images/team/mark-schweitzer-pullar.jpg",
    linkedin: "https://www.linkedin.com/in/mark-schweitzer-pullar-1ab90914/",
  },
  {
    name: "Kathrin Strohmeier",
    role: "Praxisübersetzerin", // steht für: "Damit Entwicklung im Alltag wirklich ankommt."
    baustein: "MSP Lernwelt",
    image: "/images/team/kathrin-strohmeier.jpg",
    linkedin: "https://www.linkedin.com/in/kathrin-strohmeier/",
  },
];

// Download mit Mehrwert – Inhalt des PDFs wird noch gemeinsam erstellt.
// Solange href null ist, zeigt die Seite "In Vorbereitung" statt des Download-Buttons.
export const download = {
  kicker: "Kostenloser Leitfaden",
  title: "Zukunftsfaktor Mensch: So wird Entwicklung zum",
  highlight: "Erfolgsfaktor.",
  lead: "Wie Organisations-, Führungs- und Personalentwicklung gezielt auf Ihre Unternehmensziele einzahlen: die wichtigsten Hebel, typische Stolpersteine und konkrete Handlungsmöglichkeiten – kompakt zum Nachlesen und Weitergeben an Ihre Entscheider.",
  pages: "ca. 8 Seiten", // TODO: nach Fertigstellung anpassen
  size: null as string | null, // z. B. "1,2 MB"
  href: null as string | null, // z. B. "/downloads/MSP-Leitfaden-Zukunftsfaktor-Mensch.pdf"
};

// Die zwei Bausteine von MSP – einzeln buchbar oder kombiniert.
// Vorläufige Texte auf Basis von Daniels Briefing; mit dem Word-Dokument abgleichen.
export type Baustein = {
  key: "hrbp" | "lernwelt";
  name: string;
  claim: string;
  /** Slogan wie auf LinkedIn */
  slogan: string;
  question: string;
  text: string;
  focus: string[];
  details: { title: string; items: string[]; href?: string }[];
};

export const bausteine: Baustein[] = [
  {
    key: "hrbp",
    name: "HR Business Partner",
    claim: "Struktur und Steuerbarkeit",
    slogan: "Strukturen, die tragen. Führung, die wirkt.",
    question: "Geht es um Strategie, Struktur, Prozesse, Rollen und Klarheit?",
    text: "Wir schaffen die Rahmenbedingungen, in denen Menschen ihre Leistung entfalten können: klare Verantwortlichkeiten, tragfähige Strukturen und Führung, die steuert. Langfristig aufgebaut und an Ihren Unternehmenszielen ausgerichtet.",
    focus: ["Strategie & Struktur", "Rollen & Verantwortung", "Prozesse & Schnittstellen", "Führung & Nachfolge"],
    details: [
      {
        title: "Organisationsentwicklung",
        items: ["Unternehmens- und Führungsnachfolge", "Neue Organisationsformen und Strukturen", "Rollen und Anforderungsprofile", "Schnittstellenmanagement und Prozessentwicklung"],
        href: "/leistungen/organisationsentwicklung",
      },
      {
        title: "Führungskräfteentwicklung",
        items: ["Entwicklung von Führungsteams", "Karriere- und Talentprogramme", "Transfersicherung"],
        href: "/leistungen/fuehrungskraefteentwicklung",
      },
      {
        title: "Personalentwicklung",
        items: ["Strategische PE-Konzepte", "Mitarbeiterbindung", "Karriere- und Nachfolgeplanung", "Beurteilungssysteme und Bildungscontrolling"],
        href: "/leistungen/personalentwicklung",
      },
      {
        title: "Teamentwicklung",
        items: ["Teamanalysen", "Konfliktklärung und Mediation", "Entwicklung einer Teamkultur"],
        href: "/leistungen/teamentwicklung",
      },
    ],
  },
  {
    key: "lernwelt",
    name: "Lernwelt",
    claim: "Wissen und soziale Kompetenz",
    slogan: "Damit Entwicklung im Alltag wirklich ankommt.",
    question: "Geht es um Weiterentwicklung, Training und Coaching?",
    text: "Wir erweitern gezielt Wissen und soziale Kompetenzen – praxisnah und direkt anwendbar. Trainings, Workshops und Coachings, die im Arbeitsalltag ankommen und dort Wirkung zeigen.",
    focus: ["Trainings & Workshops", "Coaching", "Soziale Kompetenz", "Transfer in den Alltag"],
    details: [
      {
        title: "Trainings & Workshops",
        items: ["Maßgeschneidert auf Ihre Situation", "Führungskompetenz und Persönlichkeitsentwicklung", "Alle Bereiche der sozialen Kompetenz"],
      },
      {
        title: "Coaching",
        items: ["Führungskräfte-Coaching", "Begleitung in neuen Rollen", "Reflexion im Team"],
      },
      {
        title: "Wirkung sichern",
        items: ["Bildungsbedarfs- und Persönlichkeitsanalysen vorab", "Transfersicherung im Arbeitsalltag", "Nachbetreuung, damit Gelerntes bleibt"],
      },
    ],
  },
];

// Schneller Einstieg – egal, welcher Baustein am Ende der richtige ist.
export const quickStart = [
  {
    title: "Klärungsgespräch",
    text: "Wir tauschen uns aus, stellen die richtigen Fragen und finden gemeinsam heraus, wo in Ihrem Unternehmen der größte Hebel liegt.",
  },
  {
    title: "Konkreter Vorschlag",
    text: "Sie erhalten einen umsetzbaren Vorschlag für das weitere Vorgehen – klar strukturiert, damit Sie schnell entscheiden können.",
  },
];

// Die drei typischen Schmerzpunkte (Grundproblem) – für alle Startseiten-Varianten ab V2.
export const pains = [
  {
    title: "Leistung versickert in unklaren Strukturen.",
    text: "Verantwortlichkeiten sind nicht geklärt, Schnittstellen reiben, Entscheidungen bleiben liegen. Gute Leute arbeiten unter ihren Möglichkeiten.",
  },
  {
    title: "Führung wird vorausgesetzt statt entwickelt.",
    text: "Fachlich starke Mitarbeitende rücken in Führungsrollen – ohne das Handwerkszeug dafür. Teams und Ergebnisse zahlen den Preis.",
  },
  {
    title: "Weiterbildung findet statt, aber sie wirkt nicht.",
    text: "Trainings werden gebucht, der Alltag bleibt derselbe. Ohne klaren Bezug zu den Unternehmenszielen verpufft die Investition.",
  },
];

// Kennzahlen – nur belegbare Fakten.
export const facts = [
  { value: "20+", label: "Jahre Erfahrung – seit 2002" },
  { value: "2", label: "Bausteine – einzeln oder kombiniert" },
  { value: "DE", label: "deutschlandweit für KMU und Großunternehmen" },
];
