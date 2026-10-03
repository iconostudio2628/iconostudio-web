// Static site generator: writes the HTML pages (cs at the root, en under /en/, de under /de/),
// sitemap.xml and robots.txt into the project root.
//   npm run build            (or: SITE_URL=https://example.cz npm run build)
//   BUILD_LANGS=cs npm run build   → only some languages (handy while translating)
import { mkdir, writeFile, rm } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { site } from '../src/data.mjs';
import { servicePagesBase } from '../src/content.mjs';
import * as pages from '../src/pages.mjs';
import { LANGS, LANG_META, setLang, pathFor, fileFor } from '../src/i18n/index.mjs';
import { translationGaps } from '../src/i18n/coverage.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const only = (process.env.BUILD_LANGS || '').split(',').filter(Boolean);
const langs = only.length ? LANGS.filter((l) => only.includes(l)) : LANGS;

const gaps = translationGaps(langs);
if (gaps.length) {
  console.error(`\n✗ ${gaps.length} translation problem(s):\n${gaps.slice(0, 60).map((g) => `  - ${g}`).join('\n')}${gaps.length > 60 ? `\n  … and ${gaps.length - 60} more` : ''}\n`);
  process.exit(1);
}

const routes = [
  { key: 'home', render: pages.home, priority: '1.0' },
  { key: 'nails', render: pages.nailStudio, priority: '0.9' },
  { key: 'barber', render: pages.barbershop, priority: '0.9' },
  ...servicePagesBase.map((p) => ({ key: p.slug, render: () => pages.servicePage(p.slug), priority: '0.8' })),
  { key: 'cenik', render: pages.cenik, priority: '0.8' },
  { key: 'kontakt', render: pages.kontakt, priority: '0.7' },
];

async function write(rel, content) {
  const full = join(root, rel);
  await mkdir(dirname(full), { recursive: true });
  await writeFile(full, content);
}

let built = 0;
for (const lang of langs) {
  setLang(lang);
  for (const r of routes) { await write(fileFor(pathFor(r.key)), r.render()); built += 1; }
}
setLang('cs');
await write('404.html', pages.notFound());
built += 1;

if (site.url) {
  const lastmod = new Date().toISOString().slice(0, 10);
  const entry = (r, l) => {
    const alts = LANGS.map((x) => `    <xhtml:link rel="alternate" hreflang="${LANG_META[x].htmlLang}" href="${site.url}${pathFor(r.key, x)}"/>`);
    alts.push(`    <xhtml:link rel="alternate" hreflang="x-default" href="${site.url}${pathFor(r.key, 'cs')}"/>`);
    return `  <url>\n    <loc>${site.url}${pathFor(r.key, l)}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <priority>${r.priority}</priority>\n${alts.join('\n')}\n  </url>`;
  };
  await write('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${LANGS.flatMap((l) => routes.map((r) => entry(r, l))).join('\n')}
</urlset>
`);
  await write('robots.txt', `User-agent: *\nAllow: /\n\nSitemap: ${site.url}/sitemap.xml\n`);
} else {
  await rm(join(root, 'sitemap.xml'), { force: true }); // never leave a sitemap that points at a different domain
  await write('robots.txt', 'User-agent: *\nAllow: /\n');
  console.warn('\n⚠  SITE_URL is not set – canonical tags, hreflang, og:url, JSON-LD urls and sitemap.xml were skipped.\n   Set `url` in src/data.mjs or run: SITE_URL=https://your-domain.cz npm run build\n');
}
console.log(`Built ${built} pages (${langs.join(', ')}).`);
