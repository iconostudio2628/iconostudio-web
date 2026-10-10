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
import { posts, blogPost, blogIndex } from '../src/blog.mjs';
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

// Plain-text fact sheet for AI assistants (optional convention; Google Search does not use it). Facts come from data.mjs only.
function llmsTxt() {
  const u = (p) => `${site.url}${p}`;
  const svc = servicePagesBase.map((p) => `- [${p.name}](${u(`/${p.slug}/`)})`).join('\n');
  return `# ICONO STUDIO

> Barber (barbershop) a nail salon (nehtové studio) na Praze 2 u I. P. Pavlova. Pánské střihy, úprava vousů, manikúra, gelové a akrylové nehty, pedikúra, prodlužování řas, obočí a Head Spa. Rezervace online, ceník na webu.

## Fakta
- Adresa: ${site.street}, ${site.postalCode} Praha 2 – ${site.district}
- Telefon: ${site.phoneDisplay}
- Otevírací doba: ${site.hours.map((h) => `${h.dayKey === 'weekdays' ? 'Po–Pá' : 'So'} ${h.display}`).join(', ')}; neděle zavřeno, nebo dle rezervace
- Rezervace: ${site.booking.page}
- Google profil: ${site.googleBusinessUrl}
- Jazyky webu: čeština, angličtina (/en/), němčina (/de/)
- IČO: ${site.ico}

## Hlavní stránky
- [Barber Praha 2](${u('/barbershop-praha-2/')})
- [Nail salon Praha 2](${u('/nail-studio-praha-2/')})
- [Ceník](${u('/cenik/')})
- [Kontakt](${u('/kontakt/')})

## Služby
${svc}

## Blog
${posts.map((p) => `- [${p.h1}](${u(`/blog/${p.slug}/`)}): ${p.teaser}`).join('\n')}
`;
}

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
await write('blog/index.html', blogIndex());
built += 1;
for (const p of posts) { await write(`blog/${p.slug}/index.html`, blogPost(p.slug)); built += 1; }
await write('404.html', pages.notFound());
built += 1;

if (site.url) {
  const lastmod = process.env.LASTMOD || '2026-10-10'; // content date – not the build date, so unchanged pages keep a stable lastmod
  const entry = (r, l) => {
    const alts = LANGS.map((x) => `    <xhtml:link rel="alternate" hreflang="${LANG_META[x].htmlLang}" href="${site.url}${pathFor(r.key, x)}"/>`);
    alts.push(`    <xhtml:link rel="alternate" hreflang="x-default" href="${site.url}${pathFor(r.key, 'cs')}"/>`);
    return `  <url>\n    <loc>${site.url}${pathFor(r.key, l)}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <priority>${r.priority}</priority>\n${alts.join('\n')}\n  </url>`;
  };
  const blogUrls = ['/blog/', ...posts.map((p) => `/blog/${p.slug}/`)]
    .map((u) => `  <url>\n    <loc>${site.url}${u}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <priority>${u === '/blog/' ? '0.5' : '0.6'}</priority>\n  </url>`);
  await write('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${[...LANGS.flatMap((l) => routes.map((r) => entry(r, l))), ...blogUrls].join('\n')}
</urlset>
`);
  // Everything is open to crawlers; search-answer bots are named on purpose so the intent is explicit.
  const searchBots = ['Googlebot', 'Bingbot', 'OAI-SearchBot', 'Claude-SearchBot', 'PerplexityBot', 'Applebot'];
  await write('robots.txt', `${searchBots.map((b) => `User-agent: ${b}\nAllow: /\n`).join('\n')}\nUser-agent: *\nAllow: /\n\nSitemap: ${site.url}/sitemap.xml\n`);
  await write('llms.txt', llmsTxt());
} else {
  await rm(join(root, 'sitemap.xml'), { force: true }); // never leave a sitemap that points at a different domain
  await rm(join(root, 'llms.txt'), { force: true });
  await write('robots.txt', 'User-agent: *\nAllow: /\n');
  console.warn('\n⚠  SITE_URL is not set – canonical tags, hreflang, og:url, JSON-LD urls and sitemap.xml were skipped.\n   Set `url` in src/data.mjs or run: SITE_URL=https://your-domain.cz npm run build\n');
}
console.log(`Built ${built} pages (${langs.join(', ')}).`);
