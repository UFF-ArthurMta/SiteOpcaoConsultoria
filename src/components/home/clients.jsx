import { Building2 } from "lucide-react";
import Container from "@/components/container";
import { clients } from "@/lib/site-data";

/**
 * "Quem confia" — grade de logos de clientes.
 * [PLACEHOLDER] As caixas abaixo simulam os logos. Troque por <img> reais
 * (coloque os arquivos em /public/images/clientes/).
 */
export default function Clients() {
  return (
    <section className="py-14 sm:py-16">
      <Container>
        <p className="text-center text-sm font-semibold uppercase tracking-wider text-brand-text">
          Empresas que já confiaram na Opção
        </p>
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {clients.map((client) => (
            <div
              key={client}
              className="flex h-20 items-center justify-center gap-2 rounded-xl bg-brand-gray px-4 text-brand-navy/50 grayscale transition hover:grayscale-0"
              title={`${client} (logo placeholder)`}
            >
              <Building2 className="size-5" />
              <span className="text-sm font-semibold">{client}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
