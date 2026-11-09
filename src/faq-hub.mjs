// /caste-dotazy/ – one page that answers the questions people actually ask about nails, pedicure, lashes and the barbershop
// (Google Search Console queries + the questions the service pages and articles already answer). Czech only, like the blog.
// Amounts come from the price list (price()), every answer links to the page that explains the topic in depth.
import { site } from './data.mjs';
import {
  breadcrumbs, breadcrumbSchema, faqSection, finalCta, layout, esc, btnBook, btnCall,
} from './layout.mjs';
import {
  NAME, MODIFIED, price, hours, dateCs,
} from './blog-kit.mjs';

const groups = () => [
  {
    id: 'objednani', title: 'Objednání a návštěva', h2: 'Objednání, adresa a otevírací doba',
    items: [
      { q: 'Jak se mohu objednat?', a: `Termín si můžete <a href="${site.booking.page}" target="_blank" rel="noopener" data-track="click_book">rezervovat online</a>, nebo nám zavolejte na <a href="tel:${site.phone}" data-track="click_call">${esc(site.phoneDisplay)}</a>. U každé služby na webu najdete odkaz rovnou na její rezervaci.` },
      { q: 'Jaká je otevírací doba?', a: `${hours()}. V neděli je zavřeno, případně podle rezervace. Napište nám a domluvíme se.` },
      { q: 'Kde najdu barbera a nail salon u I. P. Pavlova?', a: `ICONO STUDIO je na adrese ${site.street}, ${site.postalCode} Praha 2 – ${site.district}, u metra I. P. Pavlova a v okolí náměstí Míru. Více na stránce <a href="/kontakt/">Kontakt</a>.` },
      { q: 'Mohu přijít bez objednání?', a: 'Doporučujeme rezervaci předem. Pokud potřebujete termín ze dne na den, zavolejte nám a zeptejte se, jestli je volný čas.' },
      { q: 'Kde najdu kompletní ceník?', a: 'Všechny služby a ceny jsou na stránce <a href="/cenik/">Ceník</a>. Ceny jsou v korunách.' },
    ],
  },
  {
    id: 'nehty', title: 'Nehty a manikúra', h2: 'Nehty: manikúra, gelové a akrylové nehty',
    items: [
      { q: 'Kolik stojí gelové nehty v Praze 2?', a: `Nové gelové nebo akrylové nehty s barvou stojí ${price('mod-nove')}, doplnění ${price('mod-dopl')} a Gel X ${price('mod-gelx')}. Zdobení a odstranění se platí zvlášť. Rozpis v článku <a href="/blog/kolik-stoji-gelove-nehty-praha/">kolik stojí gelové nehty</a>.` },
      { q: 'Kolik stojí manikúra?', a: `Klasická manikúra ${price('man-classic')}, s Gellakem ${price('man-gellak')}, s CND Shellac ${price('man-cnd')}. Balíčky s hand spa ${price('man-pk-classic')}, ${price('man-pk-gellak')} a ${price('man-pk-cnd')}. Více v článku <a href="/blog/manikura-cena-praha-2/">manikúra: cena</a>.` },
      { q: 'Jak často se doplňují umělé nehty?', a: 'Obvykle po dvou až čtyřech týdnech, podle růstu nehtů. Včasné doplnění zachová tvar a snižuje riziko zlomení.' },
      { q: 'Jaký je rozdíl mezi gelem a akrylem?', a: 'Gel je pružnější a vytvrzuje se v lampě, akryl je tvrdší a tvrdne na vzduchu. Oba dají nehtu délku a tvar. Srovnání najdete v článku <a href="/blog/gel-nebo-akryl-gel-x/">gel nebo akryl</a>.' },
      { q: 'Co je Gel X?', a: `Prodloužení pomocí předtvarovaných měkkých gelových tipů, které působí lehce a přirozeně. Stojí ${price('mod-gelx')}.` },
      { q: 'Jaký je rozdíl mezi Shellac a Gellak?', a: 'Shellac je tenký, snadno se odmočí a vydrží přibližně od 10 dnů do 3 týdnů. Gellak je tvrdší, obvykle vydrží déle a často vyžaduje brusku. Více v článku <a href="/blog/shellac-vs-gellak/">Shellac vs. Gellak</a>.' },
      { q: 'Kolik stojí sundání gelových nehtů?', a: `Odstranění umělých nehtů ${price('ost-odstr-umele')}, gel laku Shellac ${price('ost-odstr-lak', 'Shellac')}, Gellaku ${price('ost-odstr-lak', 'Gellak')}. Podrobně v článku <a href="/blog/sundani-gelovych-nehtu/">sundání gelových nehtů</a>.` },
      { q: 'Mohu si nehty sundat doma?', a: 'Nedoporučujeme to. Nehty ani gel lak neodlupujte a nestrhávejte, poškodíte přirozený nehet.' },
    ],
  },
  {
    id: 'pedikura', title: 'Pedikúra', h2: 'Pedikúra a Footlogix',
    items: [
      { q: 'Kolik stojí pedikúra v Praze 2?', a: `Klasická pedikúra ${price('ped-classic')}, s CND Shellac nebo Gellakem ${price('ped-lakem')}. Medicinální pedikúra Footlogix od ${price('ped-med-classic')}. Více na stránce <a href="/pedikura-praha-2/">Pedikúra</a>.` },
      { q: 'Co je pedikúra Footlogix?', a: 'Pedikúra s profesionální kosmetikou Footlogix pro suchou a namáhanou pokožku, ztvrdlá místa a popraskané paty. Není to lékařské ošetření. Víc v článku <a href="/blog/pedikura-footlogix-vs-klasicka/">pedikúra Footlogix</a>.' },
      { q: 'Jak často chodit na pedikúru?', a: 'Obvykle jednou za čtyři až šest týdnů, podle růstu nehtů a zátěže nohou.' },
      { q: 'Mohu na pedikúru s cukrovkou nebo plísní nehtů?', a: 'Nejdřív se poraďte s lékařem a před návštěvou nás o zdravotním stavu informujte. Pedikúra ve studiu je kosmetická péče a lékařské ošetření nenahrazuje.' },
    ],
  },
  {
    id: 'rasy-spa', title: 'Řasy, obočí, Head Spa', h2: 'Řasy, obočí a Head Spa',
    items: [
      { q: 'Kolik stojí prodlužování řas?', a: `Klasické řasy 1:1 stojí ${price('ras-klasik', 'Nový')}, Volume 2D–5D ${price('ras-volume', 'Nový')}, Mega Volume ${price('ras-mega', 'Nový')}. Doplnění od ${price('ras-klasik', 'Doplnění')}. Více v článku <a href="/blog/prodluzovani-ras-klasika-volume/">prodlužování řas</a>.` },
      { q: 'Jak dlouho prodloužené řasy vydrží?', a: 'Doplňují se obvykle po dvou až čtyřech týdnech, protože umělé řasy vypadávají společně s přirozenými. Doba se liší člověk od člověka.' },
      { q: 'Čím se liší klasické a Volume řasy?', a: 'Klasické mají jednu umělou řasu na jednu přirozenou, Volume vějířek z více tenkých řas. Výsledek je hustší a výraznější.' },
      { q: 'Co je Head Spa a kolik stojí?', a: `Relaxační péče o pokožku hlavy o pěti krocích (bílý zvuk, akupunkturní body, exfoliace, asijské mytí s masáží, foukání s olejem). Stojí ${price('hs')}. Více v článku <a href="/blog/head-spa-co-to-je/">Head Spa: co to je</a>.` },
      { q: 'Kolik stojí úprava a barvení obočí?', a: `Úprava obočí stojí ${price('ob-uprava')}, barvení s úpravou ${price('ob-barveni')}. Péče o obličej s masáží ${price('kos-oblicej')}. Více na stránkách <a href="/oboci-praha-2/">Obočí</a> a <a href="/kosmetika-praha-2/">Kosmetika</a>.` },
    ],
  },
  {
    id: 'barber', title: 'Barber', h2: 'Barber: střih, vousy a péče',
    items: [
      { q: 'Kolik stojí pánský střih v Praze 2?', a: `Klasický Cut ${price('cut-klasicky')}, Premium Cut ${price('cut-premium')}, VIP Cut ${price('cut-vip')}, VIP All Inclusive ${price('cut-vip-all')}. Studentský cut do 18 let od ${price('cut-student')}, děti do 8 let ${price('cut-deti')}. Více v článku <a href="/blog/pansky-strih-praha-2-cena/">pánský střih Praha 2: ceny</a>.` },
      { q: 'Co je v ceně VIP Cutu?', a: 'Mytí hlavy, střih, úprava vousů, styling a balzám nebo kolínská. Masáž je až ve VIP All Inclusive.' },
      { q: 'Jak často chodit na střih?', a: 'Podle délky vlasů obvykle po třech až čtyřech týdnech. Kratší střihy s přechody je dobré osvěžovat o něco častěji.' },
      { q: 'Kolik stojí úprava vousů a jak často na ni chodit?', a: `Úprava vousů stojí ${price('vous-uprava')}, samostatný Timer ${price('vous-timer')}. Obvykle se chodí jednou za dva až tři týdny. Více v článku <a href="/blog/uprava-vousu-jak-casto/">úprava vousů</a>.` },
      { q: 'Je sleva pro studenty nebo stálé zákazníky?', a: 'Studentský cut do 18 let začíná na 540 Kč. Kdo chodí každé dva týdny, má na všechny cuty slevu 100 Kč. Podrobnosti upřesníme na místě.' },
      { q: 'Barbershop, nebo kadeřnictví?', a: 'Barbershop se zaměřuje na pánské střihy, přechody a vousy. Barvení vlasů v nabídce nemáme. Rozdíl vysvětluje článek <a href="/blog/barbershop-nebo-kadernictvi/">barbershop nebo kadeřnictví</a>.' },
    ],
  },
];

