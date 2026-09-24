import { siteConfig } from "@/lib/site-data";

// Gerado no build (necessário para o export estático do GitHub Pages).
export const dynamic = "force-static";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/membros"],
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
