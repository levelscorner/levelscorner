import type { Metadata } from "next";
import { profile } from "@/data/portfolio";

export const siteConfig = {
  name: "levelscorner",
  title: `${profile.name} — Backend Platforms, Agentic AI & Go Microservices`,
  description:
    "Portfolio of Abhinav Rana, a Bengaluru-based lead software engineer building backend platforms, Go microservices, agentic AI systems, RAG workflows, MCP tooling, and production infrastructure.",
  url: "https://levelscorner.com",
  locale: "en_IN",
  ogImagePath: "/og-image.png",
  twitterImagePath: "/twitter-card.png",
  keywords: [
    "Abhinav Rana",
    "backend engineer",
    "agentic AI engineer",
    "Go microservices",
    "platform engineering",
    "RAG",
    "MCP",
    "systems design",
    "Bengaluru engineer",
    "AI platform engineer",
    "senior backend engineer India",
    "production AI systems",
    "Claude MCP engineer",
    "LangChain engineer",
    "PostgreSQL backend engineer",
  ],
} as const;

export function absoluteUrl(path: string = "/") {
  return new URL(path, siteConfig.url).toString();
}

export function createPageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = absoluteUrl(path);
  const image = absoluteUrl(siteConfig.ogImagePath);
  const twitterImage = absoluteUrl(siteConfig.twitterImagePath);

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: `${title} | ${profile.name}`,
      description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${profile.name} — backend platforms and agentic AI`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${profile.name}`,
      description,
      images: [twitterImage],
    },
  };
}
