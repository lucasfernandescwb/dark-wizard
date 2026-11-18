export const siteConfig = {
  productName: "DarkWizard",
  shortName: "DarkWizard",
  description:
    "Do roteiro à narração, transforme suas ideias em vídeos para canais dark no YouTube com um fluxo de produção inteligente, organizado e automatizado.",
  checkoutUrl:
    process.env.NEXT_PUBLIC_KIWIFY_CHECKOUT_URL || "",
  price: "R$ 49",
  originalPrice: "R$ 299",
  discountLabel: "SUPER DESCONTO",
  paymentConditions: "Licença de acesso mediante pagamento único.",
  accessType: "Licença de acesso — condições de entrega conforme informado no checkout.",
  guarantee:
    "As condições de garantia serão exibidas somente após serem fornecidas pelo responsável pelo produto.",
  producer: "DarkWizard",
  contactEmail: "",
  socialLinks: [] as Array<{ label: string; href: string }>,
  analytics: {
    ga4Id: process.env.NEXT_PUBLIC_GA4_ID || "",
    metaPixelId: process.env.NEXT_PUBLIC_META_PIXEL_ID || "",
  },
};
