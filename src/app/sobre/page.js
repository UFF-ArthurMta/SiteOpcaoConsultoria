import { GraduationCap, BadgeCheck } from "lucide-react";
import Container from "@/components/container";
import PageHeader from "@/components/page-header";
import SectionHeading from "@/components/section-heading";
import CtaSection from "@/components/cta-section";
import { Card, CardContent } from "@/components/ui/card";
import {
  mission,
  vision,
  values,
  aboutStory,
  siteConfig,
  yearsSinceFounding,
} from "@/lib/site-data";

export const metadata = {
  title: "Sobre Nós",
  description:
    "Conheça a Opção Consultoria, empresa júnior de consultoria da UFF desde 1998: missão, visão, valores e história.",
};

export default function SobrePage() {
  return (
    <>
      <PageHeader
        eyebrow="Sobre Nós"
        title="A ponte entre a universidade e o mercado"
        subtitle={`Há ${yearsSinceFounding()} anos transformando formação acadêmica em projetos que geram valor real para empresas.`}
      />

      {/* Missão e Visão */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            {[mission, vision].map((pillar) => {
              const Icon = pillar.icon;
              return (
                <Card
                  key={pillar.title}
                  className="h-full ring-border [--card-spacing:--spacing(8)]"
                >
                  <CardContent className="flex h-full flex-col">
                    <div className="flex size-12 items-center justify-center rounded-xl bg-brand-navy text-white">
                      <Icon className="size-6" />
                    </div>
                    <h2 className="mt-5 text-2xl font-bold text-brand-navy">
                      {pillar.title}
                    </h2>
                    <p className="mt-3 text-base leading-relaxed text-brand-text">
                      {pillar.text}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Valores */}
      <section className="bg-brand-gray py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Nossos valores"
            title="O que guia cada projeto"
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="rounded-2xl bg-white p-6 ring-1 ring-border"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex size-10 items-center justify-center rounded-lg bg-brand-orange-50 text-brand-orange">
                      <Icon className="size-5" />
                    </span>
                    <h3 className="text-lg font-bold text-brand-navy">
                      {value.title}
                    </h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-brand-text">
                    {value.text}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* História + vínculo UFF */}
      <section className="py-16 sm:py-24">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-brand-orange">
              Nossa história
            </span>
            <h2 className="mt-2 text-3xl font-bold text-brand-navy sm:text-4xl">
              Desde 1998, conhecimento da universidade com resultado no mercado
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-brand-text">
              {aboutStory.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-brand-navy p-6 text-white">
              <GraduationCap className="size-9 text-brand-orange" />
              <h3 className="mt-4 text-lg font-bold">Vínculo com a UFF</h3>
              <p className="mt-2 text-sm text-white/80">
                Formada e gerida por estudantes da Universidade Federal
                Fluminense, no Campus do Gragoatá.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-6 ring-1 ring-border">
              <BadgeCheck className="size-9 text-brand-orange" />
              <h3 className="mt-4 text-lg font-bold text-brand-navy">
                Empresa Júnior
              </h3>
              <p className="mt-2 text-sm text-brand-text">
                Parte do Movimento Empresa Júnior, com compromisso de qualidade,
                ética e desenvolvimento.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-6 ring-1 ring-border sm:col-span-2">
              <dl className="grid gap-3 text-sm sm:grid-cols-3">
                <div>
                  <dt className="font-semibold text-brand-navy">Razão social</dt>
                  <dd className="text-brand-text">{siteConfig.legalName}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-brand-navy">CNPJ</dt>
                  <dd className="tabular-nums text-brand-text">{siteConfig.cnpj}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-brand-navy">Fundação</dt>
                  <dd className="text-brand-text">{siteConfig.foundedLabel}</dd>
                </div>
              </dl>
            </div>
          </div>
        </Container>
      </section>

      <CtaSection />
    </>
  );
}
