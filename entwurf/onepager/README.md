# One-Pager

`onepager.html` (Deutsch) und `onepager-en.html` (Englisch) sind der A4-One-Pager im Look der Startseite,
mit denselben Texten wie die Homepage. Daraus entstehen `public/downloads/MSP-Onepager.pdf` und
`public/downloads/MSP-Onepager-EN.pdf`, verlinkt im Download-Block der deutschen bzw. englischen Startseite
(`onepager` in `src/lib/content.ts`). Vorschaubilder: `public/images/onepager/onepager-de.jpg` / `onepager-en.jpg`.

Textänderungen auf der Homepage hier nachziehen und PDF + Vorschaubild neu erzeugen:
HTML in Chrome öffnen und als PDF drucken (Format A4, Ränder: keine, Hintergrundgrafiken an) – oder per
Headless-Chrome/Puppeteer `page.pdf({ preferCSSPageSize: true, printBackground: true })`;
Vorschaubild = Screenshot der Seite bei 1,5-facher Auflösung (1191 × 1685 px, JPEG).
