// Conversion layer for the service pages.
//
// Every service page used to be the same template with different words. This module gives each page
//   - its own *signature block* built from first-party data (the price list): a comparison table, a cut matrix,
//     nail-shape guide, lash-density guide, problem → solution cards, the Head Spa ritual, face shape → beard shape …
//   - its own section order (config below), so pages do not read as one skeleton,
//   - service-specific CTAs everywhere: hero, every bookable option, comparison columns, CTA bands, combinations,
//     mobile sticky bar – each carrying a pre-filled WhatsApp / SMS message that names the service,
//   - combinations (“one visit, two services”) with sums computed from the price list.
//
// Nothing here invents evidence: no reviews, durations, discounts or customer numbers. Anything that is not in the
// price list stays out. Real photos / reviews (once the owner has them) surface per service through
// `site.gallery[].services` and `site.reviews[].service` (see workSection / reviewsSection below).
//
// Copy lives in i18n/extras.<lang>.mjs; the neutral configuration (ids, ticks, section order) is here.
import { site, links, itemById, allItems, formatPrice, kc, waLink, smsLink } from './data.mjs';
import { t, getLang, merge, tx } from './i18n/index.mjs';
import { getServicePages, servicePagesBase } from './content.mjs';
import {
  esc, icon, breadcrumbs, btnWhatsapp, btnCall, linkSms,
} from './layout.mjs';
import { extrasCs } from './i18n/extras.cs.mjs';
import { extrasEn } from './i18n/extras.en.mjs';
import { extrasDe } from './i18n/extras.de.mjs';

/* ================================================================ configuration (language-neutral) */
// P(id, variantIndex) = a reference to one price-list entry. Only literal price-list amounts are ever printed –
// no sums, differences or computed discounts (the owner has not published any combined prices).
const P = (p, v) => (v === undefined ? { p } : { p, v });

