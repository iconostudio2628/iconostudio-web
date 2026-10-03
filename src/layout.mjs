import {
  site, links, nav, groupById, formatPrice, kc, groupMin, itemById, priceGroups,
} from './data.mjs';
import { getServicePages, areaMeta } from './content.mjs';
import {
  t, tList, getLang, LANGS, LANG_META, pathFor, lp, keyForCsPath, localizeLinks,
} from './i18n/index.mjs';

export const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const stripTags = (s) => String(s).replace(/<[^>]*>/g, '');

/* ---------- icons (Lucide-style, stroke) ---------- */
const ICON_PATHS = {
  phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>',
  sms: '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
  chat: '<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/>',
  pin: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
  arrow: '<path d="M7 7h10v10"/><path d="M7 17 17 7"/>',
  plus: '<path d="M5 12h14"/><path d="M12 5v14"/>',
  chevron: '<path d="m6 9 6 6 6-6"/>',
  clock: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  instagram: '<rect width="20" height="20" x="2" y="2" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>',
  facebook: '<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>',
};
export const icon = (name, cls = 'icon') =>
  `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${ICON_PATHS[name]}</svg>`;

/* ---------- flags (inline SVG – emoji flags do not render on Windows) ---------- */
const FLAGS = {
  cs: '<rect width="60" height="20" fill="#fff"/><rect y="20" width="60" height="20" fill="#d7141a"/><path d="M0 0 30 20 0 40Z" fill="#11457e"/>',
  en: '<rect width="60" height="40" fill="#012169"/><path d="M0 0 60 40M60 0 0 40" stroke="#fff" stroke-width="8"/><path d="M0 0 60 40M60 0 0 40" stroke="#c8102e" stroke-width="3"/><path d="M30 0v40M0 20h60" stroke="#fff" stroke-width="12"/><path d="M30 0v40M0 20h60" stroke="#c8102e" stroke-width="7"/>',
  de: '<rect width="60" height="13.4" fill="#000"/><rect y="13.3" width="60" height="13.4" fill="#d00"/><rect y="26.6" width="60" height="13.4" fill="#ffce00"/>',
};
export const flag = (l) => `<svg class="flag" viewBox="0 0 60 40" width="24" height="16" aria-hidden="true" focusable="false">${FLAGS[l]}</svg>`;

/** Language switch: every page links to its twin in the other languages (never auto-redirects). */
const langSwitch = (key, variant) => {
  const items = LANGS.map((l) => {
    const href = key ? pathFor(key, l) : pathFor('home', l);
    const meta = LANG_META[l];
    const cur = l === getLang();
    return `<a class="lang-btn${cur ? ' is-current' : ''}" href="${href}" hreflang="${meta.htmlLang}" lang="${meta.htmlLang}"${cur ? ' aria-current="true"' : ''} title="${meta.name}" aria-label="${meta.name}" data-track="click_lang_${l}">${flag(l)}<span class="lang-name">${meta.name}</span></a>`;
  }).join('');
  return `<div class="lang lang--${variant}" role="group" aria-label="${esc(t('nav.langAria'))}">${items}</div>`;
};

/* ---------- CTA buttons ---------- */
// data-track feeds the GA4 / GTM dataLayer events (see js/main.js)
// `place` (optional) names the spot on the page – js/cta.js reports it as cta_placement (hero, band, final …)
const placeAttr = (place) => (place ? ` data-cta="${place}"` : '');
export const btnWhatsapp = (label = t('btn.whatsapp'), cls = '', place = '') =>
  `<a class="btn btn--wa ${cls}" href="${links.whatsapp}" target="_blank" rel="noopener" data-track="click_whatsapp"${placeAttr(place)}>${icon('chat')}<span>${label}</span></a>`;
export const btnCall = (label = t('btn.call'), cls = '', place = '') =>
  `<a class="btn btn--ghost ${cls}" href="${links.call}" data-track="click_call"${placeAttr(place)}>${icon('phone')}<span>${label}</span></a>`;
