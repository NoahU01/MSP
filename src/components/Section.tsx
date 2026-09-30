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
  const bg = { white: "bg-white", paper: "bg-paper", ink: "bg-deep text-white" }[tone];
  return (
    <section id={id} className={`${bg} py-24 sm:py-32`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {(eyebrow || title || intro) && (
          <div className="max-w-3xl">
            {eyebrow && (
              <p className={`t-eyebrow ${tone === "ink" ? "text-white/70" : "text-brand"}`}>
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className={`t-h2 mt-4 ${tone === "ink" ? "text-white" : "text-navy"}`}>
                {title}
              </h2>
            )}
            {intro && (
              <div className={`t-lead mt-6 ${tone === "ink" ? "text-white/75" : "text-muted"}`}>
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
