import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected projects by Sumeet Basfore, with problem statements, repository evidence, technologies, and scope notes.",
  openGraph: {
    title: "Projects | Sumeet Basfore",
    description:
      "Selected projects by Sumeet Basfore, with problem statements, repository evidence, technologies, and scope notes.",
  },
  twitter: {
    title: "Projects | Sumeet Basfore",
    description:
      "Selected projects by Sumeet Basfore, with problem statements, repository evidence, technologies, and scope notes.",
  },
};

export default function ProjectsPage() {
  return (
    <main id="main">
      <div data-motion-reveal>
        <PageHeader
          eyebrow="Projects · Provisional shortlist"
          title="Selected work"
          lead="A selection from public repositories reviewed for this portfolio. The planned content-audit document is unavailable, so this shortlist is provisional. Documentation claims are attributed; no live demos have been verified."
        />
      </div>
      <section aria-labelledby="project-list" className="py-12 md:py-20">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <h2 id="project-list" className="sr-only">Project list</h2>
          <ol>
            {projects.map((project, index) => (
              <li key={project.slug}>
                <ProjectCard project={project} index={index} />
              </li>
            ))}
          </ol>
        </div>
      </section>
    </main>
  );
}
