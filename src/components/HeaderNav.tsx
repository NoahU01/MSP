"use client";

import { usePathname } from "next/navigation";
import { ContactButton } from "@/components/ContactButton";
import { DevMenu } from "@/components/DevMenu";
import { LanguageSwitch } from "@/components/LanguageSwitch";
import { MainNav, MobileNav } from "@/components/MainNav";
import { devTools } from "@/lib/flags";
import { localeFromPath, texts } from "@/lib/i18n";

// Seiten, auf denen oben nur Logo und "/ Entwicklung /" stehen (keine Kunden-Navigation).
const minimalPages = ["/storyboard"];

export function HeaderNav() {
  const pathname = usePathname();
  const minimal = minimalPages.includes(pathname);
  return (
    <nav aria-label={texts[localeFromPath(pathname)].nav.label} className="flex items-center gap-3 sm:gap-7">
      {!minimal && <MainNav />}
      {devTools && <DevMenu />}
      {!minimal && <ContactButton />}
      {!minimal && <LanguageSwitch />}
      {!minimal && <MobileNav />}
    </nav>
  );
}
