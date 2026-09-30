// Versand der Kontaktanfragen über die Resend-API (https://resend.com).
// Benötigte Umgebungsvariablen (in Vercel setzen):
//   RESEND_API_KEY   – API-Key von Resend
//   CONTACT_TO       – Empfänger, z. B. info@msphr.de
//   CONTACT_FROM     – verifizierter Absender, z. B. "MSP Website <website@msphr.de>"

type Payload = Partial<
  Record<"name" | "company" | "email" | "phone" | "message" | "privacy" | "website", string>
>;

const clean = (v: unknown, max = 200) => (typeof v === "string" ? v.trim().slice(0, max) : "");

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Ungültige Anfrage." }, { status: 400 });
  }

  // Honeypot ausgefüllt → Bot. Still „Erfolg“ melden.
  if (clean(body.website)) return Response.json({ ok: true });

  const name = clean(body.name);
  const email = clean(body.email);
  const message = clean(body.message, 5000);
  if (!name || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !body.privacy) {
    return Response.json({ error: "Bitte füllen Sie alle Pflichtfelder aus." }, { status: 400 });
  }

  const { RESEND_API_KEY, CONTACT_TO, CONTACT_FROM } = process.env;
  if (!RESEND_API_KEY || !CONTACT_TO || !CONTACT_FROM) {
    return Response.json(
      { error: "Das Kontaktformular ist noch nicht eingerichtet." },
      { status: 503 },
    );
  }

  const text = [
    `Name: ${name}`,
    `Unternehmen: ${clean(body.company) || "–"}`,
    `E-Mail: ${email}`,
    `Telefon: ${clean(body.phone) || "–"}`,
    "",
    message,
  ].join("\n");

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${RESEND_API_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: CONTACT_FROM,
      to: CONTACT_TO.split(",").map((s) => s.trim()),
      reply_to: email,
      subject: `Kontaktanfrage über msphr.de – ${name}`,
      text,
    }),
  });

  if (!res.ok) {
    console.error("Resend-Fehler", res.status, await res.text());
    return Response.json({ error: "Senden fehlgeschlagen." }, { status: 502 });
  }
  return Response.json({ ok: true });
}
