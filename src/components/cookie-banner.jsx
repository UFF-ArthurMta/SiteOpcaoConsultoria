"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Cookie } from "lucide-react";
import { Button } from "@/components/ui/button";

const STORAGE_KEY = "opcao-cookie-consent";

/** Banner de consentimento de cookies (LGPD). */
export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
    } catch {
      // localStorage indisponível — não bloqueia o site
    }
  }, []);

  const decide = (value) => {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {
      /* ignore */
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Aviso de cookies"
      className="fixed inset-x-3 bottom-3 z-50 mx-auto max-w-3xl rounded-2xl border border-border bg-white p-4 shadow-xl sm:p-5"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="flex items-start gap-3">
          <Cookie className="mt-0.5 size-6 shrink-0 text-brand-orange" />
          <p className="text-sm leading-relaxed text-brand-text">
            Usamos cookies para melhorar sua experiência e analisar o tráfego do
            site. Ao continuar, você concorda com a nossa{" "}
            <Link
              href="/privacidade"
              className="font-medium text-brand-navy underline underline-offset-2 hover:text-brand-orange"
            >
              Política de Privacidade
            </Link>
            .
          </p>
        </div>
        <div className="flex shrink-0 gap-2 sm:ml-auto">
          <Button
            variant="outline"
            size="lg"
            onClick={() => decide("rejected")}
            className="flex-1 sm:flex-none"
          >
            Recusar
          </Button>
          <Button
            size="lg"
            onClick={() => decide("accepted")}
            className="flex-1 bg-brand-navy text-white hover:bg-brand-navy-700 sm:flex-none"
          >
            Aceitar
          </Button>
        </div>
      </div>
    </div>
  );
}