const CFG = {
  'manikura-praha-2': {
    order: ['intro', 'sig0', 'options', 'band', 'price', 'guide', 'steps', 'combos', 'care', 'faq', 'band', 'related', 'location'],
    sigs: [{
      type: 'compare',
      rows: [
        { k: 'tick', v: [false, true, true] },
        { k: 'tick', v: [false, true, true] },
        { k: 'tick', v: [false, false, true] },
        { k: 'price', v: [P('man-classic'), P('man-gellak'), P('man-cnd')] },
        { k: 'price', v: [P('man-pk-classic'), P('man-pk-gellak'), P('man-pk-cnd')] },
        { k: 'price', v: [null, P('ost-odstr-lak', 1), P('ost-odstr-lak', 0)] },
      ],
    }],
    combos: [
      { pages: ['manikura-praha-2', 'pedikura-praha-2'], items: [P('man-gellak'), P('ped-gellak')] },
      { pages: ['manikura-praha-2', 'oboci-kosmetika-praha-2'], items: [P('man-gellak'), P('ob-barveni')] },
    ],
  },

  'gelove-akrylove-nehty-praha-2': {
    order: ['intro', 'sig0', 'sig1', 'options', 'band', 'price', 'guide', 'steps', 'care', 'combos', 'faq', 'band', 'related', 'location'],
    sigs: [
      { type: 'shapes', shapes: ['square', 'round', 'oval', 'almond', 'coffin'] },
      {
        type: 'compare',
        rows: [{ k: 'text' }, { k: 'text' }, { k: 'text' }, { k: 'price', v: [P('mod-nove'), P('mod-nove'), P('mod-gelx')] }],
      },
    ],
    combos: [
      { pages: ['gelove-akrylove-nehty-praha-2', 'pedikura-praha-2'], items: [P('mod-nove'), P('ped-gellak')] },
      { pages: ['gelove-akrylove-nehty-praha-2', 'oboci-kosmetika-praha-2'], items: [P('mod-dopl'), P('ob-barveni')] },
    ],
  },

  'pedikura-praha-2': {
    order: ['intro', 'sig0', 'options', 'guide', 'band', 'steps', 'price', 'care', 'faq', 'combos', 'band', 'related', 'location'],
    sigs: [{
      type: 'problem',
      items: [
        { ids: [P('ped-classic')] },
        { ids: [P('ped-gellak'), P('ped-cnd')] },
        { ids: [P('ped-med-gellak'), P('ped-med-cnd')] },
        { ids: [P('ped-pk-classic'), P('ped-pk-gellak'), P('ped-pk-cnd')] },
      ],
    }],
    combos: [
      { pages: ['pedikura-praha-2', 'manikura-praha-2'], items: [P('ped-gellak'), P('man-gellak')] },
      { pages: ['pedikura-praha-2', 'head-spa-praha-2'], items: [P('ped-pk-classic'), P('hs')] },
    ],
  },

  'prodluzovani-ras-praha-2': {
    order: ['intro', 'sig0', 'options', 'steps', 'care', 'band', 'price', 'guide', 'faq', 'combos', 'band', 'related', 'location'],
    sigs: [{ type: 'density', items: [{ k: 1, p: 'ras-klasik' }, { k: 3, p: 'ras-volume' }, { k: 5, p: 'ras-mega' }] }],
    combos: [
      { pages: ['prodluzovani-ras-praha-2', 'oboci-kosmetika-praha-2'], items: [P('ras-klasik', 1), P('ob-barveni')] },
      { pages: ['prodluzovani-ras-praha-2', 'oboci-kosmetika-praha-2'], items: [P('ras-volume', 0), P('ob-uprava')] },
    ],
  },

  'oboci-kosmetika-praha-2': {
    order: ['intro', 'sig0', 'price', 'band', 'options', 'guide', 'combos', 'steps', 'care', 'faq', 'band', 'related', 'location'],
    sigs: [{
      type: 'compare',
      rows: [
        { k: 'tick', v: [true, true, false] },
        { k: 'tick', v: [false, true, false] },
        { k: 'tick', v: [false, false, true] },
        { k: 'price', v: [P('ob-uprava'), P('ob-barveni'), P('kos-oblicej')] },
        { k: 'text' },
        { k: 'text' },
      ],
    }],
    combos: [
      { pages: ['oboci-kosmetika-praha-2', 'prodluzovani-ras-praha-2'], items: [P('ob-barveni'), P('ras-klasik', 0)] },
      { pages: ['oboci-kosmetika-praha-2'], items: [P('kos-oblicej'), P('ob-uprava')] },
    ],
  },

  'head-spa-praha-2': {
    order: ['intro', 'sig0', 'price', 'guide', 'care', 'band', 'combos', 'faq', 'band', 'related', 'location'],
    sigs: [{ type: 'ritual', item: P('hs') }],
    combos: [
      { pages: ['head-spa-praha-2', 'pedikura-praha-2'], items: [P('hs'), P('ped-pk-classic')] },
      { pages: ['head-spa-praha-2', 'oboci-kosmetika-praha-2'], items: [P('hs'), P('kos-oblicej')] },
    ],
  },

  // The matrix + option cards already carry every price of this page, so the long price table is left out here.
  'panske-strihy-praha-2': {
    order: ['intro', 'sig0', 'options', 'band', 'guide', 'steps', 'care', 'combos', 'faq', 'band', 'related', 'location'],
    sigs: [{
      type: 'matrix',
      ids: ['cut-student', 'cut-klasicky', 'cut-premium', 'cut-vip', 'cut-vip-all'],
      features: ['Mytí hlavy', 'Střih', 'Masáž', 'Vousy', 'Styling', 'Balzám/Kolínská'],
      discount: 100, // the price list's own note: “Každé 2 týdny stříhání: −100 Kč na všechny cuts.” – quoted, never applied
    }],
    combos: [
      { pages: ['panske-strihy-praha-2', 'uprava-vousu-praha-2'], items: [P('cut-klasicky'), P('vous-uprava')], vars: { vip: P('cut-vip') } },
      { pages: ['panske-strihy-praha-2', 'panska-kosmetika-praha-2'], items: [P('cut-premium'), P('pece-kosmetika')] },
    ],
  },

  'uprava-vousu-praha-2': {
    order: ['intro', 'sig0', 'guide', 'options', 'price', 'band', 'steps', 'care', 'combos', 'faq', 'band', 'related', 'location'],
    sigs: [{ type: 'faces', faces: ['round', 'square', 'long'] }],
    combos: [
      { pages: ['uprava-vousu-praha-2', 'panske-strihy-praha-2'], items: [P('vous-uprava'), P('cut-klasicky')], vars: { vip: P('cut-vip') } },
      { pages: ['uprava-vousu-praha-2', 'panska-kosmetika-praha-2'], items: [P('vous-uprava'), P('pece-kosmetika')] },
    ],
  },

  'panska-kosmetika-praha-2': {
    order: ['intro', 'sig0', 'options', 'price', 'guide', 'steps', 'band', 'care', 'combos', 'faq', 'band', 'related', 'location'],
    sigs: [{
      type: 'tips',
      items: [
        { vars: { premium: P('cut-premium'), classic: P('cut-klasicky'), solo: P('pece-masaz') } },
        { vars: { wash: P('pece-myti') } },
        { vars: { beard: P('vous-uprava'), care: P('pece-kosmetika') } },
      ],
    }],
    combos: [
      { pages: ['panska-kosmetika-praha-2', 'panske-strihy-praha-2'], items: [P('cut-klasicky'), P('pece-kosmetika')] },
      { pages: ['panska-kosmetika-praha-2', 'uprava-vousu-praha-2'], items: [P('vous-uprava'), P('pece-kosmetika')] },
    ],
  },
};

