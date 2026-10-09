// English copy for the per-service conversion layer. Same structure as extras.cs.mjs (the build checks keys,
// placeholders and links). Amounts are `{placeholders}` filled from the price list (formatted as CZK).
export const extrasEn = {
  common: {
    order: `Book`,
    micro: `Pick a time online from the available slots.`,
    yes: `yes`,
    no: `no`,
    scrollHint: `You can scroll the table sideways.`,
    chipsAria: `On this page`,
    chips: {
      notes: `Good to know`,
      options: `Options`, price: `Prices`, guide: `How to choose`, steps: `Process`, care: `Aftercare`,
      combos: `Combinations`, faq: `FAQ`, location: `Find us`,
    },
    combos: { eyebrow: `Combinations`, cta: `Call to arrange both services`, more: `Details` },
    problem: { priceLabel: `Price` },
    ritual: { includes: `Included` },
  },

  pages: {
    /* ============================================================ MANICURE */
    'manikura-praha-2': {
      heroCta: `Book a manicure`,
      final: { h: `Manicure at Bělehradská? Book online.`, t: `Pick a time online and we will confirm the option on the spot. Bělehradská 77, Prague 2, close to I. P. Pavlova.` },
      bands: [
        { h: `Know which option you want?`, t: `Book a time online and we will confirm the option on the spot.` },
        { h: `Torn between Gellak and CND Shellac?`, t: `We will advise on the spot based on how you use your hands. Book online or give us a call.` },
      ],
      sigs: [{
        chip: `Comparison`, eyebrow: `Comparing the options`, h2: `Classic, Gellak or CND Shellac?`,
        lead: `Three options side by side – including the price of the hand spa and of gel polish removal, so the final price holds no surprises.`,
        cols: [`Classic`, `Gellak`, `CND Shellac`],
        rows: [
          { label: `Colour on the nails` },
          { label: `Cured in a lamp, dry at once` },
          { label: `Branded gel polish` },
          { label: `Price` },
          { label: `Package with hand spa` },
          { label: `Gel polish removal` },
        ],
        note: `CND Shellac lasts from around 10 days to 3 weeks and can be soaked off; Gellak is harder, usually lasts longer and often needs an electric nail drill for removal. Leave removal to the studio and do not peel the polish off at home.`,
      }],
      combos: {
        h2: `Combine your manicure with another service`,
        lead: `Want several services in one visit? Call us and we will arrange it. Prices are from the price list, per service.`,
        items: [
          { title: `Gellak manicure + Gellak pedicure`, text: `Hands and feet looked after in one visit.` },
          { title: `Gellak manicure + brow tint`, text: `Nails and brows in a single visit.` },
        ],
      },
    },

    /* ============================================================ GEL & ACRYLIC NAILS */
    'gelove-akrylove-nehty-praha-2': {
      heroCta: `Book new nails`,
      final: { h: `New nails at Bělehradská? Book online.`, t: `Pick a time online and bring an inspiration photo – we will go through the shape together. Bělehradská 77, Prague 2.` },
      bands: [
        { h: `Sure about shape and length?`, t: `Book a time online and show us your inspiration photo on the spot.` },
        { h: `Need a refill?`, t: `A refill costs less than a new set. Book online or give us a call.` },
      ],
      sigs: [
        {
          chip: `Nail shapes`, eyebrow: `Nail shape`, h2: `Which nail shape should you choose?`,
          lead: `The five most common shapes. We choose together – feel free to bring some inspiration.`,
          items: [
            { name: `Square`, text: `Straight tip, practical and sturdy.` },
            { name: `Round`, text: `Soft edges, practical for every day.` },
            { name: `Oval`, text: `Makes fingers look longer.` },
            { name: `Almond`, text: `Tapered tip, makes fingers look longer.` },
            { name: `Coffin`, text: `A bold, fashionable shape with a straight tip.` },
          ],
          cta: `Not sure which shape suits you? We will advise on the spot.`,
          ctaLabel: `Book a time`,
        },
        {
          chip: `Gel, acrylic, Gel X`, eyebrow: `Comparing materials`, h2: `Gel, acrylic or Gel X?`,
          lead: `Three techniques, the same price for new nails with colour. The difference is the material and how it feels to wear.`,
          cols: [`Gel`, `Acrylic`, `Gel X`],
          rows: [
            { label: `Material`, cells: [`Flexible gel cured in a lamp`, `Liquid and powder, hardens in the air`, `Pre-shaped gel tips`] },
            { label: `Result`, cells: [`Light and natural`, `Sturdy, suited to longer shapes`, `Light, natural-looking`] },
            { label: `Suits`, cells: [`Everyday wear, first artificial nails`, `Longer or bolder shapes`, `A light extension`] },
            { label: `New nails with colour` },
          ],
          note: `Acrylic has a typical smell during application. Refills are usually booked every two to four weeks.`,
        },
      ],
      combos: {
        h2: `Nails and more care in one visit`,
        lead: `Want several services in one visit? Call us and we will arrange it. Prices are from the price list, per service.`,
        items: [
          { title: `New nails + Gellak pedicure`, text: `Hands and feet in one visit.` },
          { title: `Nail refill + brow tint`, text: `Nail and brow upkeep in one go.` },
        ],
      },
    },

    /* ============================================================ PEDICURE */
    'pedikura-praha-2': {
      heroCta: `Book a pedicure`,
      final: { h: `Pedicure at Bělehradská? Book online.`, t: `Pick a time online and we will confirm the option on the spot. Bělehradská 77, Prague 2.` },
      bands: [
        { h: `Picked your option?`, t: `Book a time online and we will confirm the option on the spot.` },
        { h: `Troubled by heels or toenails?`, t: `Call us and tell us what bothers you so we can suggest the right option. With any health problem, see a doctor first.` },
      ],
      sigs: [{
        chip: `What to choose`, eyebrow: `Depending on what you need`, h2: `What do you want from a pedicure?`,
        lead: `Find the sentence that fits – you see the option and the price straight away.`,
        items: [
          { need: `I just want tidy feet`, pick: `Classic pedicure`, text: `Nail and cuticle care, removal of hardened skin and skin treatment.` },
          { need: `I want colour that lasts`, pick: `Pedicure with Gellak or CND Shellac`, text: `Gel polish is cured in a lamp. Nails are dry at once and the colour lasts longer than regular polish.` },
          { need: `I have dry heels and hardened skin`, pick: `Medical pedicure Footlogix`, text: `Professional skincare for dry and heavily used feet. Not a medical treatment.` },
          { need: `I want to relax`, pick: `Value package with foot spa`, text: `Pampering foot care on top – in a value package.` },
        ],
        note: `Diabetes, nail fungus, inflammation or wounds? See a doctor first. A pedicure at the studio does not replace medical treatment.`,
      }],
      combos: {
        h2: `A pedicure and a little extra`,
        lead: `Want several services in one visit? Call us and we will arrange it. Prices are from the price list, per service.`,
        items: [
          { title: `Gellak pedicure + Gellak manicure`, text: `Feet and hands in one visit.` },
          { title: `Pedicure with foot spa + Head Spa`, text: `Foot spa and Head Spa in one visit.` },
        ],
      },
    },

    /* ============================================================ EYELASH EXTENSIONS */
    'prodluzovani-ras-praha-2': {
      heroCta: `Book lashes`,
      final: { h: `Lashes at Bělehradská? Book online.`, t: `Pick a time online – we confirm the lash type and whether it is a new set or a refill on the spot.` },
      bands: [
        { h: `Know the effect you want?`, t: `Book a time online – we confirm the lash type and whether it is a new set or a refill on the spot.` },
        { h: `Sensitive eyes or contact lenses?`, t: `Give us a call in advance and we will go through what is needed.` },
      ],
      sigs: [{
        chip: `Density`, eyebrow: `Lash types`, h2: `From a natural effect to maximum density`,
        lead: `The more fine lashes per natural lash, the denser and bolder the look.`,
        items: [
          { name: `Classic 1:1`, effect: `Natural effect`, text: `One extension on every natural lash. Subtle length and fullness, a good choice for a first visit.` },
          { name: `Volume 2D–5D`, effect: `Denser and bolder`, text: `A fan of 2 to 5 fine lashes on one natural lash. The number tells you how many lashes are in the fan.` },
          { name: `Mega Volume`, effect: `Maximum density`, text: `Even denser fans of more fine lashes for a full, dramatic look.` },
        ],
        note: `A refill costs less than a new set and is usually booked every two to four weeks.`,
      }],
      combos: {
        h2: `Lashes and brows together`,
        lead: `Want several services in one visit? Call us and we will arrange it. Prices are from the price list, per service.`,
        items: [
          { title: `Classic 1:1 refill + brow tint`, text: `Brows and lashes give your eyes a clear frame.` },
          { title: `Volume lashes + brow shaping`, text: `Denser lashes and tidy brows in one visit.` },
        ],
      },
    },

    /* ============================================================ BROWS & FACIALS */
    'oboci-kosmetika-praha-2': {
      heroCta: `Book brows`,
      final: { h: `Brows at Bělehradská? Book online.`, t: `Pick a time online – we confirm whether you want shaping only or a tint as well on the spot.` },
      bands: [
        { h: `Shaping or tinting?`, t: `Book a time online and we will confirm the option on the spot.` },
        { h: `Want facial care with your brows?`, t: `Call us and tell us what your skin needs. Please come without make-up if you can.` },
      ],
      sigs: [{
        chip: `Comparison`, eyebrow: `Comparing the services`, h2: `Shaping, tinting or facial care?`,
        lead: `Three services side by side – choose by what your brows and skin need.`,
        cols: [`Brow shaping`, `Tint + shaping`, `Facial care`],
        rows: [
          { label: `Brow shaping` },
          { label: `Brow tint` },
          { label: `Facial treatment and massage` },
          { label: `Price` },
          { label: `Suits you if…`, cells: [`your brows are full and dark enough`, `your brows are light, uneven or sparse`, `you want to give your skin more than everyday washing and cream`] },
          { label: `Good to know`, cells: [`Usually every three to five weeks`, `The tint fades gradually, so it is repeated with shaping`, `Please come without make-up if you can`] },
        ],
        note: `If you are allergic to tints or have sensitive skin, please tell us in advance.`,
      }],
      combos: {
        h2: `Brows and more care in one visit`,
        lead: `Want several services in one visit? Call us and we will arrange it. Prices are from the price list, per service.`,
        items: [
          { title: `Brow tint + classic 1:1 lashes`, text: `Brows and lashes together give your eyes a clear frame.` },
          { title: `Facial care + brow shaping`, text: `Skin and brows in one visit.` },
        ],
      },
    },

    /* ============================================================ HEAD SPA */
    'head-spa-praha-2': {
      heroCta: `Book Head Spa`,
      final: { h: `Head Spa at Bělehradská? Book online.`, t: `Pick a time that suits you. Bělehradská 77, Prague 2.` },
      bands: [
        { h: `Want a moment just for yourself?`, t: `Book a time online. Please allow plenty of time.` },
        { h: `Want Head Spa for someone close to you?`, t: `Book online or give us a call.` },
      ],
      sigs: [{
        chip: `The ritual`, eyebrow: `What you get`, h2: `Five steps for one price`,
        lead: `From calming sound through massage to a regenerating oil. Everything is included in the Head Spa price.`,
        priceLabel: `Head Spa – the complete treatment`,
        priceNote: `We will confirm how long the visit takes when you book.`,
        cta: `Book Head Spa`,
        note: `Head Spa is relaxing care, not a medical treatment. With eczema, psoriasis or irritation, see a doctor first.`,
      }],
      combos: {
        h2: `Head Spa and a little extra`,
        lead: `Want several services in one visit? Call us and we will arrange it. Prices are from the price list, per service.`,
        items: [
          { title: `Head Spa + pedicure with foot spa`, text: `Feet and head – a full relaxation session in one place.` },
          { title: `Head Spa + facial care`, text: `Head and skin in one visit.` },
        ],
      },
    },

    /* ============================================================ MEN'S HAIRCUT */
    'panske-strihy-praha-2': {
      heroCta: `Book a haircut`,
      final: { h: `A haircut at Bělehradská? Book online.`, t: `Pick a time online and we will confirm the cut on the spot. Bělehradská 77, Prague 2, close to I. P. Pavlova.` },
      bands: [
        { h: `Know which cut you want?`, t: `Book a time online and we will confirm the cut on the spot. Coming every two weeks? Tell us during your visit.` },
        { h: `Want your beard done with the haircut?`, t: `The VIP Cut includes both. Call us and we will suggest a time.` },
      ],
      sigs: [{
        chip: `Cut comparison`, eyebrow: `What is included`, h2: `Which cut suits you?`,
        lead: `A tick means it is included. The table is read straight from the price list, so it always matches.`,
        priceLabel: `Price`,
        note: `The {off} discount on all cuts applies when you get a haircut every two weeks. We will confirm the conditions when you book.`,
      }],
      combos: {
        h2: `A haircut and a little extra`,
        lead: `Want several services in one visit? Call us and we will arrange it. Prices are from the price list, per service.`,
        items: [
          { title: `Classic Cut + beard trim`, text: `Haircut and beard separately. The VIP Cut includes both for {vip}.` },
          { title: `Premium Cut + men's skincare`, text: `A haircut with massage and skin care in one visit.` },
        ],
      },
    },

    /* ============================================================ BEARD TRIM */
    'uprava-vousu-praha-2': {
      heroCta: `Book a beard trim`,
      final: { h: `Beard at Bělehradská? Book online.`, t: `Pick a time online – we confirm whether you want the full trim or just the trimmer on the spot.` },
      bands: [
        { h: `Want a clean beard shape?`, t: `Book a time online. Please do not trim your beard at home right before the visit.` },
        { h: `Doing your hair too?`, t: `The VIP Cut combines a haircut with a beard trim in one visit. Give us a call.` },
      ],
      sigs: [{
        chip: `Face shape`, eyebrow: `Beard shape`, h2: `Which beard shape suits you?`,
        lead: `A rough guide by face shape. Your barber will advise during the consultation, based on how dense your beard is.`,
        items: [
          { face: `Rounder face`, beard: `Longer chin, sharper lines`, text: `The face looks longer.` },
          { face: `Square face`, beard: `Rounder shapes`, text: `Softens a strong jaw.` },
          { face: `Longer face`, beard: `Shorter chin, fuller sides`, text: `Adds width at the sides.` },
        ],
        note: `Sensitive skin or ingrown hairs? Tell your barber – the process will be adapted.`,
      }],
      combos: {
        h2: `Beard and a little extra`,
        lead: `Want several services in one visit? Call us and we will arrange it. Prices are from the price list, per service.`,
        items: [
          { title: `Beard trim + Classic Cut`, text: `Hair and beard separately – or go straight to the VIP Cut for {vip}.` },
          { title: `Beard trim + men's skincare`, text: `Beard and after-shave skin care.` },
        ],
      },
    },

    /* ============================================================ MEN'S SKINCARE & HAIR WASH */
    'panska-kosmetika-praha-2': {
      heroCta: `Book a treatment`,
      final: { h: `Care at Bělehradská? Book online.`, t: `Pick a time online – we confirm VIP face wash, head massage or hair wash on the spot.` },
      bands: [
        { h: `Picked your service?`, t: `Book a time online. You can combine the care with a visit to the barber – just call.` },
        { h: `Want care with your haircut?`, t: `Call us and tell us what you want to combine so we can prepare a suitable time.` },
      ],
      sigs: [{
        chip: `Smart tips`, eyebrow: `From the price list`, h2: `How to get more from the care`,
        lead: `Three observations that come straight from the price list.`,
        items: [
          { title: `Massage with a haircut`, text: `The Premium Cut ({premium}) includes a massage, the Classic Cut ({classic}) does not. A head massage on its own costs {solo}.` },
          { title: `Hair wash is often included`, text: `The Classic, Premium, VIP and VIP All Inclusive cuts include it. On its own you can book it from {wash}.` },
          { title: `Skin after shaving`, text: `Steam, mask and moisturising help keep the skin from feeling tight. Add the care for {care} to a beard trim ({beard}).` },
        ],
      }],
      combos: {
        h2: `Care and a little extra`,
        lead: `Want several services in one visit? Call us and we will arrange it. Prices are from the price list, per service.`,
        items: [
          { title: `Classic Cut + men's skincare`, text: `A haircut and skin care in one visit.` },
          { title: `Beard trim + men's skincare`, text: `A tidy beard and moisturised skin.` },
        ],
      },
    },
  },
};
