import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="border-t border-violet-300/10 bg-[#09060f] py-12">
      <Container>
        <div className="grid gap-10 border-b border-violet-300/10 pb-8 text-sm text-slate-400 md:grid-cols-[1.4fr_1fr]">
          <div>
            <p className="text-lg font-black text-white">{siteConfig.productName}</p>
            {/* {siteConfig.responsibleName && <p className="mt-4">{siteConfig.responsibleName}</p>}
            {siteConfig.document && <p className="mt-1">CPF/CNPJ: {siteConfig.document}</p>}
            {siteConfig.address && <p className="mt-1">Endereço: {siteConfig.address}</p>} */}
            {siteConfig.contactEmail ? (
              <a className="mt-1 block transition hover:text-violet-300" href={`mailto:${siteConfig.contactEmail}`}>
                E-mail: {siteConfig.contactEmail}
              </a>
            ) : (
              <p className="mt-1">E-mail de contato: suporte@darkwizard.com</p>
            )}
          </div>
          <nav aria-label="Informações institucionais">
            <p className="mb-4 font-black text-white">Informações</p>
            <div className="grid gap-3 sm:grid-cols-2">
              {/* <Link href="/#sobre" className="transition hover:text-violet-300">Sobre o DarkWizard</Link> */}
              <Link href="/termos" className="transition hover:text-violet-300">Termos de Uso</Link>
              <Link href="/privacidade" className="transition hover:text-violet-300">Política de Privacidade</Link>
              <Link href="/garantia-reembolso" className="transition hover:text-violet-300">Garantia e Reembolso</Link>
            </div>
          </nav>
        </div>
        <p className="mt-7 text-xs text-slate-500">© 2026 {siteConfig.productName}. Todos os direitos reservados.</p>
      </Container>
    </footer>
  );
}
