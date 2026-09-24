"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes";

// Cor da barra do navegador no celular (igual ao fundo do header em cada tema).
const THEME_COLOR = { light: "#ffffff", dark: "#080f3f" };

/**
 * Tema claro/escuro do site. O next-themes grava a escolha no localStorage e
 * aplica a classe `.dark` no <html> antes da pintura (sem "piscar" o tema).
 */
export default function ThemeProvider({ children }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="light"
      enableSystem={false}
      storageKey="opcao-theme"
      disableTransitionOnChange
    >
      <ThemeColorSync />
      {children}
    </NextThemesProvider>
  );
}

function ThemeColorSync() {
  const { resolvedTheme } = useTheme();
  const pathname = usePathname();

  useEffect(() => {
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", THEME_COLOR[resolvedTheme] ?? THEME_COLOR.light);
  }, [resolvedTheme, pathname]);

  return null;
}
