import type { ReactNode } from "react";
import { bausteine, company } from "@/lib/content";
import { BausteinDetails } from "../BausteinDetails";
import { IconCheck, IconLearning, IconStructure, IconTarget } from "../Icons";
import { InfoModal } from "../InfoModal";
import { SectionHead } from "./SectionHead";

// Lösung: zwei Bausteine als gleich aufgebaute Karten + Komposition „Struktur + Kompetenz = Unternehmenserfolg“.
export function Loesung({ centered = false }: { centered?: boolean }) {
  return (
    <section id="bausteine" className="bg-paper py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHead
          centered={centered}
          eyebrow="Unsere Lösung"
          title={company.slogan}
          lead="Zwei Bausteine, zwei Perspektiven, ein Ziel: Ihr Unternehmenserfolg."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {bausteine.map((b) => {
            const hrbp = b.key === "hrbp";
            const I = hrbp ? IconStructure : IconLearning;
            return (
              <article key={b.key} className="flex flex-col rounded-[28px] bg-white p-8 sm:p-12">
                <span className={`flex size-14 items-center justify-center rounded-2xl text-white ${hrbp ? "bg-navy" : "bg-brand"}`}>
                  <I className="size-7" />
                </span>
                <h3 className="mt-8 text-[2rem] font-semibold leading-tight tracking-tight text-navy">{b.name}</h3>
                <p className="t-lead mt-2 text-muted">{b.slogan}</p>
                <p className="t-body mt-8 text-ink">{b.question}</p>
                <ul className="mt-5 space-y-3">
                  {b.focus.map((f) => (
                    <li key={f} className="t-body flex items-center gap-3 text-ink">
                      <IconCheck className={`size-5 shrink-0 ${hrbp ? "text-navy" : "text-brand"}`} />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-10">
                  <InfoModal
                    label="Details ansehen →"
                    title={b.name}
                    buttonClassName="font-semibold text-brand underline-offset-4 hover:underline"
                  >
                    <BausteinDetails baustein={b} />
                  </InfoModal>
                </div>
              </article>
            );
          })}
        </div>

        {/* Komposition: einzeln buchbar, kombiniert am wirkungsvollsten */}
        <div className="mt-6 rounded-[28px] bg-white p-8 sm:p-12">
          <div className="grid items-center gap-4 md:grid-cols-[1fr_auto_1fr_auto_1fr]">
            <Tile tone="navy" icon={<IconStructure className="size-6" />} title="Struktur" text="HR Business Partner" />
            <Operator>+</Operator>
            <Tile tone="brand" icon={<IconLearning className="size-6" />} title="Kompetenz" text="Lernwelt" />
            <Operator>=</Operator>
            <Tile tone="soft" icon={<IconTarget className="size-6" />} title="Unternehmenserfolg" text="spür- und messbar" />
          </div>
          <p className="t-body mt-8 text-center text-muted">
            Jeder Baustein ist einzeln buchbar. In Kombination greifen neue Strukturen und neue Kompetenzen ineinander – dort wirken sie am stärksten.
          </p>
        </div>
      </div>
    </section>
  );
}

function Tile({ tone, icon, title, text }: { tone: "navy" | "brand" | "soft"; icon: ReactNode; title: string; text: string }) {
  const styles = {
    navy: "bg-navy text-white",
    brand: "bg-brand text-white",
    soft: "bg-paper text-navy",
  }[tone];
  return (
    <div className={`flex items-center gap-4 rounded-2xl px-6 py-5 ${styles}`}>
      {icon}
      <div>
        <p className="text-lg font-semibold leading-tight">{title}</p>
        <p className={`text-[15px] font-light ${tone === "soft" ? "text-muted" : "text-white/80"}`}>{text}</p>
      </div>
    </div>
  );
}

function Operator({ children }: { children: string }) {
  return (
    <span aria-hidden="true" className="text-center text-3xl font-light text-muted">
      {children}
    </span>
  );
}
