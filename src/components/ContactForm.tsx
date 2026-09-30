"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { company } from "@/lib/content";

type Status = { state: "idle" | "sending" | "sent" } | { state: "error"; message: string };

const field =
  "mt-1.5 block w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/40";

export function ContactForm() {
  const [status, setStatus] = useState<Status>({ state: "idle" });

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus({ state: "sending" });
    try {
      const res = await fetch("/api/kontakt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error ?? "Senden fehlgeschlagen.");
      form.reset();
      setStatus({ state: "sent" });
    } catch (err) {
      setStatus({ state: "error", message: (err as Error).message });
    }
  }

  if (status.state === "sent") {
    return (
      <div className="rounded-2xl border border-brand/40 bg-brand/10 p-8">
        <p className="text-lg font-semibold text-white">Vielen Dank für Ihre Nachricht!</p>
        <p className="mt-2 text-white/75">Wir melden uns so schnell wie möglich bei Ihnen.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2">
      <label className="text-sm font-medium text-white/80">
        Name *
        <input name="name" required autoComplete="name" className={field} />
      </label>
      <label className="text-sm font-medium text-white/80">
        Unternehmen
        <input name="company" autoComplete="organization" className={field} />
      </label>
      <label className="text-sm font-medium text-white/80">
        E-Mail *
        <input name="email" type="email" required autoComplete="email" className={field} />
      </label>
      <label className="text-sm font-medium text-white/80">
        Telefon
        <input name="phone" type="tel" autoComplete="tel" className={field} />
      </label>
      <label className="text-sm font-medium text-white/80 sm:col-span-2">
        Ihr Anliegen *
        <textarea name="message" required rows={5} className={field} />
      </label>
      {/* Honeypot gegen Spam-Bots – für Menschen unsichtbar */}
      <input name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
      <label className="flex items-start gap-3 text-sm text-white/70 sm:col-span-2">
        <input name="privacy" type="checkbox" required className="mt-1 size-4 accent-brand" />
        <span>
          Ich habe die{" "}
          <Link href="/datenschutz" className="underline hover:text-white">
            Datenschutzerklärung
          </Link>{" "}
          gelesen und bin mit der Verarbeitung meiner Angaben zur Beantwortung meiner Anfrage einverstanden. *
        </span>
      </label>
      <div className="flex flex-wrap items-center gap-4 sm:col-span-2">
        <button
          type="submit"
          disabled={status.state === "sending"}
          className="rounded-full bg-brand px-7 py-3.5 font-semibold text-white transition hover:bg-brand-dark disabled:opacity-60"
        >
          {status.state === "sending" ? "Wird gesendet …" : "Nachricht senden"}
        </button>
        {status.state === "error" && (
          <p role="alert" className="text-sm text-red-300">
            {status.message} Alternativ erreichen Sie uns direkt unter{" "}
            <a href={`mailto:${company.email}`} className="underline">
              {company.email}
            </a>
            .
          </p>
        )}
      </div>
    </form>
  );
}
