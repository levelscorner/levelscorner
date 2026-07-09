import type { MetadataRoute } from "next";

const baseUrl = "https://levelscorner.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: `${baseUrl}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/projects`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/resume.pdf`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${baseUrl}/llms.txt`, lastModified: now, changeFrequency: "monthly", priority: 0.4 },
  ];
}
