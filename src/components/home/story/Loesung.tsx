import { bausteine, company, type Baustein } from "@/lib/content";
import { BausteinDetails } from "../BausteinDetails";
import { IconCheck, IconLearning, IconStructure } from "../Icons";
import { InfoModal } from "../InfoModal";
import { ModelSketch } from "../ModelSketch";

// Lösung: Text + Modell-Karte (Skizze als Pop-up), darunter zwei Baustein-Karten mit Hover-Ebene.
export function Loesung() {
  return (
    <section id="bausteine" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-16">
          <div>
            <p className="t-eyebrow text-brand">Unsere Lösung</p>
            <h2 className="t-h2 mt-4 text-navy">{company.slogan}</h2>
            <p className="t-lead mt-8 text-muted">
              Zwei Bausteine, zwei Perspektiven, ein Ziel: Ihr Unternehmenserfolg. Geht es um Struktur, Prozesse
              und Rollen – oder um Weiterentwicklung, Training und Coaching? Jeder Baustein ist einzeln buchbar,
              in Kombination wirken sie am stärksten.
            </p>
          </div>

          {/* Modell-Karte */}
          <div className="overflow-hidden rounded-[28px] bg-deep shadow-[0_30px_70px_rgba(24,42,54,0.28)]">
            <div className="p-6 sm:p-8">
              <ModelSketch dark className="w-full" />
            </div>
            <div className="flex flex-wrap items-center justify-between gap-4 bg-white/5 px-6 py-5 sm:px-8">
              <p className="text-[17px] font-semibold text-white">Das MSP-Modell</p>
              <InfoModal
                wide
                label="Modell ansehen"
                title="Das MSP-Modell"
                buttonClassName="rounded-full bg-white px-6 py-2.5 text-[15px] font-semibold text-navy transition hover:bg-paper"
              >
                <ModelSketch className="w-full" />
                <p className="t-body mt-6 text-muted">
                  Am Anfang steht Ihre Ausgangslage: Was wollen Sie erreichen, wo liegt der größte Hebel? Daraus
                  ergibt sich, ob wir an der Struktur ansetzen (HR Business Partner), an der Kompetenz (Lernwelt)
                  oder an beidem. Das Ziel ist immer dasselbe: Entwicklung, die im Unternehmen spür- und messbar wird.
                </p>
              </InfoModal>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {bausteine.map((b, i) => (
            <BausteinCard key={b.key} baustein={b} index={i + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function BausteinCard({ baustein: b, index }: { baustein: Baustein; index: number }) {
  const hrbp = b.key === "hrbp";
  const I = hrbp ? IconStructure : IconLearning;
  const bg = hrbp ? "bg-navy" : "bg-brand";

  return (
    <article
      tabIndex={0}
      className="group relative flex flex-col overflow-hidden rounded-[28px] bg-paper outline-none focus-visible:ring-2 focus-visible:ring-brand md:min-h-[440px]"
    >
      {/* Grundebene */}
      <div className="flex flex-1 flex-col p-8 sm:p-10">
        <I className={`size-10 ${hrbp ? "text-navy" : "text-brand"}`} />
        <p className="mt-8 text-[15px] font-semibold text-muted">Baustein {index}</p>
        <h3 className="mt-1 text-[2rem] font-semibold leading-tight tracking-tight text-navy">{b.name}</h3>
        <p className="t-lead mt-3 text-ink">{b.slogan}</p>
        <p className="t-body mt-6 text-muted">{b.question}</p>
        <p className="mt-auto hidden items-center gap-2 pt-8 text-[15px] font-semibold text-navy md:flex">
          <span className={`flex size-7 items-center justify-center rounded-full text-white ${bg}`}>+</span>
          Was dazu gehört
        </p>
      </div>

      {/* Hover-Ebene (Desktop) / feste Ebene (mobil) */}
      <div
        className={`${bg} p-8 text-white transition-transform duration-500 ease-out sm:p-10 md:absolute md:inset-0 md:flex md:translate-y-full md:flex-col md:group-hover:translate-y-0 md:group-focus-within:translate-y-0`}
      >
        <I className="hidden size-10 text-white md:block" />
        <h3 className="hidden text-[2rem] font-semibold leading-tight tracking-tight md:mt-8 md:block">{b.name}</h3>
        <ul className="space-y-3 md:mt-6">
          {b.focus.map((f) => (
            <li key={f} className="flex items-center gap-3 text-lg font-light">
              <IconCheck className="size-5 shrink-0 text-white" />
              {f}
            </li>
          ))}
        </ul>
        <div className="mt-8 md:mt-auto">
          <InfoModal
            label="Details ansehen"
            title={b.name}
            buttonClassName={`rounded-full bg-white px-6 py-3 text-[15px] font-semibold transition hover:bg-paper ${hrbp ? "text-navy" : "text-brand-dark"}`}
          >
            <BausteinDetails baustein={b} />
          </InfoModal>
        </div>
      </div>
    </article>
  );
}
