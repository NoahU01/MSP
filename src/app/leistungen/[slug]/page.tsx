import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { company, getService, services } from "@/lib/content";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export const dynamicParams = false;

export async function generateMetadata(props: PageProps<"/leistungen/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const service = getService(slug);
  return service ? { title: service.title, description: service.teaser } : {};
}

export default async function ServicePage(props: PageProps<"/leistungen/[slug]">) {
  const { slug } = await props.params;
  const service = getService(slug);
  if (!service) notFound();
  const others = services.filter((s) => s.slug !== slug);

  return (
    <>
      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <Link href="/#leistungen" className="text-sm font-semibold text-muted hover:text-brand">
            ← Alle Leistungen
          </Link>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl">{service.title}</h1>
          {service.subtitle && <p className="mt-2 text-lg text-muted">{service.subtitle}</p>}
          <p className="mt-6 max-w-2xl text-xl leading-relaxed text-muted">{service.teaser}</p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 sm:py-24 md:grid-cols-2 md:gap-16">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">Was wir für Sie tun</h2>
          <ul className="mt-6 space-y-4">
            {service.items.map((item) => (
              <li key={item} className="flex gap-4 border-b border-line pb-4 text-lg">
                <span className="mt-2.5 size-2 shrink-0 rounded-full bg-brand" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl bg-paper p-8 sm:p-10">
          <h2 className="text-2xl font-semibold tracking-tight text-navy">Warum das wichtig ist</h2>
          <p className="mt-4 leading-relaxed text-muted">{service.why}</p>
        </div>
      </section>

      <section className="bg-deep text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-14 sm:px-6 md:flex-row md:items-center md:justify-between">
          <p className="text-2xl font-semibold tracking-tight">Klingt nach Ihrer Situation?</p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/#kontakt"
              className="rounded-full bg-brand px-7 py-3.5 font-semibold transition hover:bg-brand-dark"
            >
              Kontakt aufnehmen
            </Link>
            <a
              href={company.phoneHref}
              className="rounded-full border border-white/25 px-7 py-3.5 font-semibold transition hover:border-brand"
            >
              {company.phone}
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-brand">Weitere Leistungen</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {others.map((s) => (
            <Link
              key={s.slug}
              href={`/leistungen/${s.slug}`}
              className="rounded-xl border border-line p-5 font-semibold transition hover:border-brand hover:text-brand"
            >
              {s.title} →
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
