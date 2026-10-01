// Tudo o que você provavelmente vai querer mudar fica aqui.

const price = "$17";

export const site = {
  name: "When Anxiety Takes Over",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://anxiety-devotional.vercel.app",
  price,
  ctaLabel: `Start Day 1 tonight, ${price}`,
  checkoutUrl:
    process.env.NEXT_PUBLIC_CHECKOUT_URL ??
    "https://pay.hotmart.com/T107258212F",

  // Coloque sua capa em /public (ex.: public/cover.png) e escreva "/cover.png".
  // Enquanto for null, a página usa a capa desenhada em CSS.
  coverImage: "/COVERRSRSRS.png",

  links: {
    contact: "/contact",
    privacy: "/privacy",
    terms: "/terms",
  },

  // Preencha para substituir os trechos amarelos da seção "Why I wrote this".
  author: {
    name: "",
    photo: null as string | null, // ex.: "/author.jpg" (arquivo em /public)
    story: "",
    note: "",
  },
};
