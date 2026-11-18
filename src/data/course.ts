import type { LucideIcon } from "lucide-react";
import { AudioLines, Clapperboard, Route, Sparkles } from "lucide-react";

export type Benefit = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const problems = [
  "Ideias criativas se perdem em um fluxo sem organização.",
  "Cada etapa da produção exige abrir ferramentas e repetir tarefas manualmente.",
  "Roteiro, narração e cenas podem ficar desconectados durante o processo.",
];

export const benefits: Benefit[] = [
  {
    title: "Roteiros estruturados",
    description: "Crie narrativas envolventes adaptadas ao tema e à proposta do canal.",
    icon: Sparkles,
  },
  {
    title: "Narração por IA",
    description: "Envie seu próprio voiceover ou gere uma narração com inteligência artificial.",
    icon: AudioLines,
  },
  {
    title: "Planejamento de cenas",
    description: "Organize a narrativa em cenas e sequências visuais coerentes.",
    icon: Clapperboard,
  },
  {
    title: "Fluxo integrado",
    description: "Conduza as etapas da produção em um processo único e consistente.",
    icon: Route,
  },
];

export const modules = [
  {
    title: "Etapa 1 — Desenvolvimento da ideia",
    description: "Defina o tema e os elementos iniciais da produção.",
    lessons: ["Escolha da ideia", "Direção para o conteúdo"],
  },
  {
    title: "Etapa 2 — Roteiro",
    description: "Estruture uma narrativa organizada e envolvente.",
    lessons: ["Desenvolvimento do roteiro", "Organização da narrativa"],
  },
  {
    title: "Etapa 3 — Narração",
    description: "Prepare a voz que dará ritmo à sua produção.",
    lessons: ["Voiceover enviado pelo usuário", "Narração gerada por IA"],
  },
  {
    title: "Etapa 4 — Produção visual",
    description: "Planeje as cenas e os elementos audiovisuais do vídeo.",
    lessons: ["Planejamento de cenas", "Estruturação dos elementos visuais"],
  },
];

export const bonuses: Array<{
  title: string;
  description: string;
}> = [];

export const testimonials: Array<{
  quote: string;
  name: string;
  role?: string;
}> = [];

export const faqs = [
  {
    question: "Como funciona o acesso ao DarkWizard?",
    answer:
      "A compra é realizada por meio do checkout oficial da Kiwify. As informações de entrega e acesso são fornecidas conforme a oferta.",
  },
  {
    question: "Quais são as formas de pagamento?",
    answer:
      "As opções disponíveis podem ser consultadas no checkout oficial da Kiwify.",
  },
  {
    question: "Posso usar minha própria voz?",
    answer:
      "Sim. Antes da narração, o DarkWizard permite enviar uma gravação própria baseada no roteiro ou utilizar narração gerada por inteligência artificial.",
  },
  {
    question: "O DarkWizard também planeja as cenas?",
    answer:
      "Sim. A skill auxilia na organização do roteiro em cenas e sequências visuais para preparar os elementos da produção.",
  },
  {
    question: "Existem condições de garantia?",
    answer:
      "A política de garantia depende das condições reais da oferta e precisa ser confirmada pelo responsável pelo produto.",
  },
];
