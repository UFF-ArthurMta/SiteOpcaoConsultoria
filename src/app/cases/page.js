import { Target, Lightbulb, TrendingUp, Check } from "lucide-react";
import Container from "@/components/container";
import PageHeader from "@/components/page-header";
import CtaSection from "@/components/cta-section";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cases } from "@/lib/site-data";

export const metadata = {
  title: "Cases e Resultados",
  description:
    "Cases da Opção Consultoria com Fiocruz, Estúdios Noah, Alva, Cáli Tecidos e Capriana: desafios, soluções e resultados.",
};

export default function CasesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Cases e Resultados"
        title="Resultados que falam por nós"
        subtitle="Projetos reais, da pesquisa biomédica ao varejo: como transformamos incerteza em decisão."
      />

      <section className="py-16 sm:py-24">
        <Container className="max-w-5xl">
          <div className="space-y-8">
            {cases.map((item) => {
              const Icon = item.icon;
              return (
                <Card
                  key={item.slug}
                  id={item.slug}
                  className="scroll-mt-24 ring-border [--card-spacing:--spacing(7)] sm:[--card-spacing:--spacing(9)]"
                >
                  <CardContent>
                    {/* Cabeçalho do case */}
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div className="flex items-start gap-4">
                        <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-brand-navy text-white">
                          <Icon className="size-6" />
                        </span>
                        <div>
                          <h2 className="text-2xl font-bold text-brand-navy">
                            {item.client}
                          </h2>
                          <p className="text-sm text-brand-text">{item.sector}</p>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2 sm:justify-end">
                        <Badge className="bg-brand-orange-50 text-brand-orange">
                          {item.project}
                        </Badge>
                        {item.year ? (
                          <Badge variant="outline" className="tabular-nums">
                            {item.year}
                          </Badge>
                        ) : null}
                      </div>
                    </div>

                    <p className="mt-5 max-w-3xl text-sm leading-relaxed text-brand-text">
                      {item.about}
                    </p>

                    <div className="mt-7 grid gap-6 border-t border-border pt-7 md:grid-cols-3">
                      <Block icon={Target} label="Desafio">
                        <p>{item.challenge}</p>
                      </Block>
                      <Block icon={Lightbulb} label="Solução">
                        <p>{item.solution}</p>
                      </Block>
                      <Block icon={TrendingUp} label="Resultados">
                        <ul className="space-y-2">
                          {item.results.map((r) => (
                            <li key={r} className="flex items-start gap-2">
                              <Check className="mt-0.5 size-4 shrink-0 text-brand-orange" />
                              <span>{r}</span>
                            </li>
                          ))}
                        </ul>
                      </Block>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </Container>
      </section>

      <CtaSection
        title="Sua empresa pode ser o próximo case"
        subtitle="Conte o seu desafio. Em até 24h um consultor entra em contato para entender o seu negócio."
      />
    </>
  );
}

function Block({ icon: Icon, label, children }) {
  return (
    <div>
      <div className="flex items-center gap-2 text-brand-orange">
        <Icon className="size-5" />
        <span className="text-sm font-semibold uppercase tracking-wider">
          {label}
        </span>
      </div>
      <div className="mt-3 text-sm leading-relaxed text-brand-text">{children}</div>
    </div>
  );
}
