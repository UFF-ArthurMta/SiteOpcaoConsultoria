import { siteConfig } from "@/lib/site-data";
import { asset } from "@/lib/asset";

// Gerado no build (necessário para o export estático do GitHub Pages).
export const dynamic = "force-static";

export default function manifest() {
  return {
    name: `${siteConfig.name} — Consultoria Econômica e Financeira`,
    short_name: siteConfig.shortName,
    description: siteConfig.description,
    start_url: asset("/"),
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0d1b6e",
    icons: [
      {
        src: asset("/icon.png"),
        sizes: "240x240",
        type: "image/png",
      },
    ],
  };
}
