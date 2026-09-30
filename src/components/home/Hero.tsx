import Image from "next/image";
import { company } from "@/lib/content";
import { IconArrowDown } from "./Icons";

// Hero der Startseite – Subheadline, Headline und Text unverändert aus Version 1.0.
// layout: "left" (Standard), "split" (Headline links, Text rechts – Muster empiria), "centered" (nur der Hero zentriert).
// Der Button führt in die nächste Sektion (Nutzen zuerst), nicht direkt zum Klärungsgespräch.
type Layout = "left" | "split" | "centered";

const lead =
  "Wir begleiten Unternehmen individuell, ganzheitlich und nachhaltig – als Berater, Trainer und Moderatoren für KMU und Großunternehmen in ganz Deutschland.";

export function Hero({
  next = { href: "#ausgangslage", label: "Was Sie davon haben" },
  layout = "left",
  overlap = false,
}: {
  next?: { href: string; label: string };
  layout?: Layout;
  /** Fingerabdruck 25 % kleiner, liegt über den Hintergründen und ragt in die nächste Sektion (Version 4/6) */
  overlap?: boolean;
}) {
  const centered = layout === "centered";
  const eyebrow = <p className="t-eyebrow text-brand">Zukunftsfaktor Mensch · seit {company.since}</p>;
  const h1 = (
    <h1 className="mt-5 text-[2.125rem] font-semibold leading-[1.1] tracking-tight text-balance text-navy sm:text-[3.5rem]">
      Ihr HR Businesspartner für Führungs-, Entwicklungs- und Veränderungsprozesse
    </h1>
  );
  const cta = (
    <a
      href={next.href}
      className="group inline-flex items-center gap-3 rounded-full bg-brand py-3.5 pl-7 pr-3.5 font-semibold text-white transition hover:bg-brand-dark"
    >
      {next.label}
      <span className="flex size-8 items-center justify-center rounded-full bg-white/20 transition group-hover:translate-y-0.5">
        <IconArrowDown className="size-4" />
      </span>
    </a>
  );

  return (
    <section className={`relative bg-white ${overlap ? "overflow-x-clip" : "overflow-hidden"}`}>
      {/* Zentrierter Hero (Version 3) bewusst ohne Fingerabdruck */}
      {!centered && (
        <Image
          src="/images/fingerprint.jpg"
          alt=""
          width={1280}
          height={818}
          priority
          className={
            overlap
              ? "pointer-events-none absolute -right-40 top-[16rem] z-[5] w-[867px] max-w-none opacity-60 mix-blend-multiply lg:right-0 lg:top-[18rem] lg:w-[902px] [mask-image:linear-gradient(to_bottom,#000_65%,transparent_98%)]"
              : "pointer-events-none absolute -right-40 top-0 h-full w-auto max-w-none opacity-60 mix-blend-multiply sm:-right-20 lg:right-0"
          }
        />
      )}
      <div className="relative mx-auto max-w-6xl px-4 pb-28 pt-20 sm:px-6 sm:pb-40 sm:pt-32">
        {layout === "split" ? (
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
            <div>
              {eyebrow}
              {h1}
            </div>
            <div className="lg:pt-12">
              <p className="t-lead text-muted">{lead}</p>
              <div className="mt-10">{cta}</div>
            </div>
          </div>
        ) : (
          <div className={centered ? "mx-auto max-w-4xl text-center" : "max-w-3xl"}>
            {eyebrow}
            {h1}
            <p className={`t-lead mt-10 text-muted ${centered ? "mx-auto max-w-2xl" : "max-w-2xl"}`}>{lead}</p>
            <div className="mt-14">{cta}</div>
          </div>
        )}
      </div>
    </section>
  );
}
