// Zweisprachigkeit der Startseite: Deutsch unter "/", Englisch unter "/en".
// Texte der Startseite stehen hier (UI-Texte) und in content.ts / content-en.ts (Inhalte).
// Der englische Teil ist ein Übersetzungsentwurf und muss von MSP freigegeben werden.
import * as de from "./content";
import * as en from "./content-en";

export type Locale = "de" | "en";

/** Sprache aus dem Pfad: alles unter /en ist Englisch. */
export function localeFromPath(path: string): Locale {
  return path === "/en" || path.startsWith("/en/") ? "en" : "de";
}

/** Startseite der jeweiligen Sprache */
export const homePath = { de: "/", en: "/en" } as const;

/** Inhalte (Personen, Bausteine, Praxisbeispiele …) je Sprache */
export function content(locale: Locale) {
  const c = locale === "en" ? en : de;
  return {
    company: locale === "en" ? { ...de.company, ...en.company } : de.company,
    team: c.team,
    bausteine: c.bausteine,
    cases: c.cases,
    pains: c.pains,
    facts: c.facts,
    download: c.download,
  };
}

const deText = {
  nav: {
    label: "Hauptnavigation",
    items: { hebel: "Hebel-Finder", bausteine: "Unsere Lösung", einstieg: "Umsetzung" },
    contact: "Kontakt",
    openMenu: "Menü öffnen",
    closeMenu: "Menü schließen",
    switchLabel: "Sprache wählen",
    home: "Zur Startseite",
  },
  hero: {
    eyebrow: "Zukunftsfaktor Mensch · seit",
    title: "Ihr HR Businesspartner für Führungs-, Entwicklungs- und Veränderungs\u00adprozesse",
    lead: "Wir begleiten Unternehmen individuell, ganzheitlich und nachhaltig – als Berater, Trainer und Moderatoren für KMU und Großunternehmen in der DACH\u2011Region.",
    cta: "Was Sie davon haben",
  },
  ausgangslage: {
    eyebrow: "Die Ausgangslage",
    title: ["Mehr erreichen – mit den ", "richtigen Kompetenzen", " in der ", "richtigen Rolle", "."],
    pressures: [
      "Märkte werden enger",
      "Kosten steigen",
      "Fachkräfte fehlen",
      "Komplexität steigt",
      "Umsetzungs\u00addruck wächst",
      "Eigen\u00adverantwort\u00adlichkeit lässt nach",
    ],
    question: ["Die Frage ist nicht, ob Sie in Ihre Menschen investieren – ", "sondern wo und wie es am meisten bewirkt."],
  },
  hebel: {
    eyebrow: "Hebel-Finder",
    title: ["Wo liegt Ihr größter Hebel\u00a0– ", "Richtung und Struktur oder Wissen und Handlungskompetenz?"],
    lead: "Probieren Sie es aus: Wählen Sie, was auf Ihr Unternehmen zutrifft, und erhalten Sie sofort eine erste Einordnung.",
    tool: "Hebel-Finder",
    interactive: "Interaktiv",
    reset: "Zurücksetzen",
    selected: (n: number, total: number) => `${n} von ${total} ausgewählt`,
    step1: "Was trifft auf Ihr Unternehmen zu?",
    step1Hint: "Mehrfachauswahl möglich – einfach anklicken",
    step2: "Ihr Ergebnis",
    step2Hint: "Erste Einordnung",
    step2Empty: "Erscheint nach Ihrer Auswahl",
    barLeft: "Struktur",
    barRight: "Kompetenz",
    fits: "Passender Baustein:",
    cta: "Ergebnis im Gespräch vertiefen",
    emptyTitle: "Wählen Sie aus, was zutrifft.",
    emptyText: "Ihr Ergebnis erscheint hier sofort.",
    // Bewusst gemischt angeordnet, damit nicht sofort erkennbar ist, welche Aussage zu welchem Baustein gehört.
    statements: [
      { key: "hrbp", text: "Zuständigkeiten, Rollen und Befugnisse sind nicht klar geregelt." },
      { key: "lernwelt", text: "Heikle Gespräche werden zu oft vermieden." },
      { key: "lernwelt", text: "Konflikte oder Kommunikation bremsen die Zusammenarbeit." },
      { key: "hrbp", text: "Entscheidungen dauern zu lange oder bleiben unklar." },
      { key: "hrbp", text: "Eine Nachfolge oder Umstrukturierung steht an." },
      { key: "lernwelt", text: "Führungskräften fehlt Handwerkszeug für ihre Rolle." },
      { key: "hrbp", text: "Ziele und Prioritäten sind nicht ausreichend abgestimmt." },
      { key: "lernwelt", text: "Mitarbeitende übernehmen zu wenig Verantwortung im Alltag." },
      { key: "lernwelt", text: "Weiterbildung findet statt, kommt aber im Alltag nicht an." },
      { key: "hrbp", text: "Abläufe und Schnittstellen kosten zu viel Zeit." },
    ],
    results: {
      hrbp: {
        title: "Ihr größter Hebel liegt in der Struktur.",
        baustein: "HR Business Partner",
        text: "Bevor Menschen ihre Leistung entfalten können, braucht es klare Rollen, tragfähige Strukturen und Abläufe, die funktionieren.",
        steps: [
          "Strategien und Zielbilder festlegen",
          "Zuständigkeiten, Rollen und Verantwortung klären",
          "Abläufe und Schnittstellen analysieren",
          "Nachfolge und Organisation aufstellen",
        ],
      },
      lernwelt: {
        title: "Ihr größter Hebel liegt in der Kompetenz.",
        baustein: "Lernwelt",
        text: "Die Struktur trägt – jetzt geht es darum, dass Führungskräfte und Teams das Nötige können und im Alltag anwenden.",
        steps: [
          "Kompetenzbedarf gezielt erheben",
          "Haltung und Einstellung auf den Prüfstand stellen",
          "Trainings und Coachings zuschneiden",
          "Transfer in den Alltag sichern",
        ],
      },
      beides: {
        title: "Ihr größter Hebel liegt in der Kombination.",
        baustein: "HR Business Partner + Lernwelt",
        text: "Struktur und Kompetenz hängen bei Ihnen zusammen: Neue Rollen und Abläufe wirken erst, wenn die Menschen sie ausfüllen können.",
        steps: ["Zuständigkeiten, Rollen und Verantwortung klären", "Führungskräfte und Teams befähigen", "Beides aufeinander abstimmen"],
      },
    },
  },
  loesung: {
    eyebrow: "Unsere Lösung",
    lead: "Zwei Bausteine, zwei Perspektiven. Einzeln buchbar\u00a0– stark in Kombination.",
    details: "Details ansehen",
    close: "Schließen",
  },
  claim: ["Damit sich der Zukunftsfaktor Mensch optimal entwickelt", "und gezielt zum Unternehmenserfolg beiträgt."],
  einstieg: {
    eyebrow: "So starten wir",
    title: "Zwei Schritte bis zur Entscheidung.",
    steps: [
      { title: "Klärungsgespräch", short: "Wo liegt Ihr größter Hebel?" },
      { title: "Konkreter Vorschlag", short: "Umsetzbar und entscheidungsreif." },
      { title: "Umsetzung", short: "Mit dem Baustein, der passt." },
    ],
    step: "Schritt",
    after: "Danach",
    cta: "Klärungsgespräch vereinbaren",
  },
  praxis: {
    eyebrow: "Anliegen von Geschäftspartnern",
    title: ["Aus unserem ", "Tagesgeschäft."],
    lead: "Gemeinsam mit unseren Geschäftspartnern konkretisieren wir die Ziele, vereinbaren passende Maßnahmen und fokussieren uns auf die Umsetzung – konsequent und Schritt für Schritt.",
    references: "Gern nennen wir Ihnen auf Anfrage Geschäftspartner, die Sie direkt kontaktieren dürfen\u00a0– so machen Sie sich aus erster Hand ein Bild von unserer Arbeit.",
    situation: "Ausgangslage",
    why: "Warum es dem Kunden wichtig war",
    assignment: "Der Auftrag",
    talk: "Sprechen Sie uns an →",
  },
  download: {
    button: "PDF herunterladen",
    soon: "Erscheint in Kürze",
    soonMeta: "in Vorbereitung",
  },
  kontakt: {
    eyebrow: "Kontakt",
    title: "Lassen Sie uns über Ihre Situation sprechen.",
    lead: "Wir hören zu, stellen die richtigen Fragen und sagen Ihnen offen, ob und wie wir Sie unterstützen können.",
    linkedin: (name: string) => `${name} auf LinkedIn`,
  },
  footer: {
    imprint: "Impressum",
    privacy: "Datenschutz",
  },
};

