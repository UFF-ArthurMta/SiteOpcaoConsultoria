"use client";

import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

const subscribe = () => () => {};

// false no servidor e na hidratação, true depois: o tema salvo só é conhecido
// no navegador, então o estado "ativo" só aparece após montar.
function useMounted() {
  return useSyncExternalStore(subscribe, () => true, () => false);
}

/**
 * Botão redondo do header (desktop). Os ícones trocam via CSS (`dark:`), então
 * o HTML é o mesmo no servidor e no cliente.
 */
export function ThemeToggle({ className }) {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      aria-label="Alternar entre modo claro e escuro"
      title="Modo claro / escuro"
      className={cn(
        "inline-flex size-9 items-center justify-center rounded-full text-heading/80 ring-1 ring-border transition-colors hover:bg-brand-gray hover:text-heading focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:outline-none",
        className
      )}
    >
      <Moon className="size-[18px] dark:hidden" />
      <Sun className="hidden size-[18px] dark:block" />
    </button>
  );
}

const OPTIONS = [
  { value: "light", label: "Claro", icon: Sun },
  { value: "dark", label: "Escuro", icon: Moon },
];

/** Seletor "Claro | Escuro" da base do menu mobile. */
export function ThemeSwitcher({ className }) {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useMounted();

  return (
    <div className={className}>
      <p className="mb-2 text-xs font-semibold tracking-wider text-brand-text uppercase">
        Aparência
      </p>
      <div
        role="radiogroup"
        aria-label="Tema do site"
        className="grid grid-cols-2 gap-1 rounded-xl bg-brand-gray p-1 ring-1 ring-border"
      >
        {OPTIONS.map(({ value, label, icon: Icon }) => {
          const active = mounted && resolvedTheme === value;
          return (
            <button
              key={value}
              type="button"
              role="radio"
              aria-checked={active}
              onClick={() => setTheme(value)}
              className={cn(
                "flex items-center justify-center gap-2 rounded-lg py-2.5 text-sm font-medium transition-colors",
                active
                  ? "bg-card text-heading shadow-sm ring-1 ring-border"
                  : "text-brand-text hover:text-heading"
              )}
            >
              <Icon className="size-4" />
              {label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
