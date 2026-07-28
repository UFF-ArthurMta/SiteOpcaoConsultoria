import { siteConfig } from "@/lib/site-data";

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
