import { HebelFinder } from "../HebelFinder";

// Sektion mit dem interaktiven Hebel-Finder (Version 4, Version 6).
export function HebelSection() {
  return (
  <section id="hebel" className="bg-white py-24 sm:py-32">
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <div className="max-w-3xl">
        <p className="t-eyebrow text-brand">Hebel-Finder</p>
        <h2 className="t-h2 mt-4 text-navy">
          Wo liegt Ihr größter Hebel – <span className="u-accent">Struktur oder Kompetenz?</span>
        </h2>
        <p className="t-lead mt-8 text-muted">
          Probieren Sie es aus: Wählen Sie, was auf Ihr Unternehmen zutrifft, und erhalten Sie sofort eine erste Einordnung.
        </p>
      </div>
      <div className="mt-14">
        <HebelFinder />
      </div>
    </div>
  </section>
  );
}
