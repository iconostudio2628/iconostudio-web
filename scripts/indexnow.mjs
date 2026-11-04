// Submits every URL of sitemap.xml to IndexNow (Bing, Yandex, Seznam, Naver …; Google does not use IndexNow).
//   node scripts/indexnow.mjs            → all URLs from the local sitemap.xml
//   node scripts/indexnow.mjs /url1/ …   → only the given paths
// The key file https://icono-studio.cz/<key>.txt must already be live (it is copied by scripts/publish.mjs).
import { readFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { INDEXNOW_KEY } from './indexnow-key.mjs';
import { site } from '../src/data.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const host = new URL(site.url).host;
const args = process.argv.slice(2);
const urls = args.length
  ? args.map((p) => `${site.url}${p}`)
  : [...(await readFile(join(root, 'sitemap.xml'), 'utf8')).matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);

const keyUrl = `${site.url}/${INDEXNOW_KEY}.txt`;
const live = await fetch(keyUrl).then((r) => r.text()).catch(() => '');
if (live.trim() !== INDEXNOW_KEY) { console.error(`✗ key file is not live at ${keyUrl} – deploy first.`); process.exit(1); }

const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host, key: INDEXNOW_KEY, keyLocation: keyUrl, urlList: urls }),
});
console.log(`IndexNow: ${urls.length} URLs → HTTP ${res.status} ${res.statusText}`);
process.exit(res.status === 200 || res.status === 202 ? 0 : 1);
