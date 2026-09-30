"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// Schnellumschalter zwischen den Startseiten-Varianten (nur in der Entwicklungsphase).
const versions = [1, 2, 3, 4, 5, 6];

export function VersionNav() {
  const pathname = usePathname();
  return (
    <ul className="flex items-center gap-0.5 sm:gap-1.5">
      {versions.map((v) => {
        const href = `/startseite/version-${v}`;
        const active = pathname === href || (v === 1 && pathname === "/");
        return (
          <li key={v}>
            <Link
              href={href}
              aria-current={active ? "page" : undefined}
              className={`block whitespace-nowrap rounded-full px-1.5 py-1.5 text-[13px] font-semibold transition sm:px-3.5 sm:text-sm ${
                active ? "bg-navy text-white" : "text-muted hover:bg-paper hover:text-navy"
              }`}
            >
              <span className="lg:hidden">V{v}</span>
              <span className="hidden lg:inline">Version {v}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
