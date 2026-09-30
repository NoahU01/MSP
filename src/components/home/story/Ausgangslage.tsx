import { pains } from "@/lib/content";
import { IconArrowDown, IconCost, IconLeadership, IconLearning, IconMarket, IconPeople, IconStructure } from "../Icons";
import { SectionHead } from "./SectionHead";

const pressures = [
  { icon: IconMarket, label: "Märkte werden enger" },
  { icon: IconCost, label: "Kosten steigen" },
  { icon: IconPeople, label: "Fachkräfte fehlen" },
];
const painIcons = [IconStructure, IconLeadership, IconLearning];

// Grundproblem: Druck von außen → Folgen im Unternehmen → Kernfrage als Überleitung zur Lösung.
// compact: nur Kernaussagen mit Icons, ohne Fließtext (z. B. Version 4)
export function Ausgangslage({ centered = false, compact = false }: { centered?: boolean; compact?: boolean }) {
  return (
    <section id="ausgangslage" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHead
          centered={centered}
          eyebrow="Die Ausgangslage"
          title="Mehr erreichen – mit den Menschen, die Sie haben."
          lead={
            compact
              ? "Die wichtigste Ressource sitzt bereits in Ihrem Unternehmen: Ihre Mitarbeitenden."
              : "Wirtschaftlicher Erfolg wird härter erarbeitet. Die wichtigste Ressource dafür sitzt bereits in Ihrem Unternehmen: Ihre Mitarbeitenden. Entscheidend ist, sie optimal einzusetzen – in der Struktur ebenso wie in der Kompetenz."
          }
        />

        {/* Druck von außen */}
        <ul className="mt-14 grid gap-4 sm:grid-cols-3">
          {pressures.map(({ icon: I, label }) => (
            <li key={label} className={`flex items-center gap-4 rounded-2xl bg-paper px-6 py-5 ${centered ? "justify-center" : ""}`}>
              <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-white text-brand">
                <I className="size-5" />
              </span>
              <span className="text-lg font-semibold text-navy">{label}</span>
            </li>
          ))}
        </ul>

        {/* Folgen im Unternehmen */}
        <div className="mt-20 grid gap-12 md:grid-cols-3 md:gap-10">
          {pains.map((p, i) => {
            const I = painIcons[i];
            return (
              <div key={p.title} className={centered ? "text-center" : ""}>
                <span className={`flex size-14 items-center justify-center rounded-2xl bg-paper text-navy ${centered ? "mx-auto" : ""}`}>
                  <I className="size-7" />
                </span>
                <h3 className="t-h3 mt-6 text-navy">{p.title}</h3>
                {!compact && <p className="t-body mt-3 text-muted">{p.text}</p>}
              </div>
            );
          })}
        </div>

        {/* Kernfrage als Überleitung */}
        <a
          href={compact ? "#hebel" : "#bausteine"}
          className={`group mt-20 flex flex-col gap-6 rounded-[28px] bg-paper p-8 transition hover:bg-[#edf2f4] sm:p-12 ${centered ? "items-center text-center" : "sm:flex-row sm:items-center sm:justify-between"}`}
        >
          <p className="t-h2 max-w-3xl !text-[clamp(1.5rem,1.2rem+1vw,2.25rem)] text-navy">
            Die Frage ist nicht, ob Sie in Ihre Menschen investieren – <span className="u-accent">sondern wo es am meisten bewirkt.</span>
          </p>
          <span className="flex size-14 shrink-0 items-center justify-center rounded-full bg-navy text-white transition group-hover:translate-y-1">
            <IconArrowDown className="size-6" />
          </span>
        </a>
      </div>
    </section>
  );
}
