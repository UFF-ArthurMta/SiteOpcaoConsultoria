/**
 * Prefixa caminhos de arquivos de /public com o basePath do build.
 * Necessário para o next/image: ele NÃO aplica o basePath automaticamente,
 * e no GitHub Pages o site mora em /SiteOpcaoConsultoria.
 */
export function asset(path) {
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
}