/* ================================================================ dictionaries */
const DICT = { en: extrasEn, de: extrasDe };
const cache = new Map();
const dict = () => {
  const l = getLang();
  if (!cache.has(l)) cache.set(l, l === 'cs' ? extrasCs : merge(extrasCs, DICT[l]));
  return cache.get(l);
};
export const extrasFor = (slug) => {
  const d = dict();
  if (!CFG[slug] || !d.pages[slug]) throw new Error(`No service extras for ${slug}`);
  return { cfg: CFG[slug], d: d.pages[slug], c: d.common };
};

/* ================================================================ price-list helpers */
const raw = (id) => {
  const it = allItems.find((x) => x.id === id);
  if (!it) throw new Error(`Unknown price item: ${id}`);
  return it;
};
const refNum = (r) => {
  const it = raw(r.p);
  return it.variants ? it.variants[r.v ?? 0].price : it.price;
};
/** “od 590 Kč” / “790 Kč” in the current language (the “from” word only where the price list says so). */
const refText = (r) => `${raw(r.p).from ? `${t('from')} ` : ''}${kc(refNum(r))}`;
const fill = (s, vars = {}) => s.replace(/\{(\w+)\}/g, (m, k) => (k in vars ? vars[k] : m));
const evalVars = (vars = {}) => Object.fromEntries(Object.entries(vars).map(([k, r]) => [k, kc(refNum(r))]));

/* ================================================================ small html helpers */
const msgFor = (c, subject) => c.msg.replace('{subject}', subject);
const channelLinks = (msg, place, { label = t('btn.whatsapp'), cls = 'btn--sm' } = {}) => `
      <a class="btn btn--wa ${cls}" href="${waLink(msg)}" target="_blank" rel="noopener" data-track="click_whatsapp" data-cta="${place}">${icon('chat')}<span>${esc(label)}</span></a>
      <a class="text-link" href="${smsLink(msg)}" data-track="click_sms" data-cta="${place}">${esc(t('btn.smsShort'))}</a>`;
const head = ({ eyebrow, h2, lead }) => `
      <div class="sig-head" data-reveal>
        <p class="eyebrow">${esc(eyebrow)}</p>
        <h2>${esc(h2)}</h2>
        ${lead ? `<p class="lead">${esc(lead)}</p>` : ''}
      </div>`;
const yes = (c) => `<span class="cmp-yes" role="img" aria-label="${esc(c.yes)}">${icon('check')}</span>`;
const no = (c) => `<span class="cmp-no" role="img" aria-label="${esc(c.no)}">–</span>`;
const na = () => '<span class="cmp-na" aria-hidden="true">–</span>';
const priceCell = (txt) => `<strong class="cmp-price">${txt}</strong>`;
const artOf = (slug) => servicePagesBase.find((p) => p.slug === slug).art;
const pageOf = (slug) => getServicePages().find((p) => p.slug === slug);

/* ================================================================ comparison table (shared by compare + matrix) */
function cmpTable({ caption, cols, rows, foot, c, text = false }) {
  return `
      <div class="cmp-wrap" data-reveal role="region" aria-label="${esc(caption)}" tabindex="0">
        <table class="cmp${text ? ' cmp--text' : ''}">
          <caption class="sr-only">${esc(caption)}</caption>
          <thead><tr><td class="cmp-corner"></td>${cols.map((n) => `<th scope="col">${esc(n)}</th>`).join('')}</tr></thead>
          <tbody>
            ${rows.map((r) => `<tr><th scope="row">${esc(r.label)}</th>${r.cells.map((cell) => `<td>${cell}</td>`).join('')}</tr>`).join('\n            ')}
          </tbody>
          ${foot ? `<tfoot><tr><td></td>${foot.map((f) => `<td>${f}</td>`).join('')}</tr></tfoot>` : ''}
        </table>
      </div>
      <p class="cmp-hint">${esc(c.scrollHint)}</p>`;
}
const colCta = (c, subject, name) => `<a class="btn btn--wa btn--sm" href="${waLink(msgFor(c, `${subject}: ${name}`))}" target="_blank" rel="noopener" data-track="click_whatsapp" data-cta="table">${icon('chat')}<span>${esc(c.order)}</span></a>`;

