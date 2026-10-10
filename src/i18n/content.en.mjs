// English copy for the service pages, keyed by the Czech slug. Same structure as the Czech base in
// ../content.mjs; only translatable fields live here (ids, groups, art, photo, related come from the base).
// Internal links are written with the Czech path (e.g. /cenik/) and rewritten to /en/… when rendered.
// Amounts in the prose are typed by hand – `npm run check` verifies them against the price list.
export const contentEn = {
  'manikura-praha-2': {
    name: `Manicure`,
    cardText: `Classic, Gellak or CND Shellac. With or without hand spa.`,
    title: `Manicure Prague 2 – Classic, Gellak, Shellac | ICONO STUDIO`,
    description: `Manicure at Bělehradská 77 in Prague 2: classic from 350 CZK, Gellak gel polish from 550 CZK, CND Shellac from 650 CZK. Hand spa packages available.`,
    h1: `Manicure Prague 2`, eyebrow: `Nails · Bělehradská 77`,
    lead: `Classic manicure, Gellak or CND Shellac at Bělehradská 77 in Vinohrady. Choose a simple nail treatment or a value package with hand spa.`,
    imageAlt: `Hands during a manicure with polished nails at ICONO STUDIO in Prague 2`,
    artAlt: `Manicure Prague 2: well-groomed hands with polished nails, a nail polish bottle and a file on linen – ICONO STUDIO`,
    intro: {
      h2: `Well-groomed hands in central Prague 2`,
      paras: [
        `A manicure is the foundation of hand care. At ICONO STUDIO we do it at Bělehradská 77, close to I. P. Pavlova and Náměstí Míru, so it is easy to reach from Vinohrady and the surrounding area. We shorten and shape your nails, tidy the cuticles and polish them as you wish – or leave them natural.`,
        `There are three basic options: a classic manicure without colour, a manicure with Gellak gel polish and a manicure with CND Shellac gel polish. You can add a hand spa – pampering care for your hands – to any of them in a value package. You will find the prices below and in the full <a href="/cenik/">price list</a>.`,
      ],
    },
    options: {
      h2: `Manicure options and prices`,
      items: [
        { title: `Classic manicure`, text: `Basic care for natural nails: shortening, shaping, cuticle care and a finishing treatment. A good choice if you want tidy hands without colour and a natural look. The package also includes a hand spa.` },
        { title: `Manicure with Gellak gel polish`, text: `A nail treatment combined with Gellak gel polish. Gel polish is cured in a lamp, so it is dry the moment it is applied and lasts considerably longer than regular polish. In the package, the hand spa costs just 50 CZK extra.` },
        { title: `Manicure with CND Shellac`, text: `The same polish treatment, but with CND Shellac, a branded gel polish. It costs 100 CZK more than the Gellak option. Here too you can choose a package with hand spa, which costs 50 CZK more than the manicure alone.` },
      ],
    },
    notes: {
      h2: `CND Shellac, Gellak and P.Shine: what is what`,
      items: [
        { h: `CND Shellac`, paras: [
          `CND Shellac is a hybrid polish that combines the benefits of traditional nail polish and gel polish. It feels thin, lightweight and natural, requires minimal filing of the natural nail, is very easy to remove by soaking, and typically lasts from around 10 days to 3 weeks.`,
          `Actual durability depends on the condition of your natural nails and your daily habits. If you are frequently in contact with water, cleaning products or do a lot of manual work, Shellac may start to lift or chip sooner.`,
        ] },
        { h: `Gel polish (Gellak)`, paras: [
          `Gel polish (Gellak) also uses a base coat and follows a similar application process to CND Shellac. The main difference is that gel polish is harder and has stronger adhesion, which usually makes it more durable than Shellac. The trade-off is that removal often requires an electric nail drill rather than soaking alone.`,
        ] },
        { h: `P.Shine`, paras: [
          `P.Shine is a Japanese natural nail care treatment designed to nourish, strengthen and give natural nails a healthy, high-gloss finish.`,
          `No coloured nail polish is used during this treatment. The result is smooth, well-groomed and naturally shiny nails.`,
        ] },
      ] },
    guide: {
      h2: `Which manicure should you choose?`,
      paras: [
        `If you simply want tidy hands and no colour, a <strong>classic manicure</strong> is enough. It is the quickest and cheapest option and works well as regular maintenance between polish appointments.`,
        `If you want colour that lasts, choose <strong>Gellak</strong> or <strong>CND Shellac</strong>. Both are gel polishes cured in a lamp – the nails are dry straight away and nothing smudges. <strong>CND Shellac</strong> is thin and lightweight, can be soaked off and lasts from around 10 days to 3 weeks. <strong>Gellak</strong> is harder and has stronger adhesion, so it usually lasts longer, but removal often needs an electric nail drill.`,
        `If you want to relax, choose a <strong>package with hand spa</strong>. For the gel polish options, the package costs only 50 CZK more than the manicure alone, so it is worth it whenever you fancy a little extra.`,
        `And if you would like to decorate your nails, add nail art – from simple colour accents through French tips and ombré to rhinestones or hand-painted designs. You will find the nail art prices in the table below.`,
      ],
    },
    steps: {
      h2: `How a manicure works`,
      items: [
        { h: `Consultation`, t: `Tell us which option you would like, which nail shape you prefer and, if you want, which colour. If you are not sure, we will advise you.` },
        { h: `Nail and cuticle care`, t: `Nails are shortened and shaped and the cuticles around them are tidied.` },
        { h: `Polish and curing`, t: `With Gellak and CND Shellac, the colour is applied in layers and cured in a lamp. A classic manicure can be done without colour.` },
        { h: `Finishing care`, t: `To finish, your hands are treated so they look tidy and smooth. With the packages, a hand spa is part of the visit.` },
      ],
    },
    care: {
      h2: `How to look after your hands after a manicure`,
      items: [
        `Use a cuticle oil or a nourishing cream regularly. It keeps the cuticles soft, and your nails look neat for weeks after your visit.`,
        `Wear gloves when washing dishes and cleaning – cleaning products weaken both nails and gel polish.`,
        `Do not use your nails as tools for opening cans or scraping off stickers. They can snap and the polish can be damaged.`,
        `Do not peel or pick off gel polish – you will damage the surface of your natural nail. Have it removed instead – the price list shows Shellac removal at 200 CZK and Gellak removal at 150 CZK.`,
        `Once your nails have grown out or the polish starts to lift, book a new polish appointment.`,
      ],
    },
    faq: [
      { q: `How much does a manicure cost in Prague 2?`, a: `A classic manicure costs 350 CZK, a manicure with Gellak 550 CZK and a manicure with CND Shellac 650 CZK. Value packages with hand spa start at 490 CZK. Current prices are in the <a href="/cenik/">price list</a>.` },
      { q: `What is the difference between Gellak and CND Shellac?`, a: `Both are gel polishes cured in a lamp and applied over a base coat. CND Shellac feels thin, lightweight and natural, needs minimal filing of the natural nail, can be soaked off and lasts from around 10 days to 3 weeks. Gellak is harder and has stronger adhesion, so it usually lasts longer, but removal often requires an electric nail drill rather than soaking alone. Prices are in the <a href="/cenik/">price list</a>.` },
      { q: `How long does gel polish last?`, a: `CND Shellac usually lasts from around 10 days to 3 weeks; Gellak, being harder and more adhesive, usually lasts longer. Actual durability depends on the condition of your natural nails and your daily habits – if you are often in contact with water or cleaning products, or do a lot of manual work, the polish may start to lift sooner. Once your nail has grown out, we recommend booking removal and a fresh polish.` },
      { q: `What is a hand spa?`, a: `A hand spa is extra pampering care for your hands that you can add to a manicure in a value package. We are happy to explain the exact procedure when you book.` },
      { q: `Can you remove gel polish that was applied elsewhere?`, a: `Yes, we offer Shellac / Gellak removal separately: Shellac for 200 CZK, Gellak for 150 CZK. Please do not peel it off yourself, as you would damage the nail.` },
    ],
  },

  'gelove-akrylove-nehty-praha-2': {
    name: `Gel & acrylic nails`,
    cardText: `New nails with colour, refills and Gel X. Nail art as you like.`,
    title: `Gel & Acrylic Nails Prague 2 | ICONO STUDIO`,
    description: `Gel, acrylic and Gel X nail sculpting at Bělehradská 77 in Prague 2. New nails with colour from 650 CZK, refills from 590 CZK. Nail art on request.`,
    h1: `Gel & Acrylic Nails Prague 2`, eyebrow: `Nails · Bělehradská 77`,
    lead: `Sculpting of gel, acrylic and Gel X nails with colour. New nails from 650 CZK, refills from 590 CZK, plus a value package with hand spa.`,
    imageAlt: `Gel nails in different shapes – square, round, oval, almond and coffin`,
    artAlt: `Gel and acrylic nails Prague 2: hand with long almond nails in beige with one black accent nail`,
    intro: {
      h2: `Nails sculpted to your taste`,
      paras: [
        `Artificial nails give you the length, shape and strength that natural nails often lack. Sculpting means we build the nail from gel or acrylic directly on your own nail, in the length, shape and colour you like. We work at ICONO STUDIO, Bělehradská 77 in Prague 2.`,
        `We offer new gel or acrylic nails with colour, refills of existing nails and Gel X nails. You can add nail art to any option – from single-colour accents through French tips and ombré to rhinestones and hand-painting. The full prices are in the tables below and in the <a href="/cenik/">price list</a>.`,
      ],
    },
    options: {
      h2: `Types of artificial nails and prices`,
      items: [
        { title: `New gel or acrylic nails`, text: `Complete nail sculpting with colour. If you add a hand spa in the package, you pay 50 CZK more than for the sculpting alone and leave with tidy, pampered hands.` },
        { title: `Nail refills`, text: `As your nail grows, the line between the natural nail and the sculpted nail moves up. A refill evens it out, restores the shape and refreshes the colour. It is cheaper than a new set.` },
        { title: `Gel X nails`, text: `A modern technique in which the nail is extended with pre-shaped gel tips. The result tends to feel light and look natural. The price is the same as for new gel or acrylic nails with colour.` },
      ],
    },
    notes: {
      h2: `Gel, acrylic and Gel X: comparing the materials`,
      items: [
        { h: `Gel`, paras: [
          `Gel has a liquid or thicker gel-like consistency, has little to no noticeable odour, provides medium hardness and is cured under a UV/LED lamp. It has good adhesion, a smooth glossy finish and feels lightweight and natural on the nails.`,
          `It is suitable for nails with few imperfections and for clients whose daily activities do not involve heavy manual work. Gel is generally softer and more flexible, so removal is usually quicker.`,
        ] },
        { h: `Acrylic`, paras: [
          `Acrylic is created by combining acrylic powder with liquid monomer. It has a characteristic smell, is harder and more durable than gel, and air-dries without the need for a UV/LED lamp.`,
          `It is particularly suitable for long nail extensions, creating and correcting nail shapes, nails with imperfections, and clients who frequently use their hands for manual work.`,
          `However, there is no rule that short nails must always be done with gel. A thin layer of acrylic works well on short nails too, making them stronger while keeping a natural appearance. Whether gel or acrylic is more suitable also depends on the individual condition and characteristics of your natural nails.`,
        ] },
        { h: `Gel X nails`, paras: [
          `A modern nail extension method using soft gel tips (Soft Gel Tips), providing a natural appearance and a very lightweight feel on the nails.`,
        ] },
        { h: `Warmth under the lamp`, paras: [
          `A mild warming or burning sensation while curing gel under the lamp is completely normal. The intensity of the heat may vary from one appointment to another. If the gel feels hotter than during your previous appointment, this may be because the natural nail is slightly thinner after the old gel has been removed, or because the layer of gel being cured is thicker.`,
          `If it feels too hot, simply remove your hand from the lamp for a few seconds and then place it back inside.`,
        ] },
        { h: `CND Shellac and gel polish (Gellak)`, paras: [
          `Not sure whether to choose gel, acrylic or a polish? CND Shellac is thin, can be soaked off and lasts from around 10 days to 3 weeks. Gel polish (Gellak) is harder, has stronger adhesion and usually lasts longer, but removal often needs an electric nail drill. More on the <a href="/manikura-praha-2/">Manicure</a> page.`,
        ] },
      ] },
    guide: {
      h2: `Gel, acrylic or Gel X: which should you choose?`,
      paras: [
        `<strong>Gel</strong> is a flexible material that is cured in a lamp. Gel nails feel light and natural, so they suit everyday wear and anyone trying artificial nails for the first time.`,
        `<strong>Acrylic</strong> is made by mixing a liquid with a powder and hardens in the air. It is strong and suits longer or bolder shapes. A typical smell is noticeable during application.`,
        `<strong>Gel X</strong> uses pre-shaped gel tips. It is a modern alternative for anyone who wants an extension with a light result.`,
        `<strong>Nail shape:</strong> the most common are square, round, oval, almond and coffin. Square and round are practical, oval and almond visually lengthen the fingers and coffin is bold and fashionable. We will choose the shape together – feel free to bring some inspiration.`,
        `If you want <strong>extra-long nails</strong>, expect a surcharge – the price list shows it as 50, 150 and 200 CZK. Not sure? Tell us how you use your hands and how long you want your nails to be, and we will recommend the material and the shape.`,
      ],
    },
    steps: {
      h2: `How sculpting works`,
      items: [
        { h: `Consultation`, t: `We agree the material (gel, acrylic or Gel X), the length, shape and colour. We are happy to see an inspiration photo.` },
        { h: `Nail preparation`, t: `The natural nail is prepared so that the sculpting holds well.` },
        { h: `Sculpting`, t: `The nail is shaped to the required length and form and cured.` },
        { h: `Colour and nail art`, t: `The nails are coloured and, if you wish, decorated – glitter, rhinestones, ombré, French tips or hand-painting.` },
        { h: `Finishing`, t: `The surface is smoothed and the nails are treated so the result looks clean and neat.` },
      ],
    },
    care: {
      h2: `Aftercare and refills`,
      items: [
        `A refill is usually needed after two to four weeks, depending on how fast your nails grow. A timely refill preserves the shape and reduces the risk of breakage.`,
        `Do not pull off a lifted piece – you risk damaging the natural nail. Book a repair instead. If a single nail breaks or lifts between refills, the single nail repair service costs 70 CZK.`,
        `Use cuticle oil regularly and wear gloves when cleaning.`,
        `Do not take artificial nails off yourself. Removal of artificial nails costs 250 CZK.`,
        `If you want to change the colour, the price list shows a colour change on artificial nails (under 10 days) at 350 CZK. We will confirm the exact conditions when you book.`,
      ],
    },
    faq: [
      { q: `How much do gel nails cost in Prague 2?`, a: `New gel or acrylic nails with colour cost 650 CZK, a refill 590 CZK and Gel X nails 650 CZK. The value package with hand spa is 700 CZK and its refill 650 CZK. Nail art, extra-long nails and other services are charged separately – everything is in the <a href="/cenik/">price list</a>.` },
      { q: `How often do artificial nails need refilling?`, a: `Usually every two to four weeks, depending on how fast your nails grow and how you use them. When you book a refill, you choose the cheaper refill option.` },
      { q: `What is the difference between gel and acrylic?`, a: `Gel is more flexible and is cured in a lamp, acrylic is stronger and hardens in the air. Both give your nail length and shape; they differ mainly in how they feel to wear and how well they suit different shapes. We are happy to recommend one based on your lifestyle.` },
      { q: `What is Gel X?`, a: `Gel X is an extension technique using pre-shaped gel tips. It suits a light, natural-looking result.` },
      { q: `How much does removal of artificial nails cost?`, a: `Removal of artificial nails costs 250 CZK, removal of Shellac gel polish alone 200 CZK and of Gellak 150 CZK. Please have it done at the studio and do not take the nails off yourself.` },
    ],
  },

  'pedikura-praha-2': {
    name: `Pedicure`,
    cardText: `Classic, with gel polish and medical pedicure with Footlogix.`,
    title: `Pedicure Prague 2 | Classic & Footlogix | ICONO STUDIO`,
    description: `Pedicure at Bělehradská 77 in Prague 2: classic from 490 CZK, with gel polish from 590 CZK, medical pedicure with Footlogix from 590 CZK. Foot spa packages.`,
    h1: `Pedicure Prague 2`, eyebrow: `Nails · Bělehradská 77`,
    lead: `Classic and polished pedicure plus medical pedicure with Footlogix at Bělehradská 77. Choose simple foot care or a value package with foot spa.`,
    imageAlt: `Foot with polished toenails – pedicure at ICONO STUDIO`,
    artAlt: `Pedicure Prague 2: groomed feet with polished toenails on a cream towel, river stones and a bowl`,
    intro: {
      h2: `Foot care in central Prague 2`,
      paras: [
        `Pedicure is not just for summer and sandals. Regular care of your feet and toenails means more comfortable walking, smooth skin and a tidy look all year round. At ICONO STUDIO we do it at Bělehradská 77 in Prague 2, close to I. P. Pavlova.`,
        `We offer a classic pedicure, a pedicure with Gellak or CND Shellac gel polish and a medical pedicure with Footlogix products. Most options are also available in value packages with foot spa – pampering foot care on top. All prices are below and in the <a href="/cenik/">price list</a>.`,
      ],
    },
    options: {
      h2: `Pedicure types and prices`,
      items: [
        { title: `Classic pedicure`, text: `The foundation of foot care: nail and cuticle care, removal of hardened skin and skin treatment. Suitable for regular maintenance. The package adds a foot spa.` },
        { title: `Pedicure with polish`, text: `A pedicure combined with Gellak or CND Shellac gel polish. If you only need your toes coloured, choose polish only. The colour lasts several weeks and the nails are dry right after application, so they are comfortable in sandals and in shoes.` },
        { title: `Medical pedicure with Footlogix`, text: `A pedicure using Footlogix professional skincare, focused on dry and stressed skin, hardened areas and cracked heels. This is not a medical treatment. It is available as a Classic version without colour or with Gellak or CND Shellac polish.` },
      ],
    },
    notes: {
      h2: `Footlogix Pedicure: professional foot care`,
      items: [
        { h: `What Footlogix Pedicure is`, paras: [
          `Footlogix Pedicure is a specialised foot and heel care treatment using products from Footlogix, a professional Canadian brand.`,
          `Footlogix is a well-established brand and one of the pioneers of the Pediceutical concept, combining professional beauty care with targeted foot care.`,
          `Unlike traditional heel care, which may rely mainly on filing, grinding or prolonged soaking in water, Footlogix focuses on treating common foot skin concerns in a safe, professional and targeted way.`,
        ] },
        { h: `Who it is for`, paras: [
          `The treatment is gentle and can provide highly effective results.`,
          `It is also suitable for clients with sensitive skin and, when professionally applied, may be suitable for clients with diabetes or gestational diabetes. Clients with these conditions should always inform the salon before treatment.`,
        ] },
      ] },
    guide: {
      h2: `Which pedicure should you choose?`,
      paras: [
        `Just want tidy feet without colour? Choose a <strong>classic pedicure</strong>. Want colour that lasts? Choose a <strong>pedicure with Gellak</strong> or <strong>CND Shellac</strong>, or <strong>polish only</strong> if your nails need no other treatment.`,
        `If dry heels, hardened skin or stressed feet bother you, the <strong>medical pedicure with Footlogix</strong> is designed for that. And if you want to relax, add a <strong>foot spa</strong> with one of the packages.`,
        `<strong>Important notice:</strong> if you have diabetes, a fungal nail infection, inflammation, wounds or other health problems with your feet, consult a doctor first. A pedicure at the studio does not replace medical treatment.`,
      ],
    },
    steps: {
      h2: `How a pedicure works`,
      items: [
        { h: `Consultation and preparation`, t: `We choose the option and talk through any problems, such as dry heels or ingrown nails. With the packages, a foot spa is part of the visit.` },
        { h: `Nail and cuticle care`, t: `Nails are shortened and shaped and the cuticles around them are tidied.` },
        { h: `Skin care for your feet`, t: `Hardened skin is removed and the skin is treated. With the medical pedicure we add Footlogix products.` },
        { h: `Polish (optional)`, t: `We polish the nails with Gellak or CND Shellac gel polish and cure it in a lamp.` },
        { h: `Finishing care`, t: `To finish, your feet are treated so they are smooth and tidy.` },
      ],
    },
    care: {
      h2: `Foot care after a pedicure`,
      items: [
        `Use a moisturising cream on your heels and feet every day. The skin stays smooth and fewer hardened areas form.`,
        `If you wear closed shoes, choose pairs with enough room for your toes. Pressure is a common cause of hardened skin and ingrown nails.`,
        `Do not walk barefoot in swimming pools, saunas and public showers – it protects against fungal infections.`,
        `Book regular pedicures usually every four to six weeks, depending on how fast your nails grow and how hard you are on your feet.`,
        `Do not peel off gel polish. Have it removed (Shellac 200 CZK, Gellak 150 CZK) to avoid damaging the nail.`,
      ],
    },
    faq: [
      { q: `How much does a pedicure cost in Prague 2?`, a: `A classic pedicure costs 490 CZK, a pedicure with Gellak 590 CZK and a pedicure with CND Shellac 650 CZK. A medical pedicure with Footlogix starts at 590 CZK. Value packages with foot spa start at 590 CZK. The full prices are in the <a href="/cenik/">price list</a>.` },
      { q: `What is Footlogix?`, a: `Footlogix is a range of professional foot skincare, designed above all for dry and stressed skin. In our price list, the medical pedicure with Footlogix is available with Gellak or CND Shellac polish.` },
      { q: `How often should I get a pedicure?`, a: `Usually once every four to six weeks, depending on how fast your nails grow and how hard you are on your feet. If your nails are polished, plan maintenance according to how long your polish lasts.` },
      { q: `Can I get a pedicure if I have diabetes or a fungal nail infection?`, a: `Please consult a doctor first. A pedicure at the studio is cosmetic care and does not replace medical treatment. Before your visit, please tell us about any health problems.` },
      { q: `How long does polish on toes last?`, a: `It depends on how fast your nails grow, on the footwear you wear and on the polish you choose – CND Shellac is thinner and easier to soak off, Gellak is harder and usually lasts longer.` },
      { q: `Is Footlogix pedicure suitable for people with diabetes?`, a: `When professionally applied, it may be suitable for clients with diabetes or gestational diabetes. Clients with these conditions should always inform the salon before treatment.` },
    ],
  },

  'prodluzovani-ras-praha-2': {
    name: `Eyelash extensions`,
    cardText: `Classic 1:1, Volume 2D–5D, Mega Volume and design effects.`,
    title: `Lash Extensions Prague 2 | Classic & Volume | ICONO STUDIO`,
    description: `Eyelash extensions at Bělehradská 77 in Prague 2: classic 1:1 from 990 CZK, Volume 2D–5D from 1,190 CZK, Mega Volume from 1,390 CZK. Refills from 790 CZK.`,
    h1: `Eyelash Extensions Prague 2`, eyebrow: `Beauty · Bělehradská 77`,
    lead: `Classic 1:1 lashes, Volume 2D–5D, Mega Volume and design effects. A new set from 990 CZK, refills from 790 CZK.`,
    imageAlt: `Eye with long lash extensions and an eyebrow`,
    artAlt: `Eyelash extensions Prague 2: close-up of a closed eye with lash extensions`,
    intro: {
      h2: `A more striking look without mascara`,
      paras: [
        `Eyelash extensions mean an artificial lash is attached to each natural lash. The result is longer, fuller and more striking lashes, so in the morning you can do without mascara and an eyelash curler. We do eyelash extensions at ICONO STUDIO, Bělehradská 77 in Prague 2.`,
        `The price list distinguishes between a <strong>new set</strong> and a <strong>refill</strong>. A new set is a complete application; a refill is regular maintenance in which lashes that have fallen out in the meantime are replaced. A refill is cheaper. You will find all prices below and in the <a href="/cenik/">price list</a>.`,
      ],
    },
    options: {
      h2: `Lash types and prices`,
      items: [
        { title: `Classic lashes 1:1`, text: `One artificial lash is applied to each natural lash. The result is natural – a subtle lengthening and thickening. It is a good choice if you do not want a dramatic effect, and for a first visit.` },
        { title: `Volume lashes 2D–5D`, text: `Several thin lashes are made into a fan which is attached to a single natural lash. 2D means a fan of two lashes, 5D of five – the higher the number, the fuller and more striking the effect.` },
        { title: `Mega Volume lashes`, text: `Even fuller fans made of more fine lashes for maximum density and a bold, full look.` },
        { title: `Design effect and removal`, text: `Lash extensions with a special effect that we agree when you book. If you want your lashes taken off, leave the removal to us – at home you risk damaging your natural lashes.` },
      ],
    },
    notes: {
      h2: `Designer lashes and the health of your natural lashes`,
      items: [
        { h: `Designer eyelash extensions`, paras: [
          `Designer lash styles are characterised by layered shapes and distinctive details. For the best appearance, they should be regularly brushed and shaped. This type of lash extension requires slightly more careful daily maintenance from the client.`,
          `If you prefer lashes that remain beautiful for up to 3–4 weeks without needing much daily brushing or styling, we can recommend more classic styles, such as Classic or Volume lashes, which may better suit your needs.`,
        ] },
        { h: `The health of your natural lashes comes first`, paras: [
          `The health of your natural lashes is always our top priority.`,
          `If your natural lashes are thin, weak or sparse, extensions that are too thick or too long can place excessive weight on them. This may cause the natural lashes to break, fall out more easily or take longer to recover.`,
          `In these cases, we will recommend lighter and more natural lash styles that enhance the shape of your eyes while helping to protect your natural lashes.`,
          `If your natural lashes are severely weakened, we recommend temporarily removing the extensions and using a lash serum or other strengthening treatment for a period of time before having extensions applied again.`,
        ] },
        { h: `Very full lashes at your request`, paras: [
          `If your natural lashes are thin or weak but you still wish to have very full extensions, we can provide the service at your request after explaining the possible risks in detail.`,
          `Before the treatment, you will be asked to sign a consultation acknowledgement form.`,
          `We cannot provide a warranty or compensation for breakage or loss of natural lashes caused by excessive weight from lash extensions applied at the client's specific request after consultation.`,
        ] },
      ] },
    guide: {
      h2: `How to choose the type of lashes`,
      paras: [
        `If you want a <strong>natural look</strong>, choose classic lashes 1:1. If you want a <strong>fuller, more striking look</strong>, choose Volume 2D–5D – you pick the level according to how bold you want the effect to be. For the fullest and densest result there is Mega Volume.`,
        `If a long time has passed since your last visit and only a few lashes remain, a new set may be more suitable than a refill – we will advise you when you book.`,
        `<strong>How to prepare:</strong> come without eye make-up and without mascara. If you have sensitive eyes, an allergy, wear contact lenses or have had eye surgery, tell us in advance.`,
      ],
    },
    steps: {
      h2: `How the application works`,
      items: [
        { h: `Consultation`, t: `We discuss the lash type, length and curl according to your wishes and the shape of your eye.` },
        { h: `Preparation`, t: `Your natural lashes are cleansed and prepared for application.` },
        { h: `Application`, t: `The artificial lashes are applied one by one to the natural ones, according to the chosen technique.` },
        { h: `Check and instructions`, t: `At the end we check the result and tell you how to look after your lashes.` },
      ],
    },
    care: {
      h2: `Caring for lash extensions`,
      items: [
        `On the first day after application, avoid water and steam – the adhesive needs time to cure fully.`,
        `Do not use oils or greasy creams around your eyes. Oil weakens the adhesive and the lashes would come loose faster.`,
        `Brush your lashes daily with a clean brush so they do not stick together and keep their shape.`,
        `Do not rub your eyes and do not pull the lashes. Do not use a mechanical eyelash curler.`,
        `Do not remove them at home. Removal of lash extensions costs 200 CZK.`,
        `A refill is usually booked after two to four weeks – natural lashes are replaced over time and the artificial ones fall out with them.`,
      ],
    },
    faq: [
      { q: `How much do eyelash extensions cost in Prague 2?`, a: `Classic lashes 1:1 cost 990 CZK (refill 790 CZK), Volume lashes 2D–5D 1,190 CZK (refill 990 CZK) and Mega Volume 1,390 CZK (refill 1,090 CZK). The design effect starts at 1,190 CZK, removal costs 200 CZK. Everything is in the <a href="/cenik/">price list</a>.` },
      { q: `How long do lash extensions last?`, a: `Artificial lashes fall out together with the natural ones in their growth cycle, which is why they are usually refilled every two to four weeks. The timing varies from person to person.` },
      { q: `What is the difference between classic and Volume lashes?`, a: `With classic lashes, one artificial lash is applied to each natural lash. With Volume, a fan of several thin lashes is attached to it, giving a fuller, more striking result.` },
      { q: `Will lash extensions damage my natural lashes?`, a: `With correct application and care, your natural lashes should not be damaged. That is why it is important not to remove or pull the lashes at home and to leave removal to the studio.` },
      { q: `What if I have sensitive eyes or an allergy?`, a: `Tell us in advance. If you have sensitive eyes, an allergy or health problems, please also consult a doctor before application.` },
    ],
  },

  'oboci-kosmetika-praha-2': {
    name: `Brows & facials`,
    cardText: `Brow shaping and tinting, facial care and massage.`,
    title: `Brow Shaping & Tinting Prague 2 | ICONO STUDIO`,
    description: `Brow shaping and tinting from 100 CZK and a facial with massage for 750 CZK at Bělehradská 77 in Prague 2. Book online or call.`,
    h1: `Brows & Facials Prague 2`, eyebrow: `Beauty · Bělehradská 77`,
    lead: `Brow shaping and tinting plus facial care with massage. Brows from 100 CZK, facial care 750 CZK.`,
    imageAlt: `Groomed eyebrow, tweezers and a jar of cosmetic cream`,
    artAlt: `Brow shaping and tinting Prague 2: eyebrow brushed with a spoolie, close-up of brow and eye`,
    intro: {
      h2: `Brows that suit your face`,
      paras: [
        `Eyebrows frame the face and change its expression significantly. Well-shaped brows accentuate the eyes, unify your look and save you morning make-up. At ICONO STUDIO, Bělehradská 77 in Prague 2, we offer brow shaping as well as tinting combined with shaping.`,
        `We add cosmetic care to that: <strong>facial care and massage</strong>. It is a pleasant way of giving your skin attention – and yourself too. You will find the prices below and in the <a href="/cenik/">price list</a>.`,
      ],
    },
    options: {
      h2: `Services and prices`,
      items: [
        { title: `Brow shaping`, text: `Shaping your brows to suit your face and your ideas. Good for regular maintenance so your brows stay groomed.` },
        { title: `Brow tinting and shaping`, text: `Shaping combined with tinting. The colour evens out the shade, accentuates the shape and helps when brows are light or sparse.` },
        { title: `Facial care and massage`, text: `A cosmetic facial treatment combined with massage. We adapt the exact procedure to your skin type, so tell us what your skin needs when you book.` },
      ],
    },
    guide: {
      h2: `Shaping, or tinting with shaping?`,
      paras: [
        `If your brows are fuller and dark enough, <strong>shaping</strong> alone is often enough. If your brows are light, uneven or sparse, <strong>tinting with shaping</strong> is worth it. The difference in price is 100 CZK.`,
        `Brows are usually shaped every three to five weeks, depending on how fast the hairs grow. Before an important event, plan your appointment a few days in advance so that your brows have time to settle into a natural look.`,
        `<strong>Tinting – what to expect:</strong> the colour evens out the shade of your brows, accentuates their shape and visually thickens them. It works well if your brows “disappear” on your face or you do not want to use a pencil or powder every morning. We choose the shade according to your hair colour and your wishes.`,
        `<strong>Facial care – who it is for:</strong> anyone who wants to give their skin more than the usual wash and cream. Facial massage also brings pleasant relaxation. Tell us what your skin needs and we will adapt the procedure.`,
        `Brows go very well with <a href="/prodluzovani-ras-praha-2/">eyelash extensions</a> – together they give your eyes a clear frame. And if you want to treat yourself to more, take a look at <a href="/head-spa-praha-2/">Head Spa</a>.`,
      ],
    },
    steps: {
      h2: `How a visit works`,
      items: [
        { h: `Agreeing the shape`, t: `Together we choose the brow shape according to your face shape and your wishes.` },
        { h: `Shaping`, t: `The brows are shaped and freed from unwanted hairs.` },
        { h: `Tinting (optional)`, t: `If you have chosen tinting, the colour is applied and left to work so that the brows take it well.` },
        { h: `Facial care (optional)`, t: `Facial care and massage can be part of your visit.` },
      ],
    },
    care: {
      h2: `Aftercare after shaping and tinting`,
      items: [
        `After shaping, avoid make-up around the brows for the first few hours so the skin is not irritated.`,
        `After tinting, do not use an intensive peeling straight away and avoid saunas so the colour lasts longer.`,
        `If you have an allergy or sensitive skin, tell us before tinting.`,
        `For facial care, please come without make-up so your skin can be cleansed properly.`,
        `Between visits, please do not pluck your brows yourself. That way the shape we created together stays clean and we can maintain it at your next visit.`,
      ],
    },
    faq: [
      { q: `How much does brow shaping cost in Prague 2?`, a: `Brow shaping alone costs 100 CZK, tinting combined with shaping 200 CZK. Facial care with massage costs 750 CZK. You will find everything in the <a href="/cenik/">price list</a>.` },
      { q: `How long does brow tint last?`, a: `Usually several weeks, depending on your skin type and care. The colour fades gradually, which is why tinting is repeated together with shaping.` },
      { q: `What does facial care include?`, a: `It is a cosmetic facial treatment combined with massage. We adapt the procedure to your skin type and are happy to explain it when you book.` },
      { q: `How often should I have my brows shaped?`, a: `Usually once every three to five weeks, depending on how fast your hairs grow back.` },
      { q: `Who is brow tinting suitable for?`, a: `For anyone with light, uneven or sparse brows who wants a more defined shape without daily make-up. If you are allergic to dyes, please tell us in advance.` },
      { q: `Can I come in wearing make-up?`, a: `For brow shaping, yes; for facial care and massage, please come without make-up. The skin cleanses better that way and the treatment is more effective.` },
    ],
  },

  'head-spa-praha-2': {
    name: `Head Spa`,
    cardText: `Relaxing scalp care, massage and regenerating oil.`,
    title: `Head Spa Prague 2 | Scalp Care & Massage | ICONO STUDIO`,
    description: `Head Spa at Bělehradská 77 in Prague 2 for 890 CZK: white noise, acupressure points, scalp exfoliation, Asian-style washing with massage and regenerating oil.`,
    h1: `Head Spa Prague 2`, eyebrow: `Beauty · Bělehradská 77`,
    lead: `Relaxing care for your scalp and hair for 890 CZK: white noise therapy, massage, exfoliation, Asian-style hair washing and regenerating oil.`,
    imageAlt: `Illustration of a scalp with massage points and drops`,
    artAlt: `Head Spa Prague 2: scalp massage with steam and running water`,
    intro: {
      h2: `A moment just for your head`,
      paras: [
        `Head Spa is care that combines relaxation with a nourishing routine for your scalp and hair. A slow pace, pleasant sound, massage and water – you leave relaxed. You can treat yourself at ICONO STUDIO, Bělehradská 77 in Prague 2.`,
        `The service costs 890 CZK and includes five steps. Below you will find what they involve and what they are for. The full price list is on the <a href="/cenik/">price list</a> page.`,
      ],
    },
    options: {
      h2: `What Head Spa includes`,
      items: [
        { title: `White noise therapy`, text: `A steady, calming sound that dampens background noise and helps you relax. It forms a quiet sound backdrop to the whole treatment.` },
        { title: `Treatment of acupuncture points on the head`, text: `Targeted pressure on selected points on the head, used to release tension.` },
        { title: `Scalp exfoliation`, text: `A gentle peeling that helps cleanse the scalp of dirt and styling product residue.` },
        { title: `Asian-style hair washing and head massage`, text: `Slow, rhythmic washing combined with massage. It is the main relaxing part of the treatment.` },
        { title: `Blow-dry and regenerating oil`, text: `Your hair is blow-dried (without styling) and treated with a regenerating hair oil. You leave with smooth, tidy hair.` },
      ],
    },
    guide: {
      h2: `Who Head Spa is for`,
      paras: [
        `Head Spa is for anyone who wants to relax, look after their scalp and hair or enjoy a moment without rushing. It suits the end of a demanding week, a gift for someone close to you, or a regular self-care ritual.`,
        `It is not a medical treatment. If you have scalp problems, such as eczema or psoriasis, or your scalp is sensitive and irritated, tell us in advance and consult a doctor as well.`,
        `<strong>How often?</strong> According to your taste and needs. Some people treat themselves to Head Spa as a regular ritual, others on special occasions or as a gift for someone close. We are happy to give you a recommendation during your visit.`,
        `Blow-drying is part of the care, but without styling. If you want your hair styled for a particular occasion, take a look at <a href="/panska-kosmetika-praha-2/">hair wash and head massage</a> or <a href="/panske-strihy-praha-2/">men's haircuts</a>.`,
      ],
    },
    care: {
      h2: `What to keep in mind before and after your visit`,
      items: [
        `You do not need to do anything special before your visit. Come relaxed and in comfortable clothes.`,
        `After your visit, do not weigh your hair down with heavy styling products, so the regenerating oil can do its work.`,
        `If you have a sensitive scalp or an allergy to cosmetic products, let us know in advance.`,
        `Allow plenty of time. Head Spa is slow care that is best enjoyed without rushing – we will tell you the length of the visit when you book.`,
        `You can combine Head Spa with other services, for example <a href="/manikura-praha-2/">manicure</a> or <a href="/pedikura-praha-2/">pedicure</a>, and make your visit a complete moment for yourself.`,
      ],
    },
    faq: [
      { q: `How much does Head Spa cost in Prague 2?`, a: `Head Spa costs 890 CZK. It includes white noise therapy, treatment of acupuncture points on the head, scalp exfoliation, Asian-style hair washing and head massage, and blow-drying with regenerating oil.` },
      { q: `Does Head Spa include hair styling?`, a: `Your hair is blow-dried, but not styled. If you want your hair styled for a particular occasion, arrange it with us when you book.` },
      { q: `Is Head Spa suitable for scalp problems?`, a: `It is a relaxing and caring service, not a treatment. For eczema, psoriasis or irritation, please consult a doctor first and let us know when you book.` },
      { q: `How often should I repeat Head Spa?`, a: `According to your taste and needs – some people have it regularly, others on special occasions. We are happy to give you a recommendation during your visit.` },
      { q: `Is Head Spa suitable for all hair types?`, a: `The care is intended for the scalp and hair in general. If your hair is coloured or damaged, or you have a sensitive scalp, tell us – we are happy to advise.` },
      { q: `What is white noise therapy?`, a: `It is a steady, calming sound backdrop that dampens background noise and helps you relax.` },
    ],
  },

  'panske-strihy-praha-2': {
    name: `Men's haircut`,
    cardText: `Classic, Premium and VIP cuts. Discounted prices for students and children.`,
    title: `Men's Haircut Prague 2 | Barber Cuts | ICONO STUDIO`,
    description: `Men's haircut at the barbershop at Bělehradská 77 in Prague 2: Classic Cut 640 CZK, Premium 770 CZK, VIP 990 CZK. Students from 540 CZK, kids up to 8: 400 CZK.`,
    h1: `Men's Haircut Prague 2`, eyebrow: `Barber · Bělehradská 77`,
    lead: `Barber cuts from a classic haircut to VIP All Inclusive. Styling and balm or cologne are included – and every two weeks it is 100 CZK cheaper.`,
    imageAlt: `Barber fading the sides and neckline with clippers during a men's haircut`,
    artAlt: `Men's haircut Prague 2: barber creating a clipper fade on the back and sides of the head`,
    intro: {
      h2: `A barbershop in central Prague 2`,
      paras: [
        `ICONO STUDIO is a barbershop and nail studio in one, at Bělehradská 77 in Prague 2, close to I. P. Pavlova and Náměstí Míru. We offer men's haircuts as a complete service: not only the cut itself, but also styling and a finishing balm or cologne. Depending on the option, we add a hair wash, massage or a beard trim.`,
        `The barber cuts come in several levels, so you can choose exactly what you need. There are also discounted options for students and children. All prices are below and in the <a href="/cenik/">price list</a>.`,
      ],
    },
    options: {
      h2: `Barber cuts and prices`,
      items: [
        { title: `Student cut up to age 18`, text: `A discounted haircut for young customers up to 18. It includes a haircut, styling and balm or cologne.` },
        { title: `Classic Cut`, text: `The basic barber haircut with a hair wash. For anyone who simply wants a good haircut and a tidy result.` },
        { title: `Premium Cut`, text: `A Classic Cut with a massage added. For those who want to enjoy their visit more.` },
        { title: `VIP Cut`, text: `Hair wash, haircut and beard trim in one visit – hair and beard matched to one shape.` },
        { title: `VIP All Inclusive`, text: `The most complete package: hair wash, haircut, beard and massage, plus styling and balm or cologne.` },
        { title: `Children up to 8`, text: `A haircut for our youngest customers up to 8 years old.` },
      ],
    },
    guide: {
      h2: `Which cut should you choose?`,
      paras: [
        `Want simply a good haircut? Choose the <strong>Classic Cut</strong>. Want some relaxation with it? Choose the <strong>Premium Cut</strong>, which also includes a massage. If you need your beard trimmed too, take the <strong>VIP Cut</strong>, and if you want to enjoy everything, there is <strong>VIP All Inclusive</strong>.`,
        `<strong>Do you come regularly?</strong> Coming for a haircut every two weeks takes 100 CZK off all cuts. We are happy to explain the details of the discount on site. A regular haircut is the easiest way to always look well groomed.`,
        `<strong>How to prepare:</strong> come with an idea or a photo of a haircut you like. The barber will tell you what suits your hair and head shape, and advise you on styling at home.`,
      ],
    },
    steps: {
      h2: `How a barber visit works`,
      items: [
        { h: `Consultation`, t: `You tell us what you want or show a photo. The barber advises what suits you.` },
        { h: `Hair wash`, t: `For the cuts that include it (Classic, Premium, VIP, VIP All Inclusive).` },
        { h: `Haircut`, t: `A tailored cut with scissors and clippers to the agreed shape.` },
        { h: `Beard and massage`, t: `A beard trim with the VIP Cut, a massage with Premium and VIP All Inclusive.` },
        { h: `Styling and finish`, t: `Styling and balm or cologne – this is how you leave looking sharp.` },
      ],
    },
    care: {
      h2: `How to keep your cut at home`,
      items: [
        `Wash your hair with a shampoo that suits you and use a styling product regularly – your barber will tell you which one.`,
        `Book regular haircuts, usually every three to four weeks depending on hair length. Shorter cuts with fades are worth refreshing a little more often.`,
        `If you have a beard, add a beard trim to your cut – the VIP Cut combines both.`,
        `If you come every two weeks, take advantage of the 100 CZK discount on all cuts.`,
      ],
    },
    faq: [
      { q: `How much does a men's haircut cost in Prague 2?`, a: `The Classic Cut costs 640 CZK, the Premium Cut 770 CZK, the VIP Cut 990 CZK and VIP All Inclusive 1,190 CZK. The student cut up to age 18 starts at 540 CZK and a haircut for children up to 8 costs 400 CZK. Current prices are in the <a href="/cenik/">price list</a>.` },
      { q: `What is the difference between the Classic and Premium Cut?`, a: `Both include a hair wash, haircut, styling and balm or cologne. The Premium Cut also includes a massage.` },
      { q: `Is a beard trim included in the VIP Cut?`, a: `Yes. The VIP Cut includes a hair wash, haircut, beard, styling and balm or cologne. VIP All Inclusive adds a massage.` },
      { q: `Is there a discounted price for students?`, a: `Yes, the student cut up to age 18 starts at 540 CZK and includes a haircut, styling and balm or cologne.` },
      { q: `Is there a discount for regular customers?`, a: `If you come for a haircut every two weeks, there is a 100 CZK discount on all cuts. We are happy to explain the details.` },
    ],
  },

  'uprava-vousu-praha-2': {
    name: `Beard trim`,
    cardText: `Beard shaping with clippers, trimmer and razor, balm included.`,
    title: `Beard Trim Prague 2 | Barber from 200 CZK | ICONO STUDIO`,
    description: `Beard trim at the barbershop at Bělehradská 77 in Prague 2: full grooming with clippers, trimmer and razor for 420 CZK, trimmer only 200 CZK.`,
    h1: `Beard Trim Prague 2`, eyebrow: `Barber · Bělehradská 77`,
    lead: `A clean shape, precise lines and a well-kept beard. Beard trim 420 CZK, trimmer only 200 CZK, haircut with beard in the VIP Cut.`,
    imageAlt: `Straight razor and shaving brush`,
    artAlt: `Beard trim Prague 2: straight razor, shaving brush, a bowl of shaving cream and a rolled towel on a beige background`,
    intro: {
      h2: `A beard with shape`,
      paras: [
        `You can tell a well-groomed beard at first glance: clean lines, a regular shape and a beard that suits the face. At ICONO STUDIO, Bělehradská 77 in Prague 2, we shape it so it looks fresh and well kept.`,
        `We offer a full beard trim and a standalone trimmer service for a quick touch-up. If you would like your hair done too, you will also find the beard in the VIP Cut. Prices are below and in the <a href="/cenik/">price list</a>.`,
      ],
    },
    options: {
      h2: `Services and prices`,
      items: [
        { title: `Beard trim`, text: `A full beard trim: shaping with clippers and trimmer, lines finished with a shaver or razor, and a finishing balm or cologne. Suitable when you want to give your beard a new shape or get it back in order.` },
        { title: `Trimmer only`, text: `A quick touch-up with the trimmer. It works as maintenance between full visits.` },
        { title: `Haircut with beard`, text: `Want your hair and beard done at once? The VIP Cut and VIP All Inclusive include both, so you can match everything to one shape in a single visit.` },
      ],
    },
    guide: {
      h2: `How to choose a beard shape`,
      paras: [
        `It pays to choose a beard shape according to your face shape. For a <strong>rounder face</strong>, a slightly longer chin and sharper lines usually work, as they visually lengthen the face. For a <strong>square face</strong>, more rounded shapes soften the jaw. For a <strong>longer face</strong>, a shorter chin and fuller sides are usually better.`,
        `During the consultation, the barber will tell you what suits your face and the density of your beard. If you have inspiration, bring a photo.`,
        `<strong>Razor and sensitive skin:</strong> finishing the lines with a razor or shaver gives the sharpest result but can irritate the skin. If you have sensitive skin, ingrown hairs or a tendency to redness, tell the barber – they will adapt.`,
        `<strong>How long should you grow your beard before the first trim?</strong> A few weeks is usually enough to have something to shape. The barber can tell if it is worth waiting a little longer.`,
      ],
    },
    steps: {
      h2: `How a beard trim works`,
      items: [
        { h: `Consultation`, t: `You agree the length, shape and lines.` },
        { h: `Shaping`, t: `The beard is shortened and shaped with clippers and trimmer.` },
        { h: `Lines and details`, t: `The edges are finished with a shaver or razor so they are clean and sharp.` },
        { h: `Finish`, t: `The skin is treated with balm or cologne.` },
      ],
    },
    care: {
      h2: `Beard care at home`,
      items: [
        `Wash your beard regularly with a gentle product and avoid harsh shampoos that dry out the skin.`,
        `Use beard oil or balm. It softens the hairs and keeps the skin beneath them in good condition.`,
        `Comb or brush your beard – the hairs line up and the beard looks neater.`,
        `After a razor shave, avoid alcohol-based products for a few hours so the skin is not irritated.`,
        `Book a trim usually every two to three weeks so the beard keeps its shape.`,
      ],
    },
    faq: [
      { q: `How much does a beard trim cost in Prague 2?`, a: `A beard trim costs 420 CZK, a standalone trimmer 200 CZK. A beard trim is also part of the VIP Cut (990 CZK) and VIP All Inclusive (1,190 CZK). Everything is in the <a href="/cenik/">price list</a>.` },
      { q: `What is included in a beard trim?`, a: `The trim includes work with clippers and trimmer, finishing of the lines with a shaver or razor and a finishing balm or cologne.` },
      { q: `What is the difference between a beard trim and Trimmer only?`, a: `A beard trim is a full service with shaping and finished lines. Trimmer only is a quick touch-up with the trimmer for 200 CZK.` },
      { q: `Can I have my hair and beard done at the same time?`, a: `Yes. The VIP Cut and VIP All Inclusive include both a haircut and a beard trim in one visit.` },
      { q: `What should I prepare before my visit?`, a: `Come with your beard at the length it is. Do not shorten it at home just before your visit, so the barber has something to shape. If you have inspiration, bring a photo.` },
      { q: `Is a beard trim suitable for sensitive skin?`, a: `If you have sensitive skin or ingrown hairs, tell us in advance. The barber will adapt the procedure and recommend aftercare.` },
      { q: `How often should I get a beard trim?`, a: `Usually once every two to three weeks, depending on growth and the shape you want.` },
    ],
  },

  'panska-kosmetika-praha-2': {
    name: `Men's skincare & hair wash`,
    cardText: `VIP face wash, head massage and hair wash at the barbershop.`,
    title: `Men's Skincare & Hair Wash Prague 2 | ICONO STUDIO`,
    description: `Men's skincare and VIP face wash for 850 CZK, head massage 150 CZK and hair wash from 100 CZK. ICONO STUDIO barbershop, Bělehradská 77, Prague 2.`,
    h1: `Men's Skincare & Hair Wash Prague 2`, eyebrow: `Barber · Bělehradská 77`,
    lead: `VIP face wash, head massage and hair wash at the barbershop. Men's skincare 850 CZK, head massage 150 CZK, hair wash from 100 CZK.`,
    imageAlt: `Tin of cream, steam and a towel – men's skincare at the barbershop`,
    artAlt: `Men's skincare Prague 2: rolled hot towel with steam, a jar of cream and a bowl of water on black stone`,
    intro: {
      h2: `Care that goes beyond hair`,
      paras: [
        `A barbershop is not just about haircuts. At ICONO STUDIO, Bělehradská 77 in Prague 2, you can also book men's skincare, the VIP face wash, a head massage or a hair wash – on their own or as an add-on to your haircut.`,
        `The services are designed to leave you feeling fresh and well groomed after your visit. Prices are below and in the <a href="/cenik/">price list</a>.`,
      ],
    },
    options: {
      h2: `Services and prices`,
      items: [
        { title: `Men's skincare / VIP face wash`, text: `Complete skin care: face wash and massage, skin cleansing and a hydrating treatment including steam and a mask. Finished with a moisturising cream. It suits you when you want to give your skin more than the usual morning wash.` },
        { title: `Head massage`, text: `A relaxing head massage for 150 CZK. It can be a short extra during your visit or a moment of relaxation on its own.` },
        { title: `Hair wash`, text: `A hair wash is available from 100 CZK. The classic, with-massage and styling options start at 250 CZK.` },
      ],
    },
    guide: {
      h2: `When each service is right`,
      paras: [
        `<strong>Men's skincare / VIP face wash</strong> is for you if you want to give your skin deeper care. The steam and mask relax the skin, and hydration helps it not feel tight after shaving.`,
        `<strong>Head massage</strong> works as an add-on to a haircut or on its own when you need to release tension. If you want more, there is also the more detailed <a href="/head-spa-praha-2/">Head Spa</a>.`,
        `<strong>Hair wash</strong> is appreciated by anyone who wants clean hair before styling. The Classic Cut, Premium, VIP and VIP All Inclusive include a hair wash in the price.`,
        `You can combine the care with a visit to the barber – when you book, tell us what you want to combine and we will arrange a suitable time.`,
        `If you need a haircut or beard trim along with the care, take a look at <a href="/panske-strihy-praha-2/">men's haircuts</a> and <a href="/uprava-vousu-praha-2/">beard trims</a>.`,
      ],
    },
    steps: {
      h2: `How the facial care works`,
      items: [
        { h: `Face wash and massage`, t: `The skin is cleansed and relaxed with a massage.` },
        { h: `Skin cleansing`, t: `A more thorough cleansing of the skin follows.` },
        { h: `Steam and mask`, t: `A hydrating treatment – steam and a mask.` },
        { h: `Moisturising cream`, t: `To finish, the skin is treated with a hydrating cream.` },
      ],
    },
    care: {
      h2: `Caring for your skin between visits`,
      items: [
        `Wash your face with a gentle men's product twice a day and moisturise with a cream.`,
        `After shaving, use an alcohol-free balm or cream so the skin is not irritated.`,
        `If your skin is sensitive or problematic, tell us when you book.`,
        `How much care your skin needs and how often a skincare treatment is worth it, we are happy to advise during your visit.`,
      ],
    },
    faq: [
      { q: `How much does men's skincare cost in Prague 2?`, a: `Men's skincare / VIP face wash costs 850 CZK. A head massage costs 150 CZK and a hair wash starts from 100 CZK. You will find everything in the <a href="/cenik/">price list</a>.` },
      { q: `Who is men's skincare for?`, a: `Any man who wants to give his skin care beyond the usual wash – especially after shaving or with dry and stressed skin.` },
      { q: `What does men's skincare include?`, a: `Face wash and massage, skin cleansing, a hydrating treatment (steam and mask) and a moisturising cream.` },
      { q: `Is a hair wash included in the price of a haircut?`, a: `Yes, for the Classic Cut, Premium Cut, VIP Cut and VIP All Inclusive a hair wash is included. For the student cut and the children's haircut it is not listed.` },
      { q: `Can I book just a head massage?`, a: `Yes. A head massage costs 150 CZK and you can book it on its own.` },
    ],
  },
};