export const btnSms = (label = t('btn.sms'), cls = '', place = '') =>
  `<a class="btn btn--ghost ${cls}" href="${links.sms}" data-track="click_sms"${placeAttr(place)}>${icon('sms')}<span>${label}</span></a>`;
export const linkSms = (label = t('btn.sms'), place = '') =>
  `<a class="text-link" href="${links.sms}" data-track="click_sms"${placeAttr(place)}>${label}</a>`;

/* ---------- breadcrumbs ---------- */
export const breadcrumbs = (trail) => {
  const items = [{ name: t('crumbs.home'), href: '/' }, ...trail];
  return `<nav class="crumbs" aria-label="${esc(t('crumbs.aria'))}"><ol>${items
    .map((it, i) => (i === items.length - 1
      ? `<li aria-current="page">${esc(it.name)}</li>`
      : `<li><a href="${it.href}">${esc(it.name)}</a></li>`))
    .join('')}</ol></nav>`;
};
export const breadcrumbSchema = (trail, absolute) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [{ name: t('crumbs.home'), href: '/' }, ...trail].map((it, i) => ({
    '@type': 'ListItem', position: i + 1, name: it.name, item: absolute(lp(it.href)),
  })),
});

/* ---------- opening hours ---------- */
const dayLabel = (h) => t(`days.${h.dayKey}`);
export const hoursRows = () => `${site.hours.map((h) => `<div><dt>${esc(dayLabel(h))}</dt><dd>${esc(h.display)}</dd></div>`).join('')}<div><dt>${esc(t('days.sun'))}</dt><dd>${esc(t('hours.sundayText'))}</dd></div>`;
export const hoursList = () => `<dl class="hours">${hoursRows()}</dl>`;
/** “Po–Pá 9:00–19:30, So 10:00–19:00” */
export const hoursSummary = () => site.hours.map((h) => `${dayLabel(h)} ${h.display}`).join(', ');

// Regular hours as minutes-from-midnight per weekday (0 = Sunday) for the live “open now” badge.
const hoursJson = (() => {
  const dayIdx = { Monday: 1, Tuesday: 2, Wednesday: 3, Thursday: 4, Friday: 5, Saturday: 6, Sunday: 0 };
  const toMin = (s) => { const [h, m] = s.split(':').map(Number); return h * 60 + m; };
  const out = {};
  for (const h of site.hours) for (const d of h.schemaDays) out[dayIdx[d]] = [toMin(h.opens), toMin(h.closes)];
  return JSON.stringify(out);
})();
const badgeStrings = () => esc(JSON.stringify({
  open: t('badge.open'), before: t('badge.before'), next: t('badge.next'), tomorrow: t('badge.tomorrow'), days: tList('badge.days'),
}));
export const openBadge = (cls = '') => {
  const first = site.hours[0];
  return `<p class="open-badge ${cls}" data-open-badge data-hours='${hoursJson}' data-txt="${badgeStrings()}"><span class="open-dot" aria-hidden="true"></span><span data-open-text>${dayLabel(first)} ${first.display}</span></p>`;
};

/* ---------- map / location ---------- */
export const mapEmbed = () => `
  <div class="map" data-map data-src="${links.mapEmbed}" data-title="${esc(t('map.title'))}">
    <noscript><a class="btn btn--dark" href="${links.mapPlace}">${t('btn.openMap')}</a></noscript>
  </div>`;

export const idLine = () => `<p class="ico-line">${esc(site.legalName)} · ${t('legal.ico')} ${site.ico}</p>`;
export const addressLine = () => `${site.postalCode} ${t('city')} – ${site.district}`;

