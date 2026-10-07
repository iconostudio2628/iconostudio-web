// English UI + page copy. Same structure as ui.cs.mjs (the build checks keys, placeholders and links).
// Strings that end up inside attributes (aria-label, alt, title …) use a plain “&” – they are escaped on output.
export default {
  city: `Prague 2`,
  orderMessage: `I'd like to book an appointment`,
  from: `from`,

  skip: `Skip to content`,
  brandLabel: `ICONO STUDIO – Nails & Barber, home page`,
  logoAlt: `ICONO STUDIO Nails & Barber`,
  ogAlt: `ICONO STUDIO – Nails & Barber, Bělehradská 77, Prague 2: shop window and entrance of the studio`,
  legal: { ico: `Company ID (IČO)` },

  nav: {
    aria: `Main navigation`, mobileAria: `Mobile navigation`, langAria: `Language`,
    services: `Services`, all: `Full price list`, cenik: `Price list`, kontakt: `Contact`, home: `Home`,
  },
  groups: { nails: `Nails`, beauty: `Beauty`, barber: `Barber` },
  areas: {
    nails: { label: `Nails`, title: `Nails`, blurb: `Manicure, gel and acrylic nails, pedicure, nail art and extras.` },
    beauty: { label: `Beauty`, title: `Lashes, brows & skincare`, blurb: `Eyelash extensions, brows, facials and Head Spa.` },
    barber: { label: `Barber`, title: `Barber`, blurb: `Men's haircuts, beard trims and barber care.` },
  },
  burger: { open: `Open menu`, close: `Close menu` },
  order: { toggle: `Book now`, title: `Message or call us` },
  bar: { aria: `Quick booking`, call: `Call` },
  btn: {
    whatsapp: `Book via WhatsApp`, whatsappShort: `WhatsApp`, call: `Call`, sms: `Send an SMS`, smsShort: `SMS`,
    directions: `Get directions`, openMap: `Open map`,
  },
  crumbs: { home: `Home`, aria: `Breadcrumb` },
  footer: {
    servicesAria: `Services in the footer`, linksAria: `Footer links`, services: `Services`, web: `Site`, order: `Book`,
  },

  days: { weekdays: `Mon–Fri`, sat: `Sat`, sun: `Sun` },
  hours: { title: `Opening hours`, sundayText: `closed, or by appointment` },
  badge: {
    open: `Open now · until {t}`,
    before: `Closed now · opens today at {t}`,
    next: `Closed now · opens {d} at {t}`,
    tomorrow: `tomorrow`,
    days: [`on Sunday`, `on Monday`, `on Tuesday`, `on Wednesday`, `on Thursday`, `on Friday`, `on Saturday`],
  },
  map: {
    title: `Map – ICONO STUDIO, Bělehradská 77, Prague 2`, eyebrow: `Map`, heading: `How to find us`,
    lead: `You'll find us at Bělehradská 77 in Vinohrady, near I. P. Pavlova and Náměstí Míru.`,
  },
  location: {
    heading: `ICONO STUDIO on Bělehradská`,
    eyebrow: `Find us`,
    lead: `You'll find us on Bělehradská street in Vinohrady, near I. P. Pavlova and Náměstí Míru.`,
  },
  studio: { eyebrow: `Studio`, heading: `This is how to find us on Bělehradská`, lead: `You will recognise us by the black sign with white ICONO STUDIO Nails & Barber lettering and the barber pole in the window.` },
  photos: {
    hero: `Barber cutting hair with scissors and comb at ICONO STUDIO`,
    barber: `Men's haircut and clipper fade at ICONO STUDIO on Bělehradská in Prague 2`,
    nails: `Manicure and nail polish at ICONO STUDIO in Prague 2`,
    entrance: `Entrance to ICONO STUDIO at Bělehradská 77 in Prague 2`,
    studioA: `Shop window and black ICONO STUDIO Nails & Barber sign at Bělehradská 77 in Prague 2`,
    studioB: `Entrance and shop window of ICONO STUDIO with a barber pole, seen from the front`,
    studioC: `ICONO STUDIO on Bělehradská street in Prague 2 – sign, shop window and entrance`,
  },
  faq: { heading: `Frequently asked questions`, eyebrow: `FAQ` },
  cta: { heading: `Want an appointment? Message us.`, text: `Choose whichever way suits you best.` },
  prices: { more: `More about this service` },
  reviews: { eyebrow: `Reviews`, heading: `What customers say`, stars: `out of 5 stars`, cta: `Read our reviews on Google` },
  team: { eyebrow: `Team`, heading: `The people you will book with`, at: `at ICONO STUDIO` },
  gallery: { eyebrow: `Gallery`, heading: `From ICONO STUDIO` },
  schema: {
    description: `Barbershop and nail studio at Bělehradská 77 in Prague 2: men's haircuts, beard trims, manicure, gel and acrylic nails, pedicure, eyelash extensions, brows and Head Spa.`,
    catalog: `price list`,
  },

  faqs: {
    order: {
      q: `How do I book?`,
      a: `Message us on {wa} or send an {sms} to {phone}, or just {call}. The message “{msg}” fills in automatically.`,
      callWord: `give us a call`,
    },
    where: {
      q: `Where is ICONO STUDIO?`,
      a: `At {address}, near I. P. Pavlova and Náměstí Míru. {map}.`,
      map: `Get directions on the map`,
    },
    hours: { q: `What are your opening hours?`, a: `{hours}. We are closed on Sundays, or open by reservation – message us and we will arrange it.` },
    prices: { q: `Where can I find the full price list?`, a: `All services and prices are on the <a href="/cenik/">price list</a> page. Prices are in Czech crowns (CZK).` },
  },

  facts: { aria: `Key information`, prices: `Prices`, address: `Address`, phone: `Phone`, open: `Open` },
  orderSteps: {
    eyebrow: `Booking`,
    heading: `Three simple steps`,
    s1: { h: `Message or call`, t: `WhatsApp, SMS or phone – the message “{msg}” is pre-filled.` },
    s2: { h: `We agree a time`, t: `Tell us which service you are interested in and we will choose a time together.` },
    s3: { h: `Come to Bělehradská` },
  },
  teaser: { default: `Prices at a glance`, eyebrow: `Price list`, link: `Full price list` },

  svc: {
    steps: `Process`, about: `About the service`, variants: `Options & prices`, overview: `Overview`,
    pricesOf: `Prices: {name}`, care: `Aftercare`, faqHeading: `FAQ: {name}`,
    related: {
      eyebrow: `Related services`, heading: `You may also like`,
      allBarber: `All barber services`, allNails: `All nail & beauty services`,
    },
    ctaText: `{name}: {street}, {city}. Choose whichever way suits you best.`,
  },

  home: {
    title: `ICONO STUDIO | Nails & Barber Prague 2, Bělehradská 77`,
    description: `Nail studio and barbershop at Bělehradská 77 in Prague 2: manicure, gel nails, pedicure, lashes, men's haircuts and beard trims. Price list and online booking.`,
    hero: {
      eyebrow: `ICONO STUDIO · BĚLEHRADSKÁ 77`,
      aria: `Nail studio & barbershop in Prague 2`,
      l1: `Nails &amp; Barber`, l2: `in the heart`, l3: `of Prague 2`,
      lead: `Nail studio and barbershop in one place: manicure, gel nails, pedicure, lashes, brows, men's haircuts and beard trims.`,
      pricelist: `Price list`,
      cardAria: `Contact and opening hours`,
    },
    marquee: [`Nails`, `Barber`, `Prague 2`, `Bělehradská 77`],
    statement: `Nails &amp; barber. Precisely. All in one place.`,
    about: {
      eyebrow: `About the studio`,
      heading: `One address, two crafts`,
      p1: `You'll find ICONO STUDIO at Bělehradská 77 in Prague 2, in Vinohrady, close to I. P. Pavlova and Náměstí Míru. Under one roof we combine a nail studio and a barbershop: men's haircuts and beard trims, manicure, gel and acrylic nails, pedicure, eyelash extensions, brows and Head Spa.`,
      p2: `Every service has its own page, and prices are in the clear <a href="/cenik/">price list</a>. Book by WhatsApp, SMS or phone {phone}. We are open {hours}; on Sundays we are closed, or open by reservation.`,
    },
    duo: {
      barber: { title: `Barbershop`, text: `Haircuts, beards and full barber care.`, cta: `Browse barber services` },
      nails: { title: `Nails &amp; beauty`, text: `Manicure, nails, pedicure, lashes, brows and Head Spa.`, cta: `Browse nail services` },
    },
    services: { eyebrow: `Services`, heading: `Our services` },
    why: {
      eyebrow: `Why ICONO STUDIO`,
      heading: `One brand, two crafts.`,
      items: [
        { h: `Nails &amp; barber in one place`, t: `Men's haircuts, beards, manicure and pedicure under one brand at one address.` },
        { h: `Clear prices`, t: `The complete price list for every service is on the website – including value packages.` },
        { h: `Central Prague 2`, t: `Bělehradská 77 in Vinohrady, near I. P. Pavlova and Náměstí Míru.` },
        { h: `Easy booking`, t: `Message us on WhatsApp, send an SMS or call. Open on Saturdays too.` },
      ],
    },
  },

  hubs: {
    advice: `Our advice`,
    choose: `What to choose?`,
    nails: {
      crumb: `Nail studio`,
      title: `Nail Studio Prague 2 | Manicure & Pedicure | ICONO STUDIO`,
      description: `Nail studio and beauty at Bělehradská 77 in Prague 2: manicure, gel nails, pedicure, lashes, brows and Head Spa. Price list and booking via WhatsApp.`,
      eyebrow: `Nails & beauty · Bělehradská 77`,
      h1: `Nail studio & beauty Prague 2`,
      lead: `Manicure, gel and acrylic nails, pedicure, eyelash extensions, brows and Head Spa in one place – at Bělehradská 77 in Vinohrady.`,
      imageAlt: `Manicure at the ICONO STUDIO nail studio in Prague 2`,
      introEyebrow: `Nails &amp; beauty`,
      introHeading: `Nails and beauty in Vinohrady`,
      intro: [
        `At ICONO STUDIO, Bělehradská 77 in Prague 2, we care for nails, lashes, brows and skin. From a classic manicure through gel and acrylic nails to pedicure with Footlogix products – every service has its own page with a description, options and prices.`,
        `Not sure which service to choose? Browse the sections below or message us on WhatsApp. Current prices are in the <a href="/cenik/">price list</a>.`,
      ],
      nailsHeading: `Manicure, nails and pedicure`,
      nailsPrices: `Nail prices`,
      beautyHeading: `Lashes, brows and Head Spa`,
      beautyPrices: `Beauty prices`,
      choose: [
        { h: `Well-groomed hands`, t: `Just want care and a clean look? See <a href="/manikura-praha-2/">manicure</a>. Want colour that lasts? Choose Gellak or CND Shellac.` },
        { h: `Length and shape`, t: `Want longer nails? Choose <a href="/gelove-akrylove-nehty-praha-2/">gel or acrylic nails</a>, or Gel X.` },
        { h: `Comfort and relaxation`, t: `For your feet there is <a href="/pedikura-praha-2/">pedicure</a>, for your scalp <a href="/head-spa-praha-2/">Head Spa</a>, for your eyes <a href="/prodluzovani-ras-praha-2/">lashes</a> and <a href="/oboci-kosmetika-praha-2/">brows</a>.` },
      ],
      teaser: `Nail and beauty prices`,
      faqServices: `Which nail and beauty services do you offer?`,
    },
    barber: {
      crumb: `Barbershop`,
      title: `Barbershop Prague 2 | Haircuts & Beards | ICONO STUDIO`,
      description: `Barbershop at Bělehradská 77 in Prague 2: men's haircuts, beard trims, hair wash and men's skincare. Prices from 100 CZK, book via WhatsApp, SMS or phone.`,
      eyebrow: `Barber · Bělehradská 77`,
      h1: `Barbershop Prague 2`,
      lead: `Men's haircuts, beard trims, hair wash and men's skincare at Bělehradská 77 in Prague 2 – Vinohrady. Book via WhatsApp, SMS or phone.`,
      imageAlt: `Barber fading the sides and neckline with clippers at ICONO STUDIO in Prague 2`,
      introHeading: `A barber in central Prague 2`,
      intro: [
        `ICONO STUDIO is a modern barbershop on Bělehradská in Vinohrady. A men's haircut, a haircut combined with a beard trim or a beard trim on its own – choose the service according to what you need right now. Every cut comes with styling and a finishing balm or cologne.`,
        `The barbershop is part of one studio together with the nail studio, so both halves of the brand meet under one roof. You will find the nail and beauty services on the <a href="/nail-studio-praha-2/">Nail studio</a> page.`,
      ],
      servicesEyebrow: `Barber services`,
      servicesHeading: `Haircuts, beards and care`,
      prices: `Barber prices`,
      choose: [
        { h: `Just a haircut`, t: `The Classic Cut includes a hair wash, haircut, styling and balm or cologne. Students up to 18 and children have discounted prices. More on the <a href="/panske-strihy-praha-2/">Men's haircut</a> page.` },
        { h: `Hair and beard`, t: `The VIP Cut combines a haircut with a beard trim in one visit. For the beard alone, see the <a href="/uprava-vousu-praha-2/">Beard trim</a> page.` },
        { h: `Extra care`, t: `VIP face wash, head massage or hair wash – see <a href="/panska-kosmetika-praha-2/">Men's skincare</a>. Haircut every two weeks: −100 CZK on all cuts.` },
      ],
      teaser: `Barber prices at a glance`,
      faqServices: `Which barber services do you offer?`,
      cta: `Time for a cut? Message us.`,
    },
  },

  cenik: {
    title: `Price List | ICONO STUDIO Prague 2 – Nails & Barber`,
    description: `ICONO STUDIO price list, Bělehradská 77, Prague 2: manicure, gel nails, pedicure, lashes, brows, Head Spa, men's haircuts and beards. All prices in one place.`,
    h1: `ICONO STUDIO price list`,
    lead: `An overview of all services and prices: manicure, nails, pedicure, nail art, lashes, brows, Head Spa and barber. Prices are in Czech crowns (CZK); every service links to full details.`,
    chipsAria: `Quick navigation in the price list`,
    moreServices: `More about these services`,
    cta: `Made your choice? Message us.`,
  },

  kontakt: {
    title: `Contact & Opening Hours | ICONO STUDIO Prague 2`,
    description: `Contact ICONO STUDIO – {address}. Phone {phone}, WhatsApp and SMS. Open {hours}. Company ID {ico}.`,
    h1: `Contact and opening hours`,
    lead: `ICONO STUDIO · {address}. Book via WhatsApp, SMS or phone {phone}.`,
    premises: `Premises`,
    legal: `Company details`,
    servicesHeading: `What we can help you with`,
    servicesLead: `Nail studio and barbershop at one address. Pick a service to see details, options and prices.`,
    schemaName: `ICONO STUDIO contact`,
  },

  notFound: {
    title: `Page not found | ICONO STUDIO`,
    description: `Page not found.`,
    h1: `Page not found`,
    lead: `We couldn't find that page. Head back to the home page, check the price list, or book straight away.`,
    home: `Back to the home page`,
  },
};
