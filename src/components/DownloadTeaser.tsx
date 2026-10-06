import Image from "next/image";
import { download as downloadLive, downloadEntwurf } from "@/lib/content";
import { devTools } from "@/lib/flags";

// Download-Block nach Vorbild empiria: PDF-Vorschau links, Text + Pills + Button rechts.
// Die Vorschau-Seiten sind gezeichnete Platzhalter, bis das echte PDF steht.
export function DownloadTeaser() {
  // Auf daniel liegt der One-Pager-Entwurf zum Ansehen hinter dem Button, auf main nicht.
  const download = devTools ? { ...downloadLive, ...downloadEntwurf } : downloadLive;
  const meta = ["PDF", download.pages, download.size ?? "in Vorbereitung"];

  return (
    <div
      id="download"
      className="group relative isolate grid items-center gap-10 overflow-hidden rounded-[28px] bg-deep px-6 py-10 text-white shadow-[0_34px_80px_rgba(24,42,54,0.25)] sm:px-12 sm:py-14 md:grid-cols-[0.95fr_1.05fr] md:gap-16 lg:px-16 lg:py-16"
    >
      {/* Farbnebel in den Hausfarben */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_70%_at_100%_100%,rgba(0,154,163,0.75)_0%,rgba(0,154,163,0.25)_45%,transparent_75%),radial-gradient(ellipse_45%_55%_at_0%_0%,rgba(0,84,130,0.9)_0%,transparent_70%)]"
      />

      <div aria-hidden="true" className="relative h-64 sm:h-80 lg:h-96">
        <PreviewPage variant="back" />
        <PreviewPage variant="front" />
      </div>

      <div>
        <p className="font-semibold text-brand">{download.kicker}</p>
        <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-[2.75rem]">
          {download.title}{" "}
          <span className="u-accent">
            {download.highlight}
          </span>
        </h2>
        <p className="mt-5 max-w-xl leading-relaxed text-white/80">{download.lead}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {meta.map((m) => (
            <span key={m} className="rounded-full border border-white/30 px-3.5 py-1.5 text-[13px] font-semibold text-white/90">
              {m}
            </span>
          ))}
        </div>
        {download.href ? (
          <a
            href={download.href}
            target="_blank"
            rel="noopener"
            className="mt-8 inline-flex items-center gap-2.5 rounded-full bg-white px-6 py-3.5 font-semibold text-deep transition hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(255,255,255,0.15)]"
          >
            PDF herunterladen
            <DownloadIcon />
          </a>
        ) : (
          <span className="mt-8 inline-flex cursor-not-allowed items-center gap-2.5 rounded-full bg-white/15 px-6 py-3.5 font-semibold text-white/80">
            Erscheint in Kürze
            <DownloadIcon />
          </span>
        )}
      </div>
    </div>
  );
}

function DownloadIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="size-4">
      <path d="M8 2.5v8M4.5 7.5 8 11l3.5-3.5M3 13.5h10" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PreviewPage({ variant }: { variant: "front" | "back" }) {
  const front = variant === "front";
  return (
    <div
      className={`absolute left-1/2 top-1/2 flex aspect-[210/297] h-full flex-col overflow-hidden rounded-md bg-white p-[7%] text-deep shadow-[0_26px_56px_rgba(0,0,0,0.45),0_0_0_1px_rgba(255,255,255,0.14)] transition-transform duration-300 ${
        front
          ? "-translate-x-[74%] -translate-y-1/2 -rotate-3 group-hover:-translate-x-[82%] group-hover:-rotate-5"
          : "-translate-x-[26%] -translate-y-1/2 rotate-6 group-hover:-translate-x-[16%] group-hover:rotate-8"
      }`}
    >
      {front ? (
        <>
          <Image src="/images/logo-msp.png" alt="" width={300} height={132} className="w-[38%]" />
          <div className="mt-auto">
            <div className="h-1 w-8 rounded bg-brand" />
            <p className="mt-3 text-[clamp(10px,1.3vw,15px)] font-semibold uppercase tracking-widest text-brand">Leitfaden</p>
            <p className="mt-1 text-[clamp(14px,2vw,24px)] font-semibold leading-tight text-navy">Zukunfts&shy;faktor Mensch</p>
            <p className="mt-2 text-[clamp(8px,1vw,12px)] leading-snug text-muted">
              So wird Entwicklung zum Erfolgsfaktor für Ihr Unternehmen.
            </p>
          </div>
          <Image
            src="/images/fingerprint.jpg"
            alt=""
            width={1280}
            height={818}
            className="absolute -bottom-[8%] -right-[35%] w-[90%] opacity-70 mix-blend-multiply"
          />
        </>
      ) : (
        <>
          <p className="text-[clamp(8px,1vw,12px)] font-semibold text-brand">01 · Die Hebel</p>
          <div className="mt-3 space-y-1.5">
            {[92, 100, 84, 96, 70].map((w, i) => (
              <div key={i} className="h-1.5 rounded bg-line" style={{ width: `${w}%` }} />
            ))}
          </div>
          <div className="mt-5 grid grid-cols-2 gap-2">
            {["bg-navy", "bg-brand", "bg-brand/60", "bg-navy/60"].map((c) => (
              <div key={c} className={`aspect-[4/3] rounded ${c}`} />
            ))}
          </div>
          <div className="mt-5 space-y-1.5">
            {[100, 88, 94, 60].map((w, i) => (
              <div key={i} className="h-1.5 rounded bg-line" style={{ width: `${w}%` }} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
