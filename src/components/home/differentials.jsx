import Container from "@/components/container";
import SectionHeading from "@/components/section-heading";
import { differentials } from "@/lib/site-data";

export default function Differentials() {
  return (
    <section className="bg-brand-gray py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Por que a Opção"
          title="Consultoria de alto nível, com a cara da sua empresa"
          subtitle="Unimos rigor técnico da universidade com proximidade e preço justo."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {differentials.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="rounded-2xl bg-white p-6 ring-1 ring-border"
              >
                <div className="flex size-12 items-center justify-center rounded-xl bg-brand-navy text-white">
                  <Icon className="size-6" />
                </div>
                <h3 className="mt-5 text-base font-bold text-brand-navy">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-text">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
