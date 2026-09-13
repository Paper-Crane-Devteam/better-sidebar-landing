import { readFile } from 'node:fs/promises';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
const dry = process.argv.includes('--dry-run');
if (process.argv.slice(2).some(arg => arg !== '--dry-run')) {
  throw new Error('Usage: node scripts/deploy.mjs [--dry-run]');
}
const env = { ...process.env, WRANGLER_SEND_METRICS: 'false' };
if (!dry && (!env.CLOUDFLARE_API_TOKEN || !env.CLOUDFLARE_ACCOUNT_ID)) {
  const location = process.env.CLOUDFLARE_CREDENTIALS_FILE || new URL('../../.kiro/secrets/cloudflare.md', import.meta.url);
  let text;
  try { text = await readFile(location, 'utf8'); }
  catch { throw new Error('Cloudflare credentials missing. Set CLOUDFLARE_API_TOKEN and CLOUDFLARE_ACCOUNT_ID, or provide ../.kiro/secrets/cloudflare.md.'); }
  env.CLOUDFLARE_API_TOKEN ||= text.match(/^apitoken:\s*(\S+)\s*$/mi)?.[1];
  env.CLOUDFLARE_ACCOUNT_ID ||= text.match(/^accountid:\s*(\S+)\s*$/mi)?.[1];
  if (!env.CLOUDFLARE_API_TOKEN || !/^[a-f0-9]{32}$/i.test(env.CLOUDFLARE_ACCOUNT_ID || '')) {
    throw new Error('Cloudflare credential file requires apitoken: and accountid: fields.');
  }
}
function run(command, args, childEnv) {
  const result = spawnSync(command, args, { cwd: root, env: childEnv, stdio: 'inherit' });
  if (result.error) throw new Error(`Cannot start ${command}: ${result.error.code}`);
  if (result.status !== 0) process.exit(result.status || 1);
}
// Credentials are passed only to Wrangler, never as command-line arguments.
run('npm', ['run', 'build'], process.env);
run(process.execPath, [fileURLToPath(new URL('../node_modules/wrangler/bin/wrangler.js', import.meta.url)), 'deploy', ...(dry ? ['--dry-run'] : [])], env);
