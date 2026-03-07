# FrostedByte Developer Website

Production-ready React + Vite website exported from Figma Make and prepared for Hostinger deployment.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

Build output is generated in `dist/`.

## Hostinger deployment (Apache)

1. Run `npm run build`.
2. Upload the full contents of `dist/` to your Hostinger web root (`public_html` or domain folder).
3. Confirm these files are present on the server root:
   - `index.html`
   - `.htaccess` (SPA routing fallback)
   - `assets/`
   - `robots.txt`
   - `sitemap.xml`
4. Open the site and test deep links directly:
   - `/privacy`
   - `/terms`
   - `/data-deletion`
   - `/support`
   - `/contact`

## Policy pages included

- `/policies` (policy center)
- `/privacy`
- `/terms`
- `/data-deletion`

## Important production checklist

- Replace placeholder App Store / Google Play links in `src/app/data/apps.ts`.
- Confirm support email domain is active: `support@frostedbyte.thedigimavericks.com`.
- If domain changes, update URLs in:
  - `public/robots.txt`
  - `public/sitemap.xml`
