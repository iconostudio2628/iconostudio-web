// Page templates. All visible copy comes from the UI dictionaries (src/i18n/ui.<lang>.mjs) or from
// the service-page content; internal links are written as Czech paths and localized by layout().
import {
  site, links, itemById, kc, kcList, groupMin, priceAreas, getPriceGroups, setOrderMessage,
} from './data.mjs';
import { getServicePages, pageBySlug, photos, areaMeta } from './content.mjs';
import {
  esc, icon, btnWhatsapp, btnCall, linkSms, breadcrumbs, breadcrumbSchema, serviceSchema,
  hoursList, hoursRows, hoursSummary, addressLine, openBadge, locationSection, studioSection, faqSection, finalCta, galleryGrid,
  reviewsSection, teamSection, priceTable, optionCards, serviceGrid, fromPrice, layout, mapEmbed,
} from './layout.mjs';
import { t, tList, getLang, pathFor, lp } from './i18n/index.mjs';
import {
  extrasFor, orderMessageFor, renderSig, renderBand, renderCombos, chipsNav, serviceHero, optionCta, stickyFor,
  workItems, reviewItems,
} from './service-extras.mjs';

const byArea = (...areas) => getServicePages().filter((p) => areas.includes(p.area));
const phoneLink = () => `<a href="${links.call}" data-track="click_call">${site.phoneDisplay}</a>`;
const fromWord = () => t('from');

/* ---------- shared FAQ items ---------- */
const faqOrder = () => ({
  q: t('faqs.order.q'),
  a: t('faqs.order.a', {
    wa: `<a href="${links.whatsapp}" target="_blank" rel="noopener" data-track="click_whatsapp">WhatsApp</a>`,
    sms: `<a href="${links.sms}" data-track="click_sms">SMS</a>`,
    phone: site.phoneDisplay,
    call: `<a href="${links.call}" data-track="click_call">${t('faqs.order.callWord')}</a>`,
    msg: t('orderMessage'),
  }),
});
const faqWhere = () => ({
  q: t('faqs.where.q'),
  a: t('faqs.where.a', {
    address: `${site.street}, ${site.postalCode} ${t('city')} – ${site.district}`,
    map: `<a href="${links.directions}" target="_blank" rel="noopener" data-track="click_directions">${t('faqs.where.map')}</a>`,
  }),
});
const faqHours = () => ({ q: t('faqs.hours.q'), a: t('faqs.hours.a', { hours: hoursSummary() }) });
const faqPrices = () => ({ q: t('faqs.prices.q'), a: t('faqs.prices.a') });

const photo = (p, alt, cls = '', sizes = '(min-width: 900px) 50vw, 100vw') => (p ? `<img class="${cls}" src="${p.src}"${p.srcset ? ` srcset="${p.srcset}" sizes="${sizes}"` : ''} alt="${esc(alt)}" width="${p.width}" height="${p.height}" loading="lazy" decoding="async">` : '');
const para = (arr) => arr.map((x) => `<p>${x}</p>`).join('');
const lc = (s) => (getLang() === 'cs' ? s.toLowerCase() : s); // German nouns stay capitalised

/* ---------- reusable sections ---------- */
const factsBar = (price) => `
  <section class="facts" aria-label="${esc(t('facts.aria'))}">
    <div class="wrap facts-grid">
      ${price ? `<div class="fact"><span class="fact-label">${t('facts.prices')}</span><span class="fact-val">${fromWord()} ${price}</span></div>` : ''}
      <div class="fact"><span class="fact-label">${t('facts.address')}</span><span class="fact-val">${site.street}, ${t('city')}</span></div>
      <div class="fact"><span class="fact-label">${t('facts.phone')}</span><span class="fact-val">${phoneLink()}</span></div>
      <div class="fact"><span class="fact-label">${t('facts.open')}</span><span class="fact-val">${openBadge('open-badge--inline')}</span></div>
    </div>
  </section>`;

const steps = ({ h2, items }, tone = 'white', id = '') => `
  <section class="section section--${tone}"${id ? ` id="${id}"` : ''}>
    <div class="wrap">
      <div data-reveal><p class="eyebrow">${t('svc.steps')}</p><h2>${h2}</h2></div>
      <ol class="steps steps--n${items.length}" data-stagger>
        ${items.map((s, i) => `<li><span class="step-n">${String(i + 1).padStart(2, '0')}</span><h3>${esc(s.h)}</h3><p>${s.t}</p></li>`).join('')}
      </ol>
    </div>
  </section>`;