function renderCompare(cfg, sig, { c, subject }) {
  const rows = cfg.rows.map((r, i) => {
    const label = sig.rows[i].label;
    if (r.k === 'tick') return { label, cells: r.v.map((v) => (v ? yes(c) : no(c))) };
    if (r.k === 'price') return { label, cells: r.v.map((v) => (v ? priceCell(refText(v)) : na())) };
    return { label, cells: sig.rows[i].cells.map(esc) };
  });
  return `${head(sig)}${cmpTable({ caption: sig.h2, cols: sig.cols, rows, foot: sig.cols.map((n) => colCta(c, subject, n)), c, text: cfg.rows.some((r) => r.k === 'text') })}
      ${sig.note ? `<p class="sig-note">${esc(sig.note)}</p>` : ''}`;
}

function renderMatrix(cfg, sig, { c, subject }) {
  const items = cfg.ids.map((id) => ({ raw: raw(id), loc: itemById(id) }));
  const rows = [
    { label: sig.priceLabel, cells: items.map((i) => priceCell(formatPrice(i.loc))) },
    ...cfg.features.map((f) => ({ label: tx(f), cells: items.map((i) => ((i.raw.includes || []).includes(f) ? yes(c) : no(c))) })),
  ];
  return `${head(sig)}${cmpTable({ caption: sig.h2, cols: items.map((i) => i.loc.name), rows, foot: items.map((i) => colCta(c, subject, i.loc.name)), c })}
      <p class="sig-note">${esc(fill(sig.note, { off: kc(cfg.discount) }))}</p>`;
}

/* ================================================================ nail shapes (ported from scripts/make-art.mjs) */
const nailPath = (shape, cx, base, w, h) => {
  const x0 = cx - w / 2; const x1 = cx + w / 2; const top = base - h;
  const cut = `A ${w / 2} ${w * 0.3} 0 0 1 ${x0} ${base} Z`;
  switch (shape) {
    case 'square': return `M ${x0} ${base} V ${top + 14} Q ${x0} ${top} ${x0 + 14} ${top} H ${x1 - 14} Q ${x1} ${top} ${x1} ${top + 14} V ${base} ${cut}`;
    case 'round': return `M ${x0} ${base} V ${top + w / 2} A ${w / 2} ${w / 2} 0 0 1 ${x1} ${top + w / 2} V ${base} ${cut}`;
    case 'oval': return `M ${x0} ${base} V ${top + w * 0.8} A ${w / 2} ${w * 0.8} 0 0 1 ${x1} ${top + w * 0.8} V ${base} ${cut}`;
    case 'almond': return `M ${x0} ${base} C ${x0} ${base - h * 0.5} ${cx - w * 0.2} ${top + h * 0.22} ${cx} ${top} C ${cx + w * 0.2} ${top + h * 0.22} ${x1} ${base - h * 0.5} ${x1} ${base} ${cut}`;
    default: return `M ${x0} ${base} L ${cx - w * 0.3} ${top} H ${cx + w * 0.3} L ${x1} ${base} ${cut}`; // coffin
  }
};
const svgWrap = (vb, body, cls) => `<svg class="${cls}" viewBox="${vb}" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${body}</svg>`;
const shapeSvg = (shape) => svgWrap('0 0 120 180', `<path d="${nailPath(shape, 60, 146, 76, 124)}"/><path d="M40 118 Q40 80 52 54" stroke-opacity=".4"/><path d="M42 160 Q60 172 78 160" stroke-opacity=".5"/>`, 'sig-svg');

function renderShapes(cfg, sig, { c, subject }) {
  return `${head(sig)}
      <ul class="shapes" data-stagger>
        ${sig.items.map((it, i) => `<li class="shape">${shapeSvg(cfg.shapes[i])}<h3>${esc(it.name)}</h3><p>${esc(it.text)}</p></li>`).join('\n        ')}
      </ul>
      <div class="sig-cta" data-reveal>
        <p>${esc(sig.cta)}</p>
        <a class="btn btn--wa" href="${waLink(msgFor(c, `${subject} – ${sig.ctaLabel}`))}" target="_blank" rel="noopener" data-track="click_whatsapp" data-cta="sig">${icon('chat')}<span>${esc(sig.ctaLabel)}</span></a>
      </div>`;
}

