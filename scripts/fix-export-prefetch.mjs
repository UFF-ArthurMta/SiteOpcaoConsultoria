/**
 * Pós-build do export estático (GitHub Pages).
 *
 * O Next 16 grava os payloads de prefetch como `rota/__next.rota/__PAGE__.txt`,
 * mas o cliente os busca em `rota/__next.rota.__PAGE__.txt`. Sem este passo,
 * cada prefetch dá 404 e a navegação cai para recarregar a página inteira.
 * Aqui criamos uma cópia de cada arquivo no caminho que o cliente pede.
 */
import fs from "node:fs";
import path from "node:path";

const outDir = path.resolve("out");
let copied = 0;

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    const full = path.join(dir, entry.name);
    if (entry.name.startsWith("__next.")) {
      flatten(full, dir, entry.name);
    } else {
      walk(full);
    }
  }
}

// `parent/__next.x/a/b.txt` → `parent/__next.x.a.b.txt`
function flatten(srcDir, parent, prefix) {
  for (const entry of fs.readdirSync(srcDir, { withFileTypes: true })) {
    const src = path.join(srcDir, entry.name);
    const name = `${prefix}.${entry.name}`;
    if (entry.isDirectory()) {
      flatten(src, parent, name);
    } else {
      const dest = path.join(parent, name);
      if (!fs.existsSync(dest)) {
        fs.copyFileSync(src, dest);
        copied++;
      }
    }
  }
}

if (!fs.existsSync(outDir)) {
  console.error("fix-export-prefetch: pasta out/ não encontrada — rode o build antes.");
  process.exit(1);
}
walk(outDir);
console.log(`fix-export-prefetch: ${copied} arquivo(s) de prefetch ajustado(s).`);
