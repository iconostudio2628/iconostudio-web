# SEO strategie ICONO STUDIO (stav 2026-11-04)

Podklad: export Google Search Console `icono-studio.cz` (Chart, Pages, Queries, Countries, Devices; 8. 10.–2. 11. 2026).
Co je v dokumentu hotové, je označeno ✅, co čeká na majitele nebo na další kolo, ⏳.

## 1. Co říkají data

| Ukazatel | Hodnota | Závěr |
|---|---|---|
| Kliknutí / zobrazení | 53 / 957 (CTR 5,5 %) | web je 4 týdny starý, indexace běží |
| Mobil / desktop | 44 kliknutí, poz. 6,2 / 9 kliknutí, poz. 26 | mobil je hlavní kanál, desktop zatím nízko |
| Brand (`icono studio`, `icono studios`) | 18 z 53 kliknutí | zbytek je zatím téměř nic: web nemá nebrandové pozice |
| Země | CZ 731 zobr., DE 71, AT 55, CH 9 | němčina je druhý největší trh (turisté a Rakušané), EN skoro nic |
| `/cenik/` | 154 zobr., poz. 28, 0 kliknutí | cenové dotazy (`gelové nehty ceník`, `doplnění gelových nehtů cena`, `sundání nehtů cena`, `manikura cena`, `pedikúra cena praha`) nemají odpovídající stránku |
| `/blog/pedikura-footlogix-vs-klasicka/` | 84 zobr., poz. 8,9, 0 kliknutí | lidé hledají „co to je“ (`footlogix pedikúra co to je` 35 zobr., `co je footlogix pedikura`), ne „vs.“ |
| `/barbershop-praha-2/` | 106 zobr., CTR 1,9 % | titulek bez ceny, popis s zavádějícím „od 100 Kč“ |
| `/de/gel-acryl-naegel-prag-2/` | 102 zobr., poz. 12,7 | titulek bez klíčového slova z dotazů |
| `/gelove-akrylové-nehty-praha-2/` (s diakritikou v URL) | 1 klik | existuje chybná URL, kterou Google zná |
| `?rwg_token=…` | desítky URL | parametry z Google Rezervací, kanonické URL je ošetřena (canonical), nic nedělat |

Dotazy, které web neobsluhuje samostatnou stránkou, přepsané na záměr:

* ceny: `gelové nehty ceník`, `kolik stojí gelové/akrylové nehty`, `doplnění gelových nehtů cena`, `manikúra cena`, `pedikúra cena praha`, `gel lak cena salon`
* sundání: `sundání nehtů cena`, `kolik stojí sundání gelových nehtů`
* co to je: `footlogix pedikúra co to je`, `co je footlogix`
* barber: `barber praha 2`, `barber belehradska`, `kadeřnictví praha 2` (poz. 1), `pánské kadeřnictví praha 2`, `walk in barber prague`, `barber ip pavlova`
* němčina: `nagelstudio prag preise` (poz. 5,8, 2 kliknutí), `friseur prag preise`, `prag nägel machen`, `nagelstudio prag`, `nails prag`, `manicure in der nähe`
* mimo rozsah: ruské dotazy (`гель лак прага`, `мастер мужского маникюра`)

## 2. Architektura obsahu (hub a spoke)

```
Homepage
├─ Nail salon Praha 2 (hub) ── Manikúra · Gelové a akrylové nehty · Pedikúra · Řasy · Obočí a kosmetika · Head Spa
├─ Barber Praha 2 (hub) ─────── Pánský střih · Úprava vousů · Pánská kosmetika
├─ Ceník  ← rychlé odpovědi „Kolik stojí …“ (8 otázek ve 3 jazycích) + OfferCatalog JSON-LD
├─ Časté dotazy /caste-dotazy/ ✅ nová stránka (28 otázek v 5 tématech)
└─ Blog /blog/  ✅ 4 témata, 11 článků
   ├─ Ceny:   Kolik stojí gelové nehty ✅ · Manikúra: cena ✅
   ├─ Nehty:  Shellac vs. Gellak · Gel nebo akryl ✅ · Sundání gelových nehtů ✅
   ├─ Péče:   Pedikúra Footlogix (přepsáno na „co to je“) · Prodlužování řas ✅ · Head Spa ✅
   └─ Barber: Pánský střih: ceny a obsah cutů · Barbershop nebo kadeřnictví ✅ · Úprava vousů: jak často ✅
```

