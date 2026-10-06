# One-Pager-Varianten (Entwurf)

`onepager-varianten.html` enthält fünf eigenständige A4-One-Pager im Look der Startseite.
Daraus entsteht `public/downloads/MSP-Onepager-Varianten.pdf` (5 Seiten), auf `daniel` im
Download-Block der Startseite verlinkt (`downloadEntwurf` in `src/lib/content.ts`, nur bei `devTools`).

PDF neu erzeugen: die HTML-Datei in Chrome öffnen und als PDF drucken
(Format A4, Ränder: keine, Hintergrundgrafiken an) – oder per Headless-Chrome/Playwright
`page.pdf({ preferCSSPageSize: true, printBackground: true })`.
