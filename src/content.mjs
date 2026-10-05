// Czech copy for every service page (English / German: src/i18n/content.<lang>.mjs).
// Prices in the tables and cards come from the price list in data.mjs through `ids` / `groups`.
// Amounts written inside the prose (FAQ answers, descriptions) are typed by hand – `npm run check`
// verifies every one of them against the price list, in all languages.
//
// Tone: vykání, věcně. Only claims that follow from the ceník or from general craft knowledge;
// anything studio-specific that is not in the ceník (délka služby, postupy, materiály) is phrased as
// “upřesníme při objednání” rather than invented.
import { site } from './data.mjs';
import { contentFor } from './i18n/index.mjs';


export const photos = {
  nails: site.photos.nails,
  barber: site.photos.barber,
};

/** Czech base content. English / German live in i18n/content.<lang>.mjs and are merged over this
 *  (see getServicePages). area: nails | beauty | barber — decides the hub page, breadcrumb and card tone. */
export const servicePagesBase = [
  /* ============================================================ MANIKÚRA */
  {
    slug: 'manikura-praha-2', area: 'nails', name: 'Manikúra', art: 'manikura', photo: null,
    cardText: 'Klasická, Gellak nebo CND Shellac. S hand spa nebo bez.',
    title: 'Manikúra Praha 2 – Classic, Gellak, Shellac | ICONO STUDIO',
    description: 'Manikúra na Bělehradské 77 v Praze 2: klasická od 350 Kč, s gel lakem Gellak od 550 Kč, s CND Shellac od 650 Kč. Hand spa v balíčku.',
    h1: 'Manikúra Praha 2', eyebrow: 'Nails · Bělehradská 77',
    lead: 'Klasická manikúra, Gellak nebo CND Shellac na Bělehradské 77 ve Vinohradech. Vyberte si samotnou úpravu nehtů, nebo výhodný balíček s hand spa.',
    imageAlt: 'Ruce při manikúře s lakovanými nehty v ICONO STUDIO v Praze 2',
    artAlt: 'Ilustrace lahvičky laku na nehty, pilníku a kapky laku – manikúra v ICONO STUDIO',
    groups: ['manikura', 'zdobeni'],
    intro: {
      h2: 'Upravené ruce v centru Prahy 2',
      paras: [
        'Manikúra je základ péče o ruce. V ICONO STUDIO ji děláme na Bělehradské 77, kousek od I. P. Pavlova a náměstí Míru, takže se k nám pohodlně dostanete z Vinohrad i z okolí. Nehty vám zkrátíme a zformujeme, upravíme kůžičku a podle přání je nalakujeme – nebo je necháme přirozené.',
        'V nabídce jsou tři základní varianty: klasická manikúra bez barvy, manikúra s gel lakem Gellak a manikúra s gel lakem CND Shellac. Ke každé z nich můžete přidat hand spa, tedy hýčkací péči o ruce, ve výhodném balíčku. Ceny najdete níže a v kompletním <a href="/cenik/">ceníku</a>.',
      ],
    },
    options: {
      h2: 'Varianty manikúry a ceny',
      items: [
        { title: 'Klasická manikúra', ids: ['man-classic', 'man-pk-classic'], text: 'Základní úprava přírodních nehtů: zkrácení, tvarování, péče o kůžičku a finální ošetření. Hodí se, když chcete upravené ruce bez barvy a přirozený vzhled. Balíček navíc zahrnuje hand spa.' },
        { title: 'Manikúra s gel lakem Gellak', ids: ['man-gellak', 'man-pk-gellak'], text: 'Úprava nehtů spojená s lakováním gel lakem Gellak. Gel lak se vytvrzuje v lampě, takže je po aplikaci okamžitě suchý a drží podstatně déle než běžný lak. Hand spa vás v balíčku vyjde na pouhých 50 Kč navíc.' },
        { title: 'Manikúra s CND Shellac', ids: ['man-cnd', 'man-pk-cnd'], text: 'Totéž lakování, ale se značkovým gel lakem CND Shellac. Je o 100 Kč dražší než varianta s Gellakem. I tady si můžete vybrat balíček s hand spa, který stojí o 50 Kč víc než samotná manikúra.' },
      ],
    },
    notes: {
      h2: 'CND Shellac, Gellak a P.Shine: co je co',
      items: [
        { h: 'CND Shellac', paras: [
          'CND Shellac je hybridní lak, který kombinuje výhody klasického laku a gelu. Je tenký, lehký a působí přirozeně. Při aplikaci není nutné výrazně pilovat přírodní nehet, odstranění je velmi snadné pomocí odmočení a výdrž se pohybuje přibližně od 10 dnů do 3 týdnů.',
          'Skutečná výdrž závisí na kvalitě přírodních nehtů i na každodenních návycích. U klientek, které jsou často v kontaktu s vodou, čisticími prostředky nebo vykonávají manuální práci, se může Shellac začít odlupovat dříve.',
        ] },
        { h: 'Gel lak (Gellak)', paras: [
          'Gel lak se také aplikuje na podkladovou bázi a postup aplikace je podobný jako u CND Shellac. Hlavní rozdíl spočívá v tom, že gel lak je tvrdší a má vyšší přilnavost, takže obvykle vydrží déle než Shellac. Při odstranění je však často nutné použít elektrickou brusku, protože samotné odmočení nemusí být dostačující.',
        ] },
        { h: 'P.Shine', paras: [
          'P.Shine je japonská metoda přírodní péče o nehty, která je zaměřená na výživu, posílení a vysoký přirozený lesk vlastních nehtů.',
          'Při této metodě se nepoužívá barevný lak. Výsledkem jsou upravené, hladké a přirozeně lesklé nehty.',
        ] },
      ] },
    guide: {
      h2: 'Jakou manikúru zvolit?',
      paras: [
        'Pokud chcete jednoduše upravené ruce a nechcete barvu, stačí <strong>klasická manikúra</strong>. Je nejrychlejší a nejlevnější a hodí se i jako pravidelná údržba mezi lakováními.',
        'Pokud chcete barvu, která vydrží, zvolte <strong>Gellak</strong> nebo <strong>CND Shellac</strong>. Oba jsou gel laky vytvrzované v lampě – nehty jsou hned suché a nemažou se. <strong>CND Shellac</strong> je tenký a lehký, dá se odmočit a vydrží přibližně od 10 dnů do 3 týdnů. <strong>Gellak</strong> je tvrdší a lépe přilne, takže obvykle vydrží déle, k odstranění ale často potřebuje brusku.',
        'Pokud si chcete odpočinout, vyberte <strong>balíček s hand spa</strong>. U variant s gel lakem je cena balíčku jen o 50 Kč vyšší než samotná manikúra, takže se vyplatí, kdykoli máte chuť na něco navíc.',
        'A pokud chcete nehty ozdobit, přidejte zdobení – od jednoduchých barevných akcentů přes francii a ombré až po kamínky nebo malování. Ceny zdobení najdete v tabulce níže.',
      ],
    },
    steps: {
      h2: 'Jak manikúra probíhá',
      items: [
        { h: 'Domluva', t: 'Řeknete nám, jakou variantu chcete, jaký tvar nehtů máte rádi a případně i jakou barvu. Pokud si nejste jistí, poradíme.' },
        { h: 'Úprava nehtů a kůžičky', t: 'Nehty se zkrátí, zformují a upraví se kůžička kolem nich.' },
        { h: 'Lakování a vytvrzení', t: 'U Gellaku a CND Shellacu se barva nanáší ve vrstvách a vytvrzuje v lampě. Klasickou manikúru můžete mít i bez barvy.' },
        { h: 'Finální péče', t: 'Na závěr se ruce ošetří, aby působily upraveně a hladce. U balíčků je součástí návštěvy hand spa.' },
      ],
    },
    care: {
      h2: 'Jak pečovat o ruce po manikúře',
      items: [
        'Na kůžičku pravidelně používejte olejíček nebo výživný krém. Udrží ji měkkou a nehty pak vypadají upraveně i týdny po návštěvě.',
        'Při mytí nádobí a úklidu noste rukavice – čisticí prostředky nehty i gel lak oslabují.',
        'Nehty nepoužívejte jako nástroj na otevírání plechovek nebo odškrabávání nálepek. Hrozí odlomení nehtu i poškození lakování.',
        'Gel lak nestrhávejte ani neodlupujte, poškodíte tím povrch přirozeného nehtu. Nechte si ho odstranit – v ceníku najdete odstranění Shellac nehtů za 200 Kč a Gellak nehtů za 150 Kč.',
        'Jakmile nehty narostou nebo se lak začne odlupovat, objednejte se na nové lakování.',
      ],
    },
    faq: [
      { q: 'Kolik stojí manikúra v Praze 2?', a: 'Klasická manikúra stojí 350 Kč, manikúra s Gellakem 550 Kč a manikúra s CND Shellac 650 Kč. Výhodné balíčky s hand spa začínají na 490 Kč. Aktuální ceny najdete v <a href="/cenik/">ceníku</a>.' },
      { q: 'Jaký je rozdíl mezi Gellakem a CND Shellacem?', a: 'Oba jsou gel laky vytvrzované v lampě a nanášejí se na podkladovou bázi. CND Shellac je tenký, lehký a působí přirozeně, přírodní nehet se při aplikaci výrazně nepiluje, odstraní se odmočením a vydrží přibližně od 10 dnů do 3 týdnů. Gellak je tvrdší a má vyšší přilnavost, takže obvykle vydrží déle, k odstranění ale často potřebuje elektrickou brusku. Ceny najdete v <a href="/cenik/">ceníku</a>.' },
      { q: 'Jak dlouho gel lak vydrží?', a: 'CND Shellac obvykle vydrží přibližně od 10 dnů do 3 týdnů, Gellak je tvrdší a díky vyšší přilnavosti obvykle vydrží déle. Skutečná výdrž závisí na kvalitě přírodních nehtů i na každodenních návycích – u klientek, které jsou často v kontaktu s vodou nebo čisticími prostředky nebo vykonávají manuální práci, se může lak začít odlupovat dříve. Jakmile nehet naroste, doporučujeme objednat se na odstranění a nové lakování.' },
      { q: 'Co je hand spa?', a: 'Hand spa je hýčkací péče o ruce navíc, kterou si můžete přidat k manikúře ve výhodném balíčku. Konkrétní postup vám rádi upřesníme při objednání.' },
      { q: 'Můžu si nechat odstranit gel lak jinde nalakovaný?', a: 'Ano, odstranění Shellac / Gellak nehtů nabízíme samostatně: Shellac za 200 Kč, Gellak za 150 Kč. Neodlupujte ho prosím sami, poškodíte tím nehet.' },
    ],
    related: ['gelove-akrylove-nehty-praha-2', 'pedikura-praha-2', 'oboci-kosmetika-praha-2'],
  },

  /* ============================================================ GELOVÉ A AKRYLOVÉ NEHTY */
  {
    slug: 'gelove-akrylove-nehty-praha-2', area: 'nails', name: 'Gelové a akrylové nehty', art: 'gelove-nehty', photo: null,
    cardText: 'Nové nehty s barvou, doplnění a Gel X. Zdobení podle přání.',
    title: 'Gelové a akrylové nehty Praha 2 | ICONO STUDIO',
    description: 'Modelace gelových, akrylových a Gel X nehtů na Bělehradské 77 v Praze 2. Nové nehty s barvou od 650 Kč, doplnění od 590 Kč. Zdobení podle přání.',
    h1: 'Gelové a akrylové nehty Praha 2', eyebrow: 'Nails · Bělehradská 77',
    lead: 'Modelace gelových, akrylových a Gel X nehtů s barvou. Nové nehty od 650 Kč, doplnění od 590 Kč, k tomu výhodný balíček s hand spa.',
    imageAlt: 'Gelové nehty různých tvarů – čtvercové, kulaté, oválné, mandlové a coffin',
    artAlt: 'Ilustrace pěti tvarů nehtů: čtvercový, kulatý, oválný, mandlový a coffin',
    groups: ['modelace', 'ostatni', 'zdobeni'],
    intro: {
      h2: 'Modelace nehtů na míru',
      paras: [
        'Umělé nehty vám dodají délku, tvar a pevnost, které přírodní nehty často nemají. Modelace znamená, že nehet vytvarujeme z gelu nebo akrylu přímo na vašem nehtu, v takové délce, tvaru a barvě, jaká vám vyhovuje. Pracujeme v ICONO STUDIO na Bělehradské 77 v Praze 2.',
        'V nabídce máme nové gelové nebo akrylové nehty s barvou, doplnění stávajících nehtů a Gel X nehty. Všechny varianty můžete doplnit zdobením – od jednobarevných akcentů přes francii a ombré až po kamínky a malování. Kompletní ceny jsou v tabulkách níže a v <a href="/cenik/">ceníku</a>.',
      ],
    },
    options: {
      h2: 'Typy umělých nehtů a ceny',
      items: [
        { title: 'Nové gelové nebo akrylové nehty', ids: ['mod-nove', 'mod-pk'], text: 'Kompletní modelace nehtů s barvou. Pokud si ke službě přidáte hand spa v balíčku, zaplatíte o 50 Kč víc než za samotnou modelaci a odejdete s upravenýma, hýčkanýma rukama.' },
        { title: 'Doplnění nehtů', ids: ['mod-dopl', 'mod-pk-dopl'], text: 'S růstem nehtu se posouvá hranice mezi přirozeným nehtem a modelací. Doplnění ji vyrovná, srovná tvar a obnoví barvu. Je levnější než nová modelace.' },
        { title: 'Gel X nehty', ids: ['mod-gelx'], text: 'Moderní technika, při které se nehet prodlužuje předtvarovanými gelovými tipy. Výsledek bývá lehký a přirozeně působící. Cena je stejná jako u nových gelových nebo akrylových nehtů s barvou.' },
      ],
    },
    notes: {
      h2: 'Gel, akryl a Gel X: srovnání materiálů',
      items: [
        { h: 'Gel', paras: [
          'Gel má tekutější nebo hustší konzistenci, je bez výrazného zápachu, má střední tvrdost a vytvrzuje se v UV/LED lampě. Má dobrou přilnavost, hladký a lesklý povrch a na nehtech působí lehce a přirozeně.',
          'Je vhodný především pro nehty bez výraznějších nedokonalostí a pro klientky, které nevykonávají příliš náročnou manuální práci. Gel je pružnější a měkčí, proto bývá jeho odstranění obvykle rychlejší.',
        ] },
        { h: 'Akryl', paras: [
          'Akryl vzniká kombinací akrylového prášku a liquidu. Má charakteristický zápach, je tvrdší a odolnější než gel a vytvrzuje přirozeně na vzduchu bez použití UV/LED lampy.',
          'Je vhodný pro prodlužování nehtů, modelování tvaru, korekci nehtů s různými nedokonalostmi a také pro klientky, které často pracují rukama.',
          'Neexistuje však žádné pravidlo, že na krátké nehty musí být vždy použit gel. Na krátké nehty lze bez problémů aplikovat také tenkou vrstvu akrylu, která nehty zpevní a zároveň zachová přirozený vzhled. To, zda je pro vás vhodnější gel nebo akryl, závisí také na individuálních vlastnostech a kvalitě vašich přírodních nehtů.',
        ] },
        { h: 'Gel X nehty', paras: [
          'Moderní metoda prodlužování nehtů pomocí měkkých celogelových tipů (Soft Gel Tips), která poskytuje přirozený vzhled a velmi lehký pocit na nehtech.',
        ] },
        { h: 'Teplo při vytvrzování gelu v lampě', paras: [
          'Mírný pocit tepla nebo pálení při vytvrzování gelu v lampě je běžnou reakcí. Intenzita tepla se může při jednotlivých návštěvách lišit. Pokud například při aktuální aplikaci cítíte větší teplo než minule, může to být způsobeno tím, že je přírodní nehet po odstranění předchozího materiálu momentálně tenčí, nebo tím, že byla nanesena silnější vrstva gelu.',
          'Pokud je pocit tepla příliš intenzivní, stačí ruku na několik sekund z lampy vytáhnout a poté ji opět vložit zpět.',
        ] },
        { h: 'CND Shellac a gel lak (Gellak)', paras: [
          'Váháte mezi gelem, akrylem a lakováním? CND Shellac je tenký a dá se odmočit, vydrží přibližně od 10 dnů do 3 týdnů. Gel lak (Gellak) je tvrdší, má vyšší přilnavost a obvykle vydrží déle, k odstranění ale často potřebuje brusku. Podrobnosti najdete na stránce <a href="/manikura-praha-2/">Manikúra</a>.',
        ] },
      ] },
    guide: {
      h2: 'Gel, akryl nebo Gel X: co si vybrat?',
      paras: [
        '<strong>Gel</strong> je pružný materiál, který se vytvrzuje v lampě. Nehty z gelu působí lehce a přirozeně, takže se hodí pro každodenní nošení i pro ty, kdo umělé nehty zkoušejí poprvé.',
        '<strong>Akryl</strong> vzniká smícháním tekutiny a prášku a tvrdne na vzduchu. Je pevný a hodí se pro delší nebo výraznější tvary. Při aplikaci je cítit typická vůně.',
        '<strong>Gel X</strong> používá předtvarované gelové tipy. Je to moderní alternativa pro každého, kdo chce prodloužení s lehkým výsledkem.',
        '<strong>Tvar nehtů:</strong> nejčastější jsou čtvercový, kulatý, oválný, mandlový a coffin. Čtvercový a kulatý tvar jsou praktické, oválný a mandlový opticky prodlužují prsty a coffin je výrazný a módní. Tvar vybereme společně, nebo nám pošlete inspiraci na WhatsApp.',
        'Pokud chcete <strong>extra dlouhé nehty</strong>, počítejte s příplatkem – v ceníku je uveden jako 50, 150 a 200 Kč. Nejste si jistí? Napište nám, jak ruce používáte a jak dlouhé nehty si představujete, a doporučíme materiál i tvar.',
      ],
    },
    steps: {
      h2: 'Jak modelace probíhá',
      items: [
        { h: 'Konzultace', t: 'Domluvíme materiál (gel, akryl nebo Gel X), délku, tvar a barvu. Inspirační fotku rádi uvidíme.' },
        { h: 'Příprava nehtu', t: 'Přírodní nehet se upraví a připraví tak, aby modelace dobře držela.' },
        { h: 'Modelace', t: 'Nehet se vytvaruje do požadované délky a tvaru a vytvrdí.' },
        { h: 'Barva a zdobení', t: 'Nehty se obarví a případně ozdobí – třpytky, kamínky, ombré, francie nebo malování.' },
        { h: 'Finální úprava', t: 'Povrch se uhladí a nehty se ošetří, aby výsledek působil čistě a upraveně.' },
      ],
    },
    care: {
      h2: 'Péče a doplňování',
      items: [
        'Doplnění je potřeba obvykle po dvou až čtyřech týdnech, podle toho, jak rychle vám nehty rostou. Včasné doplnění zachová tvar a snižuje riziko zlomení.',
        'Odlepenou část neodtrhávejte – hrozí poškození přirozeného nehtu. Objednejte se na opravu. Když se vám mezi doplněními zlomí nebo odlepí jediný nehet, využijete službu Úprava jednoho nehtu za 70 Kč.',
        'Na kůžičku pravidelně používejte olejíček a při úklidu noste rukavice.',
        'Umělé nehty si nesundávejte sami. Odstranění umělých nehtů stojí 250 Kč.',
        'Pokud chcete změnit barvu, ceník uvádí Změnu barvy u umělých nehtů (pod 10 dní) za 350 Kč. Konkrétní podmínky vám potvrdíme při objednání.',
      ],
    },
    faq: [
      { q: 'Kolik stojí gelové nehty v Praze 2?', a: 'Nové gelové nebo akrylové nehty s barvou stojí 650 Kč, doplnění 590 Kč a Gel X nehty 650 Kč. Výhodný balíček s hand spa je za 700 Kč, jeho doplnění za 650 Kč. Zdobení, extra dlouhé nehty a další služby se platí zvlášť – vše je v <a href="/cenik/">ceníku</a>.' },
      { q: 'Jak často se musí doplňovat umělé nehty?', a: 'Obvykle po dvou až čtyřech týdnech, podle růstu nehtů a toho, jak je používáte. Při objednání zvolíte levnější variantu Doplnění.' },
      { q: 'Jaký je rozdíl mezi gelem a akrylem?', a: 'Gel je pružnější a vytvrzuje se v lampě, akryl je pevnější a tvrdne na vzduchu. Oba materiály dají nehtu délku a tvar, liší se hlavně pocitem při nošení a vhodností pro různé tvary. Rádi doporučíme podle vašeho životního stylu.' },
      { q: 'Co je Gel X?', a: 'Gel X je technika prodloužení pomocí předtvarovaných gelových tipů. Hodí se pro lehký, přirozeně působící výsledek.' },
      { q: 'Kolik stojí odstranění umělých nehtů?', a: 'Odstranění umělých nehtů stojí 250 Kč, odstranění samotného gel laku Shellac 200 Kč a Gellak 150 Kč. Nechte ho prosím provést ve studiu, nesundávejte nehty sami.' },
    ],
    related: ['manikura-praha-2', 'pedikura-praha-2', 'prodluzovani-ras-praha-2'],
  },

  /* ============================================================ PEDIKÚRA */
  {
    slug: 'pedikura-praha-2', area: 'nails', name: 'Pedikúra', art: 'pedikura', photo: null,
    cardText: 'Classic, s gel lakem i medicínální pedikúra Footlogix.',
    title: 'Pedikúra Praha 2 – Classic, Gellak, Footlogix | ICONO STUDIO',
    description: 'Pedikúra na Bělehradské 77 v Praze 2: klasická od 490 Kč, s gel lakem od 590 Kč, medicínální s Footlogix od 750 Kč. Výhodné balíčky s foot spa.',
    h1: 'Pedikúra Praha 2', eyebrow: 'Nails · Bělehradská 77',
    lead: 'Klasická i lakovaná pedikúra a medicínální pedikúra Footlogix na Bělehradské 77. Vyberte si samotnou péči o chodidla, nebo výhodný balíček s foot spa.',
    imageAlt: 'Chodidlo s lakovanými nehty na nohou – pedikúra v ICONO STUDIO',
    artAlt: 'Ilustrace chodidla s nalakovanými nehty na nohou a kapkami',
    groups: ['pedikura'],
    intro: {
      h2: 'Péče o chodidla v centru Prahy 2',
      paras: [
        'Pedikúra není jen věc léta a sandálů. Pravidelná péče o chodidla a nehty na nohou znamená pohodlnější chůzi, hladkou pokožku a upravený vzhled po celý rok. V ICONO STUDIO ji děláme na Bělehradské 77 v Praze 2, kousek od I. P. Pavlova.',
        'V nabídce je klasická pedikúra, pedikúra s lakováním gel lakem Gellak nebo CND Shellac a medicínální pedikúra s produkty Footlogix. Většinu variant najdete také ve výhodných balíčcích s foot spa, tedy s hýčkací péčí o nohy navíc. Všechny ceny jsou níže i v <a href="/cenik/">ceníku</a>.',
      ],
    },
    options: {
      h2: 'Typy pedikúry a ceny',
      items: [
        { title: 'Klasická pedikúra', ids: ['ped-classic', 'ped-pk-classic'], text: 'Základ péče o chodidla: úprava nehtů a kůžiček, odstranění ztvrdlé kůže a ošetření pokožky. Hodí se pro pravidelnou údržbu. V balíčku je navíc foot spa.' },
        { title: 'Pedikúra s lakováním', ids: ['ped-gellak', 'ped-cnd', 'ped-pk-gellak', 'ped-pk-cnd', 'ped-lak'], text: 'Pedikúra spojená s lakováním gel lakem Gellak nebo CND Shellac. Pokud potřebujete nohy jen nabarvit, vyberte samotné lakování. Barva drží několik týdnů a nehty jsou po aplikaci hned suché, takže jsou pohodlné do sandálů i do bot.' },
        { title: 'Medicínální pedikúra Footlogix', ids: ['ped-med-gellak', 'ped-med-cnd', 'ped-pk-fl-gellak', 'ped-pk-fl-cnd'], text: 'Pedikúra s profesionální kosmetikou Footlogix, zaměřená na péči o suchou a namáhanou pokožku nohou, ztvrdlá místa a popraskané paty. Nejde o lékařské ošetření. Lze ji kombinovat s lakováním Gellak nebo CND Shellac.' },
      ],
    },
    notes: {
      h2: 'Footlogix Pedicure: profesionální péče o chodidla',
      items: [
        { h: 'Co je Footlogix Pedicure', paras: [
          'Footlogix Pedicure je profesionální péče zaměřená na intenzivní ošetření chodidel a pat s použitím produktů kanadské značky Footlogix.',
          'Footlogix je renomovaná značka, která patří mezi průkopníky konceptu kombinujícího kosmetickou péči s profesionálním přístupem k problémům pokožky chodidel – tzv. Pediceutical.',
          'Na rozdíl od klasického ošetření pat, při kterém se často používá pouze pilník, bruska nebo dlouhé namáčení ve vodě, se Footlogix zaměřuje na bezpečné a cílené řešení problémů pokožky chodidel.',
        ] },
        { h: 'Pro koho je vhodná', paras: [
          'Ošetření je šetrné, profesionální a může přinášet velmi dobré výsledky.',
          'Je vhodné také pro osoby s citlivou pokožkou a při správném profesionálním použití může být vhodnou volbou také pro klienty s diabetem nebo těhotenskou cukrovkou. V těchto případech doporučujeme vždy předem informovat personál o svém zdravotním stavu.',
        ] },
      ] },
    guide: {
      h2: 'Kterou pedikúru zvolit?',
      paras: [
        'Chcete jen upravené nohy bez barvy? Zvolte <strong>klasickou pedikúru</strong>. Chcete barvu, která vydrží? Vyberte <strong>pedikúru s Gellakem</strong> nebo <strong>CND Shellac</strong>, případně <strong>samotné lakování</strong>, pokud nehty nepotřebují jinou úpravu.',
        'Pokud trápí suché paty, ztvrdlá kůže nebo namáhané nohy, je určená <strong>medicínální pedikúra Footlogix</strong>. A když si chcete odpočinout, přidejte <strong>foot spa</strong> v některém z balíčků.',
        '<strong>Důležité upozornění:</strong> pokud máte cukrovku, plísňové onemocnění nehtů, zánět, rány nebo jiné zdravotní potíže na nohou, poraďte se nejdřív s lékařem. Pedikúra ve studiu nenahrazuje lékařské ošetření.',
      ],
    },
    steps: {
      h2: 'Jak pedikúra probíhá',
      items: [
        { h: 'Domluva a příprava', t: 'Zvolíme variantu a probereme případné potíže, například suché paty nebo zarůstající nehty. U balíčků je součástí návštěvy foot spa.' },
        { h: 'Úprava nehtů a kůžiček', t: 'Nehty se zkrátí, zformují a upraví se kůžička kolem nich.' },
        { h: 'Péče o pokožku chodidel', t: 'Odstraní se ztvrdlá kůže a pokožka se ošetří. U medicínální pedikúry přidáváme produkty Footlogix.' },
        { h: 'Lakování (volitelně)', t: 'Nehty nalakujeme gel lakem Gellak nebo CND Shellac a vytvrdíme v lampě.' },
        { h: 'Finální péče', t: 'Na závěr se nohy ošetří, aby byly hladké a upravené.' },
      ],
    },
    care: {
      h2: 'Péče o nohy po pedikúře',
      items: [
        'Každý den na paty a chodidla používejte hydratační krém. Pokožka pak zůstane hladká a méně se tvoří ztvrdlá místa.',
        'Nosíte-li uzavřenou obuv, vybírejte ji s dostatečným prostorem pro prsty. Tlak je častou příčinou ztvrdlé kůže i zarůstání nehtů.',
        'V bazénech, saunách a veřejných sprchách nechoďte naboso – chrání to před plísněmi.',
        'Na pravidelnou pedikúru se obvykle objednávejte po čtyřech až šesti týdnech, podle rychlosti růstu nehtů a toho, jak nohy zatěžujete.',
        'Gel lak neodlupujte. Nechte si ho odstranit (Shellac 200 Kč, Gellak 150 Kč), poškození nehtu tím předejdete.',
      ],
    },
    faq: [
      { q: 'Kolik stojí pedikúra v Praze 2?', a: 'Klasická pedikúra stojí 490 Kč, pedikúra s Gellakem 590 Kč a pedikúra s CND Shellac 650 Kč. Medicínální pedikúra Footlogix začíná na 750 Kč. Výhodné balíčky s foot spa jsou od 590 Kč. Kompletní ceny jsou v <a href="/cenik/">ceníku</a>.' },
      { q: 'Co je Footlogix?', a: 'Footlogix je řada profesionální kosmetiky pro péči o nohy, určená zejména pro suchou a namáhanou pokožku. V našem ceníku je medicínální pedikúra Footlogix k dispozici s lakováním Gellak nebo CND Shellac.' },
      { q: 'Jak často chodit na pedikúru?', a: 'Obvykle jednou za čtyři až šest týdnů, podle růstu nehtů a toho, jak nohy zatěžujete. Pokud máte lakované nehty, počítejte s udržováním podle toho, jak dlouho vám lak drží.' },
      { q: 'Mohu přijít na pedikúru s cukrovkou nebo plísní nehtů?', a: 'Nejdřív se prosím poraďte s lékařem. Pedikúra ve studiu je kosmetická péče a nenahrazuje lékařské ošetření. Před návštěvou nám případné zdravotní potíže napište.' },
      { q: 'Jak dlouho lak na nohou vydrží?', a: 'Záleží na rychlosti růstu nehtů, na obuvi, kterou nosíte, a na zvoleném laku – CND Shellac je tenčí a snáz se odmočí, Gellak je tvrdší a obvykle vydrží déle.' },
      { q: 'Je pedikúra Footlogix vhodná pro diabetiky?', a: 'Při správném profesionálním použití může být vhodnou volbou také pro klienty s diabetem nebo těhotenskou cukrovkou. V těchto případech doporučujeme vždy předem informovat personál o svém zdravotním stavu.' },
    ],
    related: ['manikura-praha-2', 'head-spa-praha-2', 'gelove-akrylove-nehty-praha-2'],
  },

  /* ============================================================ PRODLUŽOVÁNÍ ŘAS */
  {
    slug: 'prodluzovani-ras-praha-2', area: 'beauty', name: 'Prodlužování řas', art: 'prodluzovani-ras', photo: null,
    cardText: 'Klasické 1:1, Volume 2D–5D, Mega Volume a designové efekty.',
    title: 'Prodlužování řas Praha 2 | Klasika i Volume | ICONO STUDIO',
    description: 'Prodlužování řas na Bělehradské 77 v Praze 2: klasické 1:1 od 990 Kč, Volume 2D–5D od 1 190 Kč, Mega Volume od 1 390 Kč. Doplnění od 790 Kč.',
    h1: 'Prodlužování řas Praha 2', eyebrow: 'Beauty · Bělehradská 77',
    lead: 'Klasické řasy 1:1, Volume 2D–5D, Mega Volume i designové efekty. Nové nasazení od 990 Kč, doplnění od 790 Kč.',
    imageAlt: 'Oko s dlouhými prodlouženými řasami a obočím',
    artAlt: 'Ilustrace oka s dlouhými řasami a obočím',
    groups: ['rasy'],
    intro: {
      h2: 'Výraznější pohled bez řasenky',
      paras: [
        'Prodlužování řas spočívá v tom, že se na přirozenou řasu připevní umělá. Výsledkem jsou delší, hustší a výraznější řasy, díky kterým se ráno obejdete bez řasenky i kulmy na řasy. Prodlužování řas děláme v ICONO STUDIO na Bělehradské 77 v Praze 2.',
        'Ceník rozlišuje <strong>nový set</strong> a <strong>doplnění</strong>. Nový set je kompletní nasazení řas, doplnění je pravidelná údržba, kdy se doplní řasy, které mezitím vypadly. Doplnění je levnější. Všechny ceny najdete níže i v <a href="/cenik/">ceníku</a>.',
      ],
    },
    options: {
      h2: 'Typy řas a ceny',
      items: [
        { title: 'Klasické řasy 1:1', ids: ['ras-klasik'], text: 'Na každou přirozenou řasu se aplikuje jedna umělá řasa. Výsledek je přirozený – jemné prodloužení a zahuštění. Hodí se, pokud nechcete dramatický efekt, a je dobrou volbou pro první návštěvu.' },
        { title: 'Volume řasy 2D–5D', ids: ['ras-volume'], text: 'Z několika tenkých řas se vytvoří vějířek, který se nasadí na jednu přirozenou řasu. 2D znamená vějířek ze dvou řas, 5D z pěti – čím vyšší číslo, tím hustší a výraznější efekt.' },
        { title: 'Mega Volume řasy', ids: ['ras-mega'], text: 'Ještě hustší vějířky z více jemných řas pro maximální hustotu a výrazný, plný pohled.' },
        { title: 'Designový efekt a odstranění', ids: ['ras-design', 'ras-odstr'], text: 'Prodloužení řas se speciálním efektem, který domluvíme při objednání. Pokud chcete řasy sundat, nechte odstranění na nás – doma by hrozilo poškození přirozených řas.' },
      ],
    },
    notes: {
      h2: 'Designové řasy a zdraví vašich řas',
      items: [
        { h: 'Designové prodlužování řas', paras: [
          'Designové řasy mají specifické vrstvení a výraznější tvar, proto vypadají nejlépe při pravidelném pročesávání a úpravě. Tento typ řas vyžaduje ze strany klientky o něco pečlivější každodenní péči.',
          'Pokud si přejete, aby řasy vydržely krásné přibližně 3–4 týdny a zároveň jste nemuseli každý den věnovat mnoho času jejich úpravě, rádi vám doporučíme jednodušší styly, například Classic nebo Volume, které mohou lépe odpovídat vašim potřebám.',
        ] },
        { h: 'Zdraví přírodních řas je na prvním místě', paras: [
          'Zdraví vašich přírodních řas je pro nás vždy na prvním místě.',
          'Pokud jsou vaše přírodní řasy jemné, slabé nebo řídké, příliš husté nebo dlouhé prodloužení může vytvářet nadměrnou zátěž. Přírodní řasy se pak mohou snadněji lámat, vypadávat a jejich regenerace může trvat déle.',
          'V takovém případě vám doporučíme lehčí a přirozenější styl řas, který zvýrazní tvar vašich očí a zároveň pomůže chránit vaše přírodní řasy.',
          'Pokud jsou přírodní řasy příliš oslabené, doporučujeme prodloužené řasy dočasně odstranit a určitou dobu používat sérum nebo jinou péči na posílení řas. Po jejich regeneraci lze řasy opět bezpečně prodloužit.',
        ] },
        { h: 'Velmi husté prodloužení na přání', paras: [
          'Pokud má klientka slabé nebo jemné přírodní řasy, ale přesto si přeje velmi husté prodloužení, službu můžeme provést podle jejího přání po předchozí konzultaci a vysvětlení možných rizik.',
          'Před aplikací bude klientka požádána o podpis potvrzení o provedené konzultaci.',
          'Na případy lámání nebo vypadávání přírodních řas, které vzniknou v důsledku nadměrného zatížení na základě individuálního přání klientky, se nevztahuje naše záruka ani nárok na kompenzaci.',
        ] },
      ] },
    guide: {
      h2: 'Jak si vybrat typ řas',
      paras: [
        'Pokud chcete <strong>přirozený vzhled</strong>, zvolte klasické řasy 1:1. Pokud chcete <strong>hustší a výraznější pohled</strong>, vyberte Volume 2D–5D – stupeň si zvolíte podle toho, jak výrazný efekt chcete. Pro nejplnější a nejhustší výsledek je tu Mega Volume.',
        'Pokud od poslední návštěvy uplynula delší doba a řas zbylo už jen málo, může být vhodnější nový set než doplnění – poradíme vám při objednání.',
        '<strong>Příprava na návštěvu:</strong> přijďte bez make-upu očí a bez řasenky. Pokud máte citlivé oči, alergii, nosíte kontaktní čočky nebo jste prodělali operaci očí, napište nám to předem.',
      ],
    },
    steps: {
      h2: 'Jak aplikace probíhá',
      items: [
        { h: 'Konzultace', t: 'Probereme typ řas, délku a zakřivení podle vašeho přání a tvaru oka.' },
        { h: 'Příprava', t: 'Přirozené řasy se očistí a připraví na aplikaci.' },
        { h: 'Aplikace', t: 'Umělé řasy se nasazují postupně na přirozené, podle zvolené techniky.' },
        { h: 'Kontrola a instrukce', t: 'Na závěr zkontrolujeme výsledek a řekneme vám, jak o řasy pečovat.' },
      ],
    },
    care: {
      h2: 'Péče o prodloužené řasy',
      items: [
        'První den po aplikaci se vyhněte vodě a páře – lepidlo potřebuje čas na plné zatvrdnutí.',
        'Na oční okolí nepoužívejte oleje a mastné krémy. Olej oslabuje lepidlo a řasy by se rychleji uvolnily.',
        'Řasy denně pročesávejte čistým kartáčkem, aby se nelepily a držely tvar.',
        'Netřete si oči a řasy netrhejte. Mechanickou kulmu na řasy nepoužívejte.',
        'Doma je neodstraňujte. Odstranění prodloužených řas stojí 200 Kč.',
        'Doplnění se obvykle objednává po dvou až čtyřech týdnech – přirozené řasy se vyměňují a umělé s nimi postupně vypadávají.',
      ],
    },
    faq: [
      { q: 'Kolik stojí prodlužování řas v Praze 2?', a: 'Klasické řasy 1:1 stojí 990 Kč (doplnění 790 Kč), Volume řasy 2D–5D 1 190 Kč (doplnění 990 Kč) a Mega Volume 1 390 Kč (doplnění 1 090 Kč). Designový efekt začíná na 1 190 Kč, odstranění stojí 200 Kč. Vše je v <a href="/cenik/">ceníku</a>.' },
      { q: 'Jak dlouho prodloužené řasy vydrží?', a: 'Umělé řasy vypadávají společně s přirozenými v jejich růstovém cyklu, proto se doplňují obvykle po dvou až čtyřech týdnech. Doba se liší člověk od člověka.' },
      { q: 'Jaký je rozdíl mezi klasickými a Volume řasami?', a: 'U klasických řas se na jednu přirozenou řasu aplikuje jedna umělá. U Volume se na ni nasadí vějířek z více tenkých řas, výsledek je hustší a výraznější.' },
      { q: 'Poškodí prodlužování mé přirozené řasy?', a: 'Při správné aplikaci a péči by přirozené řasy poškozeny být neměly. Proto je důležité řasy doma neodstraňovat ani netrhat a svěřit odstranění studiu.' },
      { q: 'Co když mám citlivé oči nebo alergii?', a: 'Napište nám to předem. Při citlivých očích, alergii nebo zdravotních potížích se před aplikací poraďte také s lékařem.' },
    ],
    related: ['oboci-kosmetika-praha-2', 'head-spa-praha-2', 'manikura-praha-2'],
  },

  /* ============================================================ OBOČÍ A KOSMETIKA */
  {
    slug: 'oboci-kosmetika-praha-2', area: 'beauty', name: 'Obočí a kosmetika', art: 'oboci-kosmetika', photo: null,
    cardText: 'Úprava a barvení obočí, péče o obličej a masáž.',
    title: 'Úprava a barvení obočí Praha 2 | ICONO STUDIO',
    description: 'Úprava a barvení obočí od 100 Kč a péče o obličej s masáží za 750 Kč na Bělehradské 77 v Praze 2. Objednejte se přes WhatsApp, SMS nebo telefon.',
    h1: 'Obočí a kosmetika Praha 2', eyebrow: 'Beauty · Bělehradská 77',
    lead: 'Úprava a barvení obočí a kosmetická péče o obličej s masáží. Obočí od 100 Kč, péče o obličej 750 Kč.',
    imageAlt: 'Upravené obočí, pinzeta a kosmetický krém',
    artAlt: 'Ilustrace upraveného obočí, pinzety a kelímku s krémem',
    groups: ['oboci', 'kosmetika'],
    intro: {
      h2: 'Obočí, které sedí k obličeji',
      paras: [
        'Obočí rámuje obličej a výrazně mění jeho výraz. Správně vytvarované obočí zvýrazní oči, sjednotí vzhled a ušetří vám ranní líčení. V ICONO STUDIO na Bělehradské 77 v Praze 2 nabízíme úpravu obočí i barvení spojené s úpravou.',
        'K tomu přidáváme kosmetickou péči: <strong>péči o obličej a masáž</strong>. Je to příjemný způsob, jak pleti věnovat pozornost – a kromě ní i sobě. Ceny najdete níže a v <a href="/cenik/">ceníku</a>.',
      ],
    },
    options: {
      h2: 'Služby a ceny',
      items: [
        { title: 'Úprava obočí', ids: ['ob-uprava'], text: 'Vytvarování obočí podle tvaru obličeje a vašich představ. Hodí se pro pravidelnou údržbu, aby obočí zůstalo upravené.' },
        { title: 'Barvení a úprava obočí', ids: ['ob-barveni'], text: 'Úprava tvaru spojená s barvením. Barva sjednotí odstín, zvýrazní tvar a pomáhá, když je obočí světlé nebo řídké.' },
        { title: 'Péče o obličej a masáž', ids: ['kos-oblicej'], text: 'Kosmetické ošetření obličeje spojené s masáží. Přesný postup přizpůsobujeme typu pleti, takže nám při objednání napište, co vaše pleť potřebuje.' },
      ],
    },
    guide: {
      h2: 'Úprava, nebo barvení s úpravou?',
      paras: [
        'Pokud máte hustší a dostatečně tmavé obočí, často stačí samotná <strong>úprava</strong>. Pokud je obočí světlé, nestejnoměrné nebo řídké, vyplatí se <strong>barvení s úpravou</strong>. Rozdíl v ceně je 100 Kč.',
        'Obočí se obvykle upravuje jednou za tři až pět týdnů, podle růstu chloupků. Před důležitou událostí raději počítejte s termínem několik dní předem, aby obočí stihlo dostat přirozený vzhled.',
        '<strong>Barvení – co čekat:</strong> barva sjednotí odstín obočí, zvýrazní jeho tvar a vizuálně ho zahustí. Hodí se, pokud se vám obočí na obličeji „ztrácí“, nebo nechcete každé ráno používat tužku či stíny. Odstín vybereme podle barvy vlasů a vašeho přání.',
        '<strong>Péče o obličej – pro koho:</strong> pro každého, kdo chce pleti věnovat víc než běžné mytí a krém. Masáž obličeje navíc přináší příjemné uvolnění. Napište nám, co vaše pleť potřebuje, a postup přizpůsobíme.',
        'Obočí se skvěle doplňuje s <a href="/prodluzovani-ras-praha-2/">prodlužováním řas</a> – obojí společně dává pohledu jasný rám. A pokud si chcete dopřát víc, podívejte se na <a href="/head-spa-praha-2/">Head Spa</a>.',
      ],
    },
    steps: {
      h2: 'Jak návštěva probíhá',
      items: [
        { h: 'Domluva tvaru', t: 'Společně vybereme tvar obočí podle tvaru obličeje a vašeho přání.' },
        { h: 'Úprava', t: 'Obočí se vytvaruje a zbaví nežádoucích chloupků.' },
        { h: 'Barvení (volitelně)', t: 'Pokud jste zvolili barvení, barva se nanese a nechá působit, aby se jí obočí dobře ujalo.' },
        { h: 'Péče o obličej (volitelně)', t: 'Součástí návštěvy může být i péče o obličej a masáž.' },
      ],
    },
    care: {
      h2: 'Péče po úpravě a po barvení',
      items: [
        'Po úpravě se prvních několik hodin vyhněte líčení v oblasti obočí, aby pokožka nebyla podrážděná.',
        'Po barvení obočí nepoužívejte hned intenzivní peeling a vyhýbejte se saunám, aby barva držela déle.',
        'Pokud máte alergii nebo citlivou pokožku, napište nám to před barvením.',
        'K péči o obličej přijďte raději bez make-upu, aby se pleť mohla dobře očistit.',
        'Mezi návštěvami obočí raději sami nevytrhávejte. Tvar, který jsme společně vytvořili, tak zůstane čistý a udržíte ho při příští návštěvě.',
      ],
    },
    faq: [
      { q: 'Kolik stojí úprava obočí v Praze 2?', a: 'Samotná úprava obočí stojí 100 Kč, barvení spojené s úpravou 200 Kč. Péče o obličej s masáží stojí 750 Kč. Vše najdete v <a href="/cenik/">ceníku</a>.' },
      { q: 'Jak dlouho barva na obočí vydrží?', a: 'Obvykle několik týdnů, podle typu pleti a péče. Barva se postupně vytrácí, proto se barvení opakuje společně s úpravou.' },
      { q: 'Co všechno péče o obličej zahrnuje?', a: 'Je to kosmetické ošetření obličeje spojené s masáží. Postup přizpůsobujeme typu pleti a rádi vám ho upřesníme při objednání.' },
      { q: 'Jak často chodit na úpravu obočí?', a: 'Obvykle jednou za tři až pět týdnů, podle toho, jak rychle vám chloupky dorůstají.' },
      { q: 'Pro koho je barvení obočí vhodné?', a: 'Pro každého, kdo má světlé, nestejnoměrné nebo řídké obočí a chce výraznější tvar bez každodenního líčení. Pokud máte alergii na barvy, napište nám to předem.' },
      { q: 'Můžu přijít s make-upem?', a: 'Na úpravu obočí ano, na péči o obličej a masáž ale raději bez make-upu. Pokožka se tak lépe očistí a ošetření je účinnější.' },
    ],
    related: ['prodluzovani-ras-praha-2', 'head-spa-praha-2', 'manikura-praha-2'],
  },

  /* ============================================================ HEAD SPA */
  {
    slug: 'head-spa-praha-2', area: 'beauty', name: 'Head Spa', art: 'head-spa', photo: null,
    cardText: 'Relaxační péče o pokožku hlavy, masáž a regenerační olej.',
    title: 'Head Spa Praha 2 | Péče o pokožku hlavy | ICONO STUDIO',
    description: 'Head Spa na Bělehradské 77 v Praze 2 za 890 Kč: bílý zvuk, akupunkturní body, exfoliace pokožky hlavy, asijské mytí s masáží a regenerační olej.',
    h1: 'Head Spa Praha 2', eyebrow: 'Beauty · Bělehradská 77',
    lead: 'Relaxační péče o pokožku hlavy a vlasy za 890 Kč: terapie bílým zvukem, masáž, exfoliace, asijské mytí vlasů a regenerační olej.',
    imageAlt: 'Ilustrace pokožky hlavy s body pro masáž a kapkami',
    artAlt: 'Ilustrace pokožky hlavy s akupunkturními body, vlnami zvuku a kapkami vody',
    groups: ['headspa'],
    intro: {
      h2: 'Chvíle jen pro vaši hlavu',
      paras: [
        'Head Spa je péče, která spojuje relaxaci s pečující rutinou pro pokožku hlavy a vlasy. Pomalé tempo, příjemný zvuk, masáž a voda – po návštěvě odcházíte uvolnění. Dopřát si ji můžete v ICONO STUDIO na Bělehradské 77 v Praze 2.',
        'Služba stojí 890 Kč a zahrnuje pět kroků. Níže najdete, co obsahují a k čemu slouží. Kompletní ceník je na stránce <a href="/cenik/">Ceník</a>.',
      ],
    },
    options: {
      h2: 'Co Head Spa obsahuje',
      items: [
        { title: 'Terapie bílým zvukem', ids: [], text: 'Jednotvárný uklidňující zvuk, který tlumí okolní ruch a pomáhá se uvolnit. Tvoří klidný zvukový podklad celé péče.' },
        { title: 'Ošetření akupunkturních bodů na hlavě', ids: [], text: 'Cílený tlak na vybrané body na hlavě, který se používá k uvolnění napětí.' },
        { title: 'Exfoliace pokožky hlavy', ids: [], text: 'Jemný peeling, který pomáhá očistit pokožku hlavy od nečistot a zbytků stylingových produktů.' },
        { title: 'Asijská technika mytí vlasů a masáže hlavy', ids: [], text: 'Pomalé, rytmické mytí spojené s masáží. Je to hlavní relaxační část péče.' },
        { title: 'Foukání a regenerační olej', ids: [], text: 'Vlasy se vyfoukají (bez stylingu) a ošetří vlasovým regeneračním olejem. Odcházíte s hladkými a upravenými vlasy.' },
      ],
    },
    price: 'hs',
    guide: {
      h2: 'Pro koho je Head Spa vhodné',
      paras: [
        'Head Spa je pro každého, kdo si chce odpočinout, pečovat o pokožku hlavy a vlasy nebo si dopřát chvíli bez spěchu. Hodí se po náročném týdnu, jako dárek pro blízkého člověka, nebo jako pravidelný rituál péče o sebe.',
        'Nejde o léčebný zákrok. Pokud máte problémy s pokožkou hlavy, například ekzém nebo lupénku, nebo je pokožka citlivá a podrážděná, napište nám to předem a poraďte se i s lékařem.',
        '<strong>Jak často?</strong> Podle chuti i potřeby. Někdo si Head Spa dopřává jako pravidelný rituál, jiný při zvláštních příležitostech nebo jako dárek pro blízkého člověka. Doporučení vám rádi dáme přímo při návštěvě.',
        'Foukání vlasů je součástí péče, ale bez stylingu. Pokud chcete vlasy pro konkrétní příležitost upravit, podívejte se na <a href="/panska-kosmetika-praha-2/">mytí hlavy a masáž hlavy</a> nebo na <a href="/panske-strihy-praha-2/">pánské střihy</a>.',
      ],
    },
    care: {
      h2: 'Na co myslet před a po návštěvě',
      items: [
        'Před návštěvou nemusíte nic speciálního dělat. Přijďte odpočatí a v pohodlném oblečení.',
        'Po návštěvě vlasy zbytečně nezatěžujte těžkými stylingovými produkty, ať regenerační olej působí.',
        'Pokud máte citlivou pokožku hlavy nebo alergii na kosmetické přípravky, dejte nám vědět předem.',
        'Přijďte s dostatečnou časovou rezervou. Head Spa je pomalá péče, kterou je lepší si užít bez spěchu – délku návštěvy vám upřesníme při objednání.',
        'Head Spa můžete kombinovat s dalšími službami, například s <a href="/manikura-praha-2/">manikúrou</a> nebo <a href="/pedikura-praha-2/">pedikúrou</a>, a udělat si ze své návštěvy kompletní chvíli pro sebe.',
      ],
    },
    faq: [
      { q: 'Kolik stojí Head Spa v Praze 2?', a: 'Head Spa stojí 890 Kč. Zahrnuje terapii bílým zvukem, ošetření akupunkturních bodů na hlavě, exfoliaci pokožky hlavy, asijské mytí vlasů a masáž hlavy a foukání vlasů s aplikací regeneračního oleje.' },
      { q: 'Je součástí Head Spa i styling vlasů?', a: 'Vlasy se vyfoukají, ale bez stylingu. Pokud chcete vlasy pro konkrétní příležitost upravit, domluvte se s námi při objednání.' },
      { q: 'Je Head Spa vhodné při problémech s pokožkou hlavy?', a: 'Je to relaxační a pečující služba, nikoli léčba. Při ekzému, lupénce nebo podráždění se nejdřív poraďte s lékařem a dejte nám vědět při objednání.' },
      { q: 'Jak často je vhodné Head Spa opakovat?', a: 'Podle vaší chuti a potřeby – někdo si ho dopřává pravidelně, jiný při zvláštních příležitostech. Doporučení vám rádi dáme při návštěvě.' },
      { q: 'Je Head Spa vhodné pro všechny typy vlasů?', a: 'Péče je určena pro pokožku hlavy a vlasy obecně. Pokud máte vlasy barvené nebo poškozené, nebo citlivou pokožku hlavy, napište nám to – rádi poradíme.' },
      { q: 'Co je terapie bílým zvukem?', a: 'Je to jednotvárný, uklidňující zvukový podklad, který tlumí okolní ruch a pomáhá se uvolnit.' },
    ],
    related: ['panska-kosmetika-praha-2', 'prodluzovani-ras-praha-2', 'pedikura-praha-2'],
  },

  /* ============================================================ PÁNSKÝ STŘIH */
  {
    slug: 'panske-strihy-praha-2', area: 'barber', name: 'Pánský střih', art: 'pansky-strih', photo: null,
    cardText: 'Klasický, Premium a VIP cuts. Studenti a děti za zvýhodněnou cenu.',
    title: 'Pánský střih Praha 2 | Barber cuts od 540 Kč | ICONO STUDIO',
    description: 'Pánský střih v barbershopu na Bělehradské 77 v Praze 2: Klasický cut 640 Kč, Premium 770 Kč, VIP 990 Kč. Studenti od 540 Kč, děti do 8 let 400 Kč.',
    h1: 'Pánský střih Praha 2', eyebrow: 'Barber · Bělehradská 77',
    lead: 'Barber cuts od klasického střihu po VIP All Inclusive. Styling a balzám nebo kolínská jsou v ceně, každé dva týdny o 100 Kč levněji.',
    imageAlt: 'Barber upravuje boky a zátylek strojkem při pánském střihu',
    artAlt: 'Ilustrace nůžek a hřebenu – pánský střih v barbershopu',
    groups: ['cuts'],
    intro: {
      h2: 'Barbershop v centru Prahy 2',
      paras: [
        'ICONO STUDIO je barbershop a nehtové studio v jednom, na Bělehradské 77 v Praze 2, kousek od I. P. Pavlova a náměstí Míru. Pánské střihy děláme jako ucelenou službu: nejen samotný střih, ale i styling a balzám nebo kolínská na závěr. Podle varianty k tomu přidáváme mytí hlavy, masáž nebo úpravu vousů.',
        'Barber cuts jsou rozdělené do několika úrovní, takže si vyberete přesně to, co potřebujete. Najdete tu i zvýhodněné varianty pro studenty a děti. Všechny ceny jsou níže a v <a href="/cenik/">ceníku</a>.',
      ],
    },
    options: {
      h2: 'Barber cuts a ceny',
      items: [
        { title: 'Studentský cut do 18 let', ids: ['cut-student'], text: 'Zvýhodněný střih pro mladé zákazníky do 18 let. Zahrnuje střih, styling a balzám nebo kolínskou.' },
        { title: 'Klasický Cut', ids: ['cut-klasicky'], text: 'Základní barber střih s mytím hlavy. Pro každého, kdo chce prostě dobrý střih a upravený výsledek.' },
        { title: 'Premium Cut', ids: ['cut-premium'], text: 'Klasický cut navíc s masáží. Pro ty, kdo si chtějí návštěvu užít víc.' },
        { title: 'VIP Cut', ids: ['cut-vip'], text: 'Mytí hlavy, střih a úprava vousů v jedné návštěvě – vlasy i vousy sladěné do jednoho tvaru.' },
        { title: 'VIP All Inclusive', ids: ['cut-vip-all'], text: 'Nejkompletnější balíček: mytí hlavy, střih, vousy i masáž, k tomu styling a balzám nebo kolínská.' },
        { title: 'Děti do 8 let', ids: ['cut-deti'], text: 'Střih pro nejmenší zákazníky do 8 let.' },
      ],
    },
    guide: {
      h2: 'Který cut vybrat?',
      paras: [
        'Chcete jednoduše dobrý střih? Zvolte <strong>Klasický Cut</strong>. Chcete k tomu relaxaci? Vyberte <strong>Premium Cut</strong>, který navíc zahrnuje masáž. Pokud potřebujete upravit i vousy, vezměte <strong>VIP Cut</strong>, a když si chcete užít všechno, je tu <strong>VIP All Inclusive</strong>.',
        '<strong>Chodíte pravidelně?</strong> Každé dva týdny stříhání zlevňuje všechny cuts o 100 Kč. Podrobnosti k slevě vám rádi upřesníme na místě. Pravidelný střih je nejjednodušší způsob, jak mít stále upravený vzhled.',
        '<strong>Jak se připravit:</strong> přijďte s představou nebo s fotkou střihu, který se vám líbí. Barber vám řekne, co se k vašim vlasům a tvaru hlavy hodí, a poradí se stylingem na doma.',
      ],
    },
    steps: {
      h2: 'Jak návštěva barbera probíhá',
      items: [
        { h: 'Konzultace', t: 'Řeknete, co chcete, nebo ukážete fotku. Barber poradí, co vám sedne.' },
        { h: 'Mytí hlavy', t: 'U cutů, které mytí zahrnují (Klasický, Premium, VIP, VIP All Inclusive).' },
        { h: 'Střih', t: 'Střih na míru nůžkami a strojkem podle dohodnutého tvaru.' },
        { h: 'Vousy a masáž', t: 'U VIP Cutu úprava vousů, u Premium a VIP All Inclusive masáž.' },
        { h: 'Styling a finish', t: 'Styling a balzám nebo kolínská – takhle odcházíte upravení.' },
      ],
    },
    care: {
      h2: 'Jak udržet střih doma',
      items: [
        'Vlasy myjte šamponem, který vám vyhovuje, a pravidelně používejte stylingový produkt – barber vám poradí který.',
        'Na střih se objednávejte pravidelně, podle délky vlasů obvykle po třech až čtyřech týdnech. Kratší střihy s přechody je dobré osvěžovat o něco častěji.',
        'Pokud máte vousy, doplňte střih o jejich úpravu – VIP Cut obojí spojuje.',
        'Chodíte-li každé dva týdny, využijte slevu 100 Kč na všechny cuts.',
      ],
    },
    faq: [
      { q: 'Kolik stojí pánský střih v Praze 2?', a: 'Klasický Cut stojí 640 Kč, Premium Cut 770 Kč, VIP Cut 990 Kč a VIP All Inclusive 1 190 Kč. Studentský cut do 18 let začíná na 540 Kč a střih pro děti do 8 let stojí 400 Kč. Aktuální ceny najdete v <a href="/cenik/">ceníku</a>.' },
      { q: 'V čem se liší Klasický a Premium Cut?', a: 'Oba zahrnují mytí hlavy, střih, styling a balzám nebo kolínskou. Premium Cut navíc obsahuje masáž.' },
      { q: 'Je v ceně VIP Cutu úprava vousů?', a: 'Ano. VIP Cut zahrnuje mytí hlavy, střih, vousy, styling a balzám nebo kolínskou. VIP All Inclusive k tomu přidává masáž.' },
      { q: 'Platí zvýhodněná cena pro studenty?', a: 'Ano, Studentský cut do 18 let začíná na 540 Kč a zahrnuje střih, styling a balzám nebo kolínskou.' },
      { q: 'Je nějaká sleva pro stálé zákazníky?', a: 'Při stříhání každé dva týdny platí sleva 100 Kč na všechny cuts. Podrobnosti vám rádi upřesníme.' },
    ],
    related: ['uprava-vousu-praha-2', 'panska-kosmetika-praha-2', 'head-spa-praha-2'],
  },

  /* ============================================================ ÚPRAVA VOUSŮ */
  {
    slug: 'uprava-vousu-praha-2', area: 'barber', name: 'Úprava vousů', art: 'uprava-vousu', photo: null,
    cardText: 'Tvarování vousů strojkem, timerem a žiletkou, balzám v ceně.',
    title: 'Úprava vousů Praha 2 | Barber od 200 Kč | ICONO STUDIO',
    description: 'Úprava vousů v barbershopu na Bělehradské 77 v Praze 2: kompletní úprava se strojkem, timerem a žiletkou za 420 Kč, samotný timer 200 Kč.',
    h1: 'Úprava vousů Praha 2', eyebrow: 'Barber · Bělehradská 77',
    lead: 'Čistý tvar, precizní linie a upravené vousy. Úprava vousů 420 Kč, samotný timer 200 Kč, střih s vousy ve VIP cutu.',
    imageAlt: 'Břitva a štětka na holení',
    artAlt: 'Ilustrace žiletky a štětky na holení – úprava vousů v barbershopu',
    groups: ['vousy'],
    intro: {
      h2: 'Vousy, které mají tvar',
      paras: [
        'Dobře upravené vousy poznáte na první pohled: čisté linie, pravidelný tvar a vousy, které se k obličeji hodí. V ICONO STUDIO na Bělehradské 77 v Praze 2 je upravíme tak, aby působily svěže a udržovaně.',
        'Nabízíme kompletní úpravu vousů a samostatný timer pro rychlé doladění. Pokud si chcete nechat upravit i vlasy, najdete vousy také ve VIP Cutu. Ceny jsou níže a v <a href="/cenik/">ceníku</a>.',
      ],
    },
    options: {
      h2: 'Služby a ceny',
      items: [
        { title: 'Úprava vousů', ids: ['vous-uprava'], text: 'Kompletní úprava vousů: tvarování strojkem a timerem, dotažení linií shaverem nebo žiletkou a závěrečný balzám nebo kolínská. Vhodná, když chcete vousům dát nový tvar nebo je dostat do pořádku.' },
        { title: 'Jenom Timer', ids: ['vous-timer'], text: 'Rychlé doladění timerem. Hodí se jako udržovací úprava mezi kompletními návštěvami.' },
        { title: 'Střih s vousy', ids: ['cut-vip', 'cut-vip-all'], text: 'Chcete upravit vlasy i vousy najednou? VIP Cut a VIP All Inclusive zahrnují obojí, takže všechno naladíte do jednoho tvaru za jednu návštěvu.' },
      ],
    },
    guide: {
      h2: 'Jak vybrat tvar vousů',
      paras: [
        'Tvar vousů se vyplatí volit podle tvaru obličeje. U <strong>kulatějšího obličeje</strong> obvykle funguje o něco delší brada a ostřejší linie, které obličej opticky prodlouží. U <strong>hranatého obličeje</strong> se hodí zaoblenější tvary, které zjemní čelist. U <strong>delšího obličeje</strong> bývá lepší kratší brada a plnější boky.',
        'Barber vám při konzultaci poradí, co se k vašemu obličeji a hustotě vousů hodí. Pokud máte inspiraci, přineste fotku.',
        '<strong>Žiletka a citlivá pokožka:</strong> dotažení linií žiletkou nebo shaverem dává nejostřejší výsledek, ale pokožku může podráždit. Pokud máte citlivou pleť, zarůstající chloupky nebo sklony k zarudnutí, řekněte to barberovi – přizpůsobí se.',
        '<strong>Jak dlouho vousy růst před první úpravou?</strong> Obvykle stačí několik týdnů, aby bylo z čeho tvar vytvořit. Barber pozná, zda je vhodné ještě počkat.',
      ],
    },
    steps: {
      h2: 'Jak úprava vousů probíhá',
      items: [
        { h: 'Konzultace', t: 'Domluvíte si délku, tvar a linie.' },
        { h: 'Tvarování', t: 'Vousy se zkrátí a vytvarují strojkem a timerem.' },
        { h: 'Linie a detaily', t: 'Okraje se dotáhnou shaverem nebo žiletkou, aby byly čisté a ostré.' },
        { h: 'Závěr', t: 'Pokožka se ošetří balzámem nebo kolínskou.' },
      ],
    },
    care: {
      h2: 'Péče o vousy doma',
      items: [
        'Vousy pravidelně myjte jemným přípravkem a nepoužívejte na ně agresivní šampony, které vysušují pokožku.',
        'Používejte olej nebo balzám na vousy. Změkčí chlupy a udrží pokožku pod nimi v kondici.',
        'Vousy pročesávejte hřebenem nebo kartáčem – chlupy se srovnají a vousy vypadají upraveněji.',
        'Po holení žiletkou se několik hodin vyhněte alkoholovým přípravkům, aby se pokožka nedráždila.',
        'Na úpravu se obvykle objednávejte po dvou až třech týdnech, aby si vousy udržely tvar.',
      ],
    },
    faq: [
      { q: 'Kolik stojí úprava vousů v Praze 2?', a: 'Úprava vousů stojí 420 Kč, samostatný timer 200 Kč. Úprava vousů je také součástí VIP Cutu (990 Kč) a VIP All Inclusive (1 190 Kč). Vše je v <a href="/cenik/">ceníku</a>.' },
      { q: 'Co je zahrnuto v úpravě vousů?', a: 'Úprava obsahuje práci strojkem a timerem, dotažení linií shaverem nebo žiletkou a závěrečný balzám nebo kolínskou.' },
      { q: 'V čem se liší úprava vousů a Jenom Timer?', a: 'Úprava vousů je kompletní služba s tvarováním a dotažením linií. Jenom Timer je rychlé doladění timerem za 200 Kč.' },
      { q: 'Lze ve stejnou dobu upravit vlasy i vousy?', a: 'Ano. VIP Cut a VIP All Inclusive zahrnují střih i úpravu vousů v jedné návštěvě.' },
      { q: 'Co si mám před návštěvou připravit?', a: 'Přijďte s vousy v takové délce, v jaké je máte. Nezkracujte si je doma těsně před návštěvou, aby měl barber z čeho tvar vytvořit. Pokud máte inspiraci, přineste fotku.' },
      { q: 'Je úprava vousů vhodná i pro citlivou pokožku?', a: 'Při citlivé pokožce nebo zarůstajících chloupcích to řekněte předem. Barber postup přizpůsobí a doporučí péči po úpravě.' },
      { q: 'Jak často chodit na úpravu vousů?', a: 'Obvykle jednou za dva až tři týdny, podle růstu a požadovaného tvaru.' },
    ],
    related: ['panske-strihy-praha-2', 'panska-kosmetika-praha-2', 'head-spa-praha-2'],
  },

  /* ============================================================ PÁNSKÁ KOSMETIKA */
  {
    slug: 'panska-kosmetika-praha-2', area: 'barber', name: 'Pánská kosmetika a mytí hlavy', art: 'panska-kosmetika', photo: null,
    cardText: 'Mytí obličeje VIP, masáž hlavy a mytí hlavy v barbershopu.',
    title: 'Pánská kosmetika a mytí hlavy Praha 2 | ICONO STUDIO',
    description: 'Pánská kosmetika a mytí obličeje VIP za 850 Kč, masáž hlavy 150 Kč a mytí hlavy od 100 Kč. Barbershop ICONO STUDIO, Bělehradská 77, Praha 2.',
    h1: 'Pánská kosmetika a mytí hlavy Praha 2', eyebrow: 'Barber · Bělehradská 77',
    lead: 'Mytí obličeje VIP, masáž hlavy a mytí hlavy v barbershopu. Pánská kosmetika 850 Kč, masáž hlavy 150 Kč, mytí hlavy od 100 Kč.',
    imageAlt: 'Plechovka s krémem, pára a ručník – pánská kosmetika v barbershopu',
    artAlt: 'Ilustrace plechovky s krémem, páry a složených ručníků',
    groups: ['pece'],
    intro: {
      h2: 'Péče nejen o vlasy',
      paras: [
        'Barbershop není jen o střihu. V ICONO STUDIO na Bělehradské 77 v Praze 2 si můžete objednat i pánskou kosmetiku, mytí obličeje VIP, masáž hlavy nebo mytí hlavy – samostatně, nebo jako doplněk ke střihu.',
        'Služby jsou zaměřené na to, abyste se po návštěvě cítili svěže a upraveně. Ceny najdete níže a v <a href="/cenik/">ceníku</a>.',
      ],
    },
    options: {
      h2: 'Služby a ceny',
      items: [
        { title: 'Pánská kosmetika / Mytí obličeje VIP', ids: ['pece-kosmetika'], text: 'Kompletní péče o pleť: mytí a masáž obličeje, vyčištění pleti a kosmetika s hydratací včetně páry a masky. Na závěr krém s hydratací. Hodí se, když chcete pleti dopřát víc než běžné ranní mytí.' },
        { title: 'Masáž hlavy', ids: ['pece-masaz'], text: 'Uvolňující masáž hlavy za 150 Kč. Může být krátkým zpestřením návštěvy, nebo samostatnou chvílí odpočinku.' },
        { title: 'Mytí hlavy', ids: ['pece-myti', 'pece-myti-od'], text: 'Mytí hlavy je v nabídce od 100 Kč. Varianty klasické, s masáží nebo se stylingem začínají na 250 Kč.' },
      ],
    },
    guide: {
      h2: 'Kdy se hodí která služba',
      paras: [
        '<strong>Pánská kosmetika / Mytí obličeje VIP</strong> je pro vás, pokud chcete pleti dopřát hlubší péči. Pára a maska pleť uvolní a hydratace pomáhá, aby nebyla stažená po holení.',
        '<strong>Masáž hlavy</strong> se hodí jako doplněk ke střihu nebo samostatně, když potřebujete uvolnit napětí. Pokud chcete víc, existuje i podrobnější <a href="/head-spa-praha-2/">Head Spa</a>.',
        '<strong>Mytí hlavy</strong> ocení každý, kdo chce čisté vlasy před stylingem. Klasický cut, Premium, VIP a VIP All Inclusive mytí hlavy v ceně obsahují.',
        'Péči můžete spojit s návštěvou barbera – při objednání nám napište, co chcete kombinovat, ať vám připravíme vhodný čas.',
        'Pokud potřebujete k péči i střih nebo úpravu vousů, podívejte se na <a href="/panske-strihy-praha-2/">pánské střihy</a> a <a href="/uprava-vousu-praha-2/">úpravu vousů</a>.',
      ],
    },
    steps: {
      h2: 'Jak péče o obličej probíhá',
      items: [
        { h: 'Mytí a masáž obličeje', t: 'Pleť se očistí a uvolní masáží.' },
        { h: 'Vyčištění pleti', t: 'Následuje důkladnější čištění pleti.' },
        { h: 'Pára a maska', t: 'Kosmetika s hydratací – pára a maska.' },
        { h: 'Krém s hydratací', t: 'Na závěr se pleť ošetří hydratačním krémem.' },
      ],
    },
    care: {
      h2: 'Péče o pleť mezi návštěvami',
      items: [
        'Obličej myjte jemným přípravkem pro muže dvakrát denně a pleť hydratujte krémem.',
        'Po holení používejte balzám nebo krém bez alkoholu, aby se pokožka nedráždila.',
        'Pokud máte pleť citlivou nebo problematickou, napište nám to při objednání.',
        'Kolik péče vaše pleť potřebuje a jak často se kosmetika vyplatí, vám rádi poradíme při návštěvě.',
      ],
    },
    faq: [
      { q: 'Kolik stojí pánská kosmetika v Praze 2?', a: 'Pánská kosmetika / Mytí obličeje VIP stojí 850 Kč. Masáž hlavy stojí 150 Kč a mytí hlavy začíná od 100 Kč. Vše najdete v <a href="/cenik/">ceníku</a>.' },
      { q: 'Pro koho je pánská kosmetika?', a: 'Pro každého muže, který chce pleti dopřát péči nad rámec běžného mytí – zvlášť po holení nebo při suché a namáhané pleti.' },
      { q: 'Co zahrnuje pánská kosmetika?', a: 'Mytí a masáž obličeje, vyčištění pleti, kosmetiku s hydratací (pára a maska) a krém s hydratací.' },
      { q: 'Je mytí hlavy v ceně střihu?', a: 'Ano, u Klasického Cutu, Premium Cutu, VIP Cutu a VIP All Inclusive je mytí hlavy součástí. U Studentského cutu a dětského střihu není uvedeno.' },
      { q: 'Můžu si objednat jen masáž hlavy?', a: 'Ano. Masáž hlavy stojí 150 Kč a můžete si ji objednat samostatně.' },
    ],
    related: ['panske-strihy-praha-2', 'uprava-vousu-praha-2', 'head-spa-praha-2'],
  },
];

/** Service pages in the language currently being rendered. `slug` stays the Czech slug (= route key);
 *  the localized URL comes from pathFor(slug). */
export const getServicePages = () => servicePagesBase.map((p) => contentFor(p.slug, p));
export const pageBySlug = (slug) => {
  const p = getServicePages().find((x) => x.slug === slug);
  if (!p) throw new Error(`Unknown service page: ${slug}`);
  return p;
};

// Hub URLs per area; labels are UI strings (areas.<area>.label, hubs.<hub>.crumb).
export const areaMeta = {
  nails: { hub: '/nail-studio-praha-2/', hubKey: 'nails' },
  beauty: { hub: '/nail-studio-praha-2/', hubKey: 'nails' },
  barber: { hub: '/barbershop-praha-2/', hubKey: 'barber' },
};
