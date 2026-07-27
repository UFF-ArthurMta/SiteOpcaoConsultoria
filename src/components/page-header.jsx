import Container from "@/components/container";
import { BullMark } from "@/components/logo";

/** Cabeçalho padrão (faixa azul) das páginas internas. */
export default function PageHeader({ eyebrow, title, subtitle }) {
  return (
    <section className="relative overflow-hidden bg-brand-navy text-white">
      <div className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-full bg-brand-orange/10 blur-3xl" />
      <BullMark
        variant="white"
        className="pointer-events-none absolute -bottom-14 right-6 hidden w-60 opacity-[0.07] sm:block"
      />
      <Container className="relative py-16 sm:py-20">
        {eyebrow ? (
          <span className="text-sm font-semibold uppercase tracking-wider text-brand-orange">
            {eyebrow}
          </span>
        ) : null}
        <h1 className="mt-2 text-4xl font-extrabold tracking-tight sm:text-5xl">
          {title}
        </h1>
        {subtitle ? (
          <p className="mt-4 max-w-2xl text-lg text-white/80">{subtitle}</p>
        ) : null}
      </Container>
    </section>
  );
}
