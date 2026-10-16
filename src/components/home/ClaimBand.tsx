import { content, texts, type Locale } from "@/lib/i18n";

// Dunkles Band als Strukturgeber (Muster empiria): Claim mit türkiser Unterstreichung + Kennzahlen.
export function ClaimBand({ locale = "de" }: { locale?: Locale }) {
  const { facts } = content(locale);
  const [claim, accent] = texts[locale].claim;
  return (
    <section className="bg-deep py-24 text-white sm:py-28">
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
        <p className="t-h2 mx-auto max-w-4xl text-white">
          {claim}{" "}
          <span className="u-accent">{accent}</span>
        </p>
        <div className="mx-auto mt-16 grid max-w-4xl gap-10 sm:grid-cols-3">
          {facts.map((f) => (
            <div key={f.label}>
              <p className="text-6xl font-light tracking-tight text-white">{f.value}</p>
              <p className="mx-auto mt-3 max-w-[20ch] text-[15px] font-light leading-relaxed text-white/70">{f.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
