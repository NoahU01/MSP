import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { company } from "@/lib/content";
import "./globals.css";

// Schrift wird beim Build selbst gehostet – keine Verbindung zu Google zur Laufzeit.
// Hausschrift laut CD: Open Sans Light + Semibold (Arial als Ersatzschrift).
const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["300", "600"],
});

export const metadata: Metadata = {
  title: {
    default: `${company.name} | HR Businesspartner`,
    template: `%s | ${company.name}`,
  },
  description:
    "MSP human resources GmbH – Ihr HR Businesspartner für Führungs-, Entwicklungs- und Veränderungsprozesse. Organisations-, Führungskräfte-, Personal- und Teamentwicklung seit 2002.",
  // WICHTIG: Seite darf bis zur offiziellen Freigabe nicht indexiert werden (siehe HANDOFF.md).
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="de" className={`${openSans.variable} h-full antialiased`}>
      <head>
        {/* Bewusst "manual" + async: Synchron mit blockingmode "auto" löst Cookiebot einen Hydration-Fehler aus (React #418)
            und der Banner verschwindet. Die Seite hat kein Tracking, es gibt also nichts automatisch zu blockieren. */}
        <script
          id="Cookiebot"
          src="https://consent.cookiebot.com/uc.js"
          data-cbid="5cb1ea9a-752b-4e7b-b314-f5e19a59a75d"
          data-blockingmode="manual"
          type="text/javascript"
          async
        />
      </head>
      <body className="flex min-h-full flex-col font-sans">
        <a
          href="#inhalt"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-navy focus:px-4 focus:py-2 focus:text-white"
        >
          Zum Inhalt springen
        </a>
        <Header />
        <main id="inhalt" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