### Mapa dotaz → stránka (jedna stránka na záměr)

| Záměr | Stránka | Poznámka |
|---|---|---|
| objednat gelové nehty | `/gelove-akrylove-nehty-praha-2/` | transakční |
| kolik stojí gelové nehty | `/blog/kolik-stoji-gelove-nehty-praha/` | informační, odkazuje na službu |
| sundání gelových nehtů, cena | `/blog/sundani-gelovych-nehtu/` | |
| gel vs akryl vs Gel X | `/blog/gel-nebo-akryl-gel-x/` | |
| manikúra cena | `/blog/manikura-cena-praha-2/` | služba `/manikura-praha-2/` zůstává transakční |
| footlogix co to je | `/blog/pedikura-footlogix-vs-klasicka/` | titulek a H1 „co to je“, nová FAQ „Co je pedikúra Footlogix?“ |
| prodlužování řas typy a ceny | `/blog/prodluzovani-ras-klasika-volume/` | |
| head spa co to je | `/blog/head-spa-co-to-je/` | |
| barber × kadeřnictví | `/blog/barbershop-nebo-kadernictvi/` | zachytává `kadeřnictví praha 2` |
| úprava vousů jak často | `/blog/uprava-vousu-jak-casto/` | titulek bez „Praha 2“, aby nekanibalizoval službu |
| ceny celkově | `/cenik/` + `/caste-dotazy/` | |

Riziko kanibalizace: články „cena“ a stránky služeb cílí na příbuzné fráze. Řešení je v záměru (článek = vysvětlení a rozpis, služba = objednání), v titulcích a v odkazech článek → služba. **Po 4 týdnech zkontrolovat v GSC, která URL se ukazuje pro `gelové nehty praha`, `manikúra praha 2`, `úprava vousů praha 2`.**

## 3. Otázky, na které lidé odpovídají (zdroj: GSC + dotazy kolem služeb)

Každá otázka je v článku jako H2 nebo ve FAQ s odpovědí v prvních větách (answer first) a v `/caste-dotazy/`.
Kolik stojí (gelové nehty, manikúra, pedikúra, řasy, střih, vousy, Head Spa, obočí, sundání) · jak často doplňovat (nehty 2–4 týdny, řasy 2–4 týdny, pedikúra 4–6 týdnů, vousy 2–3 týdny, střih 3–4 týdny) · rozdíl (Shellac × Gellak, gel × akryl, klasické × Volume řasy, barbershop × kadeřnictví, Head Spa × mytí hlavy) · co je (Gel X, Footlogix, P.Shine, Head Spa, bílý zvuk) · lze doma (sundat nehty? ne) · zdraví (cukrovka, plíseň, citlivé oči, pokožka hlavy → lékař) · objednání, adresa, otevírací doba, bez objednání.
Odpovědi vycházejí jen z ceníku a z podkladů majitele. Kde studio údaj nemá (délka návštěvy, přijímání bez objednání, jazyky obsluhy), text říká „upřesníme při objednání“ nebo „zavolejte“.

## 4. Interní prolinkování ✅

* Každá česká stránka služby má blok „Články o službě“ (automaticky podle pole `services` u článku).
* Hub Nail salon, Barber, homepage a ceník mají vlastní výběr „Praktické průvodce“.
* Každý článek: TL;DR, ≥4 odkazy na služby a ceník, „Další články“ (ručně `see` + stejné téma), „Související služby“, odkaz na FAQ v bloku o autorovi.
* Blog je rozdělený do 4 témat s vlastními H2 a anchor odkazy (`/blog/#ceny`, `#nehty`, `#pece`, `#barber`).
* Patička všech jazyků odkazuje na blog a `/caste-dotazy/`.
* EN/DE stránky na české články neodkazují z obsahu (články nejsou přeložené), jen z patičky.
* `npm run check` hlídá: každá česká služba odkazuje na ≥1 článek, každý článek má ≥3 příchozí odkazy (dnes 7–10), služba odkazuje zpět na články, které se jí týkají.

