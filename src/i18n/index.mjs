// Tiny i18n layer for the static generator.
//
// Czech is the base language and lives in the normal source files. English and German are
// translation layers:   ui.<lang>.mjs (interface + page copy), prices.<lang>.mjs (price list phrases),
// content.<lang>.mjs (service pages).  The build renders every route once per language;
// `setLang()` selects the language for the page being rendered (rendering is synchronous).
//
// Internal links in templates and content are written once, as Czech paths (e.g. href="/cenik/").
// `localizeLinks()` rewrites them to the current language's URL when the page is finished,
// so translators never have to think about URLs.
import cs from './ui.cs.mjs';
import en from './ui.en.mjs';
import de from './ui.de.mjs';
import { pricesEn } from './prices.en.mjs';
import { pricesDe } from './prices.de.mjs';
import { contentEn } from './content.en.mjs';
import { contentDe } from './content.de.mjs';

export const LANGS = ['cs', 'en', 'de'];
export const DEFAULT_LANG = 'cs';
export const LANG_META = {
  cs: { name: 'Čeština', short: 'CZ', locale: 'cs_CZ', htmlLang: 'cs' },
  en: { name: 'English', short: 'EN', locale: 'en_GB', htmlLang: 'en' },
  de: { name: 'Deutsch', short: 'DE', locale: 'de_DE', htmlLang: 'de' },
};

let current = DEFAULT_LANG;
export const setLang = (l) => { if (!LANGS.includes(l)) throw new Error(`Unknown language ${l}`); current = l; };
export const getLang = () => current;

/* ---------------------------------------------------------------- routes */
// Route keys: the Czech slug (service pages) or a fixed name. Czech URLs are the canonical keys.
const CS_PATHS = {
  home: '/', nails: '/nail-studio-praha-2/', barber: '/barbershop-praha-2/', cenik: '/cenik/', kontakt: '/kontakt/',
};
const SLUGS = {
  en: {
    nails: 'nail-studio-prague-2', barber: 'barbershop-prague-2', cenik: 'price-list', kontakt: 'contact',
    'manikura-praha-2': 'manicure-prague-2',
    'gelove-akrylove-nehty-praha-2': 'gel-acrylic-nails-prague-2',
    'pedikura-praha-2': 'pedicure-prague-2',
    'prodluzovani-ras-praha-2': 'eyelash-extensions-prague-2',
    'oboci-kosmetika-praha-2': 'brows-facials-prague-2',
    'head-spa-praha-2': 'head-spa-prague-2',
    'panske-strihy-praha-2': 'mens-haircut-prague-2',
    'uprava-vousu-praha-2': 'beard-trim-prague-2',
    'panska-kosmetika-praha-2': 'mens-skincare-prague-2',
  },
  de: {
    nails: 'nagelstudio-prag-2', barber: 'barbershop-prag-2', cenik: 'preisliste', kontakt: 'kontakt',
    'manikura-praha-2': 'manikuere-prag-2',
    'gelove-akrylove-nehty-praha-2': 'gel-acryl-naegel-prag-2',
    'pedikura-praha-2': 'pedikuere-prag-2',
    'prodluzovani-ras-praha-2': 'wimpernverlaengerung-prag-2',
    'oboci-kosmetika-praha-2': 'augenbrauen-kosmetik-prag-2',
    'head-spa-praha-2': 'head-spa-prag-2',
    'panske-strihy-praha-2': 'herrenhaarschnitt-prag-2',
    'uprava-vousu-praha-2': 'bartpflege-prag-2',
    'panska-kosmetika-praha-2': 'herrenkosmetik-prag-2',
  },
};

export const routeKeys = () => ['home', 'nails', 'barber', ...Object.keys(SLUGS.en).filter((k) => k.endsWith('-praha-2')), 'cenik', 'kontakt'];
export const pathFor = (key, l = current) => {
  if (l === 'cs') return CS_PATHS[key] || `/${key}/`;
  if (key === 'home') return `/${l}/`;
  const slug = SLUGS[l][key];
  if (!slug) throw new Error(`No ${l} slug for route "${key}"`);
  return `/${l}/${slug}/`;
};
export const fileFor = (p) => (p === '/' ? 'index.html' : `${p.slice(1)}index.html`);

