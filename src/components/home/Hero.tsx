import Image from "next/image";
import Link from "next/link";
import { company } from "@/lib/content";

type Cta = { href: string; label: string };

// Hero der Startseite – Subheadline, Headline und Text unverändert aus Version 1.0.
export function Hero({
  primary = { href: "#kontakt", label: "Gespräch vereinbaren" },
  secondary = { href: "#leistungen", label: "Unsere Leistungen" },
}: {
  primary?: Cta;
  secondary?: Cta;
}) {
  return (
  <section className="relative overflow-hidden bg-white">
    <Image
      src="/images/fingerprint.jpg"
      alt=""
      width={1280}
      height={818}
      priority
      className="pointer-events-none absolute -right-40 top-0 h-full w-auto max-w-none opacity-80 mix-blend-multiply sm:-right-20 lg:right-0"
    />
    <div className="relative mx-auto max-w-6xl px-4 pb-20 pt-16 sm:px-6 sm:pb-32 sm:pt-28">
      <p className="text-sm font-semibold uppercase tracking-widest text-brand">
        Zukunftsfaktor Mensch · seit {company.since}
      </p>
      <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-[1.1] tracking-tight text-balance text-navy sm:text-6xl">
        Ihr HR Businesspartner für Führungs-, Entwicklungs- und Veränderungsprozesse
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
        Wir begleiten Unternehmen individuell, ganzheitlich und nachhaltig – als Berater, Trainer
        und Moderatoren für KMU und Großunternehmen in ganz Deutschland.
      </p>
      <div className="mt-10 flex flex-wrap gap-4">
        <Link
          href={primary.href}
          className="rounded-full bg-brand px-7 py-3.5 font-semibold text-white transition hover:bg-brand-dark"
        >
          {primary.label}
        </Link>
        <Link
          href={secondary.href}
          className="rounded-full border border-navy/20 bg-white/70 px-7 py-3.5 font-semibold text-navy transition hover:border-brand hover:text-brand"
        >
          {secondary.label}
        </Link>
      </div>
    </div>
  </section>
  );
}
