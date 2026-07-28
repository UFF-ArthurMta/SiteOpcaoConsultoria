import { siteConfig } from "@/lib/site-data";

export const dynamic = "force-static";

export default function manifest() {
  return {
    name: `${siteConfig.name} — Consultoria Econômica e Financeira`,
    short_name: siteConfig.shortName,
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0d1b6e",
  };
}
