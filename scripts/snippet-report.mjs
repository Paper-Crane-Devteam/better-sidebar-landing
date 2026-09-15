// Reports title/description that exceed Google's SERP display budget, reading
// the source frontmatter rather than built HTML so the output points at the
// file you need to edit. Run with `node scripts/snippet-report.mjs`.
import { readdir, readFile } from 'node:fs/promises';

const docs = new URL('../docs/', import.meta.url);
const cjk = /[\u1100-\u115F\u2E80-\uA4CF\uAC00-\uD7A3\uF900-\uFAFF\uFE30-\uFE4F\uFF00-\uFF60\uFFE0-\uFFE6]/;
const width = text => [...text].reduce((n, c) => n + (cjk.test(c) ? 2 : 1), 0);

async function walk(dir, prefix = '') {
  const entries = await readdir(dir, { withFileTypes: true });
  return (await Promise.all(entries.map(e => e.isDirectory()
    ? walk(new URL(`${e.name}/`, dir), `${prefix}${e.name}/`)
    : `${prefix}${e.name}`))).flat();
}

const files = (await walk(docs)).filter(f => /\.(md|mdx)$/.test(f) && !f.startsWith('public/'));
const rows = [];
for (const file of files) {
  const raw = await readFile(new URL(file, docs), 'utf8');
  if (!raw.startsWith('---')) continue;
  const fm = raw.slice(3, raw.indexOf('\n---', 3));
  const read = key => {
    const m = fm.match(new RegExp(`^${key}:[ \\t]*(.*)$`, 'm'));
    if (!m) return '';
    return m[1].trim().replace(/^(['"])([\s\S]*)\1$/, '$2');
  };
  for (const [key, budget] of [['title', 60], ['description', 160]]) {
    const value = read(key);
    if (!value) continue;
    const w = width(value);
    if (w > budget) rows.push({ file, key, w, budget, over: w - budget, value });
  }
}
rows.sort((a, b) => b.over - a.over);
for (const r of rows) {
  console.log(`${String(r.w).padStart(3)}/${r.budget}  +${String(r.over).padEnd(3)} ${r.file}  [${r.key}]`);
  console.log(`      ${r.value}`);
}
console.log(`\n${rows.length} over budget across ${new Set(rows.map(r => r.file)).size} file(s).`);
