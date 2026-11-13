import type { ReactNode } from "react";
import { Display, Eyebrow, Lead } from "@/components/typography";

export function PageHeader({
  eyebrow,
  title,
  lead,
  children,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  children?: ReactNode;
}) {
  return (
    <header className="border-b border-champagne/20 pb-16 pt-24 md:pb-24 md:pt-32">
      <div className="mx-auto max-w-[1200px] space-y-6 px-6 md:px-10">
        <Eyebrow>{eyebrow}</Eyebrow>
        <Display>{title}</Display>
        {lead ? <Lead>{lead}</Lead> : null}
        {children}
      </div>
    </header>
  );
}
