import Link from "next/link";
import { ArrowRight, GraduationCap, MapPin, BadgeCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import Container from "@/components/container";
import { BullMark } from "@/components/logo";
import { hero, primaryCta } from "@/lib/site-data";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-navy text-white">
      {/* brilho de fundo + mascote decorativo */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-20 top-1/2 h-[36rem] w-[36rem] -translate-y-1/2 rounded-full bg-brand-orange/10 blur-3xl" />
        <div className="absolute -left-24 -top-24 h-96 w-96 rounded-full bg-brand-navy-700/40 blur-3xl" />
      </div>
      <BullMark
        variant="white"
        className="pointer-events-none absolute right-4 top-1/2 hidden w-[26rem] -translate-y-1/2 opacity-[0.06] lg:block"
      />

      <Container className="relative py-20 sm:py-28 lg:py-32">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm font-medium text-white/90">
            <BadgeCheck className="size-4 text-brand-orange" />
            {hero.eyebrow}
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            {hero.title}
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80 sm:text-xl">
            {hero.subtitle}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href={primaryCta.href}
              className={cn(buttonVariants({ variant: "cta", size: "xl" }))}
            >
              {primaryCta.label}
              <ArrowRight />
            </Link>
            <Link
              href="/servicos"
              className={cn(buttonVariants({ variant: "ctaOutline", size: "xl" }))}
            >
              Conheça os serviços
            </Link>
          </div>

          {/* indicadores de confiança */}
          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm text-white/70">
            <span className="inline-flex items-center gap-2">
              <GraduationCap className="size-5 text-brand-orange" />
              Vínculo com a UFF
            </span>
            <span className="inline-flex items-center gap-2">
              <BadgeCheck className="size-5 text-brand-orange" />
              Selo Empresa Júnior
            </span>
            <span className="inline-flex items-center gap-2">
              <MapPin className="size-5 text-brand-orange" />
              Niterói / RJ
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
