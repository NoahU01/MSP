import { texts, type Locale } from "@/lib/i18n";
import { HebelFinder } from "../HebelFinder";

// Sektion mit dem interaktiven Hebel-Finder (Version 4, Version 6).
export function HebelSection({ locale = "de" }: { locale?: Locale }) {
  const t = texts[locale].hebel;
  return (
  <section id="hebel" className="bg-white py-24 sm:py-32">
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <div className="max-w-3xl">
        <p className="t-eyebrow text-brand">{t.eyebrow}</p>
        <h2 className="t-h2 mt-4 text-navy">
          {t.title[0]}
          <span className="u-accent">{t.title[1]}</span>
        </h2>
        <p className="t-lead mt-8 text-muted">{t.lead}</p>
      </div>
      <div className="mt-14">
        <HebelFinder locale={locale} />
      </div>
    </div>
  </section>
  );
}
