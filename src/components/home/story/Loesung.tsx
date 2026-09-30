import type { ReactNode } from "react";
import { bausteine, company, type Baustein } from "@/lib/content";
import { BausteinDetails } from "../BausteinDetails";
import { IconCheck, IconLearning, IconStructure, IconTarget } from "../Icons";
import { InfoModal } from "../InfoModal";
import { ModelSketch } from "../ModelSketch";

// Lösung – drei Varianten, in allen stehen die zwei Bausteine im Mittelpunkt:
// "cards"    große Farbkarten, alles sofort sichtbar (V2)
// "equation" Struktur + Kompetenz = Unternehmenserfolg als große Gleichung (V3)
// "hover"    Modell-Karte + interaktive Karten, die schon im Ruhezustand die Inhalte zeigen (V4)
type Variant = "cards" | "equation" | "hover";

const iconFor = (b: Baustein) => (b.key === "hrbp" ? IconStructure : IconLearning);

function ModelButton({ light = false, label = "Das MSP-Modell ansehen" }: { light?: boolean; label?: string }) {
  return (
    <InfoModal
      wide
      label={label}
      title="Das MSP-Modell"
      buttonClassName={`inline-flex rounded-full px-6 py-3 text-[15px] font-semibold transition ${
        light ? "bg-white text-navy hover:bg-paper" : "bg-paper text-navy hover:bg-[#e9eff2]"
      }`}
    >
      <ModelSketch className="w-full" />
      <p className="t-body mt-6 text-muted">
        Am Anfang steht Ihre Ausgangslage: Was wollen Sie erreichen, wo liegt der größte Hebel? Daraus ergibt sich, ob
        wir an der Struktur ansetzen (HR Business Partner), an der Kompetenz (Lernwelt) oder an beidem – mit einem Ziel:
        Entwicklung, die im Unternehmen spür- und messbar wird.
      </p>
    </InfoModal>
  );
}

function DetailsButton({ b, className }: { b: Baustein; className: string }) {
  return (
    <InfoModal label="Details ansehen" title={b.name} buttonClassName={className}>
      <BausteinDetails baustein={b} />
    </InfoModal>
  );
}

function Head({ centered = false, children }: { centered?: boolean; children?: ReactNode }) {
  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "flex flex-wrap items-end justify-between gap-8"}>
      <div className={centered ? "" : "max-w-3xl"}>
        <p className="t-eyebrow text-brand">Unsere Lösung</p>
        <h2 className="t-h2 mt-4 text-navy">{company.slogan}</h2>
        <p className="t-lead mt-6 text-muted">Zwei Bausteine – einzeln buchbar, stark in Kombination.</p>
      </div>
      {children && <div className={centered ? "mt-8" : ""}>{children}</div>}
    </div>
  );
}

export function Loesung({ variant = "cards" }: { variant?: Variant }) {
  return (
    <section id="bausteine" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {variant === "cards" && <CardsVariant />}
        {variant === "equation" && <EquationVariant />}
        {variant === "hover" && <HoverVariant />}
      </div>
    </section>
  );
}

