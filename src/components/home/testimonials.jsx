import { Quote } from "lucide-react";
import Container from "@/components/container";
import SectionHeading from "@/components/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { testimonials } from "@/lib/site-data";

export default function Testimonials() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Depoimentos"
          title="O que dizem nossos clientes"
          subtitle="Resultados que vão além dos números — confiança e parceria de longo prazo."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((item, i) => (
            <Card
              key={i}
              className="h-full ring-border [--card-spacing:--spacing(6)]"
            >
              <CardContent className="flex h-full flex-col">
                <Quote className="size-8 text-brand-orange/30" />
                <p className="mt-4 flex-1 text-base leading-relaxed text-brand-text">
                  “{item.quote}”
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="flex size-11 items-center justify-center rounded-full bg-brand-navy text-sm font-bold text-white">
                    {item.name
                      .split(" ")
                      .map((n) => n[0])
                      .slice(0, 2)
                      .join("")}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-brand-navy">{item.name}</p>
                    <p className="text-xs text-brand-text">
                      {item.role} · {item.company}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
