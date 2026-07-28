import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-data";

export const dynamic = "force-static";

export const alt = `${siteConfig.name} — Consultoria Econômica e Financeira`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Gera dinamicamente a imagem de compartilhamento (Open Graph / redes). */
export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #0d1b6e 0%, #080f3f 100%)",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "14px",
              background: "#e8821a",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "34px",
              fontWeight: 800,
              color: "#ffffff",
            }}
          >
            O
          </div>
          <div style={{ fontSize: "34px", fontWeight: 800, color: "#ffffff" }}>
            Opção Consultoria
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div
            style={{
              fontSize: "64px",
              fontWeight: 800,
              color: "#ffffff",
              lineHeight: 1.1,
              maxWidth: "900px",
            }}
          >
            Sua tomada de decisão com base em dados reais.
          </div>
          <div style={{ fontSize: "30px", color: "#cdd3ef", maxWidth: "860px" }}>
            Consultoria econômica e financeira para PMEs em Niterói.
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div
            style={{
              background: "#e8821a",
              color: "#ffffff",
              fontSize: "26px",
              fontWeight: 700,
              padding: "14px 28px",
              borderRadius: "12px",
            }}
          >
            Solicite um Diagnóstico Gratuito
          </div>
          <div style={{ fontSize: "24px", color: "#9aa3d4" }}>
            Empresa Júnior de Economia • UFF
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
