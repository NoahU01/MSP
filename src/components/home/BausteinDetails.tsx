import type { Baustein } from "@/lib/content";

// Detail-Inhalte eines Bausteins (für Pop-up oder Aufklapper).
// Die Kategorien sind bewusst nicht auf die Leistungs-Unterseiten verlinkt (Daniel, 16.10.2026) – die Unterseiten bleiben bestehen.
export function BausteinDetails({ baustein: b }: { baustein: Baustein }) {
  const dot = b.key === "hrbp" ? "bg-navy" : "bg-brand";
  return (
    <div className="space-y-6">
      <p className="leading-relaxed text-muted">{b.text}</p>
      <div className="grid gap-6 sm:grid-cols-2">
        {b.details.map((d) => (
          <div key={d.title}>
            <p className="font-semibold text-ink">{d.title}</p>
            <ul className="mt-2 space-y-1.5 text-[15px] text-muted">
              {d.items.map((item) => (
                <li key={item} className="flex gap-2.5">
                  <span className={`mt-2 size-1.5 shrink-0 rounded-full ${dot}`} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      {b.closing && <p className="leading-relaxed text-ink">{b.closing}</p>}
    </div>
  );
}
