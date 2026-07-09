import type { Metadata } from "next";
import { LuBriefcase, LuGraduationCap, LuLayers3, LuZap } from "react-icons/lu";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { experience, skills, education } from "@/data/resume";
import { profile, focusAreas } from "@/data/portfolio";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "About",
  description: "Background, career arc, engineering focus areas, and experience of Abhinav Rana across systems, robotics, backend platforms, and agentic AI.",
  path: "/about",
});

function SectionLabel({
  children,
  icon: Icon,
}: {
  children: React.ReactNode;
  icon?: React.ElementType;
}) {
  return (
    <div className="flex items-center gap-3 mb-8">
      <span className="font-mono text-sm" style={{ color: "var(--accent)" }}>§</span>
      {Icon && <Icon size={16} style={{ color: "var(--muted)" }} />}
      <h2 className="text-2xl font-semibold" style={{ color: "var(--text)" }}>{children}</h2>
      <div className="flex-1 h-px ml-2" style={{ backgroundColor: "var(--border)" }} />
    </div>
  );
}

export default function About() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 page-about md:py-20">
      <section className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div>
          <p className="eyebrow">About</p>
          <h1 className="section-title mt-3 text-[clamp(3rem,7vw,5rem)]">A systems career that moved from packets and robots to agents and platforms.</h1>
          <div className="space-y-5 mt-6 max-w-2xl text-lg leading-relaxed" style={{ color: "var(--muted)" }}>
            <p>
              I started close to the wire: systems programming, packet-level thinking, and infrastructure where correctness mattered more than presentation. Oracle gave me telecom rigor. Robotics gave me hardware constraints and real-world messiness. Go microservices gave me scale, contracts, and delivery speed.
            </p>
            <p>
              That background is exactly why agentic AI feels interesting to me now. The hard part is not getting a model to say something clever. It is building the surrounding system so retrieval, tool use, state, escalation, and recovery still make sense once the happy path ends.
            </p>
            <p className="font-medium" style={{ color: "var(--text)" }}>
              {profile.currentFocus}
            </p>
          </div>
        </div>

        <div className="about-proof-grid">
          <article className="feature-card">
            <p className="card-topline"><span>Current role</span></p>
            <h2 className="project-title mt-3">{profile.role}</h2>
            <p className="project-summary mt-4">{profile.location}</p>
            <ul className="detail-list mt-5">
              <li>Backend platforms and microservices</li>
              <li>Agentic AI systems, RAG, and MCP tools</li>
              <li>Architecture, rollout, and operational hardening</li>
            </ul>
          </article>
          <article className="feature-card">
            <p className="card-topline"><span>Biases</span></p>
            <h2 className="project-title mt-3">How I usually work</h2>
            <ul className="detail-list mt-5">
              <li>Prefer typed contracts and explicit edges over magic abstractions</li>
              <li>Design for incidents, recovery, and human handoff early</li>
              <li>Care about boring production behavior more than impressive demos</li>
            </ul>
          </article>
        </div>
      </section>

      <RevealOnScroll>
        <section className="mt-20">
          <SectionLabel icon={LuLayers3}>Focus Areas</SectionLabel>
          <div className="focus-grid">
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
        <section className="mt-20">
          <SectionLabel icon={LuZap}>Skills</SectionLabel>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((group) => (
              <div
                key={group.category}
                className="skill-card p-5 rounded-md"
                style={{ border: "1px solid var(--border)", backgroundColor: "var(--surface)" }}
              >
                <p className="font-mono text-xs uppercase tracking-widest mb-3" style={{ color: "var(--accent)", opacity: 0.8 }}>
                  {group.category}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 text-sm font-mono rounded-sm"
                      style={{
                        backgroundColor: "var(--bg)",
                        color: "var(--text)",
                        border: "1px solid var(--border)",
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </RevealOnScroll>

      <RevealOnScroll>
        <section className="mt-20">
          <SectionLabel icon={LuBriefcase}>Experience</SectionLabel>
          <div className="space-y-14">
            {experience.map((job, i) => (
              <div key={i} className="relative pl-6" style={{ borderLeft: "2px solid var(--border)" }}>
                <div
                  className={`absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full border-2${i === 0 ? " timeline-dot-current" : ""}`}
                  style={{ backgroundColor: "var(--accent)", borderColor: "var(--bg)" }}
                />

                <div className="mb-5">
                  <h3 className="text-lg font-semibold mb-1" style={{ color: "var(--text)" }}>
                    {job.role}
                  </h3>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    <span className="font-medium text-base" style={{ color: "var(--accent)" }}>{job.company}</span>
                    <span className="font-mono text-xs" style={{ color: "var(--border)" }}>·</span>
                    <span className="font-mono text-sm" style={{ color: "var(--muted)" }}>{job.period}</span>
                    <span className="font-mono text-xs" style={{ color: "var(--border)" }}>·</span>
                    <span className="font-mono text-sm" style={{ color: "var(--muted)" }}>{job.location}</span>
                  </div>
                </div>

                <div className="space-y-6">
                  {job.clients.map((client, j) => (
                    <div key={j}>
                      {client.name && (
                        <div className="flex items-center gap-3 mb-3 flex-wrap">
                          <p className="text-base font-medium" style={{ color: "var(--text)" }}>
                            {client.name}
                          </p>
                          {client.period && (
                            <span className="font-mono text-xs" style={{ color: "var(--muted)" }}>
                              {client.period}
                            </span>
                          )}
                        </div>
                      )}
                      <ul className="space-y-3">
                        {client.points.map((point, k) => (
                          <li key={k} className="text-base leading-relaxed flex gap-3" style={{ color: "var(--muted)" }}>
                            <span className="mt-1 flex-shrink-0 font-mono text-xs" style={{ color: "var(--accent)", opacity: 0.55 }}>–</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mt-5">
                  {job.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs font-mono rounded-sm"
                      style={{
                        backgroundColor: "var(--accent-dim)",
                        color: "var(--accent)",
                        border: "1px solid transparent",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </RevealOnScroll>

      <RevealOnScroll>
        <section className="mt-20">
          <SectionLabel icon={LuGraduationCap}>Education</SectionLabel>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {education.map((edu, i) => (
              <div
                key={i}
                className="feature-card"
              >
                <p className="project-title text-[1.05rem]">{edu.degree}</p>
                <p className="project-summary mt-2 text-[color:var(--accent)]">{edu.institution}</p>
                <div className="mt-4 flex items-center justify-between font-mono text-xs" style={{ color: "var(--muted)" }}>
                  <span>{edu.period}</span>
                  <span>CGPA {edu.cgpa}</span>
                </div>
                <p className="mt-2 font-mono text-xs" style={{ color: "var(--muted)", opacity: 0.75 }}>
                  {edu.location}
                </p>
              </div>
            ))}
          </div>
        </section>
      </RevealOnScroll>
    </div>
  );
}
