// Single source of truth for everything that must stay consistent between the website,
// structured data and Google Business Profile (NAP = name, address, phone).
//
// Anything set to null / [] is deliberately NOT invented. The templates simply leave that
// block out (or show a neutral fallback) until real data is filled in here.

import { t, tx, getLang } from './i18n/index.mjs';

const WEEKDAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

export const site = {
  name: 'ICONO STUDIO',
  legalName: 'Icono Studio',
  ico: '24640077',
  tagline: 'Nails & Barber',

  // Absolute production URL, e.g. 'https://www.example.cz'. Needed for canonical, og:url,
  // sitemap.xml and JSON-LD. Set it here or run:  SITE_URL=https://... npm run build
  url: (process.env.SITE_URL || '').replace(/\/$/, ''),

  phone: '+420773867999',
  phoneDisplay: '+420 773 867 999',
  street: 'Bělehradská 77',
  postalCode: '120 00',
  city: 'Praha 2',
  district: 'Vinohrady',
  // Taken from OpenStreetMap (house node Bělehradská 77) – verify against the Google Business Profile pin.
  geo: { lat: 50.07356, lng: 14.43288 },

  // Regular opening hours. `display` is what visitors read, the rest feeds JSON-LD and the “open now” badge.
  hours: [
    { dayKey: 'weekdays', opens: '09:00', closes: '19:30', display: '9:00–19:30', schemaDays: WEEKDAYS },
    { dayKey: 'sat', opens: '10:00', closes: '19:00', display: '10:00–19:00', schemaDays: ['Saturday'] },
  ],
  // Sunday has no regular hours (closed, or by reservation) – the wording lives in the UI strings (hours.sunday).
  hoursSunday: { dayKey: 'sun' },

  // Profiles / links (leave null until confirmed)
  instagram: null,
  facebook: null,
  googleBusinessUrl: null,
  googleReviewsUrl: null,

  // Photo alt texts are UI strings (photos.*). Real content only below – each entry renders automatically when present.
  //   gallery: [{ src: '/images/x.webp', width: 1200, height: 1500, alt: '…', services: ['manikura-praha-2'] }]
  //            `services` (optional) = service-page slugs where this work also appears (“Z naší práce” block)
  //   reviews: [{ text: '…', author: 'Jméno', stars: 5, service: 'manikura-praha-2' }]
  //            `service` (optional) = the service page that shows this review as well
  //   team:    [{ name: 'Jméno', role: 'Barber', src: '/images/x.webp', width: 800, height: 1000 }]
  gallery: [],
  reviews: [],
  team: [],
  photos: {
    hero: {
      src: '/images/hero-icono-studio-praha-2-1600.webp',
      srcset: '/images/hero-icono-studio-praha-2-900.webp 900w, /images/hero-icono-studio-praha-2-1600.webp 1600w',
      width: 1600, height: 900,
    },
    barber: { src: '/images/pansky-strih-icono-studio-praha-2.webp', width: 1000, height: 1249 },
    nails: { src: '/images/manikura-icono-studio-praha-2.webp', width: 1000, height: 1249 },
    entrance: { src: '/images/vstup-icono-studio-belehradska.webp', width: 503, height: 644 },
  },
};

/* ====================================================================================
   CENÍK – přepsáno 1:1 z tištěného ceníku (nails/beauty + barber/vlasy).
   price: číslo v Kč · from: „od“ · variants: více cen u jedné služby · note/includes: doplňující řádek
   ==================================================================================== */
// Titles and blurbs: UI strings `areas.<id>.title|blurb`.
export const priceAreas = [
  { id: 'nails', page: '/nail-studio-praha-2/' },
  { id: 'beauty', page: '/nail-studio-praha-2/#beauty' },
  { id: 'barber', page: '/barbershop-praha-2/' },
];