const orderSteps = (tone = 'white') => `
  <section class="section section--${tone}">
    <div class="wrap">
      <div data-reveal><p class="eyebrow">${t('orderSteps.eyebrow')}</p><h2>${t('orderSteps.heading')}</h2></div>
      <ol class="steps" data-stagger>
        <li><span class="step-n">01</span><h3>${t('orderSteps.s1.h')}</h3><p>${t('orderSteps.s1.t', { msg: t('orderMessage') })}</p></li>
        <li><span class="step-n">02</span><h3>${t('orderSteps.s2.h')}</h3><p>${t('orderSteps.s2.t')}</p></li>
        <li><span class="step-n">03</span><h3>${t('orderSteps.s3.h')}</h3><p>${site.street}, ${t('city')} – ${site.district}.</p></li>
      </ol>
    </div>
  </section>`;

const priceTeaserItems = {
  nails: ['man-classic', 'man-gellak', 'mod-nove', 'mod-dopl', 'ped-classic', 'ped-gellak'],
  beauty: ['ras-klasik', 'ras-volume', 'ob-uprava', 'ob-barveni', 'kos-oblicej', 'hs'],
  barber: ['cut-klasicky', 'cut-premium', 'cut-vip', 'vous-uprava', 'pece-kosmetika', 'cut-deti'],
};
const teaserPrice = (it) => (it.variants ? kcList(it.variants.map((v) => v.price)) : `${it.from ? `${fromWord()} ` : ''}${kc(it.price)}`);
const priceTeaser = (areas = ['nails', 'beauty', 'barber'], { tone = 'white', heading = t('teaser.default') } = {}) => `
  <section class="section section--${tone}" id="cenik-v-kostce">
    <div class="wrap">
      <div class="section-head" data-reveal><div><p class="eyebrow">${t('teaser.eyebrow')}</p><h2>${heading}</h2></div><a class="text-link" href="/cenik/">${t('teaser.link')}</a></div>
      <div class="teaser" data-stagger>
        ${areas.map((a) => `
        <div class="teaser-col">
          <h3>${esc(t(`areas.${a}.title`))}</h3>
          <ul class="pm">
            ${priceTeaserItems[a].map((id) => { const it = itemById(id); return `<li class="pm-row"><span class="pm-name">${esc(it.name)}${it.variants ? `<span class="pm-inc">${it.variants.map((v) => v.label.toLowerCase()).join(' / ')}</span>` : ''}</span><strong class="pm-price">${teaserPrice(it)}</strong></li>`; }).join('')}
          </ul>
        </div>`).join('')}
      </div>
    </div>
  </section>`;

const mapSection = () => {
  return `
  <section class="section section--white" id="mapa">
    <div class="wrap">
      <div class="section-head" data-reveal><div><p class="eyebrow">${t('map.eyebrow')}</p><h2>${t('map.heading')}</h2><p class="lead">${t('map.lead')}</p></div><a class="text-link" href="${links.directions}" target="_blank" rel="noopener" data-track="click_directions">${t('btn.directions')}</a></div>
      <div class="map-split map-split--solo" data-reveal>
        ${mapEmbed()}
      </div>
    </div>
  </section>`;
};

/* ---------- sub-page hero with image ---------- */
const imageFor = (p) => {
  const ph = p.photo ? photos[p.photo] : null;
  if (ph) return { src: ph.src, alt: p.imageAlt, width: ph.width, height: ph.height, kind: 'photo' };
  return { src: `/images/art/${p.art}.svg`, alt: p.artAlt, width: 800, height: 1000, kind: 'art' };
};

const svcHero = ({ trail, eyebrow, h1, text, image, extra = '' }) => `
  <section class="page-hero page-hero--svc">
    <div class="wrap svc-hero${image ? '' : ' svc-hero--solo'}">
      <div class="svc-hero-copy">
        ${breadcrumbs(trail)}
        <p class="eyebrow" data-hero>${eyebrow}</p>
        <h1 data-hero>${h1}</h1>
        <p class="lead" data-hero>${text}</p>
        ${extra}
        <div class="btn-row" data-hero>${btnWhatsapp()}${btnCall()}${linkSms()}</div>
      </div>
      ${image ? `<figure class="svc-hero-img svc-hero-img--${image.kind}" data-hero><img src="${image.src}" alt="${esc(image.alt)}" width="${image.width}" height="${image.height}" fetchpriority="high" decoding="async"></figure>` : ''}
    </div>
  </section>`;