export const locationSection = ({ heading = t('location.heading'), tone = 'light' } = {}) => {
  const e = site.photos.entrance;
  const text = `
      <div data-reveal>
        <p class="eyebrow">${t('location.eyebrow')}</p>
        <h2>${heading}</h2>
        <address class="address">
          <strong>${site.name}</strong><br>
          ${site.street}<br>
          ${addressLine()}<br>
          <a href="${links.call}" data-track="click_call">${site.phoneDisplay}</a>
        </address>
        <div class="hours-block">
          <p class="hours-title">${icon('clock')}<span>${t('hours.title')}</span></p>
          ${openBadge()}
          ${hoursList()}
        </div>
        ${idLine()}
        <p class="lead">${t('location.lead')}</p>
        <div class="btn-row">
          <a class="btn ${tone === 'dark' ? 'btn--light' : 'btn--dark'}" href="${links.directions}" target="_blank" rel="noopener" data-track="click_directions">${icon('pin')}<span>${t('btn.directions')}</span></a>
          ${btnCall(t('btn.call'))}
          ${btnWhatsapp(t('btn.whatsappShort'))}
        </div>
      </div>`;
  return `
  <section class="section section--${tone}" id="lokalita">
    <div class="wrap">
      <div class="${e ? 'loc-top' : 'split-2'}">
        ${text}
        ${e ? `<figure class="loc-photo" data-reveal><img src="${e.src}" alt="${esc(t('photos.entrance'))}" width="${e.width}" height="${e.height}" loading="lazy" decoding="async"></figure>` : `<div data-reveal>${mapEmbed()}</div>`}
      </div>
      ${e ? `<div class="loc-map" data-reveal>${mapEmbed()}</div>` : ''}
    </div>
  </section>`;
};

/* ---------- FAQ / CTA ---------- */
export const faqSection = (items, { heading = t('faq.heading'), tone = 'light', eyebrow = t('faq.eyebrow') } = {}) => `
  <section class="section section--${tone}" id="faq">
    <div class="wrap faq-wrap">
      <div data-reveal><p class="eyebrow">${eyebrow}</p><h2>${heading}</h2></div>
      <div class="faq" data-stagger>
        ${items.map((q) => `
        <details class="faq-item">
          <summary><span>${esc(q.q)}</span>${icon('plus', 'icon faq-icon')}</summary>
          <div class="faq-body"><p>${q.a}</p></div>
        </details>`).join('')}
      </div>
    </div>
  </section>`;

export const finalCta = ({ heading = t('cta.heading'), text = t('cta.text') } = {}) => `
  <section class="section section--black final-cta" id="objednat">
    <div class="wrap">
      <div class="final-cta-copy" data-reveal>
        <h2>${heading}</h2>
        <p class="lead">${text}</p>
      </div>
      <div class="final-cta-actions" data-stagger>
        ${btnWhatsapp(t('btn.whatsappShort'), 'btn--xl', 'final')}
        ${btnCall(t('btn.call'), 'btn--xl', 'final')}
        ${btnSms(t('btn.smsShort'), 'btn--xl', 'final')}
      </div>
    </div>
  </section>`;

/* ---------- prices ---------- */
const priceMini = (it) => `<li class="pm-row"><span class="pm-name">${esc(it.name)}${it.includes ? `<span class="pm-inc">${it.includes.map(esc).join(' • ')}</span>` : ''}${it.note ? `<span class="pm-inc">${esc(it.note)}</span>` : ''}</span><strong class="pm-price">${formatPrice(it)}</strong></li>`;

/** One price group as a clean list (used on service pages and on /cenik/). */
export const priceTable = (groupId, { headingTag = 'h3', link = false } = {}) => {
  const g = groupById(groupId);
  return `
  <div class="ptable" id="cenik-${g.id}">
    <div class="ptable-head">
      <${headingTag}>${esc(g.title)}</${headingTag}>
      ${g.subtitle ? `<span class="ptable-sub">${esc(g.subtitle)}</span>` : ''}
      ${link && g.page ? `<a class="text-link" href="/${g.page}/">${t('prices.more')}</a>` : ''}
    </div>
    ${g.sections.map((s) => `
    ${s.label ? `<p class="ptable-label">${esc(s.label)}</p>` : ''}
    <ul class="ptable-list">
      ${s.items.map((it) => `
      <li class="prow">
        <div class="prow-main"><span class="prow-name">${esc(it.name)}</span>${it.note ? `<span class="prow-note">${esc(it.note)}</span>` : ''}</div>
        <span class="prow-price">${formatPrice(it)}</span>
        ${it.includes ? `<ul class="prow-inc">${it.includes.map((x) => `<li>${esc(x)}</li>`).join('')}</ul>` : ''}
      </li>`).join('')}
    </ul>`).join('')}
    ${g.note ? `<p class="ptable-note">${esc(g.note)}</p>` : ''}
  </div>`;
};