export const priceGroups = [
  {
    id: 'manikura', area: 'nails', title: 'Manikúra', page: 'manikura-praha-2',
    sections: [
      { label: 'Výhodné balíčky', items: [
        { id: 'man-pk-classic', name: 'Výhodný balíček manikúra + hand spa', price: 490 },
        { id: 'man-pk-cnd', name: 'Výhodný balíček CND + hand spa', price: 700 },
        { id: 'man-pk-gellak', name: 'Výhodný balíček Gellak + hand spa', price: 600 },
      ] },
      { label: 'Jednotlivé služby', items: [
        { id: 'man-classic', name: 'Manikúra classic', price: 350 },
        { id: 'man-cnd', name: 'Manikúra – CND Shellac', price: 650 },
        { id: 'man-gellak', name: 'Manikúra – Gellak', price: 550 },
      ] },
    ],
  },
  {
    id: 'modelace', area: 'nails', title: 'Modelace umělých nehtů', page: 'gelove-akrylove-nehty-praha-2',
    sections: [
      { items: [
        { id: 'mod-pk', name: 'Výhodný balíček gel/akryl + hand spa', price: 700 },
        { id: 'mod-pk-dopl', name: 'Výhodný balíček gel/akryl + hand spa – doplnění', price: 650 },
        { id: 'mod-nove', name: 'Nové gelové / akrylové nehty s barvou', price: 650 },
        { id: 'mod-dopl', name: 'Doplnění gelových / akrylových nehtů s barvou', price: 590 },
        { id: 'mod-gelx', name: 'Gel X nehty', price: 650 },
      ] },
    ],
  },
  {
    id: 'pedikura', area: 'nails', title: 'Pedikúra', page: 'pedikura-praha-2',
    sections: [
      { label: 'Výhodné balíčky', items: [
        { id: 'ped-pk-classic', name: 'Výhodný balíček pedikúra classic + foot spa', price: 590 },
        { id: 'ped-pk-fl-cnd', name: 'Výhodný balíček Footlogix CND Shellac', price: 1050 },
        { id: 'ped-pk-fl-gellak', name: 'Výhodný balíček Footlogix s lakováním Gellak', price: 950 },
        { id: 'ped-pk-cnd', name: 'Výhodný balíček s lakováním CND + foot spa', price: 850 },
        { id: 'ped-pk-gellak', name: 'Výhodný balíček s lakováním gellak + foot spa', price: 790 },
      ] },
      { label: 'Jednotlivé služby', items: [
        { id: 'ped-med-cnd', name: 'Medicínální pedikúra Footlogix CND Shellac', price: 850 },
        { id: 'ped-med-gellak', name: 'Medicínální pedikúra Footlogix Gellak', price: 750 },
        { id: 'ped-classic', name: 'Pedikúra Classic', price: 490 },
        { id: 'ped-gellak', name: 'Pedikúra – Gellak', price: 590 },
        { id: 'ped-cnd', name: 'Pedikúra – CND Shellac', price: 650 },
        { id: 'ped-lak', addon: true, name: 'Samotné lakování Shellac / Gellak', variants: [{ label: 'Shellac', price: 400 }, { label: 'Gellak', price: 350 }] },
      ] },
    ],
  },
  {
    id: 'zdobeni', area: 'nails', title: 'Zdobení', page: 'gelove-akrylove-nehty-praha-2',
    sections: [
      { items: [
        { id: 'zd-3', name: '3 barvy', price: 50 },
        { id: 'zd-5', name: '5 barev', price: 100 },
        { id: 'zd-trpytky', name: 'Třpytky', price: 150 },
        { id: 'zd-matny', name: 'Matný efekt', price: 100 },
        { id: 'zd-cateyes', name: 'Cateyes / Metalický efekt', price: 150 },
        { id: 'zd-ombre', name: 'Ombré / Francie', price: 150 },
        { id: 'zd-design', name: 'Design / malování', price: 20, from: true },
        { id: 'zd-kaminky', name: 'Kamínky', price: 10, from: true },
        { id: 'zd-vitamin', name: 'Vitamin', price: 50 },
        { id: 'zd-pshine', name: 'P-Shine', price: 150 },
      ] },
    ],
  },
  {
    id: 'ostatni', area: 'nails', title: 'Ostatní nehtové služby', page: 'gelove-akrylove-nehty-praha-2',
    sections: [
      { items: [
        { id: 'ost-jeden', name: 'Úprava jednoho nehtu', price: 70 },
        { id: 'ost-dlouhe', name: 'Extra dlouhé nehty', price: 50, from: true, note: 'příplatek 50 / 150 / 200 Kč' },
        { id: 'ost-odstr-umele', name: 'Odstranění umělých nehtů', price: 250 },
        { id: 'ost-odstr-lak', name: 'Odstranění shellac / gellak nehtů', variants: [{ label: 'Shellac', price: 200 }, { label: 'Gellak', price: 150 }] },
        { id: 'ost-barva', name: 'Změna barvy u umělých nehtů (pod 10 dní)', price: 350 },
      ] },
    ],
  },
  {
    id: 'rasy', area: 'beauty', title: 'Prodlužování řas', page: 'prodluzovani-ras-praha-2', subtitle: 'nový set | doplnění',
    sections: [
      { items: [
        { id: 'ras-klasik', name: 'Klasické řasy 1:1', variants: [{ label: 'Nový', price: 990 }, { label: 'Doplnění', price: 790 }] },
        { id: 'ras-volume', name: 'Volume řasy 2D–5D', variants: [{ label: 'Nový', price: 1190 }, { label: 'Doplnění', price: 990 }] },
        { id: 'ras-mega', name: 'Mega Volume řasy', variants: [{ label: 'Nový', price: 1390 }, { label: 'Doplnění', price: 1090 }] },
        { id: 'ras-design', name: 'Prodloužení řas – designový efekt', price: 1190, from: true },
        { id: 'ras-odstr', addon: true, name: 'Odstranění prodloužených řas', price: 200 },
      ] },
    ],
  },
  {
    id: 'oboci', area: 'beauty', title: 'Obočí', page: 'oboci-kosmetika-praha-2',
    sections: [
      { items: [
        { id: 'ob-uprava', name: 'Úprava obočí', price: 100 },
        { id: 'ob-barveni', name: 'Barvení + úprava obočí', price: 200 },
      ] },
    ],
  },
  {
    id: 'kosmetika', area: 'beauty', title: 'Kosmetika', page: 'oboci-kosmetika-praha-2',
    sections: [
      { items: [{ id: 'kos-oblicej', name: 'Péče o obličej a masáž', price: 750 }] },
    ],
  },
  {
    id: 'headspa', area: 'beauty', title: 'Head Spa', page: 'head-spa-praha-2',
    sections: [
      { items: [{
        id: 'hs', name: 'Head Spa', price: 890,
        includes: [
          'Terapie bílým zvukem',
          'Ošetření akupunkturních bodů na hlavě',
          'Exfoliace pokožky hlavy',
          'Asijská technika mytí vlasů & masáže hlavy',
          'Foukání vlasů (bez stylingu) & aplikace vlasového regeneračního oleje',
        ],
      }] },
    ],
  },
  {
    id: 'cuts', area: 'barber', title: 'Barber cuts', page: 'panske-strihy-praha-2',
    note: 'Každé 2 týdny stříhání: −100 Kč na všechny cuts.',
    sections: [
      { items: [
        { id: 'cut-student', name: 'Studentský cut do 18 let', price: 540, from: true, includes: ['Střih', 'Styling', 'Balzám/Kolínská'] },
        { id: 'cut-klasicky', name: 'Klasický Cut', price: 640, includes: ['Mytí hlavy', 'Střih', 'Styling', 'Balzám/Kolínská'] },
        { id: 'cut-premium', name: 'Premium Cut', price: 770, includes: ['Mytí hlavy', 'Střih', 'Masáž', 'Styling', 'Balzám/Kolínská'] },
        { id: 'cut-vip', name: 'VIP Cut', price: 990, includes: ['Mytí hlavy', 'Střih', 'Vousy', 'Styling', 'Balzám/Kolínská'] },
        { id: 'cut-vip-all', name: 'VIP All Inclusive', price: 1190, includes: ['Mytí hlavy', 'Střih', 'Vousy', 'Masáž', 'Styling', 'Balzám/Kolínská'] },
        { id: 'cut-deti', name: 'Děti do 8 let', price: 400 },
      ] },
    ],
  },
  {
    id: 'vousy', area: 'barber', title: 'Vousy', page: 'uprava-vousu-praha-2',
    sections: [
      { items: [
        { id: 'vous-uprava', name: 'Úprava vousů', price: 420, includes: ['Timer/Strojek', 'Timer/Shaver/Žiletka', 'Balzám/Kolínská'] },
        { id: 'vous-timer', name: 'Jenom Timer', price: 200 },
      ] },
    ],
  },
  {
    id: 'pece', area: 'barber', title: 'Péče a doplňky', page: 'panska-kosmetika-praha-2',
    sections: [
      { items: [
        { id: 'pece-myti-od', name: 'Mytí hlavy', price: 250, from: true, includes: ['Klasické', 'S masáží', 'Styling'] },
        { id: 'pece-kosmetika', name: 'Pánská kosmetika / Mytí obličeje VIP', price: 850, includes: ['Mytí obličeje / masáž obličeje', 'Vyčištění pleti', 'Kosmetika s hydratací (Pára a maska)', 'Krém s hydratací'] },
        { id: 'pece-masaz', name: 'Masáž hlavy', price: 150 },
        { id: 'pece-myti', name: 'Mytí hlavy navíc', price: 100 },
      ] },
    ],
  },
];