/* ================================================================ lash density */
const bez = (p, u) => { const v = 1 - u; return [0, 1].map((i) => v ** 3 * p[0][i] + 3 * v * v * u * p[1][i] + 3 * v * u * u * p[2][i] + u ** 3 * p[3][i]); };
const bezTan = (p, u) => {
  const v = 1 - u;
  const d = [0, 1].map((i) => 3 * v * v * (p[1][i] - p[0][i]) + 6 * v * u * (p[2][i] - p[1][i]) + 3 * u * u * (p[3][i] - p[2][i]));
  const l = Math.hypot(d[0], d[1]);
  return [d[0] / l, d[1] / l];
};
const f1 = (n) => Number(n.toFixed(1));
/** k strands growing from every anchor point of a stylised lash line (k = 1 classic … 5 mega volume). */
const lashSvg = (k) => {
  const lid = [[14, 112], [66, 70], [154, 70], [206, 112]];
  const n = k === 1 ? 8 : k === 3 ? 6 : 5;
  let strands = '';
  for (let i = 0; i < n; i += 1) {
    const u = 0.07 + (0.86 * i) / (n - 1);
    const [px, py] = bez(lid, u); const [tx0, ty0] = bezTan(lid, u);
    const base = Math.atan2(-tx0, ty0); // outward (upward) normal of the lid curve
    for (let j = 0; j < k; j += 1) {
      const spread = k === 1 ? 0 : (j - (k - 1) / 2) * (k === 3 ? 0.34 : 0.26);
      const a = base + spread + 0.22 * (u - 0.5);
      const len = 36 + 18 * Math.sin(Math.PI * u);
      const ex = px + Math.cos(a) * len; const ey = py + Math.sin(a) * len;
      const cx = px + Math.cos(a - 0.2) * len * 0.62; const cy = py + Math.sin(a - 0.2) * len * 0.62;
      strands += `<path d="M${f1(px)} ${f1(py)} Q${f1(cx)} ${f1(cy)} ${f1(ex)} ${f1(ey)}" stroke-width="${k === 1 ? 3 : 2.2}"/>`;
    }
  }
  return svgWrap('0 0 220 130', `<path d="M14 112 C66 70 154 70 206 112" stroke-opacity=".55"/>${strands}`, 'sig-svg sig-svg--wide');
};

function renderDensity(cfg, sig, { c, subject }) {
  return `${head(sig)}
      <div class="density" data-stagger>
        ${sig.items.map((it, i) => {
    const item = itemById(cfg.items[i].p);
    return `<article class="dens">
          ${lashSvg(cfg.items[i].k)}
          <p class="dens-effect">${esc(it.effect)}</p>
          <h3>${esc(it.name)}</h3>
          <p>${esc(it.text)}</p>
          <p class="dens-price">${esc(formatPrice(item))}</p>
          <div class="opt-cta">${channelLinks(msgFor(c, `${subject}: ${it.name}`), 'sig')}</div>
        </article>`;
  }).join('\n        ')}
      </div>
      ${sig.note ? `<p class="sig-note">${esc(sig.note)}</p>` : ''}`;
}

/* ================================================================ problem → solution cards */
function renderProblem(cfg, sig, { c, subject }) {
  return `${head(sig)}
      <div class="problems" data-stagger>
        ${sig.items.map((it, i) => {
    const nums = cfg.items[i].ids.map(refNum);
    const price = `${new Set(nums).size > 1 ? `${t('from')} ` : ''}${kc(Math.min(...nums))}`;
    return `<article class="problem">
          <h3>${esc(it.need)}</h3>
          <p class="problem-pick">${icon('arrow')}<span>${esc(it.pick)}</span></p>
          <p>${esc(it.text)}</p>
          <div class="problem-foot"><span class="problem-price"><small>${esc(c.problem.priceLabel)}</small><strong>${esc(price)}</strong></span>
            ${channelLinks(msgFor(c, `${subject}: ${it.pick}`), 'sig')}</div>
        </article>`;
  }).join('\n        ')}
      </div>
      ${sig.note ? `<p class="sig-note sig-note--warn">${esc(sig.note)}</p>` : ''}`;
}

