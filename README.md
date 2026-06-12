# Spontaneous Confections — Website

The official website for **Spontaneous Confections**, a Black veteran-owned specialty
pastry & chocolate confections business in the **Capitola Mall food court**
(1855 41st Ave, Capitola, CA 95010 · (831) 480‑5166).

> _An Explosion of Flavor_ — French-inspired pastries, from-scratch Dubai chocolate
> bars, the house-invented “moukie,” entremets, tarts, and custom celebration cakes.

Built with **Vite + React + TypeScript + Tailwind CSS v4 + React Router**. All business
content lives in editable data files (`src/data/`) — you should never need to touch
component code to update the menu, events, press, or contact details.

---

## Quick start

**Prerequisites:** [Node.js](https://nodejs.org) 18+ and npm.

```bash
npm install        # install dependencies
npm run dev        # start the dev server at http://localhost:5173
npm run build      # type-check + build for production into /dist
npm run preview    # preview the production build locally
```

The build runs `tsc -b && vite build`, so a successful `npm run build` means there are
no TypeScript errors.

---

## Project structure

```
public/
  favicon-32.png              # real SC badge favicon (+ apple-touch-icon.png)
  robots.txt, sitemap.xml     # SEO
  assets/
    logos/                    # real client logos (header lockup + SC badge mark)
    og-image.png              # social share image (real lockup on cream, 1200×630)
src/
  data/                       # ← ALL editable business content lives here
    site.ts                   # name, contact, hours, nav, logos, default SEO
    menu.ts                   # menu categories + items
    events.ts                 # pop-ups & events
    media.ts                  # press features & listings
    social.ts                 # social links
    about.ts                  # About page story, values, timeline, team
    home.ts                   # Home page section headings/intros
    contact.ts                # Contact page copy + inquiry types
  components/                 # reusable UI (Header, Footer, cards, etc.)
  pages/                      # Home, Menu, About, Media, Contact, NotFound
  lib/                        # small helpers (accents, date formatting)
  index.css                   # 🎨 design system (colors, fonts, tokens)
  App.tsx                     # routes
index.html                    # base HTML, meta tags, JSON-LD schema, fonts
vercel.json                   # SPA routing + caching for Vercel
```

---

## Editing content

Open the matching file in `src/data/` and edit the values. Save — the site updates.

| To change…                         | Edit…              |
| ---------------------------------- | ------------------ |
| Name, phone, email, address, hours | `src/data/site.ts` |
| Navigation links, CTA buttons      | `src/data/site.ts` |
| The menu (categories & items)      | `src/data/menu.ts` |
| Pop-ups & events                   | `src/data/events.ts` |
| Press / media cards                | `src/data/media.ts` |
| Social media links                 | `src/data/social.ts` |
| About page story                   | `src/data/about.ts` |
| Home page section text             | `src/data/home.ts` |
| Contact form copy / inquiry types  | `src/data/contact.ts` |

### Menu

Each category in `menu.ts` has a `title`, `blurb`, an `accent` color (one of
`plum`, `teal`, `gold`, `pistachio`, `apricot`, `chocolate`), and a list of `items`.
Add an item by copying an existing block:

```ts
{
  name: 'Pistachio Croissant',
  description: 'Laminated croissant filled with house pistachio cream.',
  priceNote: 'Ask in shop',   // never publish a guessed price — see below
  tags: ['new'],              // optional little pills
  featured: true,             // optional: also show on the Home page
}
```

**Pricing policy:** we don’t publish guessed prices. Use `'Seasonal'`,
`'Ask in shop'`, `'By consultation'`, or a real price string like `'$6.50'`.
When prices are confirmed, set `pricesConfirmed = true` at the top of `menu.ts`.

### Events

`events.ts` ships with three clearly-labelled **sample** events (`isSample: true`).
Replace or delete them before launch. Past events hide automatically; if the list is
empty, the Home page shows a friendly “nothing on the calendar” message. Use ISO dates:

```ts
{ id: 'unique-id', title: '…', type: 'pop-up', date: '2026-07-04', location: '…', description: '…' }
```

### Media / press

`media.ts` contains the real press coverage found online (Good Times, Lookout Santa
Cruz) plus directory listings. Add new coverage by copying an entry. Leave
`image: null` to show a branded placeholder, or add an image you have rights to use
into `public/assets/media/` and point `image` at it.

---

## Branding

### Logo

The logo is reproduced as a crisp **inline vector** — the crossed whisk + spatula
emblem lives in `src/components/BrandBadge.tsx`, and the rounded wordmark lockup in
`src/components/Logo.tsx` — rebuilt in the exact brand colors. It scales perfectly,
recolors automatically for the light header and the dark (plum) footer, and needs no
image file, so nothing is ever broken.

**To use the client’s exact artwork instead** (e.g. the “NEW-logo-SC-email” export):

1. Drop the file in `public/assets/logos/` (e.g. `logo-header.png`).
2. In `src/components/Logo.tsx`, replace the badge + wordmark markup with an image:
   ```tsx
   return <img src="/assets/logos/logo-header.png" alt={site.logos.alt} className={className} />
   ```
   Use a light/reversed version for the footer (`variant === 'footer'`).

The favicon, apple-touch icon, and footer mark all use the real SC badge
(`public/favicon-32.png`, `public/apple-touch-icon.png`, and
`public/assets/logos/logo-mark.png`). The social share image
(`public/assets/og-image.png`) is the real horizontal lockup on cream.

### Colors & fonts (the design system)

Everything visual is tokenized in **`src/index.css`** under `@theme`. To match the
official logo/packaging exactly, edit the hex values there — every component updates:

```css
--color-cream: #faf4ea;       /* background           */
--color-chocolate: #34211a;   /* text                 */
--color-plum: #5e2a55;        /* primary brand (logo) */
--color-teal: #45bab6;        /* brand accent (logo)  */
--color-teal-deep: #137a77;   /* teal for text/buttons */
--color-gold: #c08327;
--color-butter: #f6e6a4;
--color-pistachio: #8aae5d;
--color-apricot: #e89559;
--color-peach: #f7c9b1;       /* logo utensils on dark */
/* …plus white surface and a muted border line */
```

The plum and teal are sampled to match the client logo. Fonts are **Fraunces**
(display headings) + **Inter** (body) + **Fredoka** (the rounded logo wordmark),
loaded in `index.html`.

### Photos

The site is designed to look intentional **without** photography (branded color blocks
and placeholders). When you have licensed photos:

- Drop them into `public/assets/` and reference them in the relevant data file, or
- Swap the `PlaceholderImage` components in `src/pages/About.tsx` and
  `src/components/MediaCard.tsx` for `<img>` tags.

> Do not use images pulled from the web without permission. Use client-provided or
> properly licensed photos only.

---

## Contact form

The form (`src/pages/Contact.tsx`) is fully validated on the front end (required
fields, email format, consent) and shows a success state. **It does not yet send email
anywhere** — on submit it offers a pre-filled email link so no inquiry is lost.

**Before launch, connect a real handler.** The simplest option is
[Formspree](https://formspree.io):

1. Create a form, copy your endpoint (e.g. `https://formspree.io/f/abcdwxyz`).
2. In `Contact.tsx`, find the `onSubmit` handler (marked with a `TODO`) and POST:
   ```ts
   await fetch('https://formspree.io/f/your-id', {
     method: 'POST',
     headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
     body: JSON.stringify(state),
   })
   ```

Other good options: **Netlify Forms**, **Resend**, or a small serverless endpoint.
The newsletter signup in the footer is likewise a placeholder (TODO to connect
Mailchimp/Buttondown/etc.).

---

## Deploying to Vercel

1. Push this project to a GitHub/GitLab repo.
2. In [Vercel](https://vercel.com), **Add New → Project** and import the repo.
3. Vercel auto-detects Vite. Confirm:
   - **Build command:** `npm run build`
   - **Output directory:** `dist`
4. Deploy. The included `vercel.json` handles SPA routing (so `/menu`, `/about`, etc.
   work on refresh) and long-cache headers for assets.
5. Add the custom domain `spontaneousconfections.com` in **Project → Settings →
   Domains**.

> No environment variables are required for the current build. (You’ll add one if you
> wire the contact form to a hosted service.)

You can also deploy the `dist/` folder to Netlify, Cloudflare Pages, or any static host
— just configure an SPA fallback to `index.html`.

---

## Accessibility & SEO

This site was built to strong WCAG basics: semantic landmarks, exactly one `<h1>` per
page, logical heading order, visible focus rings, full keyboard navigation (including
the mobile menu, which closes on Escape), 44px touch targets, labelled form fields with
inline errors, alt text, and `prefers-reduced-motion` support.

SEO includes per-page titles & meta descriptions, Open Graph/Twitter tags, a
`Bakery` LocalBusiness JSON-LD block (`index.html`), `robots.txt`, and `sitemap.xml`.
Update the JSON-LD’s `openingHoursSpecification` once hours are confirmed (a TODO marks
it), and update the domain in `sitemap.xml`/`index.html` if it ever changes.

---

## ✅ Client content still needed

Most of the site is built from verified public info. Please confirm/provide:

- [x] **Logo** — reproduced as inline vector in the brand colors. Optional: provide the
      exact raster/vector export for pixel-perfect fidelity, plus a 1200×630 social image.
- [ ] **Real photos** of the shop, pastries, and the owners (with rights to use them).
- [ ] **Confirmed hours.** Two different sets are published online; we used
      **Thu–Sat 1–6 PM** (closed Sun–Wed). Confirm and update `site.ts`.
- [ ] **Public email address** for the contact form (placeholder:
      `hello@spontaneousconfections.com`).
- [ ] **Menu prices & current availability** (we used “Ask in shop” / “Seasonal”).
- [ ] **Real upcoming events** to replace the three sample entries in `events.ts`.
- [ ] **Contact form backend** (Formspree/Netlify/Resend) + newsletter provider.
- [ ] Confirm how personal to keep the founder’s story on the About page (it references
      the veteran origin from public press). Founding year is set to **2023** per the logo.
- [ ] Any **additional press** to add to the Media page, plus exact dates/bylines for
      the two Good Times features flagged `TODO` in `media.ts`.
- [ ] Confirm there’s no **TikTok** (none was found) and that the **Facebook**/Linktree
      links in `social.ts` are correct.

---

Built with care for Spontaneous Confections · Capitola, California.
