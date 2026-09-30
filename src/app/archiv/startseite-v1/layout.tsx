import type { CSSProperties, ReactNode } from "react";
import { Plus_Jakarta_Sans } from "next/font/google";

// Archiv Version 1.0: ursprüngliche Schrift und Farben, nur für diesen Bereich.
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

const v1Theme = {
  "--color-brand": "#009aa3",
  "--color-brand-dark": "#007a82",
  "--color-brand-soft": "#e3f4f5",
  "--color-navy": "#005482",
  "--color-ink": "#182a36",
  "--color-muted": "#5b6b76",
  "--color-line": "#e3e8eb",
  "--color-paper": "#f6f8f9",
  color: "#182a36",
  fontWeight: 400,
} as CSSProperties;

export default function ArchivV1Layout({ children }: { children: ReactNode }) {
  return (
    <div className={jakarta.className} style={v1Theme}>
      {children}
    </div>
  );
}