export type Texts = typeof deText;

// Übersetzungsentwurf (Englisch) – von MSP fachlich prüfen lassen.
const enText: Texts = {
  nav: {
    label: "Main navigation",
    items: { hebel: "Leverage Finder", bausteine: "Our Solution", einstieg: "Getting Started" },
    contact: "Contact",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    switchLabel: "Choose language",
    home: "To the homepage",
  },
  hero: {
    eyebrow: "The human factor · since",
    title: "Your HR business partner for leadership, development and change processes",
    lead: "We support companies individually, holistically and sustainably – as consultants, trainers and facilitators for SMEs and large corporations across the DACH region.",
    cta: "What's in it for you",
  },
  ausgangslage: {
    eyebrow: "The starting point",
    title: ["Achieve more – with the ", "right skills", " in the ", "right role", "."],
    pressures: [
      "Markets are tightening",
      "Costs are rising",
      "Skilled workers are scarce",
      "Complexity is growing",
      "Pressure to deliver is mounting",
      "Personal ownership is declining",
    ],
    question: ["The question is not whether to invest in your people – ", "but where and how it makes the greatest impact."],
  },
  hebel: {
    eyebrow: "Leverage Finder",
    title: ["Where is your greatest lever\u00a0– ", "direction and structure, or knowledge and the ability to act?"],
    lead: "Try it out: select what applies to your company and get an initial assessment straight away.",
    tool: "Leverage Finder",
    interactive: "Interactive",
    reset: "Reset",
    selected: (n: number, total: number) => `${n} of ${total} selected`,
    step1: "What applies to your company?",
    step1Hint: "Select as many as apply – just click",
    step2: "Your result",
    step2Hint: "Initial assessment",
    step2Empty: "Appears once you make a selection",
    barLeft: "Structure",
    barRight: "Competence",
    fits: "Matching module:",
    cta: "Discuss your result with us",
    emptyTitle: "Select what applies.",
    emptyText: "Your result will appear here instantly.",
    statements: [
      { key: "hrbp", text: "Responsibilities, roles and authority are not clearly defined." },
      { key: "lernwelt", text: "Difficult conversations are avoided too often." },
      { key: "lernwelt", text: "Conflicts or communication are slowing down collaboration." },
      { key: "hrbp", text: "Decisions take too long or remain unclear." },
      { key: "hrbp", text: "A succession or restructuring is coming up." },
      { key: "lernwelt", text: "Managers lack the tools they need for their role." },
      { key: "hrbp", text: "Goals and priorities are not sufficiently aligned." },
      { key: "lernwelt", text: "Employees take too little responsibility in their day-to-day work." },
      { key: "lernwelt", text: "Training takes place but doesn't carry over into daily work." },
      { key: "hrbp", text: "Processes and interfaces take up too much time." },
    ],
    results: {
      hrbp: {
        title: "Your greatest lever is structure.",
        baustein: "HR Business Partner",
        text: "Before people can deliver their best, they need clear roles, robust structures and processes that work.",
        steps: [
          "Define strategies and target pictures",
          "Clarify responsibilities, roles and accountability",
          "Analyse processes and interfaces",
          "Set up succession and organisation",
        ],
      },
      lernwelt: {
        title: "Your greatest lever is competence.",
        baustein: "Learning World",
        text: "The structure holds – now it's about making sure managers and teams have the skills they need and apply them every day.",
        steps: [
          "Assess skill requirements in a targeted way",
          "Put mindset and attitudes to the test",
          "Tailor training and coaching",
          "Ensure transfer into daily work",
        ],
      },
      beides: {
        title: "Your greatest lever is the combination.",
        baustein: "HR Business Partner + Learning World",
        text: "In your case, structure and competence go hand in hand: new roles and processes only work once people are able to fill them.",
        steps: ["Clarify responsibilities, roles and accountability", "Enable managers and teams", "Align the two"],
      },
    },
  },
  loesung: {
    eyebrow: "Our solution",
    lead: "Two modules, two perspectives. Available individually\u00a0– strongest in combination.",
    details: "View details",
    close: "Close",
  },
  claim: ["So that the human factor can develop to its full potential", "and make a targeted contribution to business success."],
  einstieg: {
    eyebrow: "How we start",
    title: "Two steps to a decision.",
    steps: [
      { title: "Initial consultation", short: "Where is your greatest lever?" },
      { title: "Concrete proposal", short: "Actionable and ready for a decision." },
      { title: "Implementation", short: "With the module that fits." },
    ],
    step: "Step",
    after: "Then",
    cta: "Book an initial consultation",
  },
  praxis: {
    eyebrow: "What our business partners ask of us",
    title: ["From our ", "day\u2011to\u2011day work."],
    lead: "Together with our business partners, we define the goals, agree on suitable measures and focus on implementation – consistently and step by step.",
    references: "On request, we are happy to name business partners you may contact directly\u00a0– so you can get a first-hand picture of our work.",
    situation: "The situation",
    why: "Why it mattered to the client",
    assignment: "The assignment",
    talk: "Get in touch →",
  },
  download: {
    button: "Download PDF",
    soon: "Coming soon",
    soonMeta: "in preparation",
  },
  kontakt: {
    eyebrow: "Contact",
    title: "Let's talk about your situation.",
    lead: "We listen, ask the right questions and tell you openly whether and how we can support you.",
    linkedin: (name: string) => `${name} on LinkedIn`,
  },
  footer: {
    imprint: "Legal notice",
    privacy: "Privacy policy",
  },
};

export const texts: Record<Locale, Texts> = { de: deText, en: enText };
