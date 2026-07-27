import Link from "next/link";
import { Check, ArrowRight, Users } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import Container from "@/components/container";
import PageHeader from "@/components/page-header";
import CtaSection from "@/components/cta-section";
import { services } from "@/lib/site-data";

export const metadata = {
  title: "Serviços",
  description:
    "Planejamento financeiro, viabilidade econômica, gestão de custos, pesquisa de mercado e planejamento estratégico para PMEs de Niterói.",
};

export default function ServicosPage() {
  return (
    <>
      <PageHeader
        eyebrow="Serviços"
        title="Soluções econômicas e financeiras"
        subtitle="Cada projeto começa com um diagnóstico e termina com um plano de ação prático para a sua empresa."
      />

      {/* Índice rápido */}
      <section className="border-b border-border bg-brand-gray py-6">
        <Container>
          <ul className="flex flex-wrap justify-center gap-2">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`#${service.slug}`}
                  className="inline-flex items-center rounded-full bg-white px-4 py-2 text-sm font-medium text-brand-navy ring-1 ring-border transition-colors hover:bg-brand-navy hover:text-white"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Detalhe de cada serviço */}
      <div className="divide-y divide-border">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <section
              key={service.slug}
              id={service.slug}
              className="scroll-mt-20 py-16 sm:py-20"
            >
              <Container>
                <div
                  className={cn(
                    "grid gap-10 lg:grid-cols-2 lg:items-center",
                    index % 2 === 1 && "lg:[&>*:first-child]:order-2"
                  )}
                >
                  {/* Texto */}
                  <div>
                    <div className="flex size-14 items-center justify-center rounded-2xl bg-brand-orange-50 text-brand-orange">
                      <Icon className="size-7" />
                    </div>
                    <h2 className="mt-5 text-2xl font-bold text-brand-navy sm:text-3xl">
                      {service.title}
                    </h2>
                    <p className="mt-4 text-base leading-relaxed text-brand-text">
                      {service.description}
                    </p>
                    <div className="mt-5 flex items-start gap-3 rounded-xl bg-brand-gray p-4">
                      <Users className="mt-0.5 size-5 shrink-0 text-brand-navy" />
                      <p className="text-sm text-brand-text">
                        <span className="font-semibold text-brand-navy">
                          Para quem serve:{" "}
                        </span>
                        {service.forWhom}
                      </p>
                    </div>
                    <Link
                      href="/contato"
                      className={cn(
                        buttonVariants({ variant: "cta", size: "lg" }),
                        "mt-6"
                      )}
                    >
                      Fale com um Consultor
                      <ArrowRight />
                    </Link>
                  </div>

                  {/* Entregáveis */}
                  <div className="rounded-2xl bg-brand-navy p-7 text-white sm:p-9">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-orange">
                      O que entregamos
                    </h3>
                    <ul className="mt-5 space-y-4">
                      {service.deliverables.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-brand-orange">
                            <Check className="size-4 text-white" />
                          </span>
                          <span className="text-white/90">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Container>
            </section>
          );
        })}
      </div>

      <CtaSection
        title="Não sabe por onde começar?"
        subtitle="Faça um diagnóstico gratuito e descubra qual serviço faz mais sentido para o seu momento."
      />
    </>
  );
}
