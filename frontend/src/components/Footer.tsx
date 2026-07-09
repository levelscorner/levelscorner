import Link from "next/link";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { LuFileText, LuMail } from "react-icons/lu";
import type { IconType } from "react-icons";

const footerLinks: { label: string; href: string; Icon: IconType }[] = [
  { label: "LinkedIn", href: "https://linkedin.com/in/abhinavrl4f", Icon: SiLinkedin },
  { label: "GitHub", href: "https://github.com/levelscorner", Icon: SiGithub },
  { label: "Email", href: "mailto:rabhinavcs@gmail.com", Icon: LuMail },
  { label: "Resume", href: "/resume.pdf", Icon: LuFileText },
];

export function Footer() {
  return (
    <footer className="site-footer" style={{ borderTop: "1px solid var(--border)" }}>
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10 md:grid-cols-[1.2fr_0.8fr] md:items-end">
        <div>
          <p className="eyebrow">levelscorner</p>
          <h2 className="section-title mt-3 max-w-xl text-[clamp(1.8rem,3vw,2.6rem)]">
            Backend platforms, agentic AI systems, and engineering that survives production reality.
          </h2>
          <p className="hero-copy mt-4 max-w-xl">
            Built by Abhinav Rana. Based in Bengaluru. Available for senior backend, platform, and AI engineering conversations.
          </p>
        </div>

        <div className="footer-links-grid">
          {footerLinks.map((link) => {
            const external = link.href.startsWith("http") || link.href.startsWith("mailto:");
            const content = (
              <>
                <link.Icon size={15} />
                <span>{link.label}</span>
              </>
            );

            return external ? (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="footer-link footer-link-card"
              >
                {content}
              </a>
            ) : (
              <Link key={link.label} href={link.href} className="footer-link footer-link-card">
                {content}
              </Link>
            );
          })}
        </div>
      </div>

      <div className="mx-auto flex max-w-6xl flex-col gap-2 border-t border-[color:var(--border)] px-6 py-4 text-xs md:flex-row md:items-center md:justify-between" style={{ color: "var(--muted)" }}>
        <span>© {new Date().getFullYear()} Abhinav Rana · levelscorner</span>
        <span>Proof-first portfolio · built with Next.js and Go</span>
      </div>
    </footer>
  );
}