export function faqHub() {
  const trail = [{ name: 'Časté dotazy', href: '/caste-dotazy/' }];
  const gs = groups();
  const body = `
  <section class="page-hero">
    <div class="wrap">
      ${breadcrumbs(trail)}
      <p class="eyebrow" data-hero>FAQ · ${NAME}</p>
      <h1 data-hero>Časté dotazy: nehty, pedikúra, řasy a barber v Praze 2</h1>
      <p class="lead" data-hero>Rychlé odpovědi na to, na co se lidé ptají nejčastěji: ceny, doplnění nehtů, sundání gel laku, Footlogix, Head Spa nebo pánský střih. Ceny jsou z ceníku platného k ${dateCs(MODIFIED)}.</p>
      <div class="btn-row" data-hero>${btnBook()}${btnCall()}</div>
    </div>
  </section>
  <nav class="chips" aria-label="Rychlá navigace v častých dotazech"><div class="wrap chips-in">${gs.map((g) => `<a href="#${g.id}">${esc(g.title)}</a>`).join('')}</div></nav>
  ${gs.map((g, i) => faqSection(g.items, { tone: i % 2 ? 'white' : 'light', heading: g.h2, eyebrow: g.title, id: g.id })).join('\n')}
  ${finalCta()}`;
  return layout({
    title: `Časté dotazy: nehty, pedikúra a barber | ${NAME}`,
    description: 'Časté dotazy k nehtům, pedikúře, řasám, Head Spa a pánskému střihu v Praze 2: ceny, doplnění, sundání gel laku, objednání a otevírací doba. ICONO STUDIO.',
    path: '/caste-dotazy/', body, selfCanonical: true,
    schema: [(abs) => breadcrumbSchema(trail, abs), (abs) => ({
      '@context': 'https://schema.org', '@type': 'CollectionPage', name: 'Časté dotazy', url: abs('/caste-dotazy/'), inLanguage: 'cs',
      about: { '@id': abs('/#business') },
    })],
  });
}