// `cta(option)` (optional) returns extra markup placed under the price rows, e.g. an “order this variant” button
export const optionCards = (items, cta = null) => `
  <div class="opts" data-stagger>
    ${items.map((o) => `
    <article class="opt">
      <h3>${esc(o.title)}</h3>
      <p>${o.text}</p>
      ${o.ids && o.ids.length ? `<ul class="pm">${o.ids.map((id) => priceMini(itemById(id))).join('')}</ul>` : ''}
      ${cta ? cta(o) : ''}
    </article>`).join('')}
  </div>`;

/* ---------- service cards ---------- */
export const fromPrice = (page) => kc(groupMin(page.groups.filter((id) => !['zdobeni', 'ostatni'].includes(id))));
const artSrc = (page) => `/images/art/${page.art}.svg`;
const DARK_ART = new Set(['gelove-nehty', 'prodluzovani-ras', 'head-spa', 'pansky-strih', 'panska-kosmetika']);
export const artTone = (page) => (DARK_ART.has(page.art) ? 'dark' : 'light');

export const serviceCard = (page, { eager = false } = {}) => `
  <a class="svc svc--${artTone(page)}" href="/${page.slug}/">
    <span class="svc-img"><img src="${artSrc(page)}" alt="" width="800" height="1000" loading="${eager ? 'eager' : 'lazy'}" decoding="async"></span>
    <span class="svc-body">
      <span class="svc-area">${t(`areas.${page.area}.label`)}</span>
      <h3 class="svc-name">${esc(page.name)}</h3>
      <span class="svc-text">${esc(page.cardText)}</span>
      <span class="svc-foot"><span class="svc-price">${t('from')} ${fromPrice(page)}</span><span class="svc-cta" aria-hidden="true">${icon('arrow')}</span></span>
    </span>
  </a>`;

export const serviceGrid = (pages, opts = {}) => `<div class="svc-grid" data-stagger>${pages.map((p) => serviceCard(p, opts)).join('')}</div>`;

/* ---------- reviews / team / gallery (rendered only when real content exists) ---------- */
export const galleryGrid = (items) => `
  <div class="gallery" data-stagger>
    ${items.map((g, i) => `<figure class="gallery-item gallery-item--${i % 6}"><img src="${g.src}" alt="${esc(g.alt)}" width="${g.width}" height="${g.height}" loading="lazy" decoding="async"></figure>`).join('')}
  </div>`;

export const reviewsSection = () => (site.reviews.length ? `
  <section class="section section--light" id="recenze">
    <div class="wrap">
      <div data-reveal><p class="eyebrow">${t('reviews.eyebrow')}</p><h2>${t('reviews.heading')}</h2></div>
      <div class="reviews" data-stagger>
        ${site.reviews.slice(0, 6).map((r) => `
        <figure class="review">
          <div class="stars" role="img" aria-label="${r.stars || 5} ${t('reviews.stars')}">${'★'.repeat(r.stars || 5)}</div>
          <blockquote>${esc(r.text)}</blockquote>
          <figcaption><strong>${esc(r.author)}</strong><span>Google Review</span></figcaption>
        </figure>`).join('')}
      </div>
      ${site.googleReviewsUrl ? `<p><a class="btn btn--dark" href="${site.googleReviewsUrl}" target="_blank" rel="noopener">${t('reviews.cta')}</a></p>` : ''}
    </div>
  </section>` : '');

