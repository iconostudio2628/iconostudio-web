// Blog (Czech only, linked from the footer only). Every article is built from the studio's own price list and
// service notes – amounts come from itemById() so they can never drift from the ceník – plus a few external
// sources that were opened and verified (listed under “Zdroje” on the page). Nothing is invented.
// Writing checklist: docs/blog-checklist.md (enforced where possible by `npm run check`).
import { site } from './data.mjs';
import { breadcrumbs, breadcrumbSchema, faqSection, finalCta, layout, btnBook, btnCall, esc } from './layout.mjs';
import {
  NAME, PUBLISHED, MODIFIED, price, hours, dateCs, table, fig, figNail, where,
} from './blog-kit.mjs';
import { posts2 } from './blog-posts-2.mjs';

/* ================================================================== články */
const postsBase = [
  /* ---------------------------------------------------------------- 1 */
  {
    slug: 'shellac-vs-gellak',
    category: 'nehty',
    published: PUBLISHED,
    services: ['manikura-praha-2', 'gelove-akrylove-nehty-praha-2'],
    see: ['manikura-cena-praha-2', 'sundani-gelovych-nehtu', 'gel-nebo-akryl-gel-x'],
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
<p>Jedno pravidlo platí pro oba: <strong>gel lak neodlupujte</strong>. Odlupování nehet poškozuje. Pokud se lak začne zvedat, přijďte si ho nechat odstranit. Postup a ceny odstranění umělých nehtů shrnuje článek <a href="/blog/sundani-gelovych-nehtu/">sundání gelových nehtů</a>.</p>

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
  <li>Pedikúra s CND Shellac nebo Gellakem: ${price('ped-lakem')}</li>
</ul>
<p>Kompletní nabídku najdete v <a href="/cenik/">ceníku</a>, přehled všech variant manikúry v článku <a href="/blog/manikura-cena-praha-2/">manikúra: cena</a>. Na pedikúru se hodí i <a href="/blog/pedikura-footlogix-vs-klasicka/">srovnání klasické a Footlogix pedikúry</a>.</p>
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
    category: 'barber',
    published: PUBLISHED,
    services: ['panske-strihy-praha-2', 'uprava-vousu-praha-2'],
    see: ['barbershop-nebo-kadernictvi', 'uprava-vousu-jak-casto', 'head-spa-co-to-je'],
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
<p>Kompletní barber nabídku najdete na stránce <a href="/barbershop-praha-2/">barber Praha 2</a> a v <a href="/cenik/">ceníku</a>. Rozdíl oproti kadeřnictví vysvětluje článek <a href="/blog/barbershop-nebo-kadernictvi/">barbershop nebo kadeřnictví</a>.</p>
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
    category: 'pece',
    published: PUBLISHED,
    services: ['pedikura-praha-2'],
    see: ['shellac-vs-gellak', 'manikura-cena-praha-2', 'head-spa-co-to-je'],
    keyword: ['pedikúra footlogix'],
    title: 'Pedikúra Footlogix: co to je a ceny | ICONO STUDIO',
    description: 'Pedikúra Footlogix: co to je, čím se liší od klasické pedikúry, pro koho je a kolik stojí. Nail salon v Praze 2 u I. P. Pavlova. Rezervace online.',
    h1: 'Pedikúra Footlogix: co to je a kdy se vyplatí oproti klasické pedikúře',
    crumb: 'Pedikúra Footlogix vs. klasická',
    teaser: 'Co je Footlogix a kdy stačí klasická pedikúra. Srovnání s cenami a upozorněním, kdy jít nejdřív k lékaři.',
    about: 'Pedikúra Footlogix a klasická pedikúra',
    tldr: () => `<strong>Klasická pedikúra</strong> (${price('ped-classic')}) je úprava nehtů a kůžiček, odstranění ztvrdlé kůže a ošetření pokožky. <strong>Medicinální pedikúra Footlogix</strong> (od ${price('ped-med-classic')}) používá profesionální kosmetiku Footlogix pro suchou a namáhanou pokožku, ztvrdlá místa a popraskané paty. Není to lékařské ošetření.`,
    related: ['/pedikura-praha-2/', '/manikura-praha-2/', '/nail-studio-praha-2/', '/cenik/'],
    sources: [
      { label: 'Footlogix: oficiální web značky (Toronto, Kanada)', url: 'https://www.footlogix.com/' },
    ],
    body: () => `
<p>V ceníku nail salonu vedle sebe stojí „Pedikúra Classic“ a „Medicinální pedikúra Footlogix“. Na první pohled jde o stejnou službu s jinou cenou. Rozdíl je v tom, na co se zaměřuje a jaké produkty se používají.</p>
<p>Tady je vysvětlení pro zákazníky našeho studia na Bělehradské 643/77 v Praze 2, kousek od I. P. Pavlova.</p>

<h2>Co je pedikúra Footlogix?</h2>
<p>Footlogix je profesionální řada přípravků pro péči o nohy od kanadské značky se sídlem v Torontu. Podle <a href="https://www.footlogix.com/" rel="noopener" target="_blank">jejího webu</a> jde o „první a jedinou“ řadu kategorie Pediceutical. V nabídce má například přípravky na popraskané paty, drsnou pokožku a ztvrdlá místa.</p>
<p>Klasické ošetření pat se často opírá jen o pilník, brusku nebo dlouhé namáčení. Footlogix míří na cílenou péči o pokožku chodidel. <strong>Nejde o lékařské ošetření</strong>: je to kosmetická péče a lékaře nenahrazuje.</p>

<h2>Jaký je rozdíl mezi klasickou a Footlogix pedikúrou?</h2>
<p>Klasická pedikúra je pravidelná údržba zdravých nohou, Footlogix je péče pro suchou a namáhanou pokožku. V ceníku se to promítá takto:</p>
${table('Srovnání klasické pedikúry a pedikúry Footlogix', ['', 'Klasická pedikúra', 'Medicinální pedikúra Footlogix'], [
    ['Co řeší', 'Úprava nehtů a kůžiček, odstranění ztvrdlé kůže, ošetření pokožky', 'Péče o suchou a namáhanou pokožku, ztvrdlá místa a popraskané paty'],
    ['Pro koho', 'Pravidelná údržba, upravené nohy', 'Kdo řeší suché paty nebo namáhané nohy'],
    ['Bez laku', price('ped-classic'), price('ped-med-classic')],
    ['S Gellakem', price('ped-lakem'), price('ped-med-gellak')],
    ['S CND Shellac', price('ped-lakem'), price('ped-med-cnd')],
  ])}

<h2>Kterou pedikúru zvolit?</h2>
<p>Zvolte podle stavu nohou a toho, jestli chcete barvu:</p>
<ul class="post-list">
  <li><strong>Chcete jen upravené nohy bez barvy:</strong> klasická pedikúra za ${price('ped-classic')}.</li>
  <li><strong>Chcete upravené nohy a barvu, která vydrží:</strong> pedikúra s Gellakem nebo CND Shellac, případně samotné lakování, pokud nehty nepotřebují jinou úpravu. Rozdíl mezi nimi vysvětluje článek <a href="/blog/shellac-vs-gellak/">Shellac vs. Gellak</a>.</li>
  <li><strong>Trápí vás suché paty nebo ztvrdlá kůže:</strong> medicinální pedikúra Footlogix.</li>
  <li><strong>Chcete si u toho odpočinout:</strong> přidejte k pedikúře masáž za ${price('ped-masaz')}.</li>
</ul>

<h2>Kdy nejdřív zajít k lékaři?</h2>
<p>Pokud máte cukrovku, plísňové onemocnění nehtů, zánět, rány nebo jiné zdravotní potíže na nohou, poraďte se nejdřív s lékařem. Pedikúra ve studiu je kosmetická péče a lékařské ošetření nenahrazuje. Případné potíže nám před návštěvou napište.</p>

<h2>Jak pedikúra probíhá?</h2>
<ol class="post-list post-steps">
  <li><strong>Domluva a příprava.</strong> Zvolíme variantu a probereme případné potíže, například suché paty nebo zarůstající nehty.</li>
  <li><strong>Úprava nehtů a kůžiček.</strong> Nehty se zkrátí, zformují a upraví se kůžička kolem nich.</li>
  <li><strong>Péče o pokožku chodidel.</strong> Odstraní se ztvrdlá kůže a pokožka se ošetří. U medicinální pedikúry přidáváme produkty Footlogix.</li>
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
      { q: 'Co je pedikúra Footlogix?', a: 'Pedikúra, při které se používá profesionální kosmetika Footlogix pro suchou a namáhanou pokožku nohou, ztvrdlá místa a popraskané paty. Je to kosmetická péče, ne lékařské ošetření.' },
      { q: 'Kolik stojí pedikúra v Praze 2?', a: `V ICONO STUDIO stojí klasická pedikúra ${price('ped-classic')}, pedikúra s CND Shellac nebo Gellakem ${price('ped-lakem')}. Medicinální pedikúra Footlogix začíná na ${price('ped-med-classic')}.` },
      { q: 'Je Footlogix lékařské ošetření?', a: 'Ne. Je to profesionální kosmetická péče o chodidla a nenahrazuje lékařské ošetření.' },
      { q: 'Jak často chodit na pedikúru?', a: 'Obvykle jednou za čtyři až šest týdnů, podle růstu nehtů a toho, jak nohy zatěžujete.' },
      { q: 'Mohu na pedikúru s cukrovkou nebo plísní nehtů?', a: 'Nejdřív se poraďte s lékařem a před návštěvou nás o zdravotním stavu informujte. Pedikúra ve studiu je kosmetická péče a lékařské ošetření nenahrazuje.' },
    ],
  },
];

export const posts = [...postsBase, ...posts2];
export const postBySlug = (slug) => posts.find((x) => x.slug === slug);

/* ============================================================ renderers */
const postUrl = (p) => `/blog/${p.slug}/`;
const authorName = `Tým ${NAME}`;
const modifiedOf = (p) => p.modified || MODIFIED;

export const CATEGORIES = [
  { id: 'ceny', h2: 'Kolik to stojí: ceny a co je v ceně', lead: 'Konkrétní ceny z ceníku a vysvětlení, z čeho se výsledná cena skládá.' },
  { id: 'nehty', h2: 'Nehty: gel lak, gel, akryl a Gel X', lead: 'Rozdíly mezi materiály, výdrž, odstranění a výběr podle toho, jak žijete.' },
  { id: 'pece', h2: 'Pedikúra, řasy a relaxační péče', lead: 'Footlogix, prodlužování řas a Head Spa: co to je a pro koho.' },
  { id: 'barber', h2: 'Barber: střih, vousy a péče', lead: 'Co je v ceně cutů, jak často za barberem a kdy zvolit barbershop.' },
];

const SERVICE_LABELS = {
  '/manikura-praha-2/': 'Manikúra', '/pedikura-praha-2/': 'Pedikúra', '/gelove-akrylove-nehty-praha-2/': 'Gelové a akrylové nehty',
  '/panske-strihy-praha-2/': 'Pánský střih', '/uprava-vousu-praha-2/': 'Úprava vousů', '/panska-kosmetika-praha-2/': 'Pánská kosmetika',
  '/prodluzovani-ras-praha-2/': 'Prodlužování řas', '/oboci-praha-2/': 'Obočí', '/kosmetika-praha-2/': 'Kosmetika', '/head-spa-praha-2/': 'Head Spa',
  '/cenik/': 'Ceník', '/nail-studio-praha-2/': 'Nail salon Praha 2', '/barbershop-praha-2/': 'Barber Praha 2', '/kontakt/': 'Kontakt',
};

/* ---------- internal linking: articles shown on service pages, hubs, home and the price list (Czech only) ---------- */
/** Articles about a given service page (route slug). Newest first is not wanted – the order in `posts` is editorial. */
export const articlesFor = (serviceSlug, max = 4) => posts.filter((p) => (p.services || []).includes(serviceSlug)).slice(0, max);
const cards = (list) => `<div class="post-cards">${list.map((o) => `<a class="post-card" href="${postUrl(o)}"><strong>${esc(o.crumb)}</strong><span>${esc(o.teaser)}</span></a>`).join('')}</div>`;
/** “Průvodci a články” section – returns '' when there is nothing to show. `slugs` = article slugs, or pass posts directly. */
export const articlesBlock = (list, { tone = 'light', heading = 'Související články', eyebrow = 'Průvodci', id = 'clanky' } = {}) => (list.length ? `
  <section class="section section--${tone}" id="${id}">
    <div class="wrap">
      <div class="section-head" data-reveal><div><p class="eyebrow">${eyebrow}</p><h2>${heading}</h2></div><a class="text-link" href="/blog/">Všechny články</a></div>
      ${cards(list)}
    </div>
  </section>` : '');

const ldArticleImage = (p, abs) => {
  const m = p.body().match(/<img src="([^"]+)"[^>]*\swidth="(\d+)"\sheight="(\d+)"/);
  return m ? { '@type': 'ImageObject', url: abs(m[1]), width: Number(m[2]), height: Number(m[3]) } : abs('/images/og-image.png');
};
const textWords = (html) => html.replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>/g, ' ').replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length;

const postSchema = (p) => (abs) => ({
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  '@id': `${abs(postUrl(p))}#article`,
  headline: p.h1,
  description: p.description,
  url: abs(postUrl(p)),
  mainEntityOfPage: { '@type': 'WebPage', '@id': abs(postUrl(p)) },
  datePublished: p.published || PUBLISHED,
  dateModified: modifiedOf(p),
  inLanguage: 'cs',
  keywords: p.keyword.join(', '),
  articleSection: (CATEGORIES.find((c) => c.id === p.category) || {}).h2,
  wordCount: textWords(p.body()),
  author: { '@type': 'Organization', name: authorName, '@id': abs('/#business') },
  publisher: { '@id': abs('/#business') },
  image: ldArticleImage(p, abs),
  about: { '@type': 'Thing', name: p.about },
  // the services the article talks about – ties the article to the service pages in the knowledge graph
  mentions: (p.services || []).map((s) => ({ '@type': 'Service', name: SERVICE_LABELS[`/${s}/`], url: abs(`/${s}/`), provider: { '@id': abs('/#business') } })),
  ...(p.sources.length ? { citation: p.sources.map((s) => ({ '@type': 'CreativeWork', name: s.label, url: s.url })) } : {}),
  isPartOf: { '@type': 'Blog', '@id': abs('/blog/#blog'), name: `Blog ${NAME}`, url: abs('/blog/') },
});

