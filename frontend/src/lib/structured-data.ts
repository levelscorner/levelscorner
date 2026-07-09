import { featuredProjects, focusAreas, notes, profile } from "@/data/portfolio";
import { experience } from "@/data/resume";
import { absoluteUrl, siteConfig } from "@/lib/metadata";

const primaryNav = [
  { name: "Projects", url: absoluteUrl("/projects") },
  { name: "About", url: absoluteUrl("/about") },
  { name: "Writing", url: absoluteUrl("/blog") },
  { name: "Contact", url: absoluteUrl("/contact") },
  { name: "Resume", url: absoluteUrl("/resume.pdf") },
  { name: "llms.txt", url: absoluteUrl("/llms.txt") },
];

/**
 * Search/GEO schema graph for the public portfolio.
 *
 * Intent:
 * - give Google enough explicit structure for sitelink discovery
 * - give AI answer engines a stable entity graph for Abhinav + levelscorner
 * - keep claims grounded in the same portfolio data rendered on the pages
 */
export function portfolioJsonLd() {
  const personId = absoluteUrl("/#abhinav-rana");
  const websiteId = absoluteUrl("/#website");
  const profilePageId = absoluteUrl("/#profile-page");
  const navId = absoluteUrl("/#site-navigation");
  const faqId = absoluteUrl("/#faq");
  const projectsId = absoluteUrl("/projects#selected-work");

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": websiteId,
        name: siteConfig.name,
        url: siteConfig.url,
        inLanguage: "en-IN",
        description: siteConfig.description,
        publisher: { "@id": personId },
        mainEntity: { "@id": personId },
        potentialAction: {
          "@type": "SearchAction",
          target: `${siteConfig.url}/?q={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "ProfilePage",
        "@id": profilePageId,
        url: siteConfig.url,
        name: `${profile.name} — ${profile.role}`,
        description: profile.heroSummary,
        inLanguage: "en-IN",
        isPartOf: { "@id": websiteId },
        mainEntity: { "@id": personId },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: absoluteUrl(siteConfig.ogImagePath),
          width: 1200,
          height: 630,
        },
      },
      {
        "@type": "Person",
        "@id": personId,
        name: profile.name,
        givenName: profile.firstName,
        jobTitle: profile.role,
        description: profile.heroSummary,
        url: profile.website,
        image: absoluteUrl(siteConfig.ogImagePath),
        email: `mailto:${profile.email}`,
        sameAs: [profile.linkedin, profile.github],
        address: {
          "@type": "PostalAddress",
          addressLocality: "Bengaluru",
          addressRegion: "Karnataka",
          addressCountry: "IN",
        },
        worksFor: {
          "@type": "Organization",
          name: "Persistent Systems",
        },
        alumniOf: {
          "@type": "CollegeOrUniversity",
          name: "Amrita University",
        },
        knowsLanguage: ["English", "Hindi"],
        knowsAbout: siteConfig.keywords,
        hasOccupation: {
          "@type": "Occupation",
          name: "Lead Software Engineer",
          occupationalCategory: "15-1252.00 Software Developers",
          skills: [
            "Backend platform engineering",
            "Go microservices",
            "Agentic AI systems",
            "Retrieval-augmented generation",
            "Model Context Protocol tooling",
            "Systems design",
            "Production reliability",
          ],
        },
        mainEntityOfPage: { "@id": profilePageId },
      },
      {
        "@type": "SiteNavigationElement",
        "@id": navId,
        name: primaryNav.map((item) => item.name),
        url: primaryNav.map((item) => item.url),
      },
      {
        "@type": "ItemList",
        "@id": projectsId,
        name: "Selected engineering work by Abhinav Rana",
        itemListElement: featuredProjects.map((project, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "CreativeWork",
            name: project.title,
            description: project.summary,
            keywords: project.stack.join(", "),
            creator: { "@id": personId },
            url: absoluteUrl("/projects"),
          },
        })),
      },
      {
        "@type": "ItemList",
        "@id": absoluteUrl("/blog#working-notes"),
        name: "Working notes on backend platforms and AI execution",
        itemListElement: notes.map((note, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "Article",
            headline: note.title,
            description: note.summary,
            author: { "@id": personId },
            url: absoluteUrl("/blog"),
          },
        })),
      },
      {
        "@type": "FAQPage",
        "@id": faqId,
        mainEntity: [
          {
            "@type": "Question",
            name: "What does Abhinav Rana build?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Abhinav Rana builds backend platforms, Go microservices, agentic AI systems, RAG workflows, MCP tooling, and production infrastructure.",
            },
          },
          {
            "@type": "Question",
            name: "What engineering roles is Abhinav open to?",
            acceptedAnswer: {
              "@type": "Answer",
              text: profile.availability,
            },
          },
          {
            "@type": "Question",
            name: "Where can recruiters or founders contact Abhinav?",
            acceptedAnswer: {
              "@type": "Answer",
              text: `Email ${profile.email}, LinkedIn ${profile.linkedin}, or use the contact page at ${absoluteUrl("/contact")}.`,
            },
          },
        ],
      },
      {
        "@type": "BreadcrumbList",
        "@id": absoluteUrl("/#breadcrumbs"),
        itemListElement: primaryNav.slice(0, 4).map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.name,
          item: item.url,
        })),
      },
      ...focusAreas.map((area) => ({
        "@type": "DefinedTerm",
        "@id": `${siteConfig.url}/#${area.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
        name: area.title,
        description: area.summary,
        inDefinedTermSet: "Abhinav Rana engineering focus areas",
      })),
      ...experience.map((job) => ({
        "@type": "OrganizationRole",
        roleName: job.role,
        startDate: job.period.split("–")[0]?.trim(),
        member: { "@id": personId },
        memberOf: {
          "@type": "Organization",
          name: job.company,
        },
      })),
    ],
  };
}
