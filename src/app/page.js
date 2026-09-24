import Hero from "@/components/home/hero";
import Clients from "@/components/home/clients";
import ServicesOverview from "@/components/home/services-overview";
import Differentials from "@/components/home/differentials";
import Stats from "@/components/home/stats";
import FeaturedCases from "@/components/home/featured-cases";
import CtaSection from "@/components/cta-section";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Clients />
      <ServicesOverview />
      <Differentials />
      <Stats />
      <FeaturedCases />
      <CtaSection />
    </>
  );
}
