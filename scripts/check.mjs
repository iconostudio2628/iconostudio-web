// On-page SEO / integrity check over the built HTML (all languages).   npm run check
//   - one H1, title ≤ 60, meta description 120–160, unique titles/descriptions per language
//   - every internal link / anchor / image resolves, every <img> has alt, JSON-LD parses, no duplicate ids
//   - visible word count per page vs. the content-quality gates
//   - every amount written in prose matches the price list (in the page's own currency format)
//   - translated pages contain no leftover Czech text and no “Kč”; the language switch links to real pages
import { readFile, access } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { servicePagesBase } from '../src/content.mjs';
import { posts } from '../src/blog.mjs';
import { allItems, site } from '../src/data.mjs';
import { LANGS, LANG_META, pathFor, fileFor, routeKeys } from '../src/i18n/index.mjs';
import { translationGaps } from '../src/i18n/coverage.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const keys = routeKeys();
const serviceKeys = new Set(servicePagesBase.map((p) => p.slug));
const minWords = (k) => (k === 'home' ? 500 : serviceKeys.has(k) ? 800 : k === 'cenik' ? 300 : k === 'kontakt' ? 250 : 400);

const exists = (p) => access(p).then(() => true, () => false);
const decode = (s) => s.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&nbsp;/g, ' ').replace(/&#39;/g, "'");
let problems = 0;
const warn = (f, msg) => { problems += 1; console.log(`  ✗ ${f}: ${msg}`); };

// numbers that may appear in prose without being a price-list entry (differences between two prices)
const priceNumbers = new Set(allItems.flatMap((it) => (it.variants ? it.variants.map((v) => v.price) : [it.price])));
// Only literal price-list amounts may appear in the text – no sums, differences or computed discounts.
const derived = new Set();
const CZECH_ONLY = /[ěščřžůďťňĚŠČŘŽŮĎŤŇ]/g;
const CZECH_OK = /Bělehradsk\w*|BĚLEHRADSK\w*|Náměstí|IČO|Míru|Město/g;

for (const gap of translationGaps()) warn('translations', gap);

const skeletons = new Map(); // service-page “skeleton” → page, per language (identical skeletons = same template)
for (const lang of LANGS) {
  console.log(`\n── ${lang} ──`);
  const seen = { title: new Map(), desc: new Map() };
  const svcText = new Map();
  for (const key of keys) {
    const f = fileFor(pathFor(key, lang));
    if (!(await exists(join(root, f)))) { warn(f, 'missing – run npm run build'); continue; }
    const html = await readFile(join(root, f), 'utf8');
    const title = decode((html.match(/<title>([\s\S]*?)<\/title>/) || [])[1] || '');
    const desc = decode((html.match(/<meta name="description" content="([^"]*)"/) || [])[1] || '');
    const h1s = html.match(/<h1[\s>]/g) || [];
    const main = (html.match(/<main[\s\S]*?<\/main>/) || [''])[0];
    const text = decode(main.replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>/g, ' ').replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ').trim();
    const words = text ? text.split(' ').length : 0;
    // same text, but element boundaries kept visible so “Children up to 8” + “400 CZK” cannot merge into “8 400 CZK”
    const spaced = decode(main.replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>/g, ' ').replace(/<[^>]+>/g, '¦')).replace(/\s+/g, ' ');

    if (!html.includes(`<html lang="${LANG_META[lang].htmlLang}"`)) warn(f, 'wrong <html lang>');
    if (title.length < 30 || title.length > 60) warn(f, `title length ${title.length}: “${title}”`);
    if (desc.length < 120 || desc.length > 160) warn(f, `description length ${desc.length}: “${desc}”`);
    if (h1s.length !== 1) warn(f, `${h1s.length} <h1>`);
    if (seen.title.has(title)) warn(f, `duplicate title (also ${seen.title.get(title)})`); seen.title.set(title, f);
    if (seen.desc.has(desc)) warn(f, `duplicate description (also ${seen.desc.get(desc)})`); seen.desc.set(desc, f);
    if (words < minWords(key)) warn(f, `only ${words} words (gate ${minWords(key)})`);

    for (const m of html.matchAll(/<img\b[^>]*>/g)) {
      if (!/\balt="/.test(m[0])) warn(f, `img without alt: ${m[0].slice(0, 80)}`);
      const src = (m[0].match(/\bsrc="([^"]+)"/) || [])[1];
      if (src && src.startsWith('/') && !(await exists(join(root, src)))) warn(f, `missing image ${src}`);
    }
    for (const tag of html.matchAll(/<a\b[^>]*>/g)) {
      const m = tag[0].match(/\bhref="(\/[^"#?]*)(?:#([^"]*))?"/);
      if (!m) continue;
      const [, path, hash] = m;
      const isSwitch = tag[0].includes('hreflang=');
      const target = path.endsWith('/') ? join(root, path, 'index.html') : join(root, path);
      if (!(await exists(target))) { warn(f, `broken link ${path}`); continue; }
      if (hash && path.endsWith('/')) {
        const dest = await readFile(target, 'utf8');
        if (!dest.includes(`id="${hash}"`)) warn(f, `missing anchor ${path}#${hash}`);
      }
      // internal links must stay inside the page's language (404 and assets excepted)
      if (path.endsWith('/') && lang !== 'cs' && !path.startsWith(`/${lang}/`) && !path.startsWith('/blog/') && !isSwitch) warn(f, `link leaves the ${lang} site: ${path}`);
      if (path.endsWith('/') && lang === 'cs' && /^\/(en|de)\//.test(path) && !isSwitch) warn(f, `link leaves the cs site: ${path}`);
    }
    const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]);
    const dup = ids.filter((id, i) => ids.indexOf(id) !== i);
    if (dup.length) warn(f, `duplicate id(s): ${[...new Set(dup)].join(', ')}`);
    for (const m of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
      try { JSON.parse(m[1]); } catch { warn(f, 'invalid JSON-LD'); }
    }

    // language switch: three links, each to an existing page, current one marked
    const sw = [...html.matchAll(/<a class="lang-btn[^"]*" href="([^"]+)" hreflang="(\w+)"([^>]*)>/g)].filter((m, i, a) => a.findIndex((x) => x[2] === m[2]) === i);
    if (sw.length !== LANGS.length) warn(f, `language switch has ${sw.length} links`);
    for (const [, href, hl] of sw) {
      const l = LANGS.find((x) => LANG_META[x].htmlLang === hl);
      if (href !== pathFor(key, l)) warn(f, `language switch ${hl} → ${href}, expected ${pathFor(key, l)}`);
      if (!(await exists(join(root, fileFor(href))))) warn(f, `language switch target missing ${href}`);
    }

    // amounts in prose
    for (const m of spaced.matchAll(/(\d[\d.,  ]*\d|\d)\s?(Kč|CZK)/g)) {
      const n = Number(m[1].replace(/\D/g, ''));
      if (!priceNumbers.has(n) && !derived.has(n)) warn(f, `amount ${m[0]} is not in the price list`);
    }
    if (lang !== 'cs') {
      if (/\bKč\b/.test(text)) warn(f, 'contains “Kč” (use CZK)');
      const left = text.replace(CZECH_OK, '').match(CZECH_ONLY);
      if (left) warn(f, `leftover Czech characters (${[...new Set(left)].join('')}) – untranslated text?`);
    }
    // ---- conversion layer: every page has a sticky bar; service pages have art hero, signature block, CTAs ----
    if (!html.includes('data-sticky-cta')) warn(f, 'no sticky CTA bar');
    // booking: service pages open their own service, every other page opens the booking page; no WhatsApp / SMS CTAs left
    const bookUrls = [...html.matchAll(/href="(https:\/\/iconostudio\.setmore\.com[^"]*)"/g)].map((m) => m[1]);
    const ownBooking = site.booking.services[key] || site.booking.page;
    if (!bookUrls.length) warn(f, 'no booking link');
    if (bookUrls.some((u) => u !== ownBooking)) warn(f, `booking link that does not open ${ownBooking}`);
    if (/wa\.me\/|href="sms:/.test(html)) warn(f, 'WhatsApp / SMS link left on the page');
    if (serviceKeys.has(key)) {
      const ctas = (html.match(/data-cta="/g) || []).length;
      const places = new Set([...html.matchAll(/data-cta="([^"]+)"/g)].map((m) => m[1]));
      if (!/svc-hero-img--art"[^>]*><img src="\/images\/service\/[\w-]+-1120\.webp"/.test(html)) warn(f, 'hero does not use the service photo');
      if (!/class="section section--\w+ sig sig--\w+"/.test(main)) warn(f, 'no signature block');
      if ((main.match(/class="band"/g) || []).length < 2) warn(f, 'fewer than 2 CTA bands');
      if (!html.includes(`href="${site.booking.services[key]}"`)) warn(f, 'no booking link to this service');
      if (ctas < 12) warn(f, `only ${ctas} tracked CTAs`);
      for (const need of ['hero', 'band', 'combo', 'final', 'sticky']) if (!places.has(need)) warn(f, `no “${need}” CTA`);
      if (!['option', 'table', 'sig'].some((x) => places.has(x))) warn(f, 'no CTA next to the options / comparison / signature block');
      const skeleton = [...main.matchAll(/<section class="([^"]*)"(?: id="([^"]*)")?/g)].map((m) => `${(m[1].match(/sig--\w+/) || [m[1].includes('band') ? 'band' : ''])[0]}#${m[2] || ''}`).join(' ');
      if (skeletons.has(`${lang}:${skeleton}`)) warn(f, `same section skeleton as ${skeletons.get(`${lang}:${skeleton}`)}`);
      skeletons.set(`${lang}:${skeleton}`, f);
      svcText.set(key, text);
    }
    console.log(`${f.padEnd(52)} words ${String(words).padStart(5)}  title ${title.length}  desc ${desc.length}`);
  }

  // How much of a service page is text that also appears on another service page (shared boilerplate: location,
  // opening hours, order FAQ, CTA wording …). 6-word shingles; one-way containment.
  const shingles = (txt) => { const w = txt.toLowerCase().split(/\s+/); const set = new Set(); for (let i = 0; i + 6 <= w.length; i += 1) set.add(w.slice(i, i + 6).join(' ')); return set; };
  const sh = new Map([...svcText].map(([k, v]) => [k, shingles(v)]));
  let worst = { pct: 0 };
  for (const [a, A] of sh) {
    const others = new Set(); for (const [b, B] of sh) if (a !== b) B.forEach((x) => others.add(x));
    const shared = [...A].filter((x) => others.has(x)).length;
    const pct = A.size ? shared / A.size : 0;
    if (pct > worst.pct) worst = { pct, key: a };
    if (pct > 0.5) warn(fileFor(pathFor(a, lang)), `${Math.round(pct * 100)}% of the text also appears on other service pages`);
  }
  console.log(`  shared-text share (max over service pages): ${Math.round(worst.pct * 100)}% (${worst.key})`);
}

const text100 = (m) => decode(m.replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>/g, ' ').replace(/<[^>]+>/g, ' ')).split(/\s+/).filter(Boolean).slice(0, 220).join(' ');
// ---- blog (Czech only): same hygiene as the pages, plus amounts-in-prose against the price list ----
console.log('\n── blog ──');
for (const f of ['blog/index.html', ...posts.map((p) => `blog/${p.slug}/index.html`)]) {
  const html = await readFile(join(root, f), 'utf8');
  const title = decode((html.match(/<title>([\s\S]*?)<\/title>/) || [])[1] || '');
  const desc = decode((html.match(/<meta name="description" content="([^"]*)"/) || [])[1] || '');
  const main = (html.match(/<main[\s\S]*?<\/main>/) || [''])[0];
  const spaced = decode(main.replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>/g, ' ').replace(/<[^>]+>/g, '¦')).replace(/\s+/g, ' ');
  const words = decode(main.replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>/g, ' ').replace(/<[^>]+>/g, ' ')).split(/\s+/).filter(Boolean).length;
  if (title.length < 30 || title.length > 55) warn(f, `title length ${title.length} (blog target ≤55): “${title}”`);
  if (desc.length < 120 || desc.length > 160) warn(f, `description length ${desc.length}`);
  const post = posts.find((p) => f === `blog/${p.slug}/index.html`);
  if (post) {
    // docs/blog-checklist.md – automated part
    const norm = (x) => x.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    const h1 = decode((html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/) || [])[1] || '').replace(/<[^>]+>/g, '');
    const first100 = text100(main);
    for (const kw of post.keyword) {
      const k = norm(kw);
      if (!norm(title).includes(k.split(' ')[0])) warn(f, `keyword “${kw}” not in title`);
      if (!norm(h1).includes(k)) warn(f, `keyword “${kw}” not in H1`);
      if (!norm(first100).includes(k) && !norm(post.keyword.join(' ')).includes(k)) warn(f, `keyword “${kw}” not in first 100 words`);
      if (!norm(first100).includes(k)) warn(f, `keyword “${kw}” not in first 100 words`);
      if (!norm(desc).includes(k.split(' ')[0])) warn(f, `keyword “${kw}” not in meta description`);
    }
    if (norm(title).indexOf(norm(post.keyword[0]).split(' ')[0]) > 25) warn(f, 'primary keyword is not near the start of the title');
    if ((html.match(/<h2[\s>]/g) || []).length < 7) warn(f, 'fewer than 7 <h2> sections (incl. FAQ)');
    if (!html.includes('post-tldr')) warn(f, 'no TL;DR box');
    if (!html.includes('class="post-author"')) warn(f, 'no author box');
    if (!/<time datetime=/.test(html)) warn(f, 'no visible publish/update date');
    if (!/<table/.test(html)) warn(f, 'no comparison table');
    if (!/<img /.test(main)) warn(f, 'no image');
    if (!html.includes('"@type":"BlogPosting"')) warn(f, 'no BlogPosting JSON-LD');
    const internal = [...main.matchAll(/href="(\/[^"]*)"/g)].filter((m) => !m[1].startsWith('/blog/')).length;
    if (internal < 4) warn(f, `only ${internal} internal links to service pages`);
    for (const m of main.matchAll(/<a [^>]*href="https?:\/\/[^"]*"[^>]*>/g)) if (!/rel="[^"]*noopener/.test(m[0]) && !m[0].includes('setmore.com')) warn(f, `external link without rel=noopener: ${m[0].slice(0, 70)}`);
    for (const m of main.matchAll(/<p>([\s\S]*?)<\/p>/g)) { const n = decode(m[1].replace(/<[^>]+>/g, ' ')).split(/\s+/).filter(Boolean).length; if (n > 75) warn(f, `paragraph with ${n} words (keep paragraphs short)`); }
  }
  if ((html.match(/<h1[\s>]/g) || []).length !== 1) warn(f, 'not exactly one <h1>');
  if (!f.endsWith('blog/index.html') && words < 800) warn(f, `only ${words} words`);
  if (!html.includes(`<link rel="canonical" href="${site.url}/${f.replace('index.html', '')}"`)) warn(f, 'missing/wrong canonical');
  if (html.includes('hreflang="en"') && !f.includes('/')) warn(f, 'unexpected hreflang');
  for (const m of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) { try { JSON.parse(m[1]); } catch { warn(f, 'invalid JSON-LD'); } }
  for (const m of spaced.matchAll(/(\d[\d.,  ]*\d|\d)\s?(Kč|CZK)/g)) { const n = Number(m[1].replace(/\D/g, '')); if (!priceNumbers.has(n)) warn(f, `amount ${m[0]} is not in the price list`); }
  for (const tag of html.matchAll(/<a\b[^>]*>/g)) {
    const m = tag[0].match(/\bhref="(\/[^"#?]*)/); if (!m) continue;
    const target = m[1].endsWith('/') ? join(root, m[1], 'index.html') : join(root, m[1]);
    if (!(await exists(target))) warn(f, `broken link ${m[1]}`);
  }
  console.log(`${f.padEnd(52)} words ${String(words).padStart(5)}  title ${title.length}  desc ${desc.length}`);
}
// blog is linked from the footer only: no other page may link to /blog/ except the blog itself and the footers
for (const lang of LANGS) for (const key of keys) {
  const html = await readFile(join(root, fileFor(pathFor(key, lang))), 'utf8');
  const nav = (html.match(/<header[\s\S]*?<\/header>/) || [''])[0] + (html.match(/<main[\s\S]*?<\/main>/) || [''])[0];
  if (nav.includes('href="/blog/')) warn(fileFor(pathFor(key, lang)), 'links to the blog outside the footer');
  if (!html.match(/<footer[\s\S]*href="\/blog\/"/)) warn(fileFor(pathFor(key, lang)), 'footer has no blog link');
}
console.log(problems ? `\n${problems} problem(s).` : '\nAll checks passed.');
process.exitCode = problems ? 1 : 0;
