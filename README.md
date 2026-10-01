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
- `LEAD_WEBHOOK_URL`: URL do Web App do Google Apps Script que grava os emails na planilha.
- `LEAD_WEBHOOK_SECRET`: segredo compartilhado entre a Vercel e as propriedades do Apps Script.

### Conectar a planilha do Google

1. Crie uma planilha no Google Sheets e copie o ID que aparece entre `/d/` e `/edit` no endereço.
2. Acesse [script.google.com](https://script.google.com), crie um projeto e cole o conteúdo de
  `integrations/google-sheets/Code.gs`.
3. Em **Project Settings > Script properties**, adicione `SPREADSHEET_ID` com o ID da planilha e
  `LEAD_WEBHOOK_SECRET` com uma senha longa e aleatória.
4. Em **Deploy > New deployment**, selecione **Web app**, configure para executar como você e permita acesso a
  qualquer pessoa. Copie a URL do Web App.
5. Na Vercel, em **Settings > Environment Variables**, configure `LEAD_WEBHOOK_URL` com essa URL e
  `LEAD_WEBHOOK_SECRET` com o mesmo segredo do passo 3. Aplique em Production (e Preview, se necessário) e faça
  um novo deploy.
6. Os cliques nos botões de compra são gravados na aba `Checkout Clicks`, com horário e posição do botão; não incluem
  identidade pessoal. Se já publicou o Apps Script antes, atualize a implantação em **Deploy > Manage deployments**,
  escolha **Edit > New version > Deploy** para ativar o registro de cliques.
7. Envie um cadastro de teste e confirme a linha na aba `Leads`; clique em um botão de compra e confirme a linha em
  `Checkout Clicks`.

O segredo nunca é enviado pelo navegador. Não coloque esses valores em variáveis `NEXT_PUBLIC_*` nem no repositório.

## Antes de publicar

1. Preencha `site.author` em `lib/config.ts` (os trechos amarelos tracejados somem quando você preenche).
2. Troque a página de exemplo (Dia 9) em `app/page.tsx` por um trecho real do seu PDF.
3. Coloque sua capa em `public/` e informe em `site.coverImage`.
4. Crie as páginas de contato, privacidade e termos (ou ajuste os links em `site.links`).
5. Configure `LEAD_WEBHOOK_URL` e `LEAD_WEBHOOK_SECRET` e tenha o PDF do Dia 1 pronto para enviar.

## Atenção ao trocar o site atual

O site antigo tem uma rota `/checkout`. Este projeto **não** tem. Se você publicar isto no mesmo projeto/domínio da
Vercel, a rota some. Opções: (a) apontar `NEXT_PUBLIC_CHECKOUT_URL` para um link de pagamento externo (Stripe Payment
Link, etc.), ou (b) copiar a página/rota de checkout do projeto antigo para cá. Recomendado: publique este como um
projeto novo na Vercel, teste, e só depois troque o domínio.