/* =============================== HOME =============================== */
export function home() {
  const barber = byArea('barber');
  const nails = byArea('nails', 'beauty');
  const pb = site.photos.barber; const pn = site.photos.nails;
  const why = tList('home.why.items');
  const body = `
  <section class="hero hero--photo hero--blobs" id="hero">
    <div class="wrap hero-grid">
      <div class="hero-copy">
        <p class="eyebrow" data-hero>${t('home.hero.eyebrow')}</p>
        <h1 class="hero-title" aria-label="${esc(t('home.hero.aria'))}">
          <span class="line" aria-hidden="true"><span>${t('home.hero.l1')}</span></span>
          <span class="line" aria-hidden="true"><span>${t('home.hero.l2')}</span></span>
          <span class="line" aria-hidden="true"><span>${t('home.hero.l3')}</span></span>
        </h1>
        <p class="lead" data-hero>${t('home.hero.lead')}</p>
        <div class="btn-row" data-hero>
          ${btnWhatsapp(t('btn.whatsapp'), 'btn--lg')}
          ${btnCall(t('btn.call'), 'btn--lg')}
          <a class="text-link" href="/cenik/">${t('home.hero.pricelist')}</a>
        </div>
        <p class="hero-addr" data-hero>${icon('pin')}<span>${site.street} · ${t('city')} – ${site.district}</span></p>
      </div>
      <div class="hero-side">
      <div class="hero-photos">
        <figure class="blob-photo blob-photo--a"><img src="${pb.src}" srcset="${pb.srcset}" sizes="(min-width: 960px) 420px, 62vw" alt="${esc(t('photos.barber'))}" width="${pb.width}" height="${pb.height}" fetchpriority="high" decoding="async"></figure>
        <figure class="blob-photo blob-photo--b"><img src="${pn.src}" srcset="${pn.srcset}" sizes="(min-width: 960px) 260px, 40vw" alt="${esc(t('photos.nails'))}" width="${pn.width}" height="${pn.height}" decoding="async"></figure>
      </div>
      <aside class="hero-card" data-hero aria-label="${esc(t('home.hero.cardAria'))}">
        <div class="hero-card-body">
          <p class="hero-card-label">${t('location.eyebrow')}</p>
          <p class="hero-card-street">${site.street}</p>
          <p class="hero-card-city">${addressLine()}</p>
          <a class="hero-card-phone" href="${links.call}" data-track="click_call">${site.phoneDisplay}</a>
          ${openBadge()}
          ${hoursList()}
          <a class="text-link" href="${links.directions}" target="_blank" rel="noopener" data-track="click_directions">${t('btn.directions')}</a>
        </div>
      </aside>
      </div>
    </div>
  </section>

  <div class="marquee" aria-hidden="true">
    <div class="marquee-track">
      ${tList('home.marquee').map((w) => `<span>${w}</span>`).join('').repeat(6)}
    </div>
  </div>

  <section class="section section--black statement">
    <div class="wrap">
      <p class="statement-text" data-words>${t('home.statement')}</p>
    </div>
  </section>

  <section class="section section--light" id="o-studiu">
    <div class="wrap prose-2" data-reveal>
      <div><p class="eyebrow">${t('home.about.eyebrow')}</p><h2>${t('home.about.heading')}</h2></div>
      <div>
        <p>${t('home.about.p1')}</p>
        <p>${t('home.about.p2', { phone: phoneLink(), hours: hoursSummary() })}</p>
        <p class="ico-line">${esc(site.legalName)} · ${t('legal.ico')} ${site.ico}</p>
      </div>
    </div>
  </section>

  <section class="section section--white" id="sluzby-obory">
    <div class="wrap">
      <div class="duo" data-stagger>
        <a class="duo-panel duo-panel--dark" href="/barbershop-praha-2/">
          ${photo(site.photos.barber, t('photos.barber'), 'duo-photo')}
          <span class="duo-n">01</span>
          <div class="duo-body">
            <h2>${t('home.duo.barber.title')}</h2>
            <p>${t('home.duo.barber.text')}</p>
            <span class="duo-cta">${t('home.duo.barber.cta')} ${icon('arrow')}</span>
          </div>
        </a>
        <a class="duo-panel duo-panel--pale" href="/nail-studio-praha-2/">
          ${photo(site.photos.nails, t('photos.nails'), 'duo-photo')}
          <span class="duo-n">02</span>
          <div class="duo-body">
            <h2>${t('home.duo.nails.title')}</h2>
            <p>${t('home.duo.nails.text')}</p>
            <span class="duo-cta">${t('home.duo.nails.cta')} ${icon('arrow')}</span>
          </div>
        </a>
      </div>
    </div>
  </section>

  <section class="section section--light" id="sluzby">
    <div class="wrap">
      <div class="section-head" data-reveal>
        <div><p class="eyebrow">${t('home.services.eyebrow')}</p><h2>${t('home.services.heading')}</h2></div>
        <a class="text-link" href="/cenik/">${t('teaser.link')}</a>
      </div>
      ${serviceGrid([...nails, ...barber])}
    </div>
  </section>

  ${priceTeaser(['nails', 'beauty', 'barber'], { tone: 'white' })}

  <section class="section section--black why" id="proc">
    <div class="wrap">
      <div data-reveal><p class="eyebrow">${t('home.why.eyebrow')}</p><h2>${t('home.why.heading')}</h2></div>
      <ul class="why-grid" data-stagger>
        ${why.map((w, i) => `<li><span class="step-n">${String(i + 1).padStart(2, '0')}</span><h3>${w.h}</h3><p>${w.t}</p></li>`).join('\n        ')}
      </ul>
    </div>
  </section>

  ${site.gallery.length ? `
  <section class="section section--light" id="galerie-preview">
    <div class="wrap">
      <div class="section-head" data-reveal><div><p class="eyebrow">${t('gallery.eyebrow')}</p><h2>${t('gallery.heading')}</h2></div></div>
      ${galleryGrid(site.gallery.slice(0, 6))}
    </div>
  </section>` : ''}

  ${studioSection('light')}
  ${reviewsSection()}
  ${teamSection()}
  ${locationSection({ tone: 'light', photo: false })}
  ${faqSection([faqOrder(), faqHours(), faqWhere(), faqPrices()], { tone: 'white' })}
  ${finalCta()}`;

  return layout({
    title: t('home.title'), description: t('home.description'),
    path: '/', body, bodyClass: 'page-home', home: true,
    preload: { href: pb.src, srcset: pb.srcset, sizes: '(min-width: 960px) 420px, 62vw' },
  });
}

