import Container from "@/components/container";
import { clients } from "@/lib/site-data";

/** "Quem confia" — nomes dos clientes com case publicado. */
export default function Clients() {
  return (
    <section className="border-y border-border py-12 sm:py-14">
      <Container>
        <p className="text-center text-sm font-semibold uppercase tracking-wider text-brand-text">
          Empresas e instituições que já confiaram na Opção
        </p>
        <ul className="mt-7 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 sm:gap-x-14">
          {clients.map((client) => (
            <li
              key={client}
              className="font-heading text-xl font-bold tracking-tight text-heading/60 sm:text-2xl"
            >
              {client}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
