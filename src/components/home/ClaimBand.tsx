import { texts, type Locale } from "@/lib/i18n";

// Dunkles Band als Strukturgeber (Muster empiria): nur der Claim mit türkiser Unterstreichung.
export function ClaimBand({ locale = "de" }: { locale?: Locale }) {
  const [claim, accent] = texts[locale].claim;
  return (
    <section className="bg-deep py-24 text-white sm:py-28">
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
        <p className="t-h2 mx-auto max-w-4xl text-white">
          {claim}{" "}
          <span className="u-accent">{accent}</span>
        </p>
      </div>
    </section>
  );
}