/* ============================== HUBS ================================ */
export function nailStudio() {
  const trail = [{ name: t('hubs.nails.crumb'), href: '/nail-studio-praha-2/' }];
  const nails = byArea('nails');
  const beauty = byArea('beauty');
  const choose = tList('hubs.nails.choose');
  const body = `
  ${svcHero({
    trail, eyebrow: t('hubs.nails.eyebrow'), h1: t('hubs.nails.h1'), text: t('hubs.nails.lead'),
    image: { src: photos.nails.src, alt: t('hubs.nails.imageAlt'), width: photos.nails.width, height: photos.nails.height, kind: 'photo' },
  })}
  ${factsBar(kc(groupMin(['rasy', 'oboci', 'manikura', 'pedikura', 'modelace', 'headspa'])))}

  <section class="section section--light">
    <div class="wrap prose-2" data-reveal>
      <div><p class="eyebrow">${t('hubs.nails.introEyebrow')}</p><h2>${t('hubs.nails.introHeading')}</h2></div>
      <div>${para(tList('hubs.nails.intro'))}</div>
    </div>
  </section>

  <section class="section section--white" id="nehty">
    <div class="wrap">
      <div class="section-head" data-reveal><div><p class="eyebrow">${t('groups.nails')}</p><h2>${t('hubs.nails.nailsHeading')}</h2></div><a class="text-link" href="/cenik/#cenik-manikura">${t('hubs.nails.nailsPrices')}</a></div>
      ${serviceGrid(nails)}
    </div>
  </section>

  <section class="section section--light" id="beauty">
    <div class="wrap">
      <div class="section-head" data-reveal><div><p class="eyebrow">${t('groups.beauty')}</p><h2>${t('hubs.nails.beautyHeading')}</h2></div><a class="text-link" href="/cenik/#cenik-rasy">${t('hubs.nails.beautyPrices')}</a></div>
      ${serviceGrid(beauty)}
    </div>
  </section>

  <section class="section section--light">
    <div class="wrap">
      <div data-reveal><p class="eyebrow">${t('hubs.advice')}</p><h2>${t('hubs.choose')}</h2></div>
      <ul class="why-grid why-grid--3" data-stagger>
        ${choose.map((c, i) => `<li><span class="step-n">${String(i + 1).padStart(2, '0')}</span><h3>${c.h}</h3><p>${c.t}</p></li>`).join('\n        ')}
      </ul>
    </div>
  </section>

  ${priceTeaser(['nails', 'beauty'], { tone: 'white', heading: t('hubs.nails.teaser') })}
  ${faqSection([
    { q: t('hubs.nails.faqServices'), a: `${[...nails, ...beauty].map((p) => `<a href="/${p.slug}/">${esc(p.name)}</a>`).join(', ')}.` },
    faqOrder(), faqHours(), faqPrices(),
  ], { tone: 'light' })}
  ${locationSection({ tone: 'white' })}
  ${finalCta({ heading: t('cta.heading') })}`;

  return layout({
    title: t('hubs.nails.title'), description: t('hubs.nails.description'),
    path: '/nail-studio-praha-2/', body,
    schema: [(abs) => breadcrumbSchema(trail, abs)],
  });
}

