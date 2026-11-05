// /akce-manikura-pedikura/ – landing page of the week promotion (10 % off manicure + pedicure, 9–15 Nov 2026).
// Built for search and for AI answers: the answer (what, how much, when, where) is in the first paragraph and in the
// fact list, the discount's scope is the literal ceník (price tables are rendered from priceGroups, no amounts typed
// here), the Q&A mirrors the visible FAQ as FAQPage JSON-LD (layout does that), SaleEvent + WebPage JSON-LD carry the
// dates. Copy lives in src/i18n/promo.<lang>.mjs; the config in data.mjs (`promo`).
import {
  site, links, promo,
} from './data.mjs';
import { pageBySlug } from './content.mjs';
import {
  esc, icon, btnBook, btnCall, breadcrumbs, breadcrumbSchema, priceTable, serviceCard, faqSection, finalCta,
  locationSection, layout,
} from './layout.mjs';
import { t, tList, getLang, pathFor, LANG_META } from './i18n/index.mjs';
import { articlesBlock, postBySlug } from './blog.mjs';

const bookLink = () => `<a href="${site.booking.page}" target="_blank" rel="noopener" data-track="click_book">${t('promo.words.book')}</a>`;
const phoneLink = () => `<a href="${links.call}" data-track="click_call">${site.phoneDisplay}</a>`;
const address = () => `${site.street}, ${site.postalCode} ${t('city')} – ${site.district}`;
const fill = (str) => str.replace(/\{(\w+)\}/g, (m, k) => ({
  book: bookLink(), phone: phoneLink(), address: address(), weekdays: site.hours[0].display, sat: site.hours[1].display,
}[k] ?? m));

const saleEventSchema = (abs) => {
  const own = abs(pathFor('akce'));
  const biz = { '@id': abs('/#business') };
  return {
    '@context': 'https://schema.org', '@type': 'SaleEvent', '@id': `${own}#akce`,
    name: t('promo.page.h1'), description: t('promo.page.lead'), url: own,
    inLanguage: LANG_META[getLang()].locale.replace('_', '-'),
    startDate: promo.from, endDate: promo.to,
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    location: biz, organizer: biz,
    offers: promo.slugs.map((slug) => {
      const p = pageBySlug(slug);
      return {
        '@type': 'Offer', name: `${p.name} ${t('promo.badge')}`, url: abs(pathFor(slug)),
        description: `${t('promo.page.facts.discount')}: ${t('promo.page.facts.discountV')}. ${t('promo.page.facts.when')}: ${t('promo.page.facts.whenV')}.`,
        validFrom: promo.startsAt, validThrough: promo.endsAt, availability: 'https://schema.org/InStock',
        seller: biz, itemOffered: { '@type': 'Service', name: p.name, url: abs(pathFor(slug)) },
      };
    }),
  };
};
const webPageSchema = (abs) => ({
  '@context': 'https://schema.org', '@type': 'WebPage', '@id': `${abs(pathFor('akce'))}#page`, url: abs(pathFor('akce')),
  name: t('promo.page.title'), description: t('promo.page.description'), inLanguage: LANG_META[getLang()].locale.replace('_', '-'),
  datePublished: '2026-11-05', dateModified: '2026-11-05',
  about: { '@id': abs('/#business') }, mainEntity: { '@id': `${abs(pathFor('akce'))}#akce` },
  speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', '.promo-lead', '.promo-facts'] },
});

