import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-32 text-center sm:px-6">
      <p className="text-sm font-semibold uppercase tracking-widest text-brand">404</p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight">Seite nicht gefunden</h1>
      <p className="mt-4 text-lg text-muted">Die angeforderte Seite existiert leider nicht.</p>
      <Link
        href="/"
        className="mt-10 inline-block rounded-full bg-brand px-7 py-3.5 font-semibold text-white hover:bg-brand-dark"
      >
        Zur Startseite
      </Link>
    </div>
  );
}
