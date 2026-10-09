// Copies only the deployable site into ./public (what Vercel serves): pages, assets, robots/sitemap/llms – no src/, scripts/, docs/…
//   Vercel: buildCommand "npm run build && node scripts/publish.mjs", outputDirectory "public"  (see vercel.json)
import { cp, rm, mkdir, access } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { routeKeys, pathFor, LANGS } from '../src/i18n/index.mjs';
import { posts } from '../src/blog.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const out = join(root, 'public');
const exists = (p) => access(p).then(() => true, () => false);

await rm(out, { recursive: true, force: true });
await mkdir(out, { recursive: true });

const dirs = new Set(['css', 'js', 'images', 'blog']);
for (const l of LANGS) for (const k of routeKeys()) dirs.add(pathFor(k, l).split('/').filter(Boolean)[0] === l ? l : pathFor(k, l).split('/').filter(Boolean)[0]);
const files = ['index.html', '404.html', 'robots.txt', 'sitemap.xml', 'llms.txt'];

for (const f of files) if (await exists(join(root, f))) await cp(join(root, f), join(out, f));
for (const d of dirs) if (d && await exists(join(root, d))) {
  await cp(join(root, d), join(out, d), { recursive: true, filter: (src) => !/[\\/]images[\\/]source([\\/]|$)/.test(src) && !src.endsWith('.DS_Store') });
}
console.log(`Published ${dirs.size} folders and ${files.length} root files to public/ (${posts.length} blog posts included)`);
