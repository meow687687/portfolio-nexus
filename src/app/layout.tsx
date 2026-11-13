import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Cormorant_Garamond, IBM_Plex_Mono, Manrope } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SiteScrollMotion } from "@/components/site-scroll-motion";
import { site } from "@/content/site";
import "./globals.css";

const display = Cormorant_Garamond({
  variable: "--next-font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const sans = Manrope({
  variable: "--next-font-sans",
  subsets: ["latin"],
  display: "swap",
});

const mono = IBM_Plex_Mono({
  variable: "--next-font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} | ${site.role}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  authors: [{ name: site.name }],
  creator: site.name,
  openGraph: {
    type: "website",
    siteName: site.name,
    title: `${site.name} | ${site.role}`,
    description: site.description,
  },
  twitter: {
    card: "summary",
    title: `${site.name} | ${site.role}`,
    description: site.description,
  },
};

export const viewport: Viewport = {
  themeColor: "#211626",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${sans.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-aubergine font-sans text-porcelain">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-sm focus:bg-champagne focus:px-4 focus:py-2 focus:font-mono focus:text-sm focus:text-aubergine"
        >
          Skip to main content
        </a>
        <SiteHeader />
        <SiteScrollMotion />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
