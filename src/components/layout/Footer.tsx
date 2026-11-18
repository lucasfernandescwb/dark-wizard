import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="border-t border-violet-300/10 bg-[#09060f] py-10">
      <Container className="flex flex-col gap-6 text-sm text-slate-400 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-black text-white">{siteConfig.productName}</p>
          <p className="mt-2">{siteConfig.producer}</p>
          {siteConfig.contactEmail ? (
            <a className="mt-1 block transition hover:text-violet-300" href={`mailto:${siteConfig.contactEmail}`}>
              {siteConfig.contactEmail}
            </a>
          ) : null}
        </div>
        <div className="flex flex-wrap gap-5">
          {siteConfig.socialLinks.map((link) => (
            <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="transition hover:text-violet-300">
              {link.label}
            </a>
          ))}
          <a href="/privacidade" className="transition hover:text-violet-300">Privacidade</a>
          <a href="/termos" className="transition hover:text-violet-300">Termos</a>
        </div>
      </Container>
    </footer>
  );
}
