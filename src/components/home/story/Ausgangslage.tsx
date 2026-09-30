import Image from "next/image";
import { pains } from "@/lib/content";
import { IconCost, IconMarket, IconPeople } from "../Icons";

const pressures = [
  { icon: IconMarket, label: "Märkte werden enger" },
  { icon: IconCost, label: "Kosten steigen" },
  { icon: IconPeople, label: "Fachkräfte fehlen" },
];

// Ausgangslage nach empiria-Muster: graue Fläche mit Fingerabdruck als Wasserzeichen,
// Kernaussage links, dunkle Box rechts (Druck von außen → Folgen im Unternehmen → Kernfrage).
// compact: Folgen ohne Erläuterung (z. B. Version 4).
export function Ausgangslage({ compact = false }: { compact?: boolean }) {
  return (
    <section id="ausgangslage" className="relative overflow-hidden bg-paper py-24 sm:py-32">
      <Image
        src="/images/fingerprint.jpg"
        alt=""
        width={1280}
        height={818}
        className="pointer-events-none absolute -bottom-24 -left-40 w-[760px] max-w-none opacity-70 mix-blend-multiply"
      />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
        <div>
          <p className="t-eyebrow text-brand">Die Ausgangslage</p>
          <h2 className="t-h2 mt-4 text-navy">
            Mehr erreichen – <span className="u-accent">mit den Menschen, die Sie haben.</span>
          </h2>
          <p className="t-lead mt-8 text-muted">
            Wirtschaftlicher Erfolg wird härter erarbeitet. Die wichtigste Ressource dafür sitzt bereits in Ihrem
            Unternehmen: Ihre Mitarbeitenden.
          </p>
        </div>

        <div className="rounded-[28px] bg-navy p-8 text-white shadow-[0_30px_70px_rgba(0,84,130,0.25)] sm:p-10">
          <p className="text-[15px] font-semibold text-white/70">Der Druck von außen</p>
          <ul className="mt-4 flex flex-wrap gap-2.5">
            {pressures.map(({ icon: I, label }) => (
              <li key={label} className="flex items-center gap-2.5 whitespace-nowrap rounded-full bg-white/10 py-2.5 pl-3.5 pr-5">
                <I className="size-5 shrink-0 text-brand" />
                <span className="text-[15px] font-semibold leading-snug">{label}</span>
              </li>
            ))}
          </ul>

          <p className="mt-9 text-[15px] font-semibold text-white/70">Die Folgen im Unternehmen</p>
          <ul className="mt-4 space-y-4">
            {pains.map((p) => (
              <li key={p.title} className="flex gap-4">
                <span className="mt-2.5 size-2 shrink-0 rounded-full bg-brand" />
                <div>
                  <p className="text-lg font-semibold leading-snug">{p.title}</p>
                  {!compact && <p className="mt-1 text-[15px] font-light leading-relaxed text-white/75">{p.text}</p>}
                </div>
              </li>
            ))}
          </ul>

          <p className="mt-9 rounded-2xl bg-white px-6 py-5 text-lg font-semibold leading-snug text-navy">
            Die Frage ist nicht, ob Sie in Ihre Menschen investieren – sondern wo es am meisten bewirkt.
          </p>
        </div>
      </div>
    </section>
  );
}
