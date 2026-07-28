import { siteConfig } from "@/lib/site-data";

export const dynamic = "force-static";

export default function sitemap() {
  const base = siteConfig.url;
  const now = new Date();

  const routes = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" },
    { path: "/sobre", priority: 0.8, changeFrequency: "monthly" },
    { path: "/servicos", priority: 0.9, changeFrequency: "monthly" },
    { path: "/cases", priority: 0.8, changeFrequency: "monthly" },
    { path: "/contato", priority: 0.9, changeFrequency: "monthly" },
    { path: "/privacidade", priority: 0.3, changeFrequency: "yearly" },
  ];

  return routes.map((route) => ({
    url: `${base}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