export function barbershop() {
  const trail = [{ name: t('hubs.barber.crumb'), href: '/barbershop-praha-2/' }];
  const barber = byArea('barber');
  const choose = tList('hubs.barber.choose');
  const body = `
  ${svcHero({
    trail, eyebrow: t('hubs.barber.eyebrow'), h1: t('hubs.barber.h1'), text: t('hubs.barber.lead'),
    image: { src: photos.barber.src, alt: t('hubs.barber.imageAlt'), width: photos.barber.width, height: photos.barber.height, kind: 'photo' },
  })}
  ${factsBar(kc(groupMin(['cuts', 'vousy', 'pece'])))}

  <section class="section section--light">
    <div class="wrap prose-2" data-reveal>
      <div><p class="eyebrow">${t('groups.barber')}</p><h2>${t('hubs.barber.introHeading')}</h2></div>
      <div>${para(tList('hubs.barber.intro'))}</div>
    </div>
  </section>

  <section class="section section--white" id="sluzby">
    <div class="wrap">
      <div class="section-head" data-reveal><div><p class="eyebrow">${t('hubs.barber.servicesEyebrow')}</p><h2>${t('hubs.barber.servicesHeading')}</h2></div><a class="text-link" href="/cenik/#cenik-cuts">${t('hubs.barber.prices')}</a></div>
      ${serviceGrid(barber)}
    </div>
  </section>

  <section class="section section--light">
    <div class="wrap">
      <div data-reveal><p class="eyebrow">${t('hubs.advice')}</p><h2>${t('hubs.choose')}</h2></div>
      <ul class="why-grid why-grid--3" data-stagger>
        ${choose.map((c, i) => `<li><span class="step-n">${String(i + 1).padStart(2, '0')}</span><h3>${c.h}</h3><p>${c.t}</p></li>`).join('\n        ')}
      </ul>
    </div>
  </section>

  ${priceTeaser(['barber'], { tone: 'light', heading: t('hubs.barber.teaser') })}
  ${faqSection([
    { q: t('hubs.barber.faqServices'), a: `${barber.map((p) => `<a href="/${p.slug}/">${esc(p.name)}</a>`).join(', ')}.` },
    faqOrder(), faqHours(), faqPrices(),
  ], { tone: 'white' })}
  ${locationSection({ tone: 'light' })}
  ${finalCta({ heading: t('hubs.barber.cta') })}`;

  return layout({
    title: t('hubs.barber.title'), description: t('hubs.barber.description'),
    path: '/barbershop-praha-2/', body,
    schema: [(abs) => breadcrumbSchema(trail, abs)],
  });
}

