import Container from "@/components/container";
import { stats } from "@/lib/site-data";

/** Seção de números de impacto (valores placeholder em site-data.js). */
export default function Stats() {
  return (
    <section className="bg-brand-navy py-16 sm:py-20">
      <Container>
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl font-extrabold text-brand-orange sm:text-5xl">
                {stat.value}
                <span className="text-brand-orange">{stat.suffix}</span>
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
