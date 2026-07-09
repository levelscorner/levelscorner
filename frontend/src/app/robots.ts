import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: ["OAI-SearchBot", "ChatGPT-User", "Claude-SearchBot", "Perplexity-User", "Googlebot"],
        allow: "/",
      },
      {
        userAgent: ["GPTBot", "Google-Extended", "ClaudeBot", "PerplexityBot", "CCBot"],
        allow: "/",
      },
    ],
    sitemap: "https://levelscorner.com/sitemap.xml",
    host: "https://levelscorner.com",
  };
}
