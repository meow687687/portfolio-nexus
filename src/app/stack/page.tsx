import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { Section } from "@/components/container";
import { Body, Eyebrow, Heading } from "@/components/typography";

export const metadata: Metadata = {
  title: "Tech Stack",
  description: "Languages listed on Sumeet Basfore's profile, with repository evidence shown separately.",
  openGraph: {
    title: "Tech Stack | Sumeet Basfore",
    description: "Languages listed on Sumeet Basfore's profile, with repository evidence shown separately.",
  },
  twitter: {
    title: "Tech Stack | Sumeet Basfore",
    description: "Languages listed on Sumeet Basfore's profile, with repository evidence shown separately.",
  },
};

const languages = [
  { name: "Python", evidence: "Repository evidence: traject, Lamplight, and forge listings/configuration." },
  { name: "HTML", evidence: "Repository listings include HTML files in Sonicity and Lamplight." },
  { name: "CSS", evidence: "Repository listings include CSS files in Lamplight." },
  { name: "JavaScript", evidence: "Repository listings include JavaScript in OmniDoc and Lamplight." },
  { name: "Java", evidence: "Profile-listed; not seen in the reviewed repository evidence." },
  { name: "C", evidence: "Profile-listed; no standalone C source identified in reviewed repositories." },
  { name: "C++", evidence: "ThermalGuard lists an Arduino `.ino` firmware file; source not inspected." },
  { name: "Rust", evidence: "Repository manifests/listings: relay, Kiln, and dispatch." },
  { name: "Lua", evidence: "Profile-listed; not seen in the reviewed repository evidence." },
] as const;

const toolGroups = [
  {
    title: "Frameworks & interfaces",
    items: ["Electron", "React", "SvelteKit", "Tailwind CSS", "Jetpack Compose", "Expo / React Native", "CameraX", "MediaPipe"],
  },
  {
    title: "Agent & data systems",
    items: ["Cedar policy language", "Ollama", "SQLite"],
  },
  {
    title: "Development tools",
    items: ["Pydantic", "Typer", "pytest", "Ruff", "Pyright", "cargo-deny", "uv"],
  },
] as const;

export default function StackPage() {
  return (
    <main id="main">
      <PageHeader
        eyebrow="Tech stack"
        title="Tools for the work"
        lead="Languages below are the ones I listed on my profile. Repository references show where the public code gives corroborating evidence; they aren’t proficiency ratings."
      />

      <Section labelledBy="languages">
        <div className="grid gap-10 md:grid-cols-[1fr_2fr] md:gap-16">
          <Eyebrow>01 &mdash; Languages</Eyebrow>
          <div className="space-y-8">
            <Heading id="languages">A working vocabulary</Heading>
            <ul className="divide-y divide-champagne/20 border-y border-champagne/20">
              {languages.map((language) => (
                <li key={language.name} className="grid gap-2 py-5 sm:grid-cols-[minmax(8rem,0.7fr)_2fr] sm:items-baseline">
                  <span className="font-display text-2xl text-porcelain">{language.name}</span>
                  <span className="font-sans text-sm leading-relaxed text-porcelain/70">{language.evidence}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section labelledBy="tools" className="border-t border-champagne/20">
        <div className="grid gap-10 md:grid-cols-[1fr_2fr] md:gap-16">
          <Eyebrow>02 &mdash; Tools</Eyebrow>
          <div className="space-y-9">
            <Heading id="tools">Frameworks and systems</Heading>
            {toolGroups.map((group) => (
              <section key={group.title} aria-labelledby={`tools-${group.title.toLowerCase().replaceAll(/[^a-z]+/g, "-")}`} className="space-y-4">
                <h3 id={`tools-${group.title.toLowerCase().replaceAll(/[^a-z]+/g, "-")}`} className="font-mono text-xs uppercase tracking-[0.14em] text-champagne">
                  {group.title}
                </h3>
                <ul className="flex flex-wrap gap-3">
                  {group.items.map((tool) => (
                    <li key={tool} className="rounded-sm bg-plum px-3.5 py-2 font-mono text-xs text-porcelain/85">
                      {tool}
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>
      </Section>

      <Section labelledBy="evidence-note" className="border-t border-champagne/20">
        <div className="grid gap-10 md:grid-cols-[1fr_2fr] md:gap-16">
          <Eyebrow>03 &mdash; Evidence</Eyebrow>
          <div className="space-y-6">
            <Heading id="evidence-note">A note on proficiency</Heading>
            <Body>
              These are languages listed on my profile, not proficiency ratings. Repository references
              indicate where I found corroborating public evidence; absence of a reference is not a
              judgement about ability.
            </Body>
          </div>
        </div>
      </Section>
    </main>
  );
}
