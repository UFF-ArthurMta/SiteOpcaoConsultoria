import Hero from "@/components/home/hero";
import ServicesOverview from "@/components/home/services-overview";
import Differentials from "@/components/home/differentials";
import Clients from "@/components/home/clients";
import Stats from "@/components/home/stats";
import Testimonials from "@/components/home/testimonials";
import CtaSection from "@/components/cta-section";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <Differentials />
      <Clients />
      <Stats />
      <Testimonials />
      <CtaSection />
    </>
  );
}
