# MSP human resources – Website

Neue Homepage für die MSP human resources GmbH (Ersatz für msphr.de). Next.js (App Router) + Tailwind CSS, Deploy über Vercel.

> ⚠️ Die Seite ist bis zur offiziellen Freigabe **noindex** (Header in `vercel.json` + Meta-Tag in `src/app/layout.tsx`). Details: [HANDOFF.md](HANDOFF.md).

## Entwicklung

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
```

## Struktur

- `src/lib/content.ts` – alle Texte (Leistungen, Worst Case GmbH, Praxisbeispiele, Vorgehen, Firmendaten)
- `src/app/page.tsx` – Startseite
- `src/app/leistungen/[slug]` – Unterseiten je Leistung
- `src/app/impressum`, `src/app/datenschutz` – Rechtliches (Datenschutz = Entwurf, vor Livegang prüfen)
- `src/app/api/kontakt` – Versand des Kontaktformulars über Resend

## Kontaktformular

Benötigt in Vercel die Umgebungsvariablen `RESEND_API_KEY`, `CONTACT_TO` und `CONTACT_FROM`. Ohne sie zeigt das Formular einen Hinweis und verweist auf E-Mail/Telefon.
