// Blog, second batch (2026-11-04). Built from the Google Search Console export of 2026-11-04 (price and "co to je" queries
// that the service pages answer only in passing) and from the studio's own service notes. Same rules as blog.mjs:
// every amount comes from the ceník via price(), nothing is invented – where the studio has no data the text says
// "upřesníme při objednání". Fields beyond blog.mjs: category, published, services (route slugs the article is about,
// drives the "Související články" blocks on those pages) and see (other article slugs for cross-links).
import { site, itemById } from './data.mjs';
import {
  PUBLISHED_2, MODIFIED, price, priceFrom, dateCs, table, figNail, fig, where,
} from './blog-kit.mjs';

export const posts2 = [
  /* ---------------------------------------------------------------- 4 */
  {
    slug: 'kolik-stoji-gelove-nehty-praha',
    category: 'ceny',
    published: PUBLISHED_2,
    services: ['gelove-akrylove-nehty-praha-2'],
    see: ['sundani-gelovych-nehtu', 'gel-nebo-akryl-gel-x', 'manikura-cena-praha-2'],
    keyword: ['kolik stojí gelové nehty'],
    title: 'Kolik stojí gelové nehty: ceny v Praze 2 | ICONO STUDIO',
    description: 'Kolik stojí gelové nehty v Praze 2? Nové nehty, doplnění, Gel X, zdobení i sundání: konkrétní ceny z ceníku u I. P. Pavlova. Rezervace online.',
    h1: 'Kolik stojí gelové nehty v Praze 2: nové nehty, doplnění, zdobení i sundání',
    crumb: 'Kolik stojí gelové nehty',
    teaser: 'Nové nehty, doplnění, Gel X, zdobení a sundání: všechny ceny na jednom místě a vysvětlení, z čeho se výsledná cena skládá.',
    about: 'Cena gelových a akrylových nehtů',
    tldr: () => `Nové gelové nebo akrylové nehty s barvou stojí <strong>${price('mod-nove')}</strong>, doplnění <strong>${price('mod-dopl')}</strong>, Gel X <strong>${price('mod-gelx')}</strong>. Výhodný balíček s hand spa je za ${price('mod-pk')}. Zdobení, extra dlouhé nehty a sundání se platí zvlášť.`,
    related: ['/gelove-akrylove-nehty-praha-2/', '/manikura-praha-2/', '/nail-studio-praha-2/', '/cenik/'],
    sources: [],
    body: () => `
<p>Kolik stojí gelové nehty v Praze 2? V ICONO STUDIO stojí nové gelové nebo akrylové nehty s barvou ${price('mod-nove')}, doplnění ${price('mod-dopl')} a Gel X ${price('mod-gelx')}. Zdobení, extra dlouhé nehty a sundání se počítají zvlášť, proto níže rozepisujeme, z čeho se konečná cena skládá.</p>
<p>Ceny jsou z aktuálního ceníku na Bělehradské 643/77 u I. P. Pavlova a platí k ${dateCs(MODIFIED)}.</p>

<h2>Kolik stojí nové gelové nehty a doplnění?</h2>
<p>Cena modelace se liší hlavně tím, jestli děláte nové nehty, nebo doplnění už hotových. Doplnění je levnější než nový set.</p>
${table('Ceny modelace gelových a akrylových nehtů', ['Služba', 'Cena', 'Co to je'], [
    ['Nové gelové nebo akrylové nehty s barvou', price('mod-nove'), 'Kompletní modelace v požadované délce, tvaru a barvě.'],
    ['Gel X nehty', price('mod-gelx'), 'Prodloužení předtvarovanými gelovými tipy.'],
    ['Doplnění gelových nebo akrylových nehtů s barvou', price('mod-dopl'), 'Údržba hotových nehtů, srovnání tvaru a obnovení barvy.'],
    ['Balíček gel/akryl + hand spa', price('mod-pk'), 'Modelace s hýčkací péčí o ruce.'],
    ['Balíček doplnění + hand spa', price('mod-pk-dopl'), 'Doplnění s hand spa.'],
  ])}
${figNail(1, 'Krátké gelové nehty s ombré a kamínky z nail salonu ICONO STUDIO.')}

<h2>Jak často se gelové nehty doplňují?</h2>
<p>Doplnění je potřeba obvykle po dvou až čtyřech týdnech, podle toho, jak rychle vám nehty rostou. S růstem se posouvá hranice mezi přirozeným nehtem a modelací a doplnění ji vyrovná.</p>
<p>Když se mezi doplněními zlomí nebo odlepí jediný nehet, stačí služba Úprava jednoho nehtu za ${price('ost-jeden')}. Změna barvy u umělých nehtů (pod 10 dní) je v ceníku za ${price('ost-barva')}.</p>

<h2>Kolik stojí zdobení gelových nehtů?</h2>
<p>Základní cena zahrnuje nehty s jednou barvou. Zdobení se přidává podle toho, co si vyberete:</p>
${table('Ceny zdobení nehtů', ['Zdobení', 'Cena'], [
    ['3 barvy', price('zd-3')],
    ['5 barev', price('zd-5')],
    ['Třpytky', price('zd-trpytky')],
    ['Matný efekt', price('zd-matny')],
    ['Cateyes / Metalický efekt', price('zd-cateyes')],
    ['Ombré / Francie', price('zd-ombre')],
    ['Design / malování', priceFrom('zd-design')],
    ['Kamínky', priceFrom('zd-kaminky')],
  ])}
<p>Pokud chcete extra dlouhé nehty, ceník uvádí ${itemById('ost-dlouhe').note}. Konkrétní zdobení a délku si domluvíme při objednání, inspirační fotku rádi uvidíme.</p>

<h2>Kolik stojí sundání gelových nehtů?</h2>
<p>Odstranění umělých nehtů stojí ${price('ost-odstr-umele')}, odstranění gel laku Shellac ${price('ost-odstr-lak', 'Shellac')} a Gellaku ${price('ost-odstr-lak', 'Gellak')}. Nehty doma nestrhávejte, hrozí poškození přirozeného nehtu. Podrobný rozpis najdete v článku <a href="/blog/sundani-gelovych-nehtu/">sundání gelových nehtů</a>.</p>

<h2>Liší se cena gelu, akrylu a Gel X?</h2>
<p>V ceníku se cena nových gelových nebo akrylových nehtů s barvou (${price('mod-nove')}) a Gel X nehtů (${price('mod-gelx')}) neliší. Materiál tedy nevybíráte podle ceny, ale podle toho, jak nehty používáte a jaký výsledek chcete.</p>
<p>Gel je pružnější a působí lehce, akryl je pevnější, Gel X prodlužuje předtvarovanými tipy. Srovnání najdete v článku <a href="/blog/gel-nebo-akryl-gel-x/">gel nebo akryl</a>.</p>

<h2>Z čeho se skládá výsledná cena?</h2>
<ul class="post-list">
  <li><strong>Nový set, nebo doplnění.</strong> Doplnění je v ceníku levnější.</li>
  <li><strong>Hand spa.</strong> Balíček s hand spa přidáte jednou volbou při rezervaci.</li>
  <li><strong>Zdobení.</strong> Barvy, třpytky, ombré, kamínky nebo malování se platí podle tabulky výše.</li>
  <li><strong>Délka.</strong> Extra dlouhé nehty mají příplatek.</li>
  <li><strong>Sundání.</strong> Pokud přicházíte s nehty odjinud, počítejte i s odstraněním.</li>
</ul>
<p>Jistotu máte hned při rezervaci: všechny položky jsou v <a href="/cenik/#cenik-modelace">ceníku</a> a přesnou variantu s vámi upřesníme na místě.</p>
${where()}`,
    faq: () => [
      { q: 'Kolik stojí gelové nehty v Praze 2?', a: `V ICONO STUDIO stojí nové gelové nebo akrylové nehty s barvou ${price('mod-nove')}, doplnění ${price('mod-dopl')} a Gel X nehty ${price('mod-gelx')}. Výhodný balíček s hand spa je za ${price('mod-pk')}.` },
      { q: 'Kolik stojí doplnění gelových nehtů?', a: `Doplnění s barvou stojí ${price('mod-dopl')}, v balíčku s hand spa ${price('mod-pk-dopl')}. Objednává se obvykle po dvou až čtyřech týdnech.` },
      { q: 'Je zdobení v ceně gelových nehtů?', a: `Ne, zdobení se platí zvlášť. Například 3 barvy stojí ${price('zd-3')}, ombré nebo francie ${price('zd-ombre')} a kamínky ${priceFrom('zd-kaminky')}.` },
      { q: 'Je gel dražší než akryl?', a: `Podle ceníku ne. Nové gelové nebo akrylové nehty s barvou stojí stejně, ${price('mod-nove')}, a Gel X nehty ${price('mod-gelx')}.` },
      { q: 'Kolik stojí sundání gelových nehtů?', a: `Odstranění umělých nehtů stojí ${price('ost-odstr-umele')}, odstranění gel laku Shellac ${price('ost-odstr-lak', 'Shellac')} a Gellaku ${price('ost-odstr-lak', 'Gellak')}.` },
    ],
  },

  /* ---------------------------------------------------------------- 5 */
  {
    slug: 'sundani-gelovych-nehtu',
    category: 'nehty',
    published: PUBLISHED_2,
    services: ['gelove-akrylove-nehty-praha-2', 'manikura-praha-2'],
    see: ['kolik-stoji-gelove-nehty-praha', 'shellac-vs-gellak', 'gel-nebo-akryl-gel-x'],
    keyword: ['sundání gelových nehtů'],
    title: 'Sundání gelových nehtů: cena a postup | ICONO STUDIO',
    description: 'Sundání gelových nehtů v Praze 2: cena odstranění umělých nehtů, Shellacu a Gellaku, proč je nestrhávat doma a jak to ve studiu probíhá. Rezervace online.',
    h1: 'Sundání gelových nehtů: cena, postup a proč je nestrhávat doma',
    crumb: 'Sundání gelových nehtů',
    teaser: 'Kolik stojí odstranění umělých nehtů, Shellacu a Gellaku, čím se liší postup a co dělat, když se nehet zvedá.',
    about: 'Odstranění gelových a akrylových nehtů a gel laku',
    tldr: () => `Odstranění umělých nehtů stojí <strong>${price('ost-odstr-umele')}</strong>, odstranění gel laku Shellac <strong>${price('ost-odstr-lak', 'Shellac')}</strong> a Gellaku <strong>${price('ost-odstr-lak', 'Gellak')}</strong>. Nehty ani lak doma neodlupujte a nestrhávejte, poškodíte přirozený nehet.`,
    related: ['/gelove-akrylove-nehty-praha-2/', '/manikura-praha-2/', '/nail-studio-praha-2/', '/cenik/'],
    sources: [],
    body: () => `
<p>Sundání gelových nehtů je služba, o které se v ceníku mluví jen na jednom řádku, přitom rozhoduje o tom, v jakém stavu zůstane váš přirozený nehet. V ICONO STUDIO na Bělehradské 643/77 v Praze 2 ho děláme jako samostatnou službu i při výměně za nové nehty.</p>
<p>Níže najdete ceny, rozdíl mezi odstraněním gel laku a umělých nehtů a pravidla, která pomáhají chránit přirozený nehet.</p>

<h2>Kolik stojí sundání gelových nehtů?</h2>
<p>Cena závisí na tom, co máte na nehtech. Samotný gel lak se sundává levněji než modelace z gelu nebo akrylu.</p>
${table('Ceny odstranění nehtů a gel laku', ['Co sundáváme', 'Cena'], [
    ['Umělé nehty (gel, akryl, Gel X)', price('ost-odstr-umele')],
    ['Gel lak CND Shellac', price('ost-odstr-lak', 'Shellac')],
    ['Gel lak Gellak', price('ost-odstr-lak', 'Gellak')],
    ['Úprava jednoho nehtu (oprava)', price('ost-jeden')],
    ['Změna barvy u umělých nehtů (pod 10 dní)', price('ost-barva')],
  ])}
<p>Aktuální položky najdete také v <a href="/cenik/#cenik-ostatni">ceníku</a>.</p>
${figNail(4, 'Gelové nehty s černou francií a 3D zdobením z nail salonu ICONO STUDIO.')}

<h2>Čím se liší sundání gel laku a umělých nehtů?</h2>
<p>Gel lak je tenká barevná vrstva, umělé nehty jsou modelace, která nehtu dává délku nebo pevnost. Proto se i odstraňují jinak.</p>
<ul class="post-list">
  <li><strong>CND Shellac</strong> je tenký a snadno se odmočí, bruska obvykle není potřeba.</li>
  <li><strong>Gellak</strong> je tvrdší a lépe přilne, takže samotné odmočení nemusí stačit a často se používá elektrická bruska.</li>
  <li><strong>Gel, akryl a Gel X</strong> mají tloušťku modelace. Konkrétní postup upřesníme při objednání podle materiálu a stavu nehtů.</li>
</ul>
<p>Rozdíl mezi oběma gel laky vysvětluje článek <a href="/blog/shellac-vs-gellak/">Shellac vs. Gellak</a>.</p>

<h2>Proč nesundávat gelové nehty doma?</h2>
<p>Hlavní důvod je jednoduchý: gel lak ani umělé nehty se nemají odlupovat ani strhávat. Odtržená vrstva s sebou bere i část přirozeného nehtu a nehet pak bývá tenčí a citlivější.</p>
<p>Platí to i pro situaci, kdy se nehet jen zvedá po okraji. Odlepenou část neodtrhávejte, objednejte se na opravu nebo na sundání. Zvednutý okraj navíc zachytává vodu a nečistoty, takže čekat s ošetřením se nevyplácí.</p>

<h2>Jak sundání ve studiu probíhá?</h2>
<ol class="post-list post-steps">
  <li><strong>Domluva.</strong> Řeknete, co máte na nehtech a jestli chcete nové nehty, nový lak, nebo přirozený vzhled.</li>
  <li><strong>Odstranění materiálu.</strong> Podle toho, jde-li o Shellac, Gellak, gel, nebo akryl, zvolíme odmočení či jemné odbroušení.</li>
  <li><strong>Úprava přirozeného nehtu.</strong> Nehet se zformuje a upraví se kůžička.</li>
  <li><strong>Další krok.</strong> Můžete odejít s přirozenými nehty, nebo hned navázat novým lakem či modelací.</li>
</ol>
<p>Pokud chcete nehty rovnou vyměnit, napište nám to při rezervaci, ať je návštěva správně naplánovaná.</p>

<h2>Co dělat s nehty po sundání?</h2>
<p>Přirozený nehet je po odstranění předchozího materiálu často momentálně tenčí, proto mu dopřejte klid a péči.</p>
<ul class="post-list">
  <li>Na kůžičku pravidelně používejte olejíček.</li>
  <li>Při úklidu a mytí nádobí noste rukavice.</li>
  <li>Nehty nepoužívejte jako nástroj (otevírání plechovek, odlepování nálepek).</li>
  <li>Pokud chcete nehty jen upravit a nalakovat, zvolte <a href="/manikura-praha-2/">manikúru</a>, nebo nenabarvenou klasiku.</li>
</ul>

<h2>Kdy je čas na sundání nebo doplnění?</h2>
<p>Doplnění umělých nehtů se objednává obvykle po dvou až čtyřech týdnech. CND Shellac vydrží přibližně od 10 dnů do 3 týdnů, Gellak obvykle déle. Pokud se lak odlupuje, nehet se zvedá nebo je mezi nehtem a modelací vidět větší mezera, nečekejte na další termín a objednejte se dřív.</p>
<p>Co stojí nové nebo doplněné nehty, shrnuje článek <a href="/blog/kolik-stoji-gelove-nehty-praha/">kolik stojí gelové nehty</a>.</p>
${where()}`,
    faq: () => [
      { q: 'Kolik stojí sundání gelových nehtů?', a: `Odstranění umělých nehtů stojí ${price('ost-odstr-umele')}. Samotný gel lak se sundává za ${price('ost-odstr-lak', 'Shellac')} (Shellac) nebo ${price('ost-odstr-lak', 'Gellak')} (Gellak).` },
      { q: 'Můžu si gelové nehty sundat doma?', a: 'Nedoporučujeme to. Nehty ani gel lak neodlupujte a nestrhávejte, poškodíte tím přirozený nehet. Nechte je sundat ve studiu.' },
      { q: 'Čím se liší sundání Shellacu a Gellaku?', a: 'Shellac se odmočí, Gellak je tvrdší a často vyžaduje elektrickou brusku, protože odmočení nemusí stačit. Proto se může cena lišit.' },
      { q: 'Co když se mi zvedá nehet?', a: `Odlepenou část neodtrhávejte. Pokud se zvedá jediný nehet, hodí se služba Úprava jednoho nehtu za ${price('ost-jeden')}, jinak se objednejte na doplnění nebo sundání.` },
      { q: 'Můžu po sundání dostat hned nové nehty?', a: 'Ano, nové nehty nebo lak lze objednat hned po sundání. Napište nám to při rezervaci, ať je návštěva správně naplánovaná.' },
    ],
  },

  /* ---------------------------------------------------------------- 6 */
  {
    slug: 'gel-nebo-akryl-gel-x',
    category: 'nehty',
    published: PUBLISHED_2,
    services: ['gelove-akrylove-nehty-praha-2'],
    see: ['kolik-stoji-gelove-nehty-praha', 'sundani-gelovych-nehtu', 'shellac-vs-gellak'],
    keyword: ['gel nebo akryl'],
    title: 'Gel nebo akryl: rozdíl, výběr a Gel X | ICONO STUDIO',
    description: 'Gel nebo akryl? Srovnání materiálů, pro koho se hodí, co je Gel X a kolik stojí nové nehty v Praze 2. Tabulka a rozhodovací seznam z nail salonu.',
    h1: 'Gel nebo akryl: který materiál na nehty zvolit a co je Gel X',
    crumb: 'Gel nebo akryl',
    teaser: 'Rozdíl mezi gelem, akrylem a Gel X, pro koho se hodí a jak si vybrat podle toho, co děláte rukama.',
    about: 'Gelové, akrylové a Gel X nehty',
    tldr: () => `<strong>Gel</strong> je pružnější a působí lehce, <strong>akryl</strong> je tvrdší a odolnější, <strong>Gel X</strong> prodlužuje předtvarovanými gelovými tipy. V ceníku stojí nové gelové nebo akrylové nehty s barvou ${price('mod-nove')}, Gel X ${price('mod-gelx')}.`,
    related: ['/gelove-akrylove-nehty-praha-2/', '/manikura-praha-2/', '/nail-studio-praha-2/', '/cenik/'],
    sources: [],
    body: () => `
<p>Gel nebo akryl? Je to nejčastější otázka u nových umělých nehtů a správná odpověď se opírá o to, co děláte rukama a jak dlouhé nehty chcete. Oba materiály vám dají délku a tvar, liší se pocitem při nošení a odolností.</p>
<p>Podklady jsou z poznámek našeho nail salonu na Bělehradské 643/77 v Praze 2, kousek od I. P. Pavlova.</p>

<h2>Jaký je rozdíl mezi gelem a akrylem?</h2>
<p>Gel je pružnější a vytvrzuje se v lampě, akryl je tvrdší a tvrdne na vzduchu. Rozdíly shrnuje tabulka.</p>
${table('Srovnání gelu, akrylu a Gel X', ['', 'Gel', 'Akryl', 'Gel X'], [
    ['Materiál', 'Gel tekutější nebo hustší konzistence', 'Akrylový prášek a liquid', 'Měkké celogelové tipy (Soft Gel Tips)'],
    ['Vytvrzení', 'V UV/LED lampě', 'Na vzduchu, bez lampy', 'Prodlužuje se předtvarovanými tipy'],
    ['Zápach', 'Bez výrazného zápachu', 'Charakteristický zápach', '–'],
    ['Tvrdost', 'Střední, pružnější a měkčí', 'Tvrdší a odolnější', 'Lehký pocit na nehtech'],
    ['Hodí se pro', 'Nehty bez výraznějších nedokonalostí, méně náročná manuální práce', 'Prodlužování, korekce nedokonalostí, klientky pracující rukama', 'Lehké a přirozeně působící prodloužení'],
    ['Cena v ceníku', price('mod-nove'), price('mod-nove'), price('mod-gelx')],
  ])}
${figNail(2, 'Mandlové nehty s 3D mašlemi z nail salonu ICONO STUDIO.')}

<h2>Pro koho je gel?</h2>
<p>Gel je dobrá volba pro každodenní nošení a pro ty, kdo umělé nehty zkoušejí poprvé. Je bez výrazného zápachu, má hladký a lesklý povrch a na nehtech působí lehce a přirozeně.</p>
<p>Vhodný je především pro nehty bez výraznějších nedokonalostí a pro klientky, které nevykonávají příliš náročnou manuální práci. Gel je pružnější a měkčí, proto bývá jeho odstranění obvykle rychlejší.</p>

<h2>Pro koho je akryl?</h2>
<p>Akryl je tvrdší a odolnější, proto se hodí na prodlužování, modelování tvaru a korekci nehtů s různými nedokonalostmi. Dobrá volba je i pro klientky, které často pracují rukama.</p>
<p>Neplatí pravidlo, že na krátké nehty musí být vždy gel. I tenká vrstva akrylu může krátké nehty zpevnit a zachovat přirozený vzhled. Co je lepší, záleží na kvalitě vašich přírodních nehtů.</p>

<h2>Co je Gel X?</h2>
<p>Gel X je moderní metoda prodlužování pomocí měkkých celogelových tipů (Soft Gel Tips). Výsledek bývá lehký a přirozeně působící, proto se hodí, pokud chcete delší nehty, ale bez pocitu těžké modelace.</p>
<p>V ceníku je Gel X za ${price('mod-gelx')}, tedy za stejnou cenu jako nové gelové nebo akrylové nehty s barvou.</p>

<h2>Jaký tvar nehtů zvolit?</h2>
<p>Nejčastější tvary jsou čtvercový, kulatý, oválný, mandlový a coffin. Čtvercový a kulatý jsou praktické, oválný a mandlový opticky prodlužují prsty a coffin je výrazný a módní. Tvar vybereme společně, klidně přineste inspiraci.</p>

<h2>Jak si vybrat? Rychlá pomůcka</h2>
<ul class="post-list">
  <li><strong>Umělé nehty zkoušíte poprvé a chcete lehký pocit:</strong> gel, případně Gel X.</li>
  <li><strong>Pracujete rukama, chcete delší nebo výraznější tvar:</strong> akryl.</li>
  <li><strong>Chcete prodloužit rychle a přirozeně:</strong> Gel X.</li>
  <li><strong>Nechcete prodlužovat, jen barvu:</strong> manikúra s gel lakem, viz <a href="/blog/shellac-vs-gellak/">Shellac vs. Gellak</a>.</li>
</ul>
<p>Nevíte, co vybrat? Napište nám, jak ruce používáte a jaké nehty si představujete. Poradíme materiál i tvar.</p>

<h2>Pálí gel v lampě?</h2>
<p>Mírný pocit tepla nebo pálení při vytvrzování gelu v lampě je běžný a intenzita se může při návštěvách lišit. Pokud je teplo příliš intenzivní, stačí ruku na několik sekund z lampy vytáhnout a pak ji vložit zpět.</p>
<p>Kolik všechno stojí včetně doplnění, zdobení a sundání, shrnuje článek <a href="/blog/kolik-stoji-gelove-nehty-praha/">kolik stojí gelové nehty</a>.</p>
${where()}`,
    faq: () => [
      { q: 'Je lepší gel, nebo akryl?', a: 'Záleží na tom, jak nehty používáte a jak kvalitní jsou vaše přírodní nehty. Gel je pružnější a lehčí, akryl tvrdší a odolnější. Rádi poradíme podle vašeho životního stylu.' },
      { q: 'Je gel dražší než akryl?', a: `Podle ceníku ne. Nové gelové nebo akrylové nehty s barvou stojí ${price('mod-nove')}, doplnění ${price('mod-dopl')}.` },
      { q: 'Co je Gel X?', a: `Technika prodloužení pomocí předtvarovaných měkkých gelových tipů. Hodí se pro lehký a přirozeně působící výsledek. Cena je ${price('mod-gelx')}.` },
      { q: 'Jde akryl i na krátké nehty?', a: 'Ano, krátké nehty lze zpevnit i tenkou vrstvou akrylu, která zachová přirozený vzhled.' },
      { q: 'Smrdí akryl?', a: 'Při aplikaci je cítit typická vůně. Gel je bez výrazného zápachu.' },
    ],
  },

  /* ---------------------------------------------------------------- 7 */
  {
    slug: 'manikura-cena-praha-2',
    category: 'ceny',
    published: PUBLISHED_2,
    services: ['manikura-praha-2'],
    see: ['shellac-vs-gellak', 'sundani-gelovych-nehtu', 'kolik-stoji-gelove-nehty-praha'],
    keyword: ['manikúra cena'],
    title: 'Manikúra cena Praha 2: klasická i Gellak | ICONO STUDIO',
    description: 'Manikúra cena v Praze 2: klasická, s Gellakem i CND Shellac, balíčky s hand spa a příplatky za zdobení. Přehled z ceníku u I. P. Pavlova. Rezervace online.',
    h1: 'Manikúra cena Praha 2: kolik stojí klasická, Gellak i CND Shellac',
    crumb: 'Manikúra: cena',
    teaser: 'Ceny klasické manikúry, Gellaku a CND Shellac, balíčků s hand spa a zdobení. A jak vybrat, co se vyplatí.',
    about: 'Cena manikúry',
    tldr: () => `Klasická manikúra stojí <strong>${price('man-classic')}</strong>, manikúra s Gellakem <strong>${price('man-gellak')}</strong> a s CND Shellac <strong>${price('man-cnd')}</strong>. V balíčku s hand spa je to ${price('man-pk-classic')}, ${price('man-pk-gellak')} a ${price('man-pk-cnd')}.`,
    related: ['/manikura-praha-2/', '/gelove-akrylove-nehty-praha-2/', '/nail-studio-praha-2/', '/cenik/'],
    sources: [],
    body: () => `
<p>Manikúra cena v Praze 2 se v našem studiu odvíjí od jediné otázky: chcete nehty bez barvy, s Gellakem, nebo s CND Shellac? Klasická manikúra stojí ${price('man-classic')}, s Gellakem ${price('man-gellak')} a s CND Shellac ${price('man-cnd')}.</p>
<p>Ceny platí v ICONO STUDIO na Bělehradské 643/77 u I. P. Pavlova a jsou z ceníku platného k ${dateCs(MODIFIED)}.</p>

<h2>Kolik stojí manikúra v ICONO STUDIO?</h2>
<p>U každé varianty si můžete zvolit samotnou manikúru, nebo výhodný balíček s hand spa. Balíček je hýčkací péče o ruce navíc.</p>
${table('Ceny manikúry v ICONO STUDIO', ['Varianta', 'Samotná manikúra', 'Balíček s hand spa'], [
    ['Klasická manikúra (bez barvy)', price('man-classic'), price('man-pk-classic')],
    ['Manikúra s gel lakem Gellak', price('man-gellak'), price('man-pk-gellak')],
    ['Manikúra s CND Shellac', price('man-cnd'), price('man-pk-cnd')],
  ])}
${figNail(8, 'Růžová francie s malovaným designem z nail salonu ICONO STUDIO.')}

<h2>Co je v ceně klasické manikúry?</h2>
<p>Základní úprava přírodních nehtů: zkrácení, tvarování, péče o kůžičku a finální ošetření. Hodí se, když chcete upravené ruce bez barvy a přirozený vzhled.</p>

<h2>Čím se liší Gellak a CND Shellac?</h2>
<p>Oba jsou gel laky, které se vytvrzují v lampě, takže jsou hned suché. Shellac je tenký a odmočí se, Gellak je tvrdší, lépe přilne a obvykle vydrží déle.</p>
<p>CND Shellac vydrží přibližně od 10 dnů do 3 týdnů. Skutečná výdrž závisí na vašich nehtech a návycích. Podrobné srovnání najdete v článku <a href="/blog/shellac-vs-gellak/">Shellac vs. Gellak</a>.</p>

<h2>Kolik stojí zdobení a další doplňky?</h2>
<p>Barva je v ceně manikúry, zdobení se platí zvlášť:</p>
${table('Zdobení k manikúře', ['Zdobení', 'Cena'], [
    ['3 barvy', price('zd-3')],
    ['5 barev', price('zd-5')],
    ['Ombré / Francie', price('zd-ombre')],
    ['Kamínky', priceFrom('zd-kaminky')],
    ['Design / malování', priceFrom('zd-design')],
    ['P-Shine', price('zd-pshine')],
  ])}
<p>P.Shine je japonská metoda péče o nehty, která se obejde bez barevného laku a míří na výživu, posílení a přirozený lesk.</p>

<h2>Kolik stojí sundání gel laku?</h2>
<p>Pokud přicházíte s lakem z jiného studia nebo chcete lak jen sundat, odstranění Shellacu stojí ${price('ost-odstr-lak', 'Shellac')} a Gellaku ${price('ost-odstr-lak', 'Gellak')}. Gel lak neodlupujte, poškodíte nehet. Více v článku <a href="/blog/sundani-gelovych-nehtu/">sundání gelových nehtů</a>.</p>

<h2>Jak často chodit na manikúru?</h2>
<p>U gel laku podle výdrže: CND Shellac vydrží přibližně od 10 dnů do 3 týdnů, Gellak obvykle déle. Skutečná výdrž závisí na kvalitě přirozených nehtů a na tom, jak často jsou vaše ruce ve vodě nebo v kontaktu s čisticími prostředky.</p>
<p>Klasickou manikúru bez barvy si objednáváte podle toho, jak rychle vám roste nehet a kůžička. Když se lak začne zvedat, neodlupujte ho, přijďte si ho nechat odstranit.</p>

<h2>Jakou manikúru zvolit?</h2>
<ul class="post-list">
  <li><strong>Chcete upravené ruce bez barvy:</strong> klasická manikúra.</li>
  <li><strong>Chcete barvu, která drží nejdéle:</strong> manikúra s Gellakem.</li>
  <li><strong>Chcete lehký lak, který se snadno sundá:</strong> manikúra s CND Shellac.</li>
  <li><strong>Chcete se u toho uvolnit:</strong> zvolte balíček s hand spa.</li>
  <li><strong>Chcete delší nehty:</strong> podívejte se na <a href="/gelove-akrylove-nehty-praha-2/">gelové a akrylové nehty</a>.</li>
</ul>
${where()}`,
    faq: () => [
      { q: 'Kolik stojí manikúra v Praze 2?', a: `V ICONO STUDIO stojí klasická manikúra ${price('man-classic')}, s Gellakem ${price('man-gellak')} a s CND Shellac ${price('man-cnd')}.` },
      { q: 'Kolik stojí manikúra s hand spa?', a: `Balíček s hand spa stojí ${price('man-pk-classic')} u klasické manikúry, ${price('man-pk-gellak')} s Gellakem a ${price('man-pk-cnd')} s CND Shellac.` },
      { q: 'Je barva v ceně manikúry?', a: 'U variant s Gellakem a CND Shellac ano. Zdobení, například ombré, kamínky nebo malování, se platí zvlášť podle ceníku.' },
      { q: 'Jak dlouho vydrží manikúra s gel lakem?', a: 'CND Shellac přibližně od 10 dnů do 3 týdnů, Gellak obvykle déle. Výdrž závisí na vašich nehtech a každodenních návycích.' },
      { q: 'Kolik stojí odstranění gel laku?', a: `Odstranění Shellacu stojí ${price('ost-odstr-lak', 'Shellac')}, Gellaku ${price('ost-odstr-lak', 'Gellak')}.` },
    ],
  },

  /* ---------------------------------------------------------------- 8 */
  {
    slug: 'head-spa-co-to-je',
    category: 'pece',
    published: PUBLISHED_2,
    services: ['head-spa-praha-2', 'panska-kosmetika-praha-2'],
    see: ['barbershop-nebo-kadernictvi', 'pansky-strih-praha-2-cena'],
    keyword: ['head spa'],
    title: 'Head Spa: co to je, co obsahuje a cena | ICONO STUDIO',
    description: 'Head Spa: co to je, co obsahuje (bílý zvuk, exfoliace, asijské mytí a masáž hlavy), pro koho je a kolik stojí v Praze 2. Rezervace online u I. P. Pavlova.',
    h1: 'Head Spa: co to je, co obsahuje a kolik stojí v Praze 2',
    crumb: 'Head Spa: co to je',
    teaser: 'Pět kroků péče o pokožku hlavy, pro koho je Head Spa vhodné, v čem se liší od mytí a masáže hlavy a kolik stojí.',
    about: 'Head Spa – relaxační péče o pokožku hlavy',
    tldr: () => `Head Spa je relaxační péče o pokožku hlavy a vlasy o pěti krocích: bílý zvuk, akupunkturní body, exfoliace, asijské mytí s masáží a foukání s regeneračním olejem. Stojí <strong>${price('hs')}</strong>. Není to léčba.`,
    related: ['/head-spa-praha-2/', '/panska-kosmetika-praha-2/', '/nail-studio-praha-2/', '/cenik/'],
    sources: [],
    body: () => `
<p>Head Spa je péče, která spojuje relaxaci s pečující rutinou pro pokožku hlavy a vlasy. Pomalé tempo, příjemný zvuk, masáž a voda: po návštěvě odcházíte uvolnění. V ICONO STUDIO na Bělehradské 643/77 v Praze 2 stojí ${price('hs')}.</p>
<p>Co přesně se při Head Spa děje a pro koho je, vysvětlujeme krok za krokem.</p>

<h2>Co obsahuje Head Spa?</h2>
<p>Služba má pět kroků, které na sebe navazují od uklidnění po finální ošetření vlasů.</p>
<ol class="post-list post-steps">
  <li><strong>Terapie bílým zvukem.</strong> Jednotvárný uklidňující zvuk, který tlumí okolní ruch a pomáhá se uvolnit.</li>
  <li><strong>Ošetření akupunkturních bodů na hlavě.</strong> Cílený tlak na vybrané body, který se používá k uvolnění napětí.</li>
  <li><strong>Exfoliace pokožky hlavy.</strong> Jemný peeling, který pomáhá očistit pokožku od nečistot a zbytků stylingových produktů.</li>
  <li><strong>Asijská technika mytí vlasů a masáže hlavy.</strong> Pomalé, rytmické mytí spojené s masáží, hlavní relaxační část péče.</li>
  <li><strong>Foukání a regenerační olej.</strong> Vlasy se vyfoukají (bez stylingu) a ošetří vlasovým regeneračním olejem.</li>
</ol>

<h2>Pro koho je Head Spa vhodné?</h2>
<p>Pro každého, kdo si chce odpočinout, pečovat o pokožku hlavy a vlasy nebo si dopřát chvíli bez spěchu. Hodí se po náročném týdnu, jako dárek pro blízkého člověka nebo jako pravidelný rituál péče o sebe.</p>
<p>Jak často si ho dopřát, je na vás. Někdo chodí pravidelně, jiný při zvláštních příležitostech. Doporučení rádi dáme přímo při návštěvě.</p>

<h2>Čím se Head Spa liší od mytí a masáže hlavy?</h2>
<p>Mytí a masáž hlavy jsou kratší doplňkové služby, Head Spa je ucelený rituál s exfoliací, zvukem a ošetřením vlasů. V ceníku to vypadá takto:</p>
${table('Head Spa a podobné služby v ceníku', ['Služba', 'Cena', 'Co zahrnuje'], [
    ['Head Spa', price('hs'), 'Pět kroků: bílý zvuk, akupunkturní body, exfoliace, asijské mytí s masáží, foukání a olej.'],
    ['Masáž hlavy', price('pece-masaz'), 'Uvolňující masáž, doplněk ke střihu nebo samostatná chvíle odpočinku.'],
    ['Mytí hlavy', priceFrom('pece-myti-od'), 'Klasické, s masáží nebo se stylingem.'],
    ['Mytí hlavy navíc', price('pece-myti'), 'Doplněk k jiné službě.'],
  ])}
${fig(site.photos.studio.find((p) => p.key === 'studioA'), 'photos.studioA', 'Výloha ICONO STUDIO na Bělehradské v Praze 2.')}

<h2>Je Head Spa léčba pokožky hlavy?</h2>
<p>Ne. Je to relaxační a pečující služba, nikoli léčba. Pokud máte ekzém, lupénku nebo podrážděnou pokožku hlavy, poraďte se nejdřív s lékařem a při objednání nám to napište.</p>

<h2>Je součástí Head Spa styling vlasů?</h2>
<p>Vlasy se vyfoukají, ale bez stylingu. Pokud je chcete pro konkrétní příležitost upravit, domluvte se s námi při rezervaci. Můžete také navázat střihem, viz <a href="/panske-strihy-praha-2/">pánské střihy</a>.</p>

<h2>Na co myslet před a po návštěvě?</h2>
<ul class="post-list">
  <li>Před návštěvou nemusíte nic speciálního dělat. Přijďte odpočatí a v pohodlném oblečení.</li>
  <li>Přijďte s časovou rezervou. Head Spa je pomalá péče, délku návštěvy upřesníme při objednání.</li>
  <li>Po návštěvě vlasy nezatěžujte těžkými stylingovými produkty, ať regenerační olej působí.</li>
  <li>Při citlivé pokožce hlavy nebo alergii na kosmetiku nám dejte vědět předem.</li>
</ul>
<p>Head Spa se dá spojit s dalšími službami, například s <a href="/manikura-praha-2/">manikúrou</a> nebo <a href="/pedikura-praha-2/">pedikúrou</a>.</p>
${where()}`,
    faq: () => [
      { q: 'Co je Head Spa?', a: 'Relaxační péče o pokožku hlavy a vlasy: terapie bílým zvukem, ošetření akupunkturních bodů, exfoliace pokožky hlavy, asijské mytí s masáží a foukání s regeneračním olejem.' },
      { q: 'Kolik stojí Head Spa v Praze 2?', a: `Head Spa stojí v ICONO STUDIO ${price('hs')}.` },
      { q: 'Je Head Spa vhodné i pro muže?', a: 'Péče je určena pro pokožku hlavy a vlasy obecně. Pokud máte barvené nebo poškozené vlasy či citlivou pokožku hlavy, napište nám a poradíme.' },
      { q: 'Jak často si Head Spa dopřát?', a: 'Podle chuti a potřeby. Někdo chodí pravidelně, jiný při zvláštních příležitostech nebo jako dárek.' },
      { q: 'Co je terapie bílým zvukem?', a: 'Jednotvárný, uklidňující zvukový podklad, který tlumí okolní ruch a pomáhá se uvolnit.' },
    ],
  },

  /* ---------------------------------------------------------------- 9 */
  {
    slug: 'prodluzovani-ras-klasika-volume',
    category: 'pece',
    published: PUBLISHED_2,
    services: ['prodluzovani-ras-praha-2', 'oboci-kosmetika-praha-2'],
    see: ['head-spa-co-to-je', 'kolik-stoji-gelove-nehty-praha'],
    keyword: ['prodlužování řas'],
    title: 'Prodlužování řas: klasika, Volume, ceny | ICONO STUDIO',
    description: 'Prodlužování řas v Praze 2: klasické 1:1, Volume 2D–5D a Mega Volume. Rozdíly, ceny nového setu i doplnění a péče o řasy. Rezervace online u I. P. Pavlova.',
    h1: 'Prodlužování řas: klasické 1:1, Volume 2D–5D nebo Mega Volume? Rozdíl a ceny',
    crumb: 'Prodlužování řas: typy a ceny',
    teaser: 'Klasické 1:1, Volume 2D–5D, Mega Volume a designový efekt: čím se liší, kolik stojí nový set a doplnění a jak o řasy pečovat.',
    about: 'Prodlužování řas',
    tldr: () => `Klasické řasy 1:1 stojí <strong>${price('ras-klasik', 'Nový')}</strong>, Volume 2D–5D <strong>${price('ras-volume', 'Nový')}</strong>, Mega Volume <strong>${price('ras-mega', 'Nový')}</strong>. Doplnění je levnější (od ${price('ras-klasik', 'Doplnění')}). Doplňuje se obvykle po dvou až čtyřech týdnech.`,
    related: ['/prodluzovani-ras-praha-2/', '/oboci-kosmetika-praha-2/', '/nail-studio-praha-2/', '/cenik/'],
    sources: [],
    body: () => `
<p>Prodlužování řas spočívá v tom, že se na přirozenou řasu připevní umělá. Výsledkem jsou delší, hustší a výraznější řasy a ráno se obejdete bez řasenky. Otázka není, jestli, ale jakou techniku zvolit: klasické řasy 1:1, Volume 2D–5D, nebo Mega Volume.</p>
<p>Prodlužování řas děláme v ICONO STUDIO na Bělehradské 643/77 v Praze 2. Ceny jsou z ceníku platného k ${dateCs(MODIFIED)}.</p>

<h2>Jaký je rozdíl mezi klasickými a Volume řasami?</h2>
<p>U klasických řas se na jednu přirozenou řasu aplikuje jedna umělá, u Volume vějířek z více tenkých řas. Čím vyšší číslo, tím hustší výsledek.</p>
<ul class="post-list">
  <li><strong>Klasické 1:1.</strong> Jemné prodloužení a zahuštění, přirozený vzhled. Dobrá volba pro první návštěvu.</li>
  <li><strong>Volume 2D–5D.</strong> Vějířek ze dvou (2D) až pěti (5D) řas na jednu přirozenou řasu, hustší a výraznější efekt.</li>
  <li><strong>Mega Volume.</strong> Ještě hustší vějířky z více jemných řas pro maximální hustotu a plný pohled.</li>
  <li><strong>Designový efekt.</strong> Řasy se speciálním tvarem, který domluvíme při objednání.</li>
</ul>

<h2>Kolik stojí prodlužování řas?</h2>
<p>Ceník rozlišuje nový set a doplnění. Nový set je kompletní nasazení, doplnění je údržba, při které se doplní řasy, které mezitím vypadly.</p>
${table('Ceny prodlužování řas', ['Typ', 'Nový set', 'Doplnění'], [
    ['Klasické řasy 1:1', price('ras-klasik', 'Nový'), price('ras-klasik', 'Doplnění')],
    ['Volume řasy 2D–5D', price('ras-volume', 'Nový'), price('ras-volume', 'Doplnění')],
    ['Mega Volume řasy', price('ras-mega', 'Nový'), price('ras-mega', 'Doplnění')],
    ['Designový efekt', priceFrom('ras-design'), '–'],
    ['Odstranění prodloužených řas', price('ras-odstr'), '–'],
  ])}

<h2>Jak často se řasy doplňují?</h2>
<p>Umělé řasy vypadávají společně s přirozenými v jejich růstovém cyklu, proto se doplňují obvykle po dvou až čtyřech týdnech. Doba se liší člověk od člověka.</p>
<p>Pokud od poslední návštěvy uplynula delší doba a řas zbylo málo, může být lepší nový set než doplnění. Poradíme vám při objednání.</p>

<h2>Jak vybrat typ řas?</h2>
<ul class="post-list">
  <li><strong>Chcete přirozený vzhled:</strong> klasické řasy 1:1.</li>
  <li><strong>Chcete hustší a výraznější pohled:</strong> Volume, stupeň zvolíte podle efektu.</li>
  <li><strong>Chcete nejplnější výsledek:</strong> Mega Volume.</li>
  <li><strong>Nechcete každý den věnovat čas úpravě:</strong> zvolte jednodušší styl, například Classic nebo Volume.</li>
</ul>
${fig(site.photos.studio.find((p) => p.key === 'studioC'), 'photos.studioC', 'ICONO STUDIO v ulici Bělehradská v Praze 2.')}

<h2>Poškodí prodlužování moje přirozené řasy?</h2>
<p>Zdraví přirozených řas je pro nás na prvním místě. Při správné aplikaci a péči by přirozené řasy poškozeny být neměly, proto řasy doma neodstraňujte ani netrhejte.</p>
<p>Pokud jsou vaše řasy jemné, slabé nebo řídké, může příliš husté a dlouhé prodloužení vytvářet nadměrnou zátěž. Přirozené řasy se pak mohou lámat a vypadávat. V takovém případě doporučíme lehčí a přirozenější styl.</p>

<h2>Jak o prodloužené řasy pečovat?</h2>
<ul class="post-list">
  <li>První den po aplikaci se vyhněte vodě a páře, lepidlo potřebuje čas na zatvrdnutí.</li>
  <li>Na oční okolí nepoužívejte oleje a mastné krémy, oslabují lepidlo.</li>
  <li>Řasy denně pročesávejte čistým kartáčkem.</li>
  <li>Netřete si oči, nepoužívejte mechanickou kulmu a řasy netrhejte.</li>
  <li>Přijďte bez make-upu očí. Při citlivých očích, alergii nebo čočkách nám to napište předem.</li>
</ul>
<p>K řasám se často hodí i péče o obočí, viz <a href="/oboci-kosmetika-praha-2/">obočí a kosmetika</a>.</p>
${where()}`,
    faq: () => [
      { q: 'Kolik stojí prodlužování řas v Praze 2?', a: `Klasické řasy 1:1 stojí ${price('ras-klasik', 'Nový')} (doplnění ${price('ras-klasik', 'Doplnění')}), Volume 2D–5D ${price('ras-volume', 'Nový')} (doplnění ${price('ras-volume', 'Doplnění')}) a Mega Volume ${price('ras-mega', 'Nový')} (doplnění ${price('ras-mega', 'Doplnění')}).` },
      { q: 'Jak dlouho prodloužené řasy vydrží?', a: 'Doplňují se obvykle po dvou až čtyřech týdnech, protože umělé řasy vypadávají společně s přirozenými. Doba se liší člověk od člověka.' },
      { q: 'Čím se liší klasické a Volume řasy?', a: 'Klasické mají jednu umělou řasu na jednu přirozenou, Volume vějířek z více tenkých řas. Výsledek je hustší a výraznější.' },
      { q: 'Kolik stojí odstranění řas?', a: `Odstranění prodloužených řas stojí ${price('ras-odstr')}. Doma je neodstraňujte, hrozí poškození přirozených řas.` },
      { q: 'Co když mám citlivé oči nebo alergii?', a: 'Napište nám to předem a před aplikací se poraďte také s lékařem.' },
    ],
  },

  /* ---------------------------------------------------------------- 10 */
  {
    slug: 'barbershop-nebo-kadernictvi',
    category: 'barber',
    published: PUBLISHED_2,
    services: ['panske-strihy-praha-2', 'uprava-vousu-praha-2', 'panska-kosmetika-praha-2'],
    see: ['pansky-strih-praha-2-cena', 'uprava-vousu-jak-casto', 'head-spa-co-to-je'],
    keyword: ['barbershop nebo kadeřnictví'],
    title: 'Barbershop nebo kadeřnictví: rozdíl | ICONO STUDIO',
    description: 'Barbershop nebo kadeřnictví? Rozdíl, co obsahuje pánský střih u barbera a kdy zvolit které. Ceny cutů a vousů v Praze 2 u I. P. Pavlova. Rezervace online.',
    h1: 'Barbershop nebo kadeřnictví: kam na pánský střih v Praze 2?',
    crumb: 'Barbershop nebo kadeřnictví',
    teaser: 'V čem se barbershop liší od kadeřnictví, co dostanete za cenu pánského střihu a kdy se vyplatí které.',
    about: 'Barbershop a pánský střih',
    tldr: () => `Barbershop se zaměřuje na pánské střihy, přechody a vousy, kadeřnictví na vlasy obecně. V ICONO STUDIO stojí Klasický Cut <strong>${price('cut-klasicky')}</strong> (mytí hlavy, střih, styling, balzám nebo kolínská), úprava vousů <strong>${price('vous-uprava')}</strong>.`,
    related: ['/barbershop-praha-2/', '/panske-strihy-praha-2/', '/uprava-vousu-praha-2/', '/cenik/'],
    sources: [],
    body: () => `
<p>Barbershop nebo kadeřnictví? Pro pánský střih je rozdíl hlavně v zaměření a v tom, co dostanete navíc. Barbershop je postavený na pánských střizích, přechodech a vousech, kadeřnictví pracuje s vlasy obecně.</p>
<p>Níže je srovnání a konkrétní nabídka našeho barbershopu na Bělehradské 643/77 v Praze 2, kousek od I. P. Pavlova. Ceny jsou z ceníku platného k ${dateCs(MODIFIED)}.</p>

<h2>Jaký je rozdíl mezi barbershopem a kadeřnictvím?</h2>
<p>Rozdíl není ostrá hranice, ale obvykle se projevuje v těchto věcech:</p>
${table('Barbershop a kadeřnictví: srovnání', ['', 'Barbershop (obecně)', 'ICONO STUDIO'], [
    ['Hlavní služba', 'Pánský střih, přechody, styling', `Klasický, Premium a VIP Cut od ${price('cut-klasicky')}`],
    ['Vousy', 'Běžná součást nabídky', `Úprava vousů ${price('vous-uprava')}, samotný Timer ${price('vous-timer')}, vousy ve VIP Cutu`],
    ['Mytí hlavy a masáž', 'Často součást střihu', 'Mytí hlavy v ceně cutů, masáž v Premium a VIP All Inclusive'],
    ['Péče o pleť', 'Podle studia', `Pánská kosmetika / Mytí obličeje VIP ${price('pece-kosmetika')}`],
    ['Barvení a trvalá', 'Obvykle ne', 'V ceníku nejsou'],
  ])}
${fig(site.photos.work[1], 'photos.workB', 'Krátký platinově blond střih z barber křesla v ICONO STUDIO.')}

<h2>Co dostanete za pánský střih u barbera?</h2>
<p>V ICONO STUDIO je střih ucelená služba, ne jen práce strojkem a nůžkami. Každý vyšší cut přidává jednu věc:</p>
<ul class="post-list">
  <li><strong>Klasický Cut (${price('cut-klasicky')}):</strong> mytí hlavy, střih, styling a balzám nebo kolínská.</li>
  <li><strong>Premium Cut (${price('cut-premium')}):</strong> totéž plus masáž.</li>
  <li><strong>VIP Cut (${price('cut-vip')}):</strong> mytí hlavy, střih, vousy, styling a balzám nebo kolínská.</li>
  <li><strong>VIP All Inclusive (${price('cut-vip-all')}):</strong> vousy i masáž.</li>
  <li><strong>Studentský cut do 18 let</strong> od ${price('cut-student')} a <strong>děti do 8 let</strong> ${price('cut-deti')}.</li>
</ul>
<p>Co je v kterém cutu a jak vybrat, rozepisuje článek <a href="/blog/pansky-strih-praha-2-cena/">pánský střih Praha 2: ceny a obsah cutů</a>.</p>

<h2>Kdy zvolit barbershop?</h2>
<ul class="post-list">
  <li>Chcete přesný střih s přechody a jasnou linií.</li>
  <li>Nosíte vousy a chcete vlasy i vousy sladit jednou návštěvou.</li>
  <li>Chcete u střihu strávit chvíli navíc: mytí hlavy, masáž, kolínská.</li>
  <li>Řešíte pánskou péči o pleť po holení.</li>
</ul>

<h2>Kdy se hodí spíš kadeřnictví?</h2>
<p>Pokud potřebujete barvení vlasů, trvalou nebo komplexní úpravu dlouhých vlasů, hledejte kadeřnictví. Tyto služby v ceníku našeho barbershopu nejsou a nechceme slibovat to, co neděláme.</p>

<h2>Jak si domluvit termín?</h2>
<p>Termín si rezervujte online, nebo zavolejte. Pokud potřebujete střih spíš ze dne na den, zeptejte se telefonicky, jestli je volný čas.</p>
<p>Chodíte-li každé dva týdny, platí na všechny cuty sleva 100 Kč. Podrobnosti upřesníme na místě.</p>
${where()}`,
    faq: () => [
      { q: 'V čem se liší barbershop od kadeřnictví?', a: 'Barbershop se zaměřuje na pánské střihy, přechody a vousy, kadeřnictví na úpravu vlasů obecně. V barbershopu bývá střih spojený s mytím hlavy, stylingem a péčí o vousy.' },
      { q: 'Kolik stojí pánský střih v ICONO STUDIO?', a: `Klasický Cut ${price('cut-klasicky')}, Premium Cut ${price('cut-premium')}, VIP Cut ${price('cut-vip')} a VIP All Inclusive ${price('cut-vip-all')}. Studentský cut do 18 let od ${price('cut-student')}.` },
      { q: 'Nabízíte barvení vlasů?', a: 'Ne, v ceníku barbershopu barvení vlasů není. Nabízíme pánské střihy, úpravu vousů, mytí a masáž hlavy a pánskou kosmetiku.' },
      { q: 'Dá se u barbera upravit i vousy?', a: `Ano. Úprava vousů stojí ${price('vous-uprava')}, samotný Timer ${price('vous-timer')} a vousy jsou součástí VIP Cutu.` },
      { q: 'Kde najdu barbera u I. P. Pavlova?', a: 'ICONO STUDIO je na Bělehradské 643/77 v Praze 2, u metra I. P. Pavlova a v okolí náměstí Míru.' },
    ],
  },

  /* ---------------------------------------------------------------- 11 */
  {
    slug: 'uprava-vousu-jak-casto',
    category: 'barber',
    published: PUBLISHED_2,
    services: ['uprava-vousu-praha-2', 'panske-strihy-praha-2'],
    see: ['barbershop-nebo-kadernictvi', 'pansky-strih-praha-2-cena'],
    keyword: ['úprava vousů'],
    title: 'Úprava vousů: jak často a jaký tvar | ICONO STUDIO',
    description: 'Úprava vousů: jak často chodit k barberovi, jak vybrat tvar podle obličeje a co obsahuje úprava a Timer. Ceny v Praze 2 u I. P. Pavlova. Rezervace online.',
    h1: 'Úprava vousů: jak často chodit k barberovi a jaký tvar zvolit',
    crumb: 'Úprava vousů: jak často',
    teaser: 'Jak často upravovat vousy, jak vybrat tvar podle obličeje a čím se liší úprava vousů, Timer a VIP Cut.',
    about: 'Úprava a péče o vousy',
    tldr: () => `Vousy se upravují obvykle jednou za dva až tři týdny. Kompletní úprava stojí <strong>${price('vous-uprava')}</strong>, samostatný Timer <strong>${price('vous-timer')}</strong>, střih i vousy v jedné návštěvě řeší VIP Cut (${price('cut-vip')}).`,
    related: ['/uprava-vousu-praha-2/', '/panske-strihy-praha-2/', '/barbershop-praha-2/', '/cenik/'],
    sources: [],
    body: () => `
<p>Úprava vousů dělá z několika týdnů růstu tvar. Dobře upravené vousy poznáte na první pohled: čisté linie, pravidelný tvar a vousy, které se k obličeji hodí. Jak často za barberem chodit a jaký tvar zvolit, záleží na růstu a obličeji.</p>
<p>Tady je praktický přehled z barbershopu ICONO STUDIO na Bělehradské 643/77 v Praze 2 u I. P. Pavlova.</p>

<h2>Jak často chodit na úpravu vousů?</h2>
<p>Obvykle jednou za dva až tři týdny, aby si vousy udržely tvar. Rychleji rostoucí vousy a ostře vedené linie je lepší osvěžovat častěji.</p>
<p>Mezi kompletními návštěvami můžete využít Timer, rychlé doladění, které stojí ${price('vous-timer')}.</p>

<h2>Kolik stojí úprava vousů?</h2>
<p>Ceník rozlišuje kompletní úpravu, rychlé doladění a střih s vousy dohromady.</p>
${table('Ceny úpravy vousů', ['Služba', 'Cena', 'Co zahrnuje'], [
    ['Úprava vousů', price('vous-uprava'), 'Strojek a timer, dotažení linií shaverem nebo žiletkou, balzám nebo kolínská.'],
    ['Jenom Timer', price('vous-timer'), 'Rychlé doladění timerem, udržovací úprava.'],
    ['VIP Cut', price('cut-vip'), 'Mytí hlavy, střih, vousy, styling a balzám nebo kolínská.'],
    ['VIP All Inclusive', price('cut-vip-all'), 'Totéž plus masáž.'],
  ])}
${fig(site.photos.work[2], 'photos.workC', 'Krátké bílé vlasy s hladkým skin fade z barber křesla v ICONO STUDIO.')}

<h2>Jaký tvar vousů zvolit podle obličeje?</h2>
<p>Tvar se vyplatí volit podle tvaru obličeje. Barber vám při konzultaci poradí, co se hodí k vaší hustotě vousů.</p>
<ul class="post-list">
  <li><strong>Kulatější obličej:</strong> o něco delší brada a ostřejší linie, které obličej opticky prodlouží.</li>
  <li><strong>Hranatý obličej:</strong> zaoblenější tvary, které zjemní čelist.</li>
  <li><strong>Delší obličej:</strong> kratší brada a plnější boky.</li>
</ul>
<p>Pokud máte inspiraci, přineste fotku.</p>

<h2>Čím se liší úprava vousů a Jenom Timer?</h2>
<p>Úprava vousů je kompletní služba s tvarováním strojkem a timerem a dotažením linií shaverem nebo žiletkou. Jenom Timer je krátké doladění bez dotažení linií.</p>
<p>Pro nový tvar nebo větší změnu zvolte úpravu. Pro udržení mezi návštěvami stačí Timer.</p>

<h2>Jak dlouho nechat vousy růst před první úpravou?</h2>
<p>Obvykle stačí několik týdnů, aby bylo z čeho tvar vytvořit. Před návštěvou si vousy doma nezkracujte, barber pozná, jestli je vhodné ještě počkat.</p>

<h2>Jak pečovat o vousy doma?</h2>
<ul class="post-list">
  <li>Myjte je jemným přípravkem, agresivní šampony vysušují pokožku.</li>
  <li>Používejte olej nebo balzám na vousy, změkčí chlupy a udrží pokožku v kondici.</li>
  <li>Pročesávejte je hřebenem nebo kartáčem.</li>
  <li>Po holení žiletkou se několik hodin vyhněte alkoholovým přípravkům.</li>
  <li>Při citlivé pleti nebo zarůstajících chloupcích to řekněte barberovi předem.</li>
</ul>

<h2>Jak úprava vousů probíhá?</h2>
<ol class="post-list post-steps">
  <li><strong>Konzultace.</strong> Domluvíte si délku, tvar a linie, případně ukážete fotku.</li>
  <li><strong>Tvarování.</strong> Vousy se zkrátí a vytvarují strojkem a timerem.</li>
  <li><strong>Linie a detaily.</strong> Okraje se dotáhnou shaverem nebo žiletkou, aby byly čisté a ostré.</li>
  <li><strong>Závěr.</strong> Pokožka se ošetří balzámem nebo kolínskou.</li>
</ol>

<h2>Úprava vousů a střih v jedné návštěvě</h2>
<p>Pokud chcete upravit vlasy i vousy najednou, zvolte VIP Cut nebo VIP All Inclusive. Srovnání cutů najdete v článku <a href="/blog/pansky-strih-praha-2-cena/">pánský střih Praha 2: ceny</a>, rozdíl oproti kadeřnictví vysvětluje <a href="/blog/barbershop-nebo-kadernictvi/">barbershop nebo kadeřnictví</a>.</p>
${where()}`,
    faq: () => [
      { q: 'Jak často chodit na úpravu vousů?', a: 'Obvykle jednou za dva až tři týdny, podle růstu a požadovaného tvaru.' },
      { q: 'Kolik stojí úprava vousů v Praze 2?', a: `Úprava vousů stojí ${price('vous-uprava')}, samostatný Timer ${price('vous-timer')}. Vousy jsou také součástí VIP Cutu (${price('cut-vip')}).` },
      { q: 'Co je zahrnuto v úpravě vousů?', a: 'Práce strojkem a timerem, dotažení linií shaverem nebo žiletkou a závěrečný balzám nebo kolínská.' },
      { q: 'Je úprava vhodná i pro citlivou pokožku?', a: 'Při citlivé pokožce nebo zarůstajících chloupcích to řekněte předem. Barber postup přizpůsobí.' },
      { q: 'Jaký tvar vousů mi sedne?', a: 'Tvar se volí podle obličeje a hustoty vousů. Barber vám při konzultaci poradí, fotka inspirace pomůže.' },
    ],
  },
];
