import Image from "next/image";
import { company, team } from "@/lib/content";

// Kontaktbereich nach Vorbild empiria: Personen im Kreis, Name + Rolle, darunter direkte Kontaktwege.
export function ContactPeople() {
  return (
    <section id="kontakt" className="bg-deep py-20 text-center text-white sm:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <p className="t-eyebrow text-white/70">Kontakt</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-5xl">
          Lassen Sie uns über Ihre Situation sprechen.
        </h2>
        <p className="mx-auto mt-5 max-w-[46ch] text-lg leading-relaxed text-white/75">
          Ein erstes Gespräch ist unverbindlich. Wir hören zu, stellen die richtigen Fragen und sagen
          Ihnen offen, ob und wie wir Sie unterstützen können.
        </p>

        <ul className="mt-14 flex flex-wrap justify-center gap-x-14 gap-y-10">
          {team.map((p) => (
            <li key={p.name} className="flex w-60 flex-col items-center">
              <div className="size-36 overflow-hidden rounded-full border-[3px] border-white/85 shadow-[0_14px_30px_rgba(0,0,0,0.3)]">
                <Image src={p.image} alt={p.name} width={288} height={288} className="size-full object-cover" />
              </div>
              <p className="mt-5 text-lg font-semibold">{p.name}</p>
              <p className="mt-1 font-semibold text-brand">{p.role}</p>
              <p className="mt-0.5 text-sm font-light text-white/60">{p.baustein}</p>
              <a
                href={p.linkedin}
                target="_blank"
                rel="noopener"
                aria-label={`${p.name} auf LinkedIn`}
                className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/25 px-3.5 py-1.5 text-[13px] font-semibold text-white/90 transition hover:border-white hover:bg-white hover:text-deep"
              >
                <LinkedInIcon />
                LinkedIn
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-14 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
          <a
            href={company.phoneHref}
            className="inline-flex items-center justify-center gap-2.5 rounded-full bg-brand px-7 py-4 font-semibold transition hover:bg-brand-dark"
          >
            <PhoneIcon />
            {company.phone}
          </a>
          <a
            href={`mailto:${company.email}`}
            className="inline-flex items-center justify-center gap-2.5 rounded-full bg-white px-7 py-4 font-semibold text-deep transition hover:bg-brand-soft"
          >
            <MailIcon />
            {company.email}
          </a>
        </div>
        <p className="mt-8 text-sm text-white/55">
          {company.name} · {company.street} · {company.zip} {company.city}
        </p>
      </div>
    </section>
  );
}

const iconProps = { viewBox: "0 0 24 24", "aria-hidden": true, className: "size-4" } as const;

function LinkedInIcon() {
  return (
    <svg {...iconProps} fill="currentColor">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg {...iconProps} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.1 9.9a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg {...iconProps} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-10 6L2 7" />
    </svg>
  );
}