/* ---------- helpers over the price list ---------- */
// Czech is the source; other languages translate the phrases through tx() (see i18n/prices.<lang>.mjs).
const group3 = (n, sep) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, sep);
const SEP = { cs: '\u00a0', en: ',', de: '.' };
const CUR = { cs: 'Kč', en: 'CZK', de: 'CZK' };
/** 1050 → “1 050” / “1,050” / “1.050” (no currency) */
export const num = (n) => group3(n, SEP[getLang()]);
export const kc = (n) => `${num(n)}\u00a0${CUR[getLang()]}`;
/** “990 / 790 Kč” – several amounts sharing one currency suffix */
export const kcList = (arr) => `${arr.map(num).join(' / ')}\u00a0${CUR[getLang()]}`;
export const formatPrice = (it) => {
  if (it.variants) return it.variants.map((v) => `${v.label} ${kc(v.price)}`).join(' · ');
  return `${it.from ? `${t('from')} ` : ''}${kc(it.price)}`;
};
const itemMin = (it) => (it.variants ? Math.min(...it.variants.map((v) => v.price)) : it.price);
// add-ons (e.g. standalone polish) never define the “od …” price of a service page
const isCore = (it) => !it.addon;

const localizeItem = (it) => (getLang() === 'cs' ? it : {
  ...it,
  name: tx(it.name),
  note: it.note ? tx(it.note) : it.note,
  includes: it.includes ? it.includes.map(tx) : it.includes,
  variants: it.variants ? it.variants.map((v) => ({ ...v, label: tx(v.label) })) : it.variants,
});
const localizeGroup = (g) => (getLang() === 'cs' ? g : {
  ...g,
  title: tx(g.title),
  subtitle: g.subtitle ? tx(g.subtitle) : g.subtitle,
  note: g.note ? tx(g.note) : g.note,
  sections: g.sections.map((s) => ({ ...s, label: s.label ? tx(s.label) : s.label, items: s.items.map(localizeItem) })),
});