/* ========================= SERVICE DETAIL PAGES ===================== */
// Every service page = shared building blocks + its own signature block, section order and CTA copy
// (src/service-extras.mjs). While the page renders, setOrderMessage() makes every WhatsApp / SMS button on it
// (header, hero, bands, footer, sticky bar) carry a message that names the service.
const CHIP_SECTIONS = { options: 'varianty', price: 'cenik', guide: 'jak-vybrat', notes: 'dobre-vedet', steps: 'postup', care: 'pece', combos: 'kombinace', faq: 'faq', location: 'lokalita' };
// Two backgrounds only: every content section is cream; black is reserved for the hero, the CTA bands, the final CTA and the footer.

const evidenceSection = (slug, tone) => {
  const work = workItems(slug); const reviews = reviewItems(slug);
  if (!work.length && !reviews.length) return '';
  return `
  <section class="section section--${tone}" id="realizace">
    <div class="wrap">
      <div data-reveal><p class="eyebrow">${work.length ? t('gallery.eyebrow') : t('reviews.eyebrow')}</p><h2>${work.length ? t('gallery.heading') : t('reviews.heading')}</h2></div>
      ${work.length ? galleryGrid(work.slice(0, 6)) : ''}
      ${reviews.length ? `<div class="reviews" data-stagger>${reviews.slice(0, 3).map((r) => `
        <figure class="review"><div class="stars" role="img" aria-label="${r.stars || 5} ${t('reviews.stars')}">${'★'.repeat(r.stars || 5)}</div><blockquote>${esc(r.text)}</blockquote><figcaption><strong>${esc(r.author)}</strong></figcaption></figure>`).join('')}</div>` : ''}
    </div>
  </section>`;
};

