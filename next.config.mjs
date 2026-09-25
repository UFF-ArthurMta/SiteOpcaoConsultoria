/**
 * Dois modos de build:
 *
 * - Padrão (`npm run build`) → Vercel. Runtime completo do Next.js, com o
 *   route handler /api/lead (formulário → Power Automate).
 *
 * - GitHub Pages (`npm run build:pages`, define GITHUB_PAGES=true) → export
 *   estático servido no domínio próprio (public/CNAME → opcaoconsultoria.com.br),
 *   na raiz. Nesse modo o /api/lead fica de fora (export estático não suporta
 *   rotas que dependem de Request) e o formulário usa o Web3Forms.
 *
 * Para voltar a servir em uff-arthurmta.github.io/SiteOpcaoConsultoria, remova
 * o public/CNAME e rode com PAGES_BASE_PATH=/SiteOpcaoConsultoria.
 */
const isPages = process.env.GITHUB_PAGES === "true";
const basePath = isPages ? (process.env.PAGES_BASE_PATH ?? "") : "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Arquivos `*.server.js` (ex.: src/app/api/lead/route.server.js) só entram no
  // build com servidor; no export estático eles são ignorados.
  pageExtensions: isPages ? ["jsx", "js"] : ["server.js", "jsx", "js"],
  env: {
    // next/image não aplica o basePath sozinho — ver src/lib/asset.js
    NEXT_PUBLIC_BASE_PATH: basePath,
    NEXT_PUBLIC_STATIC_EXPORT: isPages ? "true" : "",
  },
  ...(isPages && {
    output: "export",
    basePath,
    images: { unoptimized: true },
  }),
};

export default nextConfig;
