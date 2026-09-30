// Skizzen-Bausteine für das Storyboard (Wireframe im Stil der empiria-Strukturbilder).
import type { ReactNode } from "react";

export const Line = ({ w = "100%", dark = false, h = 6 }: { w?: string; dark?: boolean; h?: number }) => (
  <div className={`rounded-full ${dark ? "bg-[#33475a]" : "bg-[#cdd6dc]"}`} style={{ width: w, height: h }} />
);

export const Pill = ({ w = 64, dark = false, teal = false }: { w?: number; dark?: boolean; teal?: boolean }) => (
  <div className={`h-3.5 rounded-full ${teal ? "bg-brand" : dark ? "bg-[#33475a]" : "bg-[#cdd6dc]"}`} style={{ width: w }} />
);

export const Circle = ({ size = 28, className = "" }: { size?: number; className?: string }) => (
  <div className={`shrink-0 rounded-full border-2 border-[#9fb0bb] bg-white ${className}`} style={{ width: size, height: size }} />
);

export const Box = ({ children, className = "" }: { children?: ReactNode; className?: string }) => (
  <div className={`rounded-md border border-[#d5dde2] bg-white p-2 ${className}`}>{children}</div>
);
