import { Section } from "@/components/Section";

// Dunkler Störer: Zukunftsfaktor Mensch mit klarer Businesslogik.
export function Stoerer() {
  return (
  <Section tone="ink">
    <div className="grid gap-12 md:grid-cols-2 md:items-center md:gap-20">
      <p className="t-h2 !text-[clamp(1.75rem,1.2rem+1.5vw,2.5rem)] !leading-[1.25] text-white">
        Damit sich der Zukunftsfaktor Mensch optimal entwickelt{" "}
        <span className="u-accent">
          und gezielt zum Unternehmenserfolg beiträgt.
        </span>
      </p>
      <div className="t-lead space-y-5 text-white/80">
        <p>
          Unternehmenserfolg steht und fällt mit den Menschen, die dafür arbeiten und
          Verantwortung tragen. Deshalb ist Personal- und Organisationsentwicklung für uns kein
          Wohlfühlprogramm, sondern ein Hebel für Ihre Unternehmensziele.
        </p>
        <p>
          Jede Maßnahme beginnt bei der Frage, was sie zum Geschäft beiträgt: klare
          Verantwortlichkeiten und schlanke Abläufe, Führungskräfte, die Ergebnisse liefern,
          Teams, die effizient zusammenarbeiten, und Mitarbeitende, die bleiben. Daran messen
          wir unsere Arbeit.
        </p>
      </div>
    </div>
  </Section>
  );
}
