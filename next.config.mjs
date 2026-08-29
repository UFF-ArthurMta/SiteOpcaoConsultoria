/** @type {import('next').NextConfig} */
const nextConfig = {
  // Deploy na Vercel: usar o runtime completo do Next.js
  // (necessário para o route handler /api/lead e para a imagem OG dinâmica).
  // NÃO usar output: 'export' / basePath — isso quebra a integração de leads.
};

export default nextConfig;