export const teamSection = () => (site.team.length ? `
  <section class="section section--black" id="tym">
    <div class="wrap">
      <div data-reveal><p class="eyebrow">${t('team.eyebrow')}</p><h2>${t('team.heading')}</h2></div>
      <div class="team" data-stagger>
        ${site.team.map((m) => `
        <figure class="team-card">
          <img src="${m.src}" alt="${esc(m.name)} – ${esc(m.role)} ${t('team.at')}" width="${m.width}" height="${m.height}" loading="lazy" decoding="async">
          <figcaption><strong>${esc(m.name)}</strong><span>${esc(m.role)}</span></figcaption>
        </figure>`).join('')}
      </div>
    </div>
  </section>` : '');

/* ---------- structured data ---------- */
const bizId = (absolute) => (site.url ? absolute('/#business') : '#business');
const PRICE_MIN_MAX = (() => {
  const core = priceGroups.filter((g) => !['zdobeni', 'ostatni'].includes(g.id)).flatMap((g) => g.sections.flatMap((s) => s.items));
  const all = core.flatMap((it) => (it.variants ? it.variants.map((v) => v.price) : [it.price]));
  return `${Math.min(...all)}–${Math.max(...all)} CZK`;
})();

export function localBusinessSchema(absolute) {
  const sameAs = [site.instagram, site.facebook, site.googleBusinessUrl].filter(Boolean);
  const obj = {
    '@context': 'https://schema.org',
    '@type': ['BeautySalon', 'HairSalon', 'NailSalon'],
    '@id': bizId(absolute),
    name: site.name,
    legalName: site.legalName,
    description: t('schema.description'),
    telephone: site.phone,
    identifier: { '@type': 'PropertyValue', propertyID: 'IČO', value: site.ico },
    priceRange: PRICE_MIN_MAX,
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.street,
      addressLocality: 'Praha',
      postalCode: site.postalCode,
      addressCountry: 'CZ',
    },
    geo: { '@type': 'GeoCoordinates', latitude: site.geo.lat, longitude: site.geo.lng },
    areaServed: { '@type': 'City', name: 'Praha' },
    hasMap: links.mapPlace,
    openingHoursSpecification: site.hours.map((h) => ({
      '@type': 'OpeningHoursSpecification', dayOfWeek: h.schemaDays, opens: h.opens, closes: h.closes,
    })),
    currenciesAccepted: 'CZK',
    knowsLanguage: ['cs', 'en', 'de'],
  };
  if (site.url) {
    obj.url = absolute('/');
    obj.logo = absolute('/images/logo-black.png');
    obj.image = absolute('/images/og-image.png');
  }
  if (sameAs.length) obj.sameAs = sameAs;
  return obj;
}

export const websiteSchema = (absolute) => ({
  '@context': 'https://schema.org', '@type': 'WebSite', name: site.name, url: absolute(pathFor('home')), inLanguage: LANG_META[getLang()].locale.replace('_', '-'),
  publisher: { '@id': bizId(absolute) },
});

const offerFor = (it, url) => {
  const base = { '@type': 'Offer', priceCurrency: 'CZK', url };
  if (it.variants) return it.variants.map((v) => ({ ...base, name: `${it.name} – ${v.label}`, price: String(v.price) }));
  if (it.from) return { ...base, name: it.name, priceSpecification: { '@type': 'PriceSpecification', priceCurrency: 'CZK', minPrice: it.price } };
  return { ...base, name: it.name, price: String(it.price) };
};

export const serviceSchema = (page) => (absolute) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: page.h1,
  serviceType: page.name,
  description: page.description,
  url: absolute(pathFor(page.slug)),
  inLanguage: LANG_META[getLang()].locale.replace('_', '-'),
  provider: { '@id': bizId(absolute) },
  areaServed: { '@type': 'City', name: 'Praha' },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: `${page.name} – ${t('schema.catalog')}`,
    itemListElement: page.groups.filter((id) => !['zdobeni', 'ostatni'].includes(id) || page.slug.startsWith('gelove'))
      .flatMap((id) => groupById(id).sections.flatMap((s) => s.items)).flatMap((it) => offerFor(it, absolute(pathFor(page.slug)))),
  },
});

