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
    question: "O DarkWizard possui garantia?",
    answer:
      "Sim. A compra realizada pela internet conta com o direito de arrependimento no prazo legal de até 7 dias, conforme o Código de Defesa do Consumidor.",
  },
  {
    question: "Como solicito meu reembolso?",
    answer:
      "A solicitação pode ser realizada diretamente pelo canal oficial da Kiwify: https://reembolso.kiwify.com.br.",
  },
  {
    question: "Preciso entrar em contato com o suporte do DarkWizard para solicitar reembolso?",
    answer:
      "Não é necessário. Você pode utilizar diretamente o canal oficial de reembolso da Kiwify.",
  },
  {
    question: "Qual o prazo para receber meu dinheiro de volta?",
    answer:
      "O prazo depende da forma de pagamento e da instituição financeira. Consulte a seção de garantia e reembolso para mais informações.",
  },
  {
    question: "Perco o direito ao reembolso se já tiver acessado ou utilizado o produto?",
    answer:
      "O acesso ou a utilização do produto digital não representa, por si só, renúncia ao direito legal de arrependimento.",
  },
  {
    question: "O DarkWizard garante que vou monetizar meu canal?",
    answer:
      "Não. O DarkWizard é uma ferramenta de apoio à produção audiovisual. Resultados dependem de diversos fatores e não podem ser garantidos.",
  },
];
