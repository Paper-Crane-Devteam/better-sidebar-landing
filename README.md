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

Output goes to `doc_build/`.

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
