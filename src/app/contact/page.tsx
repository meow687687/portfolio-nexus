import type { Metadata } from "next";
import { ButtonLink } from "@/components/button";
import { PageHeader } from "@/components/page-header";
import { Section } from "@/components/container";
import { Body, Eyebrow, Heading, Label } from "@/components/typography";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${site.name} by email, LinkedIn, or GitHub.`,
  openGraph: {
    title: `Contact | ${site.name}`,
    description: `Contact ${site.name} by email, LinkedIn, or GitHub.`,
  },
  twitter: {
    title: `Contact | ${site.name}`,
    description: `Contact ${site.name} by email, LinkedIn, or GitHub.`,
  },
};

export default function ContactPage() {
  return (
    <main id="main">
      <PageHeader
        eyebrow="Contact"
        title="Get in touch"
        lead="The quickest route is email. LinkedIn and GitHub are also listed below."
      />

      <Section labelledBy="channels">
        <div className="grid gap-10 md:grid-cols-[1fr_2fr] md:gap-16">
          <Eyebrow>01 &mdash; Channels</Eyebrow>
          <div className="space-y-10">
            <Heading id="channels">Ways to reach me</Heading>

            <ul className="divide-y divide-champagne/20 border-y border-champagne/20">
              <li className="grid gap-3 py-6 sm:grid-cols-[1fr_2fr] sm:items-center">
                <Label>Email</Label>
                <a
                  href={`mailto:${site.email}`}
                  className="font-display text-2xl text-porcelain underline-offset-4 hover:text-champagne hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-champagne"
                >
                  {site.email}
                </a>
              </li>
              <li className="grid gap-3 py-6 sm:grid-cols-[1fr_2fr] sm:items-center">
                <Label>LinkedIn</Label>
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-display text-2xl text-porcelain underline-offset-4 hover:text-champagne hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-champagne"
                >
                  sumeet-basfore-405037399
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
              <li className="grid gap-3 py-6 sm:grid-cols-[1fr_2fr] sm:items-center">
                <Label>GitHub</Label>
                <a
                  href={site.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-display text-2xl text-porcelain underline-offset-4 hover:text-champagne hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-champagne"
                >
                  Sumeet-basfore
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
            </ul>

            <div className="space-y-6">
              <Body>
                A contact form is not included yet; it needs a decision about where messages go and
                how they are stored. Until then, email is the most direct route.
              </Body>
              <ButtonLink href={`mailto:${site.email}`}>Send an email</ButtonLink>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
