import Link from "next/link";
import { Check, ArrowRight, Users } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import Container from "@/components/container";
import PageHeader from "@/components/page-header";
import CtaSection from "@/components/cta-section";
import { serviceAreas, servicesByArea } from "@/lib/site-data";

export const metadata = {
  title: "Serviços",
  description:
    "Precificação, pesquisa de mercado, planejamento financeiro, viabilidade econômica, planejamento estratégico, plano de negócios e manuais estratégicos.",
};

export default function ServicosPage() {
  return (
    <>
      <PageHeader
        eyebrow="Serviços"
        title="Portfólio de serviços"
        subtitle="Cada projeto começa entendendo a causa do problema e termina com entregas claras e aplicáveis ao seu negócio."
      />

      {/* Índice rápido por área */}
      <section className="border-b border-border bg-brand-gray py-8">
        <Container className="grid gap-6 md:grid-cols-3">
          {serviceAreas.map((area) => (
            <div key={area.slug}>
              <Link
                href={`#${area.slug}`}
                className="text-xs font-semibold uppercase tracking-wider text-brand-orange hover:underline"
              >
                {area.title}
              </Link>
              <ul className="mt-2 flex flex-wrap gap-2">
                {servicesByArea(area.slug).map((service) => (
                  <li key={service.slug}>
                    <Link
                      href={`#${service.slug}`}
                      className="inline-flex items-center rounded-full bg-card px-3.5 py-1.5 text-sm font-medium text-heading ring-1 ring-border transition-colors hover:bg-brand-navy hover:text-white"
                    >
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </Container>
      </section>

      {serviceAreas.map((area) => {
        const AreaIcon = area.icon;
        const areaServices = servicesByArea(area.slug);
        return (
          <div key={area.slug} id={area.slug} className="scroll-mt-20">
            {/* Cabeçalho da área */}
            <div className="bg-brand-navy">
              <Container className="flex items-center gap-4 py-7">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-white/10 text-brand-orange">
                  <AreaIcon className="size-6" />
                </span>
                <div>
                  <h2 className="text-xl font-bold text-white sm:text-2xl">
                    {area.title}
                  </h2>
                  <p className="text-sm text-white/70">{area.summary}</p>
                </div>
              </Container>
            </div>

            <div className="divide-y divide-border">
              {areaServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <section
                    key={service.slug}
                    id={service.slug}
                    className="scroll-mt-20 py-14 sm:py-16"
                  >
                    <Container>
                      <div
                        className={cn(
                          "grid gap-10 lg:grid-cols-2 lg:items-center",
                          index % 2 === 1 && "lg:[&>*:first-child]:order-2"
                        )}
                      >
                        <div>
                          <div className="flex size-14 items-center justify-center rounded-2xl bg-brand-orange-50 text-brand-orange">
                            <Icon className="size-7" />
                          </div>
                          <h3 className="mt-5 text-2xl font-bold text-heading sm:text-3xl">
                            {service.title}
                          </h3>
                          <p className="mt-4 text-base leading-relaxed text-brand-text">
                            {service.description}
                          </p>
                          <div className="mt-5 flex items-start gap-3 rounded-xl bg-brand-gray p-4">
                            <Users className="mt-0.5 size-5 shrink-0 text-heading" />
                            <p className="text-sm text-brand-text">
                              <span className="font-semibold text-heading">
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

                        <div className="rounded-2xl bg-brand-gray p-7 ring-1 ring-border sm:p-9">
                          <h4 className="text-sm font-semibold uppercase tracking-wider text-brand-orange">
                            O que entregamos
                          </h4>
                          <ul className="mt-5 space-y-4">
                            {service.deliverables.map((item) => (
                              <li key={item} className="flex items-start gap-3">
                                <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-brand-navy dark:bg-white/10">
                                  <Check className="size-4 text-white" />
                                </span>
                                <span className="text-heading">{item}</span>
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
          </div>
        );
      })}

      <CtaSection
        title="Não sabe por onde começar?"
        subtitle="Faça um diagnóstico gratuito e descubra qual serviço faz mais sentido para o seu momento."
      />
    </>
  );
}
