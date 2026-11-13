import type { Project } from "@/content/projects";

const statusStyles: Record<Project["status"], string> = {
  Released: "border-champagne text-champagne",
  "Early development": "border-porcelain/50 text-porcelain/80",
  "Working prototype": "border-porcelain/50 text-porcelain/80",
};

export function ProjectCard({
  project,
  index,
  headingLevel = 2,
}: {
  project: Project;
  index: number;
  headingLevel?: 2 | 3;
}) {
  const ProjectHeading = headingLevel === 2 ? "h2" : "h3";

  return (
    <article data-motion-section data-motion-reveal className="project-entry group grid gap-8 border-t border-champagne/30 py-9 md:grid-cols-[5rem_minmax(0,1fr)] md:gap-10 md:py-12">
      <p data-motion-parallax className="project-entry__index font-display text-3xl tracking-tight text-champagne md:text-4xl" aria-label={`Project ${index + 1}`}>
        {String(index + 1).padStart(2, "0")}
      </p>

      <div className="grid min-w-0 gap-8 xl:grid-cols-[minmax(0,1fr)_minmax(15rem,0.55fr)] xl:gap-14">
        <div className="min-w-0 space-y-8">
          <header className="space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className={`rounded-sm border px-2.5 py-1 font-mono text-[0.68rem] uppercase tracking-[0.14em] ${statusStyles[project.status]}`}>
                {project.status}
              </span>
              <span className="font-mono text-[0.68rem] uppercase tracking-[0.12em] text-porcelain/55">
                {project.license}
              </span>
            </div>
            <ProjectHeading className="font-display text-4xl leading-[0.98] tracking-[-0.025em] text-porcelain transition-transform duration-300 ease-out group-hover:translate-x-1 group-focus-within:translate-x-1 md:text-6xl motion-reduce:transition-none">
              {project.name}
            </ProjectHeading>
            <p className="max-w-[58ch] font-sans text-base leading-relaxed text-porcelain/80 md:text-lg">
              {project.approach}
            </p>
          </header>

          <div className="grid gap-6 md:grid-cols-2">
            <section aria-labelledby={`${project.slug}-problem`} className="space-y-2">
              <h3 id={`${project.slug}-problem`} className="font-mono text-xs uppercase tracking-[0.14em] text-champagne">
                Problem
              </h3>
              <p className="font-sans text-sm leading-relaxed text-porcelain/75">{project.problem}</p>
            </section>
            <section aria-labelledby={`${project.slug}-limits`} className="space-y-2">
              <h3 id={`${project.slug}-limits`} className="font-mono text-xs uppercase tracking-[0.14em] text-champagne">
                Scope notes
              </h3>
              <ul className="list-disc space-y-1 pl-5 font-sans text-sm leading-relaxed text-porcelain/70 marker:text-champagne">
                {project.limitations.map((limitation) => (
                  <li key={limitation}>{limitation}</li>
                ))}
              </ul>
            </section>
          </div>

          <ul aria-label={`${project.name} technologies`} className="flex flex-wrap gap-2">
            {project.stack.map((technology) => (
              <li key={technology} className="rounded-sm bg-plum px-3 py-1.5 font-mono text-[0.68rem] text-porcelain/85">
                {technology}
              </li>
            ))}
          </ul>
        </div>

        <aside className="flex min-w-0 flex-col justify-between gap-7 border-l-0 border-champagne/20 pt-1 md:gap-8 xl:border-l xl:pl-8">
          <div className="space-y-3">
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-champagne">Evidence</p>
            <p className="font-sans text-sm leading-relaxed text-porcelain/65">{project.statusEvidence}</p>
            <ul className="flex flex-wrap gap-x-4 gap-y-2 pt-1">
              {project.evidence.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-8 items-center gap-1 font-mono text-xs text-porcelain/75 underline decoration-champagne/50 underline-offset-4 transition-colors hover:text-champagne focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-champagne"
                  >
                    {item.label}<span aria-hidden="true">↗</span>
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-champagne/15 pt-5">
            {project.liveDemo ? (
              <a
                href={project.liveDemo.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs uppercase tracking-[0.1em] text-champagne underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-champagne"
              >
                {project.liveDemo.label}<span aria-hidden="true"> ↗</span>
              </a>
            ) : (
              <span className="font-mono text-[0.68rem] uppercase tracking-[0.1em] text-porcelain/45">
                No verified live demo
              </span>
            )}
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-10 items-center gap-2 font-mono text-xs uppercase tracking-[0.12em] text-porcelain underline decoration-champagne underline-offset-4 transition-colors group-hover:text-champagne focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-champagne"
            >
              Source repository<span aria-hidden="true">↗</span>
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
        </aside>
      </div>
    </article>
  );
}
