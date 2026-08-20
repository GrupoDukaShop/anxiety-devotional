# When Anxiety Takes Over — Landing Page (Next.js)

A sales landing page for the "When Anxiety Takes Over" 30-day devotional
($9), built with Next.js (App Router) so it deploys to Vercel with zero
configuration — same structure as the Natural Health Guide landing page.

## Project structure

```
app/
  layout.js       → root layout, loads fonts (Lora + Poppins) and global CSS
  page.js          → assembles all sections
  globals.css      → all styling (cream / beige / sage / gold / charcoal palette)
components/
  Nav.js, Hero.js, Pain.js, GuideFacts.js, WhatsInside.js,
  DailyRitual.js, WhoItsFor.js, Pricing.js, FAQ.js, FinalCTA.js,
  Footer.js, Icons.js
public/
  cover.jpg        → devotional cover image used in the hero mockup
```

Copy, the 5-part table of contents, FAQ items, and pricing all live as plain
data arrays at the top of their component files — edit those instead of
hunting through JSX.

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Deploy to Vercel

Same as before: push to GitHub, import the repo at vercel.com/new, and
Vercel auto-detects Next.js — just click **Deploy**.

If your repo contains more than one project (e.g. this one and the Natural
Health Guide landing page) in subfolders, remember to set **Root Directory**
in the Vercel project settings to the folder this project lives in.

## Before you go live — things to update

- **Checkout link**: the "Get Instant Access" buttons currently point to
  `href="#"`. Connect them to your real checkout (Stripe, Hotmart, Gumroad,
  etc.) in `components/Hero.js`, `Pricing.js`, and `FinalCTA.js` — same
  pattern used for the Natural Health Guide (see that project's README for
  the Hotmart widget integration steps if you're using Hotmart here too).
- **Price**: `$9` is set in `Hero.js`, `Pricing.js`, and `FinalCTA.js`.
- **Guarantee terms**: `Pricing.js` currently offers a 7-day money-back
  guarantee — adjust to whatever you'll actually honor.
- **Footer links**: "Contact · Privacy Policy · Terms" in `Footer.js` are
  plain text — link them to real pages once you have them.
- **Crisis line note**: the footer includes a 988 Suicide & Crisis Lifeline
  mention. Please keep some version of this visible — it matters for a
  devotional touching on anxiety and mental health.

## Notes

- Same visual system as the ebook PDF: cream/beige background, sage green
  and muted gold accents, dark charcoal for contrast sections.
- Fonts (Lora, Poppins) are self-hosted via `next/font/google` — no
  external requests, no layout shift.
- The FAQ accordion uses native `<details>`/`<summary>` — no JS needed.
