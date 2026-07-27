# Opção Consultoria — Site Institucional

Site institucional da **Opção Consultoria**, Empresa Júnior de Economia da UFF.
Funciona como um consultor comercial 24h, com foco em **converter visitantes em
leads qualificados**.

## Stack

- **Next.js 16** (App Router) + **React 19**
- **Tailwind CSS v4**
- **shadcn/ui** (Base UI) + ícones **lucide-react**
- Fontes **Inter** (corpo) e **Montserrat** (títulos) via `next/font`
- Integração de leads: **Microsoft Power Automate** → Excel Online + e-mail
- Deploy: **Vercel**

## Começando

```bash
npm install        # instala as dependências
npm run dev        # ambiente de desenvolvimento → http://localhost:3000
npm run build      # build de produção
npm run start      # roda o build de produção localmente
npm run lint       # checagem de lint
```

## Onde editar o conteúdo

Quase todo o texto/dados ficam em **um único arquivo**:

```
src/lib/site-data.js
```

Lá você ajusta: contatos, redes sociais, CNPJ, endereço, serviços, números,
depoimentos, cases, missão/visão/valores e o time. Tudo marcado com
`[PLACEHOLDER]` (ou claramente ilustrativo) deve ser substituído pelo conteúdo
real aprovado pela diretoria.

### Identidade visual

- Paleta e tokens da marca: `src/app/globals.css` (variáveis `--color-brand-*`).
- Logo e mascote oficiais em `src/components/logo.jsx`, apontando para os PNGs
  reais em `public/`:
  - `logo-navy.png` / `logo-white.png` — logo completo (símbolo + wordmark),
    usado na navbar (navy) e no rodapé (white).
  - `bull-navy.png` / `bull-white.png` — mascote (touro), usado como elemento
    decorativo (hero, CTA, cabeçalhos, 404).
- Favicon: `src/app/icon.png` e `public/icon.png` (símbolo da marca).

## Integração do formulário (Power Automate)

O formulário envia para o endpoint interno **`/api/lead`** (server-side), que
repassa os dados para o Power Automate. A URL do Power Automate fica **apenas no
servidor** (não é exposta no navegador), o que evita spam e problemas de CORS.

**Configuração:**

1. No Power Automate, crie um fluxo com o gatilho
   *"Quando uma solicitação HTTP é recebida"*.
2. Use um schema JSON com os campos: `name`, `email`, `phone`, `company`,
   `message`, `submittedAt`, `source`.
3. Adicione as ações: *Adicionar linha em tabela (Excel Online)* e
   *Enviar e-mail* para a equipe comercial.
4. Copie a **URL HTTP POST** gerada pelo gatilho.
5. Crie o arquivo `.env.local` (baseado em `.env.example`) e cole a URL:

   ```
   POWER_AUTOMATE_URL=https://prod-XX.brazilsouth.logic.azure.com:443/workflows/...
   ```

> Enquanto `POWER_AUTOMATE_URL` estiver vazia, em **desenvolvimento** o
> formulário **simula** o envio (registra no console) para você testar a
> experiência. Em produção, sem a URL configurada, o envio retorna erro amigável.

## Deploy na Vercel

1. Suba o projeto para um repositório no GitHub.
2. Importe o repositório em [vercel.com](https://vercel.com) (detecta Next.js
   automaticamente — sem configuração extra).
3. Em **Settings → Environment Variables**, adicione `POWER_AUTOMATE_URL`.
4. Cada push na branch principal gera um deploy automático. HTTPS é automático.
5. Domínio: configure `opcaoconsultoria.com.br` em **Settings → Domains**
   (apontando o DNS do registro.br para a Vercel).

## SEO e LGPD

- Meta tags + Open Graph: `src/app/layout.js`
- Imagem de compartilhamento dinâmica: `src/app/opengraph-image.js`
- `sitemap.xml`: `src/app/sitemap.js` · `robots.txt`: `src/app/robots.js`
- Banner de cookies: `src/components/cookie-banner.jsx`
- Política de Privacidade: `src/app/privacidade/page.js` *(revisar juridicamente)*

> ⚠️ Antes de publicar, ajuste a URL final em `siteConfig.url`
> (`src/lib/site-data.js`) — ela é usada em sitemap, OG e canonical.

## Estrutura

```
src/
├── app/
│   ├── (rotas: /, /sobre, /servicos, /cases, /contato, /membros, /privacidade)
│   ├── api/lead/route.js     # recebe o form e repassa ao Power Automate
│   ├── opengraph-image.js    # imagem OG dinâmica
│   ├── sitemap.js · robots.js · manifest.js
│   ├── layout.js · globals.css
│   └── not-found.js
├── components/
│   ├── home/                 # seções da Home (hero, serviços, números, etc.)
│   ├── ui/                   # componentes shadcn/ui
│   ├── navbar · footer · cta-section · contact-form · cookie-banner ...
└── lib/
    └── site-data.js          # 👈 CONTEÚDO CENTRAL DO SITE
```

---

Desenvolvido para a Opção Consultoria · Empresa Júnior de Economia — UFF, Niterói/RJ.
