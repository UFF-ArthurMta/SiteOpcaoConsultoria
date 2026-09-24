import { NextResponse } from "next/server";

/**
 * Recebe o formulário de leads do site e repassa para o Microsoft Power Automate.
 *
 * Fluxo: Formulário (cliente) → POST /api/lead (este handler, server-side)
 *        → POST no endpoint HTTP do Power Automate → Excel Online + e-mail.
 *
 * A URL do Power Automate fica em POWER_AUTOMATE_URL (variável de ambiente
 * SERVIDOR — nunca exposta no navegador). Configure em .env.local e na Vercel.
 */
export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, message: "Requisição inválida." },
      { status: 400 }
    );
  }

  const { name, email, phone, company, message, website } = body ?? {};

  // Honeypot anti-spam: campo oculto "website" deve vir vazio.
  if (website) {
    return NextResponse.json({ ok: true, message: "Recebido." });
  }

  // Validação mínima server-side
  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email ?? ""));
  if (!name || !emailOk || !phone || !company || !message) {
    return NextResponse.json(
      { ok: false, message: "Preencha todos os campos corretamente." },
      { status: 422 }
    );
  }

  const payload = {
    name: String(name).trim(),
    email: String(email).trim(),
    phone: String(phone).trim(),
    company: String(company).trim(),
    message: String(message).trim(),
    submittedAt: new Date().toISOString(),
    source: "site-opcao-consultoria",
  };

  const endpoint = process.env.POWER_AUTOMATE_URL;

  // Endpoint ainda não configurado.
  if (!endpoint) {
    if (process.env.NODE_ENV !== "production") {
      // Em desenvolvimento, registra no console e simula sucesso
      // para permitir testar a experiência do formulário.
      console.info("[lead] POWER_AUTOMATE_URL não configurada. Lead recebido:", payload);
      return NextResponse.json({ ok: true, simulated: true, message: "Recebido (simulado)." });
    }
    return NextResponse.json(
      {
        ok: false,
        message:
          "Recebemos sua solicitação, mas o envio automático está temporariamente indisponível. Tente novamente em instantes.",
      },
      { status: 503 }
    );
  }

  try {
    const upstream = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!upstream.ok) {
      console.error("[lead] Power Automate respondeu com status", upstream.status);
      return NextResponse.json(
        { ok: false, message: "Não foi possível enviar agora. Tente novamente." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true, message: "Recebido." });
  } catch (err) {
    console.error("[lead] Falha ao contatar o Power Automate:", err);
    return NextResponse.json(
      { ok: false, message: "Erro de conexão. Tente novamente em instantes." },
      { status: 502 }
    );
  }
}