export function promoPage() {
  const trail = [{ name: t('promo.page.crumb'), href: promo.path }];
  const f = (k) => fill(t(`promo.page.facts.${k}`));
  const items = tList('promo.page.faq.items').map((x) => ({ q: x.q, a: fill(x.a) }));
  const services = promo.slugs.map(pageBySlug);
  const articles = getLang() === 'cs'
    ? articlesBlock(['manikura-cena-praha-2', 'pedikura-footlogix-vs-klasicka', 'shellac-vs-gellak'].map(postBySlug), { tone: 'light', heading: 'Než si vyberete: průvodci manikúrou a pedikúrou', id: 'pruvodci' })
    : '';
  const body = `
  <section class="page-hero promo-hero">
    <div class="wrap promo-hero-grid">
      <div class="promo-hero-copy">
        ${breadcrumbs(trail)}
        <p class="eyebrow" data-hero>${t('promo.page.eyebrow')}</p>
        <h1 data-hero>${t('promo.page.h1')}</h1>
        <p class="lead promo-lead" data-hero>${t('promo.page.lead')}</p>
        <div class="btn-row" data-hero>${btnBook(t('btn.book'), 'btn--lg', 'hero')}${btnCall(t('btn.call'), 'btn--lg', 'hero')}</div>
        <p class="hero-micro" data-hero>${icon('check')}<span>${t('promo.page.micro')}</span></p>
      </div>
      <div class="promo-seal" data-hero data-promo-live aria-hidden="true"><b>${t('promo.badge')}</b><span>${t('promo.page.seal')}</span><small>${t('promo.dates')}</small></div>
    </div>
  </section>

  <section class="section section--light promo-over-note" data-promo-over id="akce-skoncila">
    <div class="wrap">
      <h2>${t('promo.over.title')}</h2>
      <p class="lead">${t('promo.over.text')}</p>
      <div class="btn-row"><a class="btn btn--book" href="/cenik/">${t('promo.over.cta')} ${icon('arrow')}</a></div>
    </div>
  </section>

  <section class="section section--light" id="akce-v-kostce" aria-label="${esc(t('promo.page.factsAria'))}">
    <div class="wrap">
      <dl class="promo-facts" data-reveal>
        ${['discount', 'when', 'what', 'where', 'book'].map((k) => `<div><dt>${t(`promo.page.facts.${k}`)}</dt><dd>${fill(t(`promo.page.facts.${k}V`))}</dd></div>`).join('')}
      </dl>
    </div>
  </section>

  <section class="section section--light" id="na-co-sleva-plati">
    <div class="wrap">
      <div class="section-head" data-reveal><div><p class="eyebrow">${t('promo.page.prices.eyebrow')}</p><h2>${t('promo.page.prices.h2')}</h2><p class="lead">${t('promo.page.prices.lead')}</p></div><a class="text-link" href="/cenik/">${t('teaser.link')}</a></div>
      <div class="ptables ptables--cols" data-reveal>${promo.groups.map((id) => priceTable(id, { headingTag: 'h3', link: true })).join('')}</div>
    </div>
  </section>

  <section class="section section--black" id="jak-akci-vyuzit">
    <div class="wrap">
      <div data-reveal><p class="eyebrow">${t('promo.page.steps.eyebrow')}</p><h2>${t('promo.page.steps.h2')}</h2></div>
      <ol class="steps steps--n3" data-stagger>
        ${tList('promo.page.steps.items').map((s, i) => `<li><span class="step-n">${String(i + 1).padStart(2, '0')}</span><h3>${esc(s.h)}</h3><p>${fill(s.t)}</p></li>`).join('')}
      </ol>
    </div>
  </section>

  <section class="section section--light" id="sluzby-v-akci">
    <div class="wrap">
      <div class="section-head" data-reveal><div><p class="eyebrow">${t('promo.page.services.eyebrow')}</p><h2>${t('promo.page.services.h2')}</h2></div></div>
      <div class="svc-grid svc-grid--promo" data-stagger>${services.map((p) => serviceCard(p)).join('')}</div>
      <div class="btn-row promo-book-row" data-reveal>
        ${services.map((p) => `<a class="btn btn--book btn--lg" href="${site.booking.services[p.slug]}" target="_blank" rel="noopener" data-track="click_book" data-cta="promo">${icon('calendar')}<span>${esc(t('promo.page.services.book', { name: p.name }))}</span></a>`).join('')}
      </div>
    </div>
  </section>

  ${articles}
  ${faqSection(items, { tone: 'white', heading: t('promo.page.faq.heading'), eyebrow: t('promo.page.faq.eyebrow'), id: 'faq' })}
  ${locationSection({ tone: 'light', photo: false })}
  ${finalCta({ heading: t('promo.band.title') })}`;

  return layout({
    title: t('promo.page.title'), description: t('promo.page.description'),
    path: promo.path, body, bodyClass: 'page-promo',
    schema: [(abs) => breadcrumbSchema(trail, abs), webPageSchema, saleEventSchema],
  });
}
