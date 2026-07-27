import { Mail, Phone, MapPin, Clock, MessageCircle } from "lucide-react";
import Container from "@/components/container";
import PageHeader from "@/components/page-header";
import ContactForm from "@/components/contact-form";
import { siteConfig } from "@/lib/site-data";

export const metadata = {
  title: "Contato e Diagnóstico Gratuito",
  description:
    "Solicite um diagnóstico gratuito com a Opção Consultoria. Preencha o formulário e nossa equipe entra em contato em até 24 horas.",
};

export default function ContatoPage() {
  const { address } = siteConfig;

  const infos = [
    {
      icon: Mail,
      label: "E-mail",
      value: siteConfig.email,
      href: `mailto:${siteConfig.email}`,
    },
    {
      icon: Phone,
      label: "Telefone",
      value: siteConfig.phone,
      href: `tel:${siteConfig.phone.replace(/[^\d+]/g, "")}`,
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "Fale conosco",
      href: `https://wa.me/${siteConfig.whatsapp}`,
    },
    {
      icon: MapPin,
      label: "Endereço",
      value: `${address.line1}, ${address.city}/${address.state}`,
    },
  ];

  return (
    <>
      <PageHeader
        eyebrow="Contato"
        title="Solicite um diagnóstico gratuito"
        subtitle="Conte para a gente o desafio da sua empresa. O primeiro passo é uma conversa — sem compromisso."
      />

      <section className="py-16 sm:py-24">
        <Container className="grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-14">
          {/* Coluna de informações */}
          <div>
            <h2 className="text-2xl font-bold text-brand-navy">
              Vamos conversar sobre o seu negócio
            </h2>
            <p className="mt-3 text-brand-text">
              Atendemos micro, pequenas e médias empresas de Niterói e região.
              Responda o formulário e retornamos em até 24h.
            </p>

            <ul className="mt-8 space-y-5">
              {infos.map((info) => {
                const Icon = info.icon;
                const content = (
                  <div className="flex items-start gap-4">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-orange-50 text-brand-orange">
                      <Icon className="size-5" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-brand-navy">
                        {info.label}
                      </p>
                      <p className="text-sm text-brand-text">{info.value}</p>
                    </div>
                  </div>
                );
                return (
                  <li key={info.label}>
                    {info.href ? (
                      <a
                        href={info.href}
                        target={info.href.startsWith("http") ? "_blank" : undefined}
                        rel={
                          info.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="transition-opacity hover:opacity-80"
                      >
                        {content}
                      </a>
                    ) : (
                      content
                    )}
                  </li>
                );
              })}
            </ul>

            <div className="mt-8 flex items-start gap-4 rounded-2xl bg-brand-gray p-5">
              <Clock className="mt-0.5 size-5 shrink-0 text-brand-navy" />
              <div className="text-sm text-brand-text">
                <p className="font-semibold text-brand-navy">
                  Resposta em até 24 horas
                </p>
                <p>Atendimento de segunda a sexta, em horário comercial.</p>
              </div>
            </div>
          </div>

          {/* Coluna do formulário */}
          <div>
            <ContactForm />
          </div>
        </Container>
      </section>
    </>
  );
}