const authorBox = () => `
<aside class="post-author" aria-label="O autorovi">
  <p class="eyebrow">O autorovi</p>
  <p><strong>${authorName}.</strong> ${NAME} je barber a nail salon na Bělehradské 643/77 v Praze 2 (IČO ${site.ico}). Články píšeme z vlastního ceníku a metodických podkladů studia. Ceny a popisy služeb jsou aktuální k datu aktualizace u nadpisu.</p>
  <p><a class="text-link" href="/kontakt/">Kontakt a otevírací doba</a> · <a class="text-link" href="/caste-dotazy/">Časté dotazy</a></p>
</aside>`;

export function blogPost(slug) {
  const p = postBySlug(slug);
  const trail = [{ name: 'Blog', href: '/blog/' }, { name: p.crumb, href: postUrl(p) }];
  // “Další články”: the hand-picked cross-links first, then more from the same category
  const seen = new Set([p.slug]);
  const next = [...(p.see || []).map(postBySlug), ...posts.filter((x) => x.category === p.category)].filter((x) => x && !seen.has(x.slug) && seen.add(x.slug)).slice(0, 4);
  const body = `
  <section class="page-hero page-hero--post">
    <div class="wrap">
      ${breadcrumbs(trail)}
      <p class="eyebrow" data-hero>Blog · ${NAME}</p>
      <h1 data-hero>${esc(p.h1)}</h1>
      <p class="post-meta" data-hero>${authorName} · <time datetime="${p.published || PUBLISHED}">${dateCs(p.published || PUBLISHED)}</time> · aktualizováno <time datetime="${modifiedOf(p)}">${dateCs(modifiedOf(p))}</time></p>
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
      <div class="post-cards">${next.map((o) => `<a class="post-card" href="${postUrl(o)}"><strong>${esc(o.crumb)}</strong><span>${esc(o.teaser)}</span></a>`).join('')}</div>
      <p class="eyebrow post-related-label">Související služby</p>
      <div class="link-cloud">${p.related.map((href) => `<a href="${href}">${esc(SERVICE_LABELS[href] || href)}</a>`).join('')}<a href="/blog/">Všechny články</a></div>
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
  const card = (o) => `<a class="post-card" href="${postUrl(o)}"><strong>${esc(o.h1)}</strong><span>${esc(o.teaser)}</span><small>${dateCs(o.published || PUBLISHED)}</small></a>`;
  const body = `
  <section class="page-hero page-hero--post">
    <div class="wrap">
      ${breadcrumbs(trail)}
      <p class="eyebrow" data-hero>Blog · ${NAME}</p>
      <h1 data-hero>Blog o nehtech, pedikúře a barber péči v Praze 2</h1>
      <p class="lead" data-hero>Praktické průvodce z nail salonu a barbershopu na Bělehradské 643/77 u I. P. Pavlova. Vždy s konkrétními cenami z ceníku a vysvětlením, co v ceně je. Rychlé odpovědi najdete také v <a class="text-link" href="/caste-dotazy/">častých dotazech</a>.</p>
    </div>
  </section>
  ${CATEGORIES.map((c, i) => {
    const list = posts.filter((x) => x.category === c.id);
    return list.length ? `
  <section class="section section--light" id="${c.id}">
    <div class="wrap">
      <p class="eyebrow">${String(i + 1).padStart(2, '0')}</p>
      <h2>${c.h2}</h2>
      <p class="lead">${c.lead}</p>
      <div class="post-cards post-cards--lg">${list.map(card).join('')}</div>
    </div>
  </section>` : '';
  }).join('')}
  <section class="section section--light">
    <div class="wrap">
      <p class="eyebrow">Služby a ceník</p>
      <div class="link-cloud">${Object.entries(SERVICE_LABELS).map(([href, label]) => `<a href="${href}">${esc(label)}</a>`).join('')}<a href="/caste-dotazy/">Časté dotazy</a></div>
    </div>
  </section>
  ${finalCta()}`;
  return layout({
    title: `Blog: nehty, pedikúra a barber v Praze 2 | ${NAME}`,
    description: 'Průvodce nehty, pedikúrou, řasami a pánským střihem z nail salonu a barbershopu u I. P. Pavlova v Praze 2: ceny, srovnání služeb a co je v ceně.',
    path: '/blog/', body, selfCanonical: true,
    schema: [(abs) => breadcrumbSchema(trail, abs), (abs) => ({
      '@context': 'https://schema.org', '@type': ['Blog', 'CollectionPage'], '@id': abs('/blog/#blog'), name: `Blog ${NAME}`, url: abs('/blog/'), inLanguage: 'cs',
      publisher: { '@id': abs('/#business') },
      blogPost: posts.map((x) => ({ '@type': 'BlogPosting', headline: x.h1, url: abs(postUrl(x)), datePublished: x.published || PUBLISHED, dateModified: modifiedOf(x) })),
      mainEntity: {
        '@type': 'ItemList', numberOfItems: posts.length,
        itemListElement: posts.map((x, i) => ({ '@type': 'ListItem', position: i + 1, url: abs(postUrl(x)), name: x.h1 })),
      },
    })],
  });
}
