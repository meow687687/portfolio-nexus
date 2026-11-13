import { ButtonLink } from "@/components/button";
import { Eyebrow, Lead } from "@/components/typography";
import { site } from "@/content/site";
import { HomeHeroMotion } from "@/components/home-hero-motion";

export function HomeHero() {
  return (
    <section className="home-hero" aria-labelledby="home-title">
      <div className="home-hero__inner">
        <div className="home-hero__copy">
          <Eyebrow className="home-hero__eyebrow">Independent developer · Portfolio</Eyebrow>
          <h1 id="home-title" className="home-hero__title">
            <span className="home-hero__line-clip">
              <span className="home-hero__word" data-hero-word>
                Agentic
              </span>
            </span>
            <span className="home-hero__line-clip">
              <span className="home-hero__word home-hero__word--second" data-hero-word>
                Developer<span className="home-hero__period">.</span>
              </span>
            </span>
          </h1>
          <p className="home-hero__name">{site.name}</p>
          <Lead className="home-hero__lead">
            Building AI tools, developer workflows, and local-first software.
          </Lead>
          <div className="home-hero__actions">
            <ButtonLink href="/projects">Explore projects</ButtonLink>
            <ButtonLink href="/contact" variant="secondary">
              Get in touch
            </ButtonLink>
          </div>
        </div>

        <div className="home-hero__visual" aria-hidden="true">
          <svg
            className="home-hero__linework"
            data-hero-linework
            viewBox="0 0 540 600"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
          >
            <path pathLength="1" strokeDasharray="1" d="M48 493C24 421 36 303 95 188 148 85 254 38 356 70c68 21 124 68 147 131" />
            <path pathLength="1" strokeDasharray="1" d="M56 508c80 54 216 63 327 21 80-30 125-85 138-143" />
            <path pathLength="1" strokeDasharray="1" d="M94 330c52-63 100-106 182-121 81-15 129-52 158-103" />
          </svg>
          <div className="home-hero__monogram" data-hero-monogram>
            <span className="home-hero__letter home-hero__letter--s">S</span>
            <span className="home-hero__letter home-hero__letter--b">B</span>
          </div>
          <div className="home-hero__signature">
            <span>SB</span>
            <span className="home-hero__signature-rule" />
            <span>Agentic developer</span>
          </div>
        </div>
      </div>
      <HomeHeroMotion />
    </section>
  );
}
