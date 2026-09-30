import Link from "next/link";
import { company, services } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-deep text-white/80">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-semibold text-white">{company.name}</p>
          <p className="mt-1 text-sm font-semibold text-brand">{company.slogan}</p>
          <p className="mt-3 text-sm leading-relaxed">
            {company.street}
            <br />
            {company.zip} {company.city}
          </p>
          <p className="mt-3 text-sm leading-relaxed">
            <a href={company.phoneHref} className="hover:text-white">
              {company.phone}
            </a>
            <br />
            <a href={`mailto:${company.email}`} className="hover:text-white">
              {company.email}
            </a>
          </p>
        </div>

        <div>
          <p className="font-semibold text-white">Leistungen</p>
          <ul className="mt-3 space-y-2 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/leistungen/${s.slug}`} className="hover:text-white">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-semibold text-white">Service</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a href={company.customerLoginUrl} className="hover:text-white" rel="noopener">
                Kunden-Login
              </a>
            </li>
            <li>
              <Link href="/impressum" className="hover:text-white">
                Impressum
              </Link>
            </li>
            <li>
              <Link href="/datenschutz" className="hover:text-white">
                Datenschutz
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-4 py-6 text-xs text-white/50 sm:px-6">
          © {company.since}–{new Date().getFullYear()} {company.name} · Ihr Partner für Führungs- und
          Veränderungsprozesse
        </p>
      </div>
    </footer>
  );
}
