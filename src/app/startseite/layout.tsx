import type { ReactNode } from "react";
import { DevOnly } from "@/components/DevOnly";

// Entwicklungsbereich – auf dem Live-Branch main nicht erreichbar.
export default function DevLayout({ children }: { children: ReactNode }) {
  return <DevOnly>{children}</DevOnly>;
}