const csPathToKey = new Map(routeKeys().map((k) => [CS_PATHS[k] || `/${k}/`, k]));
export const keyForCsPath = (p) => csPathToKey.get(p) || null;
/** Czech path (as written in templates) → URL of the same page in the current language. */
export const lp = (csPath) => {
  const m = /^([^#?]*)([#?].*)?$/.exec(csPath);
  const key = csPathToKey.get(m[1]);
  return key ? pathFor(key) + (m[2] || '') : csPath;
};
export const localizeLinks = (html) => (current === 'cs' ? html : html.replace(/href="(\/[^"#?]*)([#?][^"]*)?"/g, (m, p, rest) => {
  const key = csPathToKey.get(p);
  return key ? `href="${pathFor(key)}${rest || ''}"` : m;
}));

/* ------------------------------------------------------------ UI strings */
const UI = { cs, en, de };
const lookup = (obj, key) => key.split('.').reduce((o, k) => (o == null ? undefined : o[k]), obj);
/** UI / page copy. May contain HTML. `{name}` placeholders are filled from `vars`. */
export function t(key, vars) {
  let v = lookup(UI[current], key);
  if (v === undefined) throw new Error(`Missing UI string "${key}" for "${current}"`);
  if (typeof v === 'function') v = v(vars || {});
  else if (vars) v = v.replace(/\{(\w+)\}/g, (m, k) => (k in vars ? vars[k] : m));
  return v;
}
export const tList = (key) => {
  const v = lookup(UI[current], key);
  if (!Array.isArray(v)) throw new Error(`UI "${key}" is not a list for "${current}"`);
  return v;
};

/* ------------------------------------------------------ price-list phrases */
const PRICE_TX = { cs: null, en: pricesEn, de: pricesDe };
/** Translate a phrase from the price list (names, labels, notes, “includes” chips). */
export const tx = (s) => {
  if (current === 'cs' || s == null) return s;
  const v = PRICE_TX[current][s];
  if (v === undefined) throw new Error(`Missing price phrase translation for "${current}": ${JSON.stringify(s)}`);
  return v;
};
export const priceDict = (l) => PRICE_TX[l];

/* --------------------------------------------------------- service content */
const CONTENT = { cs: null, en: contentEn, de: contentDe };
const SKIP = new Set(['slug', 'art', 'photo', 'area', 'groups', 'ids', 'related', 'price']);
/** Deep-merge a translation over the Czech base (arrays are merged index by index). */
export function merge(base, tr) {
  if (tr === undefined) return base;
  if (Array.isArray(base)) return base.map((b, i) => merge(b, tr[i]));
  if (base && typeof base === 'object') {
    const out = {};
    for (const k of Object.keys(base)) out[k] = SKIP.has(k) ? base[k] : merge(base[k], tr[k]);
    return out;
  }
  return typeof tr === 'string' ? tr : base;
}
/** Every translatable string in `base` must exist in `tr`; returns the missing paths. */
export function missing(base, tr, path = '') {
  const out = [];
  if (Array.isArray(base)) {
    base.forEach((b, i) => out.push(...missing(b, tr && tr[i], `${path}[${i}]`)));
  } else if (base && typeof base === 'object') {
    for (const k of Object.keys(base)) if (!SKIP.has(k)) out.push(...missing(base[k], tr && tr[k], path ? `${path}.${k}` : k));
  } else if (typeof base === 'string' && typeof tr !== 'string') {
    out.push(path);
  }
  return out;
}
export const contentFor = (slug, base) => (current === 'cs' ? base : merge(base, CONTENT[current] && CONTENT[current][slug]));
export const contentDict = (l) => CONTENT[l];
export const uiDict = (l) => UI[l];
