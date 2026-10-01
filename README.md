# When Anxiety Takes Over: landing page (Next.js)

Next.js 15 (App Router) + TypeScript. Sem bibliotecas de UI: o visual está em `app/globals.css`.

## Rodar

```bash
npm install
cp .env.example .env.local   # preencha as variáveis
npm run dev                  # http://localhost:3000
npm run build && npm start   # produção
```

## O que editar

| O quê | Onde |
|---|---|
| Preço, link de checkout, capa, autor, links do rodapé | `lib/config.ts` |
| Textos das listas (linha do tempo, FAQ, "o que você recebe") | `lib/content.ts` |
| Textos do topo, cena das 2 da manhã, página de exemplo (Dia 9) | `app/page.tsx` |
| Cores e tipografia | `app/globals.css` (variáveis no topo) |
| Título e descrição para Google / compartilhamento | `app/layout.tsx` |

## Variáveis de ambiente (`.env.local` e painel da Vercel)

- `NEXT_PUBLIC_CHECKOUT_URL`: para onde os botões de compra levam.
- `NEXT_PUBLIC_SITE_URL`: URL pública do site.
- `LEAD_WEBHOOK_URL`: recebe o email do "Day 1 grátis". A rota `app/api/subscribe/route.ts` envia um POST em JSON
  `{ "email", "source", "createdAt" }`. Funciona com Zapier, Make, n8n ou qualquer endpoint seu, que depois manda o
  email para sua ferramenta (Mailchimp, ConvertKit, Beehiiv...). Sem essa variável o formulário mostra uma mensagem de
  indisponível.

## Antes de publicar

1. Preencha `site.author` em `lib/config.ts` (os trechos amarelos tracejados somem quando você preenche).
2. Troque a página de exemplo (Dia 9) em `app/page.tsx` por um trecho real do seu PDF.
3. Coloque sua capa em `public/` e informe em `site.coverImage`.
4. Crie as páginas de contato, privacidade e termos (ou ajuste os links em `site.links`).
5. Configure o `LEAD_WEBHOOK_URL` e tenha o PDF do Dia 1 pronto para enviar.

## Atenção ao trocar o site atual

O site antigo tem uma rota `/checkout`. Este projeto **não** tem. Se você publicar isto no mesmo projeto/domínio da
Vercel, a rota some. Opções: (a) apontar `NEXT_PUBLIC_CHECKOUT_URL` para um link de pagamento externo (Stripe Payment
Link, etc.), ou (b) copiar a página/rota de checkout do projeto antigo para cá. Recomendado: publique este como um
projeto novo na Vercel, teste, e só depois troque o domínio.
