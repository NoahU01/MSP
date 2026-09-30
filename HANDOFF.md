# HANDOFF – Neue Homepage für MSP human resources GmbH

## Worum es geht

**Daniel erstellt eine neue Homepage für MSP.** Du (der Agent) baust sie gemeinsam mit ihm – Daniel gibt Richtung, Inhalte und Design-Entscheidungen vor, du setzt um, schlägst vor und fragst nach, wenn etwas unklar ist.

Die bestehende Seite ist https://msphr.de/ (WordPress mit WPBakery, Stand ca. 2018). Sie dient als inhaltliche Grundlage. Die neue Seite soll modern, schnell und mobil sauber sein – Inhalte dürfen übernommen, gestrafft und neu strukturiert werden.

> Das Repo ist zu Beginn bewusst fast leer (nur diese Datei + `vercel.json`). Framework, Struktur und Design legt ihr zusammen fest.

---

## ⚠️ WICHTIG: Seite darf NICHT indexiert werden

Solange die neue Seite auf Vercel (Preview- oder Produktions-URL) läuft und **nicht offiziell live** ist, darf sie **nicht** bei Google & Co. auftauchen – sonst Duplicate Content mit msphr.de.

Bereits eingerichtet:
- **`vercel.json`** setzt für **alle** Routen den HTTP-Header `X-Robots-Tag: noindex, nofollow, noarchive, nosnippet`. Das greift unabhängig vom Framework.

Beim Aufsetzen des Projekts zusätzlich einbauen:
- **Meta-Tag** im `<head>` jeder Seite: `<meta name="robots" content="noindex, nofollow">`
  - Next.js (App Router): in `app/layout.tsx` → `export const metadata = { robots: { index: false, follow: false } }`
- **`robots.txt`**: *nicht* mit `Disallow: /` sperren – sonst kann Google den noindex-Header gar nicht lesen. Entweder weglassen oder `User-agent: *` / `Allow: /`.
- Keine Sitemap einreichen, keine Search Console, kein Tracking.
- Falls ein Framework eine eigene Header-Konfiguration nutzt (z. B. `next.config.js`), darf sie den Header aus `vercel.json` nicht überschreiben – nach dem ersten Deploy prüfen:
  ```bash
  curl -sI https://<vercel-url>/ | grep -i x-robots-tag
  ```

**Erst wenn MSP die Seite freigibt und die Domain msphr.de umgezogen wird**, die noindex-Maßnahmen (Header in `vercel.json`, Meta-Tag) bewusst entfernen – und das in dieser Datei vermerken.

---

## Das Unternehmen

| | |
|---|---|
| **Firma** | MSP human resources GmbH |
| **Positionierung** | „Ihr HR Businesspartner für Führungs-, Entwicklungs- und Veränderungsprozesse" |
| **Gegründet / aktiv seit** | 2002 |
| **Geschäftsführer** | Mark Schweitzer-Pullar |
| **Adresse** | Untere Gasse 64, 74564 Crailsheim |
| **Telefon** | +49 79 51 27 89 70 |
| **E-Mail** | info@msphr.de |
| **USt-IdNr.** | DE 2230 74168 |
| **Website (alt)** | https://msphr.de/ (DE + EN unter `/en/`) |

**Was MSP macht:** Deutschlandweit als Berater, Trainer und Moderatoren für KMU und Großunternehmen tätig. Anspruch: Unternehmen individuell, ganzheitlich und nachhaltig bei Veränderungsprozessen begleiten. Vorgehen geprägt von Erfahrung, Empathie, Fach- und Methodenwissen – „die soziale Kompetenz und damit der Mensch steht im Mittelpunkt".

**Leitmotiv / Claim:** „Zukunftsfaktor Mensch" – *„Damit sich der Zukunftsfaktor Mensch in Ihrem Unternehmen optimal entwickelt."* (Auch Titel der Imagebroschüre.)

### Leistungen (4 Säulen)

1. **Organisationsentwicklung**
   Strategische Unternehmens- und Führungsnachfolge · Etablierung neuer Organisationsformen und Strukturen · Rollenverständnis und Anforderungsprofile von Fach- und Führungskräften · Schnittstellenmanagement · Prozessentwicklung
2. **Führungskräfteentwicklung**
   Führungskräfteentwicklung/-coaching · Entwicklung von Führungsteams und deren Führungsleistung · „Karriere"- oder „Talent"-Programme für eine Führungslaufbahn · Transfersicherung · Maßgeschneiderte Trainings und Workshops für Persönlichkeitsentwicklung und Führungskompetenz
3. **Personalentwicklung**
   Strategische PE-Konzepte · Mitarbeiterbindungsprogramme · Karriere- bzw. Nachfolgeplanung · Bildungsbedarfs- und Persönlichkeitsanalysen · Trainings/Workshops zu allen Bereichen der sozialen Kompetenz · Beurteilungssysteme · Bildungscontrolling unter systemischen Gesichtspunkten
4. **Teamentwicklung** (Führungs- und Mitarbeiterebene)
   Teamanalysen auf unterschiedlichen Unternehmensebenen · Konfliktklärung · Mediationsprozesse · Reflexion im Team · Vertrauensfördernde Maßnahmen · Gruppendynamische Prozesse · Entwicklung einer Teamkultur

