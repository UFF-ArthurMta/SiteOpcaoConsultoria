import { siteConfig } from "@/lib/site-data";

export default function manifest() {
  return {
    name: `${siteConfig.name} — Consultoria Econômica e Financeira`,
    short_name: siteConfig.shortName,
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0d1b6e",
    icons: [
      {
        src: "/icon.png",
        sizes: "240x240",
        type: "image/png",
      },
    ],
  };
}
