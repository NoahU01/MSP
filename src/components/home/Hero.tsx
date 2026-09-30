import Image from "next/image";
import { company } from "@/lib/content";
import { IconArrowDown } from "./Icons";

// Hero der Startseite – Subheadline, Headline und Text unverändert aus Version 1.0.
// Der Button führt in die nächste Sektion (Nutzen zuerst), nicht direkt zum Klärungsgespräch.
export function Hero({
  next = { href: "#ausgangslage", label: "Was Sie davon haben" },
  centered = false,
}: {
  next?: { href: string; label: string };
  centered?: boolean;
}) {
  return (
    <section className="relative overflow-hidden bg-white">
      <Image
        src="/images/fingerprint.jpg"
        alt=""
        width={1280}
        height={818}
        priority
        className={
          centered
            ? "pointer-events-none absolute left-1/2 top-1/2 w-[900px] max-w-none -translate-x-1/2 -translate-y-1/2 opacity-40 mix-blend-multiply"
            : "pointer-events-none absolute -right-40 top-0 h-full w-auto max-w-none opacity-80 mix-blend-multiply sm:-right-20 lg:right-0"
        }
      />
      <div
        className={`relative mx-auto px-4 pb-16 pt-20 sm:px-6 sm:pb-20 sm:pt-32 ${
          centered ? "max-w-4xl text-center" : "max-w-6xl"
        }`}
      >
        <p className="t-eyebrow text-brand">Zukunftsfaktor Mensch · seit {company.since}</p>
        <h1
          className={`mt-6 text-4xl font-semibold leading-[1.1] tracking-tight text-balance text-navy sm:text-6xl ${
            centered ? "" : "max-w-3xl"
          }`}
        >
          Ihr HR Businesspartner für Führungs-, Entwicklungs- und Veränderungsprozesse
        </h1>
        <p className={`t-lead mt-8 text-muted sm:text-[1.375rem] ${centered ? "mx-auto max-w-2xl" : "max-w-2xl"}`}>
          Wir begleiten Unternehmen individuell, ganzheitlich und nachhaltig – als Berater, Trainer
          und Moderatoren für KMU und Großunternehmen in ganz Deutschland.
        </p>
        <a
          href={next.href}
          className="group mt-12 inline-flex items-center gap-3 rounded-full bg-brand py-3.5 pl-7 pr-3.5 font-semibold text-white transition hover:bg-brand-dark"
        >
          {next.label}
          <span className="flex size-8 items-center justify-center rounded-full bg-white/20 transition group-hover:translate-y-0.5">
            <IconArrowDown className="size-4" />
          </span>
        </a>
      </div>
    </section>
  );
}
