"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Clapperboard,
  FileText,
  Mic2,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion } from "@/components/ui/Accordion";
import { siteConfig } from "@/config/site";
import { benefits, faqs, modules, problems } from "@/data/course";

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.55 },
};

export default function Home() {
  const checkout = siteConfig.checkoutUrl;

  return (
    <>
      <Header />
      <div className="border-b border-violet-400/15 bg-violet-600 px-4 py-2 text-center text-xs font-black uppercase tracking-[0.14em] text-white sm:text-sm">
        <span className="mr-2 rounded bg-white px-2 py-1 text-violet-700">{siteConfig.discountLabel}</span>
        De {siteConfig.originalPrice} por {siteConfig.price}
      </div>
      <main>
        <section className="relative overflow-hidden bg-[#09060f] text-white">
          <div className="absolute inset-0 hero-grid opacity-40" />
          <div className="absolute right-[-10%] top-[-20%] size-[680px] rounded-full bg-violet-700/10 blur-[120px]" />
          <Container className="relative grid min-h-[680px] items-center gap-12 py-20 lg:grid-cols-[1.08fr_.92fr] lg:py-24">
            <motion.div {...reveal}>
              <p className="mb-5 inline-flex rounded-full border border-violet-400/20 bg-violet-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-violet-300">
                Skill de produção audiovisual com IA
              </p>
              <h1 className="max-w-3xl text-balance text-4xl font-black leading-[1.02] tracking-tight sm:text-5xl lg:text-6xl">
                Seu estúdio de produção audiovisual
                <span className="block text-violet-400">com IA.</span>
              </h1>
              <p className="mt-7 max-w-2xl text-pretty text-lg leading-8 text-slate-300 sm:text-xl">
                Do roteiro à narração, transforme suas ideias em vídeos para canais dark no YouTube com um fluxo de produção inteligente, organizado e automatizado.
              </p>
              <p className="mt-4 text-sm font-bold uppercase tracking-[0.16em] text-violet-300">
                Menos trabalho manual. Mais produção. Mais criatividade.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href={checkout || "#oferta"}
                  target={checkout ? "_blank" : undefined}
                  rel={checkout ? "noopener noreferrer" : undefined}
                  className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-violet-500 px-7 text-base font-black text-white shadow-[0_18px_55px_rgba(139,92,246,.24)] transition hover:-translate-y-0.5 hover:bg-violet-400"
                >
                  Conhecer o DarkWizard
                  <ArrowRight className="size-5" aria-hidden="true" />
                </a>
                <a href="#oferta" className="inline-flex min-h-14 items-center justify-center rounded-full border border-violet-300/25 px-7 text-base font-bold text-white transition hover:bg-violet-400/10">
                  Ver preço — R$49
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.65, delay: 0.12 }}
              className="relative mx-auto w-full max-w-lg"
            >
              <div className="absolute -inset-16 rounded-full bg-violet-600/15 blur-3xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-violet-300/15 bg-[#100c18] p-3 shadow-[0_30px_100px_rgba(76,29,149,.22)]">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[1.25rem]">
                  <Image
                    src="/images/dark-wizard-studio.png"
                    alt="Mago produzindo um vídeo em seu estúdio escuro"
                    fill
                    sizes="(max-width: 1024px) 90vw, 42vw"
                    priority
                    className="object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#09060f] via-[#09060f]/70 to-transparent px-7 pb-7 pt-24">
                    <p className="text-xs font-bold uppercase tracking-[0.22em] text-violet-300">Transforme ideias em vídeos</p>
                    <p className="mt-2 text-2xl font-black">DarkWizard</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </Container>
        </section>

        <section id="sobre" className="bg-[#0d0914] py-20 text-white sm:py-28">
          <Container>
            <div className="grid gap-12 lg:grid-cols-[.75fr_1.25fr]">
              <SectionHeading eyebrow="O desafio" title="Produzir não precisa significar repetir tudo manualmente." dark />
              <motion.div {...reveal} className="grid gap-4 sm:grid-cols-3">
                {problems.map((problem, index) => (
                  <div key={problem} className="border-l-2 border-violet-500 pl-5">
                    <span className="text-sm font-black text-violet-600">0{index + 1}</span>
                    <p className="mt-3 leading-7 text-slate-300">{problem}</p>
                  </div>
                ))}
              </motion.div>
            </div>
          </Container>
        </section>

        <section className="bg-[#09060f] py-20 text-white sm:py-28">
          <Container>
            <SectionHeading
              eyebrow="A solução"
              title="Um assistente, não apenas um gerador de roteiros."
              description="O DarkWizard conduz diferentes etapas da produção audiovisual em um fluxo integrado, organizado e pensado para canais dark."
              align="center"
              dark
            />
            <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-violet-300/10 bg-violet-300/10 sm:grid-cols-2 lg:grid-cols-4">
              {benefits.map((benefit) => {
                const Icon = benefit.icon;
                return (
                  <motion.article key={`benefit-${benefit.title}`} {...reveal} className="bg-[#100c18] p-7 sm:p-8">
                    <div className="grid size-11 place-items-center rounded-xl bg-violet-100 text-violet-700">
                      <Icon className="size-5" aria-hidden="true" />
                    </div>
                    <h3 className="mt-6 text-lg font-black text-white">{benefit.title}</h3>
                    <p className="mt-3 leading-7 text-slate-300">{benefit.description}</p>
                  </motion.article>
                );
              })}
            </div>
          </Container>
        </section>

        <section id="como-funciona" className="bg-[#09060f] py-20 text-white sm:py-28">
          <Container className="grid gap-12 lg:grid-cols-[.75fr_1.25fr]">
            <div>
              <SectionHeading
                eyebrow="Fluxo de produção"
                title="Do roteiro à preparação do vídeo."
                description="Uma sequência clara para organizar a criação de conteúdo sem perder a visão criativa."
                dark
              />
              <div className="mt-8 hidden gap-3 sm:flex">
                {[FileText, Mic2, Clapperboard, Workflow].map((Icon, index) => (
                  <div key={index} className="grid size-12 place-items-center rounded-xl border border-violet-300/15 bg-violet-400/5 text-violet-300">
                    <Icon className="size-5" />
                  </div>
                ))}
              </div>
            </div>
            <Accordion
              dark
              items={modules.map((module) => ({
                title: module.title,
                content: (
                  <div>
                    <p>{module.description}</p>
                    <ul className="mt-4 grid gap-2">
                      {module.lessons.map((lesson) => (
                        <li key={lesson} className="flex items-center gap-3">
                          <Check className="size-4 text-violet-500" />
                          {lesson}
                        </li>
                      ))}
                    </ul>
                  </div>
                ),
              }))}
            />
          </Container>
        </section>

        <section className="bg-[#0d0914] py-20 text-white sm:py-28">
          <Container>
            <SectionHeading
              eyebrow="Narração"
              title="Sua voz ou uma voz gerada por IA."
              description="Antes de iniciar a narração, o DarkWizard permite escolher entre utilizar uma gravação própria ou gerar o voiceover com inteligência artificial."
              align="center"
              dark
            />
            <div className="mx-auto mt-10 grid max-w-4xl gap-5 md:grid-cols-2">
              <motion.article {...reveal} className="rounded-3xl border border-violet-300/15 bg-[#100c18] p-7">
                <Mic2 className="size-8 text-violet-600" />
                <h3 className="mt-5 text-xl font-black text-white">Envie seu voiceover</h3>
                <p className="mt-3 leading-7 text-slate-300">
                  Utilize uma gravação própria baseada no roteiro produzido.
                </p>
              </motion.article>
              <motion.article {...reveal} className="rounded-3xl border border-violet-400/25 bg-violet-950/40 p-7">
                <Sparkles className="size-8 text-violet-600" />
                <h3 className="mt-5 text-xl font-black text-white">Gere com inteligência artificial</h3>
                <p className="mt-3 leading-7 text-slate-300">
                  Produza a narração por IA como alternativa ao voiceover próprio.
                </p>
              </motion.article>
            </div>
          </Container>
        </section>

        <section id="oferta" className="relative overflow-hidden bg-[#09060f] py-20 text-white sm:py-28">
          <div className="absolute inset-0 hero-grid opacity-20" />
          <Container>
            <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-violet-300/15 bg-[#100c18] shadow-[0_30px_90px_rgba(76,29,149,.18)]">
              <div className="grid lg:grid-cols-[1fr_.75fr]">
                <div className="p-7 sm:p-10 lg:p-12">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-violet-300">Licença de acesso</p>
                  <h2 className="mt-4 text-3xl font-black text-white sm:text-4xl">{siteConfig.productName}</h2>
                  <p className="mt-4 max-w-xl leading-7 text-slate-300">
                    Seu assistente inteligente de produção audiovisual para organizar ideias, roteiros, narração e cenas.
                  </p>
                  <ul className="mt-8 grid gap-4 text-slate-200">
                    {[
                      "Criação de roteiros estruturados",
                      "Escolha entre voiceover próprio ou narração por IA",
                      "Planejamento de cenas e sequências visuais",
                      "Fluxo integrado de produção",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-violet-500/20 text-violet-300">
                          <Check className="size-3.5" />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-col justify-center border-t border-violet-300/10 bg-violet-950/30 p-7 text-white lg:border-l lg:border-t-0 sm:p-10">
                  <p className="w-fit rounded-full bg-violet-500 px-3 py-1 text-xs font-black uppercase tracking-[0.12em]">{siteConfig.discountLabel}</p>
                  <p className="mt-5 text-sm text-slate-400">De <span className="line-through">{siteConfig.originalPrice}</span></p>
                  <p className="mt-1 text-5xl font-black text-violet-300">{siteConfig.price}</p>
                  <p className="mt-3 text-sm leading-6 text-slate-300">{siteConfig.paymentConditions}</p>
                  <a
                    href={checkout || "#oferta"}
                    target={checkout ? "_blank" : undefined}
                    rel={checkout ? "noopener noreferrer" : undefined}
                    className="mt-7 inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-violet-500 px-6 text-center font-black text-white transition hover:bg-violet-400"
                  >
                    {checkout ? "Ir para o checkout" : "Checkout pendente"}
                    <ArrowRight className="size-5" />
                  </a>
                  {!checkout ? (
                    <p className="mt-3 text-center text-xs text-slate-400">Adicione o link da Kiwify em src/config/site.ts.</p>
                  ) : null}
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section id="garantia" className="relative overflow-hidden bg-[#0d0914] py-16 text-white sm:py-20">
          <Container>
            <motion.div {...reveal} className="relative grid items-center gap-8 overflow-hidden rounded-3xl border border-violet-300/15 bg-[#100c18] p-7 shadow-[0_24px_80px_rgba(76,29,149,.12)] sm:p-10 lg:grid-cols-[auto_1fr_auto]">
              <div className="absolute right-[-70px] top-[-110px] size-64 rounded-full bg-violet-600/10 blur-3xl" />
              <div className="relative grid size-24 place-items-center rounded-3xl border border-violet-300/20 bg-violet-500/10 text-violet-300 sm:size-28">
                <ShieldCheck className="absolute size-16 text-violet-500/30" aria-hidden="true" />
                <span className="relative text-5xl font-black leading-none">7</span>
              </div>
              <div className="relative">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-violet-300">Direito de arrependimento</p>
                <h2 className="mt-2 text-3xl font-black text-white">7 dias de garantia</h2>
                <p className="mt-4 max-w-2xl leading-7 text-slate-300">{siteConfig.guarantee}</p>
              </div>
              <a
                href="/garantia-reembolso"
                className="relative inline-flex min-h-12 items-center justify-center rounded-full border border-violet-300/25 px-5 text-center text-sm font-black text-violet-200 transition hover:border-violet-300/50 hover:bg-violet-400/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
              >
                Conhecer a política
              </a>
            </motion.div>
          </Container>
        </section>

        <section id="faq" className="bg-[#09060f] py-20 text-white sm:py-28">
          <Container className="grid gap-10 lg:grid-cols-[.7fr_1.3fr]">
            <SectionHeading eyebrow="Dúvidas" title="Perguntas frequentes." dark />
            <Accordion
              dark
              items={faqs.map((faq) => ({
                title: faq.question,
                content: <p>{faq.answer}</p>,
              }))}
            />
          </Container>
        </section>

        <section className="bg-[#09060f] py-20 text-white sm:py-28">
          <Container className="text-center">
            <motion.div {...reveal}>
              <h2 className="mx-auto max-w-4xl text-balance text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
                Transforme ideias em vídeos.
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                Organize seu processo de produção com a inteligência do DarkWizard.
              </p>
              <p className="mt-5 text-sm font-black uppercase tracking-[0.14em] text-violet-300">
                Super desconto: de R$ 299 por R$ 49
              </p>
              <a
                href={checkout || "#oferta"}
                target={checkout ? "_blank" : undefined}
                rel={checkout ? "noopener noreferrer" : undefined}
                className="mt-8 inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-violet-500 px-8 font-black text-white transition hover:-translate-y-0.5 hover:bg-violet-400"
              >
                {checkout ? "Acessar o DarkWizard" : "Configurar checkout"}
                <ArrowRight className="size-5" />
              </a>
            </motion.div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
