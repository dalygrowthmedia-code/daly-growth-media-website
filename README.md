# Daly Growth Media website

A clean, responsive Next.js + Tailwind CSS single-page marketing site for Daly Growth Media.

## Run locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Build

```bash
npm run build
npm run start
```

## Assets

Put all brand and photography files in `public/assets`.

The site currently uses:

- `public/assets/logo.png` for the header and footer logo mark
- `public/assets/social-cover.png` for Facebook, LinkedIn and large social link previews
- `public/assets/hero-image-optimized.webp` for the hero image
- `public/assets/sean-daly-photo.webp` for the main About photo
- `public/assets/sean-daly-portrait-optimized.webp` for the main story photo
- `public/assets/sean-daly-working-optimized.webp` for the secondary story photo
- `public/assets/achievement-all-ireland.webp` for the first achievement photo
- `public/assets/achievement-hurling.webp` for the second achievement photo
- `public/assets/achievement-patch.webp` for the third achievement photo
- `public/assets/achievement-event.jpg` is stored for future results or story use

The original full-size images can stay in `public/assets`, but the site points at the optimised WebP versions for speed.

## Content to review

The main copy has been drafted in `app/page.tsx`. Before launch, review:

- The About / My Story copy
- The achievement card wording
- The service descriptions
- The contact email, currently `sean@dalygrowthmedia.com`

The contact form currently opens the visitor's email app with a mailto action. For a fully hosted form, replace it with your preferred form handler, such as a Vercel serverless route, Formspree, Tally or another service.

## Deploy to Vercel

1. Push this project to GitHub.
2. Import the repository in Vercel.
3. Use the default Next.js settings.
4. Add the real assets in `public/assets` before deploying.

The page uses semantic sections, accessible labels, strong colour contrast and reduced-motion-friendly animation.
