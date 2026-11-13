"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState, type KeyboardEvent } from "react";

type NavItem = { href: string; label: string };

const linkBase =
  "relative inline-flex min-h-10 items-center justify-center rounded-full px-4 font-mono text-[0.68rem] uppercase tracking-[0.12em] transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-champagne";

export function SiteNavLinks({ items }: { items: readonly NavItem[] }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  const close = (returnFocus: boolean) => {
    setOpen(false);
    if (returnFocus) toggleRef.current?.focus();
  };

  const onMenuKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === "Escape") close(true);
  };

  return (
    <>
      <nav aria-label="Primary" className="site-tabs hidden md:block">
        <ul className="flex items-center gap-1">
          {items.map((item) => {
            const active = isActive(item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`${linkBase} site-tabs__link ${active ? "is-active" : ""}`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="md:hidden" onKeyDown={onMenuKeyDown}>
        <button
          ref={toggleRef}
          type="button"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
          className="mobile-menu__toggle rounded-full border border-champagne/40 px-4 py-2.5 font-mono text-[0.68rem] uppercase tracking-[0.12em] text-porcelain transition-colors duration-300 hover:bg-plum focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-champagne"
        >
          {open ? "Close" : "Menu"}
        </button>
        <nav
          id="mobile-nav"
          aria-label="Primary mobile"
          hidden={!open}
          className="mobile-menu absolute inset-x-0 top-full border-b border-champagne/20 bg-aubergine px-6 py-6"
        >
          <ul className="flex flex-col gap-2">
            {items.map((item) => {
              const active = isActive(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    onClick={() => close(false)}
                    className={`${linkBase} mobile-menu__link ${active ? "is-active" : ""}`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </>
  );
}
