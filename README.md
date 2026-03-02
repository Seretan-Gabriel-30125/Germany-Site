# Germany Handwerk Website (SvelteKit + Svelte 5)

## 1) Install
- Node.js LTS (>= 20)
- In this folder:
  ```bash
  npm i
  ```

## 2) Run locally
```bash
npm run dev -- --open
```

## 3) Replace placeholders (IMPORTANT)
Search/replace in the project:
- `DEINE-DOMAIN.de`
- `+49 000 000000`
- `info@DEINE-DOMAIN.de`

## 4) Contact form (static hosting – recommended)
Use Formspree:
- create a form at Formspree
- copy endpoint like `https://formspree.io/f/xxxxxxx`
- set it in `src/routes/kontakt/+page.svelte`:
  `const formspreeEndpoint = 'https://formspree.io/f/xxxxxxx';`

## 5) Sitemap
```bash
SITE_URL=https://example.de npm run gen:sitemap
```
This generates `static/sitemap.xml`.

## 6) Build / Preview
```bash
npm run build
npm run preview
```
