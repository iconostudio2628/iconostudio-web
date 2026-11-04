// Shared building blocks for the Czech blog (blog.mjs, blog-posts-2.mjs) and the FAQ hub (faq-hub.mjs).
// Every amount is read from the price list through itemById() – nothing is typed by hand, so the articles can never
// drift from the ceník (`npm run check` verifies the amounts in the built HTML again).
import { site, itemById, kc } from './data.mjs';
import { t, tList } from './i18n/index.mjs';
import { esc } from './layout.mjs';

export const NAME = 'ICONO STUDIO';
export const PUBLISHED = '2026-10-09'; // first three articles
export const MODIFIED = '2026-11-04'; // last content review of the whole blog (prices re-read from the ceník)
export const PUBLISHED_2 = '2026-11-04'; // second batch of articles

/** “650 Kč” – a single amount, or `label` picks one variant of a multi-price item (e.g. 'Gellak'). */
export const price = (id, label) => {
  const it = itemById(id);
  if (label) return kc(it.variants.find((v) => v.label === label).price);
  return kc(it.price);
};
/** “od 20 Kč” when the ceník says “od”, otherwise the plain amount. */
export const priceFrom = (id) => {
  const it = itemById(id);
  return `${it.from ? 'od ' : ''}${kc(it.price)}`;
};
export const hours = () => site.hours.map((h) => `${h.dayKey === 'weekdays' ? 'Po–Pá' : 'So'} ${h.display}`).join(', ');
export const dateCs = (iso) => new Date(`${iso}T12:00:00Z`).toLocaleDateString('cs-CZ', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });

/** Comparison table with real <th scope> cells. */
export const table = (caption, head, rows) => `
<div class="cmp-wrap post-table" tabindex="0" role="region" aria-label="${esc(caption)}">
  <table class="cmp cmp--text">
    <caption class="visually-hidden">${esc(caption)}</caption>
    <thead><tr>${head.map((h, i) => `<th scope="col"${i === 0 ? ' class="cmp-corner"' : ''}>${h}</th>`).join('')}</tr></thead>
    <tbody>${rows.map((r) => `<tr><th scope="row">${r[0]}</th>${r.slice(1).map((c) => `<td>${c}</td>`).join('')}</tr>`).join('')}</tbody>
  </table>
</div>`;

// Real photographs supplied by the owner (data.mjs → photos.work / photos.studio); alt texts are UI strings.
export const fig = (img, altKey, caption) => `
<figure class="post-figure">
  <img src="${img.src}" srcset="${img.srcset}" sizes="(min-width: 800px) 760px, 100vw" alt="${esc(t(altKey))}" width="${img.width}" height="${img.height}" loading="lazy" decoding="async">
  <figcaption>${caption}</figcaption>
</figure>`;

/** One of the nine nail photos from the “Naše práce” carousel (alt text = showcase.items[i].alt). */
export const figNail = (i, caption) => {
  const p = site.photos.showcase[i];
  const alt = tList('showcase.items')[i].alt;
  return `
<figure class="post-figure">
  <img src="${p.src1200}" srcset="${p.src640} 640w, ${p.src1200} 1200w" sizes="(min-width: 800px) 760px, 100vw" alt="${esc(alt)}" width="${p.w1200}" height="${p.h1200}" loading="lazy" decoding="async">
  <figcaption>${caption}</figcaption>
</figure>`;
};

export const where = () => `
<h2>Kde nás najdete a jak se objednat?</h2>
<p>ICONO STUDIO (barber a nail salon v jednom) je na Bělehradské 643/77 v Praze 2, u metra I. P. Pavlova a v okolí náměstí Míru. Otevřeno máme ${hours()}. Termín si rezervujte online, nebo zavolejte na ${esc(site.phoneDisplay)}.</p>
${fig(site.photos.studio.find((p) => p.key === 'studioB'), 'photos.studioB', 'Vchod do ICONO STUDIO na Bělehradské.')}`;
