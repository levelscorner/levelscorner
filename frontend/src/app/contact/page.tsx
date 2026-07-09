import type { Metadata } from "next";
import { LuArrowUpRight, LuFileText, LuGithub, LuLinkedin, LuMail } from "react-icons/lu";
import type { IconType } from "react-icons";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { contactChannels, profile } from "@/data/portfolio";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Contact",
  description: "Contact Abhinav Rana for backend platform, agentic AI, and senior engineering conversations.",
  path: "/contact",
});

const iconMap: Record<string, IconType> = {
  Email: LuMail,
  LinkedIn: LuLinkedin,
  GitHub: LuGithub,
  Resume: LuFileText,
};

export default function Contact() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
      <section className="section-shell">
        <p className="eyebrow">Contact</p>
        <div className="section-heading-row mt-3 items-end">
          <div>
            <h1 className="section-title max-w-4xl">Best fit: backend platforms, agentic AI systems, and serious engineering work.</h1>
            <p className="hero-copy mt-5 max-w-3xl">
              If you are hiring for senior backend, platform, or AI engineering work, email is the cleanest path. I am most useful where architecture, execution, and production reliability all matter at once.
            </p>
          </div>
        </div>
      </section>

      <RevealOnScroll>
        <section className="mt-10 contact-grid">
          {contactChannels.map((channel) => {
            const Icon = iconMap[channel.label] ?? LuArrowUpRight;
            const external = channel.href.startsWith("http") || channel.href.startsWith("mailto:");
            return (
              <a
                key={channel.label}
                href={channel.href}
                {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
                className="feature-card contact-card"
              >
                <div className="card-topline">
                  <Icon size={14} />
                  <span>{channel.label}</span>
                </div>
                <h2 className="project-title">{channel.value}</h2>
                <p className="project-summary">{channel.description}</p>
              </a>
            );
          })}
        </section>
      </RevealOnScroll>

      <RevealOnScroll>
        <section className="cta-panel mt-12">
          <div>
            <p className="eyebrow">Current status</p>
            <h2 className="section-title max-w-2xl">{profile.availability}</h2>
            <p className="hero-copy mt-4 max-w-2xl">
              Recruiters, founders, and engineering leaders can reach out with role context, team scope, and the kind of systems problems that need solving.
            </p>
          </div>
          <div className="cta-actions">
            <a href={`mailto:${profile.email}`} className="btn-primary">
              Email Abhinav
              <LuMail size={16} />
            </a>
            <a href="/resume.pdf" download="Abhinav_Rana_Resume.pdf" className="btn-ghost">
              Download resume
              <LuFileText size={16} />
            </a>
          </div>
        </section>
      </RevealOnScroll>
    </div>
  );
}
