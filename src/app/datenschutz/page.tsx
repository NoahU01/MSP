import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/LegalPage";
import { company } from "@/lib/content";

export const metadata: Metadata = { title: "Datenschutzerklärung" };

// ENTWURF – vor Livegang juristisch prüfen lassen (Hosting, Formular-Versanddienst).
export default function DatenschutzPage() {
  return (
    <LegalPage title="Datenschutzerklärung">
      <h2>1. Verantwortlicher</h2>
      <p>
        {company.name}
        <br />
        {company.street}, {company.zip} {company.city}
        <br />
        Geschäftsführer: {company.ceo}
        <br />
        E-Mail: <a href={`mailto:${company.email}`}>{company.email}</a> · Telefon:{" "}
        <a href={company.phoneHref}>{company.phone}</a>
        <br />
        Siehe auch unser <Link href="/impressum">Impressum</Link>.
      </p>

      <h2>2. Ihre Rechte</h2>
      <p>
        Sie haben jederzeit das Recht auf Auskunft (Art. 15 DSGVO), Berichtigung (Art. 16 DSGVO),
        Löschung (Art. 17 DSGVO), Einschränkung der Verarbeitung (Art. 18 DSGVO),
        Datenübertragbarkeit (Art. 20 DSGVO) sowie Widerspruch gegen die Verarbeitung (Art. 21
        DSGVO). Erteilte Einwilligungen können Sie jederzeit mit Wirkung für die Zukunft widerrufen
        (Art. 7 Abs. 3 DSGVO). Zudem steht Ihnen ein Beschwerderecht bei einer
        Datenschutz-Aufsichtsbehörde zu (Art. 77 DSGVO).
      </p>

      <h2>3. Hosting</h2>
      <p>
        Diese Website wird bei Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA,
        gehostet. Beim Aufruf der Seite verarbeitet Vercel technisch notwendige Daten (u. a.
        IP-Adresse, Datum und Uhrzeit, abgerufene URL, Browser und Betriebssystem) in Server-Logfiles,
        um die Website auszuliefern und ihre Sicherheit zu gewährleisten. Rechtsgrundlage ist unser
        berechtigtes Interesse an einem sicheren und stabilen Betrieb (Art. 6 Abs. 1 lit. f DSGVO).
        Mit Vercel besteht ein Vertrag zur Auftragsverarbeitung (Art. 28 DSGVO); Übermittlungen in
        die USA erfolgen auf Grundlage des EU-U.S. Data Privacy Framework bzw. der
        EU-Standardvertragsklauseln.
      </p>

      <h2>4. Kontaktaufnahme</h2>
      <p>
        Wenn Sie uns per E-Mail, Telefon oder über das Kontaktformular kontaktieren, verarbeiten wir
        Ihre Angaben (Name, Unternehmen, E-Mail-Adresse, Telefonnummer, Nachricht) ausschließlich zur
        Bearbeitung Ihrer Anfrage. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche
        Maßnahmen) bzw. Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Beantwortung).
        Nachrichten aus dem Kontaktformular werden über den E-Mail-Dienst Resend (Resend, Inc., USA)
        an uns zugestellt. Ihre Daten werden gelöscht, sobald sie für die Bearbeitung nicht mehr
        erforderlich sind und keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
      </p>

      <h2>5. Cookies, Tracking und Schriftarten</h2>
      <p>
        Diese Website setzt keine Cookies zu Analyse- oder Marketingzwecken und verwendet keine
        Tracking-Dienste. Die verwendeten Schriftarten sind lokal eingebunden; beim Seitenaufruf
        wird keine Verbindung zu Servern Dritter (z. B. Google) hergestellt.
      </p>

      <h2>6. SSL-/TLS-Verschlüsselung</h2>
      <p>
        Diese Seite nutzt aus Sicherheitsgründen eine SSL- bzw. TLS-Verschlüsselung. Eine
        verschlüsselte Verbindung erkennen Sie an „https://“ in der Adresszeile Ihres Browsers.
      </p>

      <h2>7. Kunden-Login</h2>
      <p>
        Der Login-Bereich für Geschäftspartner wird auf einem separaten System betrieben. Beim
        Aufruf des Links verlassen Sie diese Website; es gelten die dortigen Datenschutzhinweise.
      </p>

      <h2>8. Widerspruch gegen Werbe-E-Mails</h2>
      <p>
        Der Nutzung der im Impressum veröffentlichten Kontaktdaten zur Übersendung nicht
        ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit widersprochen.
      </p>

      <p className="pt-6 text-sm">Stand: {new Date().getFullYear()}</p>
    </LegalPage>
  );
}
