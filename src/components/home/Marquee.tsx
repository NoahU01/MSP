// Laufband mit Themen – Element aus der empiria-Startseite.
export function Marquee({ items }: { items: string[] }) {
  const row = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-line bg-white py-5 [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]">
      <ul className="animate-marquee flex w-max gap-10 whitespace-nowrap" aria-hidden="true">
        {row.map((item, i) => (
          <li key={i} className="flex items-center gap-10 text-lg text-muted">
            {item}
            <span className="size-1.5 rounded-full bg-brand" />
          </li>
        ))}
      </ul>
      <p className="sr-only">{items.join(", ")}</p>
    </div>
  );
}

export const marqueeTopics = [
  "Organisationsentwicklung",
  "Führungskräfteentwicklung",
  "Nachfolge",
  "Rollen & Verantwortung",
  "Teamentwicklung",
  "Trainings",
  "Coaching",
  "Soziale Kompetenz",
  "Konfliktklärung",
  "Transfer in den Alltag",
];
