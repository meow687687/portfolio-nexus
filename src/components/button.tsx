import Link from "next/link";
import type { ReactNode } from "react";

const base =
  "inline-flex items-center gap-2 rounded-sm border px-5 py-3 font-mono text-sm uppercase tracking-[0.12em] transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-champagne";

const variants = {
  primary: "border-champagne bg-champagne text-aubergine hover:bg-porcelain hover:border-porcelain",
  secondary: "border-champagne/60 bg-transparent text-porcelain hover:border-champagne hover:text-champagne",
} as const;

type Variant = keyof typeof variants;

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  external?: boolean;
  className?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  external = false,
  className = "",
}: ButtonLinkProps) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if (external) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {children}
        <span aria-hidden="true">↗</span>
        <span className="sr-only">(opens in a new tab)</span>
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
