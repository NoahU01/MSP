// Skizze „Das MSP-Modell“: Ausgangslage → zwei Bausteine (Struktur / Kompetenz) → Unternehmenserfolg.
// Strichzeichnung im Stil der empiria-Modelle; `dark` für die Vorschau auf dunkler Karte.
const FONT = "var(--font-open-sans), Arial, sans-serif";
const ACCENT = "#009aa3";

function Item({ x, y, t, color }: { x: number; y: number; t: string; color: string }) {
  return (
    <g>
      <rect x={x} y={y - 7} width="7" height="7" rx="1.5" fill="none" stroke={ACCENT} strokeWidth="1.4" />
      <text x={x + 14} y={y} fontSize="11" fill={color} fontFamily={FONT} fontWeight="300">
        {t}
      </text>
    </g>
  );
}

export function ModelSketch({ dark = false, className = "" }: { dark?: boolean; className?: string }) {
  const line = dark ? "rgba(255,255,255,0.55)" : "#005482";
  const text = dark ? "#ffffff" : "#005482";
  const sub = dark ? "rgba(255,255,255,0.65)" : "#555555";
  const box = dark ? "rgba(255,255,255,0.06)" : "#f5f8f9";
  const accent = "#009aa3";
  const font = "var(--font-open-sans), Arial, sans-serif";

  return (
    <svg viewBox="0 0 640 420" role="img" aria-label="Modell: Aus der Ausgangslage führen zwei Bausteine – Struktur und Kompetenz – zum Unternehmenserfolg." className={className}>
      <defs>
        <marker id={`arr-${dark ? "d" : "l"}`} viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto">
          <path d="M1 1 9 5 1 9" fill="none" stroke={accent} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </marker>
      </defs>

      {/* 1 Ausgangslage */}
      <rect x="20" y="160" width="150" height="100" rx="14" fill={box} stroke={line} strokeDasharray="4 4" />
      <circle cx="44" cy="186" r="11" fill="none" stroke={accent} strokeWidth="1.6" />
      <text x="44" y="190" textAnchor="middle" fontSize="11" fontWeight="600" fill={accent} fontFamily={font}>1</text>
      <text x="36" y="222" fontSize="14" fontWeight="600" fill={text} fontFamily={font}>Ausgangslage</text>
      <text x="36" y="242" fontSize="11" fill={sub} fontWeight="300" fontFamily={font}>Ziele und größter Hebel</text>

      {/* Verbindungen */}
      <path d="M170 196 C 210 196, 210 96, 250 96" fill="none" stroke={accent} strokeWidth="1.6" markerEnd={`url(#arr-${dark ? "d" : "l"})`} />
      <path d="M170 224 C 210 224, 210 324, 250 324" fill="none" stroke={accent} strokeWidth="1.6" markerEnd={`url(#arr-${dark ? "d" : "l"})`} />

      {/* 2a Struktur */}
      <rect x="252" y="30" width="200" height="140" rx="14" fill={box} stroke={line} />
      <circle cx="276" cy="56" r="11" fill="none" stroke={accent} strokeWidth="1.6" />
      <text x="276" y="60" textAnchor="middle" fontSize="11" fontWeight="600" fill={accent} fontFamily={font}>2</text>
      <text x="296" y="61" fontSize="14" fontWeight="600" fill={text} fontFamily={font}>Struktur</text>
      <text x="268" y="84" fontSize="11" fill={sub} fontWeight="300" fontFamily={font}>HR Business Partner</text>
      <Item x={268} y={110} t="Rollen & Verantwortung" color={sub} />
      <Item x={268} y={130} t="Prozesse & Schnittstellen" color={sub} />
      <Item x={268} y={150} t="Führung & Nachfolge" color={sub} />

      {/* 2b Kompetenz */}
      <rect x="252" y="250" width="200" height="140" rx="14" fill={box} stroke={line} />
      <circle cx="276" cy="276" r="11" fill="none" stroke={accent} strokeWidth="1.6" />
      <text x="276" y="280" textAnchor="middle" fontSize="11" fontWeight="600" fill={accent} fontFamily={font}>2</text>
      <text x="296" y="281" fontSize="14" fontWeight="600" fill={text} fontFamily={font}>Kompetenz</text>
      <text x="268" y="304" fontSize="11" fill={sub} fontWeight="300" fontFamily={font}>Lernwelt</text>
      <Item x={268} y={330} t="Trainings & Workshops" color={sub} />
      <Item x={268} y={350} t="Coaching" color={sub} />
      <Item x={268} y={370} t="Transfer in den Alltag" color={sub} />

      {/* Kombination */}
      <path d="M352 170 V 250" stroke={line} strokeWidth="1.2" strokeDasharray="3 4" />
      <rect x="306" y="196" width="92" height="28" rx="14" fill={dark ? "#182a36" : "#ffffff"} stroke={accent} />
      <text x="352" y="214" textAnchor="middle" fontSize="11" fontWeight="600" fill={accent} fontFamily={font}>kombinierbar</text>

      {/* Verbindungen zum Ziel */}
      <path d="M452 100 C 500 100, 500 196, 530 196" fill="none" stroke={accent} strokeWidth="1.6" markerEnd={`url(#arr-${dark ? "d" : "l"})`} />
      <path d="M452 320 C 500 320, 500 224, 530 224" fill="none" stroke={accent} strokeWidth="1.6" markerEnd={`url(#arr-${dark ? "d" : "l"})`} />

      {/* 3 Unternehmenserfolg */}
      <rect x="532" y="150" width="96" height="120" rx="14" fill={accent} />
      <circle cx="556" cy="176" r="11" fill="none" stroke="#ffffff" strokeWidth="1.6" />
      <text x="556" y="180" textAnchor="middle" fontSize="11" fontWeight="600" fill="#ffffff" fontFamily={font}>3</text>
      <text x="544" y="214" fontSize="13" fontWeight="600" fill="#ffffff" fontFamily={font}>Unter-</text>
      <text x="544" y="231" fontSize="13" fontWeight="600" fill="#ffffff" fontFamily={font}>nehmens-</text>
      <text x="544" y="248" fontSize="13" fontWeight="600" fill="#ffffff" fontFamily={font}>erfolg</text>
    </svg>
  );
}
