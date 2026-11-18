"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/95 text-white backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 font-black tracking-tight" aria-label="DarkWizard — início">
          <Image src="/images/dark-wizard-logo.jpg" alt="" width={38} height={38} className="rounded-lg" />
          <span>{siteConfig.shortName}</span>
        </Link>
        <nav className="hidden items-center gap-7 md:flex" aria-label="Navegação principal">
          <a className="nav-link" href="#conteudo">Conteúdo</a>
          <a className="nav-link" href="#sobre">Sobre</a>
          <a className="nav-link" href="#oferta">Oferta</a>
          <a className="nav-link" href="#faq">Perguntas</a>
          <a
            href={siteConfig.checkoutUrl || "#oferta"}
            target={siteConfig.checkoutUrl ? "_blank" : undefined}
            rel={siteConfig.checkoutUrl ? "noopener noreferrer" : undefined}
            className="rounded-full bg-cyan-400 px-5 py-2.5 text-sm font-black text-slate-950 transition hover:bg-cyan-300"
          >
            Quero acessar · R$49
          </a>
        </nav>
        <button
          type="button"
          className="grid size-10 place-items-center rounded-full border border-white/15 md:hidden"
          aria-expanded={open}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </Container>
      {open ? (
        <nav className="border-t border-white/10 bg-slate-950 px-5 py-5 md:hidden" aria-label="Menu móvel">
          <div className="mx-auto flex max-w-7xl flex-col gap-4">
            {[
              ["Conteúdo", "#conteudo"],
              ["Sobre", "#sobre"],
              ["Oferta", "#oferta"],
              ["Perguntas", "#faq"],
            ].map(([label, href]) => (
              <a key={href} href={href} className="nav-link py-1" onClick={() => setOpen(false)}>
                {label}
              </a>
            ))}
            <a
              href={siteConfig.checkoutUrl || "#oferta"}
              className="mt-2 rounded-full bg-cyan-400 px-5 py-3 text-center text-sm font-black text-slate-950"
              onClick={() => setOpen(false)}
            >
              Quero acessar · R$49
            </a>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
