import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { BullMark } from "@/components/logo";
import Container from "@/components/container";
import { primaryCta } from "@/lib/site-data";

/** Bloco azul de chamada final para ação, reutilizável em várias páginas. */
export default function CtaSection({
  title = "Pronto para tomar decisões com base em dados?",
  subtitle = "Solicite um diagnóstico gratuito. Em até 24h um consultor entra em contato para entender o seu negócio.",
  ctaLabel = primaryCta.label,
  ctaHref = primaryCta.href,
  className,
}) {
  return (
    <section className={cn("py-16 sm:py-20", className)}>
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-brand-navy px-6 py-14 text-center shadow-xl sm:px-12">
          {/* mascote decorativo */}
          <BullMark
            variant="white"
            className="pointer-events-none absolute -right-6 -top-8 w-44 opacity-[0.07]"
          />
          <BullMark
            variant="white"
            className="pointer-events-none absolute -bottom-12 -left-8 w-40 opacity-[0.07]"
          />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">{title}</h2>
            <p className="mt-4 text-lg text-white/80">{subtitle}</p>
            <div className="mt-8 flex justify-center">
              <Link
                href={ctaHref}
                className={cn(buttonVariants({ variant: "cta", size: "xl" }))}
              >
                {ctaLabel}
                <ArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
