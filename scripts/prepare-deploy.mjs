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
// The homepage uses `pageType: custom`, which Rspress excludes from its
// frontmatter-title handling. theme/index.tsx overrides the title with a
// critical-priority useHead; these assertions fail the build if that override
// ever stops working, instead of silently shipping a bare "Better Sidebar".
const homepages = new Set(['index.html', 'zh/index.html', 'zh-tw/index.html', 'ja/index.html', 'es/index.html']);
// Text nodes escape `&` as `&amp;` while attribute values may leave it bare,
// so compare titles decoded rather than byte for byte.
const entities = { amp: '&', lt: '<', gt: '>', quot: '"', '#39': "'", apos: "'" };
const decode = text => text.replace(/&(amp|lt|gt|quot|#39|apos);/g, (_, name) => entities[name]);
// Google truncates snippets by rendered pixel width, not character count. CJK
// glyphs are about double-width, so weight them as 2 units. Over-budget text is
// reported, not fatal: it still indexes, the tail just gets cut off on the SERP.
const cjk = /[\u1100-\u115F\u2E80-\uA4CF\uAC00-\uD7A3\uF900-\uFAFF\uFE30-\uFE4F\uFF00-\uFF60\uFFE0-\uFFE6]/;
const width = text => [...text].reduce((n, c) => n + (cjk.test(c) ? 2 : 1), 0);
const truncated = [];
for (const file of pages) {
  const target = new URL(`better-sidebar/${file}`, output);
  let html = await readFile(target, 'utf8');
  const canonical = urlFor(file);
  assert(html.includes(`rel="canonical" href="${canonical}"`), `Incorrect canonical: ${file}`);
  assert.equal((html.match(/rel="canonical"/g) || []).length, 1);
  assert(html.includes('hreflang="'), `Missing language alternates: ${file}`);
  const title = html.match(/<title>([^<]*)<\/title>/)?.[1] ?? '';
  assert(title, `Missing title: ${file}`);
  assert(html.includes(`property="og:image" content="${origin}${base}images/og-cover.jpg"`), `Missing og:image: ${file}`);
  assert(html.includes('name="twitter:card" content="summary_large_image"'), `Missing Twitter card: ${file}`);
  const ogTitle = html.match(/property="og:title" content="([^"]*)"/)?.[1] ?? '';
  assert.equal(decode(ogTitle), decode(title), `og:title must match the page title: ${file}`);
  assert.equal((html.match(/property="og:title"/g) || []).length, 1, `Duplicate og:title: ${file}`);
  if (homepages.has(file)) {
    assert(/Gemini/i.test(title), `Homepage title lost its platform keywords: ${file} -> ${title}`);
    assert(html.includes('application/ld+json'), `Missing SoftwareApplication data: ${file}`);
  }
  const description = decode(html.match(/name="description" content="([^"]*)"/)?.[1] ?? '');
  const titleWidth = width(decode(title));
  const descWidth = width(description);
  if (titleWidth > 60) truncated.push(`  ${file}  title ${titleWidth}/60`);
  if (descWidth > 160) truncated.push(`  ${file}  description ${descWidth}/160`);
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
console.log(`Prepared ${pages.length} canonical pages, language alternates, Open Graph, Twitter cards, sitemap, redirects, and real 404 handling.`);
if (truncated.length) {
  console.log(`\n${truncated.length} snippet(s) exceed Google's display budget and will be cut off:`);
  console.log(truncated.join('\n'));
}
