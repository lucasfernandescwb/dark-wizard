# Landing Page DarkWizard

Projeto Next.js com App Router, Tailwind CSS, Framer Motion e Lucide React.

## Desenvolvimento

```bash
npm install
cp .env.example .env.local
npm run dev
```

## Configuração

- Conteúdo comercial e links: `src/config/site.ts`
- Estrutura curricular, benefícios e FAQ: `src/data/course.ts`
- Identificadores de ambiente: `.env.example`
- Páginas legais: `src/app/privacidade` e `src/app/termos`

O projeto não exige integração própria com pagamentos. Todos os CTAs usam o link oficial configurado em `NEXT_PUBLIC_KIWIFY_CHECKOUT_URL`.
