import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/container";
import SectionHeading from "@/components/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { serviceAreas, servicesByArea } from "@/lib/site-data";

export default function ServicesOverview() {
  return (
    <section className="py-16 sm:py-24" id="servicos">
      <Container>
        <SectionHeading
          eyebrow="O que fazemos"
          title="Soluções para decidir com segurança"
          subtitle="Sete serviços em três áreas de atuação, sempre ajustados ao momento da sua empresa."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {serviceAreas.map((area) => {
            const Icon = area.icon;
            return (
              <Card
                key={area.slug}
                className="h-full ring-border transition-shadow [--card-spacing:--spacing(6)] hover:shadow-lg"
              >
                <CardContent className="flex h-full flex-col">
                  <div className="flex size-12 items-center justify-center rounded-xl bg-brand-navy dark:bg-white/10 text-white">
                    <Icon className="size-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-heading">
                    {area.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-brand-text">
                    {area.summary}
                  </p>

                  <ul className="mt-5 flex flex-1 flex-col gap-1 border-t border-border pt-4">
                    {servicesByArea(area.slug).map((service) => {
                      const ServiceIcon = service.icon;
                      return (
                        <li key={service.slug}>
                          <Link
                            href={`/servicos#${service.slug}`}
                            className="group flex items-center gap-3 rounded-lg px-2 py-2 text-sm font-medium text-heading transition-colors hover:bg-brand-gray"
                          >
                            <ServiceIcon className="size-4 shrink-0 text-brand-orange" />
                            <span className="flex-1">{service.title}</span>
                            <ArrowRight className="size-4 text-heading/30 transition-transform group-hover:translate-x-0.5 group-hover:text-brand-orange" />
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
