import Link from "next/link";
import { navItems, site } from "@/content/site";
import { SiteNavLinks } from "@/components/site-nav-links";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-champagne/20 bg-aubergine/95 backdrop-blur-sm">
      <div className="relative mx-auto flex max-w-[1200px] items-center justify-between gap-6 px-6 py-4 md:px-10">
        <Link
          href="/"
          className="font-display text-xl tracking-tight text-porcelain focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-champagne"
        >
          {site.name}
        </Link>
        <SiteNavLinks items={navItems} />
      </div>
    </header>
  );
}
