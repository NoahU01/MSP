import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ContactPeople } from "@/components/ContactPeople";
import { BausteinDetails } from "@/components/home/BausteinDetails";
import { DownloadSection } from "@/components/home/DownloadSection";
import { HeroPeople, type HeroPeopleVariant } from "@/components/home/HeroPeople";
import { IconCheck, IconLearning, IconStructure } from "@/components/home/Icons";
import { InfoModal } from "@/components/home/InfoModal";
import { PraxisAccordion } from "@/components/home/PraxisAccordion";
import { Ausgangslage } from "@/components/home/story/Ausgangslage";
import { Einstieg } from "@/components/home/story/Einstieg";
import { SectionHead } from "@/components/home/story/SectionHead";
import { bausteine, company, team } from "@/lib/content";

export const metadata: Metadata = { title: "Startseite – Version 5" };

// Version 5 „Menschen & Bausteine“: Personen schon im Hero (drei Header-Varianten zum Vergleich, ?header=a|b|c),
// Bausteine mit Gesicht (Mark = HR Business Partner, Kathrin = Lernwelt).
const variants: { key: HeroPeopleVariant; label: string }[] = [
  { key: "a", label: "A · Duo" },
  { key: "b", label: "B · Zentriert" },
  { key: "c", label: "C · Personen = Bausteine" },
];

export default async function StartseiteVersion5(props: PageProps<"/startseite/version-5">) {
  const { header } = await props.searchParams;
  const variant: HeroPeopleVariant = header === "b" || header === "c" ? header : "a";
  const [mark, kathrin] = team;
  const personFor = { hrbp: mark, lernwelt: kathrin } as const;

  return (
    <>
      {/* Nur Entwicklung: Umschalter für die Header-Varianten */}
      <div className="bg-white pt-6">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-3 px-4 sm:px-6">
          <span className="text-[15px] font-light text-muted">Header-Variante:</span>
          {variants.map((v) => (
            <Link
              key={v.key}
              href={`?header=${v.key}`}
              scroll={false}
              className={`rounded-full px-4 py-1.5 text-sm font-semibold transition ${
                v.key === variant ? "bg-deep text-white" : "bg-paper text-navy hover:bg-[#edf2f4]"
              }`}
            >
              {v.label}
            </Link>
          ))}
        </div>
      </div>

      <HeroPeople variant={variant} />
      <Ausgangslage />

      {/* Lösung – Sticky-Kopf links, Bausteine mit Gesicht rechts */}
      <section id="bausteine" className="bg-paper py-24 sm:py-32">
        <div className="mx-auto grid max-w-6xl gap-14 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <SectionHead
              eyebrow="Unsere Lösung"
              title={company.slogan}
              lead="Zwei Bausteine, zwei Perspektiven, zwei Menschen, die dafür stehen. Einzeln buchbar – stark in Kombination."
            />
          </div>
          <div className="space-y-6">
            {bausteine.map((b) => {
              const person = personFor[b.key];
              const hrbp = b.key === "hrbp";
              const I = hrbp ? IconStructure : IconLearning;
              return (
                <article key={b.key} className="overflow-hidden rounded-[28px] bg-white">
                  <div className="p-8 sm:p-10">
                    <span className={`flex size-14 items-center justify-center rounded-2xl text-white ${hrbp ? "bg-navy" : "bg-brand"}`}>
                      <I className="size-7" />
                    </span>
                    <h3 className="mt-8 text-[2rem] font-semibold leading-tight tracking-tight text-navy">{b.name}</h3>
                    <p className="t-lead mt-2 text-muted">{b.slogan}</p>
                    <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                      {b.focus.map((f) => (
                        <li key={f} className="t-body flex items-center gap-3 text-ink">
                          <IconCheck className={`size-5 shrink-0 ${hrbp ? "text-navy" : "text-brand"}`} />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={`flex flex-wrap items-center justify-between gap-4 px-8 py-5 text-white sm:px-10 ${hrbp ? "bg-navy" : "bg-brand"}`}>
                    <div className="flex items-center gap-4">
                      <div className="size-12 overflow-hidden rounded-full bg-white/20">
                        <Image src={person.image} alt={person.name} width={96} height={96} className="size-full object-cover" />
                      </div>
                      <div>
                        <p className="text-[17px] font-semibold leading-tight">{person.name}</p>
                        <p className="text-[15px] font-light text-white/80">{person.role}</p>
                      </div>
                    </div>
                    <InfoModal
                      label="Details ansehen →"
                      title={b.name}
                      buttonClassName="font-semibold text-white underline-offset-4 hover:underline"
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

      <Einstieg />
      <PraxisAccordion tone="paper" />
      <DownloadSection />
      <ContactPeople />
    </>
  );
}
