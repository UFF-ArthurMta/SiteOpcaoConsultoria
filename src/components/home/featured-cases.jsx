import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import Container from "@/components/container";
import SectionHeading from "@/components/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { cases } from "@/lib/site-data";

/** Destaques do portfólio na Home (os 3 primeiros cases). */
export default function FeaturedCases() {
  const featured = cases.slice(0, 3);

  return (
    <section className="py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Cases de sucesso"
          title="Resultados que falam por nós"
          subtitle="Da pesquisa biomédica ao varejo de moda: projetos reais, desenhados para cada negócio."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {featured.map((item) => {
            const Icon = item.icon;
            return (
              <Card
                key={item.slug}
                className="h-full ring-border [--card-spacing:--spacing(6)]"
              >
                <CardContent className="flex h-full flex-col">
                  <div className="flex items-center gap-3">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-orange-50 text-brand-orange">
                      <Icon className="size-5" />
                    </span>
                    <div>
                      <h3 className="text-lg font-bold leading-tight text-heading">
                        {item.client}
                      </h3>
                      <p className="text-xs font-medium text-brand-orange">
                        {item.project}
                      </p>
                    </div>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-brand-text">
                    {item.challenge}
                  </p>

                  <ul className="mt-4 flex flex-1 flex-col gap-2">
                    {item.results.slice(0, 2).map((r) => (
                      <li key={r} className="flex items-start gap-2 text-sm text-heading">
                        <Check className="mt-0.5 size-4 shrink-0 text-brand-orange" />
                        {r}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={`/cases#${item.slug}`}
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-heading transition-colors hover:text-brand-orange"
                  >
                    Ver o case completo
                    <ArrowRight className="size-4" />
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/cases"
            className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
          >
            Ver todos os cases
            <ArrowRight />
          </Link>
        </div>
      </Container>
    </section>
  );
}