## 5. Strukturovaná data ✅

| Typ | Kde | Pozn. |
|---|---|---|
| `BeautySalon`/`HairSalon`/`NailSalon` (`@id` /#business) | všude | beze změny |
| `Service` + `OfferCatalog` s cenami | 9 stránek služeb | beze změny, zdroj ceny je `priceGroups` |
| **`WebPage` + `OfferCatalog` celého ceníku** | `/cenik/`, `/en/price-list/`, `/de/preisliste/` | nové, ceny z `priceGroups` |
| **`FAQPage`** | každá stránka s FAQ (služby, huby, ceník, články, `/caste-dotazy/`) | generuje se z viditelného textu, kontrola hlídá shodu |
| `BlogPosting` | články | **nově** `articleSection`, `wordCount`, `mentions` (služby), obrázek článku, vlastní datum vydání |
| `Blog` + `CollectionPage` + `ItemList` | `/blog/` | nově seznam článků |
| `CollectionPage` | `/caste-dotazy/` | nové |
| `BreadcrumbList`, `ImageGallery`, `WebSite` | beze změny | |

Upřímně k `FAQPage`: Google od května 2026 rich výsledky s FAQ v hledání nezobrazuje. Značení jsem přidal, protože o to byla žádost, nic nestojí a odpovídá viditelnému textu, ale **nečekejte od něj rozšířený snippet**. Hodnota FAQ je v čitelných odpovědích na dotazy. Hodnocení (`AggregateRating`) a `Person` jsem nepřidával: nemáme ověřený počet recenzí ani jmenovaného autora.

## 6. Technické změny podle GSC ✅

* Titulky a popisky: `/cenik/` (nově „Ceník manikúry, nehtů a pánských střihů“ s cenami), CS Nail hub, CS/DE/EN Barber hub (pryč zavádějící „od 100 Kč“, nově Klasický Cut 640 Kč), DE Nagelstudio (cíl `nagelstudio prag`), DE a EN ceník (cíl `nagelstudio prag preise`).
* `vercel.json`: 301 z chybné URL `/gelove-akrylové-nehty-praha-2/` na správnou. **Netestováno na Vercelu, po nasazení ověřit odpověď 301** (`curl -I`).
* Sitemap obsahuje všech 11 článků s vlastním `lastmod` a `/caste-dotazy/`. `llms.txt` obsahuje nový blok.

## 7. Co zbývá (⏳)

1. **EN a DE obsah**: DE je 2. největší trh. Nejlepší další krok: přeložit 2 články (ceník nehtů a manikúry „Nagelstudio Prag Preise“, „Gelnägel Prag Preis“) a `/caste-dotazy/` do DE a EN. Vyžaduje rozšíření blogu o jazyky (hreflang) a rodilý review.
2. **Autor a odborník**: jméno a bio konkrétního barbera/technika (zvýší E-E-A-T, odemkne `Person`), citáty do článků. Jen majitel.
3. **Reálné fotky k článkům**: každý článek má dnes 2 fotky ze studia (výlohy, práce). Fotky přímo k tématu (sundání nehtů, Head Spa, řasy) vlastní majitel.
4. **Recenze v JSON-LD**: až bude jisté, kolik jich je a jak je Google počítá.
5. **Google Business Profile**: služby s popisy a cenami, kategorie, Q&A (nejlevnější dopad na „barber praha 2“, „barber ip pavlova“).
6. **Sledování**: po 4 týdnech v GSC dotazy `kolik stojí gelové nehty`, `sundání gelových nehtů`, `footlogix co to je`, `barber praha 2`; pozice `/cenik/` (cíl: pod 15) a CTR hubů (cíl: nad 3 %).
7. **Zadat ručně**: žádost o indexaci nových URL v GSC (11 článků, `/caste-dotazy/`), znovu odeslat sitemap.
8. **Doorway stránky nevytvářet** (např. „barber Vinohrady“, „nehty Žižkov“): bez vlastního obsahu hrozí propad. Lokalitu řeší Kontakt, GBP a texty „u I. P. Pavlova“.
9. Ruština (`гель лак прага`): mimo rozsah webu, jen pokud majitel cílí na ruskojazyčné klientky.
