import { cn } from "@/lib/utils";

/**
 * Cabeçalho padronizado de seção: eyebrow (rótulo), título e subtítulo.
 * @param {"light"|"dark"} tone — "dark" para uso sobre fundos escuros (navy)
 */
export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  tone = "light",
  className,
}) {
  const isDark = tone === "dark";
  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        align === "center" && "items-center text-center",
        align === "center" && "mx-auto max-w-2xl",
        className
      )}
    >
      {eyebrow ? (
        <span
          className={cn(
            "text-sm font-semibold uppercase tracking-wider",
            isDark ? "text-brand-orange" : "text-brand-orange"
          )}
        >
          {eyebrow}
        </span>
      ) : null}
      <h2
        className={cn(
          "text-3xl font-bold sm:text-4xl",
          isDark ? "text-white" : "text-brand-navy"
        )}
      >
        {title}
      </h2>
      {subtitle ? (
        <p
          className={cn(
            "text-base leading-relaxed sm:text-lg",
            isDark ? "text-white/80" : "text-brand-text"
          )}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