/* ================================================================ Head Spa ritual (reuses the page's five option cards) */
const RITUAL_ICONS = [
  '<path d="M3 12h2M7.5 8v8M12 4.5v15M16.5 8v8M21 11v2"/>',
  '<circle cx="12" cy="12" r="2.2"/><circle cx="6" cy="7.5" r="1.4"/><circle cx="18" cy="7.5" r="1.4"/><circle cx="7" cy="17.5" r="1.4"/><circle cx="17" cy="17.5" r="1.4"/>',
  '<circle cx="12" cy="12" r="8.5" stroke-dasharray="2 3.2"/><circle cx="12" cy="12" r="3"/>',
  '<path d="M12 3c-3.4 4.4-6 7.2-6 11a6 6 0 0 0 12 0c0-3.8-2.6-6.6-6-11Z"/><path d="M9 15a3 3 0 0 0 3 3" stroke-opacity=".6"/>',
  '<path d="M3 8h10a3 3 0 1 0-3-3M3 12h15a3 3 0 1 1-3 3M3 16h7"/>',
];
function renderRitual(cfg, sig, { c, subject, page }) {
  const steps = page.options.items;
  const item = itemById(cfg.item.p);
  return `${head(sig)}
      <div class="ritual-grid">
        <ol class="ritual" data-stagger>
          ${steps.map((s, i) => `<li><span class="ritual-n">${String(i + 1).padStart(2, '0')}</span><span class="ritual-ic">${svgWrap('0 0 24 24', RITUAL_ICONS[i % RITUAL_ICONS.length], 'icon icon--lg').replace('stroke-width="3"', 'stroke-width="1.6"')}</span><div><h3>${esc(s.title)}</h3><p>${s.text}</p></div></li>`).join('\n          ')}
        </ol>
        <aside class="ritual-price" data-reveal>
          <p class="eyebrow">${esc(c.ritual.includes)}</p>
          <p class="ritual-label">${esc(sig.priceLabel)}</p>
          <p class="ritual-amount">${esc(kc(item.price))}</p>
          <p class="ritual-note">${esc(sig.priceNote)}</p>
          <div class="ritual-cta">
            <a class="btn btn--wa btn--lg" href="${waLink(msgFor(c, subject))}" target="_blank" rel="noopener" data-track="click_whatsapp" data-cta="sig">${icon('chat')}<span>${esc(sig.cta)}</span></a>
            <a class="btn btn--ghost" href="${links.call}" data-track="click_call" data-cta="sig">${icon('phone')}<span>${esc(t('btn.call'))}</span></a>
          </div>
        </aside>
      </div>
      ${sig.note ? `<p class="sig-note">${esc(sig.note)}</p>` : ''}`;
}

/* ================================================================ face shape → beard shape */
const FACES = {
  // beard = outline that hugs the jaw; the shape differs per face type (longer chin / rounded / fuller sides)
  round: { face: '<ellipse cx="60" cy="66" rx="38" ry="42"/>', beard: 'M24 74 C28 100 44 112 60 130 C76 112 92 100 96 74 C90 88 76 94 60 94 C44 94 30 88 24 74Z' },
  square: { face: '<path d="M24 28 H96 V90 Q96 122 68 124 H52 Q24 122 24 90Z"/>', beard: 'M24 78 C24 110 40 124 60 124 C80 124 96 110 96 78 C90 96 76 102 60 102 C44 102 30 96 24 78Z' },
  long: { face: '<ellipse cx="60" cy="68" rx="30" ry="54"/>', beard: 'M30 72 C27 100 42 124 60 124 C78 124 93 100 90 72 C86 88 76 96 60 96 C44 96 34 88 30 72Z' },
};
function renderFaces(cfg, sig) {
  return `${head(sig)}
      <ul class="faces" data-stagger>
        ${sig.items.map((it, i) => {
    const fc = FACES[cfg.faces[i]];
    return `<li class="face">${svgWrap('0 0 120 150', `${fc.face}<path d="${fc.beard}" fill="currentColor" fill-opacity=".22"/>`, 'sig-svg')}<p class="face-name">${esc(it.face)}</p><h3>${esc(it.beard)}</h3><p>${esc(it.text)}</p></li>`;
  }).join('\n        ')}
      </ul>
      ${sig.note ? `<p class="sig-note">${esc(sig.note)}</p>` : ''}`;
}

/* ================================================================ insights computed from the price list */
function renderTips(cfg, sig) {
  return `${head(sig)}
      <ul class="tips" data-stagger>
        ${sig.items.map((it, i) => `<li class="tip"><span class="tip-n">${String(i + 1).padStart(2, '0')}</span><h3>${esc(it.title)}</h3><p>${esc(fill(it.text, evalVars(cfg.items[i].vars)))}</p></li>`).join('\n        ')}
      </ul>`;
}

const SIG_RENDER = {
  compare: renderCompare, matrix: renderMatrix, shapes: renderShapes, density: renderDensity,
  problem: renderProblem, ritual: renderRitual, faces: renderFaces, tips: renderTips,
};

/** The page's signature block number `i` (config `sigs[i]`). */
export function renderSig(slug, i, { tone, page }) {
  const { cfg, d, c } = extrasFor(slug);
  const sc = cfg.sigs[i]; const sig = d.sigs[i];
  return `
  <section class="section section--${tone} sig sig--${sc.type}" id="sig-${i}">
    <div class="wrap">${SIG_RENDER[sc.type](sc, sig, { c, subject: d.subject, page })}
    </div>
  </section>`;
}

