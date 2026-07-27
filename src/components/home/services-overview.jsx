import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/container";
import SectionHeading from "@/components/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { services } from "@/lib/site-data";

export default function ServicesOverview() {
  return (
    <section className="py-16 sm:py-24" id="servicos">
      <Container>
        <SectionHeading
          eyebrow="O que fazemos"
          title="Soluções para decidir com segurança"
          subtitle="Consultoria econômica e financeira sob medida para o momento da sua empresa."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.slug}
                className="group h-full ring-border transition-all [--card-spacing:--spacing(6)] hover:-translate-y-1 hover:ring-brand-orange/40 hover:shadow-lg"
              >
                <CardContent className="flex h-full flex-col">
                  <div className="flex size-12 items-center justify-center rounded-xl bg-brand-orange-50 text-brand-orange transition-colors group-hover:bg-brand-orange group-hover:text-white">
                    <Icon className="size-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-brand-navy">
                    {service.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-text">
                    {service.summary}
                  </p>
                  <Link
                    href={`/servicos#${service.slug}`}
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-navy transition-colors hover:text-brand-orange"
                  >
                    Saiba mais
                    <ArrowRight className="size-4" />
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
