import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { devTools } from "@/lib/flags";

// Layout-Hülle für Entwicklungsseiten: auf main „Seite nicht gefunden“.
export function DevOnly({ children }: { children: ReactNode }) {
  if (!devTools) notFound();
  return <>{children}</>;
}
