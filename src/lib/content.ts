// Zentrale Inhalte der Website. Texte basieren auf msphr.de (Stand 2025), gestrafft.

export const company = {
  name: "MSP human resources GmbH",
  shortName: "MSP",
  claim: "Ihr HR Businesspartner für Führungs-, Entwicklungs- und Veränderungsprozesse",
  since: 2002,
  ceo: "Mark Schweitzer-Pullar",
  street: "Untere Gasse 64",
  zip: "74564",
  city: "Crailsheim",
  phone: "+49 79 51 27 89 70",
  phoneHref: "tel:+497951278970",
  email: "info@msphr.de",
  vatId: "DE 2230 74168",
  customerLoginUrl: "https://msphr.de/customer-login/",
  brochureUrl: "/downloads/MSP-Imagebroschuere-Zukunftsfaktor-Mensch.pdf",
};

export type Service = {
  slug: string;
  title: string;
  subtitle?: string;
  teaser: string;
  items: string[];
  worstCase: {
    quote: string;
    text: string;
    image: string;
    imageAlt: string;
  };
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
    worstCase: {
      quote:
        "In unseren Abteilungen gibt es keine klar definierten Verantwortlichen oder Abläufe. Jeder macht sein Ding nach bestem Wissen und Gewissen.",
      text: "Um komplexe Unternehmensaufgaben effizient, effektiv und nachhaltig zu organisieren, braucht es Weitsicht. Markt- und Personalveränderungen müssen berücksichtigt und in die Zukunft gedacht werden. Agiles Arbeiten und die Herausforderungen der Digitalisierung erfordern häufig einen neuen Blick und die Bereitschaft, Bewährtes auf den Prüfstand zu stellen. Bestehende Strukturen, aber auch Führungs- und Kommunikationsprozesse werden deshalb ganzheitlich betrachtet und den unternehmerischen Zielen angepasst.",
      image: "/images/worstcase-organisationsentwicklung.jpg",
      imageAlt:
        "Illustration: Eine Kollegin brüllt durch ein Megafon, ein Kollege zeigt abweisend auf sie – im Hintergrund Chaos im Büro.",
    },
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
    worstCase: {
      quote: "Wer seinen Job gut macht, wird sich schon irgendwie hocharbeiten.",
      text: "Die Anforderungen an Führungskräfte sind hoch und haben sich stark gewandelt. Mitarbeitende haben heute oft genaue Vorstellungen davon, wie sie geführt werden möchten. Nicht jeder ist dieser Aufgabe gewachsen – und nicht immer wird eine mögliche Führungskraft als solche erkannt. Wer sich nicht frühzeitig um Führungsnachwuchs in den eigenen Reihen kümmert, steuert auf Nachfolge-Engpässe zu. Die gezielte Entwicklung von Führungskompetenzen und das Erkennen von Potenzialen sind deshalb integraler Bestandteil einer ganzheitlichen Personalstrategie.",
      image: "/images/worstcase-fuehrungskraefteentwicklung.jpg",
      imageAlt: "Illustration zur Führungskräfteentwicklung aus der „Worst Case GmbH“.",
    },
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
    worstCase: {
      quote: "Wem unsere Methoden und Vorgehensweisen nicht gefallen, der soll halt gehen.",
      text: "Wer die Unzufriedenheit seiner Mitarbeitenden nicht ernst nimmt, muss sich über hohe Fluktuation und mangelnde Arbeitsergebnisse nicht wundern. Ein schlechtes Arbeitsklima und fehlendes Vertrauen sind nicht nur unangenehm, sondern in Zeiten digitaler Transparenz sogar gefährlich. Dabei geht es um weit mehr als gute Stimmung: Mitarbeitende wollen wahrgenommen werden und die Möglichkeit erhalten, sich einzubringen und mit dem Unternehmen weiterzuentwickeln. Die Grundlagen dafür müssen systematisch geschaffen werden.",
      image: "/images/worstcase-personalentwicklung.jpg",
      imageAlt: "Illustration zur Personalentwicklung aus der „Worst Case GmbH“.",
    },
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
    worstCase: {
      quote:
        "Würden die Anderen ihren Job richtig machen, wäre auch meine Leistung viel besser.",
      text: "Wichtige Herausforderungen sind nur im Team zu meistern – und eine gute Arbeitsatmosphäre ist dafür die Grundlage. Vertrauensvolle Zusammenarbeit entsteht, wenn der Einzelne wahrgenommen wird und sich gerne als Teil des Ganzen versteht. Schon kleine Unstimmigkeiten können, wenn sie unbeachtet bleiben, zu langfristiger Unzufriedenheit und gestörten Abläufen führen. Führungskräfte sind hier in der Verantwortung, Teamgeist, Loyalität und Kooperationsbereitschaft zu fördern. Der objektive Blick von außen hilft, Probleme und ihre Ursachen zu erkennen und Konflikte aufzulösen.",
      image: "/images/worstcase-teamentwicklung.jpg",
      imageAlt:
        "Illustration: Zwei Kollegen zeigen mit dem Finger aufeinander, ein dritter steht mit verschränkten Armen daneben.",
    },
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

export type CaseStudy = {
  title: string;
  situation: string;
  cta: string;
};

export const cases: CaseStudy[] = [
  {
    title: "Eigenverantwortung stärken",
    situation:
      "In einem Familienunternehmen steht die Nachfolge an. Die Kinder haben als geschäftsführende Gesellschafter übernommen und fragen: „Wie gelingt es, dass unsere Führungskräfte nicht mehr mit Problemen, sondern mit Lösungsvorschlägen zu uns kommen?“",
    cta: "Sie stehen vor derselben Herausforderung? Kontaktieren Sie uns.",
  },
  {
    title: "Schichtleiter entwickeln",
    situation:
      "Eine Mitarbeiterumfrage zeigt hohe Unzufriedenheit mit der Führungsleistung – insbesondere den sozialen Kompetenzen – auf Schichtleiterebene. Standort- und Personalleitung wünschen sich ein nachhaltiges Entwicklungskonzept.",
    cta: "Ähnliche Rückmeldungen aus Ihrer Mitarbeiterumfrage? Gerne stellen wir Ihnen unser Vorgehen vor.",
  },
  {
    title: "Mitarbeiterjahresgespräch nachhaltig etablieren",
    situation:
      "Ein Mittelständler will das Jahresgespräch neu aufsetzen, weil die Umsetzungsqualität nicht den Zielen entsprach. Der Prozess wird analysiert – und die Führungskräfte gestalten den neuen Prozess von Anfang an mit.",
    cta: "Sie interessieren sich für unser Vorgehen? Sprechen Sie uns an.",
  },
  {
    title: "Führungstalente fordern und fördern",
    situation:
      "Zwei Produktionsstandorte eines internationalen Konzerns wollen ihre Kommunikationskultur neu ausrichten und junge Talente strategisch auf Führungsaufgaben vorbereiten – und so ans Unternehmen binden.",
    cta: "Sprechen Sie mit uns über Kommunikationskultur und Talentförderung.",
  },
  {
    title: "Teamanalysen samt Handlungsempfehlungen",
    situation:
      "Nach einer Restrukturierung wünschen sich Geschäftsleitung und HR Teamanalysen für die betroffenen Bereiche. Leitfrage: „Was kann ich als Teammitglied tun, um das neue Team effizient und effektiv weiterzuentwickeln?“ – ergänzt um Empfehlungen für die Führungskräfte.",
    cta: "Interesse an Team- und Persönlichkeitsanalysen? Gehen Sie mit uns in den Austausch.",
  },
  {
    title: "Teamleiterstruktur etablieren",
    situation:
      "Der Vertriebsleiter eines Mittelständlers will Verantwortung abgeben und eine neue Teamstruktur aufbauen. MSP begleitet den gesamten Strukturwandel – inklusive Auswahl geeigneter Teamleiter und erster Trainings für die neue Rolle.",
    cta: "Organisatorische Veränderungen stehen an? Melden Sie sich.",
  },
  {
    title: "Kandidaten-Check",
    situation:
      "Nach mehreren enttäuschenden Personalentscheidungen sucht ein Maschinenbauer ein Tool, das die Passung zwischen Kandidat:innen und Position systematisch analysiert – und das sich auch in Personal- und Teamentwicklung sowie bei Konflikten einsetzen lässt.",
    cta: "Sie wollen Personalentscheidungen absichern? Sprechen Sie uns an.",
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
