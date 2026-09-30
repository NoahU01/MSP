import Image from "next/image";
import Link from "next/link";
import { HeaderNav } from "@/components/HeaderNav";

// Hauptnavigation: Hebel-Finder · Unsere Lösung · Umsetzung · (/ Entwicklung /) · Kontakt
// (auf dem Storyboard nur Logo + / Entwicklung /, siehe HeaderNav)
export function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur">
      <div className="relative mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:h-20 sm:px-6">
        <Link href="/" className="shrink-0" aria-label="Zur Startseite">
          <Image
            src="/images/logo-msp.png"
            alt="MSP – HR Business Partner"
            width={300}
            height={132}
            priority
            className="h-8 w-auto sm:h-12"
          />
        </Link>
        <HeaderNav />
      </div>
    </header>
  );
}
