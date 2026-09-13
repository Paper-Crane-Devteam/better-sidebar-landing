import { readdir, readFile, writeFile, mkdir, stat, rename, rm } from 'node:fs/promises';
import { spawnSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = fileURLToPath(new URL('../', import.meta.url));
const imageRoot = path.join(root, 'docs/public/images');
const cacheDir = path.join(root, '.image-cache');
const tool = process.env.CWEBP_BIN || 'cwebp';
if (spawnSync(tool, ['-version'], { stdio: 'ignore' }).status !== 0) {
  throw new Error('cwebp is required. On macOS: brew install webp. Or set CWEBP_BIN.');
}
await mkdir(cacheDir, { recursive: true });
const cacheFile = path.join(root, 'scripts/image-manifest.json');
let cache = {};
try { cache = JSON.parse(await readFile(cacheFile, 'utf8')); } catch (e) { if (e.code !== 'ENOENT') throw e; }
async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  return (await Promise.all(entries.map(e => e.isDirectory() ? walk(path.join(dir, e.name)) : path.join(dir, e.name)))).flat();
}
const replacements = [];
let before = 0, after = 0;
for (const file of await walk(imageRoot)) {
  if (!file.endsWith('.png') || /\.bak\./i.test(file)) continue;
  const bytes = await readFile(file);
  const hash = createHash('sha256').update(bytes).update('lossless-z6-exact-v1').digest('hex');
  const relative = path.relative(imageRoot, file).split(path.sep).join('/');
  const output = file.replace(/\.png$/, '.webp');
  let exists = false;
  try { await stat(output); exists = true; } catch (e) { if (e.code !== 'ENOENT') throw e; }
  if (cache[relative] !== hash || !exists) {
    if (exists && !cache[relative]) throw new Error(`Refusing to overwrite unmanaged WebP: ${relative}`);
    const temporary = path.join(cacheDir, `${hash}.webp`);
    const result = spawnSync(tool, ['-quiet', '-z', '6', '-exact', file, '-o', temporary], { encoding: 'utf8' });
    if (result.status !== 0) throw new Error(`Compression failed: ${relative}\n${result.stderr || ''}`);
    if ((await stat(temporary)).size >= bytes.length && !exists) { await rm(temporary); continue; }
    await rename(temporary, output);
    cache[relative] = hash;
    await writeFile(cacheFile, JSON.stringify(cache, null, 2) + '\n');
  }
  const size = (await stat(output)).size;
  before += bytes.length; after += size;
  replacements.push([`images/${relative}`, `images/${relative.replace(/\.png$/, '.webp')}`]);
  console.log(`${relative}: ${(bytes.length / 1024).toFixed(1)} → ${(size / 1024).toFixed(1)} KB`);
}
let changed = 0;
for (const file of [...await walk(path.join(root, 'docs')), ...await walk(path.join(root, 'theme'))]) {
  if (!/\.(md|mdx|tsx?|jsx?|css|json)$/.test(file) || file.startsWith(path.join(root, 'docs/public') + path.sep)) continue;
  const original = await readFile(file, 'utf8');
  let text = original;
  for (const [from, to] of replacements) text = text.replaceAll(from, to);
  if (text !== original) { await writeFile(file, text); changed++; }
}
console.log(`\n${replacements.length} lossless WebP images: ${(before / 1048576).toFixed(2)} → ${(after / 1048576).toFixed(2)} MB (${before ? (100 * (1 - after / before)).toFixed(1) : 0}% saved). Updated ${changed} source files. PNG originals retained; GIF and backup images skipped.`);
