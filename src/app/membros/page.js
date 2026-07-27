import Link from "next/link";
import { Construction, ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import Container from "@/components/container";
import { Badge } from "@/components/ui/badge";

export const metadata = {
  title: "Área de Membros",
  description: "A área de membros da Opção Consultoria está em construção.",
  robots: { index: false, follow: true },
};

export default function MembrosPage() {
  return (
    <section className="py-24 sm:py-32">
      <Container className="flex flex-col items-center text-center">
        <Badge className="bg-brand-orange-50 text-brand-orange">
          <Construction className="size-3.5" />
          Em construção
        </Badge>

        <span className="mt-8 flex size-20 items-center justify-center rounded-2xl bg-brand-gray text-brand-navy">
          <Construction className="size-10" />
        </span>

        <h1 className="mt-6 text-3xl font-extrabold text-brand-navy sm:text-4xl">
          Área de Membros em breve
        </h1>
        <p className="mt-4 max-w-md text-brand-text">
          Estamos preparando um espaço exclusivo para os membros da Opção
          Consultoria. Volte em breve para conferir as novidades.
        </p>

        <Link
          href="/"
          className={cn(buttonVariants({ variant: "outline", size: "lg" }), "mt-8")}
        >
          <ArrowLeft />
          Voltar para o início
        </Link>
      </Container>
    </section>
  );
}
