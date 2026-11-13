import type { ReactNode } from "react";

export function Section({
  children,
  className = "",
  labelledBy,
}: {
  children: ReactNode;
  className?: string;
  labelledBy?: string;
}) {
  return (
    <section aria-labelledby={labelledBy} className={`py-20 md:py-28 ${className}`}>
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">{children}</div>
    </section>
  );
}
