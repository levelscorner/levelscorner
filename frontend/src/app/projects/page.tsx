import type { Metadata } from "next";
import Link from "next/link";
import { LuArrowRight } from "react-icons/lu";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { featuredProjects } from "@/data/portfolio";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Projects",
  description: "Selected systems and project work by Abhinav Rana across agentic AI, backend platforms, orchestration, and robotics software.",
  path: "/projects",
});

export default function Projects() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 page-projects md:py-20">
      <section className="section-shell">
        <p className="eyebrow">Projects</p>
        <div className="section-heading-row mt-3 items-end">
          <div>
            <h1 className="section-title max-w-4xl">Systems work with a visible point of view.</h1>
            <p className="hero-copy mt-5 max-w-3xl">
              A mix of professional and personal work across agentic AI, backend platforms, orchestration, and robotics. I care less about novelty theater and more about whether the system survives real use.
            </p>
          </div>
          <Link href="/contact" className="section-link">
            Talk through a project
            <LuArrowRight size={15} />
          </Link>
        </div>
      </section>

      <RevealOnScroll>
        <section className="project-grid mt-10">
          {featuredProjects.map((project) => (
            <article key={project.title} className="feature-card project-story-card">
              <div className="card-topline">
                <span>{project.type}</span>
              </div>
              <h2 className="project-title">{project.title}</h2>
              <p className="project-summary">{project.summary}</p>
              <ul className="detail-list project-list mt-6">
                {project.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
              <div className="tag-row mt-6">
                {project.stack.map((tag) => (
                  <span key={tag} className="tag-chip">{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </section>
      </RevealOnScroll>
    </div>
  );
}