### „Worst Case GmbH" – Problem → Lösung (bestehendes Storytelling)

| Zitat aus der Praxis | Lösung |
|---|---|
| „In unseren Abteilungen gibt es keine klar definierten Verantwortlichen oder Abläufe." | Organisationsentwicklung |
| „Wem unsere Methoden nicht gefallen, der soll halt gehen." | Personalentwicklung |
| „Wer seinen Job gut macht, wird sich schon irgendwie hocharbeiten." | Führungskräfteentwicklung |
| „Würden die Anderen ihren Job richtig machen, wäre meine Leistung viel besser." | Teamentwicklung |

### Praxisbeispiele / Anliegen von Geschäftspartnern

- **Eigenverantwortung stärken** – Nachfolge im Familienunternehmen: Führungskräfte sollen mit Lösungen statt Problemen kommen.
- **Schichtleiter entwickeln** – Mitarbeiterumfrage zeigt Unzufriedenheit mit Führung auf Schichtleiterebene.
- **Mitarbeiterjahresgespräch nachhaltig etablieren** – Prozess analysieren und mit Führungskräften neu gestalten.
- **Führungstalente fordern und fördern** – zwei Produktionsstandorte eines internationalen Konzerns, Kommunikationskultur + Talentprogramm.
- **Teamanalysen samt Handlungsempfehlungen** – nach Restrukturierung.
- **Teamleiterstruktur etablieren** – Vertriebsleiter will Verantwortung abgeben, inkl. Auswahl und Training neuer Teamleiter.
- **Kandidaten-Check** – Maschinenbauer sucht Tool zur systematischen Passungsanalyse Kandidat ↔ Position (auch für PE, TE, Konflikte nutzbar).

### Vorgehen – „Der Rahmen für Ihren Erfolg" (6 Schritte)

1. **Zielsetzung** – klar definierte Ziele
2. **Analyse** – objektiver Blick auf Führung, Abläufe, Zusammenarbeit, Kommunikation, Arbeitsklima
3. **Briefing** – Verantwortliche von Anfang an einbinden
4. **Individuelle Konzepte** – MSP als Impulsgeber, Moderator und Trainer
5. **Dialog** – Gespräche mit Teams, Führungsdialoge mit Entscheidern
6. **Nachbetreuung** – beratend und nachjustierend, „Rückfälle" vermeiden

### Weitere Bestandteile der alten Seite

- **Kunden-Login / Mitgliederbereich** (`/customer-login/`) mit geschützten Seiten: „OE", „Bildergalerie", „F4L Kick-Off & F I Protokolle". → Mit Daniel klären, ob/wie das in der neuen Seite abgebildet wird (evtl. extern lassen und nur verlinken).
- **Imagebroschüre** „Zukunftsfaktor Mensch" (PDF): https://msphr.de/wp-content/uploads/2023/01/MSP-IMAGEBROSCHÜRE.pdf
- **Englische Version** unter https://msphr.de/en/
- Impressum + Datenschutzerklärung (müssen auf der neuen Seite wieder rein; Impressum-Daten siehe Tabelle oben).

---

## Marke & Assets (von der alten Seite)

- **Farben:** Türkis `#009aa3` (Hauptakzent), Dunkelblau `#005482`, sehr dunkles Blau `#182a36`, Grau `#999999` / `#ebebeb`
- **Logo:** https://msphr.de/wp-content/uploads/2018/12/Logo_MSP_2018_RGB.png
- **Favicon:** https://msphr.de/wp-content/uploads/2018/12/Favicon.png
- **Headerbild (Fingerabdruck-Motiv):** https://msphr.de/wp-content/uploads/2018/12/Headerbild_Fingerprint.jpg
- **Imagebilder** je Leistung: `https://msphr.de/wp-content/uploads/2018/12/MSP_Imagebilder_<Organisationsentwicklung|Fuehrungskraefteentwicklung|Personal-_und_Teamentwicklung|Fuehrungs-_und_Mitarbeiterebene>.jpg`
- Icons zu den Leistungen/Prozessschritten liegen ebenfalls unter `/wp-content/uploads/2018/12/`.

Assets vor Verwendung mit Daniel abstimmen (Qualität/Aktualität, ggf. neue Fotos).

---

## Offene Punkte für den Start mit Daniel

- [x] Tech-Stack: Next.js 16 (App Router) + Tailwind 4, Deploy über Vercel
- [x] Seitenstruktur: Onepager-Startseite + 4 Leistungs-Unterseiten + Impressum/Datenschutz
- [x] Design-Richtung: Türkis `#009aa3` als Markenfarbe beibehalten, moderner Look (erste Version, Feedback offen)
- [x] Kunden-Login: vorerst extern, im Footer auf msphr.de/customer-login/ verlinkt
- [ ] Zweisprachigkeit: zunächst nur DE, EN später
- [x] Texte: von alter Seite übernommen und gestrafft (`src/lib/content.ts`)
- [x] Kontaktweg: Telefon, E-Mail + Formular (Resend; Env-Variablen noch setzen)
- [ ] Datenschutzerklärung (Entwurf) juristisch prüfen lassen
- [ ] noindex nach erstem Deploy per `curl -sI` verifizieren
