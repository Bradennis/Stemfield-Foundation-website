# STEMFIELD Foundation Website

A React + Vite rebuild of the STEMFIELD Foundation site, matching the site you started
building in Hostinger Horizons.

## Pages
- `/` — Home (hero, impact stats, mission teaser, CTA band)
- `/about` — Our story, vision & mission, team
- `/programs` — Robotics & Coding Lab, Math Olympiad Training, Environmental Science Projects
- `/get-involved` — Ways to get involved, donation tiers, volunteer sign-up form
- `/contact` — Contact form + office details

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL it prints (usually http://localhost:5173).

To build for production:

```bash
npm run build
```

This outputs a `dist/` folder you can deploy to Hostinger, Netlify, Vercel, or any static host.

## What to customize next

1. **Images** — every photo currently points to a Picsum.photos placeholder (search each
   `pages/*.jsx` file for `picsum.photos`). Swap these `src` values for your own photos
   once you have them, or drop files into `src/assets/` and import them.
2. **Content** — all text lives directly in `src/pages/*.jsx` and `src/data/content.js`
   (stats, programs, team members, pricing tiers). Edit those directly.
3. **Colors/fonts** — the design tokens (blue accent, navy, fonts) are all defined as CSS
   variables at the top of `src/index.css`. Change them once and they apply everywhere.
4. **Forms** — the volunteer and contact forms currently just show a success message on
   submit; they don't send anywhere yet. Once you're ready, wire them up to an email
   service (e.g. Formspree, EmailJS) or a small backend like the ones you built for
   Kaysens/Kwaaba (Node/Express).
5. **Donate now / payment** — the pricing cards' buttons aren't wired to a payment
   processor yet. You'll want something like Paystack or Flutterwave for Ghana.

## Project structure

```
src/
  components/   Header, Footer, PageHero, SocialIcon (shared across pages)
  pages/        One file + one CSS file per page
  data/         content.js — stats, programs, team, pricing (edit here for quick text changes)
  index.css     Design tokens (colors, fonts, spacing) + shared utility classes
```
