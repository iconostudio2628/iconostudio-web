// Blog (Czech only, linked from the footer only). Every article is built from the studio's own price list and
// service notes – amounts come from itemById() so they can never drift from the ceník – plus a few external
// sources that were opened and verified (listed under “Zdroje” on the page). Nothing is invented.
// Writing checklist: docs/blog-checklist.md (enforced where possible by `npm run check`).
import { site, itemById, kc } from './data.mjs';
import { t } from './i18n/index.mjs';
import { esc, breadcrumbs, breadcrumbSchema, faqSection, finalCta, layout, btnBook, btnCall } from './layout.mjs';

const price = (id, label) => {
  const it = itemById(id);
  if (label) return kc(it.variants.find((v) => v.label === label).price);
  return kc(it.price);
};
const hours = () => site.hours.map((h) => `${h.dayKey === 'weekdays' ? 'Po–Pá' : 'So'} ${h.display}`).join(', ');
const NAME = 'ICONO STUDIO';
const PUBLISHED = '2026-10-09';
const MODIFIED = '2026-10-09';
const dateCs = (iso) => new Date(`${iso}T12:00:00Z`).toLocaleDateString('cs-CZ', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
const table = (caption, head, rows) => `
<div class="cmp-wrap post-table" tabindex="0" role="region" aria-label="${esc(caption)}">
  <table class="cmp cmp--text">
    <caption class="visually-hidden">${esc(caption)}</caption>
    <thead><tr>${head.map((h, i) => `<th scope="col"${i === 0 ? ' class="cmp-corner"' : ''}>${h}</th>`).join('')}</tr></thead>
    <tbody>${rows.map((r) => `<tr><th scope="row">${r[0]}</th>${r.slice(1).map((c) => `<td>${c}</td>`).join('')}</tr>`).join('')}</tbody>
  </table>
</div>`;
// Real photographs supplied by the owner (data.mjs → photos.work / photos.studio); alt texts are UI strings.
const fig = (img, altKey, caption) => `
<figure class="post-figure">
  <img src="${img.src}" srcset="${img.srcset}" sizes="(min-width: 800px) 760px, 100vw" alt="${esc(t(altKey))}" width="${img.width}" height="${img.height}" loading="lazy" decoding="async">
  <figcaption>${caption}</figcaption>
</figure>`;
const where = () => `
<h2>Kde nás najdete a jak se objednat?</h2>
<p>ICONO STUDIO (barber a nail salon v jednom) je na Bělehradské 643/77 v Praze 2, u metra I. P. Pavlova a v okolí náměstí Míru. Otevřeno máme ${hours()}. Termín si rezervujte online, nebo zavolejte na ${esc(site.phoneDisplay)}.</p>
${fig(site.photos.studio.find((p) => p.key === 'studioB'), 'photos.studioB', 'Vchod do ICONO STUDIO na Bělehradské.')}`;

/* ================================================================== články */
export const posts = [
  /* ---------------------------------------------------------------- 1 */
  {
    slug: 'shellac-vs-gellak',
    keyword: ['shellac', 'gellak'],
    title: 'Shellac vs. Gellak: rozdíl, výdrž a ceny | ICONO STUDIO',
    description: 'Shellac vs. Gellak: výdrž, odstranění a ceny. Srovnání z nail salonu v Praze 2 u I. P. Pavlova a tabulka, co zvolit podle toho, jak žijete.',
    h1: 'Shellac vs. Gellak: který gel lak zvolit, když chcete nehty bez starostí',
    crumb: 'Shellac vs. Gellak',
    teaser: 'Dva gel laky, dvě povahy. Srovnání výdrže, odstranění a cen a rozhodovací tabulka podle vašeho každodenního života.',
    about: 'Gel lak na nehty (CND Shellac a Gellak)',
    tldr: () => `<strong>CND Shellac</strong> je tenký, lehký a snadno se odmočí; vydrží přibližně od 10 dnů do 3 týdnů. <strong>Gellak</strong> je tvrdší, lépe přilne a obvykle vydrží déle, k odstranění ale často potřebuje elektrickou brusku. V ICONO STUDIO stojí manikúra s Gellakem ${price('man-gellak')}, s CND Shellac ${price('man-cnd')}.`,
    related: ['/manikura-praha-2/', '/pedikura-praha-2/', '/gelove-akrylove-nehty-praha-2/', '/cenik/'],
    sources: [
      { label: 'Healthline: Shellac vs. gel (autorka Shanika Wigley, lékařská revize Cynthia Cobb, 27. května 2025)', url: 'https://www.healthline.com/health/shellac-vs-gel' },
    ],
    body: () => `
<p>Kdo hledá nail salon v Praze, narazí na dvě podobně znějící položky: <strong>Shellac a Gellak</strong>. Oba jsou gel laky, které se nanášejí na podkladovou bázi a vytvrzují v lampě, takže jsou hned suché a nemažou se. Rozdíl nepoznáte na pohled, ale za tři týdny a při odstranění.</p>
<p>Článek vychází z podkladů, které používáme ve studiu na Bělehradské 643/77 u I. P. Pavlova, z našeho aktuálního ceníku a z jednoho ověřeného externího zdroje.</p>

<h2>Jaký je rozdíl mezi Shellac a Gellak?</h2>
<p>Shellac je tenký a snadno se odstraňuje, Gellak je tvrdší a drží déle. Výdrž se vždy odvíjí od kvality přirozeného nehtu a od vašich návyků, proto jde o rozmezí, ne o slib.</p>
${table('Srovnání CND Shellac a Gellak', ['Vlastnost', 'CND Shellac', 'Gellak'], [
    ['Charakter', 'Tenký, lehký, působí přirozeně', 'Tvrdší, vyšší přilnavost'],
    ['Výdrž (podle ICONO STUDIO)', 'Přibližně od 10 dnů do 3 týdnů', 'Obvykle déle než Shellac'],
    ['Odstranění', 'Odmočením, bez brusky', 'Často elektrickou bruskou, samotné odmočení nemusí stačit'],
    ['Pilování přirozeného nehtu při aplikaci', 'Výrazné není nutné', 'Odstranění bývá náročnější, viz níže'],
    ['Manikúra s lakem', price('man-cnd'), price('man-gellak')],
    ['Balíček s hand spa', price('man-pk-cnd'), price('man-pk-gellak')],
    ['Samotné lakování (např. na pedikúře)', price('ped-lak', 'Shellac'), price('ped-lak', 'Gellak')],
    ['Odstranění ve studiu', price('ost-odstr-lak', 'Shellac'), price('ost-odstr-lak', 'Gellak')],
  ])}
<p>Čísla z oboru jsou podobná. Podle <a href="https://www.healthline.com/health/shellac-vs-gel" rel="noopener" target="_blank">Healthline</a> vydrží gel typicky 2 až 3 týdny a Shellac zhruba 10 až 14 dní. Odmočení Shellacu zabere asi 10 až 15 minut, u gelu 15 až 30 minut a často i více pilování. Healthline ale srovnává Shellac s gelem obecně, zatímco Gellak je gelový lak, takže čísla berte jako orientační.</p>

<h2>Který gel lak zvolit podle vašeho života?</h2>
<p>Vyberte podle toho, co děláte rukama, ne podle toho, co zní lépe. Rozhodovací pomůcka:</p>
<ul class="post-list">
  <li><strong>Chcete nehty, které působí přirozeně, a snadné odstranění?</strong> Zvolte CND Shellac. Je tenký a lehký, při aplikaci se přirozený nehet výrazně nepiluje a sundá se odmočením.</li>
  <li><strong>Chcete, aby barva držela co nejdéle?</strong> Zvolte Gellak. Je tvrdší a má vyšší přilnavost. Počítejte s tím, že k odstranění je často potřeba elektrická bruska.</li>
  <li><strong>Často jste v kontaktu s vodou, čisticími prostředky, nebo pracujete rukama?</strong> Shellac se u takových klientek může začít odlupovat dříve. Tvrdší Gellak s vyšší přilnavostí obvykle vydrží déle.</li>
  <li><strong>Nechcete na nehty žádnou barvu, jen zdravý vzhled?</strong> Zvolte klasickou manikúru za ${price('man-classic')}, případně P.Shine za ${price('zd-pshine')}. P.Shine je japonská metoda péče, která se obejde bez barevného laku a míří na výživu, posílení a přirozený lesk.</li>
</ul>

<h2>Jak se gel lak odstraňuje?</h2>
<p>Odstranění je místo, kde se Shellac a Gellak liší nejvíc: Shellac se odmočí, Gellak často potřebuje brusku. Ve studiu stojí odstranění Gellaku ${price('ost-odstr-lak', 'Gellak')} a Shellacu ${price('ost-odstr-lak', 'Shellac')}.</p>
<p>Jedno pravidlo platí pro oba: <strong>gel lak neodlupujte</strong>. Odlupování nehet poškozuje. Pokud se lak začne zvedat, přijďte si ho nechat odstranit.</p>

<h2>Jak návštěva probíhá?</h2>
<ol class="post-list post-steps">
  <li><strong>Domluva.</strong> Řeknete, jakou variantu chcete, jaký tvar nehtů máte rádi a případně barvu. Pokud si nejste jistí, poradíme.</li>
  <li><strong>Úprava nehtů a kůžičky.</strong> Nehty se zkrátí a zformují a upraví se kůžička kolem nich.</li>
  <li><strong>Lakování a vytvrzení.</strong> Barva se nanáší ve vrstvách na podkladovou bázi a vytvrzuje v lampě. Klasickou manikúru můžete mít i bez barvy.</li>
  <li><strong>Hotovo.</strong> Nehty jsou po vytvrzení hned suché, takže z křesla odcházíte bez čekání.</li>
</ol>

<h2>A co když chcete delší nehty?</h2>
<p>Gel lak nehet obarví, ale nepřidá mu délku. Na prodloužení nebo zpevnění je modelace gelem, akrylem nebo Gel X. <strong>Gel</strong> je pružný a působí lehce a přirozeně. <strong>Akryl</strong> je tvrdší a hodí se i pro klientky, které často pracují rukama. <strong>Gel X</strong> prodlužuje nehet předtvarovanými měkkými gelovými tipy.</p>
<p>Gel X stojí ${price('mod-gelx')}, doplnění gelových nebo akrylových nehtů s barvou ${price('mod-dopl')}. Srovnání materiálů najdete na stránce <a href="/gelove-akrylove-nehty-praha-2/">gelové a akrylové nehty</a>.</p>

<h2>Kolik stojí Shellac a Gellak v Praze 2?</h2>
<p>Ceny platné k ${dateCs(MODIFIED)}:</p>
<ul class="post-list">
  <li>Klasická manikúra bez barvy: ${price('man-classic')}</li>
  <li>Manikúra s Gellakem: ${price('man-gellak')}, v balíčku s hand spa ${price('man-pk-gellak')}</li>
  <li>Manikúra s CND Shellac: ${price('man-cnd')}, v balíčku s hand spa ${price('man-pk-cnd')}</li>
  <li>Pedikúra s Gellakem: ${price('ped-gellak')}, s CND Shellac: ${price('ped-cnd')}</li>
</ul>
<p>Kompletní nabídku najdete v <a href="/cenik/">ceníku</a>. Na pedikúru se hodí i <a href="/blog/pedikura-footlogix-vs-klasicka/">srovnání klasické a Footlogix pedikúry</a>.</p>
${where()}`,
    faq: () => [
      { q: 'Jak dlouho vydrží CND Shellac a Gellak?', a: 'CND Shellac vydrží přibližně od 10 dnů do 3 týdnů, Gellak obvykle déle. Skutečná výdrž závisí na kvalitě přirozených nehtů a na tom, jak často jsou ruce ve vodě nebo v kontaktu s čisticími prostředky.' },
      { q: 'Který gel lak je šetrnější k nehtu?', a: 'Shellac se při aplikaci výrazně nepiluje a odstraňuje se odmočením. Gellak je tvrdší a odstranění často vyžaduje elektrickou brusku.' },
      { q: 'Můžu si gel lak sundat doma?', a: 'Nedoporučujeme to. Gel lak neodlupujte ani nestrhávejte, protože tím poškodíte nehet. Nechte si ho odstranit ve studiu.' },
      { q: 'Co když mi při vytvrzování v lampě pálí ruka?', a: 'Mírný pocit tepla je běžný a intenzita se může lišit. Stačí ruku na několik sekund z lampy vytáhnout a poté ji vložit zpět.' },
    ],
  },

  /* ---------------------------------------------------------------- 2 */
  {
    slug: 'pansky-strih-praha-2-cena',
    keyword: ['pánský střih praha 2'],
    title: 'Pánský střih Praha 2: ceny a obsah cutů | ICONO STUDIO',
    description: 'Pánský střih Praha 2: co přesně je v ceně Klasického, Premium a VIP cutu. Tabulka obsahu a cen z barbershopu u I. P. Pavlova. Rezervace online.',
    h1: 'Pánský střih Praha 2: co je v ceně Klasického, Premium a VIP cutu',
    crumb: 'Pánský střih Praha 2: ceny',
    teaser: 'Rozpis všech barber cutů v tabulce: co je v ceně, v čem se liší a který vybrat pro první návštěvu, pravidelný střih nebo vousy.',
    about: 'Pánský střih v barbershopu',
    tldr: () => `U barbera v ICONO STUDIO se střihy liší tím, co je navíc: <strong>Klasický Cut</strong> (${price('cut-klasicky')}) je mytí hlavy, střih, styling a balzám nebo kolínská, <strong>Premium</strong> (${price('cut-premium')}) přidává masáž, <strong>VIP Cut</strong> (${price('cut-vip')}) přidává vousy a <strong>VIP All Inclusive</strong> (${price('cut-vip-all')}) obsahuje vousy i masáž.`,
    related: ['/panske-strihy-praha-2/', '/uprava-vousu-praha-2/', '/panska-kosmetika-praha-2/', '/barbershop-praha-2/', '/cenik/'],
    sources: [],
    body: () => `
<p>Pánský střih v Praze 2 se v ceníku skrývá za názvy Klasický, Premium a VIP. Smysl dávají až ve chvíli, kdy víte, co je v kterém. Tady je rozpis cutů v našem barbershopu na Bělehradské 643/77, kousek od metra I. P. Pavlova.</p>
<p>Ceny a obsah jsou z aktuálního ceníku platného k ${dateCs(MODIFIED)}.</p>

<h2>Co obsahuje který pánský střih?</h2>
<p>Každý vyšší cut přidává přesně jednu věc: Premium je Klasický s masáží, VIP je Klasický s vousy a VIP All Inclusive je obojí dohromady.</p>
${table('Obsah pánských cutů v ICONO STUDIO', ['Cut', 'Cena', 'Mytí hlavy', 'Střih', 'Masáž', 'Vousy', 'Styling', 'Balzám'], [
    ['Studentský cut do 18 let', `od ${price('cut-student')}`, '–', 'ano', '–', '–', 'ano', 'ano'],
    ['Klasický Cut', price('cut-klasicky'), 'ano', 'ano', '–', '–', 'ano', 'ano'],
    ['Premium Cut', price('cut-premium'), 'ano', 'ano', 'ano', '–', 'ano', 'ano'],
    ['VIP Cut', price('cut-vip'), 'ano', 'ano', '–', 'ano', 'ano', 'ano'],
    ['VIP All Inclusive', price('cut-vip-all'), 'ano', 'ano', 'ano', 'ano', 'ano', 'ano'],
  ])}
<p>„Balzám“ znamená balzám nebo kolínskou. Děti do 8 let platí ${price('cut-deti')}.</p>
${fig(site.photos.work[0], 'photos.workA', 'Ukázka práce z barber křesla v ICONO STUDIO.')}

<h2>Který cut zvolit?</h2>
<p>Zvolte podle toho, kolik času a péče chcete. Pět situací, které se opakují nejčastěji:</p>
<ul class="post-list">
  <li><strong>První návštěva, chcete jen dobrý střih:</strong> Klasický Cut. Mytí hlavy, střih, styling a balzám nebo kolínská jsou v ceně.</li>
  <li><strong>Chcete si dát chvíli klidu:</strong> Premium Cut s masáží.</li>
  <li><strong>Nosíte vousy a chcete vše vyřešit v jedné návštěvě:</strong> VIP Cut. Samostatná úprava vousů je v ceníku za ${price('vous-uprava')}, VIP Cut obsahuje střih i vousy.</li>
  <li><strong>Chcete všechno:</strong> VIP All Inclusive.</li>
  <li><strong>Jen vousy, bez střihu:</strong> Úprava vousů za ${price('vous-uprava')}, nebo „Jenom Timer“ za ${price('vous-timer')}.</li>
</ul>

<h2>Jak návštěva barbera probíhá?</h2>
<ol class="post-list post-steps">
  <li><strong>Konzultace.</strong> Řeknete, co chcete, nebo ukážete fotku střihu. Barber poradí, co se k vašim vlasům a tvaru hlavy hodí.</li>
  <li><strong>Mytí hlavy.</strong> U cutů, které ho obsahují: Klasický, Premium, VIP a VIP All Inclusive.</li>
  <li><strong>Střih.</strong> Střih na míru nůžkami a strojkem podle dohodnutého tvaru.</li>
  <li><strong>Vousy a masáž.</strong> Vousy u VIP Cutu a VIP All Inclusive, masáž u Premium a VIP All Inclusive.</li>
  <li><strong>Styling a finish.</strong> Styling a balzám nebo kolínská.</li>
</ol>

<h2>Jak často chodit na střih?</h2>
<p>Podle délky vlasů se obvykle objednává po třech až čtyřech týdnech. Kratší střihy s přechody je dobré osvěžovat o něco častěji. Pokud máte vousy, zvolte střih s jejich úpravou, VIP Cut obojí spojuje.</p>

<h2>Kolik stojí střih pro studenty, děti a stálé zákazníky?</h2>
<p>Studentský cut do 18 let začíná na ${price('cut-student')} a obsahuje střih, styling a balzám nebo kolínskou. Děti do 8 let platí ${price('cut-deti')}. Kdo chodí pravidelně každé 2 týdny, má na všechny cuty slevu 100 Kč.</p>
<p>Kompletní barber nabídku najdete na stránce <a href="/barbershop-praha-2/">barber Praha 2</a> a v <a href="/cenik/">ceníku</a>.</p>
${where()}`,
    faq: () => [
      { q: 'Kolik stojí pánský střih v Praze 2?', a: `V ICONO STUDIO stojí Klasický Cut ${price('cut-klasicky')}, Premium Cut ${price('cut-premium')}, VIP Cut ${price('cut-vip')} a VIP All Inclusive ${price('cut-vip-all')}. Studentský cut do 18 let začíná na ${price('cut-student')}, děti do 8 let ${price('cut-deti')}.` },
      { q: 'Je ve střihu zahrnuto mytí hlavy a styling?', a: 'Ano. U Klasického, Premium, VIP i VIP All Inclusive cutu je v ceně mytí hlavy, střih, styling a balzám nebo kolínská. Studentský cut obsahuje střih, styling a balzám nebo kolínskou.' },
      { q: 'Co je v ceně VIP Cutu?', a: 'Mytí hlavy, střih, úprava vousů, styling a balzám nebo kolínská. Masáž je až ve VIP All Inclusive.' },
      { q: 'Kde najdu barbera u I. P. Pavlova?', a: 'ICONO STUDIO je na Bělehradské 643/77 v Praze 2, u metra I. P. Pavlova. Objednat se můžete online, nebo telefonicky.' },
    ],
  },

  /* ---------------------------------------------------------------- 3 */
  {
    slug: 'pedikura-footlogix-vs-klasicka',
    keyword: ['pedikúra footlogix'],
    title: 'Pedikúra Footlogix vs. klasická: ceny | ICONO STUDIO',
    description: 'Pedikúra Footlogix vs. klasická pedikúra: rozdíl, ceny a pro koho. Nail salon Praha 2 u I. P. Pavlova. Kdy je lepší nejdřív zajít k lékaři.',
    h1: 'Pedikúra Footlogix, nebo klasická? Co řeší a kdy se vyplatí upgrade',
    crumb: 'Pedikúra Footlogix vs. klasická',
    teaser: 'Co je Footlogix a kdy stačí klasická pedikúra. Srovnání s cenami a upozorněním, kdy jít nejdřív k lékaři.',
    about: 'Pedikúra Footlogix a klasická pedikúra',
    tldr: () => `<strong>Klasická pedikúra</strong> (${price('ped-classic')}) je úprava nehtů a kůžiček, odstranění ztvrdlé kůže a ošetření pokožky. <strong>Medicínální pedikúra Footlogix</strong> (od ${price('ped-med-classic')}) používá profesionální kosmetiku Footlogix pro suchou a namáhanou pokožku, ztvrdlá místa a popraskané paty. Není to lékařské ošetření.`,
    related: ['/pedikura-praha-2/', '/manikura-praha-2/', '/nail-studio-praha-2/', '/cenik/'],
    sources: [
      { label: 'Footlogix: oficiální web značky (Toronto, Kanada)', url: 'https://www.footlogix.com/' },
    ],
    body: () => `
<p>V ceníku nail salonu vedle sebe stojí „Pedikúra Classic“ a „Medicínální pedikúra Footlogix“. Na první pohled jde o stejnou službu s jinou cenou. Rozdíl je v tom, na co se zaměřuje a jaké produkty se používají.</p>
<p>Tady je vysvětlení pro zákazníky našeho studia na Bělehradské 643/77 v Praze 2, kousek od I. P. Pavlova.</p>

<h2>Co je pedikúra Footlogix?</h2>
<p>Footlogix je profesionální řada přípravků pro péči o nohy od kanadské značky se sídlem v Torontu. Podle <a href="https://www.footlogix.com/" rel="noopener" target="_blank">jejího webu</a> jde o „první a jedinou“ řadu kategorie Pediceutical. V nabídce má například přípravky na popraskané paty, drsnou pokožku a ztvrdlá místa.</p>
<p>Klasické ošetření pat se často opírá jen o pilník, brusku nebo dlouhé namáčení. Footlogix míří na cílenou péči o pokožku chodidel. <strong>Nejde o lékařské ošetření</strong>: je to kosmetická péče a lékaře nenahrazuje.</p>

<h2>Jaký je rozdíl mezi klasickou a Footlogix pedikúrou?</h2>
<p>Klasická pedikúra je pravidelná údržba zdravých nohou, Footlogix je péče pro suchou a namáhanou pokožku. V ceníku se to promítá takto:</p>
${table('Srovnání klasické pedikúry a pedikúry Footlogix', ['', 'Klasická pedikúra', 'Medicínální pedikúra Footlogix'], [
    ['Co řeší', 'Úprava nehtů a kůžiček, odstranění ztvrdlé kůže, ošetření pokožky', 'Péče o suchou a namáhanou pokožku, ztvrdlá místa a popraskané paty'],
    ['Pro koho', 'Pravidelná údržba, upravené nohy', 'Kdo řeší suché paty nebo namáhané nohy'],
    ['Bez laku', price('ped-classic'), price('ped-med-classic')],
    ['S Gellakem', price('ped-gellak'), price('ped-med-gellak')],
    ['S CND Shellac', price('ped-cnd'), price('ped-med-cnd')],
    ['Balíček s foot spa (bez laku)', price('ped-pk-classic'), '–'],
    ['Balíček s lakováním Gellak', price('ped-pk-gellak'), price('ped-pk-fl-gellak')],
    ['Balíček s lakováním CND Shellac', price('ped-pk-cnd'), price('ped-pk-fl-cnd')],
  ])}

<h2>Kterou pedikúru zvolit?</h2>
<p>Zvolte podle stavu nohou a toho, jestli chcete barvu:</p>
<ul class="post-list">
  <li><strong>Chcete jen upravené nohy bez barvy:</strong> klasická pedikúra za ${price('ped-classic')}.</li>
  <li><strong>Chcete upravené nohy a barvu, která vydrží:</strong> pedikúra s Gellakem nebo CND Shellac, případně samotné lakování, pokud nehty nepotřebují jinou úpravu. Rozdíl mezi nimi vysvětluje článek <a href="/blog/shellac-vs-gellak/">Shellac vs. Gellak</a>.</li>
  <li><strong>Trápí vás suché paty nebo ztvrdlá kůže:</strong> medicínální pedikúra Footlogix.</li>
  <li><strong>Chcete si u toho odpočinout:</strong> zvolte některý z balíčků s foot spa.</li>
</ul>

<h2>Kdy nejdřív zajít k lékaři?</h2>
<p>Pokud máte cukrovku, plísňové onemocnění nehtů, zánět, rány nebo jiné zdravotní potíže na nohou, poraďte se nejdřív s lékařem. Pedikúra ve studiu je kosmetická péče a lékařské ošetření nenahrazuje. Případné potíže nám před návštěvou napište.</p>

<h2>Jak pedikúra probíhá?</h2>
<ol class="post-list post-steps">
  <li><strong>Domluva a příprava.</strong> Zvolíme variantu a probereme případné potíže, například suché paty nebo zarůstající nehty. U balíčků je součástí návštěvy foot spa.</li>
  <li><strong>Úprava nehtů a kůžiček.</strong> Nehty se zkrátí, zformují a upraví se kůžička kolem nich.</li>
  <li><strong>Péče o pokožku chodidel.</strong> Odstraní se ztvrdlá kůže a pokožka se ošetří. U medicínální pedikúry přidáváme produkty Footlogix.</li>
  <li><strong>Lakování (volitelně).</strong> Nehty nalakujeme Gellakem nebo CND Shellac a vytvrdíme v lampě. Samotné lakování stojí ${price('ped-lak', 'Shellac')} (Shellac) nebo ${price('ped-lak', 'Gellak')} (Gellak).</li>
  <li><strong>Finální péče.</strong> Nohy se na závěr ošetří, aby byly hladké a upravené.</li>
</ol>

<h2>Jak pečovat o nohy mezi návštěvami?</h2>
<ul class="post-list">
  <li>Každý den na paty a chodidla používejte hydratační krém.</li>
  <li>Vybírejte obuv s dostatečným prostorem pro prsty. Tlak je častou příčinou ztvrdlé kůže i zarůstání nehtů.</li>
  <li>V bazénech, saunách a veřejných sprchách nechoďte naboso.</li>
  <li>Na pravidelnou pedikúru se obvykle objednávejte po čtyřech až šesti týdnech.</li>
  <li>Gel lak neodlupujte. Nechte si ho odstranit (Shellac ${price('ost-odstr-lak', 'Shellac')}, Gellak ${price('ost-odstr-lak', 'Gellak')}).</li>
</ul>
${where()}`,
    faq: () => [
      { q: 'Kolik stojí pedikúra v Praze 2?', a: `V ICONO STUDIO stojí klasická pedikúra ${price('ped-classic')}, pedikúra s Gellakem ${price('ped-gellak')} a s CND Shellac ${price('ped-cnd')}. Medicínální pedikúra Footlogix začíná na ${price('ped-med-classic')}.` },
      { q: 'Je Footlogix lékařské ošetření?', a: 'Ne. Je to profesionální kosmetická péče o chodidla a nenahrazuje lékařské ošetření.' },
      { q: 'Jak často chodit na pedikúru?', a: 'Obvykle jednou za čtyři až šest týdnů, podle růstu nehtů a toho, jak nohy zatěžujete.' },
      { q: 'Mohu na pedikúru s cukrovkou nebo plísní nehtů?', a: 'Nejdřív se poraďte s lékařem a před návštěvou nás o zdravotním stavu informujte. Pedikúra ve studiu je kosmetická péče a lékařské ošetření nenahrazuje.' },
    ],
  },
];

/* ============================================================ renderers */
const postUrl = (p) => `/blog/${p.slug}/`;
const authorName = `Tým ${NAME}`;

const postSchema = (p) => (abs) => ({
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  '@id': `${abs(postUrl(p))}#article`,
  headline: p.h1,
  description: p.description,
  url: abs(postUrl(p)),
  mainEntityOfPage: { '@type': 'WebPage', '@id': abs(postUrl(p)) },
  datePublished: PUBLISHED,
  dateModified: MODIFIED,
  inLanguage: 'cs',
  keywords: p.keyword.join(', '),
  author: { '@type': 'Organization', name: authorName, '@id': abs('/#business') },
  publisher: { '@id': abs('/#business') },
  image: abs('/images/og-image.png'),
  about: { '@type': 'Thing', name: p.about },
  ...(p.sources.length ? { citation: p.sources.map((s) => ({ '@type': 'CreativeWork', name: s.label, url: s.url })) } : {}),
  isPartOf: { '@type': 'Blog', '@id': abs('/blog/#blog'), name: `Blog ${NAME}`, url: abs('/blog/') },
});

const SERVICE_LABELS = {
  '/manikura-praha-2/': 'Manikúra', '/pedikura-praha-2/': 'Pedikúra', '/gelove-akrylove-nehty-praha-2/': 'Gelové a akrylové nehty',
  '/panske-strihy-praha-2/': 'Pánský střih', '/uprava-vousu-praha-2/': 'Úprava vousů', '/panska-kosmetika-praha-2/': 'Pánská kosmetika',
  '/cenik/': 'Ceník', '/nail-studio-praha-2/': 'Nail salon Praha 2', '/barbershop-praha-2/': 'Barber Praha 2',
};

const authorBox = () => `
<aside class="post-author" aria-label="O autorovi">
  <p class="eyebrow">O autorovi</p>
  <p><strong>${authorName}.</strong> ${NAME} je barber a nail salon na Bělehradské 643/77 v Praze 2 (IČO ${site.ico}). Články píšeme z vlastního ceníku a metodických podkladů studia. Ceny a popisy služeb jsou aktuální k datu aktualizace u nadpisu.</p>
  <p><a class="text-link" href="/kontakt/">Kontakt a otevírací doba</a></p>
</aside>`;

export function blogPost(slug) {
  const p = posts.find((x) => x.slug === slug);
  const trail = [{ name: 'Blog', href: '/blog/' }, { name: p.crumb, href: postUrl(p) }];
  const others = posts.filter((x) => x !== p);
  const body = `
  <section class="page-hero page-hero--post">
    <div class="wrap">
      ${breadcrumbs(trail)}
      <p class="eyebrow" data-hero>Blog · ${NAME}</p>
      <h1 data-hero>${esc(p.h1)}</h1>
      <p class="post-meta" data-hero>${authorName} · <time datetime="${PUBLISHED}">${dateCs(PUBLISHED)}</time> · aktualizováno <time datetime="${MODIFIED}">${dateCs(MODIFIED)}</time></p>
    </div>
  </section>

  <article class="section section--light post">
    <div class="wrap post-wrap">
      <aside class="post-tldr" aria-label="Stručně"><p class="eyebrow">Stručně</p><p>${p.tldr()}</p></aside>
      <div class="post-body">${p.body()}</div>
      <div class="btn-row post-cta">${btnBook(undefined, '', 'post')}${btnCall(undefined, '', 'post')}</div>
      ${p.sources.length ? `<div class="post-sources"><p class="eyebrow">Zdroje</p><ul>${p.sources.map((s) => `<li><a href="${s.url}" rel="noopener" target="_blank">${esc(s.label)}</a></li>`).join('')}</ul></div>` : ''}
      <p class="post-source">Ceny a popisy služeb vycházejí z aktuálního ceníku a interních podkladů ${NAME}. Článek je informativní a nenahrazuje lékařskou radu.</p>
      ${authorBox()}
    </div>
  </article>

  ${faqSection(p.faq(), { tone: 'white' })}

  <section class="section section--light">
    <div class="wrap">
      <p class="eyebrow">Další články</p>
      <div class="post-cards">${others.map((o) => `<a class="post-card" href="${postUrl(o)}"><strong>${esc(o.crumb)}</strong><span>${esc(o.teaser)}</span></a>`).join('')}</div>
      <p class="eyebrow post-related-label">Související služby</p>
      <div class="link-cloud">${p.related.map((href) => `<a href="${href}">${esc(SERVICE_LABELS[href] || href)}</a>`).join('')}</div>
    </div>
  </section>
  ${finalCta()}`;
  return layout({
    title: p.title, description: p.description, path: postUrl(p), body,
    selfCanonical: true, ogType: 'article',
    schema: [(abs) => breadcrumbSchema(trail, abs), postSchema(p)],
  });
}

export function blogIndex() {
  const trail = [{ name: 'Blog', href: '/blog/' }];
  const body = `
  <section class="page-hero page-hero--post">
    <div class="wrap">
      ${breadcrumbs(trail)}
      <p class="eyebrow" data-hero>Blog · ${NAME}</p>
      <h1 data-hero>Blog o nehtech a barber péči v Praze 2</h1>
      <p class="lead" data-hero>Praktické průvodce z nail salonu a barbershopu na Bělehradské 643/77 u I. P. Pavlova. Vždy s konkrétními cenami a vysvětlením, co v ceně je.</p>
    </div>
  </section>
  <section class="section section--light">
    <div class="wrap">
      <div class="post-cards post-cards--lg">${posts.map((o) => `<a class="post-card" href="${postUrl(o)}"><strong>${esc(o.h1)}</strong><span>${esc(o.teaser)}</span><small>${dateCs(PUBLISHED)}</small></a>`).join('')}</div>
    </div>
  </section>
  ${finalCta()}`;
  return layout({
    title: `Blog: nehty a barber péče v Praze 2 | ${NAME}`,
    description: 'Průvodce nehty, pedikúrou a pánským střihem z nail salonu a barbershopu u I. P. Pavlova v Praze 2: srovnání služeb, ceny a co je v ceně.',
    path: '/blog/', body, selfCanonical: true,
    schema: [(abs) => breadcrumbSchema(trail, abs), (abs) => ({
      '@context': 'https://schema.org', '@type': 'Blog', '@id': abs('/blog/#blog'), name: `Blog ${NAME}`, url: abs('/blog/'), inLanguage: 'cs',
      publisher: { '@id': abs('/#business') },
      blogPost: posts.map((x) => ({ '@type': 'BlogPosting', headline: x.h1, url: abs(postUrl(x)), datePublished: PUBLISHED })),
    })],
  });
}
