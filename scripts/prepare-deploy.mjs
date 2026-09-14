import { cp, mkdir, readdir, readFile, rm, writeFile } from 'node:fs/promises';
import assert from 'node:assert/strict';

const origin = 'https://papercranedev.com';
const base = '/better-sidebar/';
const output = new URL('../deploy_assets/', import.meta.url);
const source = new URL('../doc_build/', import.meta.url);
async function walk(dir, prefix = '') {
  const entries = await readdir(dir, { withFileTypes: true });
  return (await Promise.all(entries.map(e => e.isDirectory()
    ? walk(new URL(`${e.name}/`, dir), `${prefix}${e.name}/`)
    : `${prefix}${e.name}`))).flat();
}
const files = await walk(source);
const pages = files.filter(f => f.endsWith('.html') && f !== '404.html');
const urlFor = file => origin + base + file.replace(/index\.html$/, '').replace(/\.html$/, '');
await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
await cp(source, new URL('better-sidebar/', output), { recursive: true });
const redirects = [`/ ${origin}${base} 301`, `/better-sidebar ${base} 301`];
const canonicalPaths = new Set(pages.map(f => new URL(urlFor(f)).pathname));
const aliases = new Map();
function alias(from, to) {
  if (!canonicalPaths.has(from) && canonicalPaths.has(to)) aliases.set(from, to);
}
// Preserve old guide URLs and work around locale-menu links emitted without
// /guide/.
const legacyGuides = {
  'folders-and-tags': 'sidebar/library-tab',
  'prompt-library': 'sidebar/prompts-tab',
  search: 'sidebar/search-tab',
  export: 'extras/export',
  'drive-sync': 'extras/drive-sync',
};
for (const route of canonicalPaths) {
  if (route.startsWith(`${base}guide/`)) {
    alias(route.replace(`${base}guide/`, base), route);
    alias(route.replace(base, `${base}zh/`), route);
  }
}
for (const locale of ['', 'zh/', 'zh-tw/', 'ja/', 'es/']) {
  for (const [old, current] of Object.entries(legacyGuides)) {
    alias(`${base}${locale}guide/${old}`, `${base}${locale}guide/${current}`);
  }
}
for (const file of pages) {
  const target = new URL(`better-sidebar/${file}`, output);
  let html = await readFile(target, 'utf8');
  const canonical = urlFor(file);
  assert(html.includes(`rel="canonical" href="${canonical}"`), `Incorrect canonical: ${file}`);
  assert.equal((html.match(/rel="canonical"/g) || []).length, 1);
  assert(html.includes('hreflang="'), `Missing language alternates: ${file}`);
  const canonicalPath = new URL(canonical).pathname;
  redirects.push(`${base}${file} ${canonicalPath} 301`);
  if (!file.endsWith('index.html')) redirects.push(`${canonicalPath}/ ${canonicalPath} 301`);
}
let notFound = await readFile(new URL('404.html', source), 'utf8');
if (!notFound.includes('name="robots"')) notFound = notFound.replace('</head>', '<meta name="robots" content="noindex"></head>');
await writeFile(new URL('404.html', output), notFound);
await writeFile(new URL('better-sidebar/404.html', output), notFound);
redirects.push(...[...aliases].map(([from, to]) => `${from} ${to} 301`));
await writeFile(new URL('_redirects', output), redirects.join('\n') + '\n');
await writeFile(new URL('robots.txt', output), `User-agent: *\nAllow: /\n\nSitemap: ${origin}/sitemap.xml\n`);
await writeFile(new URL('sitemap.xml', output), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${pages.map(f => `  <url><loc>${urlFor(f)}</loc></url>`).join('\n')}\n</urlset>\n`);
console.log(`Prepared ${pages.length} canonical pages, language alternates, sitemap, redirects, and real 404 handling.`);
