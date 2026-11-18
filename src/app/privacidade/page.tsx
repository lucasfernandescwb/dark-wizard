import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Política de Privacidade",
};

export default function PrivacyPage() {
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
            Política de Privacidade
          </h1>
          <div className="mt-8 space-y-6 rounded-3xl border border-violet-300/15 bg-[#100c18] p-6 leading-8 text-slate-300 sm:p-9">
            <p>
              Esta política deve ser adaptada às práticas reais de tratamento de dados da operação. Não foram incluídas cláusulas sobre coleta, armazenamento ou compartilhamento sem informação fornecida pelo responsável pelo produto.
            </p>
            <p>
              O responsável pelo DarkWizard deve substituir este conteúdo por uma política revisada para atender à legislação aplicável e informar quais dados são coletados, suas finalidades, bases legais e formas de exercício dos direitos dos titulares.
            </p>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
