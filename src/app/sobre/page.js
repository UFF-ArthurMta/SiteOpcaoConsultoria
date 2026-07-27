import Image from "next/image";
import { GraduationCap, BadgeCheck } from "lucide-react";
import Container from "@/components/container";
import PageHeader from "@/components/page-header";
import SectionHeading from "@/components/section-heading";
import CtaSection from "@/components/cta-section";
import { Card, CardContent } from "@/components/ui/card";
import { mvv, aboutStory, team, siteConfig } from "@/lib/site-data";

export const metadata = {
  title: "Sobre Nós",
  description:
    "Conheça a Opção Consultoria, Empresa Júnior de Economia da UFF: missão, visão, valores, história e o time por trás dos resultados.",
};

export default function SobrePage() {
  const pillars = [mvv.mission, mvv.vision, mvv.values];

  return (
    <>
      <PageHeader
        eyebrow="Sobre Nós"
        title="Economia aplicada ao seu negócio"
        subtitle="Somos a Empresa Júnior de Economia da UFF, movidos por gerar impacto real em empresas de Niterói e região."
      />

      {/* Missão, Visão e Valores */}
      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <Card
                  key={pillar.title}
                  className="h-full ring-border [--card-spacing:--spacing(6)]"
                >
                  <CardContent className="flex h-full flex-col">
                    <div className="flex size-12 items-center justify-center rounded-xl bg-brand-orange-50 text-brand-orange">
                      <Icon className="size-6" />
                    </div>
                    <h3 className="mt-5 text-xl font-bold text-brand-navy">
                      {pillar.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-brand-text">
                      {pillar.text}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </Container>
      </section>

      {/* História + vínculo UFF */}
      <section className="bg-brand-gray py-16 sm:py-24">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-brand-orange">
              Nossa história
            </span>
            <h2 className="mt-2 text-3xl font-bold text-brand-navy sm:text-4xl">
              Conhecimento da universidade, resultado no mercado
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
                Estudantes da Faculdade de Economia da Universidade Federal
                Fluminense, com supervisão acadêmica.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-6 ring-1 ring-border">
              <BadgeCheck className="size-9 text-brand-orange" />
              <h3 className="mt-4 text-lg font-bold text-brand-navy">
                Selo Empresa Júnior
              </h3>
              <p className="mt-2 text-sm text-brand-text">
                Parte do Movimento Empresa Júnior, com compromisso de qualidade,
                ética e desenvolvimento.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-6 ring-1 ring-border sm:col-span-2">
              <p className="text-sm text-brand-text">
                <span className="font-bold text-brand-navy">CNPJ:</span>{" "}
                {siteConfig.cnpj} · {siteConfig.address.line1},{" "}
                {siteConfig.address.city}/{siteConfig.address.state}
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Time / Diretoria */}
      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Nosso time"
            title="Quem faz a Opção acontecer"
            subtitle="Estudantes de Economia dedicados a transformar dados em decisões para a sua empresa."
          />

          <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-3">
            {team.map((member, i) => (
              <div key={i} className="text-center">
                <div className="mx-auto flex aspect-square w-full max-w-[220px] items-center justify-center overflow-hidden rounded-2xl bg-brand-gray ring-1 ring-border">
                  {member.photo ? (
                    <Image
                      src={member.photo}
                      alt={member.name}
                      width={220}
                      height={220}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <span className="text-4xl font-extrabold text-brand-navy/30">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .slice(0, 2)
                        .join("")}
                    </span>
                  )}
                </div>
                <h3 className="mt-4 text-base font-bold text-brand-navy">
                  {member.name}
                </h3>
                <p className="text-sm text-brand-orange">{member.role}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-xs text-brand-text/70">
            [PLACEHOLDER] Substitua nomes, cargos e fotos reais em{" "}
            <code>src/lib/site-data.js</code>.
          </p>
        </Container>
      </section>

      <CtaSection />
    </>
  );
}
