import Link from "next/link";
import { navItems, site } from "@/content/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-champagne/20 bg-aubergine">
      <div className="mx-auto grid max-w-[1200px] gap-10 px-6 py-14 md:grid-cols-3 md:px-10">
        <div className="space-y-3">
          <p className="font-display text-2xl text-porcelain">{site.name}</p>
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-champagne">{site.role}</p>
        </div>

        <nav aria-label="Footer" className="md:justify-self-center">
          <ul className="grid grid-cols-2 gap-x-10 gap-y-3">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="font-mono text-xs uppercase tracking-[0.14em] text-porcelain/75 hover:text-champagne focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-champagne"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <ul className="space-y-3 font-mono text-xs uppercase tracking-[0.14em] md:justify-self-end">
          <li>
            <a
              href={`mailto:${site.email}`}
              className="text-porcelain/75 hover:text-champagne focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-champagne"
            >
              Email
            </a>
          </li>
          <li>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-porcelain/75 hover:text-champagne focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-champagne"
            >
              LinkedIn<span className="sr-only"> (opens in a new tab)</span>
            </a>
          </li>
          <li>
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-porcelain/75 hover:text-champagne focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-champagne"
            >
              GitHub<span className="sr-only"> (opens in a new tab)</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="border-t border-champagne/10">
        <p className="mx-auto max-w-[1200px] px-6 py-5 font-mono text-xs text-porcelain/50 md:px-10">
          &copy; {year} {site.name}. Content reflects publicly reviewed profile and repository information.
        </p>
      </div>
    </footer>
  );
}