/* ---------- navigation ---------- */
const menuGroups = () => [
  { area: 'nails', title: t('groups.nails'), href: '/nail-studio-praha-2/' },
  { area: 'beauty', title: t('groups.beauty'), href: '/nail-studio-praha-2/#beauty' },
  { area: 'barber', title: t('groups.barber'), href: '/barbershop-praha-2/' },
];
const menuLinks = (path, area) => getServicePages().filter((p) => p.area === area)
  .map((p) => `<a href="/${p.slug}/"${path === `/${p.slug}/` ? ' aria-current="page"' : ''}>${esc(p.name)}</a>`).join('');

/* ---------- sticky order bar ---------- */
// Fixed to the bottom on phones and tablets (call · SMS · WhatsApp); hidden on desktop, where the header has the
// order menu. Service pages pass `cta` = { label, sub }: the WhatsApp button then reads “Order · from 350 CZK”, and its
// WhatsApp / SMS links already carry the service-specific message (see data.mjs).
const stickyBar = (cta) => `
  <nav class="sticky-cta" data-sticky-cta aria-label="${esc(t('bar.aria'))}">
    <div class="sticky-cta-actions">
      <a class="sc-call" href="${links.call}" data-track="click_call" data-cta="sticky">${icon('phone')}<span>${t('bar.call')}</span></a>
      <a class="sc-sms" href="${links.sms}" data-track="click_sms" data-cta="sticky">${icon('sms')}<span>${t('btn.smsShort')}</span></a>
      <a class="sc-wa is-wa" href="${links.whatsapp}" target="_blank" rel="noopener" data-track="click_whatsapp" data-cta="sticky">${icon('chat')}<span class="sc-text"><span class="sc-label">${esc(cta && cta.label ? cta.label : t('btn.whatsappShort'))}</span>${cta && cta.sub ? `<span class="sc-sub">${esc(cta.sub)}</span>` : ''}</span></a>
    </div>
  </nav>`;

