import Container from "@/components/container";
import {
  cases,
  serviceAreas,
  services,
  yearsSinceFounding,
} from "@/lib/site-data";

/** Números de impacto — todos derivados de dados reais do site. */
export default function Stats() {
  const stats = [
    { value: yearsSinceFounding(), label: "Anos de história (desde 1998)" },
    { value: services.length, label: "Soluções de consultoria" },
    { value: serviceAreas.length, label: "Áreas de atuação" },
    { value: cases.length, label: "Cases publicados" },
  ];

  return (
    <section className="bg-brand-navy py-16 sm:py-20">
      <Container>
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl font-extrabold tabular-nums text-brand-orange sm:text-5xl">
                {stat.value}
              </div>
              <p className="mt-2 text-sm font-medium text-white/80 sm:text-base">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
