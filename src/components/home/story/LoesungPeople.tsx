import Image from "next/image";
import { bausteine, company, team } from "@/lib/content";
import { BausteinDetails } from "../BausteinDetails";
import { IconCheck, IconLearning, IconStructure } from "../Icons";
import { InfoModal } from "../InfoModal";

// Lösung „Menschen & Bausteine“ (Version 5): zentrierter Kopf, zwei Baustein-Karten nebeneinander,
// jede mit ihrer Ansprechperson (Mark = HR Business Partner, Kathrin = Lernwelt).
export function LoesungPeople() {
  const [mark, kathrin] = team;
  const personFor = { hrbp: mark, lernwelt: kathrin } as const;

  return (
  <section id="bausteine" className="bg-white py-24 sm:py-32">
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <div className="mx-auto max-w-3xl text-center">
        <p className="t-eyebrow text-brand">Unsere Lösung</p>
        <h2 className="t-h2 mt-4 text-navy">{company.slogan}</h2>
        <p className="t-lead mt-8 text-muted">
          Zwei Bausteine, zwei Perspektiven, zwei Menschen, die dafür stehen. Einzeln buchbar – stark in Kombination.
        </p>
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-2">
        {bausteine.map((b) => {
          const person = personFor[b.key];
          const hrbp = b.key === "hrbp";
          const I = hrbp ? IconStructure : IconLearning;
          return (
            <article key={b.key} className="flex flex-col overflow-hidden rounded-[28px] bg-paper">
              <div className="flex flex-1 flex-col p-8 sm:p-10">
                <I className={`size-10 ${hrbp ? "text-navy" : "text-brand"}`} />
                <h3 className="mt-8 text-[2rem] font-semibold leading-tight tracking-tight text-navy">{b.name}</h3>
                <p className="t-lead mt-3 text-ink">{b.slogan}</p>
                <ul className="mt-8 space-y-3">
                  {b.focus.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-[17px] font-light text-ink">
                      <IconCheck className={`size-5 shrink-0 ${hrbp ? "text-navy" : "text-brand"}`} />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={`flex flex-wrap items-center justify-between gap-4 px-8 py-6 text-white sm:px-10 ${hrbp ? "bg-navy" : "bg-brand"}`}>
                <div className="flex items-center gap-4">
                  <div className="size-14 overflow-hidden rounded-full bg-white/20 ring-2 ring-white/70">
                    <Image src={person.image} alt={person.name} width={112} height={112} className="size-full object-cover" />
                  </div>
                  <div>
                    <p className="text-[17px] font-semibold leading-tight">{person.name}</p>
                    <p className="text-[15px] font-light text-white/80">{person.role}</p>
                  </div>
                </div>
                <InfoModal
                  label="Details ansehen"
                  title={b.name}
                  buttonClassName={`rounded-full bg-white px-5 py-2.5 text-[15px] font-semibold transition hover:bg-paper ${hrbp ? "text-navy" : "text-brand-dark"}`}
                >
                  <BausteinDetails baustein={b} />
                </InfoModal>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  </section>
  );
}