function renderServicePage(slug) {
  const p = pageBySlug(slug);
  const meta = areaMeta[p.area];
  const trail = [{ name: t(`hubs.${meta.hubKey}.crumb`), href: meta.hub }, { name: p.name, href: `/${p.slug}/` }];
  const price = fromPrice(p);
  const related = p.related.map(pageBySlug);
  const hasPrices = p.options.items.some((o) => o.ids && o.ids.length);
  const { cfg, d, c } = extrasFor(slug);

  let bandN = 0;
  const section = {
    intro: (tn) => `
  <section class="section section--${tn}" id="o-sluzbe">
    <div class="wrap prose-2" data-reveal>
      <div><p class="eyebrow">${t('svc.about')}</p><h2>${p.intro.h2}</h2></div>
      <div>${para(p.intro.paras)}</div>
    </div>
  </section>`,
    options: (tn) => `
  <section class="section section--${tn}" id="varianty">
    <div class="wrap">
      <div data-reveal><p class="eyebrow">${hasPrices ? t('svc.variants') : t('svc.overview')}</p><h2>${p.options.h2}</h2></div>
      ${optionCards(p.options.items, optionCta(slug))}
    </div>
  </section>`,
    price: (tn) => `
  <section class="section section--${tn}" id="cenik">
    <div class="wrap">
      <div class="section-head" data-reveal><div><p class="eyebrow">${t('teaser.eyebrow')}</p><h2>${t('svc.pricesOf', { name: esc(lc(p.name)) })}</h2></div><a class="text-link" href="/cenik/">${t('teaser.link')}</a></div>
      <div class="ptables" data-reveal>${p.groups.map((id) => priceTable(id)).join('')}</div>
    </div>
  </section>`,
    guide: () => `
  <section class="section section--light guide" id="jak-vybrat">
    <div class="wrap guide-grid" data-reveal>
      <div><p class="eyebrow">${t('hubs.advice')}</p><h2>${p.guide.h2}</h2></div>
      <div class="guide-body">${para(p.guide.paras)}</div>
    </div>
  </section>`,
    notes: (tn) => `
  <section class="section section--${tn} notes" id="dobre-vedet">
    <div class="wrap prose-2" data-reveal>
      <div><p class="eyebrow">${c.chips.notes}</p><h2>${p.notes.h2}</h2></div>
      <div class="notes-body">${p.notes.items.map((n) => `<div class="note"><h3>${n.h}</h3>${para(n.paras)}</div>`).join('')}</div>
    </div>
  </section>`,
    steps: (tn) => steps(p.steps, tn, 'postup'),
    care: (tn) => `
  <section class="section section--${tn}" id="pece">
    <div class="wrap prose-2" data-reveal>
      <div><p class="eyebrow">${t('svc.care')}</p><h2>${p.care.h2}</h2></div>
      <ul class="ticks">${p.care.items.map((x) => `<li>${icon('check')}<span>${x}</span></li>`).join('')}</ul>
    </div>
  </section>`,
    combos: (tn) => renderCombos(slug, tn, slug),
    evidence: (tn) => evidenceSection(slug, tn),
    faq: (tn) => faqSection([...p.faq, faqOrder()], { tone: tn, heading: t('svc.faqHeading', { name: esc(lc(p.name)) }) }),
    related: (tn) => `
  <section class="section section--${tn}" id="souvisejici">
    <div class="wrap">
      <div class="section-head" data-reveal><div><p class="eyebrow">${t('svc.related.eyebrow')}</p><h2>${t('svc.related.heading')}</h2></div><a class="text-link" href="${meta.hub}">${t(p.area === 'barber' ? 'svc.related.allBarber' : 'svc.related.allNails')}</a></div>
      ${serviceGrid(related)}
    </div>
  </section>`,
    location: (tn) => locationSection({ tone: tn }),
    band: () => renderBand(slug, bandN++),
  };

  // order from the config; real photos / reviews (if the owner has added any) slot in before the FAQ
  const order = cfg.order.filter((tok) => (tok !== 'steps' || p.steps) && (tok !== 'notes' || p.notes)).flatMap((tok) => (tok === 'faq' ? ['evidence', 'faq'] : [tok]));
  const chips = [];
  const html = order.map((tok) => {
    const sig = /^sig(\d+)$/.exec(tok);
    const tn = 'light';
    if (tok === 'evidence' && !workItems(slug).length && !reviewItems(slug).length) return '';
    if (sig) {
      chips.push({ id: `sig-${sig[1]}`, label: d.sigs[Number(sig[1])].chip });
      return renderSig(slug, Number(sig[1]), { tone: tn, page: p });
    }
    if (CHIP_SECTIONS[tok]) chips.push({ id: CHIP_SECTIONS[tok], label: c.chips[tok] });
    return section[tok](tn);
  }).join('\n');

  const body = `
  ${serviceHero({ p, trail, d, c })}
  ${factsBar(price)}
  ${chipsNav(chips, c)}
${html}

  ${finalCta({ heading: d.final.h, text: d.final.t })}`;
  return layout({
    title: p.title, description: p.description, path: `/${p.slug}/`, body,
    cta: stickyFor(slug, price),
    schema: [(abs) => breadcrumbSchema(trail, abs), serviceSchema(p)],
  });
}

export function servicePage(slug) {
  setOrderMessage(orderMessageFor(slug));
  try { return renderServicePage(slug); } finally { setOrderMessage(null); }
}

/* ============================== CENÍK =============================== */
export function cenik() {
  const trail = [{ name: t('nav.cenik'), href: '/cenik/' }];
  const groups = getPriceGroups();
  const chips = groups.map((g) => `<a href="#cenik-${g.id}">${esc(g.title)}</a>`).join('');
  const area = (a) => {
    const list = groups.filter((g) => g.area === a);
    const meta = priceAreas.find((x) => x.id === a);
    return `
    <section class="section section--${a === 'beauty' ? 'light' : 'white'} cenik-area" id="${a}">
      <div class="wrap">
        <div class="section-head" data-reveal><div><p class="eyebrow">${t('teaser.eyebrow')}</p><h2>${esc(t(`areas.${a}.title`))}</h2><p class="lead">${esc(t(`areas.${a}.blurb`))}</p></div><a class="text-link" href="${meta.page}">${t('cenik.moreServices')}</a></div>
        <div class="ptables ptables--cols" data-reveal>${list.map((g) => priceTable(g.id, { headingTag: 'h3', link: true })).join('')}</div>
      </div>
    </section>`;
  };
  const body = `
  <section class="page-hero">
    <div class="wrap">
      ${breadcrumbs(trail)}
      <p class="eyebrow" data-hero>${t('teaser.eyebrow')}</p>
      <h1 data-hero>${t('cenik.h1')}</h1>
      <p class="lead" data-hero>${t('cenik.lead')}</p>
      <div class="btn-row" data-hero>${btnWhatsapp()}${btnCall()}${linkSms()}</div>
    </div>
  </section>
  <nav class="chips" aria-label="${esc(t('cenik.chipsAria'))}"><div class="wrap chips-in">${chips}</div></nav>
  ${area('nails')}
  ${area('beauty')}
  ${area('barber')}
  ${faqSection([faqOrder(), faqHours(), faqWhere()], { tone: 'light' })}
  ${finalCta({ heading: t('cenik.cta') })}`;
  return layout({
    title: t('cenik.title'), description: t('cenik.description'),
    path: '/cenik/', body,
    schema: [(abs) => breadcrumbSchema(trail, abs)],
  });
}

