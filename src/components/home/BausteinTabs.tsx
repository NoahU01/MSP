"use client";

import Link from "next/link";
import { useState } from "react";
import { bausteine } from "@/lib/content";
import { IconCheck, IconLearning, IconStructure } from "./Icons";

// Zwei Bausteine als Umschalter: beide sind sofort als gleichwertige Bausteine sichtbar, Inhalt wechselt per Klick.
export function BausteinTabs() {
  const [active, setActive] = useState(0);
  const b = bausteine[active];
  const hrbp = b.key === "hrbp";

  return (
    <div>
      <div role="tablist" aria-label="Unsere zwei Bausteine" className="grid gap-4 sm:grid-cols-2">
        {bausteine.map((x, i) => {
          const on = i === active;
          const isHrbp = x.key === "hrbp";
          const I = isHrbp ? IconStructure : IconLearning;
          return (
            <button
              key={x.key}
              role="tab"
              aria-selected={on}
              aria-controls={`baustein-panel-${x.key}`}
              onClick={() => setActive(i)}
              className={`flex items-center gap-5 rounded-[28px] p-6 text-left transition sm:p-8 ${
                on ? (isHrbp ? "bg-navy text-white" : "bg-brand text-white") : "bg-paper text-navy hover:bg-[#edf2f4]"
              }`}
            >
              <span
                className={`flex size-14 shrink-0 items-center justify-center rounded-2xl ${
                  on ? "bg-white/15" : isHrbp ? "bg-navy text-white" : "bg-brand text-white"
                }`}
              >
                <I className="size-7" />
              </span>
              <span>
                <span className="t-h3 block">{x.name}</span>
                <span className={`mt-1 block text-[15px] font-light ${on ? "text-white/85" : "text-muted"}`}>{x.slogan}</span>
              </span>
            </button>
          );
        })}
      </div>

      <div
        id={`baustein-panel-${b.key}`}
        role="tabpanel"
        className="mt-4 grid gap-10 rounded-[28px] bg-paper p-8 sm:p-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16"
      >
        <div>
          <p className="t-lead text-ink">{b.question}</p>
          <p className="t-body mt-5 text-muted">{b.text}</p>
          <ul className="mt-8 space-y-3">
            {b.focus.map((f) => (
              <li key={f} className="t-body flex items-center gap-3 text-ink">
                <IconCheck className={`size-5 shrink-0 ${hrbp ? "text-navy" : "text-brand"}`} />
                {f}
              </li>
            ))}
          </ul>
        </div>
        <div className="grid gap-8 sm:grid-cols-2">
          {b.details.map((d) => (
            <div key={d.title}>
              <p className="t-body font-semibold text-navy">
                {d.href ? (
                  <Link href={d.href} className="underline-offset-4 hover:text-brand hover:underline">
                    {d.title}
                  </Link>
                ) : (
                  d.title
                )}
              </p>
              <ul className="mt-2 space-y-1.5">
                {d.items.map((item) => (
                  <li key={item} className="text-[15px] font-light leading-relaxed text-muted">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
