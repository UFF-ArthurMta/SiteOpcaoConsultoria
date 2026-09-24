"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { siteConfig } from "@/lib/site-data";

// No export estático (GitHub Pages) não existe /api/lead: o envio vira um
// e-mail pré-preenchido para o comercial. Na Vercel, usa o /api/lead.
const IS_STATIC = process.env.NEXT_PUBLIC_STATIC_EXPORT === "true";

function buildMailto(form) {
  const subject = `Diagnóstico gratuito — ${form.company}`;
  const body = [
    `Nome: ${form.name}`,
    `Empresa: ${form.company}`,
    `E-mail: ${form.email}`,
    `Telefone: ${form.phone}`,
    "",
    "Desafio:",
    form.message,
  ].join("\n");
  return `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function isComplete(form) {
  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);
  return (
    emailOk &&
    [form.name, form.phone, form.company, form.message].every((v) => v.trim())
  );
}

const initialState = {
  name: "",
  email: "",
  phone: "",
  company: "",
  message: "",
  website: "", // honeypot (deve permanecer vazio)
};

export default function ContactForm() {
  const [form, setForm] = useState(initialState);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [viaEmail, setViaEmail] = useState(false);

  const update = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (submitting) return;

    if (!isComplete(form)) {
      toast.error("Preencha todos os campos, com um e-mail válido.");
      return;
    }

    if (IS_STATIC) {
      window.location.href = buildMailto(form);
      setViaEmail(true);
      setSuccess(true);
      setForm(initialState);
      return;
    }

    setSubmitting(true);

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));

      if (res.ok && data.ok) {
        setSuccess(true);
        setForm(initialState);
      } else {
        toast.error(data.message || "Não foi possível enviar. Tente novamente.");
      }
    } catch {
      toast.error("Erro de conexão. Verifique sua internet e tente novamente.");
    } finally {
      setSubmitting(false);
    }
  };

  if (success) {
    return (
      <div className="flex flex-col items-center rounded-2xl border border-border bg-white p-8 text-center sm:p-10">
        <span className="flex size-16 items-center justify-center rounded-full bg-green-100">
          <CheckCircle2 className="size-9 text-green-600" />
        </span>
        {viaEmail ? (
          <>
            <h3 className="mt-5 text-2xl font-bold text-brand-navy">
              Sua mensagem está pronta
            </h3>
            <p className="mt-3 max-w-md text-brand-text">
              Abrimos o seu e-mail com os dados preenchidos para{" "}
              <strong>{siteConfig.email}</strong> — é só enviar. Se preferir,
              fale direto pelo{" "}
              <a
                href={`https://wa.me/${siteConfig.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-brand-navy underline hover:text-brand-orange"
              >
                WhatsApp
              </a>
              .
            </p>
          </>
        ) : (
          <>
            <h3 className="mt-5 text-2xl font-bold text-brand-navy">
              Recebemos sua solicitação!
            </h3>
            <p className="mt-3 max-w-md text-brand-text">
              Obrigado pelo interesse. Nossa equipe comercial entrará em contato
              em até <strong>24 horas</strong>.
            </p>
          </>
        )}
        <Button
          variant="outline"
          size="lg"
          className="mt-6"
          onClick={() => {
            setSuccess(false);
            setViaEmail(false);
          }}
        >
          Enviar outra solicitação
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-2xl border border-border bg-white p-6 shadow-sm sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="name" label="Nome completo" required>
          <Input
            id="name"
            name="name"
            autoComplete="name"
            required
            value={form.name}
            onChange={update("name")}
            placeholder="Seu nome"
          />
        </Field>

        <Field id="company" label="Nome da empresa" required>
          <Input
            id="company"
            name="company"
            autoComplete="organization"
            required
            value={form.company}
            onChange={update("company")}
            placeholder="Sua empresa"
          />
        </Field>

        <Field id="email" label="E-mail" required>
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={form.email}
            onChange={update("email")}
            placeholder="voce@empresa.com.br"
          />
        </Field>

        <Field id="phone" label="Telefone / WhatsApp" required>
          <Input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            required
            value={form.phone}
            onChange={update("phone")}
            placeholder="(21) 99999-9999"
          />
        </Field>
      </div>

      <div className="mt-5">
        <Field id="message" label="Desafio ou problema atual" required>
          <Textarea
            id="message"
            name="message"
            required
            rows={5}
            value={form.message}
            onChange={update("message")}
            placeholder="Conte rapidamente o desafio que sua empresa está enfrentando."
          />
        </Field>
      </div>

      {/* Honeypot anti-spam (oculto para humanos) */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Não preencha este campo</label>
        <input
          id="website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={form.website}
          onChange={update("website")}
        />
      </div>

      <Button
        type="submit"
        size="xl"
        variant="cta"
        disabled={submitting}
        className="mt-7 w-full"
      >
        {submitting ? (
          <>
            <Loader2 className="animate-spin" />
            Enviando...
          </>
        ) : (
          <>
            <Send />
            Solicitar Diagnóstico Gratuito
          </>
        )}
      </Button>

      <p className="mt-4 text-center text-xs text-brand-text/70">
        Ao enviar, você concorda com a nossa{" "}
        <Link href="/privacidade" className="underline hover:text-brand-orange">
          Política de Privacidade
        </Link>
        .
      </p>
    </form>
  );
}

function Field({ id, label, required, children }) {
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor={id}>
        {label}
        {required ? <span className="text-brand-orange"> *</span> : null}
      </Label>
      {children}
    </div>
  );
}
