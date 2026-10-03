// Czech UI + page copy (the source language). Strings may contain HTML; `{name}` is filled by t(key, vars).
// Strings that end up inside attributes (aria-label, alt, title …) use a plain “&” – they are escaped on output.
export default {
  city: 'Praha 2',
  orderMessage: 'chci se objednat',
  from: 'od',

  skip: 'Přeskočit na obsah',
  brandLabel: 'ICONO STUDIO – Nails & Barber, úvodní stránka',
  logoAlt: 'ICONO STUDIO Nails & Barber',
  ogAlt: 'ICONO STUDIO – Nails & Barber, Praha 2',
  legal: { ico: 'IČO' },

  nav: {
    aria: 'Hlavní navigace', mobileAria: 'Mobilní navigace', langAria: 'Jazyk',
    services: 'Služby', all: 'Celý ceník', cenik: 'Ceník', kontakt: 'Kontakt', home: 'Domů',
  },
  groups: { nails: 'Nehty', beauty: 'Beauty', barber: 'Barber' },
  areas: {
    nails: { label: 'Nails', title: 'Nehty', blurb: 'Manikúra, modelace nehtů, pedikúra, zdobení a doplňkové služby.' },
    beauty: { label: 'Beauty', title: 'Řasy, obočí a péče', blurb: 'Prodlužování řas, obočí, kosmetika a Head Spa.' },
    barber: { label: 'Barber', title: 'Barber', blurb: 'Pánské střihy, úprava vousů a barber péče.' },
  },
  burger: { open: 'Otevřít menu', close: 'Zavřít menu' },
  order: { toggle: 'Objednat se', title: 'Napište nebo zavolejte' },
  bar: { aria: 'Rychlé objednání', call: 'Volat' },
  btn: {
    whatsapp: 'Objednat přes WhatsApp', whatsappShort: 'WhatsApp', call: 'Zavolat', sms: 'Napsat SMS', smsShort: 'SMS',
    directions: 'Navigovat', openMap: 'Otevřít mapu',
  },
  crumbs: { home: 'Domů', aria: 'Drobečková navigace' },
  footer: {
    servicesAria: 'Služby v patičce', linksAria: 'Odkazy v patičce', services: 'Služby', web: 'Web', order: 'Objednání',
  },

  days: { weekdays: 'Po–Pá', sat: 'So', sun: 'Ne' },
  hours: { title: 'Otevírací doba', sundayText: 'zavřeno, nebo dle rezervace' },
  badge: {
    open: 'Právě otevřeno · do {t}',
    before: 'Nyní zavřeno · dnes otevíráme v {t}',
    next: 'Nyní zavřeno · otevíráme {d} v {t}',
    tomorrow: 'zítra',
    days: ['v neděli', 'v pondělí', 'v úterý', 've středu', 've čtvrtek', 'v pátek', 'v sobotu'],
  },
  map: { title: 'Mapa – ICONO STUDIO, Bělehradská 77, Praha 2', eyebrow: 'Mapa', heading: 'Jak se k nám dostanete',
    lead: 'Najdete nás na Bělehradské 77 ve Vinohradech, v okolí I. P. Pavlova a náměstí Míru.' },
  location: {
    heading: 'ICONO STUDIO na Bělehradské',
    eyebrow: 'Kde nás najdete',
    lead: 'Najdete nás na Bělehradské ve Vinohradech, v okolí I. P. Pavlova a náměstí Míru.',
  },
  photos: {
    hero: 'Barber stříhá vlasy nůžkami a hřebenem v ICONO STUDIO',
    barber: 'Pánský střih a fade strojkem v ICONO STUDIO na Bělehradské v Praze 2',
    nails: 'Manikúra a lakování nehtů v ICONO STUDIO v Praze 2',
    entrance: 'Vstup do ICONO STUDIO na Bělehradské 77 v Praze 2',
  },
  faq: { heading: 'Časté dotazy', eyebrow: 'FAQ' },
  cta: { heading: 'Chcete termín? Napište nám.', text: 'Vyberte způsob, který vám vyhovuje.' },
  prices: { more: 'Více o službě' },
  reviews: { eyebrow: 'Recenze', heading: 'Co říkají zákazníci', stars: 'z 5 hvězdiček', cta: 'Zobrazit recenze na Googlu' },
  team: { eyebrow: 'Tým', heading: 'Lidé, ke kterým se objednáváte', at: 'v ICONO STUDIO' },
  gallery: { eyebrow: 'Galerie', heading: 'Z ICONO STUDIO' },
  schema: {
    description: 'Barbershop a nehtové studio na Bělehradské 77 v Praze 2: pánské střihy, úprava vousů, manikúra, gelové a akrylové nehty, pedikúra, řasy, obočí a Head Spa.',
    catalog: 'ceník',
  },

  faqs: {
    order: {
      q: 'Jak se mohu objednat?',
      a: 'Napište nám na {wa} nebo pošlete {sms} na číslo {phone}, případně {call}. Zpráva „{msg}“ se předvyplní sama.',
      callWord: 'zavolejte',
    },
    where: {
      q: 'Kde ICONO STUDIO najdu?',
      a: 'Na adrese {address}, v okolí I. P. Pavlova a náměstí Míru. {map}.',
      map: 'Navigovat na mapě',
    },
    hours: { q: 'Jaká je otevírací doba?', a: '{hours}. V neděli je zavřeno, případně podle rezervace – napište nám a domluvíme se.' },
    prices: { q: 'Kde najdu kompletní ceník?', a: 'Všechny služby i ceny najdete na stránce <a href="/cenik/">Ceník</a>. Ceny jsou uvedeny v korunách.' },
  },

  facts: { aria: 'Základní informace', prices: 'Ceny', address: 'Adresa', phone: 'Telefon', open: 'Otevřeno' },
  orderSteps: {
    eyebrow: 'Objednání',
    heading: 'Jednoduše ve třech krocích',
    s1: { h: 'Napište nebo zavolejte', t: 'WhatsApp, SMS nebo telefon – zpráva „{msg}“ je předvyplněná.' },
    s2: { h: 'Domluvíme termín', t: 'Řekněte nám, o jakou službu máte zájem, a společně vybereme čas.' },
    s3: { h: 'Přijďte na Bělehradskou' },
  },
  teaser: { default: 'Ceník v kostce', eyebrow: 'Ceník', link: 'Celý ceník' },

  svc: {
    steps: 'Postup', about: 'O službě', variants: 'Varianty a ceny', overview: 'Přehled',
    pricesOf: 'Ceny: {name}', care: 'Péče', faqHeading: 'Časté dotazy: {name}',
    related: {
      eyebrow: 'Související služby', heading: 'Mohlo by vás zajímat',
      allBarber: 'Všechny barber služby', allNails: 'Všechny nail a beauty služby',
    },
    ctaText: '{name}: {street}, {city}. Vyberte způsob, který vám vyhovuje.',
  },

  home: {
    title: 'ICONO STUDIO | Nails & Barber Praha 2, Bělehradská 77',
    description: 'Nehtové studio a barbershop na Bělehradské 77 v Praze 2: manikúra, gelové nehty, pedikúra, řasy, pánské střihy a vousy. Ceník a objednání online.',
    hero: {
      eyebrow: 'ICONO STUDIO · BĚLEHRADSKÁ 77',
      aria: 'Nehtové studio & Barbershop v Praze 2',
      l1: 'Nails &amp; Barber', l2: 'v centru', l3: 'Prahy 2',
      lead: 'Nehtové studio a barbershop na jednom místě: manikúra, gelové nehty, pedikúra, řasy, obočí, pánské střihy a úprava vousů.',
      pricelist: 'Ceník služeb',
      cardAria: 'Kontakt a otevírací doba',
    },
    marquee: ['Nails', 'Barber', 'Praha 2', 'Bělehradská 77'],
    statement: 'Nails &amp; barber. Precizně. Na jednom místě.',
    about: {
      eyebrow: 'O studiu',
      heading: 'Jedna adresa, dva obory',
      p1: 'ICONO STUDIO najdete na Bělehradské 77 v Praze 2, ve Vinohradech, kousek od I. P. Pavlova a náměstí Míru. Pod jednou střechou spojujeme nehtové studio a barbershop: pánské střihy a úpravu vousů, manikúru, gelové a akrylové nehty, pedikúru, prodlužování řas, obočí i Head Spa.',
      p2: 'Každou službu popisujeme na její vlastní stránce a ceny jsou v přehledném <a href="/cenik/">ceníku</a>. Termín domluvíte přes WhatsApp, SMS nebo telefon {phone}. Otevřeno máme {hours}, v neděli zavřeno, případně podle rezervace.',
    },
    duo: {
      barber: { title: 'Barbershop', text: 'Střihy, vousy a kompletní barber péče.', cta: 'Prohlédnout barber služby' },
      nails: { title: 'Nails &amp; beauty', text: 'Manikúra, nehty, pedikúra, řasy, obočí a Head Spa.', cta: 'Prohlédnout nail služby' },
    },
    services: { eyebrow: 'Služby', heading: 'Naše služby' },
    why: {
      eyebrow: 'Proč ICONO STUDIO',
      heading: 'Jedna značka, dva obory.',
      items: [
        { h: 'Nails &amp; barber na jednom místě', t: 'Pánské střihy, vousy, manikúra i pedikúra pod jednou značkou a na jedné adrese.' },
        { h: 'Přehledné ceny', t: 'Kompletní ceník všech služeb najdete na webu – včetně výhodných balíčků.' },
        { h: 'Centrum Prahy 2', t: 'Bělehradská 77 ve Vinohradech, v okolí I. P. Pavlova a náměstí Míru.' },
        { h: 'Jednoduché objednání', t: 'Napište na WhatsApp, pošlete SMS nebo zavolejte. Otevřeno i v sobotu.' },
      ],
    },
  },

  hubs: {
    advice: 'Poradíme',
    choose: 'Co zvolit?',
    nails: {
      crumb: 'Nehtové studio',
      title: 'Nehtové studio Praha 2 | Manikúra a pedikúra | ICONO STUDIO',
      description: 'Nehtové studio a beauty na Bělehradské 77 v Praze 2: manikúra, gelové nehty, pedikúra, řasy, obočí a Head Spa. Ceník a objednání přes WhatsApp.',
      eyebrow: 'Nails & beauty · Bělehradská 77',
      h1: 'Nehtové studio a beauty Praha 2',
      lead: 'Manikúra, gelové a akrylové nehty, pedikúra, prodlužování řas, obočí a Head Spa na jednom místě – na Bělehradské 77 ve Vinohradech.',
      imageAlt: 'Manikúra v nehtovém studiu ICONO STUDIO v Praze 2',
      introEyebrow: 'Nails &amp; beauty',
      introHeading: 'Nehty a beauty na Vinohradech',
      intro: [
        'V ICONO STUDIO na Bělehradské 77 v Praze 2 se věnujeme péči o nehty, řasy, obočí a pleť. Od klasické manikúry přes gelové a akrylové nehty až po pedikúru s produkty Footlogix – každou službu najdete na samostatné stránce s popisem, variantami a cenami.',
        'Pokud si nejste jistí, kterou službu zvolit, projděte si sekce níže, nebo nám napište na WhatsApp. Aktuální ceny najdete v <a href="/cenik/">ceníku</a>.',
      ],
      nailsHeading: 'Manikúra, nehty a pedikúra',
      nailsPrices: 'Ceník nehtů',
      beautyHeading: 'Řasy, obočí a Head Spa',
      beautyPrices: 'Ceník beauty',
      choose: [
        { h: 'Upravené ruce', t: 'Chcete jen péči a čistý vzhled? Podívejte se na <a href="/manikura-praha-2/">manikúru</a>. Chcete barvu, která vydrží? Vyberte Gellak nebo CND Shellac.' },
        { h: 'Délka a tvar', t: 'Chcete delší nehty? Zvolte <a href="/gelove-akrylove-nehty-praha-2/">gelové nebo akrylové nehty</a>, případně Gel X.' },
        { h: 'Pohodlí a odpočinek', t: 'Pro nohy je tu <a href="/pedikura-praha-2/">pedikúra</a>, pro pokožku hlavy <a href="/head-spa-praha-2/">Head Spa</a>, pro pohled <a href="/prodluzovani-ras-praha-2/">řasy</a> a <a href="/oboci-kosmetika-praha-2/">obočí</a>.' },
      ],
      teaser: 'Ceny nehtů a beauty',
      faqServices: 'Jaké nail a beauty služby nabízíte?',
    },
    barber: {
      crumb: 'Barbershop',
      title: 'Barbershop Praha 2 | Pánské střihy a vousy | ICONO STUDIO',
      description: 'Barbershop na Bělehradské 77 v Praze 2: pánský střih, úprava vousů, mytí hlavy a pánská kosmetika. Ceny od 100 Kč, objednání přes WhatsApp, SMS nebo telefon.',
      eyebrow: 'Barber · Bělehradská 77',
      h1: 'Barbershop Praha 2',
      lead: 'Pánské střihy, úprava vousů, mytí hlavy a pánská kosmetika na Bělehradské 77 v Praze 2 – Vinohradech. Objednejte se přes WhatsApp, SMS nebo telefon.',
      imageAlt: 'Barber upravuje boky a zátylek strojkem v ICONO STUDIO v Praze 2',
      introHeading: 'Barber v centru Prahy 2',
      intro: [
        'ICONO STUDIO je moderní barbershop na Bělehradské ve Vinohradech. Pánský střih, střih spojený s úpravou vousů i samostatná úprava vousů – vyberte si službu podle toho, co právě potřebujete. Ke každému cutu patří styling a balzám nebo kolínská.',
        'Barbershop je součástí jednoho studia s nehtovým studiem, takže se u nás potkají obě části značky pod jednou střechou. Nehtové a beauty služby najdete na stránce <a href="/nail-studio-praha-2/">Nehtové studio</a>.',
      ],
      servicesEyebrow: 'Barber služby',
      servicesHeading: 'Střihy, vousy a péče',
      prices: 'Barber ceník',
      choose: [
        { h: 'Jen střih', t: 'Klasický Cut zahrnuje mytí hlavy, střih, styling a balzám nebo kolínskou. Studenti do 18 let a děti mají zvýhodněné ceny. Víc na stránce <a href="/panske-strihy-praha-2/">Pánský střih</a>.' },
        { h: 'Vlasy i vousy', t: 'VIP Cut spojuje střih s úpravou vousů v jedné návštěvě. Samotné vousy najdete na stránce <a href="/uprava-vousu-praha-2/">Úprava vousů</a>.' },
        { h: 'Péče navíc', t: 'Mytí obličeje VIP, masáž hlavy nebo mytí hlavy – viz <a href="/panska-kosmetika-praha-2/">Pánská kosmetika</a>. Každé dva týdny stříhání: −100 Kč na všechny cuts.' },
      ],
      teaser: 'Barber ceník v kostce',
      faqServices: 'Jaké barber služby nabízíte?',
      cta: 'Chcete se ostříhat? Napište nám.',
    },
  },

  cenik: {
    title: 'Ceník služeb | ICONO STUDIO Praha 2 – Nails & Barber',
    description: 'Ceník ICONO STUDIO na Bělehradské 77 v Praze 2: manikúra, gelové nehty, pedikúra, řasy, obočí, Head Spa, pánské střihy a vousy. Všechny ceny na jednom místě.',
    h1: 'Ceník služeb ICONO STUDIO',
    lead: 'Přehled všech služeb a cen: manikúra, nehty, pedikúra, zdobení, řasy, obočí, Head Spa a barber. Ceny jsou v korunách, u každé služby najdete odkaz na podrobnosti.',
    chipsAria: 'Rychlá navigace v ceníku',
    moreServices: 'Více o službách',
    cta: 'Vybrali jste si? Napište nám.',
  },

  kontakt: {
    title: 'Kontakt a otevírací doba | ICONO STUDIO Praha 2',
    description: 'Kontakt ICONO STUDIO – {address}. Telefon {phone}, WhatsApp a SMS. Otevřeno {hours}. IČO {ico}.',
    h1: 'Kontakt a otevírací doba',
    lead: 'ICONO STUDIO · {address}. Objednejte se přes WhatsApp, SMS nebo telefon {phone}.',
    premises: 'Provozovna',
    legal: 'Identifikační údaje',
    servicesHeading: 'S čím se na nás můžete obrátit',
    servicesLead: 'Nehtové studio i barbershop na jedné adrese. Vyberte si službu a podívejte se na podrobnosti, varianty a ceny.',
    schemaName: 'Kontakt ICONO STUDIO',
  },

  notFound: {
    title: 'Stránka nenalezena | ICONO STUDIO',
    description: 'Stránka nenalezena.',
    h1: 'Stránka nenalezena',
    lead: 'Tuhle stránku jsme nenašli. Vraťte se na úvod, podívejte se do ceníku, nebo se rovnou objednejte.',
    home: 'Na úvodní stránku',
  },
};
