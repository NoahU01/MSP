import Image from "next/image";
import Link from "next/link";
import { DevMenu } from "@/components/DevMenu";
import { VersionNav } from "@/components/VersionNav";

// Hauptnavigation wird später neu aufgebaut – vorerst Versions-Umschalter + Menüpunkt "/ Entwicklung /".
export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:h-20 sm:px-6">
        <Link href="/" className="shrink-0">
          <Image
            src="/images/logo-msp.png"
            alt="MSP – HR Business Partner"
            width={300}
            height={132}
            priority
            className="h-8 w-auto sm:h-12"
          />
        </Link>
        <nav aria-label="Hauptnavigation" className="flex items-center gap-1.5 sm:gap-6">
          <VersionNav />
          <DevMenu />
        </nav>
      </div>
    </header>
  );
}
