import { Section } from "@/components/Section";

// Dunkler Störer: Zukunftsfaktor Mensch mit klarer Businesslogik.
export function Stoerer() {
  return (
  <Section tone="ink">
    <div className="grid gap-12 md:grid-cols-5 md:items-center">
      <p className="text-3xl font-semibold leading-tight tracking-tight text-balance sm:text-4xl md:col-span-2">
        Damit sich der Zukunftsfaktor Mensch optimal entwickelt{" "}
        <span className="underline decoration-brand decoration-4 underline-offset-8">
          und gezielt zum Unternehmenserfolg beiträgt.
        </span>
      </p>
      <div className="space-y-5 text-lg leading-relaxed text-white/80 md:col-span-3">
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
