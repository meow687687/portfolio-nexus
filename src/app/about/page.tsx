import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { Section } from "@/components/container";
import { Body, Eyebrow, Heading } from "@/components/typography";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description: `A little about ${site.name}, ${site.role.toLowerCase()}, and what I like to explore.`,
  openGraph: {
    title: `About | ${site.name}`,
    description: `A little about ${site.name}, ${site.role.toLowerCase()}, and what I like to explore.`,
  },
  twitter: {
    title: `About | ${site.name}`,
    description: `A little about ${site.name}, ${site.role.toLowerCase()}, and what I like to explore.`,
  },
};

const interests = ["AI agents", "Developer workflows", "Coffee", "Books", "Anime", "Series"] as const;

export default function AboutPage() {
  return (
    <main id="main">
      <PageHeader
        eyebrow="About"
        title={site.name}
        lead={`I’m ${site.name} — an ${site.role.toLowerCase()} interested in what software can do when agents become part of the workflow.`}
      />

      <Section labelledBy="about-note">
        <div className="grid gap-10 md:grid-cols-[1fr_2fr] md:gap-16">
          <Eyebrow>01 &mdash; A note</Eyebrow>
          <div className="space-y-6">
            <Heading id="about-note">Building around the work</Heading>
            <Body>
              I’m drawn to AI agents and the developer workflows around them: making their actions
              easier to understand, their access more deliberate, and the tools we use alongside
              them more useful. My public projects are where I explore those ideas.
            </Body>
          </div>
        </div>
      </Section>

      <Section labelledBy="interests" className="border-t border-champagne/20">
        <div className="grid gap-10 md:grid-cols-[1fr_2fr] md:gap-16">
          <Eyebrow>02 &mdash; Beyond the build</Eyebrow>
          <div className="space-y-6">
            <Heading id="interests">Things I enjoy</Heading>
            <ul className="flex flex-wrap gap-3" aria-label="Interests">
              {interests.map((interest) => (
                <li
                  key={interest}
                  className="rounded-sm border border-champagne/30 px-4 py-2 font-mono text-xs uppercase tracking-[0.12em] text-porcelain/85"
                >
                  {interest}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>
    </main>
  );
}