/* ================================================================ CTA band, combinations, chips, hero */
/** Slim call-to-action strip between sections; copy is written per service and per position (`n` = 0, 1). */
export function renderBand(slug, n) {
  const { d } = extrasFor(slug);
  const b = d.bands[n];
  return `
  <section class="band" aria-label="${esc(b.h)}">
    <div class="wrap band-in" data-reveal>
      <div class="band-copy"><p class="band-title">${esc(b.h)}</p><p>${esc(b.t)}</p></div>
      <div class="band-actions">${btnWhatsapp(t('btn.whatsapp'), '', 'band')}${btnCall(t('btn.call'), '', 'band')}</div>
    </div>
  </section>`;
}

export function renderCombos(slug, tone, current) {
  const { cfg, d, c } = extrasFor(slug);
  const line = (r) => {
    const it = itemById(r.p);
    const name = it.variants ? `${it.name} – ${it.variants[r.v ?? 0].label}` : it.name;
    return `<li><span>${esc(name)}</span><strong>${esc(refText(r))}</strong></li>`;
  };
  return `
  <section class="section section--${tone}" id="kombinace">
    <div class="wrap">
      <div data-reveal><p class="eyebrow">${esc(c.combos.eyebrow)}</p><h2>${esc(d.combos.h2)}</h2><p class="lead">${esc(d.combos.lead)}</p></div>
      <div class="combos" data-stagger>
        ${cfg.combos.map((cb, i) => {
    const it = d.combos.items[i];
    const other = cb.pages.find((s) => s !== current);
    const text = fill(it.text, evalVars(cb.vars));
    return `<article class="combo">
          <div class="combo-art">${cb.pages.map((s) => `<img src="/images/art/${artOf(s)}.svg" alt="" width="64" height="64" loading="lazy" decoding="async">`).join('<span aria-hidden="true">+</span>')}</div>
          <h3>${esc(it.title)}</h3>
          <p>${esc(text)}</p>
          <ul class="combo-lines">${cb.items.map(line).join('')}</ul>
          <div class="combo-cta">
            <a class="btn btn--wa btn--sm" href="${waLink(fill(c.msgCombo, { subject: it.title }))}" target="_blank" rel="noopener" data-track="click_whatsapp" data-cta="combo">${icon('chat')}<span>${esc(c.combos.cta)}</span></a>
            ${other ? `<a class="text-link" href="/${other}/">${esc(pageOf(other).name)}</a>` : ''}
          </div>
        </article>`;
  }).join('\n        ')}
      </div>
    </div>
  </section>`;
}

/** “On this page” jump links (static, not sticky) – helps scanning on long pages. */
export function chipsNav(items, c) {
  return `<nav class="chips chips--static" aria-label="${esc(c.chipsAria)}"><div class="wrap chips-in">${items.map((i) => `<a href="#${i.id}">${esc(i.label)}</a>`).join('')}</div></nav>`;
}

/** Hero with the service illustration and the service-specific primary CTA. */
export function serviceHero({ p, trail, d, c }) {
  return `
  <section class="page-hero page-hero--svc">
    <div class="wrap svc-hero">
      <div class="svc-hero-copy">
        ${breadcrumbs(trail)}
        <p class="eyebrow" data-hero>${p.eyebrow}</p>
        <h1 data-hero>${p.h1}</h1>
        <p class="lead" data-hero>${p.lead}</p>
        <div class="btn-row" data-hero>${btnWhatsapp(d.heroCta, 'btn--lg', 'hero')}${btnCall(t('btn.call'), 'btn--lg', 'hero')}${linkSms(t('btn.sms'), 'hero')}</div>
        <p class="hero-micro" data-hero>${icon('check')}<span>${esc(c.micro)}</span></p>
      </div>
      <figure class="svc-hero-img svc-hero-img--art" data-hero><img src="/images/art/${p.art}.svg" alt="${esc(p.artAlt)}" width="800" height="1000" fetchpriority="high" decoding="async"></figure>
    </div>
  </section>`;
}

/** Option-card button: “Book via WhatsApp” with a message that names the service and the variant. */
export const optionCta = (slug) => {
  const { d, c } = extrasFor(slug);
  return (o) => (o.ids && o.ids.length
    ? `<div class="opt-cta">${channelLinks(msgFor(c, `${d.subject}: ${o.title}`), 'option')}</div>`
    : '');
};

/** Data for the mobile sticky bar (see layout.mjs stickyBar): button label + “from” price. */
export const stickyFor = (slug, priceText) => {
  const { c } = extrasFor(slug);
  return { label: c.order, sub: `${t('from')} ${priceText}` };
};
export const orderMessageFor = (slug) => { const { d, c } = extrasFor(slug); return msgFor(c, d.subject); };
export const chipLabels = (slug) => extrasFor(slug).c.chips;

