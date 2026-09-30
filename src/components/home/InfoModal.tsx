"use client";

import { useRef, type ReactNode } from "react";

// Zweite Ebene als Pop-up (natives <dialog>): Trigger-Button + Inhalt.
export function InfoModal({
  label,
  title,
  children,
  buttonClassName = "font-semibold text-brand hover:underline underline-offset-4",
}: {
  label: string;
  title: string;
  children: ReactNode;
  buttonClassName?: string;
}) {
  const ref = useRef<HTMLDialogElement>(null);
  return (
    <>
      <button type="button" onClick={() => ref.current?.showModal()} className={buttonClassName}>
        {label}
      </button>
      <dialog
        ref={ref}
        onClick={(e) => e.target === ref.current && ref.current?.close()}
        className="m-auto w-[min(640px,calc(100vw-32px))] rounded-3xl bg-white p-0 text-ink shadow-2xl backdrop:bg-deep/50 backdrop:backdrop-blur-sm"
      >
        <div className="max-h-[80vh] overflow-auto p-7 sm:p-10">
          <div className="flex items-start justify-between gap-6">
            <h3 className="text-2xl font-semibold tracking-tight text-navy">{title}</h3>
            <button
              type="button"
              aria-label="Schließen"
              onClick={() => ref.current?.close()}
              className="-mr-2 -mt-1 flex size-10 shrink-0 items-center justify-center rounded-full text-2xl text-muted hover:bg-paper"
            >
              ×
            </button>
          </div>
          <div className="mt-6">{children}</div>
        </div>
      </dialog>
    </>
  );
}
