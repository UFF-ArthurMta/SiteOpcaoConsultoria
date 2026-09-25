"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Loader2, Send } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { siteConfig } from "@/lib/site-data";
import { asset } from "@/lib/asset";

// Poses do mascote (arquivos em public/mascote, com largura x altura reais).
const MASCOT = {
  waiting: { src: "/mascote/bracos-cruzados.webp", width: 243, height: 320 },
  success: { src: "/mascote/comemorando.webp", width: 296, height: 320 },
  email: { src: "/mascote/joinha.webp", width: 273, height: 320 },
};

// Padrão: envio pelo Web3Forms direto para o comercial (funciona no GitHub
// Pages e na Vercel). Na Vercel, com NEXT_PUBLIC_USE_POWER_AUTOMATE=true e
// POWER_AUTOMATE_URL configuradas, passa a usar o /api/lead (Power Automate).
const USE_API =
  process.env.NEXT_PUBLIC_STATIC_EXPORT !== "true" &&
  process.env.NEXT_PUBLIC_USE_POWER_AUTOMATE === "true";

// Chave pública do Web3Forms (só permite enviar para o e-mail cadastrado).
const WEB3FORMS_KEY = "b086da5c-4eb4-42a6-a20d-8930788610f3";

// Link de WhatsApp a partir do telefone digitado (assume Brasil, +55).
function whatsappLink(phone) {
  let digits = phone.replace(/\D/g, "");
  if (digits.startsWith("55") && digits.length > 11) digits = digits.slice(2);
  return digits.length >= 10 ? `https://wa.me/55${digits}` : "Telefone incompleto";
}

// O plano grátis do Web3Forms usa um modelo de e-mail fixo: a "personalização"
// vem do assunto, do remetente e dos campos abaixo. Cada campo vira uma coluna
// na tabela de Submissions, então os nomes são curtos, fixos e sem emoji —
// mudar um nome cria uma coluna nova e bagunça o histórico.
async function sendViaWeb3Forms(form) {
  const receivedAt = new Date().toLocaleString("pt-BR", {
    timeZone: "America/Sao_Paulo",
    dateStyle: "full",
    timeStyle: "short",
  });

  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      access_key: WEB3FORMS_KEY,
      subject: `Novo pedido de diagnóstico: ${form.company.trim()}`,
      from_name: "Site Opção Consultoria",
      replyto: form.email.trim(),
      Nome: form.name.trim(),
      Empresa: form.company.trim(),
      Email: form.email.trim(),
      Telefone: form.phone.trim(),
      WhatsApp: whatsappLink(form.phone),
      Desafio: form.message.trim(),
      Recebido: receivedAt,
      Origem: window.location.href,
    }),
  });
  const data = await res.json().catch(() => ({}));
  return res.ok && data.success;
}

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

    // Honeypot preenchido = bot: finge sucesso sem enviar nada.
    if (form.website) {
      setSuccess(true);
      setForm(initialState);
      return;
    }

    if (!USE_API) {
      setSubmitting(true);
      try {
        if (!(await sendViaWeb3Forms(form))) throw new Error("web3forms");
        setSuccess(true);
      } catch {
        // Se o serviço falhar, não perde o lead: abre o e-mail pré-preenchido.
        window.location.href = buildMailto(form);
        setViaEmail(true);
        setSuccess(true);
      } finally {
        setForm(initialState);
        setSubmitting(false);
      }
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
      <div className="flex flex-col items-center rounded-2xl border border-border bg-linear-to-b from-brand-orange-50 to-card p-8 text-center shadow-sm sm:p-10">
        <MascotImage
          pose={viaEmail ? MASCOT.email : MASCOT.success}
          className="h-40 w-auto sm:h-44"
        />
        {viaEmail ? (
          <>
            <h3 className="mt-5 text-2xl font-bold text-heading">
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
                className="font-medium text-heading underline hover:text-brand-orange"
              >
                WhatsApp
              </a>
              .
            </p>
          </>
        ) : (
          <>
            <h3 className="mt-5 text-2xl font-bold text-heading">
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
    // O mascote fica "sentado" na borda de cima do card. No desktop ele sobe
    // para o respiro da seção; no celular o espaço vem do padding-top.
    <div className="relative pt-22 lg:pt-0">
      <div className="pointer-events-none absolute top-0 right-4 z-10 flex items-start gap-1 select-none sm:right-8 lg:-top-22">
        <p className="relative mt-3 rounded-2xl rounded-br-sm bg-brand-navy px-3.5 dark:bg-brand-orange py-2 text-xs font-semibold text-white shadow-md sm:text-sm">
          Leva só 2 minutinhos!
        </p>
        <MascotImage
          pose={MASCOT.waiting}
          eager
          className="h-24 w-auto drop-shadow-sm"
        />
      </div>

      <form
        onSubmit={handleSubmit}
        noValidate
        className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8"
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
    </div>
  );
}

function MascotImage({ pose, className, eager = false }) {
  return (
    <Image
      src={asset(pose.src)}
      alt=""
      width={pose.width}
      height={pose.height}
      loading={eager ? "eager" : undefined}
      className={className}
    />
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
