import Image from "next/image";
import { company, team } from "@/lib/content";
import { IconArrowDown } from "./Icons";

// Hero mit den beiden Ansprechpartnern (Version 5, Variante „Duo“).
// Texte unverändert aus Version 1.0; Headline bewusst kleiner, damit Text und Personen im Gleichgewicht sind.

const h1 = "text-[2.125rem] font-semibold leading-[1.12] tracking-tight text-balance text-navy sm:text-5xl";
const lead = "Wir begleiten Unternehmen individuell, ganzheitlich und nachhaltig – als Berater, Trainer und Moderatoren für KMU und Großunternehmen in ganz Deutschland.";

function Cta() {
  return (
    <a
      href="#ausgangslage"
      className="group inline-flex items-center gap-3 rounded-full bg-brand py-3.5 pl-7 pr-3.5 font-semibold text-white transition hover:bg-brand-dark"
    >
      Was Sie davon haben
      <span className="flex size-8 items-center justify-center rounded-full bg-white/20 transition group-hover:translate-y-0.5">
        <IconArrowDown className="size-4" />
      </span>
    </a>
  );
}

function Portrait({ src, alt, size }: { src: string; alt: string; size: string }) {
  return (
    <div className={`${size} shrink-0 overflow-hidden rounded-full bg-paper shadow-[0_16px_40px_rgba(24,42,54,0.16)]`}>
      <Image src={src} alt={alt} width={400} height={400} priority className="size-full object-cover" />
    </div>
  );
}

export function HeroPeople() {
  const [mark, kathrin] = team;

  // Variante A: Duo rechts
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-4 pb-16 pt-20 sm:px-6 sm:pb-20 sm:pt-28 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
        <div>
          <p className="t-eyebrow text-brand">Zukunftsfaktor Mensch · seit {company.since}</p>
          <h1 className={`${h1} mt-6`}>Ihr HR Businesspartner für Führungs-, Entwicklungs- und Veränderungsprozesse</h1>
          <p className="t-lead mt-8 max-w-xl text-muted">{lead}</p>
          <div className="mt-12">
            <Cta />
          </div>
        </div>
        <div className="grid min-w-0 grid-cols-2 gap-4 rounded-[32px] bg-paper px-5 py-10 sm:gap-6 sm:px-10">
          {[mark, kathrin].map((p) => (
            <div key={p.name} className="flex flex-col items-center text-center">
              <Portrait src={p.image} alt={p.name} size="size-28 sm:size-40" />
              {/* Vor- und Nachname bewusst zweizeilig, damit nichts am Bindestrich umbricht */}
              <p className="mt-5 text-base font-semibold leading-tight text-navy sm:text-[17px]">
                <span className="block">{p.name.split(" ")[0]}</span>
                <span className="block">{p.name.split(" ").slice(1).join(" ").replace("-", "\u2011")}</span>
              </p>
              <p className="mt-1 text-[15px] font-light text-muted">{p.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
