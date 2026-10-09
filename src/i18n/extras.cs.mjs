// Czech copy for the per-service conversion layer (src/service-extras.mjs): the signature block of every
// service page, CTA bands, combinations and the service-specific order wording. English / German mirror this
// structure in extras.en.mjs / extras.de.mjs (the build fails on any missing string, lost {placeholder} or link).
//
// Rules: only claims that follow from the price list or from what the service pages already say. No invented
// reviews, durations, discounts or customer numbers. Amounts are never typed here – they are `{placeholders}`
// that service-extras.mjs fills from the price list (so they stay correct and are formatted per language).
export const extrasCs = {
  common: {
    order: `Rezervovat`,
    micro: `Termín si vyberete online podle volných časů.`,
    yes: `ano`,
    no: `ne`,
    scrollHint: `Tabulku můžete posouvat do stran.`,
    chipsAria: `Na této stránce`,
    chips: {
      notes: `Dobré vědět`,
      options: `Varianty`, price: `Ceník`, guide: `Jak vybrat`, steps: `Postup`, care: `Péče`,
      combos: `Kombinace`, faq: `Časté dotazy`, location: `Kde nás najdete`,
    },
    combos: { eyebrow: `Kombinace`, cta: `Zavolat a domluvit obě služby`, more: `Podrobnosti` },
    problem: { priceLabel: `Cena` },
    ritual: { includes: `V ceně` },
  },

  pages: {
    /* ============================================================ MANIKÚRA */
    'manikura-praha-2': {
      heroCta: `Rezervovat manikúru`,
      final: { h: `Manikúra na Bělehradské? Rezervujte si termín.`, t: `Vyberte si termín online, variantu upřesníme na místě. Bělehradská 77, Praha 2, kousek od I. P. Pavlova.` },
      bands: [
        { h: `Víte, kterou variantu chcete?`, t: `Rezervujte si termín online, variantu upřesníme na místě.` },
        { h: `Váháte mezi Gellakem a CND Shellacem?`, t: `Poradíme vám na místě podle toho, jak ruce používáte. Termín si rezervujte online, nebo nám zavolejte.` },
      ],
      sigs: [{
        chip: `Porovnání`, eyebrow: `Porovnání variant`, h2: `Klasická, Gellak, nebo CND Shellac?`,
        lead: `Tři varianty vedle sebe – včetně ceny hand spa a odstranění gel laku, aby vás výsledná cena nepřekvapila.`,
        cols: [`Klasická`, `Gellak`, `CND Shellac`],
        rows: [
          { label: `Barva na nehtech` },
          { label: `Vytvrzení v lampě, hned suché` },
          { label: `Značkový gel lak` },
          { label: `Cena` },
          { label: `Balíček s hand spa` },
          { label: `Odstranění gel laku` },
        ],
        note: `CND Shellac vydrží přibližně od 10 dnů do 3 týdnů a dá se odmočit, Gellak je tvrdší, obvykle vydrží déle a k odstranění často potřebuje brusku. Odstranění nechte na studiu, doma lak nestrhávejte.`,
      }],
      combos: {
        h2: `Spojte manikúru s další službou`,
        lead: `Chcete víc služeb v jednom termínu? Zavolejte nám a domluvíme to. Ceny jsou z ceníku, každá služba zvlášť.`,
        items: [
          { title: `Manikúra Gellak + pedikúra Gellak`, text: `Upravené ruce i nohy v jednom termínu.` },
          { title: `Manikúra Gellak + barvení obočí`, text: `Nehty a obočí v jedné návštěvě.` },
        ],
      },
    },

    /* ============================================================ GELOVÉ A AKRYLOVÉ NEHTY */
    'gelove-akrylove-nehty-praha-2': {
      heroCta: `Rezervovat nové nehty`,
      final: { h: `Nové nehty na Bělehradské? Rezervujte si termín.`, t: `Vyberte si termín online a přineste inspirační fotku, tvar probereme na místě. Bělehradská 77, Praha 2.` },
      bands: [
        { h: `Máte jasno v tvaru a délce?`, t: `Rezervujte si termín online a inspirační fotku nám ukažte na místě.` },
        { h: `Potřebujete doplnit nehty?`, t: `Doplnění je levnější než nová modelace. Rezervujte si termín online, nebo nám zavolejte.` },
      ],
      sigs: [
        {
          chip: `Tvary nehtů`, eyebrow: `Tvar nehtů`, h2: `Jaký tvar nehtů zvolit?`,
          lead: `Pět nejčastějších tvarů. Vybereme společně, klidně přineste inspiraci.`,
          items: [
            { name: `Čtvercový`, text: `Rovná špička, praktický a pevný.` },
            { name: `Kulatý`, text: `Měkké hrany, praktický na každý den.` },
            { name: `Oválný`, text: `Opticky prodlužuje prsty.` },
            { name: `Mandlový`, text: `Zúžená špička, opticky prodlužuje prsty.` },
            { name: `Coffin`, text: `Výrazný a módní tvar s rovnou špičkou.` },
          ],
          cta: `Nevíte, který tvar vám sedne? Poradíme vám na místě.`,
          ctaLabel: `Rezervovat termín`,
        },
        {
          chip: `Gel, akryl, Gel X`, eyebrow: `Porovnání materiálů`, h2: `Gel, akryl, nebo Gel X?`,
          lead: `Tři techniky, stejná cena za nové nehty s barvou. Rozdíl je v materiálu a v pocitu při nošení.`,
          cols: [`Gel`, `Akryl`, `Gel X`],
          rows: [
            { label: `Materiál`, cells: [`Pružný gel vytvrzovaný v lampě`, `Tekutina a prášek, tvrdne na vzduchu`, `Předtvarované gelové tipy`] },
            { label: `Výsledek`, cells: [`Lehký a přirozený`, `Pevný, vhodný pro delší tvary`, `Lehký, přirozeně působící`] },
            { label: `Hodí se pro`, cells: [`Každodenní nošení, první umělé nehty`, `Delší nebo výraznější tvary`, `Lehké prodloužení`] },
            { label: `Nové nehty s barvou` },
          ],
          note: `Akryl je při aplikaci cítit typickou vůní. Doplnění se obvykle objednává po dvou až čtyřech týdnech.`,
        },
      ],
      combos: {
        h2: `Nehty a další péče v jednom termínu`,
        lead: `Chcete víc služeb v jednom termínu? Zavolejte nám a domluvíme to. Ceny jsou z ceníku, každá služba zvlášť.`,
        items: [
          { title: `Nové nehty + pedikúra Gellak`, text: `Ruce i nohy v jedné návštěvě.` },
          { title: `Doplnění nehtů + barvení obočí`, text: `Údržba nehtů a obočí najednou.` },
        ],
      },
    },

    /* ============================================================ PEDIKÚRA */
    'pedikura-praha-2': {
      heroCta: `Rezervovat pedikúru`,
      final: { h: `Pedikúra na Bělehradské? Rezervujte si termín.`, t: `Vyberte si termín online, variantu upřesníme na místě. Bělehradská 77, Praha 2.` },
      bands: [
        { h: `Vybrali jste si variantu?`, t: `Rezervujte si termín online, variantu upřesníme na místě.` },
        { h: `Trápí vás paty nebo nehty na nohou?`, t: `Zavolejte nám, co vás trápí, ať vybereme vhodnou variantu. Při zdravotních potížích se nejdřív poraďte s lékařem.` },
      ],
      sigs: [{
        chip: `Co zvolit`, eyebrow: `Podle toho, co potřebujete`, h2: `Co chcete od pedikúry?`,
        lead: `Najděte větu, která sedí – hned vidíte variantu i cenu.`,
        items: [
          { need: `Chci jen upravené nohy`, pick: `Klasická pedikúra`, text: `Úprava nehtů a kůžiček, odstranění ztvrdlé kůže a ošetření pokožky.` },
          { need: `Chci barvu, která vydrží`, pick: `Pedikúra s Gellakem nebo CND Shellac`, text: `Gel lak se vytvrzuje v lampě. Nehty jsou hned suché a barva drží déle než u běžného laku.` },
          { need: `Trápí mě suché paty a ztvrdlá kůže`, pick: `Medicínální pedikúra Footlogix`, text: `Profesionální kosmetika pro suchou a namáhanou pokožku nohou. Nejde o lékařské ošetření.` },
          { need: `Chci si odpočinout`, pick: `Výhodný balíček s foot spa`, text: `Hýčkací péče o nohy navíc – ve výhodném balíčku.` },
        ],
        note: `Cukrovka, plíseň nehtů, zánět nebo rány? Nejdřív se poraďte s lékařem. Pedikúra ve studiu nenahrazuje lékařské ošetření.`,
      }],
      combos: {
        h2: `Pedikúra a něco navíc`,
        lead: `Chcete víc služeb v jednom termínu? Zavolejte nám a domluvíme to. Ceny jsou z ceníku, každá služba zvlášť.`,
        items: [
          { title: `Pedikúra Gellak + manikúra Gellak`, text: `Nohy i ruce v jednom termínu.` },
          { title: `Pedikúra s foot spa + Head Spa`, text: `Foot spa a Head Spa na jednu návštěvu.` },
        ],
      },
    },

    /* ============================================================ PRODLUŽOVÁNÍ ŘAS */
    'prodluzovani-ras-praha-2': {
      heroCta: `Rezervovat řasy`,
      final: { h: `Řasy na Bělehradské? Rezervujte si termín.`, t: `Vyberte si termín online, typ řas a jestli jde o nový set, nebo doplnění, upřesníme na místě.` },
      bands: [
        { h: `Víte, jaký efekt chcete?`, t: `Rezervujte si termín online, typ řas a jestli jde o nový set, nebo doplnění, upřesníme na místě.` },
        { h: `Máte citlivé oči nebo nosíte čočky?`, t: `Zavolejte nám předem a probereme, co je potřeba.` },
      ],
      sigs: [{
        chip: `Hustota`, eyebrow: `Typy řas`, h2: `Od přirozeného efektu po maximální hustotu`,
        lead: `Čím víc tenkých řas na jednu přirozenou, tím hustší a výraznější pohled.`,
        items: [
          { name: `Klasické 1:1`, effect: `Přirozený efekt`, text: `Na každou přirozenou řasu jedna umělá. Jemné prodloužení a zahuštění, dobrá volba pro první návštěvu.` },
          { name: `Volume 2D–5D`, effect: `Hustší a výraznější`, text: `Vějířek ze 2 až 5 tenkých řas na jednu přirozenou. Číslo říká, kolik řas je ve vějířku.` },
          { name: `Mega Volume`, effect: `Maximální hustota`, text: `Ještě hustší vějířky z více jemných řas pro plný, výrazný pohled.` },
        ],
        note: `Doplnění je levnější než nový set a obvykle se objednává po dvou až čtyřech týdnech.`,
      }],
      combos: {
        h2: `Řasy a obočí dohromady`,
        lead: `Chcete víc služeb v jednom termínu? Zavolejte nám a domluvíme to. Ceny jsou z ceníku, každá služba zvlášť.`,
        items: [
          { title: `Doplnění řas 1:1 + barvení obočí`, text: `Obočí a řasy dávají pohledu jasný rám.` },
          { title: `Volume řasy + úprava obočí`, text: `Hustší řasy a upravené obočí v jedné návštěvě.` },
        ],
      },
    },

    /* ============================================================ OBOČÍ A KOSMETIKA */
    'oboci-kosmetika-praha-2': {
      heroCta: `Rezervovat obočí`,
      final: { h: `Obočí na Bělehradské? Rezervujte si termín.`, t: `Vyberte si termín online, jestli chcete jen úpravu, nebo i barvení, upřesníme na místě.` },
      bands: [
        { h: `Úprava, nebo barvení?`, t: `Rezervujte si termín online, variantu upřesníme na místě.` },
        { h: `Chcete k obočí i péči o obličej?`, t: `Zavolejte nám, co vaše pleť potřebuje. Přijďte raději bez make-upu.` },
      ],
      sigs: [{
        chip: `Porovnání`, eyebrow: `Porovnání služeb`, h2: `Úprava, barvení, nebo péče o obličej?`,
        lead: `Tři služby vedle sebe – vyberte podle toho, co obočí a pleť potřebují.`,
        cols: [`Úprava obočí`, `Barvení + úprava`, `Péče o obličej`],
        rows: [
          { label: `Tvarování obočí` },
          { label: `Barva na obočí` },
          { label: `Ošetření a masáž obličeje` },
          { label: `Cena` },
          { label: `Hodí se, když…`, cells: [`obočí je husté a dostatečně tmavé`, `obočí je světlé, nestejnoměrné nebo řídké`, `chcete pleti dopřát víc než běžné mytí a krém`] },
          { label: `Dobré vědět`, cells: [`Obvykle jednou za tři až pět týdnů`, `Barva se postupně vytrácí, proto se opakuje s úpravou`, `Přijďte raději bez make-upu`] },
        ],
        note: `Při alergii na barvy nebo citlivé pokožce nám to řekněte předem.`,
      }],
      combos: {
        h2: `Obočí a další péče v jednom termínu`,
        lead: `Chcete víc služeb v jednom termínu? Zavolejte nám a domluvíme to. Ceny jsou z ceníku, každá služba zvlášť.`,
        items: [
          { title: `Barvení obočí + řasy 1:1`, text: `Obočí a řasy společně dávají pohledu jasný rám.` },
          { title: `Péče o obličej + úprava obočí`, text: `Pleť a obočí v jedné návštěvě.` },
        ],
      },
    },

    /* ============================================================ HEAD SPA */
    'head-spa-praha-2': {
      heroCta: `Rezervovat Head Spa`,
      final: { h: `Head Spa na Bělehradské? Rezervujte si termín.`, t: `Vyberte si termín, který se vám hodí. Bělehradská 77, Praha 2.` },
      bands: [
        { h: `Chcete chvíli jen pro sebe?`, t: `Rezervujte si termín online. Přijďte s časovou rezervou.` },
        { h: `Chcete Head Spa pro někoho blízkého?`, t: `Rezervujte si termín online, nebo nám zavolejte.` },
      ],
      sigs: [{
        chip: `Průběh`, eyebrow: `Co dostanete`, h2: `Pět kroků za jednu cenu`,
        lead: `Od klidného zvuku přes masáž až po regenerační olej. Všechno je v ceně Head Spa.`,
        priceLabel: `Head Spa – kompletní péče`,
        priceNote: `Délku návštěvy upřesníme při objednání.`,
        cta: `Rezervovat Head Spa`,
        note: `Head Spa je relaxační péče, nikoli léčba. Při ekzému, lupénce nebo podráždění se nejdřív poraďte s lékařem.`,
      }],
      combos: {
        h2: `Head Spa a něco navíc`,
        lead: `Chcete víc služeb v jednom termínu? Zavolejte nám a domluvíme to. Ceny jsou z ceníku, každá služba zvlášť.`,
        items: [
          { title: `Head Spa + pedikúra s foot spa`, text: `Nohy i hlava – celá relaxace na jednom místě.` },
          { title: `Head Spa + péče o obličej`, text: `Hlava i pleť v jedné návštěvě.` },
        ],
      },
    },

    /* ============================================================ PÁNSKÝ STŘIH */
    'panske-strihy-praha-2': {
      heroCta: `Rezervovat střih`,
      final: { h: `Střih na Bělehradské? Rezervujte si termín.`, t: `Vyberte si termín online, cut upřesníme na místě. Bělehradská 77, Praha 2, kousek od I. P. Pavlova.` },
      bands: [
        { h: `Víte, který cut chcete?`, t: `Rezervujte si termín online, cut upřesníme na místě. Chodíte každé dva týdny? Řekněte nám to při návštěvě.` },
        { h: `Chcete ke střihu i vousy?`, t: `VIP Cut zahrnuje obojí. Zavolejte nám a navrhneme čas.` },
      ],
      sigs: [{
        chip: `Porovnání cutů`, eyebrow: `Co je v ceně`, h2: `Který cut vám sedne?`,
        lead: `Zaškrtnuto = v ceně. Tabulka se čte přímo z ceníku, takže vždy sedí.`,
        priceLabel: `Cena`,
        note: `Sleva {off} na všechny cuts platí při stříhání každé dva týdny. Podmínky vám potvrdíme při objednání.`,
      }],
      combos: {
        h2: `Střih a něco navíc`,
        lead: `Chcete víc služeb v jednom termínu? Zavolejte nám a domluvíme to. Ceny jsou z ceníku, každá služba zvlášť.`,
        items: [
          { title: `Klasický Cut + úprava vousů`, text: `Střih a vousy zvlášť. VIP Cut zahrnuje obojí za {vip}.` },
          { title: `Premium Cut + pánská kosmetika`, text: `Střih s masáží a péče o pleť v jedné návštěvě.` },
        ],
      },
    },

    /* ============================================================ ÚPRAVA VOUSŮ */
    'uprava-vousu-praha-2': {
      heroCta: `Rezervovat úpravu vousů`,
      final: { h: `Vousy na Bělehradské? Rezervujte si termín.`, t: `Vyberte si termín online, jestli chcete kompletní úpravu, nebo jen timer, upřesníme na místě.` },
      bands: [
        { h: `Chcete čistý tvar vousů?`, t: `Rezervujte si termín online. Nezkracujte si vousy doma těsně před návštěvou.` },
        { h: `Řešíte i vlasy?`, t: `VIP Cut spojuje střih s úpravou vousů v jedné návštěvě. Zavolejte nám.` },
      ],
      sigs: [{
        chip: `Tvar obličeje`, eyebrow: `Tvar vousů`, h2: `Jaký tvar vousů se k vám hodí?`,
        lead: `Orientační vodítko podle tvaru obličeje. Barber poradí při konzultaci podle hustoty vašich vousů.`,
        items: [
          { face: `Kulatější obličej`, beard: `Delší brada, ostřejší linie`, text: `Obličej se opticky prodlouží.` },
          { face: `Hranatý obličej`, beard: `Zaoblenější tvary`, text: `Zjemní výraznou čelist.` },
          { face: `Delší obličej`, beard: `Kratší brada, plnější boky`, text: `Přidá šířku po stranách.` },
        ],
        note: `Citlivá pleť nebo zarůstající chloupky? Řekněte to barberovi – postup přizpůsobí.`,
      }],
      combos: {
        h2: `Vousy a něco navíc`,
        lead: `Chcete víc služeb v jednom termínu? Zavolejte nám a domluvíme to. Ceny jsou z ceníku, každá služba zvlášť.`,
        items: [
          { title: `Úprava vousů + Klasický Cut`, text: `Vlasy i vousy zvlášť – nebo rovnou VIP Cut za {vip}.` },
          { title: `Úprava vousů + pánská kosmetika`, text: `Vousy a péče o pleť po holení.` },
        ],
      },
    },

    /* ============================================================ PÁNSKÁ KOSMETIKA A MYTÍ HLAVY */
    'panska-kosmetika-praha-2': {
      heroCta: `Rezervovat péči`,
      final: { h: `Péče na Bělehradské? Rezervujte si termín.`, t: `Vyberte si termín online, mytí obličeje VIP, masáž hlavy nebo mytí hlavy upřesníme na místě.` },
      bands: [
        { h: `Vybrali jste si službu?`, t: `Rezervujte si termín online. Péči můžete spojit i s návštěvou barbera, stačí zavolat.` },
        { h: `Chcete péči ke střihu?`, t: `Zavolejte nám, co chcete kombinovat, ať vám připravíme vhodný čas.` },
      ],
      sigs: [{
        chip: `Chytré tipy`, eyebrow: `Z ceníku`, h2: `Jak z péče vytěžit víc`,
        lead: `Tři postřehy, které vyplývají přímo z ceníku.`,
        items: [
          { title: `Masáž ke střihu`, text: `Premium Cut ({premium}) zahrnuje masáž, Klasický Cut ({classic}) ne. Samostatná masáž hlavy stojí {solo}.` },
          { title: `Mytí hlavy bývá v ceně`, text: `Klasický, Premium, VIP i VIP All Inclusive cut ho zahrnují. Samostatně si ho objednáte od {wash}.` },
          { title: `Pleť po holení`, text: `Pára, maska a hydratace pomáhají, aby pleť nebyla stažená. K úpravě vousů ({beard}) přidáte péči za {care}.` },
        ],
      }],
      combos: {
        h2: `Péče a něco navíc`,
        lead: `Chcete víc služeb v jednom termínu? Zavolejte nám a domluvíme to. Ceny jsou z ceníku, každá služba zvlášť.`,
        items: [
          { title: `Klasický Cut + pánská kosmetika`, text: `Střih a péče o pleť v jedné návštěvě.` },
          { title: `Úprava vousů + pánská kosmetika`, text: `Upravené vousy a hydratovaná pleť.` },
        ],
      },
    },
  },
};
