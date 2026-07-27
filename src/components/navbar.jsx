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
} from "@/components/ui/sheet";
import Container from "@/components/container";
import { Logo } from "@/components/logo";
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
    <header
      className={cn(
        "sticky top-0 z-40 w-full border-b transition-all",
        scrolled
          ? "border-border bg-white/90 backdrop-blur-md shadow-sm"
          : "border-transparent bg-white"
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link href="/" aria-label="Ir para a página inicial" className="shrink-0">
          <Logo variant="navy" priority className="h-9 sm:h-10" />
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
                  : "text-brand-navy/80 hover:text-brand-navy hover:bg-brand-gray"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
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
              <Menu className="size-6 text-brand-navy" />
            </SheetTrigger>
            <SheetContent side="right" className="w-72 gap-0">
              <SheetHeader className="border-b">
                <SheetTitle>
                  <Logo variant="navy" />
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
                        : "text-brand-navy hover:bg-brand-gray"
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
            </SheetContent>
          </Sheet>
        </div>
      </Container>
    </header>
  );
}
