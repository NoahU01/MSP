@AGENTS.md

# Arbeitsregeln für dieses Projekt (verbindlich)

## Branches
- Entwickelt wird **immer auf dem Branch `daniel`**. Commits und Pushes gehen nach `origin/daniel`.
- Nach `main` wird **nur auf ausdrücklichen Hinweis von Daniel** übernommen (Merge `daniel` → `main`).
  `main` ist die Live-Version (https://msp-empiria-gmb-h.vercel.app).

## Qualitätsschleife vor JEDEM Push
1. `npm run lint` und `npm run build` müssen fehlerfrei sein.
2. Produktions-Build lokal starten (`npx next start -p 3001`) und **jede geänderte Seite in Chrome ansehen**:
   Screenshots Desktop (1440 px) und schmal (500 px) per Headless-Chrome, Screenshots **selbst prüfen**.
3. Prüfen gegen die Gestaltungsregeln unten. Auffälligkeiten korrigieren und Schritt 2 wiederholen,
   bis nichts mehr auffällt. Erst dann committen und pushen.
4. Nach dem Deploy die zugehörige Vercel-URL gegenprüfen (Branch-Vorschau für `daniel`, Live-URL nur nach Merge in `main`).

## Gestaltungsregeln (Feedback Daniel)
- Schlicht und professionell, viel Weiß. Lieber weniger Elemente, dafür sauber.
- Typo-System aus `src/app/globals.css` nutzen (`t-eyebrow`, `t-h2`, `t-h3`, `t-lead`, `t-body`):
  nur Open Sans Light (300) und Semibold (600), keine zusätzlichen Größen/Schnitte erfinden.
- Keine Versalien-Überzeilen (kein `uppercase tracking-widest`).
- Hervorhebungen ausschließlich mit der dünnen türkisen Unterstreichung `u-accent` – keine Marker, keine hinterlegten Farbflächen.
- Keine Trennlinien/Striche (keine `border-t`, `border-b`, `divide-*` als Abgrenzung) – Abgrenzung über Weißraum und Flächen.
- Keine blassen, transparenten Farbflächen, die billig wirken.
- Haupt-CTA im Hero führt in die nächste Sektion (Nutzen zuerst), nicht direkt zum Klärungsgespräch.
- Interaktive Elemente müssen als solche erkennbar sein (UX/UI), Akkordeons standardmäßig geschlossen.
- Akkordeons: immer nur ein Eintrag gleichzeitig offen – beim Öffnen schließt sich der andere
  (alle `<details>` einer Gruppe bekommen dasselbe `name`-Attribut).
- `/archiv/*` ist eingefroren und wird nicht angepasst.
