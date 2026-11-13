import type { Metadata } from "next";
import { HomeHero } from "@/components/home-hero";
import { Section } from "@/components/container";
import { ProjectCard } from "@/components/project-card";
import { Body, Eyebrow, Heading } from "@/components/typography";
import { featuredProjects } from "@/content/projects";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: site.role,
  description: site.description,
  openGraph: { title: `${site.name} | ${site.role}`, description: site.description },
  twitter: { title: `${site.name} | ${site.role}`, description: site.description },
};

export default function HomePage() {
  return (
    <main id="main">
      <HomeHero />

      <Section labelledBy="positioning">
        <div data-motion-section className="grid gap-10 md:grid-cols-[1fr_2fr] md:gap-16">
          <div data-motion-parallax>
            <Eyebrow>01 &mdash; Focus</Eyebrow>
          </div>
          <div data-motion-reveal className="space-y-6">
            <Heading id="positioning" className="max-w-[24ch]">
              Tools for supervising, securing, and understanding coding agents.
            </Heading>
            <Body>
              Much of my recent work sits around one question: how do you know what an AI coding
              agent actually did? Projects here cover agent security and credential isolation,
              postmortem analysis of agent sessions, and the editor and document tools I use while
              working with agents.
            </Body>
          </div>
        </div>
      </Section>

      <Section labelledBy="featured-heading" className="border-t border-champagne/20">
        <div data-motion-reveal className="mb-14 grid gap-6 md:grid-cols-[1fr_2fr] md:gap-16">
          <Eyebrow>02 &mdash; Featured</Eyebrow>
          <Heading id="featured-heading" className="max-w-[24ch]">
            Selected projects
          </Heading>
        </div>
        <ul className="grid gap-6">
          {featuredProjects.map((project, index) => (
            <li key={project.slug}>
              <ProjectCard project={project} index={index} headingLevel={3} />
            </li>
          ))}
        </ul>
      </Section>
    </main>
  );
}
