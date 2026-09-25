/**
 * Prefixa caminhos de arquivos de /public com o basePath do build.
 * Necessário para o next/image: ele NÃO aplica o basePath automaticamente,
 * caso o site seja servido num subcaminho (ex.: PAGES_BASE_PATH=/SiteOpcaoConsultoria).
 */
export function asset(path) {
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
}
