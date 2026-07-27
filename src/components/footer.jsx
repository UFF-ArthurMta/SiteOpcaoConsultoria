import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import Container from "@/components/container";
import { Logo } from "@/components/logo";
import { siteConfig, navLinks } from "@/lib/site-data";

/* Ícones de marca (lucide descontinuou os ícones de redes sociais). */
function LinkedinIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

function InstagramIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.43-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zm0 1.44c-3.14 0-3.51.01-4.75.07-.9.04-1.39.19-1.71.32-.43.17-.74.37-1.06.69-.32.32-.52.63-.69 1.06-.13.32-.28.81-.32 1.71-.06 1.24-.07 1.61-.07 4.75s.01 3.51.07 4.75c.04.9.19 1.39.32 1.71.17.43.37.74.69 1.06.32.32.63.52 1.06.69.32.13.81.28 1.71.32 1.24.06 1.61.07 4.75.07s3.51-.01 4.75-.07c.9-.04 1.39-.19 1.71-.32.43-.17.74-.37 1.06-.69.32-.32.52-.63.69-1.06.13-.32.28-.81.32-1.71.06-1.24.07-1.61.07-4.75s-.01-3.51-.07-4.75c-.04-.9-.19-1.39-.32-1.71a2.85 2.85 0 0 0-.69-1.06 2.85 2.85 0 0 0-1.06-.69c-.32-.13-.81-.28-1.71-.32-1.24-.06-1.61-.07-4.75-.07zm0 2.45a5.95 5.95 0 1 1 0 11.9 5.95 5.95 0 0 1 0-11.9zm0 9.82a3.87 3.87 0 1 0 0-7.74 3.87 3.87 0 0 0 0 7.74zm7.58-10.06a1.39 1.39 0 1 1-2.78 0 1.39 1.39 0 0 1 2.78 0z" />
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();
  const { address } = siteConfig;

  return (
    <footer className="mt-auto bg-brand-navy text-white">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Marca */}
          <div className="lg:col-span-1">
            <Logo variant="white" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
              {siteConfig.description}
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn da Opção Consultoria"
                className="flex size-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-brand-orange"
              >
                <LinkedinIcon className="size-4" />
              </a>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da Opção Consultoria"
                className="flex size-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-brand-orange"
              >
                <InstagramIcon className="size-4" />
              </a>
            </div>
          </div>

          {/* Navegação */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/90">
              Navegação
            </h3>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-brand-orange"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/contato"
                  className="text-sm text-white/70 transition-colors hover:text-brand-orange"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/90">
              Contato
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 size-4 shrink-0 text-brand-orange" />
                <span>
                  {address.line1}
                  <br />
                  {address.line2}
                  <br />
                  {address.city} — {address.state}, {address.zip}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="size-4 shrink-0 text-brand-orange" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="transition-colors hover:text-brand-orange"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="size-4 shrink-0 text-brand-orange" />
                <span>{siteConfig.phone}</span>
              </li>
            </ul>
          </div>

          {/* Institucional */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/90">
              Institucional
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-white/70">
              <li>CNPJ: {siteConfig.cnpj}</li>
              <li>Empresa Júnior de Economia</li>
              <li>Universidade Federal Fluminense (UFF)</li>
              <li>
                <Link
                  href="/privacidade"
                  className="transition-colors hover:text-brand-orange"
                >
                  Política de Privacidade
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-3 py-6 text-center text-xs text-white/60 sm:flex-row sm:text-left">
          <p>
            © {year} {siteConfig.name}. Todos os direitos reservados.
          </p>
          <p>
            Empresa Júnior de Economia · Universidade Federal Fluminense — Niterói/RJ
          </p>
        </Container>
      </div>
    </footer>
  );
}
