import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  intro,
  tone = "white",
  children,
}: {
  id?: string;
  eyebrow?: string;
  title?: ReactNode;
  intro?: ReactNode;
  tone?: "white" | "paper" | "ink";
  children?: ReactNode;
}) {
  const bg = { white: "bg-white", paper: "bg-paper", ink: "bg-navy text-white" }[tone];
  return (
    <section id={id} className={`${bg} py-20 sm:py-28`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {(eyebrow || title || intro) && (
          <div className="max-w-3xl">
            {eyebrow && (
              <p className={`text-sm font-semibold uppercase tracking-widest ${tone === "ink" ? "text-white/70" : "text-brand"}`}>
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className={`mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl ${tone === "ink" ? "" : "text-navy"}`}>
                {title}
              </h2>
            )}
            {intro && (
              <div className={`mt-5 text-lg leading-relaxed ${tone === "ink" ? "text-white/75" : "text-muted"}`}>
                {intro}
              </div>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