/* ---------- real evidence, rendered only when it exists (never invented) ---------- */
export const workItems = (slug) => (site.gallery || []).filter((g) => (g.services || []).includes(slug));
export const reviewItems = (slug) => (site.reviews || []).filter((r) => r.service === slug);

/* ================================================================ integrity checks (run by the build) */
const placeholders = (s) => [...String(s).matchAll(/\{(\w+)\}/g)].map((m) => m[1]).sort().join(',');
const hrefs = (s) => [...String(s).matchAll(/href="(\/[^"#?]*)/g)].map((m) => m[1]).sort().join(',');

function walk(base, tr, path, out) {
  if (typeof base === 'string') {
    if (typeof tr !== 'string' || !tr.trim()) { out.push(`${path}: missing`); return; }
    if (placeholders(base) !== placeholders(tr)) out.push(`${path}: placeholders {${placeholders(tr)}} ≠ {${placeholders(base)}}`);
    if (hrefs(base) !== hrefs(tr)) out.push(`${path}: internal links differ`);
  } else if (Array.isArray(base)) {
    if (!Array.isArray(tr)) { out.push(`${path}: missing list`); return; }
    if (tr.length !== base.length) out.push(`${path}: ${tr.length} items, expected ${base.length}`);
    base.forEach((b, i) => walk(b, tr[i], `${path}[${i}]`, out));
  } else if (base && typeof base === 'object') {
    if (!tr || typeof tr !== 'object') { out.push(`${path}: missing group`); return; }
    for (const k of Object.keys(base)) walk(base[k], tr[k], path ? `${path}.${k}` : k, out);
  }
}

/** Config ↔ Czech copy alignment + translation completeness. Returns human-readable problems. */
export function extrasGaps(langs = ['cs', 'en', 'de']) {
  const out = [];
  const slugs = servicePagesBase.map((p) => p.slug);
  for (const slug of slugs) {
    const cfg = CFG[slug]; const d = extrasCs.pages[slug];
    if (!cfg || !d) { out.push(`extras: ${slug} has no configuration or Czech copy`); continue; }
    const bandSlots = cfg.order.filter((x) => x === 'band').length;
    if (d.bands.length !== bandSlots) out.push(`extras ${slug}: ${d.bands.length} band texts for ${bandSlots} band slots`);
    for (const tok of cfg.order) if (/^sig\d+$/.test(tok) && !cfg.sigs[Number(tok.slice(3))]) out.push(`extras ${slug}: section ${tok} has no config`);
    if (cfg.sigs.length !== d.sigs.length) out.push(`extras ${slug}: ${d.sigs.length} signature texts for ${cfg.sigs.length} blocks`);
    if (d.combos.items.length !== cfg.combos.length) out.push(`extras ${slug}: ${d.combos.items.length} combo texts for ${cfg.combos.length} combos`);
    cfg.sigs.forEach((sc, i) => {
      const s = d.sigs[i]; if (!s) return;
      const n = (label, a, b) => { if (a !== b) out.push(`extras ${slug} sig${i} (${sc.type}): ${label} ${a} ≠ ${b}`); };
      if (sc.type === 'compare') {
        n('rows', s.rows.length, sc.rows.length);
        sc.rows.forEach((r, j) => {
          if (r.k === 'text') n(`row ${j} cells`, (s.rows[j].cells || []).length, s.cols.length);
          else n(`row ${j} values`, r.v.length, s.cols.length);
        });
      }
      if (sc.type === 'shapes') n('shapes', s.items.length, sc.shapes.length);
      if (sc.type === 'faces') n('faces', s.items.length, sc.faces.length);
      if (['density', 'problem', 'tips'].includes(sc.type)) n('items', s.items.length, sc.items.length);
      if (sc.type === 'tips') s.items.forEach((it, j) => {
        const need = Object.keys(sc.items[j].vars).sort().join(',');
        if (placeholders(it.text) !== need) out.push(`extras ${slug} sig${i} tip ${j}: placeholders {${placeholders(it.text)}} ≠ {${need}}`);
      });
    });
    cfg.combos.forEach((cb, j) => {
      const need = Object.keys(cb.vars || {}).sort().join(',');
      const have = placeholders(d.combos.items[j].text);
      if (have !== need) out.push(`extras ${slug} combo ${j}: placeholders {${have}} ≠ {${need}}`);
    });
  }
  for (const l of langs.filter((x) => x !== 'cs')) {
    const found = []; walk(extrasCs, DICT[l], 'extras', found);
    found.forEach((m) => out.push(`[${l}] ${m}`));
    for (const m of JSON.stringify(DICT[l]).matchAll(/href=\\"(\/[^"\\#?]*)/g)) out.push(`[${l}] extras: unexpected internal link ${m[1]}`);
  }
  return [...new Set(out)];
}
