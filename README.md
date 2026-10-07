# Better Sidebar Landing & Docs

Landing page and documentation site for Better Sidebar, built with [Rspress](https://rspress.dev).

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Rspress output goes to `doc_build/`. The build then prepares `deploy_assets/`,
mounting the site at `/better-sidebar/` for Cloudflare and generating canonical
URL checks, language alternates, `sitemap.xml`, `robots.txt`, and redirects.

## Production deployment and SEO

Run `npm run deploy`. The script builds the site, checks SEO output, then
publishes it with Wrangler. Credentials are read from environment variables
`CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID`, falling back to
`../.kiro/secrets/cloudflare.md` (fields `apitoken:` and `accountid:`).
Use `CLOUDFLARE_CREDENTIALS_FILE` to override that file path.
Credentials are passed through the environment to Wrangler, never printed
or bundled. Never commit credentials.

`npm run deploy:dry` builds and validates the deployment without publishing
or requiring credentials.

### Batch image compression

```bash
npm run images:compress    # Compress PNG images and update source references
npm run deploy:optimized   # Compress, build, and publish in one command
```

Uses Google's local `cwebp` CLI in lossless mode, with no npm dependencies,
API key, upload, or usage quota. On another Mac, install it using
`brew install webp`, or set `CWEBP_BIN` to its executable path.
The current machine already has it installed.

The script processes `docs/public/images/**/*.png`, generates neighboring
`.webp` files, and updates image references in `docs/` and `theme/`.
PNG originals remain available. GIFs and `.bak.` files are skipped.
New conversions that are larger than their originals are skipped.
`scripts/image-manifest.json` tracks source hashes; unchanged images are
not recompressed. Commit the manifest, WebP files, and updated source files
together. Original files remain in deployment output for existing links;
the reported savings describe the converted images, not total upload size.
https://papercranedev.com/ is the Paper Crane Dev studio home: plain HTML/CSS
in `studio/`, copied to the deploy root by `scripts/prepare-deploy.mjs`
(assets under `/studio/`). It is not part of Rspress, so `npm run dev` doesn't
serve it; preview it with `npx wrangler dev` after `npm run build`. Add new
products to its cards and footer, and to `theme/components/family.ts`.
Store links on it carry `utm_source=papercranedev.com&utm_campaign=studio-home`,
which the Chrome Web Store dashboard breaks down under page views.
Better Sidebar's homepage is https://papercranedev.com/better-sidebar/.
Submit https://papercranedev.com/sitemap.xml in Google Search Console. It is a
sitemap index: `/sitemap-pages.xml` (studio home + Better Sidebar, generated
here) plus each sibling Worker's own sitemap, e.g. `/better-playlists/sitemap.xml`
(maintained in that repo). New products go in `SIBLING_SITEMAPS` in
`scripts/prepare-deploy.mjs`.
The root must not redirect: keep no Cloudflare zone-level redirect rule on `/`.
Unknown URLs intentionally return HTTP 404; do not enable SPA fallback.
`Page with redirect` is expected for aliases; inspect the final canonical URL
in Search Console to check indexing. Deployment does not force Google to index.

## Project Structure

```
├── docs/               # Documentation content
│   ├── en/            # English pages
│   │   ├── guide/    # User guide (docs section)
│   │   ├── privacy.md
│   │   └── index.mdx # Landing page (custom pageType)
│   ├── zh/            # Chinese pages (mirrored structure)
│   └── public/        # Static assets (favicon, images)
├── theme/             # Custom theme overrides
│   ├── components/    # Landing page React components
│   ├── index.css      # Theme CSS with Tailwind + brand colors
│   └── index.tsx      # Theme entry
├── rspress.config.ts  # Rspress configuration
├── postcss.config.mjs # PostCSS config for Tailwind CSS
└── tsconfig.json
```

## Features

- Rspress v2 static site generator with Rspack
- Custom landing page preserved from original React SPA
- Tailwind CSS v4 for styling
- i18n (English + Chinese)
- Full-text search (built-in)
- Docs/Guide section for user tutorials
