
import type { MetadataRoute } from "next";
import { caseStudies } from "@/data/caseStudies";

const siteUrl = "https://your-domain.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const projectPages = caseStudies.map((project) => ({
    url: `${siteUrl}/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...projectPages,
  ];
}
