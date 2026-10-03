// Deutsche Texte der Leistungsseiten, geordnet nach dem tschechischen Slug. Gleiche Struktur wie die tschechische
// Basis in ../content.mjs; hier stehen nur übersetzbare Felder (ids, groups, art, photo, related kommen aus der Basis).
// Interne Links werden mit dem tschechischen Pfad geschrieben (z. B. /cenik/) und beim Rendern auf /de/… umgeschrieben.
// Beträge im Fließtext sind von Hand getippt – `npm run check` prüft sie gegen die Preisliste.
export const contentDe = {
  'manikura-praha-2': {
    name: `Maniküre`,
    cardText: `Klassisch, Gellak oder CND Shellac. Mit oder ohne Hand-Spa.`,
    title: `Maniküre Prag 2 – Klassisch, Gellak, Shellac | ICONO STUDIO`,
    description: `Maniküre in der Bělehradská 77 in Prag 2: klassisch ab 350 CZK, mit Gellak ab 550 CZK, mit CND Shellac ab 650 CZK. Vorteilspakete mit Hand-Spa.`,
    h1: `Maniküre Prag 2`, eyebrow: `Nails · Bělehradská 77`,
    lead: `Klassische Maniküre, Gellak oder CND Shellac in der Bělehradská 77 in Vinohrady. Wählen Sie die reine Nagelpflege oder ein Vorteilspaket mit Hand-Spa.`,
    imageAlt: `Hände bei der Maniküre mit lackierten Nägeln im ICONO STUDIO in Prag 2`,
    artAlt: `Illustration einer Nagellackflasche, einer Nagelfeile und eines Lacktropfens – Maniküre im ICONO STUDIO`,
    intro: {
      h2: `Gepflegte Hände im Zentrum von Prag 2`,
      paras: [
        `Die Maniküre ist die Grundlage der Handpflege. Im ICONO STUDIO machen wir sie in der Bělehradská 77, ganz in der Nähe von I. P. Pavlova und Náměstí Míru – aus Vinohrady und Umgebung sind Sie schnell bei uns. Wir kürzen und formen Ihre Nägel, pflegen die Nagelhaut und lackieren sie auf Wunsch – oder lassen sie natürlich.`,
        `Zur Auswahl stehen drei Grundvarianten: klassische Maniküre ohne Farbe, Maniküre mit Gellak-Gel-Lack und Maniküre mit CND-Shellac-Gel-Lack. Zu jeder können Sie in einem Vorteilspaket ein Hand-Spa hinzubuchen, also eine verwöhnende Handpflege. Die Preise finden Sie unten und in der vollständigen <a href="/cenik/">Preisliste</a>.`,
      ],
    },
    options: {
      h2: `Varianten der Maniküre und Preise`,
      items: [
        { title: `Klassische Maniküre`, text: `Die Grundpflege der Naturnägel: Kürzen, Formen, Nagelhautpflege und abschließende Pflege. Passend, wenn Sie gepflegte Hände ohne Farbe und einen natürlichen Look wünschen. Das Paket enthält zusätzlich ein Hand-Spa.` },
        { title: `Maniküre mit Gellak-Gel-Lack`, text: `Nagelpflege kombiniert mit der Lackierung mit Gellak-Gel-Lack. Gel-Lack wird in der Lampe ausgehärtet, ist daher sofort trocken und hält deutlich länger als herkömmlicher Nagellack. Das Hand-Spa kostet im Paket nur 50 CZK extra.` },
        { title: `Maniküre mit CND Shellac`, text: `Dieselbe Lackierung, aber mit dem Markenprodukt CND Shellac. Sie kostet 100 CZK mehr als die Variante mit Gellak. Auch hier können Sie ein Paket mit Hand-Spa wählen, das 50 CZK mehr kostet als die Maniküre allein.` },
      ],
    },
    guide: {
      h2: `Welche Maniküre ist die richtige?`,
      paras: [
        `Wenn Sie einfach gepflegte Hände ohne Farbe möchten, genügt die <strong>klassische Maniküre</strong>. Sie ist am schnellsten und am günstigsten und eignet sich auch als regelmäßige Pflege zwischen den Lackierungen.`,
        `Wenn Sie Farbe möchten, die hält, wählen Sie <strong>Gellak</strong> oder <strong>CND Shellac</strong>. Beide sind Gel-Lacke, die in der Lampe aushärten – die Nägel sind sofort trocken, nichts verschmiert, und der Lack hält in der Regel mehrere Wochen ohne Abplatzen. Der Unterschied liegt vor allem in Marke und Preis.`,
        `Wenn Sie sich entspannen möchten, wählen Sie ein <strong>Paket mit Hand-Spa</strong>. Bei den Varianten mit Gel-Lack kostet das Paket nur 50 CZK mehr als die Maniküre allein – das lohnt sich immer, wenn Sie sich etwas extra gönnen möchten.`,
        `Und wenn Sie Ihre Nägel verzieren möchten, buchen Sie Nail Art dazu – von einfachen Farbakzenten über French und Ombré bis zu Strasssteinen oder Handmalerei. Die Preise für Nail Art finden Sie in der Tabelle unten.`,
      ],
    },
    steps: {
      h2: `So läuft die Maniküre ab`,
      items: [
        { h: `Beratung`, t: `Sie sagen uns, welche Variante Sie möchten, welche Nagelform Sie mögen und gegebenenfalls welche Farbe. Wenn Sie unsicher sind, beraten wir Sie.` },
        { h: `Nagel- und Nagelhautpflege`, t: `Die Nägel werden gekürzt und geformt, die Nagelhaut wird gepflegt.` },
        { h: `Lackieren und Aushärten`, t: `Bei Gellak und CND Shellac wird die Farbe in Schichten aufgetragen und in der Lampe ausgehärtet. Die klassische Maniküre gibt es auch ohne Farbe.` },
        { h: `Abschließende Pflege`, t: `Zum Schluss werden die Hände gepflegt, damit sie ordentlich und glatt wirken. Bei den Paketen gehört das Hand-Spa zum Termin.` },
      ],
    },
    care: {
      h2: `So pflegen Sie Ihre Hände nach der Maniküre`,
      items: [
        `Verwenden Sie regelmäßig Nagelhautöl oder eine reichhaltige Creme. So bleibt die Nagelhaut weich, und Ihre Nägel sehen noch Wochen nach dem Termin gepflegt aus.`,
        `Tragen Sie beim Geschirrspülen und Putzen Handschuhe – Reinigungsmittel greifen Nägel und Gel-Lack an.`,
        `Benutzen Sie Ihre Nägel nicht als Werkzeug, etwa zum Öffnen von Dosen oder zum Abkratzen von Aufklebern. Der Nagel kann abbrechen, und die Lackierung kann beschädigt werden.`,
        `Ziehen Sie Gel-Lack nicht ab und pulen Sie ihn nicht ab – das schädigt die Oberfläche des Naturnagels. Lassen Sie ihn entfernen – laut Preisliste kostet das Entfernen von Shellac 200 CZK und von Gellak 150 CZK.`,
        `Sobald die Nägel herausgewachsen sind oder der Lack zu splittern beginnt, buchen Sie eine neue Lackierung.`,
      ],
    },
    faq: [
      { q: `Was kostet eine Maniküre in Prag 2?`, a: `Die klassische Maniküre kostet 350 CZK, die Maniküre mit Gellak 550 CZK und die Maniküre mit CND Shellac 650 CZK. Vorteilspakete mit Hand-Spa beginnen bei 490 CZK. Die aktuellen Preise finden Sie in der <a href="/cenik/">Preisliste</a>.` },
      { q: `Was ist der Unterschied zwischen Gellak und CND Shellac?`, a: `Beides sind Gel-Lacke, die in der Lampe aushärten und länger halten als normaler Nagellack. CND Shellac ist ein Markenprodukt, Gellak ist die zweite Gel-Lack-Variante in unserem Angebot. Der Unterschied liegt vor allem im Preis – die Maniküre mit Gellak ist 100 CZK günstiger.` },
      { q: `Wie lange hält Gel-Lack?`, a: `In der Regel mehrere Wochen. Das hängt davon ab, wie schnell Ihre Nägel wachsen, wie stark Sie Ihre Hände beanspruchen und wie Sie sie pflegen. Sobald der Nagel herausgewachsen ist, empfehlen wir, einen Termin für das Entfernen und eine neue Lackierung zu vereinbaren, damit der Lack nicht reißt oder abblättert.` },
      { q: `Was ist ein Hand-Spa?`, a: `Ein Hand-Spa ist eine verwöhnende zusätzliche Handpflege, die Sie in einem Vorteilspaket zur Maniküre buchen können. Den genauen Ablauf erläutern wir Ihnen gern bei der Terminvereinbarung.` },
      { q: `Kann ich Gel-Lack entfernen lassen, der anderswo aufgetragen wurde?`, a: `Ja, das Entfernen von Shellac / Gellak bieten wir separat an: Shellac für 200 CZK, Gellak für 150 CZK. Bitte ziehen Sie ihn nicht selbst ab, sonst schädigen Sie den Nagel.` },
    ],
  },

  'gelove-akrylove-nehty-praha-2': {
    name: `Gel- und Acrylnägel`,
    cardText: `Neue Nägel mit Farbe, Auffüllen und Gel X. Nail Art nach Wunsch.`,
    title: `Gel- und Acrylnägel Prag 2 | ICONO STUDIO`,
    description: `Modellage von Gel-, Acryl- und Gel-X-Nägeln in der Bělehradská 77 in Prag 2. Neue Nägel mit Farbe ab 650 CZK, Auffüllen ab 590 CZK. Nail Art nach Wunsch.`,
    h1: `Gel- und Acrylnägel Prag 2`, eyebrow: `Nails · Bělehradská 77`,
    lead: `Modellage von Gel-, Acryl- und Gel-X-Nägeln mit Farbe. Neue Nägel ab 650 CZK, Auffüllen ab 590 CZK, dazu ein Vorteilspaket mit Hand-Spa.`,
    imageAlt: `Gelnägel in verschiedenen Formen – eckig, rund, oval, Mandel und Coffin`,
    artAlt: `Illustration von fünf Nagelformen: eckig, rund, oval, Mandel und Coffin`,
    intro: {
      h2: `Nagelmodellage nach Maß`,
      paras: [
        `Künstliche Nägel verleihen Ihnen Länge, Form und Stabilität, die natürliche Nägel oft nicht haben. Modellage bedeutet, dass wir den Nagel direkt auf Ihrem eigenen Nagel aus Gel oder Acryl formen – in der Länge, Form und Farbe, die Ihnen gefällt. Wir arbeiten im ICONO STUDIO in der Bělehradská 77 in Prag 2.`,
        `Im Angebot haben wir neue Gel- oder Acrylnägel mit Farbe, das Auffüllen bestehender Nägel und Gel-X-Nägel. Alle Varianten lassen sich mit Nail Art ergänzen – von einfarbigen Akzenten über French und Ombré bis zu Strasssteinen und Handmalerei. Die vollständigen Preise stehen in den Tabellen unten und in der <a href="/cenik/">Preisliste</a>.`,
      ],
    },
    options: {
      h2: `Arten künstlicher Nägel und Preise`,
      items: [
        { title: `Neue Gel- oder Acrylnägel`, text: `Komplette Nagelmodellage mit Farbe. Wenn Sie im Paket ein Hand-Spa dazubuchen, zahlen Sie 50 CZK mehr als für die Modellage allein und gehen mit gepflegten, verwöhnten Händen nach Hause.` },
        { title: `Auffüllen der Nägel`, text: `Mit dem Nagelwachstum wandert die Grenze zwischen Naturnagel und Modellage nach oben. Das Auffüllen gleicht sie aus, bringt die Form wieder in Ordnung und frischt die Farbe auf. Es ist günstiger als eine neue Modellage.` },
        { title: `Gel-X-Nägel`, text: `Eine moderne Technik, bei der der Nagel mit vorgeformten Gel-Tips verlängert wird. Das Ergebnis wirkt in der Regel leicht und natürlich. Der Preis ist derselbe wie bei neuen Gel- oder Acrylnägeln mit Farbe.` },
      ],
    },
    guide: {
      h2: `Gel, Acryl oder Gel X: Was passt zu Ihnen?`,
      paras: [
        `<strong>Gel</strong> ist ein flexibles Material, das in der Lampe aushärtet. Gelnägel wirken leicht und natürlich und eignen sich daher für den Alltag und für alle, die künstliche Nägel zum ersten Mal ausprobieren.`,
        `<strong>Acryl</strong> entsteht durch das Mischen von Flüssigkeit und Pulver und härtet an der Luft aus. Es ist stabil und eignet sich für längere oder auffälligere Formen. Beim Auftragen ist ein typischer Geruch wahrnehmbar.`,
        `<strong>Gel X</strong> verwendet vorgeformte Gel-Tips. Es ist eine moderne Alternative für alle, die eine Verlängerung mit leichtem Ergebnis möchten.`,
        `<strong>Nagelform:</strong> Am häufigsten sind eckig, rund, oval, Mandel und Coffin. Eckig und rund sind praktisch, oval und Mandel strecken die Finger optisch, und Coffin ist auffällig und modisch. Die Form wählen wir gemeinsam aus, oder senden Sie uns Inspiration per WhatsApp.`,
        `Wenn Sie <strong>extra lange Nägel</strong> möchten, rechnen Sie mit einem Zuschlag – die Preisliste nennt 50, 150 und 200 CZK. Unsicher? Schreiben Sie uns, wie Sie Ihre Hände nutzen und wie lang Ihre Nägel sein sollen, und wir empfehlen Material und Form.`,
      ],
    },
    steps: {
      h2: `So läuft die Modellage ab`,
      items: [
        { h: `Beratung`, t: `Wir besprechen Material (Gel, Acryl oder Gel X), Länge, Form und Farbe. Ein Inspirationsfoto sehen wir gern.` },
        { h: `Vorbereitung des Nagels`, t: `Der Naturnagel wird so vorbereitet, dass die Modellage gut hält.` },
        { h: `Modellage`, t: `Der Nagel wird in die gewünschte Länge und Form gebracht und ausgehärtet.` },
        { h: `Farbe und Nail Art`, t: `Die Nägel werden gefärbt und auf Wunsch verziert – Glitzer, Strasssteine, Ombré, French oder Handmalerei.` },
        { h: `Feinschliff`, t: `Die Oberfläche wird geglättet und die Nägel werden gepflegt, damit das Ergebnis sauber und ordentlich wirkt.` },
      ],
    },
    care: {
      h2: `Pflege und Auffüllen`,
      items: [
        `Das Auffüllen ist in der Regel nach zwei bis vier Wochen nötig, je nachdem, wie schnell Ihre Nägel wachsen. Rechtzeitiges Auffüllen erhält die Form und verringert das Bruchrisiko.`,
        `Reißen Sie abgelöste Stellen nicht ab – Sie riskieren, den Naturnagel zu beschädigen. Buchen Sie stattdessen eine Reparatur. Wenn zwischen zwei Terminen ein einzelner Nagel bricht oder sich ablöst, nutzen Sie die Leistung „Korrektur eines Nagels“ für 70 CZK.`,
        `Verwenden Sie regelmäßig Nagelhautöl und tragen Sie beim Putzen Handschuhe.`,
        `Nehmen Sie künstliche Nägel nicht selbst ab. Das Entfernen künstlicher Nägel kostet 250 CZK.`,
        `Wenn Sie die Farbe ändern möchten, nennt die Preisliste den Farbwechsel bei künstlichen Nägeln (unter 10 Tage) für 350 CZK. Die genauen Bedingungen bestätigen wir Ihnen bei der Terminvereinbarung.`,
      ],
    },
    faq: [
      { q: `Was kosten Gelnägel in Prag 2?`, a: `Neue Gel- oder Acrylnägel mit Farbe kosten 650 CZK, das Auffüllen 590 CZK und Gel-X-Nägel 650 CZK. Das Vorteilspaket mit Hand-Spa kostet 700 CZK, das Auffüllen dazu 650 CZK. Nail Art, extra lange Nägel und weitere Leistungen werden separat berechnet – alles steht in der <a href="/cenik/">Preisliste</a>.` },
      { q: `Wie oft müssen künstliche Nägel aufgefüllt werden?`, a: `In der Regel nach zwei bis vier Wochen, je nach Nagelwachstum und Beanspruchung. Bei der Terminbuchung wählen Sie die günstigere Variante „Auffüllen“.` },
      { q: `Was ist der Unterschied zwischen Gel und Acryl?`, a: `Gel ist flexibler und härtet in der Lampe aus, Acryl ist stabiler und härtet an der Luft aus. Beide Materialien geben dem Nagel Länge und Form; sie unterscheiden sich vor allem im Tragegefühl und in der Eignung für verschiedene Formen. Gern empfehlen wir Ihnen eines passend zu Ihrem Lebensstil.` },
      { q: `Was ist Gel X?`, a: `Gel X ist eine Verlängerungstechnik mit vorgeformten Gel-Tips. Sie eignet sich für ein leichtes, natürlich wirkendes Ergebnis.` },
      { q: `Was kostet das Entfernen künstlicher Nägel?`, a: `Das Entfernen künstlicher Nägel kostet 250 CZK, das Entfernen von reinem Shellac-Gel-Lack 200 CZK und von Gellak 150 CZK. Bitte lassen Sie es im Studio durchführen und nehmen Sie die Nägel nicht selbst ab.` },
    ],
  },

  'pedikura-praha-2': {
    name: `Pediküre`,
    cardText: `Klassisch, mit Gel-Lack sowie Medical-Pediküre mit Footlogix.`,
    title: `Pediküre Prag 2 | Klassisch & Footlogix | ICONO STUDIO`,
    description: `Pediküre in der Bělehradská 77 in Prag 2: klassisch ab 490 CZK, mit Gel-Lack ab 590 CZK, Medical-Pediküre mit Footlogix ab 750 CZK. Vorteilspakete mit Fuß-Spa.`,
    h1: `Pediküre Prag 2`, eyebrow: `Nails · Bělehradská 77`,
    lead: `Klassische und lackierte Pediküre sowie Medical-Pediküre mit Footlogix in der Bělehradská 77. Wählen Sie die reine Fußpflege oder ein Vorteilspaket mit Fuß-Spa.`,
    imageAlt: `Fuß mit lackierten Fußnägeln – Pediküre im ICONO STUDIO`,
    artAlt: `Illustration eines Fußes mit lackierten Fußnägeln und Tropfen`,
    intro: {
      h2: `Fußpflege im Zentrum von Prag 2`,
      paras: [
        `Pediküre ist nicht nur etwas für Sommer und Sandalen. Regelmäßige Pflege von Füßen und Fußnägeln bedeutet bequemeres Gehen, glatte Haut und ein gepflegtes Aussehen das ganze Jahr über. Im ICONO STUDIO machen wir sie in der Bělehradská 77 in Prag 2, ganz in der Nähe von I. P. Pavlova.`,
        `Im Angebot sind die klassische Pediküre, die Pediküre mit Lackierung mit Gellak oder CND Shellac und die Medical-Pediküre mit Footlogix-Produkten. Die meisten Varianten gibt es auch in Vorteilspaketen mit Fuß-Spa, also mit verwöhnender Fußpflege obendrauf. Alle Preise finden Sie unten und in der <a href="/cenik/">Preisliste</a>.`,
      ],
    },
    options: {
      h2: `Pediküre-Arten und Preise`,
      items: [
        { title: `Klassische Pediküre`, text: `Die Grundlage der Fußpflege: Pflege von Nägeln und Nagelhaut, Entfernen von Hornhaut und Hautpflege. Geeignet für regelmäßige Pflege. Im Paket ist zusätzlich ein Fuß-Spa enthalten.` },
        { title: `Pediküre mit Lackierung`, text: `Pediküre kombiniert mit der Lackierung mit Gellak oder CND Shellac. Wenn Sie Ihre Zehennägel nur färben möchten, wählen Sie die reine Lackierung. Die Farbe hält mehrere Wochen, und die Nägel sind nach dem Auftragen sofort trocken – bequem in Sandalen und in Schuhen.` },
        { title: `Medical-Pediküre mit Footlogix`, text: `Pediküre mit der professionellen Kosmetik Footlogix, ausgerichtet auf die Pflege trockener und strapazierter Fußhaut, Hornhautstellen und rissiger Fersen. Es handelt sich nicht um eine ärztliche Behandlung. Sie lässt sich mit der Lackierung Gellak oder CND Shellac kombinieren.` },
      ],
    },
    guide: {
      h2: `Welche Pediküre ist die richtige?`,
      paras: [
        `Sie möchten nur gepflegte Füße ohne Farbe? Wählen Sie die <strong>klassische Pediküre</strong>. Sie möchten Farbe, die hält? Wählen Sie die <strong>Pediküre mit Gellak</strong> oder <strong>CND Shellac</strong>, oder die <strong>reine Lackierung</strong>, wenn Ihre Nägel keine weitere Pflege brauchen.`,
        `Wenn trockene Fersen, Hornhaut oder strapazierte Füße Sie stören, ist die <strong>Medical-Pediküre mit Footlogix</strong> dafür gedacht. Und wenn Sie sich entspannen möchten, ergänzen Sie ein <strong>Fuß-Spa</strong> in einem der Pakete.`,
        `<strong>Wichtiger Hinweis:</strong> Wenn Sie Diabetes, eine Pilzerkrankung der Nägel, Entzündungen, Wunden oder andere gesundheitliche Probleme an den Füßen haben, sprechen Sie zuerst mit Ihrem Arzt. Eine Pediküre im Studio ersetzt keine ärztliche Behandlung.`,
      ],
    },
    steps: {
      h2: `So läuft die Pediküre ab`,
      items: [
        { h: `Beratung und Vorbereitung`, t: `Wir wählen die Variante und besprechen eventuelle Beschwerden, zum Beispiel trockene Fersen oder eingewachsene Nägel. Bei den Paketen gehört das Fuß-Spa zum Termin.` },
        { h: `Nagel- und Nagelhautpflege`, t: `Die Nägel werden gekürzt und geformt, die Nagelhaut wird gepflegt.` },
        { h: `Hautpflege der Füße`, t: `Hornhaut wird entfernt und die Haut gepflegt. Bei der Medical-Pediküre verwenden wir zusätzlich Footlogix-Produkte.` },
        { h: `Lackieren (optional)`, t: `Wir lackieren die Nägel mit Gellak oder CND Shellac und härten sie in der Lampe aus.` },
        { h: `Abschließende Pflege`, t: `Zum Schluss werden die Füße gepflegt, damit sie glatt und weich sind.` },
      ],
    },
    care: {
      h2: `Fußpflege nach der Pediküre`,
      items: [
        `Tragen Sie täglich eine Feuchtigkeitscreme auf Fersen und Fußsohlen auf. So bleibt die Haut glatt, und es bildet sich weniger Hornhaut.`,
        `Wenn Sie geschlossene Schuhe tragen, wählen Sie Modelle mit ausreichend Platz für die Zehen. Druck ist eine häufige Ursache für Hornhaut und eingewachsene Nägel.`,
        `Gehen Sie in Schwimmbädern, Saunen und öffentlichen Duschen nicht barfuß – das schützt vor Pilzinfektionen.`,
        `Buchen Sie die regelmäßige Pediküre in der Regel alle vier bis sechs Wochen, je nach Nagelwachstum und Beanspruchung Ihrer Füße.`,
        `Ziehen Sie Gel-Lack nicht ab. Lassen Sie ihn entfernen (Shellac 200 CZK, Gellak 150 CZK), so beugen Sie Nagelschäden vor.`,
      ],
    },
    faq: [
      { q: `Was kostet eine Pediküre in Prag 2?`, a: `Die klassische Pediküre kostet 490 CZK, die Pediküre mit Gellak 590 CZK und die Pediküre mit CND Shellac 650 CZK. Die Medical-Pediküre mit Footlogix beginnt bei 750 CZK. Vorteilspakete mit Fuß-Spa gibt es ab 590 CZK. Die vollständigen Preise stehen in der <a href="/cenik/">Preisliste</a>.` },
      { q: `Was ist Footlogix?`, a: `Footlogix ist eine Linie professioneller Fußkosmetik, vor allem für trockene und strapazierte Haut. In unserer Preisliste ist die Medical-Pediküre mit Footlogix mit Gellak oder CND Shellac erhältlich.` },
      { q: `Wie oft sollte ich zur Pediküre gehen?`, a: `In der Regel alle vier bis sechs Wochen, je nach Nagelwachstum und Beanspruchung der Füße. Bei lackierten Nägeln richten Sie sich nach der Haltbarkeit Ihres Lacks.` },
      { q: `Kann ich mit Diabetes oder Nagelpilz zur Pediküre kommen?`, a: `Bitte sprechen Sie zuerst mit Ihrem Arzt. Die Pediküre im Studio ist Kosmetik und ersetzt keine ärztliche Behandlung. Teilen Sie uns eventuelle gesundheitliche Probleme vor dem Termin mit.` },
      { q: `Wie lange hält Lack an den Zehennägeln?`, a: `Gel-Lack hält in der Regel mehrere Wochen. Das hängt vom Nagelwachstum und vom getragenen Schuhwerk ab.` },
    ],
  },

  'prodluzovani-ras-praha-2': {
    name: `Wimpernverlängerung`,
    cardText: `Klassisch 1:1, Volumen 2D–5D, Mega Volumen und Design-Effekte.`,
    title: `Wimpernverlängerung Prag 2 | Classic & Volume | ICONO STUDIO`,
    description: `Wimpernverlängerung in der Bělehradská 77 in Prag 2: klassisch 1:1 ab 990 CZK, Volumen 2D–5D ab 1.190 CZK, Mega Volumen ab 1.390 CZK. Auffüllen ab 790 CZK.`,
    h1: `Wimpernverlängerung Prag 2`, eyebrow: `Beauty · Bělehradská 77`,
    lead: `Klassische Wimpern 1:1, Volumen 2D–5D, Mega Volumen und Design-Effekte. Neuset ab 990 CZK, Auffüllen ab 790 CZK.`,
    imageAlt: `Auge mit langen verlängerten Wimpern und Augenbraue`,
    artAlt: `Illustration eines Auges mit langen Wimpern und einer Augenbraue`,
    intro: {
      h2: `Ein ausdrucksvollerer Blick ohne Wimperntusche`,
      paras: [
        `Bei der Wimpernverlängerung wird an jeder Naturwimper eine künstliche Wimper befestigt. Das Ergebnis sind längere, dichtere und ausdrucksstärkere Wimpern – morgens kommen Sie ohne Wimperntusche und Wimpernzange aus. Wir führen die Wimpernverlängerung im ICONO STUDIO in der Bělehradská 77 in Prag 2 durch.`,
        `Die Preisliste unterscheidet zwischen einem <strong>Neuset</strong> und dem <strong>Auffüllen</strong>. Das Neuset ist die komplette Anbringung, das Auffüllen die regelmäßige Pflege, bei der zwischenzeitlich ausgefallene Wimpern ersetzt werden. Das Auffüllen ist günstiger. Alle Preise finden Sie unten und in der <a href="/cenik/">Preisliste</a>.`,
      ],
    },
    options: {
      h2: `Wimpernarten und Preise`,
      items: [
        { title: `Klassische Wimpern 1:1`, text: `An jeder Naturwimper wird eine künstliche Wimper angebracht. Das Ergebnis wirkt natürlich – eine dezente Verlängerung und Verdichtung. Passend, wenn Sie keinen dramatischen Effekt wünschen, und eine gute Wahl für den ersten Besuch.` },
        { title: `Volumen-Wimpern 2D–5D`, text: `Aus mehreren dünnen Wimpern wird ein Fächer geformt, der an einer Naturwimper befestigt wird. 2D bedeutet einen Fächer aus zwei Wimpern, 5D aus fünf – je höher die Zahl, desto dichter und ausdrucksstärker der Effekt.` },
        { title: `Mega-Volumen-Wimpern`, text: `Noch dichtere Fächer aus mehr feinen Wimpern für maximale Dichte und einen auffälligen, vollen Blick.` },
        { title: `Design-Effekt und Entfernen`, text: `Wimpernverlängerung mit einem besonderen Effekt, den wir bei der Terminvereinbarung besprechen. Wenn Sie die Wimpern entfernen lassen möchten, überlassen Sie das uns – zu Hause drohen Schäden an den Naturwimpern.` },
      ],
    },
    guide: {
      h2: `So wählen Sie die Wimpernart`,
      paras: [
        `Wenn Sie einen <strong>natürlichen Look</strong> möchten, wählen Sie klassische Wimpern 1:1. Wenn Sie einen <strong>dichteren, ausdrucksstärkeren Blick</strong> möchten, wählen Sie Volumen 2D–5D – die Stufe richtet sich danach, wie auffällig der Effekt sein soll. Für das vollste und dichteste Ergebnis gibt es Mega Volumen.`,
        `Wenn seit dem letzten Besuch längere Zeit vergangen ist und nur noch wenige Wimpern übrig sind, kann ein neues Set besser geeignet sein als das Auffüllen – wir beraten Sie bei der Terminvereinbarung.`,
        `<strong>Vorbereitung auf den Termin:</strong> Kommen Sie ohne Augen-Make-up und ohne Wimperntusche. Wenn Sie empfindliche Augen oder eine Allergie haben, Kontaktlinsen tragen oder eine Augenoperation hatten, teilen Sie uns das vorab mit.`,
      ],
    },
    steps: {
      h2: `So läuft die Anbringung ab`,
      items: [
        { h: `Beratung`, t: `Wir besprechen Wimpernart, Länge und Schwung nach Ihren Wünschen und Ihrer Augenform.` },
        { h: `Vorbereitung`, t: `Die Naturwimpern werden gereinigt und für die Anbringung vorbereitet.` },
        { h: `Anbringung`, t: `Die künstlichen Wimpern werden nach und nach an den natürlichen befestigt, je nach gewählter Technik.` },
        { h: `Kontrolle und Hinweise`, t: `Zum Schluss prüfen wir das Ergebnis und erklären Ihnen, wie Sie Ihre Wimpern pflegen.` },
      ],
    },
    care: {
      h2: `Pflege der verlängerten Wimpern`,
      items: [
        `Vermeiden Sie am ersten Tag nach der Anbringung Wasser und Dampf – der Kleber braucht Zeit, um vollständig auszuhärten.`,
        `Verwenden Sie im Augenbereich keine Öle und fettigen Cremes. Öl schwächt den Kleber, und die Wimpern würden sich schneller lösen.`,
        `Bürsten Sie die Wimpern täglich mit einem sauberen Bürstchen, damit sie nicht verkleben und ihre Form behalten.`,
        `Reiben Sie sich nicht die Augen und ziehen Sie nicht an den Wimpern. Verwenden Sie keine mechanische Wimpernzange.`,
        `Entfernen Sie sie nicht zu Hause. Das Entfernen der Wimpernverlängerung kostet 200 CZK.`,
        `Das Auffüllen wird in der Regel nach zwei bis vier Wochen gebucht – Naturwimpern erneuern sich, und die künstlichen fallen mit ihnen nach und nach aus.`,
      ],
    },
    faq: [
      { q: `Was kostet eine Wimpernverlängerung in Prag 2?`, a: `Klassische Wimpern 1:1 kosten 990 CZK (Auffüllen 790 CZK), Volumen-Wimpern 2D–5D 1.190 CZK (Auffüllen 990 CZK) und Mega Volumen 1.390 CZK (Auffüllen 1.090 CZK). Der Design-Effekt beginnt bei 1.190 CZK, das Entfernen kostet 200 CZK. Alles steht in der <a href="/cenik/">Preisliste</a>.` },
      { q: `Wie lange halten verlängerte Wimpern?`, a: `Künstliche Wimpern fallen zusammen mit den natürlichen in deren Wachstumszyklus aus, deshalb werden sie in der Regel nach zwei bis vier Wochen aufgefüllt. Die Dauer ist von Mensch zu Mensch verschieden.` },
      { q: `Was ist der Unterschied zwischen klassischen und Volumen-Wimpern?`, a: `Bei klassischen Wimpern wird an jeder Naturwimper eine künstliche angebracht. Bei Volumen wird ein Fächer aus mehreren dünnen Wimpern befestigt, das Ergebnis ist dichter und ausdrucksstärker.` },
      { q: `Schädigt die Verlängerung meine Naturwimpern?`, a: `Bei fachgerechter Anbringung und Pflege sollten die Naturwimpern keinen Schaden nehmen. Deshalb ist es wichtig, die Wimpern zu Hause nicht zu entfernen oder abzuziehen und das Entfernen dem Studio zu überlassen.` },
      { q: `Was ist, wenn ich empfindliche Augen oder eine Allergie habe?`, a: `Teilen Sie uns das vorab mit. Bei empfindlichen Augen, Allergien oder gesundheitlichen Problemen sprechen Sie vor der Anbringung bitte auch mit Ihrem Arzt.` },
    ],
  },

  'oboci-kosmetika-praha-2': {
    name: `Augenbrauen & Kosmetik`,
    cardText: `Augenbrauen formen und färben, Gesichtspflege und Massage.`,
    title: `Augenbrauen formen & färben Prag 2 | ICONO STUDIO`,
    description: `Augenbrauen formen und färben ab 100 CZK sowie Gesichtspflege mit Massage für 750 CZK in der Bělehradská 77 in Prag 2. Termin per WhatsApp, SMS oder Telefon.`,
    h1: `Augenbrauen & Kosmetik Prag 2`, eyebrow: `Beauty · Bělehradská 77`,
    lead: `Augenbrauen formen und färben sowie kosmetische Gesichtspflege mit Massage. Augenbrauen ab 100 CZK, Gesichtspflege 750 CZK.`,
    imageAlt: `Gepflegte Augenbrauen, Pinzette und Kosmetikcreme`,
    artAlt: `Illustration gepflegter Augenbrauen, einer Pinzette und eines Cremetiegels`,
    intro: {
      h2: `Augenbrauen, die zu Ihrem Gesicht passen`,
      paras: [
        `Augenbrauen rahmen das Gesicht ein und verändern seinen Ausdruck erheblich. Gut geformte Brauen betonen die Augen, vereinheitlichen den Look und ersparen Ihnen das morgendliche Schminken. Im ICONO STUDIO in der Bělehradská 77 in Prag 2 bieten wir das Formen der Augenbrauen sowie das Färben in Kombination mit dem Formen an.`,
        `Dazu kommt kosmetische Pflege: <strong>Gesichtspflege und Massage</strong>. Das ist eine angenehme Art, der Haut Aufmerksamkeit zu schenken – und sich selbst auch. Die Preise finden Sie unten und in der <a href="/cenik/">Preisliste</a>.`,
      ],
    },
    options: {
      h2: `Leistungen und Preise`,
      items: [
        { title: `Augenbrauen formen`, text: `Formen der Augenbrauen passend zur Gesichtsform und nach Ihren Vorstellungen. Geeignet für die regelmäßige Pflege, damit die Brauen gepflegt bleiben.` },
        { title: `Augenbrauen färben und formen`, text: `Formen kombiniert mit Färben. Die Farbe vereinheitlicht den Farbton, betont die Form und hilft, wenn die Brauen hell oder spärlich sind.` },
        { title: `Gesichtspflege und Massage`, text: `Kosmetische Gesichtsbehandlung in Verbindung mit einer Massage. Den genauen Ablauf stimmen wir auf Ihren Hauttyp ab – schreiben Sie uns bei der Terminvereinbarung, was Ihre Haut braucht.` },
      ],
    },
    guide: {
      h2: `Formen oder Färben mit Formen?`,
      paras: [
        `Wenn Ihre Brauen dichter und dunkel genug sind, genügt oft das <strong>Formen</strong> allein. Wenn Ihre Brauen hell, ungleichmäßig oder spärlich sind, lohnt sich das <strong>Färben mit Formen</strong>. Der Preisunterschied beträgt 100 CZK.`,
        `Augenbrauen werden in der Regel alle drei bis fünf Wochen in Form gebracht, je nach Haarwuchs. Planen Sie vor einem wichtigen Anlass den Termin einige Tage vorher ein, damit die Brauen ein natürliches Aussehen bekommen.`,
        `<strong>Färben – was Sie erwartet:</strong> Die Farbe vereinheitlicht den Farbton der Brauen, betont ihre Form und lässt sie optisch dichter wirken. Das passt, wenn Ihre Brauen im Gesicht „verschwinden“ oder Sie nicht jeden Morgen Stift oder Puder verwenden möchten. Den Farbton wählen wir passend zu Ihrer Haarfarbe und Ihren Wünschen.`,
        `<strong>Gesichtspflege – für wen:</strong> für alle, die ihrer Haut mehr als das übliche Waschen und Eincremen gönnen möchten. Die Gesichtsmassage sorgt zusätzlich für angenehme Entspannung. Sagen Sie uns, was Ihre Haut braucht, und wir passen den Ablauf an.`,
        `Augenbrauen ergänzen sich hervorragend mit der <a href="/prodluzovani-ras-praha-2/">Wimpernverlängerung</a> – zusammen geben sie dem Blick einen klaren Rahmen. Und wenn Sie sich mehr gönnen möchten, werfen Sie einen Blick auf <a href="/head-spa-praha-2/">Head Spa</a>.`,
      ],
    },
    steps: {
      h2: `So läuft der Termin ab`,
      items: [
        { h: `Form festlegen`, t: `Gemeinsam wählen wir die Brauenform passend zu Ihrer Gesichtsform und Ihren Wünschen.` },
        { h: `Formen`, t: `Die Brauen werden geformt und von unerwünschten Härchen befreit.` },
        { h: `Färben (optional)`, t: `Wenn Sie das Färben gewählt haben, wird die Farbe aufgetragen und einwirken gelassen, damit sie gut annimmt.` },
        { h: `Gesichtspflege (optional)`, t: `Gesichtspflege und Massage können Teil Ihres Termins sein.` },
      ],
    },
    care: {
      h2: `Pflege nach dem Formen und Färben`,
      items: [
        `Vermeiden Sie nach dem Formen in den ersten Stunden Make-up im Brauenbereich, damit die Haut nicht gereizt wird.`,
        `Verwenden Sie nach dem Färben nicht sofort ein intensives Peeling und meiden Sie Saunen, damit die Farbe länger hält.`,
        `Wenn Sie eine Allergie oder empfindliche Haut haben, sagen Sie uns das vor dem Färben.`,
        `Kommen Sie zur Gesichtspflege am besten ungeschminkt, damit die Haut gut gereinigt werden kann.`,
        `Zupfen Sie zwischen den Terminen Ihre Brauen bitte nicht selbst. So bleibt die Form, die wir gemeinsam geschaffen haben, sauber, und wir können sie beim nächsten Termin pflegen.`,
      ],
    },
    faq: [
      { q: `Was kostet das Formen der Augenbrauen in Prag 2?`, a: `Das Formen allein kostet 100 CZK, das Färben in Verbindung mit dem Formen 200 CZK. Die Gesichtspflege mit Massage kostet 750 CZK. Alles finden Sie in der <a href="/cenik/">Preisliste</a>.` },
      { q: `Wie lange hält die Brauenfarbe?`, a: `In der Regel mehrere Wochen, je nach Hauttyp und Pflege. Die Farbe verblasst allmählich, deshalb wird das Färben zusammen mit dem Formen wiederholt.` },
      { q: `Was beinhaltet die Gesichtspflege?`, a: `Es ist eine kosmetische Gesichtsbehandlung in Verbindung mit einer Massage. Den Ablauf stimmen wir auf Ihren Hauttyp ab und erklären ihn Ihnen gern bei der Terminvereinbarung.` },
      { q: `Wie oft sollte ich meine Augenbrauen formen lassen?`, a: `In der Regel alle drei bis fünf Wochen, je nachdem, wie schnell Ihre Härchen nachwachsen.` },
      { q: `Für wen eignet sich das Färben der Augenbrauen?`, a: `Für alle mit hellen, ungleichmäßigen oder spärlichen Brauen, die eine ausgeprägtere Form ohne tägliches Schminken wünschen. Bei einer Allergie gegen Farbstoffe teilen Sie uns das bitte vorab mit.` },
      { q: `Kann ich mit Make-up kommen?`, a: `Zum Formen der Augenbrauen ja, zur Gesichtspflege mit Massage aber besser ungeschminkt. So wird die Haut besser gereinigt, und die Behandlung ist wirksamer.` },
    ],
  },

  'head-spa-praha-2': {
    name: `Head Spa`,
    cardText: `Entspannende Kopfhautpflege, Massage und regenerierendes Öl.`,
    title: `Head Spa Prag 2 | Kopfhautpflege & Massage | ICONO STUDIO`,
    description: `Head Spa in der Bělehradská 77 in Prag 2 für 890 CZK: weißes Rauschen, Akupunkturpunkte, Kopfhaut-Peeling, asiatische Haarwäsche, regenerierendes Öl.`,
    h1: `Head Spa Prag 2`, eyebrow: `Beauty · Bělehradská 77`,
    lead: `Entspannende Pflege für Kopfhaut und Haare für 890 CZK: Weißes-Rauschen-Therapie, Massage, Peeling, asiatische Haarwäsche und regenerierendes Öl.`,
    imageAlt: `Illustration einer Kopfhaut mit Massagepunkten und Tropfen`,
    artAlt: `Illustration einer Kopfhaut mit Akupunkturpunkten, Schallwellen und Wassertropfen`,
    intro: {
      h2: `Ein Moment nur für Ihren Kopf`,
      paras: [
        `Head Spa ist eine Pflege, die Entspannung mit einer pflegenden Routine für Kopfhaut und Haare verbindet. Langsames Tempo, angenehme Klänge, Massage und Wasser – Sie gehen entspannt nach Hause. Gönnen können Sie sich das im ICONO STUDIO in der Bělehradská 77 in Prag 2.`,
        `Die Leistung kostet 890 CZK und umfasst fünf Schritte. Unten finden Sie, was sie enthalten und wofür sie gut sind. Die vollständige Preisliste steht auf der Seite <a href="/cenik/">Preisliste</a>.`,
      ],
    },
    options: {
      h2: `Was Head Spa enthält`,
      items: [
        { title: `Weißes-Rauschen-Therapie`, text: `Ein gleichmäßiger, beruhigender Klang, der Umgebungsgeräusche dämpft und beim Entspannen hilft. Er bildet den ruhigen Klanghintergrund der gesamten Pflege.` },
        { title: `Behandlung von Akupunkturpunkten am Kopf`, text: `Gezielter Druck auf ausgewählte Punkte am Kopf, der zum Lösen von Verspannungen eingesetzt wird.` },
        { title: `Kopfhaut-Peeling`, text: `Ein sanftes Peeling, das hilft, die Kopfhaut von Schmutz und Stylingrückständen zu reinigen.` },
        { title: `Asiatische Haarwäsche und Kopfmassage`, text: `Langsames, rhythmisches Waschen in Verbindung mit einer Massage. Es ist der wichtigste Entspannungsteil der Pflege.` },
        { title: `Föhnen und regenerierendes Öl`, text: `Die Haare werden geföhnt (ohne Styling) und mit einem regenerierenden Haaröl gepflegt. Sie gehen mit glatten, gepflegten Haaren nach Hause.` },
      ],
    },
    guide: {
      h2: `Für wen Head Spa geeignet ist`,
      paras: [
        `Head Spa ist für alle, die sich entspannen, Kopfhaut und Haare pflegen oder sich einen Moment ohne Eile gönnen möchten. Es passt nach einer anstrengenden Woche, als Geschenk für einen lieben Menschen oder als regelmäßiges Ritual der Selbstfürsorge.`,
        `Es ist keine ärztliche Behandlung. Wenn Sie Probleme mit der Kopfhaut haben, zum Beispiel Ekzeme oder Schuppenflechte, oder Ihre Kopfhaut empfindlich und gereizt ist, teilen Sie uns das vorab mit und sprechen Sie auch mit Ihrem Arzt.`,
        `<strong>Wie oft?</strong> Nach Lust und Bedarf. Manche gönnen sich Head Spa als regelmäßiges Ritual, andere zu besonderen Anlässen oder als Geschenk für einen lieben Menschen. Eine Empfehlung geben wir Ihnen gern direkt beim Termin.`,
        `Das Föhnen der Haare gehört zur Pflege, aber ohne Styling. Wenn Sie Ihre Haare für einen bestimmten Anlass stylen lassen möchten, schauen Sie sich <a href="/panska-kosmetika-praha-2/">Haarwäsche und Kopfmassage</a> oder <a href="/panske-strihy-praha-2/">Herrenhaarschnitte</a> an.`,
      ],
    },
    care: {
      h2: `Woran Sie vor und nach dem Termin denken sollten`,
      items: [
        `Vor dem Termin müssen Sie nichts Besonderes tun. Kommen Sie ausgeruht und in bequemer Kleidung.`,
        `Belasten Sie Ihre Haare nach dem Termin nicht unnötig mit schweren Stylingprodukten, damit das regenerierende Öl wirken kann.`,
        `Wenn Sie eine empfindliche Kopfhaut oder eine Allergie gegen Kosmetikprodukte haben, sagen Sie uns das vorab.`,
        `Planen Sie genügend Zeit ein. Head Spa ist eine langsame Pflege, die man am besten ohne Eile genießt – die Dauer des Termins teilen wir Ihnen bei der Terminvereinbarung mit.`,
        `Head Spa lässt sich mit weiteren Leistungen kombinieren, zum Beispiel mit <a href="/manikura-praha-2/">Maniküre</a> oder <a href="/pedikura-praha-2/">Pediküre</a> – so wird Ihr Besuch zu einer rundum erholsamen Auszeit.`,
      ],
    },
    faq: [
      { q: `Was kostet Head Spa in Prag 2?`, a: `Head Spa kostet 890 CZK. Es umfasst die Weißes-Rauschen-Therapie, die Behandlung von Akupunkturpunkten am Kopf, ein Kopfhaut-Peeling, asiatische Haarwäsche und Kopfmassage sowie Föhnen mit regenerierendem Öl.` },
      { q: `Ist beim Head Spa auch ein Haarstyling enthalten?`, a: `Die Haare werden geföhnt, aber nicht gestylt. Wenn Sie Ihre Haare für einen bestimmten Anlass stylen lassen möchten, sprechen Sie uns bei der Terminvereinbarung an.` },
      { q: `Ist Head Spa bei Kopfhautproblemen geeignet?`, a: `Es ist eine entspannende und pflegende Leistung, keine Behandlung. Bei Ekzemen, Schuppenflechte oder Reizungen sprechen Sie bitte zuerst mit Ihrem Arzt und teilen Sie uns das bei der Terminvereinbarung mit.` },
      { q: `Wie oft ist es sinnvoll, Head Spa zu wiederholen?`, a: `Nach Lust und Bedarf – manche gönnen es sich regelmäßig, andere zu besonderen Anlässen. Eine Empfehlung geben wir Ihnen gern beim Termin.` },
      { q: `Ist Head Spa für alle Haartypen geeignet?`, a: `Die Pflege ist für Kopfhaut und Haare im Allgemeinen gedacht. Wenn Ihre Haare gefärbt oder geschädigt sind oder Sie eine empfindliche Kopfhaut haben, schreiben Sie uns – wir beraten Sie gern.` },
      { q: `Was ist die Weißes-Rauschen-Therapie?`, a: `Es ist ein gleichmäßiger, beruhigender Klanghintergrund, der Umgebungsgeräusche dämpft und beim Entspannen hilft.` },
    ],
  },

  'panske-strihy-praha-2': {
    name: `Herrenhaarschnitt`,
    cardText: `Klassischer, Premium- und VIP-Cut. Vergünstigte Preise für Schüler und Kinder.`,
    title: `Herrenhaarschnitt Prag 2 | Barber Cuts | ICONO STUDIO`,
    description: `Herrenhaarschnitt in der Bělehradská 77 in Prag 2: Classic Cut 640 CZK, Premium 770 CZK, VIP 990 CZK. Schüler ab 540 CZK, Kinder bis 8 Jahre 400 CZK.`,
    h1: `Herrenhaarschnitt Prag 2`, eyebrow: `Barber · Bělehradská 77`,
    lead: `Barber Cuts vom klassischen Haarschnitt bis zu VIP All Inclusive. Styling und Balsam oder Eau de Cologne sind inklusive – und alle zwei Wochen sparen Sie 100 CZK.`,
    imageAlt: `Barber arbeitet beim Herrenhaarschnitt mit dem Haarschneider an den Seiten und im Nacken`,
    artAlt: `Illustration von Schere und Kamm – Herrenhaarschnitt im Barbershop`,
    intro: {
      h2: `Barbershop im Zentrum von Prag 2`,
      paras: [
        `ICONO STUDIO ist Barbershop und Nagelstudio in einem, in der Bělehradská 77 in Prag 2, ganz in der Nähe von I. P. Pavlova und Náměstí Míru. Herrenhaarschnitte bieten wir als Komplettleistung an: nicht nur den Schnitt selbst, sondern auch Styling und zum Abschluss Balsam oder Eau de Cologne. Je nach Variante kommen Haarwäsche, Massage oder Bartpflege hinzu.`,
        `Die Barber Cuts sind in mehrere Stufen gegliedert, sodass Sie genau das wählen, was Sie brauchen. Es gibt auch vergünstigte Varianten für Schüler und Kinder. Alle Preise stehen unten und in der <a href="/cenik/">Preisliste</a>.`,
      ],
    },
    options: {
      h2: `Barber Cuts und Preise`,
      items: [
        { title: `Schüler-Cut bis 18 Jahre`, text: `Ein vergünstigter Haarschnitt für junge Kunden bis 18 Jahre. Er umfasst Haarschnitt, Styling und Balsam oder Eau de Cologne.` },
        { title: `Klassischer Cut`, text: `Der Barber-Basisschnitt mit Haarwäsche. Für alle, die einfach einen guten Haarschnitt und ein gepflegtes Ergebnis möchten.` },
        { title: `Premium Cut`, text: `Ein klassischer Cut, zusätzlich mit Massage. Für alle, die den Besuch mehr genießen möchten.` },
        { title: `VIP Cut`, text: `Haarwäsche, Haarschnitt und Bartpflege in einem Termin – Haare und Bart aufeinander abgestimmt.` },
        { title: `VIP All Inclusive`, text: `Das umfassendste Paket: Haarwäsche, Haarschnitt, Bart und Massage, dazu Styling und Balsam oder Eau de Cologne.` },
        { title: `Kinder bis 8 Jahre`, text: `Haarschnitt für unsere jüngsten Kunden bis 8 Jahre.` },
      ],
    },
    guide: {
      h2: `Welcher Cut ist der richtige?`,
      paras: [
        `Sie möchten einfach einen guten Haarschnitt? Wählen Sie den <strong>Klassischen Cut</strong>. Sie möchten dazu Entspannung? Wählen Sie den <strong>Premium Cut</strong>, der zusätzlich eine Massage enthält. Wenn auch der Bart gepflegt werden soll, nehmen Sie den <strong>VIP Cut</strong>, und wenn Sie alles genießen möchten, gibt es <strong>VIP All Inclusive</strong>.`,
        `<strong>Kommen Sie regelmäßig?</strong> Wer alle zwei Wochen zum Haarschnitt kommt, spart 100 CZK auf alle Cuts. Die Einzelheiten zum Rabatt erläutern wir Ihnen gern vor Ort. Ein regelmäßiger Haarschnitt ist der einfachste Weg, immer gepflegt auszusehen.`,
        `<strong>So bereiten Sie sich vor:</strong> Kommen Sie mit einer Vorstellung oder einem Foto eines Haarschnitts, der Ihnen gefällt. Der Barber sagt Ihnen, was zu Ihrem Haar und Ihrer Kopfform passt, und berät Sie zum Styling für zu Hause.`,
      ],
    },
    steps: {
      h2: `So läuft der Barber-Termin ab`,
      items: [
        { h: `Beratung`, t: `Sie sagen, was Sie möchten, oder zeigen ein Foto. Der Barber rät, was zu Ihnen passt.` },
        { h: `Haarwäsche`, t: `Bei den Cuts, die sie enthalten (Klassisch, Premium, VIP, VIP All Inclusive).` },
        { h: `Haarschnitt`, t: `Ein Schnitt nach Maß mit Schere und Haarschneider in der vereinbarten Form.` },
        { h: `Bart und Massage`, t: `Beim VIP Cut die Bartpflege, bei Premium und VIP All Inclusive die Massage.` },
        { h: `Styling und Finish`, t: `Styling und Balsam oder Eau de Cologne – so gehen Sie gepflegt nach Hause.` },
      ],
    },
    care: {
      h2: `So halten Sie Ihren Haarschnitt zu Hause in Form`,
      items: [
        `Waschen Sie Ihre Haare mit einem Shampoo, das zu Ihnen passt, und verwenden Sie regelmäßig ein Stylingprodukt – Ihr Barber sagt Ihnen, welches.`,
        `Buchen Sie regelmäßig Haarschnitte, je nach Haarlänge in der Regel alle drei bis vier Wochen. Kürzere Schnitte mit Übergängen sollten etwas häufiger aufgefrischt werden.`,
        `Wenn Sie einen Bart haben, ergänzen Sie den Haarschnitt um die Bartpflege – der VIP Cut verbindet beides.`,
        `Wenn Sie alle zwei Wochen kommen, nutzen Sie den Rabatt von 100 CZK auf alle Cuts.`,
      ],
    },
    faq: [
      { q: `Was kostet ein Herrenhaarschnitt in Prag 2?`, a: `Der Klassische Cut kostet 640 CZK, der Premium Cut 770 CZK, der VIP Cut 990 CZK und VIP All Inclusive 1.190 CZK. Der Schüler-Cut bis 18 Jahre beginnt bei 540 CZK, der Haarschnitt für Kinder bis 8 Jahre kostet 400 CZK. Die aktuellen Preise stehen in der <a href="/cenik/">Preisliste</a>.` },
      { q: `Worin unterscheiden sich Klassischer und Premium Cut?`, a: `Beide umfassen Haarwäsche, Haarschnitt, Styling und Balsam oder Eau de Cologne. Der Premium Cut enthält zusätzlich eine Massage.` },
      { q: `Ist im VIP Cut die Bartpflege enthalten?`, a: `Ja. Der VIP Cut umfasst Haarwäsche, Haarschnitt, Bart, Styling und Balsam oder Eau de Cologne. VIP All Inclusive ergänzt eine Massage.` },
      { q: `Gibt es einen vergünstigten Preis für Schüler?`, a: `Ja, der Schüler-Cut bis 18 Jahre beginnt bei 540 CZK und umfasst Haarschnitt, Styling und Balsam oder Eau de Cologne.` },
      { q: `Gibt es einen Rabatt für Stammkunden?`, a: `Wer alle zwei Wochen zum Haarschnitt kommt, erhält 100 CZK Rabatt auf alle Cuts. Die Einzelheiten erläutern wir Ihnen gern.` },
    ],
  },

  'uprava-vousu-praha-2': {
    name: `Bartpflege`,
    cardText: `Bartformung mit Haarschneider, Trimmer und Rasiermesser, Balsam inklusive.`,
    title: `Bartpflege Prag 2 | Barber ab 200 CZK | ICONO STUDIO`,
    description: `Bartpflege im Barbershop in der Bělehradská 77 in Prag 2: komplette Pflege mit Haarschneider, Trimmer und Rasiermesser für 420 CZK, nur Trimmer 200 CZK.`,
    h1: `Bartpflege Prag 2`, eyebrow: `Barber · Bělehradská 77`,
    lead: `Saubere Form, präzise Konturen und ein gepflegter Bart. Bartpflege 420 CZK, nur Trimmer 200 CZK, Haarschnitt mit Bart im VIP Cut.`,
    imageAlt: `Rasiermesser und Rasierpinsel`,
    artAlt: `Illustration von Rasiermesser und Rasierpinsel – Bartpflege im Barbershop`,
    intro: {
      h2: `Ein Bart mit Form`,
      paras: [
        `Einen gepflegten Bart erkennt man auf den ersten Blick: saubere Konturen, eine gleichmäßige Form und ein Bart, der zum Gesicht passt. Im ICONO STUDIO in der Bělehradská 77 in Prag 2 bringen wir ihn so in Form, dass er frisch und gepflegt wirkt.`,
        `Wir bieten eine komplette Bartpflege und einen separaten Trimmer-Service für das schnelle Nachbessern. Wenn Sie auch Ihre Haare machen lassen möchten, finden Sie den Bart ebenfalls im VIP Cut. Die Preise stehen unten und in der <a href="/cenik/">Preisliste</a>.`,
      ],
    },
    options: {
      h2: `Leistungen und Preise`,
      items: [
        { title: `Bartpflege`, text: `Komplette Bartpflege: Formen mit Haarschneider und Trimmer, Konturen mit Rasierer oder Rasiermesser nachziehen und abschließend Balsam oder Eau de Cologne. Passend, wenn Sie Ihrem Bart eine neue Form geben oder ihn in Ordnung bringen möchten.` },
        { title: `Nur Trimmer`, text: `Schnelles Nachbessern mit dem Trimmer. Passend als Pflege zwischen den kompletten Terminen.` },
        { title: `Haarschnitt mit Bart`, text: `Sie möchten Haare und Bart gleichzeitig machen lassen? VIP Cut und VIP All Inclusive enthalten beides, sodass Sie alles in einem Termin auf eine Form abstimmen.` },
      ],
    },
    guide: {
      h2: `So wählen Sie die Bartform`,
      paras: [
        `Die Bartform wählt man am besten passend zur Gesichtsform. Bei einem <strong>runderen Gesicht</strong> funktionieren meist ein etwas längeres Kinn und schärfere Konturen, die das Gesicht optisch strecken. Bei einem <strong>eckigen Gesicht</strong> passen rundere Formen, die den Kiefer weicher wirken lassen. Bei einem <strong>längeren Gesicht</strong> ist meist ein kürzeres Kinn mit volleren Seiten besser.`,
        `Der Barber berät Sie in der Beratung, was zu Ihrem Gesicht und der Dichte Ihres Bartes passt. Wenn Sie Inspiration haben, bringen Sie ein Foto mit.`,
        `<strong>Rasiermesser und empfindliche Haut:</strong> Das Nachziehen der Konturen mit Rasiermesser oder Rasierer ergibt das schärfste Ergebnis, kann die Haut aber reizen. Wenn Sie empfindliche Haut, eingewachsene Haare oder eine Neigung zu Rötungen haben, sagen Sie es dem Barber – er stellt sich darauf ein.`,
        `<strong>Wie lange den Bart vor dem ersten Trimmen wachsen lassen?</strong> In der Regel genügen einige Wochen, damit genug da ist, woraus sich eine Form schaffen lässt. Der Barber erkennt, ob es sich lohnt, noch zu warten.`,
      ],
    },
    steps: {
      h2: `So läuft die Bartpflege ab`,
      items: [
        { h: `Beratung`, t: `Sie legen Länge, Form und Konturen fest.` },
        { h: `Formen`, t: `Der Bart wird mit Haarschneider und Trimmer gekürzt und in Form gebracht.` },
        { h: `Konturen und Details`, t: `Die Ränder werden mit Rasierer oder Rasiermesser nachgezogen, damit sie sauber und scharf sind.` },
        { h: `Abschluss`, t: `Die Haut wird mit Balsam oder Eau de Cologne gepflegt.` },
      ],
    },
    care: {
      h2: `Bartpflege zu Hause`,
      items: [
        `Waschen Sie Ihren Bart regelmäßig mit einem milden Mittel und verwenden Sie keine aggressiven Shampoos, die die Haut austrocknen.`,
        `Verwenden Sie Bartöl oder Bartbalsam. Es macht die Haare weich und hält die Haut darunter in gutem Zustand.`,
        `Kämmen oder bürsten Sie Ihren Bart – die Haare richten sich aus, und der Bart wirkt gepflegter.`,
        `Vermeiden Sie nach der Rasur mit dem Rasiermesser einige Stunden lang alkoholhaltige Produkte, damit die Haut nicht gereizt wird.`,
        `Buchen Sie die Pflege in der Regel alle zwei bis drei Wochen, damit der Bart seine Form behält.`,
      ],
    },
    faq: [
      { q: `Was kostet eine Bartpflege in Prag 2?`, a: `Die Bartpflege kostet 420 CZK, ein separater Trimmer 200 CZK. Die Bartpflege ist außerdem Teil des VIP Cuts (990 CZK) und von VIP All Inclusive (1.190 CZK). Alles steht in der <a href="/cenik/">Preisliste</a>.` },
      { q: `Was ist in der Bartpflege enthalten?`, a: `Die Pflege umfasst die Arbeit mit Haarschneider und Trimmer, das Nachziehen der Konturen mit Rasierer oder Rasiermesser und abschließend Balsam oder Eau de Cologne.` },
      { q: `Worin unterscheiden sich Bartpflege und „Nur Trimmer“?`, a: `Die Bartpflege ist eine komplette Leistung mit Formen und Nachziehen der Konturen. „Nur Trimmer“ ist ein schnelles Nachbessern mit dem Trimmer für 200 CZK.` },
      { q: `Kann man Haare und Bart gleichzeitig machen lassen?`, a: `Ja. VIP Cut und VIP All Inclusive umfassen Haarschnitt und Bartpflege in einem Termin.` },
      { q: `Was soll ich vor dem Termin vorbereiten?`, a: `Kommen Sie mit Ihrem Bart in der Länge, in der er ist. Kürzen Sie ihn zu Hause nicht kurz vor dem Termin, damit der Barber etwas hat, woraus er eine Form schaffen kann. Wenn Sie Inspiration haben, bringen Sie ein Foto mit.` },
      { q: `Ist die Bartpflege auch für empfindliche Haut geeignet?`, a: `Bei empfindlicher Haut oder eingewachsenen Haaren sagen Sie es vorab. Der Barber passt das Vorgehen an und empfiehlt die Pflege nach dem Termin.` },
      { q: `Wie oft sollte ich zur Bartpflege kommen?`, a: `In der Regel alle zwei bis drei Wochen, je nach Wuchs und gewünschter Form.` },
    ],
  },

  'panska-kosmetika-praha-2': {
    name: `Herrenkosmetik & Haarwäsche`,
    cardText: `VIP-Gesichtsreinigung, Kopfmassage und Haarwäsche im Barbershop.`,
    title: `Herrenkosmetik & Haarwäsche Prag 2 | ICONO STUDIO`,
    description: `Herrenkosmetik und VIP-Gesichtsreinigung für 850 CZK, Kopfmassage 150 CZK und Haarwäsche ab 100 CZK. Barbershop ICONO STUDIO, Bělehradská 77, Prag 2.`,
    h1: `Herrenkosmetik & Haarwäsche Prag 2`, eyebrow: `Barber · Bělehradská 77`,
    lead: `VIP-Gesichtsreinigung, Kopfmassage und Haarwäsche im Barbershop. Herrenkosmetik 850 CZK, Kopfmassage 150 CZK, Haarwäsche ab 100 CZK.`,
    imageAlt: `Cremedose, Dampf und Handtuch – Herrenkosmetik im Barbershop`,
    artAlt: `Illustration einer Cremedose, von Dampf und gefalteten Handtüchern`,
    intro: {
      h2: `Pflege nicht nur für die Haare`,
      paras: [
        `Ein Barbershop ist nicht nur etwas für den Haarschnitt. Im ICONO STUDIO in der Bělehradská 77 in Prag 2 können Sie auch Herrenkosmetik, die VIP-Gesichtsreinigung, eine Kopfmassage oder eine Haarwäsche buchen – einzeln oder als Ergänzung zum Haarschnitt.`,
        `Die Leistungen sind darauf ausgerichtet, dass Sie sich nach dem Termin frisch und gepflegt fühlen. Die Preise finden Sie unten und in der <a href="/cenik/">Preisliste</a>.`,
      ],
    },
    options: {
      h2: `Leistungen und Preise`,
      items: [
        { title: `Herrenkosmetik / VIP-Gesichtsreinigung`, text: `Komplette Hautpflege: Gesichtsreinigung und -massage, Hautreinigung und eine Feuchtigkeitspflege inklusive Dampf und Maske. Zum Abschluss eine Feuchtigkeitscreme. Passend, wenn Sie Ihrer Haut mehr gönnen möchten als das übliche morgendliche Waschen.` },
        { title: `Kopfmassage`, text: `Eine entspannende Kopfmassage für 150 CZK. Sie kann eine kurze Abwechslung beim Termin oder ein eigener Moment der Entspannung sein.` },
        { title: `Haarwäsche`, text: `Die Haarwäsche gibt es ab 100 CZK. Die Varianten klassisch, mit Massage oder mit Styling beginnen bei 250 CZK.` },
      ],
    },
    guide: {
      h2: `Wann welche Leistung passt`,
      paras: [
        `<strong>Herrenkosmetik / VIP-Gesichtsreinigung</strong> ist das Richtige, wenn Sie Ihrer Haut eine tiefere Pflege gönnen möchten. Dampf und Maske entspannen die Haut, und die Feuchtigkeit hilft, dass sie sich nach der Rasur nicht spannt.`,
        `Die <strong>Kopfmassage</strong> passt als Ergänzung zum Haarschnitt oder allein, wenn Sie Verspannungen lösen möchten. Wenn Sie mehr möchten, gibt es auch das ausführlichere <a href="/head-spa-praha-2/">Head Spa</a>.`,
        `Die <strong>Haarwäsche</strong> schätzt jeder, der vor dem Styling saubere Haare möchte. Classic Cut, Premium, VIP und VIP All Inclusive enthalten die Haarwäsche im Preis.`,
        `Sie können die Pflege mit einem Besuch beim Barber verbinden – schreiben Sie uns bei der Terminvereinbarung, was Sie kombinieren möchten, dann planen wir eine passende Zeit ein.`,
        `Wenn Sie zur Pflege auch einen Haarschnitt oder eine Bartpflege brauchen, schauen Sie sich <a href="/panske-strihy-praha-2/">Herrenhaarschnitte</a> und <a href="/uprava-vousu-praha-2/">Bartpflege</a> an.`,
      ],
    },
    steps: {
      h2: `So läuft die Gesichtspflege ab`,
      items: [
        { h: `Gesichtsreinigung und Massage`, t: `Die Haut wird gereinigt und durch eine Massage entspannt.` },
        { h: `Hautreinigung`, t: `Es folgt eine gründlichere Reinigung der Haut.` },
        { h: `Dampf und Maske`, t: `Eine Feuchtigkeitspflege – Dampf und Maske.` },
        { h: `Feuchtigkeitscreme`, t: `Zum Abschluss wird die Haut mit einer Feuchtigkeitscreme gepflegt.` },
      ],
    },
    care: {
      h2: `Hautpflege zwischen den Terminen`,
      items: [
        `Waschen Sie Ihr Gesicht zweimal täglich mit einem milden Produkt für Männer und pflegen Sie die Haut mit einer Creme.`,
        `Verwenden Sie nach der Rasur einen alkoholfreien Balsam oder eine Creme, damit die Haut nicht gereizt wird.`,
        `Wenn Ihre Haut empfindlich oder problematisch ist, sagen Sie uns das bei der Terminvereinbarung.`,
        `Wie viel Pflege Ihre Haut braucht und wie oft sich die Kosmetik lohnt, beraten wir Sie gern beim Termin.`,
      ],
    },
    faq: [
      { q: `Was kostet Herrenkosmetik in Prag 2?`, a: `Herrenkosmetik / VIP-Gesichtsreinigung kostet 850 CZK. Die Kopfmassage kostet 150 CZK und die Haarwäsche beginnt ab 100 CZK. Alles finden Sie in der <a href="/cenik/">Preisliste</a>.` },
      { q: `Für wen ist Herrenkosmetik gedacht?`, a: `Für jeden Mann, der seiner Haut Pflege über das übliche Waschen hinaus gönnen möchte – besonders nach der Rasur oder bei trockener und strapazierter Haut.` },
      { q: `Was umfasst die Herrenkosmetik?`, a: `Gesichtsreinigung und -massage, Hautreinigung, eine Feuchtigkeitspflege (Dampf und Maske) und eine Feuchtigkeitscreme.` },
      { q: `Ist die Haarwäsche im Preis des Haarschnitts enthalten?`, a: `Ja, beim Klassischen Cut, Premium Cut, VIP Cut und VIP All Inclusive ist die Haarwäsche enthalten. Beim Schüler-Cut und beim Kinderhaarschnitt ist sie nicht aufgeführt.` },
      { q: `Kann ich nur eine Kopfmassage buchen?`, a: `Ja. Die Kopfmassage kostet 150 CZK und kann einzeln gebucht werden.` },
    ],
  },
};
