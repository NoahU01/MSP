import type { ReactNode } from "react";

// Einheitlicher Sektionskopf nach Typo-System: Überzeile · H2 · Lead.
export function SectionHead({
  eyebrow,
  title,
  lead,
  centered = false,
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  centered?: boolean;
}) {
  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="t-eyebrow text-brand">{eyebrow}</p>
      <h2 className="t-h2 mt-4 text-navy">{title}</h2>
      {lead && <p className="t-lead mt-6 text-muted">{lead}</p>}
    </div>
  );
}