/* ============================== KONTAKT ============================= */
export function kontakt() {
  const trail = [{ name: t('nav.kontakt'), href: '/kontakt/' }];
  const body = `
  <section class="page-hero">
    <div class="wrap">
      ${breadcrumbs(trail)}
      <p class="eyebrow" data-hero>${t('nav.kontakt')}</p>
      <h1 data-hero>${t('kontakt.h1')}</h1>
      <p class="lead" data-hero>${t('kontakt.lead', { address: `${site.street}, ${site.postalCode} ${t('city')} – ${site.district}`, phone: site.phoneDisplay })}</p>
      <div class="btn-row" data-hero>${btnWhatsapp()}${btnCall()}${linkSms()}</div>
    </div>
  </section>

  <section class="section section--light">
    <div class="wrap contact-grid">
      <div class="contact-card" data-reveal>
        <p class="eyebrow">${t('hours.title')}</p>
        ${openBadge()}
        <dl class="hours hours--big">${hoursRows()}</dl>
      </div>
      <div class="contact-card" data-reveal>
        <p class="eyebrow">${t('kontakt.premises')}</p>
        <address class="address"><strong>${site.name}</strong><br>${site.street}<br>${addressLine()}<br>${phoneLink()}</address>
      </div>
      <div class="contact-card" data-reveal>
        <p class="eyebrow">${t('kontakt.legal')}</p>
        <p class="id-name">${esc(site.legalName)}</p>
        <p class="id-ico">${t('legal.ico')}: ${site.ico}</p>
      </div>
    </div>
  </section>

  ${studioSection('light')}
  ${mapSection()}
  ${orderSteps('light')}

  <section class="section section--white">
    <div class="wrap">
      <div data-reveal><p class="eyebrow">${t('footer.services')}</p><h2>${t('kontakt.servicesHeading')}</h2><p class="lead">${t('kontakt.servicesLead')}</p></div>
      <div class="link-cloud" data-reveal>${getServicePages().map((p) => `<a href="/${p.slug}/">${esc(p.name)}</a>`).join('')}<a href="/cenik/">${t('nav.cenik')}</a></div>
    </div>
  </section>

  ${faqSection([faqOrder(), faqHours(), faqWhere()], { tone: 'light' })}
  ${finalCta()}`;
  return layout({
    title: t('kontakt.title'), description: t('kontakt.description', { address: `${site.street}, ${t('city')}`, phone: site.phoneDisplay, hours: hoursSummary(), ico: site.ico }),
    path: '/kontakt/', body,
    schema: [(abs) => breadcrumbSchema(trail, abs), (abs) => ({ '@context': 'https://schema.org', '@type': 'ContactPage', name: t('kontakt.schemaName'), url: abs(pathFor('kontakt')), inLanguage: getLang(), about: { '@id': abs('/#business') } })],
  });
}

/* =============================== 404 ================================ */
export function notFound() {
  const body = `
  <section class="page-hero">
    <div class="wrap">
      <p class="eyebrow">404</p>
      <h1>${t('notFound.h1')}</h1>
      <p class="lead">${t('notFound.lead')}</p>
      <div class="btn-row"><a class="btn btn--light" href="/">${t('notFound.home')}</a><a class="btn btn--ghost" href="/cenik/">${t('nav.cenik')}</a>${btnWhatsapp()}</div>
    </div>
  </section>`;
  return layout({ title: t('notFound.title'), description: t('notFound.description'), path: '/404.html', body, robots: 'noindex' });
}
