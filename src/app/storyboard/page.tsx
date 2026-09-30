import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Box, Circle, Line, Pill } from "@/components/storyboard/Wire";
import { bausteine, cases, company, facts, pains, team } from "@/lib/content";

export const metadata: Metadata = { title: "Storyboard" };

// Storyboard der Startseite: links das Strukturbild (Wireframe), rechts auf gleicher Höhe die Kernaussagen.
// Bewusst skizzenhaft – für die Abstimmung mit dem Kunden, bevor gestaltet wird. Nur der Menübalken bleibt.

type Row = { key: string; label: string; optional?: boolean; wire: ReactNode; content: ReactNode };

const [mark, kathrin] = team;
const [hrbp, lernwelt] = bausteine;

function Field({ k, children }: { k: string; children: ReactNode }) {
  return (
    <div className="grid gap-x-4 gap-y-0.5 sm:grid-cols-[8.5rem_1fr]">
      <dt className="text-[13px] text-muted">{k}</dt>
      <dd className="text-[15px] leading-relaxed text-ink">{children}</dd>
    </div>
  );
}

const rows: Row[] = [
  {
    key: "header",
    label: "Header",
    wire: (
      <div className="flex items-center gap-3">
        <div className="flex-1 space-y-1.5">
          <Line w="40%" h={4} />
          <Line w="95%" dark h={7} />
          <Line w="80%" dark h={7} />
          <Line w="90%" h={4} />
          <div className="pt-1.5"><Pill w={62} teal /></div>
        </div>
        <Box className="flex gap-1.5 bg-[#f5f8f9]">
          <Circle size={26} />
          <Circle size={26} />
        </Box>
      </div>
    ),
    content: (
      <dl className="space-y-2">
        <Field k="Subheadline">Zukunftsfaktor Mensch · seit {company.since}</Field>
        <Field k="Headline">{company.claim}</Field>
        <Field k="Text">Wir begleiten Unternehmen individuell, ganzheitlich und nachhaltig – als Berater, Trainer und Moderatoren für KMU und Großunternehmen in ganz Deutschland.</Field>
        <Field k="Personen">{mark.name} ({mark.role}) und {kathrin.name} ({kathrin.role}) – als Kreise neben dem Text</Field>
        <Field k="Button">„Was Sie davon haben“ – führt zur nächsten Sektion</Field>
      </dl>
    ),
  },
  {
    key: "ausgangslage",
    label: "Ausgangslage",
    wire: (
      <div className="flex items-center gap-3">
        <div className="flex-1 space-y-1.5">
          <Line w="35%" h={4} />
          <Line w="90%" dark h={7} />
          <Line w="70%" dark h={7} />
        </div>
        <div className="w-[52%] space-y-1.5 rounded-md bg-[#33475a] p-2">
          <div className="flex gap-1"><Pill w={30} /><Pill w={26} /><Pill w={28} /></div>
          <Line w="85%" h={4} /><Line w="75%" h={4} /><Line w="80%" h={4} />
          <div className="rounded bg-white p-1"><Line w="80%" h={4} /></div>
        </div>
      </div>
    ),
    content: (
      <dl className="space-y-2">
        <Field k="Headline">Mehr erreichen – mit den Menschen, die Sie haben.</Field>
        <Field k="Druck von außen">Märkte werden enger · Kosten steigen · Fachkräfte fehlen</Field>
        <Field k="Folgen">{pains.map((p) => p.title).join(" · ")}</Field>
        <Field k="Kernfrage">Die Frage ist nicht, ob Sie in Ihre Menschen investieren – sondern wo es am meisten bewirkt.</Field>
      </dl>
    ),
  },
  {
    key: "hebel",
    label: "Hebel-Finder",
    optional: true,
    wire: (
      <div className="rounded-md border border-[#d5dde2] bg-white">
        <div className="flex items-center gap-1.5 rounded-t-md bg-[#33475a] px-2 py-1.5"><Line w="30%" h={4} /></div>
        <div className="flex gap-2 p-2">
          <div className="grid flex-1 grid-cols-2 gap-1">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="flex items-center gap-1 rounded bg-[#eef2f4] p-1">
                <div className="size-2 rounded-sm border border-[#9fb0bb] bg-white" />
                <Line w="70%" h={3} />
              </div>
            ))}
          </div>
          <div className="w-[36%] space-y-1 rounded bg-[#eef2f4] p-1.5">
            <div className="flex h-1.5 overflow-hidden rounded-full"><div className="w-1/2 bg-navy" /><div className="w-1/2 bg-brand" /></div>
            <Line w="90%" h={4} dark /><Line w="70%" h={3} /><Pill w={36} teal />
          </div>
        </div>
      </div>
    ),
    content: (
      <dl className="space-y-2">
        <Field k="Idee">Interaktives Werkzeug: Besucher klicken an, was auf ihr Unternehmen zutrifft (sechs Aussagen), und erhalten sofort eine erste Einordnung – Struktur, Kompetenz oder die Kombination – samt typischer erster Schritte.</Field>
        <Field k="Nutzen">Der Besucher erkennt sich wieder und landet direkt beim passenden Baustein. Das Ergebnis führt zum Klärungsgespräch.</Field>
        <Field k="Zu besprechen">Setzen wir das Werkzeug ein? Falls ja: Die sechs Aussagen und die Auswertung legt MSP fachlich fest.</Field>
      </dl>
    ),
  },
  {
    key: "loesung",
    label: "Unsere Lösung",
    wire: (
      <div className="space-y-2">
        <div className="mx-auto w-[70%] space-y-1.5"><Line w="100%" dark h={7} /><Line w="60%" h={4} /></div>
        <div className="grid grid-cols-2 gap-2">
          {[hrbp, lernwelt].map((b) => (
            <div key={b.key} className="overflow-hidden rounded-md border border-[#d5dde2] bg-white">
              <div className="space-y-1 p-1.5"><div className="size-2.5 rounded-sm border border-[#9fb0bb]" /><Line w="80%" dark h={5} /><Line w="90%" h={3} /><Line w="70%" h={3} /></div>
              <div className={`flex items-center gap-1 px-1.5 py-1 ${b.key === "hrbp" ? "bg-navy" : "bg-brand"}`}><Circle size={14} /><Line w="50%" h={3} /></div>
            </div>
          ))}
        </div>
      </div>
    ),
    content: (
      <dl className="space-y-2">
        <Field k="Headline">{company.slogan}</Field>
        <Field k="Text">Zwei Bausteine, zwei Perspektiven, zwei Menschen, die dafür stehen. Einzeln buchbar – stark in Kombination.</Field>
        <Field k={`Baustein 1`}>{hrbp.name} – „{hrbp.slogan}“ · {hrbp.focus.join(", ")} · Ansprechpartner {mark.name}</Field>
        <Field k={`Baustein 2`}>{lernwelt.name} – „{lernwelt.slogan}“ · {lernwelt.focus.join(", ")} · Ansprechpartnerin {kathrin.name}</Field>
        <Field k="Vertiefung">„Details ansehen“ öffnet je Baustein ein Pop-up mit den Handlungsfeldern</Field>
      </dl>
    ),
  },
  {
    key: "claim",
    label: "Claim-Balken",
    wire: (
      <div className="space-y-2 rounded-md bg-[#33475a] p-3">
        <div className="mx-auto w-[80%] space-y-1.5"><Line w="100%" h={6} /><Line w="70%" h={6} /></div>
        <div className="flex justify-around pt-1">{[0, 1, 2].map((i) => <div key={i} className="h-3 w-6 rounded bg-[#cdd6dc]" />)}</div>
      </div>
    ),
    content: (
      <dl className="space-y-2">
        <Field k="Aussage">Damit sich der Zukunftsfaktor Mensch optimal entwickelt und gezielt zum Unternehmenserfolg beiträgt.</Field>
        <Field k="Kennzahlen">{facts.map((f) => `${f.value} ${f.label}`).join(" · ")}</Field>
      </dl>
    ),
  },
  {
    key: "umsetzung",
    label: "Umsetzung",
    wire: (
      <div className="space-y-2">
        <div className="w-[65%] space-y-1.5"><Line w="100%" dark h={7} /></div>
        <div className="relative flex justify-around rounded-md bg-[#eef2f4] py-2.5">
          <div className="absolute inset-x-[18%] top-1/2 h-px bg-brand/50" />
          <div className="relative size-6 rounded-full bg-brand" />
          <Circle size={24} className="relative" />
          <Circle size={24} className="relative" />
        </div>
        <div className="flex justify-center"><Pill w={70} teal /></div>
      </div>
    ),
    content: (
      <dl className="space-y-2">
        <Field k="Headline">Zwei Schritte bis zur Entscheidung.</Field>
        <Field k="Schritt 1">Klärungsgespräch – Wo liegt Ihr größter Hebel? (hervorgehoben: hier steigen wir ein)</Field>
        <Field k="Schritt 2">Konkreter Vorschlag – umsetzbar und entscheidungsreif</Field>
        <Field k="Danach">Umsetzung mit dem Baustein, der passt</Field>
        <Field k="Button">„Klärungsgespräch vereinbaren“ – direkt unter dem Ablauf</Field>
      </dl>
    ),
  },
  {
    key: "praxis",
    label: "Anliegen von Geschäftspartnern",
    wire: (
      <div className="flex gap-2">
        <div className="w-[38%] space-y-1.5"><Line w="90%" dark h={6} /><Line w="100%" h={3} /><Line w="80%" h={3} /></div>
        <div className="flex-1 space-y-1">
          {[1, 0.85, 0.7, 0.5, 0.2].map((o, i) => (
            <div key={i} className="flex items-center justify-between rounded border border-[#d5dde2] bg-white px-1.5 py-1" style={{ opacity: o }}>
              <Line w="70%" h={3} /><div className="size-2 rounded-full bg-[#cdd6dc]" />
            </div>
          ))}
        </div>
      </div>
    ),
    content: (
      <div className="space-y-2 text-[15px] leading-relaxed text-ink">
        <p>
          <span className="text-muted">Headline:</span> Aus unserem Tagesgeschäft.
        </p>
        <p>
          Sieben Praxisbeispiele zeigen, mit welchen Anliegen Unternehmen zu MSP kommen – jeweils mit Ausgangslage, dem
          geschäftlichen Warum und dem konkreten Auftrag. Die Themen reichen von {cases.slice(0, 3).map((c) => c.topic).join(", ")} bis
          zum {cases[cases.length - 1].topic}.
        </p>
        <p className="text-muted">Darstellung als Akkordeon: vier Einträge sichtbar, der Rest per Scrollen; immer nur einer geöffnet.</p>
      </div>
    ),
  },
  {
    key: "download",
    label: "Download",
    wire: (
      <div className="flex items-center gap-3 rounded-md bg-[#33475a] p-2.5">
        <div className="relative h-14 w-14">
          <div className="absolute left-3 top-0 h-14 w-10 rotate-6 rounded-sm bg-[#cdd6dc]" />
          <div className="absolute left-0 top-0 h-14 w-10 -rotate-3 rounded-sm bg-white" />
        </div>
        <div className="flex-1 space-y-1.5"><Line w="80%" h={6} /><Line w="95%" h={3} /><div className="flex gap-1"><Pill w={16} /><Pill w={22} /><Pill w={18} /></div><Pill w={46} /></div>
      </div>
    ),
    content: (
      <dl className="space-y-2">
        <Field k="Headline">Zukunftsfaktor Mensch: So wird Entwicklung zum Erfolgsfaktor.</Field>
        <Field k="Inhalt">Kostenloser Leitfaden mit Mehrwert: Hebel, Stolpersteine und konkrete Handlungsmöglichkeiten – kompakt zum Weitergeben an Entscheider.</Field>
        <Field k="Status">PDF wird noch gemeinsam erstellt</Field>
      </dl>
    ),
  },
  {
    key: "kontakt",
    label: "Kontakt",
    wire: (
      <div className="space-y-2 rounded-md bg-[#33475a] p-3">
        <div className="mx-auto w-[70%] space-y-1.5"><Line w="100%" h={6} /><Line w="60%" h={3} /></div>
        <div className="flex justify-center gap-5 pt-1"><Circle size={30} /><Circle size={30} /></div>
        <div className="flex justify-center gap-1.5"><Pill w={48} teal /><Pill w={48} /></div>
      </div>
    ),
    content: (
      <dl className="space-y-2">
        <Field k="Headline">Lassen Sie uns über Ihre Situation sprechen.</Field>
        <Field k="Personen">{mark.name} ({mark.role}) · {kathrin.name} ({kathrin.role}) – jeweils mit LinkedIn</Field>
        <Field k="Kontaktwege">Telefon {company.phone} · {company.email}</Field>
      </dl>
    ),
  },
  {
    key: "footer",
    label: "Footer",
    wire: (
      <div className="flex justify-between gap-2 rounded-md bg-[#eef2f4] p-2">
        {[0, 1, 2].map((i) => <div key={i} className="w-1/4 space-y-1"><Line w="80%" h={4} dark /><Line w="100%" h={3} /><Line w="70%" h={3} /></div>)}
      </div>
    ),
    content: <p className="text-[15px] text-ink">Adresse, Leistungen, Impressum und Datenschutz.</p>,
  },
];