/* ---------- V2: große Farbkarten ---------- */
function CardsVariant() {
  return (
    <>
      <Head centered>
        <ModelButton />
      </Head>
      <div className="mt-16 grid gap-6 md:grid-cols-2">
        {bausteine.map((b, i) => {
          const hrbp = b.key === "hrbp";
          const I = iconFor(b);
          return (
            <article
              key={b.key}
              className={`flex flex-col rounded-[32px] p-8 text-white shadow-[0_30px_70px_rgba(24,42,54,0.18)] sm:p-12 ${hrbp ? "bg-navy" : "bg-brand"}`}
            >
              <div className="flex items-center justify-between">
                <I className="size-12" />
                <span className="rounded-full bg-white/15 px-4 py-1.5 text-[15px] font-semibold">Baustein {i + 1}</span>
              </div>
              <h3 className="mt-10 text-[2.5rem] font-semibold leading-tight tracking-tight">{b.name}</h3>
              <p className="mt-3 text-xl font-light text-white/90">{b.slogan}</p>
              <ul className="mt-10 space-y-3.5">
                {b.focus.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-lg font-light">
                    <IconCheck className="size-5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-12">
                <DetailsButton
                  b={b}
                  className={`rounded-full bg-white px-6 py-3 text-[15px] font-semibold transition hover:bg-paper ${hrbp ? "text-navy" : "text-brand-dark"}`}
                />
              </div>
            </article>
          );
        })}
      </div>
    </>
  );
}

/* ---------- V3: Gleichung ----------
   Ausrichtung per Subgrid: Icon, Headline, Subheadline, grauer Bereich, Bullets und Link
   stehen in beiden Baustein-Karten exakt auf gleicher Höhe; die Farbköpfe sind gleich hoch. */
function EquationVariant() {
  return (
    <>
      <Head>
        <ModelButton />
      </Head>
      <div className="mt-16 grid gap-4 lg:grid-cols-[1fr_auto_1fr_auto_0.7fr] lg:grid-rows-[auto_auto_auto_1fr] lg:gap-x-4 lg:gap-y-0">
        {bausteine.map((b, i) => {
          const hrbp = b.key === "hrbp";
          const I = iconFor(b);
          return (
            <FragmentWithOperator key={b.key} operator={i === 0 ? "+" : "="}>
              <article className="flex flex-col overflow-hidden rounded-[28px] bg-paper lg:row-span-4 lg:grid lg:grid-rows-subgrid">
                <div className={`text-white lg:row-span-3 lg:grid lg:grid-rows-subgrid ${hrbp ? "bg-navy" : "bg-brand"}`}>
                  <div className="px-8 pt-8">
                    <I className="size-10" />
                  </div>
                  <h3 className="px-8 pt-6 text-[2rem] font-semibold leading-tight tracking-tight">{b.name}</h3>
                  <p className="px-8 pb-8 pt-1 text-lg font-light text-white/90">{b.claim}</p>
                </div>
                <div className="flex flex-1 flex-col p-8">
                  <ul className="space-y-3">
                    {b.focus.map((f) => (
                      <li key={f} className="flex items-center gap-3 text-[17px] font-light text-ink">
                        <IconCheck className={`size-5 shrink-0 ${hrbp ? "text-navy" : "text-brand"}`} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-8">
                    <DetailsButton b={b} className="font-semibold text-navy underline-offset-4 hover:underline" />
                  </div>
                </div>
              </article>
            </FragmentWithOperator>
          );
        })}
        <div className="flex flex-col justify-center rounded-[28px] bg-deep p-8 text-white lg:row-span-4">
          <IconTarget className="size-10 text-brand" />
          <p className="mt-6 text-[1.75rem] font-semibold leading-tight">Unternehmens&shy;erfolg</p>
          <p className="mt-2 text-lg font-light text-white/80">spür- und messbar</p>
        </div>
      </div>
    </>
  );
}

function FragmentWithOperator({ children, operator }: { children: ReactNode; operator: string }) {
  return (
    <>
      {children}
      <span
        aria-hidden="true"
        className="mx-auto flex size-14 items-center justify-center self-center rounded-full bg-white text-3xl font-light text-navy shadow-[0_10px_30px_rgba(24,42,54,0.12)] lg:row-span-4"
      >
        {operator}
      </span>
    </>
  );
}

/* ---------- V4: Modell-Karte + interaktive Karten ---------- */
function HoverVariant() {
  return (
    <>
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div>
          <p className="t-eyebrow text-brand">Unsere Lösung</p>
          <h2 className="t-h2 mt-4 text-navy">{company.slogan}</h2>
          <p className="t-lead mt-6 text-muted">Zwei Bausteine – einzeln buchbar, stark in Kombination.</p>
        </div>
        <div className="overflow-hidden rounded-[28px] bg-deep shadow-[0_30px_70px_rgba(24,42,54,0.28)]">
          <div className="p-6 sm:p-8">
            <ModelSketch dark className="w-full" />
          </div>
          <div className="flex flex-wrap items-center justify-between gap-4 bg-white/5 px-6 py-5 sm:px-8">
            <p className="text-[17px] font-semibold text-white">Das MSP-Modell</p>
            <ModelButton light label="Ansehen" />
          </div>
        </div>
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-2">
        {bausteine.map((b, i) => {
          const hrbp = b.key === "hrbp";
          const I = iconFor(b);
          const bg = hrbp ? "bg-navy" : "bg-brand";
          return (
            <article
              key={b.key}
              tabIndex={0}
              className="group relative flex flex-col overflow-hidden rounded-[28px] bg-paper outline-none focus-visible:ring-2 focus-visible:ring-brand md:min-h-[480px]"
            >
              {/* Ruhezustand: bereits alle Kerninhalte sichtbar */}
              <div className="flex flex-1 flex-col p-8 sm:p-10">
                <div className="flex items-center justify-between">
                  <I className={`size-11 ${hrbp ? "text-navy" : "text-brand"}`} />
                  <span className={`rounded-full px-4 py-1.5 text-[15px] font-semibold text-white ${bg}`}>Baustein {i + 1}</span>
                </div>
                <h3 className="mt-8 text-[2.25rem] font-semibold leading-tight tracking-tight text-navy">{b.name}</h3>
                <p className="t-lead mt-2 text-ink">{b.slogan}</p>
                <ul className="mt-8 space-y-3">
                  {b.focus.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-[17px] font-light text-ink">
                      <IconCheck className={`size-5 shrink-0 ${hrbp ? "text-navy" : "text-brand"}`} />
                      {f}
                    </li>
                  ))}
                </ul>
                <p className="mt-auto hidden items-center gap-2 pt-8 text-[15px] font-semibold text-navy md:flex">
                  <span className={`flex size-7 items-center justify-center rounded-full text-white ${bg}`}>+</span>
                  Handlungsfelder anzeigen
                </p>
              </div>

              {/* Hover-Ebene (Desktop) / feste Ebene (mobil): Handlungsfelder */}
              <div
                className={`${bg} p-8 text-white transition-transform duration-500 ease-out sm:p-10 md:absolute md:inset-0 md:flex md:translate-y-full md:flex-col md:group-hover:translate-y-0 md:group-focus-within:translate-y-0`}
              >
                <p className="hidden text-[15px] font-semibold text-white/75 md:block">{b.name} · Handlungsfelder</p>
                <ul className="space-y-4 md:mt-6">
                  {b.details.map((d) => (
                    <li key={d.title} className="flex items-center gap-4 text-xl font-semibold">
                      <span className="size-2 shrink-0 rounded-full bg-white" />
                      {d.title}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 md:mt-auto">
                  <DetailsButton
                    b={b}
                    className={`rounded-full bg-white px-6 py-3 text-[15px] font-semibold transition hover:bg-paper ${hrbp ? "text-navy" : "text-brand-dark"}`}
                  />
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </>
  );
}
