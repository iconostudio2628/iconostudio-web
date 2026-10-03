// Deutsche Texte (Sie-Form) für die Conversion-Ebene der Leistungsseiten. Gleiche Struktur wie extras.cs.mjs
// (der Build prüft Schlüssel, Platzhalter und Links). Beträge sind `{Platzhalter}` und kommen aus der Preisliste (CZK).
export const extrasDe = {
  common: {
    msg: `Guten Tag, ich möchte einen Termin buchen: {subject}`,
    msgCombo: `Guten Tag, ich möchte einen Termin für mehrere Leistungen buchen: {subject}`,
    order: `Buchen`,
    micro: `Die Nachricht ist vorausgefüllt – Sie müssen sie nur absenden.`,
    yes: `ja`,
    no: `nein`,
    scrollHint: `Die Tabelle lässt sich seitlich verschieben.`,
    chipsAria: `Auf dieser Seite`,
    chips: {
      options: `Varianten`, price: `Preise`, guide: `Auswahlhilfe`, steps: `Ablauf`, care: `Pflege`,
      combos: `Kombinationen`, faq: `Häufige Fragen`, location: `So finden Sie uns`,
    },
    combos: { eyebrow: `Kombinationen`, cta: `Beide Leistungen buchen`, more: `Details` },
    problem: { priceLabel: `Preis` },
    ritual: { includes: `Inklusive` },
  },

  pages: {
    /* ============================================================ MANIKÜRE */
    'manikura-praha-2': {
      subject: `Maniküre`,
      heroCta: `Maniküre buchen`,
      final: { h: `Maniküre in der Bělehradská? Schreiben Sie uns.`, t: `Wählen Sie eine Variante und senden Sie die Nachricht – sie ist vorausgefüllt. Bělehradská 77, Prag 2, nahe I. P. Pavlova.` },
      bands: [
        { h: `Sie wissen, welche Variante Sie möchten?`, t: `Schreiben Sie uns den Namen – die Nachricht ist vorausgefüllt und wir vereinbaren einen Termin.` },
        { h: `Gellak oder CND Shellac – Sie sind unsicher?`, t: `Schreiben Sie uns, wie Sie Ihre Hände beanspruchen, oder schicken Sie ein Inspirationsfoto. Wir beraten Sie.` },
      ],
      sigs: [{
        chip: `Vergleich`, eyebrow: `Die Varianten im Vergleich`, h2: `Klassisch, Gellak oder CND Shellac?`,
        lead: `Drei Varianten nebeneinander – inklusive Preis für das Hand-Spa und für das Entfernen des Gel-Lacks, damit der Endpreis keine Überraschung bringt.`,
        cols: [`Klassisch`, `Gellak`, `CND Shellac`],
        rows: [
          { label: `Farbe auf den Nägeln` },
          { label: `In der Lampe ausgehärtet, sofort trocken` },
          { label: `Marken-Gel-Lack` },
          { label: `Preis` },
          { label: `Paket mit Hand-Spa` },
          { label: `Entfernen des Gel-Lacks` },
        ],
        note: `Gel-Lack hält in der Regel mehrere Wochen – je nach Nagelwachstum und Beanspruchung der Hände. Lassen Sie ihn im Studio entfernen und ziehen Sie den Lack zu Hause nicht ab.`,
      }],
      combos: {
        h2: `Maniküre mit einer weiteren Leistung kombinieren`,
        lead: `Schreiben Sie uns, was Sie kombinieren möchten, und wir schlagen einen Termin vor. Die Preise stammen aus der Preisliste, je Leistung.`,
        items: [
          { title: `Gellak-Maniküre + Gellak-Pediküre`, text: `Gepflegte Hände und Füße in einem Termin.` },
          { title: `Gellak-Maniküre + Augenbrauen färben`, text: `Nägel und Augenbrauen in einem Besuch.` },
        ],
      },
    },

    /* ============================================================ GEL- UND ACRYLNÄGEL */
    'gelove-akrylove-nehty-praha-2': {
      subject: `Gel- und Acrylnägel`,
      heroCta: `Neue Nägel buchen`,
      final: { h: `Neue Nägel in der Bělehradská? Schreiben Sie uns.`, t: `Schicken Sie Inspiration und sagen Sie uns die gewünschte Form – die Nachricht ist vorausgefüllt. Bělehradská 77, Prag 2.` },
      bands: [
        { h: `Form und Länge stehen fest?`, t: `Schreiben Sie uns und wir vereinbaren einen Termin. Ein Inspirationsfoto sehen wir gern.` },
        { h: `Müssen die Nägel aufgefüllt werden?`, t: `Das Auffüllen ist günstiger als ein Neuset. Schreiben Sie uns, wann Sie zuletzt da waren, und wir schlagen einen Termin vor.` },
      ],
      sigs: [
        {
          chip: `Nagelformen`, eyebrow: `Nagelform`, h2: `Welche Nagelform passt zu Ihnen?`,
          lead: `Die fünf häufigsten Formen. Wir wählen gemeinsam, oder Sie schicken uns Inspiration.`,
          items: [
            { name: `Eckig`, text: `Gerade Spitze, praktisch und stabil.` },
            { name: `Rund`, text: `Weiche Kanten, alltagstauglich.` },
            { name: `Oval`, text: `Lässt die Finger optisch länger wirken.` },
            { name: `Mandel`, text: `Zulaufende Spitze, lässt die Finger optisch länger wirken.` },
            { name: `Coffin`, text: `Auffällige, modische Form mit gerader Spitze.` },
          ],
          cta: `Sie wissen nicht, welche Form zu Ihnen passt? Schicken Sie uns Inspiration per WhatsApp.`,
          ctaLabel: `Inspiration senden`,
        },
        {
          chip: `Gel, Acryl, Gel X`, eyebrow: `Materialien im Vergleich`, h2: `Gel, Acryl oder Gel X?`,
          lead: `Drei Techniken, derselbe Preis für neue Nägel mit Farbe. Der Unterschied liegt im Material und im Tragegefühl.`,
          cols: [`Gel`, `Acryl`, `Gel X`],
          rows: [
            { label: `Material`, cells: [`Flexibles Gel, in der Lampe ausgehärtet`, `Flüssigkeit und Pulver, härtet an der Luft aus`, `Vorgeformte Gel-Tips`] },
            { label: `Ergebnis`, cells: [`Leicht und natürlich`, `Stabil, für längere Formen geeignet`, `Leicht, natürlich wirkend`] },
            { label: `Geeignet für`, cells: [`Alltag, erste künstliche Nägel`, `Längere oder auffälligere Formen`, `Eine leichte Verlängerung`] },
            { label: `Neue Nägel mit Farbe` },
          ],
          note: `Acryl riecht beim Auftragen typisch. Das Auffüllen wird meist alle zwei bis vier Wochen gebucht.`,
        },
      ],
      combos: {
        h2: `Nägel und weitere Pflege in einem Termin`,
        lead: `Schreiben Sie uns, was Sie kombinieren möchten, und wir schlagen einen Termin vor. Die Preise stammen aus der Preisliste, je Leistung.`,
        items: [
          { title: `Neue Nägel + Gellak-Pediküre`, text: `Hände und Füße in einem Besuch.` },
          { title: `Nägel auffüllen + Augenbrauen färben`, text: `Nägel und Augenbrauen in einem Rutsch.` },
        ],
      },
    },

    /* ============================================================ PEDIKÜRE */
    'pedikura-praha-2': {
      subject: `Pediküre`,
      heroCta: `Pediküre buchen`,
      final: { h: `Pediküre in der Bělehradská? Schreiben Sie uns.`, t: `Sagen Sie uns, welche Variante Sie möchten – die Nachricht ist vorausgefüllt. Bělehradská 77, Prag 2.` },
      bands: [
        { h: `Variante gewählt?`, t: `Schreiben Sie uns den Namen und wir vereinbaren einen Termin.` },
        { h: `Plagen Sie Fersen oder Fußnägel?`, t: `Schreiben Sie uns, was Sie stört, damit wir die passende Variante vorschlagen. Bei gesundheitlichen Problemen fragen Sie zuerst Ihren Arzt.` },
      ],
      sigs: [{
        chip: `Die richtige Wahl`, eyebrow: `Je nachdem, was Sie brauchen`, h2: `Was möchten Sie von einer Pediküre?`,
        lead: `Finden Sie den Satz, der passt – Variante und Preis sehen Sie sofort.`,
        items: [
          { need: `Ich möchte einfach gepflegte Füße`, pick: `Klassische Pediküre`, text: `Pflege von Nägeln und Nagelhaut, Entfernen von Hornhaut und Hautpflege.` },
          { need: `Ich möchte Farbe, die hält`, pick: `Pediküre mit Gellak oder CND Shellac`, text: `Gel-Lack wird in der Lampe ausgehärtet. Die Nägel sind sofort trocken und die Farbe hält mehrere Wochen.` },
          { need: `Ich habe trockene Fersen und Hornhaut`, pick: `Medizinische Pediküre Footlogix`, text: `Professionelle Kosmetik für trockene und stark beanspruchte Füße. Keine ärztliche Behandlung.` },
          { need: `Ich möchte mich entspannen`, pick: `Vorteilspaket mit Fuß-Spa`, text: `Verwöhnende Fußpflege on top – im Vorteilspaket.` },
        ],
        note: `Diabetes, Nagelpilz, Entzündung oder Wunden? Fragen Sie zuerst Ihren Arzt. Eine Pediküre im Studio ersetzt keine ärztliche Behandlung.`,
      }],
      combos: {
        h2: `Pediküre und etwas on top`,
        lead: `Schreiben Sie uns, was Sie kombinieren möchten, und wir schlagen einen Termin vor. Die Preise stammen aus der Preisliste, je Leistung.`,
        items: [
          { title: `Gellak-Pediküre + Gellak-Maniküre`, text: `Füße und Hände in einem Termin.` },
          { title: `Pediküre mit Fuß-Spa + Head Spa`, text: `Fuß-Spa und Head Spa in einem Besuch.` },
        ],
      },
    },

    /* ============================================================ WIMPERNVERLÄNGERUNG */
    'prodluzovani-ras-praha-2': {
      subject: `Wimpernverlängerung`,
      heroCta: `Wimpern buchen`,
      final: { h: `Wimpern in der Bělehradská? Schreiben Sie uns.`, t: `Nennen Sie uns die Wimpernart und ob es ein Neuset oder ein Auffüllen ist – die Nachricht ist vorausgefüllt.` },
      bands: [
        { h: `Sie wissen, welchen Effekt Sie möchten?`, t: `Schreiben Sie uns die Wimpernart und ob es ein Neuset oder ein Auffüllen ist. Wir vereinbaren einen Termin.` },
        { h: `Empfindliche Augen oder Kontaktlinsen?`, t: `Schreiben Sie uns das vorab und wir besprechen, was nötig ist.` },
      ],
      sigs: [{
        chip: `Dichte`, eyebrow: `Wimpernarten`, h2: `Vom natürlichen Effekt bis zur maximalen Dichte`,
        lead: `Je mehr feine Wimpern auf eine natürliche kommen, desto dichter und ausdrucksstärker der Blick.`,
        items: [
          { name: `Klassisch 1:1`, effect: `Natürlicher Effekt`, text: `Auf jede natürliche Wimper kommt eine künstliche. Dezente Verlängerung und mehr Fülle, eine gute Wahl für den ersten Besuch.` },
          { name: `Volumen 2D–5D`, effect: `Dichter und ausdrucksstärker`, text: `Ein Fächer aus 2 bis 5 feinen Wimpern auf einer natürlichen. Die Zahl nennt, wie viele Wimpern im Fächer sitzen.` },
          { name: `Mega-Volumen`, effect: `Maximale Dichte`, text: `Noch dichtere Fächer aus mehr feinen Wimpern für einen vollen, ausdrucksstarken Blick.` },
        ],
        note: `Das Auffüllen ist günstiger als ein Neuset und wird meist alle zwei bis vier Wochen gebucht.`,
      }],
      combos: {
        h2: `Wimpern und Augenbrauen zusammen`,
        lead: `Schreiben Sie uns, was Sie kombinieren möchten, und wir schlagen einen Termin vor. Die Preise stammen aus der Preisliste, je Leistung.`,
        items: [
          { title: `Wimpern 1:1 auffüllen + Augenbrauen färben`, text: `Augenbrauen und Wimpern geben dem Blick einen klaren Rahmen.` },
          { title: `Volumen-Wimpern + Augenbrauen zupfen`, text: `Dichtere Wimpern und gepflegte Augenbrauen in einem Besuch.` },
        ],
      },
    },

    /* ============================================================ AUGENBRAUEN & KOSMETIK */
    'oboci-kosmetika-praha-2': {
      subject: `Augenbrauen und Kosmetik`,
      heroCta: `Augenbrauen buchen`,
      final: { h: `Augenbrauen in der Bělehradská? Schreiben Sie uns.`, t: `Sagen Sie uns, ob nur Zupfen oder auch Färben – die Nachricht ist vorausgefüllt.` },
      bands: [
        { h: `Zupfen oder Färben?`, t: `Schreiben Sie uns, welche Variante Sie möchten, und wir vereinbaren einen Termin.` },
        { h: `Zu den Augenbrauen auch Gesichtspflege?`, t: `Schreiben Sie uns, was Ihre Haut braucht. Kommen Sie am besten ungeschminkt.` },
      ],
      sigs: [{
        chip: `Vergleich`, eyebrow: `Die Leistungen im Vergleich`, h2: `Zupfen, Färben oder Gesichtspflege?`,
        lead: `Drei Leistungen nebeneinander – wählen Sie danach, was Ihre Augenbrauen und Ihre Haut brauchen.`,
        cols: [`Augenbrauen zupfen`, `Färben + Zupfen`, `Gesichtspflege`],
        rows: [
          { label: `Formen der Augenbrauen` },
          { label: `Farbe für die Augenbrauen` },
          { label: `Gesichtsbehandlung und Massage` },
          { label: `Preis` },
          { label: `Passt, wenn …`, cells: [`Ihre Augenbrauen dicht und dunkel genug sind`, `Ihre Augenbrauen hell, uneinheitlich oder licht sind`, `Sie Ihrer Haut mehr gönnen möchten als Waschen und Creme`] },
          { label: `Gut zu wissen`, cells: [`Meist alle drei bis fünf Wochen`, `Die Farbe verblasst nach und nach, daher wird sie mit dem Zupfen wiederholt`, `Kommen Sie am besten ungeschminkt`] },
        ],
        note: `Bei einer Allergie gegen Farben oder empfindlicher Haut sagen Sie uns das bitte vorab.`,
      }],
      combos: {
        h2: `Augenbrauen und weitere Pflege in einem Termin`,
        lead: `Schreiben Sie uns, was Sie kombinieren möchten, und wir schlagen einen Termin vor. Die Preise stammen aus der Preisliste, je Leistung.`,
        items: [
          { title: `Augenbrauen färben + Wimpern 1:1`, text: `Augenbrauen und Wimpern geben dem Blick gemeinsam einen klaren Rahmen.` },
          { title: `Gesichtspflege + Augenbrauen zupfen`, text: `Haut und Augenbrauen in einem Besuch.` },
        ],
      },
    },

    /* ============================================================ HEAD SPA */
    'head-spa-praha-2': {
      subject: `Head Spa`,
      heroCta: `Head Spa buchen`,
      final: { h: `Head Spa in der Bělehradská? Schreiben Sie uns.`, t: `Sagen Sie uns, wann es Ihnen passt – die Nachricht ist vorausgefüllt. Bělehradská 77, Prag 2.` },
      bands: [
        { h: `Einen Moment nur für sich?`, t: `Schreiben Sie uns und wir vereinbaren einen Termin. Planen Sie ausreichend Zeit ein.` },
        { h: `Head Spa für einen nahestehenden Menschen?`, t: `Schreiben Sie uns und wir vereinbaren einen Termin.` },
      ],
      sigs: [{
        chip: `Ablauf`, eyebrow: `Das erwartet Sie`, h2: `Fünf Schritte zu einem Preis`,
        lead: `Von beruhigendem Klang über die Massage bis zum regenerierenden Öl. Alles ist im Preis für Head Spa enthalten.`,
        priceLabel: `Head Spa – die komplette Pflege`,
        priceNote: `Wie lange der Besuch dauert, nennen wir Ihnen bei der Buchung.`,
        cta: `Head Spa buchen`,
        note: `Head Spa ist eine entspannende Pflege, keine Behandlung. Bei Ekzem, Schuppenflechte oder Reizungen fragen Sie zuerst Ihren Arzt.`,
      }],
      combos: {
        h2: `Head Spa und etwas on top`,
        lead: `Schreiben Sie uns, was Sie kombinieren möchten, und wir schlagen einen Termin vor. Die Preise stammen aus der Preisliste, je Leistung.`,
        items: [
          { title: `Head Spa + Pediküre mit Fuß-Spa`, text: `Füße und Kopf – die ganze Entspannung an einem Ort.` },
          { title: `Head Spa + Gesichtspflege`, text: `Kopf und Haut in einem Besuch.` },
        ],
      },
    },

    /* ============================================================ HERRENHAARSCHNITT */
    'panske-strihy-praha-2': {
      subject: `Herrenhaarschnitt`,
      heroCta: `Haarschnitt buchen`,
      final: { h: `Haarschnitt in der Bělehradská? Schreiben Sie uns.`, t: `Sagen Sie uns, welchen Cut Sie möchten – die Nachricht ist vorausgefüllt. Bělehradská 77, Prag 2, nahe I. P. Pavlova.` },
      bands: [
        { h: `Sie wissen, welchen Cut Sie möchten?`, t: `Schreiben Sie uns den Namen und wir vereinbaren einen Termin. Kommen Sie alle zwei Wochen? Schreiben Sie das auch.` },
        { h: `Zum Haarschnitt auch den Bart?`, t: `Der VIP Cut enthält beides. Schreiben Sie uns und wir schlagen eine Zeit vor.` },
      ],
      sigs: [{
        chip: `Cut-Vergleich`, eyebrow: `Was inklusive ist`, h2: `Welcher Cut passt zu Ihnen?`,
        lead: `Ein Haken heißt: inklusive. Die Tabelle wird direkt aus der Preisliste gelesen und stimmt deshalb immer.`,
        priceLabel: `Preis`,
        note: `Der Rabatt von {off} auf alle Cuts gilt, wenn Sie alle zwei Wochen zum Haarschnitt kommen. Die Bedingungen bestätigen wir bei der Buchung.`,
      }],
      combos: {
        h2: `Haarschnitt und etwas on top`,
        lead: `Schreiben Sie uns, was Sie kombinieren möchten, und wir schlagen einen Termin vor. Die Preise stammen aus der Preisliste, je Leistung.`,
        items: [
          { title: `Klassischer Cut + Bartpflege`, text: `Haarschnitt und Bart einzeln. Der VIP Cut enthält beides für {vip}.` },
          { title: `Premium Cut + Herrenkosmetik`, text: `Haarschnitt mit Massage und Hautpflege in einem Besuch.` },
        ],
      },
    },

    /* ============================================================ BARTPFLEGE */
    'uprava-vousu-praha-2': {
      subject: `Bartpflege`,
      heroCta: `Bartpflege buchen`,
      final: { h: `Bart in der Bělehradská? Schreiben Sie uns.`, t: `Sagen Sie uns, ob die komplette Pflege oder nur der Trimmer – die Nachricht ist vorausgefüllt.` },
      bands: [
        { h: `Eine saubere Bartform gewünscht?`, t: `Schreiben Sie uns und wir vereinbaren einen Termin. Kürzen Sie den Bart bitte nicht kurz vor dem Besuch zu Hause.` },
        { h: `Auch die Haare im Blick?`, t: `Der VIP Cut verbindet Haarschnitt und Bartpflege in einem Besuch. Schreiben Sie uns.` },
      ],
      sigs: [{
        chip: `Gesichtsform`, eyebrow: `Bartform`, h2: `Welche Bartform passt zu Ihnen?`,
        lead: `Eine grobe Orientierung nach Gesichtsform. Ihr Barber berät Sie bei der Besprechung, je nach Dichte Ihres Barts.`,
        items: [
          { face: `Rundes Gesicht`, beard: `Längeres Kinn, schärfere Linien`, text: `Das Gesicht wirkt optisch länger.` },
          { face: `Eckiges Gesicht`, beard: `Rundere Formen`, text: `Mildert einen markanten Kiefer.` },
          { face: `Längliches Gesicht`, beard: `Kürzeres Kinn, vollere Seiten`, text: `Bringt Breite an den Seiten.` },
        ],
        note: `Empfindliche Haut oder eingewachsene Haare? Sagen Sie es Ihrem Barber – er passt das Vorgehen an.`,
      }],
      combos: {
        h2: `Bart und etwas on top`,
        lead: `Schreiben Sie uns, was Sie kombinieren möchten, und wir schlagen einen Termin vor. Die Preise stammen aus der Preisliste, je Leistung.`,
        items: [
          { title: `Bartpflege + Klassischer Cut`, text: `Haare und Bart einzeln – oder gleich der VIP Cut für {vip}.` },
          { title: `Bartpflege + Herrenkosmetik`, text: `Bart und Hautpflege nach der Rasur.` },
        ],
      },
    },

    /* ============================================================ HERRENKOSMETIK & HAARWÄSCHE */
    'panska-kosmetika-praha-2': {
      subject: `Herrenkosmetik und Haarwäsche`,
      heroCta: `Pflege buchen`,
      final: { h: `Pflege in der Bělehradská? Schreiben Sie uns.`, t: `Sagen Sie uns, was Sie möchten – VIP-Gesichtsreinigung, Kopfmassage oder Haarwäsche.` },
      bands: [
        { h: `Leistung gewählt?`, t: `Schreiben Sie uns und wir vereinbaren einen Termin. Die Pflege lässt sich auch mit einem Barber-Besuch verbinden.` },
        { h: `Pflege zum Haarschnitt?`, t: `Schreiben Sie uns, was Sie kombinieren möchten, dann planen wir eine passende Zeit ein.` },
      ],
      sigs: [{
        chip: `Clevere Tipps`, eyebrow: `Aus der Preisliste`, h2: `So holen Sie mehr aus der Pflege heraus`,
        lead: `Drei Beobachtungen, die sich direkt aus der Preisliste ergeben.`,
        items: [
          { title: `Massage zum Haarschnitt`, text: `Der Premium Cut ({premium}) enthält eine Massage, der Klassische Cut ({classic}) nicht. Eine Kopfmassage einzeln kostet {solo}.` },
          { title: `Haarwäsche ist oft inklusive`, text: `Der Klassische, der Premium, der VIP und der VIP All Inclusive Cut enthalten sie. Einzeln können Sie sie ab {wash} buchen.` },
          { title: `Haut nach der Rasur`, text: `Dampf, Maske und Feuchtigkeitspflege helfen, dass sich die Haut nicht spannt. Zur Bartpflege ({beard}) können Sie die Pflege für {care} hinzubuchen.` },
        ],
      }],
      combos: {
        h2: `Pflege und etwas on top`,
        lead: `Schreiben Sie uns, was Sie kombinieren möchten, und wir schlagen einen Termin vor. Die Preise stammen aus der Preisliste, je Leistung.`,
        items: [
          { title: `Klassischer Cut + Herrenkosmetik`, text: `Haarschnitt und Hautpflege in einem Besuch.` },
          { title: `Bartpflege + Herrenkosmetik`, text: `Gepflegter Bart und gut durchfeuchtete Haut.` },
        ],
      },
    },
  },
};
