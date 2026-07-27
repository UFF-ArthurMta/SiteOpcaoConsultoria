import Image from "next/image";
import { cn } from "@/lib/utils";

const LOGO_SRC = {
  navy: "/logo-navy.png",
  white: "/logo-white.png",
};

const BULL_SRC = {
  navy: "/bull-navy.png",
  white: "/bull-white.png",
};

/**
 * Logo oficial da Opção Consultoria (símbolo + wordmark).
 * @param {"navy"|"white"} variant — navy para fundos claros, white para escuros
 */
export function Logo({ variant = "navy", className, priority = false }) {
  return (
    <Image
      src={LOGO_SRC[variant] ?? LOGO_SRC.navy}
      alt="Opção Consultoria"
      width={15681}
      height={5125}
      priority={priority}
      sizes="240px"
      className={cn("h-10 w-auto", className)}
    />
  );
}

/**
 * Mascote (touro) — uso decorativo. É uma imagem, então o tamanho é controlado
 * por largura (w-*) e a transparência por opacity-* (não use text-color/size-*).
 * @param {"navy"|"white"} variant
 */
export function BullMark({ variant = "navy", className }) {
  return (
    <Image
      src={BULL_SRC[variant] ?? BULL_SRC.navy}
      alt=""
      aria-hidden="true"
      width={2616}
      height={2314}
      sizes="500px"
      className={cn("h-auto", className)}
    />
  );
}