/** All price groups in the current language. */
export const getPriceGroups = () => priceGroups.map(localizeGroup);
export const allItems = priceGroups.flatMap((g) => g.sections.flatMap((s) => s.items.map((it) => ({ ...it, group: g.id }))));
export const itemById = (id) => {
  const it = allItems.find((x) => x.id === id);
  if (!it) throw new Error(`Unknown price item: ${id}`);
  return localizeItem(it);
};
export const groupById = (id) => {
  const g = priceGroups.find((x) => x.id === id);
  if (!g) throw new Error(`Unknown price group: ${id}`);
  return localizeGroup(g);
};
export const groupMin = (ids) => Math.min(...ids.flatMap((id) => {
  const g = priceGroups.find((x) => x.id === id);
  return g.sections.flatMap((s) => s.items.filter(isCore).map(itemMin));
}));
export const priceRange = (() => {
  const mins = allItems.map(itemMin);
  const maxes = allItems.map((it) => (it.variants ? Math.max(...it.variants.map((v) => v.price)) : it.price));
  return { min: Math.min(...mins.filter((n) => n >= 50)), max: Math.max(...maxes) };
})();

// Pre-filled order message. Service pages set a service-specific text (setOrderMessage) while they render,
// so every WhatsApp / SMS button on that page (header, hero, footer, sticky bar) already names the service.
let orderMessage = null;
export const setOrderMessage = (msg) => { orderMessage = msg; };
export const waLink = (msg) => `https://wa.me/${site.phone.replace('+', '')}?text=${encodeURIComponent(msg)}`;
export const smsLink = (msg) => `sms:${site.phone}?&body=${encodeURIComponent(msg)}`;
const msg = () => orderMessage ?? t('orderMessage');
const address = `${site.street}, ${site.postalCode} ${site.city}`;
export const links = {
  call: `tel:${site.phone}`,
  get whatsapp() { return waLink(msg()); },
  get sms() { return smsLink(msg()); },
  directions: `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`,
  get mapEmbed() { return `https://www.google.com/maps?q=${encodeURIComponent(address)}&hl=${getLang()}&output=embed`; },
  mapPlace: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`ICONO STUDIO ${site.street}, ${site.city}`)}`,
};

/* ---------- navigation ---------- */
// Labels are UI strings (nav.cenik, nav.kontakt). Service links come from the service pages.
export const nav = [
  { href: '/cenik/', key: 'nav.cenik' },
  { href: '/kontakt/', key: 'nav.kontakt' },
];
