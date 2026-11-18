import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Termos de Uso",
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="relative flex-1 overflow-hidden bg-[#09060f] py-16 text-white sm:py-24">
        <div className="hero-grid absolute inset-0 opacity-20" />
        <Container className="relative max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-violet-300">
            DarkWizard
          </p>
          <h1 className="mt-4 text-4xl font-black text-white sm:text-5xl">
            Termos de Uso
          </h1>
          <div className="mt-8 space-y-6 rounded-3xl border border-violet-300/15 bg-[#100c18] p-6 leading-8 text-slate-300 sm:p-9">
            <p>
              Os termos desta página devem ser fornecidos ou revisados pelo responsável pelo DarkWizard. Não foram presumidas condições comerciais, regras de acesso, licença de uso ou política de cancelamento.
            </p>
            <p>
              Inclua aqui o identificador do responsável, regras de utilização do conteúdo, responsabilidades, propriedade intelectual e informações de contato antes da publicação.
            </p>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
