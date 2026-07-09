import Link from "next/link";
import { LuArrowRight, LuDownload, LuMail, LuNotebookText, LuSparkles } from "react-icons/lu";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { profile, proofStats, featuredProjects, focusAreas, notes } from "@/data/portfolio";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Backend platforms and agentic AI engineering",
  description:
    "Portfolio of Abhinav Rana, a Bengaluru-based lead software engineer building backend platforms, Go microservices, and agentic AI systems with production-grade execution.",
  path: "/",
});

export default function Home() {
  const featured = featuredProjects.slice(0, 3);

  return (
    <div className="mx-auto max-w-6xl px-6">
      <section className="hero-shell relative overflow-hidden pb-16 pt-20 md:pb-24 md:pt-28">
        <div className="hero-ambient" />
        <div className="relative z-10 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div>
            <p className="eyebrow mb-5">{profile.brand} · engineering with proof</p>
            <h1 className="hero-title max-w-4xl">{profile.heroTitle}</h1>
            <p className="hero-copy mt-6 max-w-2xl">{profile.heroSummary}</p>
            <p className="hero-copy mt-4 max-w-2xl text-[color:var(--text)]">{profile.currentFocus}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/projects" className="btn-primary">
                View selected work
                <LuArrowRight size={16} />
              </Link>
              <a href="/resume.pdf" download="Abhinav_Rana_Resume.pdf" className="btn-ghost">
                Download resume
                <LuDownload size={16} />
              </a>
              <Link href="/contact" className="btn-text">
                Start a conversation
                <LuMail size={16} />
              </Link>
            </div>
          </div>

          <div className="proof-panel">
            <div className="proof-panel-header">
              <span className="proof-kicker">Current angle</span>
              <span className="proof-status">Open to senior backend / AI platform roles</span>
            </div>
            <div className="proof-highlight">
              <p className="proof-highlight-label">What I optimize for</p>
              <p className="proof-highlight-copy">
                Durable systems, clear contracts, useful tooling, and operational calm when a feature stops being a demo.
              </p>
            </div>
            <ul className="proof-list">
              <li>Agentic support systems with RAG, tools, and escalation boundaries</li>
              <li>Go backend platforms across provisioning, subscriptions, and developer workflows</li>
              <li>Systems thinking shaped by telecom, robotics, and real production constraints</li>
            </ul>
          </div>
        </div>
      </section>

      <RevealOnScroll>
        <section className="stats-grid border-y border-[color:var(--border)] py-6">
          {proofStats.map((item) => (
            <div key={item.label} className="stat-card">
              <p className="stat-value">{item.value}</p>
              <p className="stat-label">{item.label}</p>
            </div>
          ))}
        </section>
      </RevealOnScroll>

      <RevealOnScroll>
        <section className="section-shell py-16 md:py-20">
          <div className="section-heading-row">
            <div>
              <p className="eyebrow">Selected work</p>
              <h2 className="section-title">Proof before personality.</h2>
            </div>
            <Link href="/projects" className="section-link">
              See all projects
              <LuArrowRight size={15} />
            </Link>
          </div>

          <div className="project-grid mt-8">
            {featured.map((project) => (
              <article key={project.title} className="feature-card project-card">
                <div className="card-topline">
                  <span>{project.type}</span>
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-summary">{project.summary}</p>
                <ul className="detail-list mt-5">
                  {project.highlights.slice(0, 3).map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
                <div className="tag-row mt-5">
                  {project.stack.map((tag) => (
                    <span key={tag} className="tag-chip">{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
      </RevealOnScroll>

      <RevealOnScroll>
        <section className="section-shell border-t border-[color:var(--border)] py-16 md:py-20">
          <div className="section-heading-row">
            <div>
              <p className="eyebrow">Core strengths</p>
              <h2 className="section-title">Three lanes I keep coming back to.</h2>
            </div>
          </div>

          <div className="focus-grid mt-8">
            {focusAreas.map((area) => (
              <article key={area.title} className="feature-card">
                <h3 className="focus-title">{area.title}</h3>
                <p className="focus-summary">{area.summary}</p>
                <ul className="detail-list mt-5">
                  {area.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>
      </RevealOnScroll>

      <RevealOnScroll>
        <section className="section-shell border-t border-[color:var(--border)] py-16 md:py-20">
          <div className="section-heading-row">
            <div>
              <p className="eyebrow">Writing direction</p>
              <h2 className="section-title">What I think about when building AI and backend systems.</h2>
            </div>
            <Link href="/blog" className="section-link">
              Read notes
              <LuNotebookText size={15} />
            </Link>
          </div>

          <div className="notes-grid mt-8">
            {notes.map((note) => (
              <article key={note.title} className="feature-card note-card">
                <div className="card-topline">
                  <LuSparkles size={14} />
                  <span>Field note</span>
                </div>
                <h3 className="project-title">{note.title}</h3>
                <p className="project-summary">{note.summary}</p>
                <ul className="detail-list mt-5">
                  {note.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>
      </RevealOnScroll>

      <RevealOnScroll>
        <section className="cta-panel mb-16 mt-4 md:mb-24">
          <div>
            <p className="eyebrow">Available</p>
            <h2 className="section-title max-w-2xl">{profile.availability}</h2>
            <p className="hero-copy mt-4 max-w-2xl">
              If you need someone who can reason across backend systems, platform design, and agentic AI execution, let&apos;s talk.
            </p>
          </div>
          <div className="cta-actions">
            <Link href="/contact" className="btn-primary">
              Contact me
              <LuArrowRight size={16} />
            </Link>
            <a href="/resume.pdf" download="Abhinav_Rana_Resume.pdf" className="btn-ghost">
              Grab the resume
              <LuDownload size={16} />
            </a>
          </div>
        </section>
      </RevealOnScroll>
    </div>
  );
}