/* ---------- page shell ---------- */
// `path` is the Czech path of the page (the route key); the language-specific URL is derived from it.
export function layout({ title, description, path, body, robots, schema = [], bodyClass = '', preload = null, home = false, cta = null }) {
  const l = getLang();
  const meta = LANG_META[l];
  const key = keyForCsPath(path);
  const own = key ? pathFor(key) : path;
  const absolute = (p) => `${site.url}${p}`;
  const canonical = site.url && key ? `<link rel="canonical" href="${absolute(own)}">` : '';
  const alternates = site.url && key
    ? `${LANGS.map((x) => `<link rel="alternate" hreflang="${LANG_META[x].htmlLang}" href="${absolute(pathFor(key, x))}">`).join('\n  ')}\n  <link rel="alternate" hreflang="x-default" href="${absolute(pathFor(key, 'cs'))}">`
    : '';
  const ogUrl = site.url && key ? `<meta property="og:url" content="${absolute(own)}">` : '';
  const ogAlt = LANGS.filter((x) => x !== l).map((x) => `<meta property="og:locale:alternate" content="${LANG_META[x].locale}">`).join('\n  ');
  const ogImage = site.url ? absolute('/images/og-image.png') : '/images/og-image.png';
  const schemas = [localBusinessSchema(absolute), ...(home && site.url ? [websiteSchema(absolute)] : []), ...schema.map((s) => (typeof s === 'function' ? s(absolute) : s))];
  const isActive = (href) => (href === path ? ' aria-current="page"' : '');
  const pages = getServicePages();
  const inServices = pages.some((p) => path === `/${p.slug}/`) || path === '/nail-studio-praha-2/' || path === '/barbershop-praha-2/';
  const groups = menuGroups();

  const html = `<!DOCTYPE html>
<html lang="${meta.htmlLang}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
  <title>${esc(title)}</title>
  <meta name="description" content="${esc(description)}">
  ${robots ? `<meta name="robots" content="${robots}">` : '<meta name="robots" content="index, follow, max-image-preview:large">'}
  ${canonical}
  ${alternates}
  <meta name="theme-color" content="#000000">
  <meta property="og:type" content="website">
  <meta property="og:locale" content="${meta.locale}">
  ${ogAlt}
  <meta property="og:site_name" content="${site.name}">
  <meta property="og:title" content="${esc(title)}">
  <meta property="og:description" content="${esc(description)}">
  <meta property="og:image" content="${ogImage}">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:image:alt" content="${esc(t('ogAlt'))}">
  ${ogUrl}
  <meta name="twitter:card" content="summary_large_image">
  <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32.png">
  <link rel="icon" type="image/png" sizes="192x192" href="/images/icon-192.png">
  <link rel="apple-touch-icon" href="/images/apple-touch-icon.png">

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&amp;family=Space+Grotesk:wght@500;600;700&amp;display=swap" rel="stylesheet">
  <link rel="stylesheet" href="/css/style.css">
  ${preload ? `<link rel="preload" as="image" href="${preload.href}" imagesrcset="${preload.srcset}" imagesizes="100vw" fetchpriority="high">` : ''}
  ${schemas.map((s) => `<script type="application/ld+json">${JSON.stringify(s)}</script>`).join('\n  ')}
</head>
<body class="${bodyClass}" data-route="${key || ''}" data-lang="${l}">
  <a class="skip-link" href="#main">${t('skip')}</a>

  <header class="site-header" data-header>
    <div class="wrap header-inner">
      <a class="brand" href="/" aria-label="${esc(t('brandLabel'))}">
        <img src="/images/logo-white.png" width="1371" height="360" alt="${esc(t('logoAlt'))}">
      </a>
      <nav class="nav-desktop" aria-label="${esc(t('nav.aria'))}">
        <div class="nav-item" data-menu>
          <button type="button" class="nav-btn${inServices ? ' is-current' : ''}" data-menu-toggle aria-expanded="false" aria-controls="menu-sluzby">${t('nav.services')} ${icon('chevron', 'icon nav-chevron')}</button>
          <div class="mega" id="menu-sluzby" hidden>
            <div class="mega-grid">
              ${groups.map((g) => `
              <div class="mega-col">
                <a class="mega-title" href="${g.href}">${g.title}</a>
                ${menuLinks(path, g.area)}
              </div>`).join('')}
            </div>
            <a class="mega-all" href="/cenik/">${t('nav.all')} ${icon('arrow')}</a>
          </div>
        </div>
        ${nav.map((n) => `<a href="${n.href}"${isActive(n.href)}>${t(n.key)}</a>`).join('')}
      </nav>
      <div class="header-actions">
        @@LANG_DESKTOP@@
        <div class="order" data-order>
          <button type="button" class="btn btn--light btn--sm" data-order-toggle aria-expanded="false" aria-controls="order-panel">${t('order.toggle')}</button>
          <div class="order-panel" id="order-panel" hidden>
            <p class="order-panel-title">${t('order.title')}</p>
            <a href="${links.whatsapp}" target="_blank" rel="noopener" data-track="click_whatsapp">${icon('chat')}<span>${t('btn.whatsappShort')}</span></a>
            <a href="${links.call}" data-track="click_call">${icon('phone')}<span>${t('btn.call')}</span></a>
            <a href="${links.sms}" data-track="click_sms">${icon('sms')}<span>${t('btn.smsShort')}</span></a>
            <p class="order-panel-num">${site.phoneDisplay}</p>
          </div>
        </div>
        <button type="button" class="burger" data-burger aria-label="${esc(t('burger.open'))}" data-label-open="${esc(t('burger.open'))}" data-label-close="${esc(t('burger.close'))}" aria-expanded="false" aria-controls="mobile-nav"><span></span><span></span></button>
      </div>
    </div>
    <nav class="mobile-nav" id="mobile-nav" aria-label="${esc(t('nav.mobileAria'))}" hidden>
      <div class="wrap">
        @@LANG_MOBILE@@
        <a class="mobile-top" href="/"${isActive('/')}>${t('nav.home')}</a>
        ${groups.map((g) => `
        <div class="mobile-group">
          <a class="mobile-group-title" href="${g.href}">${g.title}</a>
          ${menuLinks(path, g.area)}
        </div>`).join('')}
        ${nav.map((n) => `<a class="mobile-top" href="${n.href}"${isActive(n.href)}>${t(n.key)}</a>`).join('')}
        <p class="mobile-nav-addr">${site.street}, ${t('city')}<br>${site.phoneDisplay}</p>
      </div>
    </nav>
  </header>

  <main id="main">
${body}
  </main>

  <footer class="site-footer">
    <div class="wrap footer-grid">
      <div class="footer-brand">
        <img src="/images/logo-white.png" width="1371" height="360" alt="${esc(t('logoAlt'))}" loading="lazy">
        <address>
          <strong>${site.name}</strong><br>
          ${site.street}, ${site.postalCode} ${t('city')}<br>
          <a href="${links.call}" data-track="click_call">${site.phoneDisplay}</a>
        </address>
        <p class="footer-title footer-title--hours">${t('hours.title')}</p>
        ${hoursList()}
        <p class="footer-ico">${esc(site.legalName)} · ${t('legal.ico')} ${site.ico}</p>
      </div>
      <nav class="footer-links" aria-label="${esc(t('footer.servicesAria'))}">
        <p class="footer-title">${t('footer.services')}</p>
        ${pages.map((p) => `<a href="/${p.slug}/">${esc(p.name)}</a>`).join('')}
      </nav>
      <nav class="footer-links" aria-label="${esc(t('footer.linksAria'))}">
        <p class="footer-title">${t('footer.web')}</p>
        <a href="/nail-studio-praha-2/">${t('hubs.nails.crumb')}</a>
        <a href="/barbershop-praha-2/">${t('hubs.barber.crumb')}</a>
        ${nav.map((n) => `<a href="${n.href}">${t(n.key)}</a>`).join('')}
        <p class="footer-title footer-title--gap">${t('footer.order')}</p>
        <a href="${links.whatsapp}" target="_blank" rel="noopener" data-track="click_whatsapp">${t('btn.whatsappShort')}</a>
        <a href="${links.call}" data-track="click_call">${t('btn.call')}</a>
        <a href="${links.sms}" data-track="click_sms">${t('btn.smsShort')}</a>
        <a href="${links.directions}" target="_blank" rel="noopener" data-track="click_directions">${t('btn.directions')}</a>
        ${site.instagram ? `<a href="${site.instagram}" target="_blank" rel="noopener me" data-track="click_instagram">Instagram</a>` : ''}
        ${site.facebook ? `<a href="${site.facebook}" target="_blank" rel="noopener me">Facebook</a>` : ''}
      </nav>
    </div>
    <div class="wrap footer-bottom">
      <span>© ${new Date().getFullYear()} ${site.name} · ${t('legal.ico')} ${site.ico}</span>
      <a class="credit" href="https://matejboska.cz" target="_blank" rel="noopener">DESIGN byboshka</a>
    </div>
  </footer>

  ${stickyBar(cta)}

  <script src="/js/gsap.min.js" defer></script>
  <script src="/js/ScrollTrigger.min.js" defer></script>
  <script src="/js/main.js" defer></script>
  <script src="/js/cta.js" defer></script>
</body>
</html>
`;
  // Rewrite Czech-path links to this language, then drop in the language switch (its links are already exact).
  return localizeLinks(html)
    .replace('@@LANG_DESKTOP@@', langSwitch(key, 'bar'))
    .replace('@@LANG_MOBILE@@', langSwitch(key, 'menu'));
}

export { stripTags };
