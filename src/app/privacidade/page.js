import Container from "@/components/container";
import PageHeader from "@/components/page-header";
import { siteConfig } from "@/lib/site-data";

export const metadata = {
  title: "Política de Privacidade",
  description:
    "Política de Privacidade da Opção Consultoria — como coletamos, usamos e protegemos seus dados, em conformidade com a LGPD.",
};

/**
 * [PLACEHOLDER] Modelo de Política de Privacidade.
 * Revise com apoio jurídico antes de publicar oficialmente.
 */
export default function PrivacidadePage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Política de Privacidade"
        subtitle="Como tratamos seus dados, em conformidade com a Lei Geral de Proteção de Dados (LGPD)."
      />

      <section className="py-16 sm:py-20">
        <Container className="max-w-3xl">
          <div className="prose-opcao space-y-8 text-brand-text">
            <p className="rounded-xl bg-brand-orange-50 p-4 text-sm text-brand-orange-600">
              [PLACEHOLDER] Este é um modelo inicial. Revise o conteúdo com apoio
              jurídico antes da publicação oficial.
            </p>

            <Block title="1. Quem somos">
              A {siteConfig.name} é a Empresa Júnior de Economia da Universidade
              Federal Fluminense (UFF), inscrita no CNPJ {siteConfig.cnpj}, com
              sede em {siteConfig.address.line1}, {siteConfig.address.city}/
              {siteConfig.address.state}.
            </Block>

            <Block title="2. Dados que coletamos">
              Coletamos os dados que você nos fornece voluntariamente pelo
              formulário de contato: nome completo, e-mail, telefone, nome da
              empresa e a descrição do desafio do seu negócio. Também podemos
              coletar dados de navegação por meio de cookies.
            </Block>

            <Block title="3. Como usamos seus dados">
              Utilizamos seus dados exclusivamente para responder à sua
              solicitação, realizar o primeiro contato comercial e, quando
              autorizado, enviar comunicações sobre nossos serviços. Não vendemos
              seus dados a terceiros.
            </Block>

            <Block title="4. Compartilhamento">
              Seus dados podem ser processados em ferramentas da Microsoft (Power
              Automate e Excel Online) utilizadas para a gestão dos contatos
              recebidos, sempre com medidas adequadas de segurança.
            </Block>

            <Block title="5. Cookies">
              Utilizamos cookies para melhorar a experiência de navegação e
              analisar o uso do site. Você pode gerenciar os cookies nas
              configurações do seu navegador.
            </Block>

            <Block title="6. Seus direitos (LGPD)">
              Você pode solicitar a qualquer momento o acesso, a correção, a
              portabilidade ou a exclusão dos seus dados, bem como revogar o
              consentimento. Para isso, entre em contato pelo e-mail{" "}
              <a
                href={`mailto:${siteConfig.email}`}
                className="font-medium text-brand-navy underline hover:text-brand-orange"
              >
                {siteConfig.email}
              </a>
              .
            </Block>

            <Block title="7. Contato">
              Em caso de dúvidas sobre esta política ou sobre o tratamento dos
              seus dados, fale conosco pelo e-mail {siteConfig.email}.
            </Block>

            <p className="text-sm text-brand-text/70">
              Última atualização: [PLACEHOLDER — inserir data].
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}

function Block({ title, children }) {
  return (
    <div>
      <h2 className="text-xl font-bold text-brand-navy">{title}</h2>
      <p className="mt-3 leading-relaxed">{children}</p>
    </div>
  );
}
