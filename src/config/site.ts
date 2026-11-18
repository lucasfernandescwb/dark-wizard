export const siteConfig = {
  productName: "DarkWizard",
  shortName: "DarkWizard",
  description:
    "Do roteiro à narração, transforme suas ideias em vídeos para canais dark no YouTube com um fluxo de produção inteligente, organizado e automatizado.",
  checkoutUrl:
    process.env.NEXT_PUBLIC_KIWIFY_CHECKOUT_URL ||
    "https://pay.kiwify.com.br/f9cdmpq",
  refundUrl: "https://reembolso.kiwify.com.br",
  price: "R$ 49",
  originalPrice: "R$ 299",
  discountLabel: "SUPER DESCONTO",
  paymentConditions: "Licença de acesso mediante pagamento único.",
  accessType: "Licença de acesso — condições de entrega conforme informado no checkout.",
  guarantee:
    "Adquira o DarkWizard com tranquilidade. Você conta com o direito de arrependimento previsto no Código de Defesa do Consumidor, podendo solicitar o reembolso dentro do prazo legal de até 7 dias, contado conforme a legislação aplicável.",
  producer: "DarkWizard",
  contactEmail: "",
  supportEmail: "",
  responsibleName: "[PREENCHER]",
  document: "[PREENCHER]",
  address: "[PREENCHER]",
  socialLinks: [] as Array<{ label: string; href: string }>,
  analytics: {
    ga4Id: process.env.NEXT_PUBLIC_GA4_ID || "",
    metaPixelId: process.env.NEXT_PUBLIC_META_PIXEL_ID || "",
  },
};
