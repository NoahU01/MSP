import { DownloadTeaser } from "@/components/DownloadTeaser";
import type { Locale } from "@/lib/i18n";

export function DownloadSection({ locale = "de" }: { locale?: Locale }) {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <DownloadTeaser locale={locale} />
      </div>
    </section>
  );
}
