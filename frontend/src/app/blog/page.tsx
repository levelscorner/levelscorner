import type { Metadata } from "next";
import Link from "next/link";
import { LuArrowRight } from "react-icons/lu";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { notes } from "@/data/portfolio";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Writing",
  description: "Working notes from Abhinav Rana on agentic AI, backend platform engineering, systems design, and production reliability.",
  path: "/blog",
});

export default function Blog() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 page-blog md:py-20">
      <section className="section-shell">
        <p className="eyebrow">Writing</p>
        <div className="section-heading-row mt-3 items-end">
          <div>
            <h1 className="section-title max-w-4xl">Notes from the overlap of systems engineering and AI execution.</h1>
            <p className="hero-copy mt-5 max-w-3xl">
              These are the themes I keep returning to: durable agent behavior, boring production rollouts, and backend systems that stay understandable under pressure.
            </p>
          </div>
          <Link href="/contact" className="section-link">
            Continue the conversation
            <LuArrowRight size={15} />
          </Link>
        </div>
      </section>

      <RevealOnScroll>
        <section className="notes-grid mt-10">
          {notes.map((note) => (
            <article key={note.title} className="feature-card note-card">
              <div className="card-topline">
                <span>Working note</span>
              </div>
              <h2 className="project-title">{note.title}</h2>
              <p className="project-summary">{note.summary}</p>
              <ul className="detail-list mt-6">
                {note.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </section>
      </RevealOnScroll>
    </div>
  );
}
