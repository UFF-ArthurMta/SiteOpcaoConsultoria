import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import Container from "@/components/container";
import { BullMark } from "@/components/logo";

export default function NotFound() {
  return (
    <section className="py-24 sm:py-32">
      <Container className="flex flex-col items-center text-center">
        <BullMark variant="navy" className="w-24 opacity-25" />
        <p className="mt-6 text-6xl font-extrabold text-brand-navy">404</p>
        <h1 className="mt-2 text-2xl font-bold text-brand-navy">
          Página não encontrada
        </h1>
        <p className="mt-3 max-w-md text-brand-text">
          O endereço que você tentou acessar não existe ou foi movido.
        </p>
        <Link
          href="/"
          className={cn(buttonVariants({ variant: "cta", size: "lg" }), "mt-8")}
        >
          <ArrowLeft />
          Voltar para o início
        </Link>
      </Container>
    </section>
  );
}
