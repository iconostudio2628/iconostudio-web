// Translation completeness check – runs at the start of every build and in `npm run check`.
// A page must never ship with a missing string, a lost placeholder or a link that points nowhere.
import { LANGS, DEFAULT_LANG, uiDict, priceDict, contentDict, missing, keyForCsPath } from './index.mjs';
import { servicePagesBase } from '../content.mjs';
import { priceGroups } from '../data.mjs';
import { extrasGaps } from '../service-extras.mjs';

const placeholders = (s) => [...String(s).matchAll(/\{(\w+)\}/g)].map((m) => m[1]).sort().join(',');
const hrefs = (s) => [...String(s).matchAll(/href="(\/[^"#?]*)/g)].map((m) => m[1]).sort().join(',');

function walk(base, tr, path, out) {
  if (typeof base === 'string') {
    if (typeof tr !== 'string') { out.push(`${path}: missing`); return; }
    if (placeholders(base) !== placeholders(tr)) out.push(`${path}: placeholders {${placeholders(tr)}} ≠ {${placeholders(base)}}`);
    if (hrefs(base) !== hrefs(tr)) out.push(`${path}: internal links ${hrefs(tr) || '∅'} ≠ ${hrefs(base) || '∅'}`);
  } else if (Array.isArray(base)) {
    if (!Array.isArray(tr)) { out.push(`${path}: missing list`); return; }
    if (tr.length !== base.length) out.push(`${path}: ${tr.length} items, expected ${base.length}`);
    base.forEach((b, i) => walk(b, tr[i], `${path}[${i}]`, out));
  } else if (base && typeof base === 'object') {
    if (!tr || typeof tr !== 'object') { out.push(`${path}: missing group`); return; }
    for (const k of Object.keys(base)) walk(base[k], tr[k], path ? `${path}.${k}` : k, out);
  }
}

const priceStrings = () => {
  const s = new Set();
  for (const g of priceGroups) {
    [g.title, g.subtitle, g.note].filter(Boolean).forEach((x) => s.add(x));
    for (const sec of g.sections) {
      if (sec.label) s.add(sec.label);
      for (const it of sec.items) {
        s.add(it.name);
        if (it.note) s.add(it.note);
        (it.includes || []).forEach((x) => s.add(x));
        (it.variants || []).forEach((v) => s.add(v.label));
      }
    }
  }
  return [...s];
};

export function translationGaps(langs = LANGS) {
  const out = [];
  for (const l of langs.filter((x) => x !== DEFAULT_LANG)) {
    const add = (arr) => arr.forEach((m) => out.push(`[${l}] ${m}`));
    const ui = []; walk(uiDict(DEFAULT_LANG), uiDict(l), 'ui', ui); add(ui);
    add(priceStrings().filter((p) => priceDict(l)[p] === undefined).map((p) => `price phrase ${JSON.stringify(p)} missing`));
    for (const p of servicePagesBase) {
      const tr = (contentDict(l) || {})[p.slug];
      if (!tr) { out.push(`[${l}] content for ${p.slug} missing`); continue; }
      add(missing(p, tr, p.slug));
      // same placeholder / link discipline inside service copy
      const check = (b, t, path) => {
        if (typeof b === 'string' && typeof t === 'string') {
          if (hrefs(b) !== hrefs(t)) out.push(`[${l}] ${path}: internal links ${hrefs(t) || '∅'} ≠ ${hrefs(b) || '∅'}`);
        } else if (Array.isArray(b) && Array.isArray(t)) {
          if (b.length !== t.length) out.push(`[${l}] ${path}: ${t.length} items, expected ${b.length}`);
          b.forEach((x, i) => check(x, t[i], `${path}[${i}]`));
        } else if (b && typeof b === 'object' && t && typeof t === 'object') {
          Object.keys(b).forEach((k) => check(b[k], t[k], `${path}.${k}`));
        }
      };
      check(p, tr, p.slug);
    }
    // links inside translations must point at known Czech route paths (they are rewritten at render time)
    const all = JSON.stringify([uiDict(l), contentDict(l) || {}]);
    for (const m of all.matchAll(/href=\\"(\/[^"\\#?]*)/g)) if (!keyForCsPath(m[1])) out.push(`[${l}] unknown internal link ${m[1]}`);
  }
  // per-service conversion layer (src/service-extras.mjs + i18n/extras.<lang>.mjs)
  out.push(...extrasGaps(langs).filter((m) => !/^\[(cs)\]/.test(m)));
  return out;
}
