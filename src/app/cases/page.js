import { Target, Lightbulb, TrendingUp } from "lucide-react";
import Container from "@/components/container";
import PageHeader from "@/components/page-header";
import Testimonials from "@/components/home/testimonials";
import CtaSection from "@/components/cta-section";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cases } from "@/lib/site-data";

export const metadata = {
  title: "Cases e Resultados",
  description:
    "Resultados reais de consultoria econômica e financeira: desafios, soluções e impacto gerado em empresas atendidas pela Opção Consultoria.",
};

const blocks = [
  { key: "challenge", label: "Desafio", icon: Target },
  { key: "solution", label: "Solução", icon: Lightbulb },
  { key: "result", label: "Resultado", icon: TrendingUp },
];

export default function CasesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Cases e Resultados"
        title="Resultados que falam por nós"
        subtitle="Histórias de empresas que transformaram dados em decisões — e decisões em crescimento."
      />

      <section className="py-16 sm:py-24">
        <Container>
          <div className="space-y-8">
            {cases.map((item, i) => {
              const SectorIcon = item.icon;
              return (
                <Card
                  key={i}
                  className="ring-border [--card-spacing:--spacing(8)]"
                >
                  <CardContent>
                    <div className="flex flex-col gap-2 border-b border-border pb-5 sm:flex-row sm:items-center sm:justify-between">
                      <div className="flex items-center gap-3">
                        <span className="flex size-11 items-center justify-center rounded-xl bg-brand-navy text-white">
                          <SectorIcon className="size-5" />
                        </span>
                        <h2 className="text-xl font-bold text-brand-navy">
                          {item.sector}
                        </h2>
                      </div>
                      <Badge
                        variant="secondary"
                        className="w-fit bg-brand-orange-50 text-brand-orange"
                      >
                        Case de sucesso
                      </Badge>
                    </div>

                    <div className="mt-6 grid gap-6 md:grid-cols-3">
                      {blocks.map((block) => {
                        const Icon = block.icon;
                        return (
                          <div key={block.key}>
                            <div className="flex items-center gap-2 text-brand-orange">
                              <Icon className="size-5" />
                              <span className="text-sm font-semibold uppercase tracking-wider">
                                {block.label}
                              </span>
                            </div>
                            <p className="mt-3 text-sm leading-relaxed text-brand-text">
                              {item[block.key]}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <p className="mt-8 text-center text-xs text-brand-text/70">
            [PLACEHOLDER] Cases ilustrativos. Substitua por resultados reais
            (com números) em <code>src/lib/site-data.js</code>.
          </p>
        </Container>
      </section>

      <div className="bg-brand-gray">
        <Testimonials />
      </div>

      <CtaSection />
    </>
  );
}
