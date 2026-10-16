import Image from "next/image";
import { content, texts, type Locale } from "@/lib/i18n";
import {
  IconComplexity,
  IconCost,
  IconLeadership,
  IconLearning,
  IconMarket,
  IconOwnership,
  IconPeople,
  IconPressure,
  IconStructure,
} from "../Icons";

// Icons in der Reihenfolge der sechs Druckfaktoren (Texte in i18n.ts)
const pressureIcons = [IconMarket, IconCost, IconPeople, IconComplexity, IconPressure, IconOwnership];
const painIcons = [IconStructure, IconLeadership, IconLearning];

// Ausgangslage – bewusst knapp (nur Kernaussagen).
// variant "box": Aussage links, dunkle Box rechts – die sechs Druckfaktoren als ruhiges 2×3-Raster. variant "plain": ohne Box, drei Aussagen mit Icons.
// Der Fingerabdruck liegt über den Sektionshintergründen und läuft in die nächste Sektion hinein;
// Inhalte liegen darüber (siehe globals.css: #inhalt section > div).
export function Ausgangslage({ variant = "box", locale = "de" }: { variant?: "box" | "plain"; locale?: Locale }) {
  const { pains } = content(locale);
  const t = texts[locale].ausgangslage;
  const [a, b, c, d, e] = t.title;
  const title = (
    <>
      {a}
      <span className="u-accent">{b}</span>
      {c}
      <span className="u-accent">{d}</span>
      {e}
    </>
  );
  const pressures = t.pressures.map((label, i) => ({ icon: pressureIcons[i], label }));
  return (
    <section id="ausgangslage" className="relative overflow-x-clip bg-paper py-24 sm:py-32">
      <Image
        src="/images/fingerprint.jpg"
        alt=""
        width={1280}
        height={818}
        className="pointer-events-none absolute -bottom-56 -left-44 z-[5] w-[620px] max-w-none opacity-60 mix-blend-multiply [mask-image:linear-gradient(to_bottom,#000_55%,transparent_95%)]"
      />

      {variant === "box" ? (
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-16">
          <div>
            <p className="t-eyebrow text-brand">{t.eyebrow}</p>
            <h2 className="t-h2 mt-4 text-navy">{title}</h2>
          </div>
          <div className="rounded-[28px] bg-navy p-6 text-white shadow-[0_30px_70px_rgba(0,84,130,0.25)] sm:p-10">
            <ul className="grid grid-cols-2 gap-2.5">
              {pressures.map(({ icon: I, label }) => (
                <li key={label} className="flex flex-col items-start gap-2 rounded-2xl bg-white/10 px-4 py-3.5">
                  <I className="size-5 shrink-0 text-brand" />
                  <span className="text-[15px] font-semibold leading-snug">{label}</span>
                </li>
              ))}
            </ul>
            <ul className="mt-8 space-y-4">
              {pains.map((p) => (
                <li key={p.title} className="flex items-start gap-4 text-lg font-semibold leading-snug">
                  <span className="mt-2.5 size-2 shrink-0 rounded-full bg-brand" />
                  {p.title}
                </li>
              ))}
            </ul>
            <p className="mt-8 rounded-2xl bg-white px-6 py-5 text-lg font-semibold leading-snug text-navy">
              {t.question[0]}
              {t.question[1]}
            </p>
          </div>
        </div>
      ) : (
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="max-w-3xl">
            <p className="t-eyebrow text-brand">{t.eyebrow}</p>
            <h2 className="t-h2 mt-4 text-navy">{title}</h2>
          </div>
          <ul className="mt-10 flex flex-wrap gap-2.5">
            {pressures.map(({ icon: I, label }) => (
              <li key={label} className="flex items-center gap-2.5 whitespace-nowrap rounded-full bg-white py-2.5 pl-3.5 pr-5 text-navy">
                <I className="size-5 shrink-0 text-brand" />
                <span className="text-[15px] font-semibold">{label}</span>
              </li>
            ))}
          </ul>
          <ul className="mt-14 grid gap-10 md:grid-cols-3">
            {pains.map((p, i) => {
              const I = painIcons[i];
              return (
                <li key={p.title}>
                  <I className="size-10 text-navy" />
                  <p className="t-h3 mt-5 text-navy">{p.title}</p>
                </li>
              );
            })}
          </ul>
          <p className="t-h3 mt-16 max-w-3xl text-ink">
            {t.question[0]}
            <span className="u-accent">{t.question[1]}</span>
          </p>
        </div>
      )}
    </section>
  );
}
