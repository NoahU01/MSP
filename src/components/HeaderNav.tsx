"use client";

import { usePathname } from "next/navigation";
import { ContactButton } from "@/components/ContactButton";
import { DevMenu } from "@/components/DevMenu";
import { MainNav, MobileNav } from "@/components/MainNav";
import { devTools } from "@/lib/flags";

// Seiten, auf denen oben nur Logo und "/ Entwicklung /" stehen (keine Kunden-Navigation).
const minimalPages = ["/storyboard"];

export function HeaderNav() {
  const minimal = minimalPages.includes(usePathname());
  return (
    <nav aria-label="Hauptnavigation" className="flex items-center gap-3 sm:gap-7">
      {!minimal && <MainNav />}
      {devTools && <DevMenu />}
      {!minimal && <ContactButton />}
      {!minimal && <MobileNav />}
    </nav>
  );
}
