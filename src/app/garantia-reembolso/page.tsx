import type { Metadata } from "next";
import { ExternalLink, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Política de Garantia e Reembolso",
  description:
    "Conheça as condições de garantia, direito de arrependimento e solicitação de reembolso do DarkWizard pela Kiwify.",
};

export default function RefundPolicyPage() {
  const supportEmail = siteConfig.supportEmail || "[INSERIR E-MAIL DE SUPORTE]";

  return (
    <>
      <Header />
      <main className="relative flex-1 overflow-hidden bg-[#09060f] py-16 text-white sm:py-24">
        <div className="hero-grid absolute inset-0 opacity-20" />
        <Container className="relative max-w-4xl">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-violet-300">
            DarkWizard
          </p>
          <h1 className="mt-4 text-4xl font-black text-white sm:text-5xl">
            Política de Garantia e Reembolso
          </h1>

          <div className="mt-8 grid gap-8 rounded-3xl border border-violet-300/15 bg-[#100c18] p-6 sm:p-9">
            <section className="grid gap-6 sm:grid-cols-[auto_1fr]">
              <div className="grid size-20 place-items-center rounded-2xl border border-violet-300/20 bg-violet-500/10 text-violet-300">
                <ShieldCheck className="size-10" aria-hidden="true" />
              </div>
              <div>
                <h2 className="text-2xl font-black">Direito de arrependimento</h2>
                <div className="mt-3 space-y-4 leading-7 text-slate-300">
                  <p>A compra do DarkWizard é realizada pela internet e processada através da plataforma Kiwify.</p>
                  <p>Conforme o artigo 49 do Código de Defesa do Consumidor, o comprador tem direito de solicitar o cancelamento da compra no prazo legal de até 7 dias, contado conforme a legislação aplicável.</p>
                  <p>Não é necessário apresentar justificativa para exercer esse direito.</p>
                </div>
              </div>
            </section>

            <section className="border-t border-violet-300/10 pt-8">
              <h2 className="text-2xl font-black">Como solicitar o reembolso?</h2>
              <div className="mt-3 space-y-4 leading-7 text-slate-300">
                <p>O processamento dos pagamentos e as solicitações de reembolso são realizados através da plataforma Kiwify.</p>
                <p>Para solicitar o reembolso, acesse o canal oficial:</p>
                <a
                  href={siteConfig.refundUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-full bg-violet-500 px-6 text-center font-black text-white transition hover:-translate-y-0.5 hover:bg-violet-400 sm:w-auto"
                >
                  Solicitar reembolso pela Kiwify
                  <ExternalLink className="size-5" aria-hidden="true" />
                </a>
                <p>Informe o mesmo endereço de e-mail utilizado no momento da compra para localizar seu pedido e iniciar a solicitação.</p>
                <p>Caso tenha dificuldades para localizar a compra, confira o e-mail utilizado no pagamento ou entre em contato com o suporte.</p>
              </div>
            </section>

            <section className="border-t border-violet-300/10 pt-8">
              <h2 className="text-2xl font-black">Prazo para receber o reembolso</h2>
              <div className="mt-3 space-y-4 leading-7 text-slate-300">
                <p>Após o processamento da solicitação, o prazo para o valor retornar depende da forma de pagamento e dos procedimentos da instituição financeira.</p>
                <ul className="list-disc space-y-2 pl-5">
                  <li><strong className="text-white">Cartão de crédito:</strong> o prazo depende da administradora do cartão e pode levar até 15 dias para aparecer na fatura.</li>
                  <li><strong className="text-white">PIX:</strong> o prazo médio informado pela Kiwify é de até 7 dias.</li>
                  <li><strong className="text-white">Boleto:</strong> o prazo médio informado pela Kiwify é de até 2 dias úteis.</li>
                </ul>
                <p>Esses prazos são referências operacionais informadas pela plataforma e podem variar conforme a instituição financeira.</p>
              </div>
            </section>

            <section className="border-t border-violet-300/10 pt-8">
              <h2 className="text-2xl font-black">Sobre o produto digital</h2>
              <div className="mt-3 space-y-4 leading-7 text-slate-300">
                <p>O DarkWizard é um produto digital disponibilizado em formato de skill para utilização no ChatGPT, conforme os requisitos e condições apresentados na página de vendas.</p>
                <p>A aquisição não representa garantia de resultados financeiros, monetização de canais, visualizações ou crescimento nas redes sociais.</p>
                <p>Os resultados dependem de fatores como estratégia, aplicação, qualidade do conteúdo e serviços de terceiros.</p>
              </div>
            </section>

            <section className="border-t border-violet-300/10 pt-8">
              <h2 className="text-2xl font-black">Suporte</h2>
              <p className="mt-3 leading-7 text-slate-300">
                Em caso de dúvidas sobre acesso, instalação ou utilização do DarkWizard, o comprador poderá entrar em contato pelo canal oficial de suporte informado nesta página:
              </p>
              {siteConfig.supportEmail ? (
                <a className="mt-3 inline-block font-bold text-violet-300 transition hover:text-violet-200" href={`mailto:${siteConfig.supportEmail}`}>
                  {siteConfig.supportEmail}
                </a>
              ) : (
                <p className="mt-3 font-bold text-violet-300">{supportEmail}</p>
              )}
              <p className="mt-4 leading-7 text-slate-300">Esta política não limita os direitos assegurados ao consumidor pela legislação brasileira.</p>
              <a
                href={siteConfig.refundUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex min-h-12 items-center justify-center rounded-full border border-violet-300/25 px-6 text-center font-black text-violet-200 transition hover:border-violet-300/50 hover:bg-violet-400/10"
              >
                Acessar central de reembolso
              </a>
            </section>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