export default function StoryboardPage() {
  return (
    <>
      {/* Nur der Menübalken bleibt – Footer auf dieser Seite ausblenden */}
      <style>{`footer{display:none}`}</style>

      <section className="bg-white pb-24 pt-16 sm:pt-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="t-eyebrow text-brand">Storyboard</p>
          <h1 className="t-h2 mt-4 max-w-3xl text-navy">Der rote Faden der neuen Startseite.</h1>
          <p className="t-lead mt-6 max-w-2xl text-muted">
            Von oben nach unten: was der Besucher sieht, was er versteht – und wie er am Ende den Kontakt sucht.
          </p>

          <div className="mt-16">
            {rows.map((r, i) => {
              const first = i === 0;
              const last = i === rows.length - 1;
              return (
                <div key={r.key} className="grid gap-6 md:grid-cols-[minmax(0,380px)_1fr] md:gap-14">
                  {/* Strukturbild-Segment */}
                  <div
                    className={`flex flex-col border-x border-[#d5dde2] bg-[#f5f8f9] px-4 max-md:rounded-2xl max-md:border max-md:border-[#d5dde2] max-md:pb-4 ${first ? "rounded-t-2xl border-t" : ""} ${last ? "rounded-b-2xl border-b pb-5" : ""} ${
                      i > 0 ? "border-t border-t-[#e6ecef]" : ""
                    } pt-4 ${!last ? "pb-4" : ""}`}
                  >
                    {first && (
                      <div className="-mx-4 -mt-4 mb-4 flex items-center gap-1.5 rounded-t-2xl border-b border-[#e6ecef] bg-white px-4 py-2.5">
                        <span className="size-2 rounded-full bg-[#cdd6dc]" />
                        <span className="size-2 rounded-full bg-[#cdd6dc]" />
                        <span className="size-2 rounded-full bg-[#cdd6dc]" />
                        <span className="ml-3 flex-1"><Line w="45%" h={4} /></span>
                        <span className="flex gap-1"><Pill w={16} /><Pill w={16} /><Pill w={16} /><Pill w={22} teal /></span>
                      </div>
                    )}
                    <div className="flex flex-1 flex-col justify-center">
                      <div className={r.optional ? "rounded-lg border-2 border-dashed border-brand p-1.5" : ""}>{r.wire}</div>
                    </div>
                  </div>

                  {/* Kernaussagen */}
                  <div className={`pb-10 md:py-8 ${first ? "md:pt-16" : ""}`}>
                    <p className="flex flex-wrap items-center gap-2 text-[15px] font-semibold text-navy">
                      <span className="text-brand">{String(i + 1).padStart(2, "0")}</span>
                      {r.label}
                      {r.optional && (
                        <span className="rounded-full border border-dashed border-brand px-2.5 py-0.5 text-[12px] font-semibold text-brand-dark">
                          optional · interaktives Werkzeug
                        </span>
                      )}
                    </p>
                    <div className="mt-3">{r.content}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
