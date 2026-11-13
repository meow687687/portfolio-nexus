import type { ReactNode } from "react";

type Tag = "h1" | "h2" | "h3" | "p" | "span";

const headingBase = "font-display font-medium tracking-[-0.01em] text-porcelain";

export function Display({
  as: Tag = "h1",
  children,
  className = "",
}: {
  as?: Tag;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Tag
      className={`${headingBase} text-[clamp(2.75rem,6.5vw,5.5rem)] leading-[1.02] ${className}`}
    >
      {children}
    </Tag>
  );
}

export function Heading({
  as: Tag = "h2",
  id,
  children,
  className = "",
}: {
  as?: Tag;
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Tag id={id} className={`${headingBase} text-[clamp(2rem,4vw,3.25rem)] leading-[1.1] ${className}`}>
      {children}
    </Tag>
  );
}

export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <p className={`font-mono text-xs uppercase tracking-[0.18em] text-champagne ${className}`}>
      {children}
    </p>
  );
}

export function Lead({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <p className={`max-w-[60ch] font-sans text-lg leading-relaxed text-porcelain/85 ${className}`}>
      {children}
    </p>
  );
}

export function Body({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <p className={`max-w-[68ch] font-sans text-[1.0625rem] leading-relaxed text-porcelain/80 ${className}`}>
      {children}
    </p>
  );
}

export function Label({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <span className={`font-mono text-xs uppercase tracking-[0.12em] text-porcelain/70 ${className}`}>
      {children}
    </span>
  );
}

export function Unavailable({ children }: { children: ReactNode }) {
  return (
    <span className="font-mono text-xs uppercase tracking-[0.12em] text-champagne">
      [Unavailable] {children}
    </span>
  );
}
