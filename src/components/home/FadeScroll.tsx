"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

// Scrollbereich, der `visible` Einträge vollständig zeigt; der nächste läuft transparent aus.
// Gescrollt wird innerhalb des Bereichs (Mausrad/Trackpad beim Drüberfahren, Touch mobil).
// Am Ende des Bereichs verschwindet der Verlauf.
export function FadeScroll({ children, visible = 4 }: { children: ReactNode; visible?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number>();
  const [atEnd, setAtEnd] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const measure = () => {
      const items = el.firstElementChild?.children;
      if (!items || items.length <= visible) return setHeight(undefined);
      const next = items[visible] as HTMLElement;
      // bis zur Mitte des ersten nicht mehr voll sichtbaren Eintrags
      setHeight(next.offsetTop + Math.min(next.offsetHeight, 96) * 0.6);
    };
    const onScroll = () => setAtEnd(el.scrollTop + el.clientHeight >= el.scrollHeight - 4);
    // Höhe nur im geschlossenen Zustand messen (erste Einträge nicht geöffnet)
    measure();
    window.addEventListener("resize", measure);
    el.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("resize", measure);
      el.removeEventListener("scroll", onScroll);
    };
  }, [visible]);

  return (
    <div
      ref={ref}
      style={{ maxHeight: height }}
      className={`relative overflow-y-auto overscroll-contain pr-1 [scrollbar-width:thin] ${
        atEnd ? "" : "[mask-image:linear-gradient(to_bottom,#000_calc(100%-110px),transparent)]"
      }`}
    >
      {children}
    </div>
  );
}
