"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants, Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
  SheetFooter,
} from "@/components/ui/sheet";
import Container from "@/components/container";
import { Logo } from "@/components/logo";
import { ThemeToggle, ThemeSwitcher } from "@/components/theme-toggle";
import { navLinks, primaryCta } from "@/lib/site-data";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    // Fundo sólido + faixa da mesma cor acima do header: no Safari do iPhone
    // (iOS 26) a barra de endereço é transparente e o conteúdo rolado
    // aparecia no vão entre o topo da tela e o header.
    <header
      className={cn(
        "sticky top-0 z-40 w-full border-b bg-background transition-[border-color,box-shadow]",
        "before:pointer-events-none before:absolute before:inset-x-0 before:bottom-full before:h-screen before:bg-background",
        scrolled ? "border-border shadow-sm" : "border-transparent"
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link href="/" aria-label="Ir para a página inicial" className="shrink-0">
          <Logo variant="auto" priority className="h-9 sm:h-10" />
        </Link>

        {/* Navegação desktop */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navegação principal">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                isActive(link.href)
                  ? "text-brand-orange"
                  : "text-heading/80 hover:text-heading hover:bg-brand-gray"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <Link
            href={primaryCta.href}
            className={cn(buttonVariants({ variant: "cta", size: "lg" }))}
          >
            {primaryCta.label}
          </Link>
        </div>

        {/* Menu mobile */}
        <div className="lg:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              render={
                <Button variant="ghost" size="icon" aria-label="Abrir menu" />
              }
            >
              <Menu className="size-6 text-heading" />
            </SheetTrigger>
            <SheetContent side="right" className="w-72 gap-0">
              <SheetHeader className="border-b">
                <SheetTitle>
                  <Logo variant="auto" />
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-1 p-4" aria-label="Navegação mobile">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "rounded-md px-3 py-3 text-base font-medium transition-colors",
                      isActive(link.href)
                        ? "bg-brand-orange-50 text-brand-orange"
                        : "text-heading hover:bg-brand-gray"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href={primaryCta.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    buttonVariants({ variant: "cta", size: "xl" }),
                    "mt-3 w-full"
                  )}
                >
                  {primaryCta.label}
                </Link>
              </nav>
              <SheetFooter className="border-t">
                <ThemeSwitcher />
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </Container>
    </header>
  );
}
