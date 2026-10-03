# ICONO STUDIO – web (Nails & Barber, Praha 2)

Statický web bez závislostí, ve třech jazycích (čeština, angličtina, němčina). Stránky se generují z `src/`
do kořene projektu (`index.html`, `cenik/`, `en/…`, `de/…`), takže stačí nahrát celý obsah složky na hosting.

```bash
npm run build     # vygeneruje HTML ve všech jazycích, sitemap.xml a robots.txt
npm run dev       # build + lokální server na http://localhost:5173
npm run check     # SEO a integrita: title/description, H1, odkazy, alt, JSON-LD, počet slov, ceny v textech, překlady
npm run art       # znovu vykreslí ilustrace služeb do images/art/
```

## Jazyky

| Jazyk | Adresa | Příklad |
|---|---|---|
| Čeština (výchozí) | `/…` | `/manikura-praha-2/` |
| Angličtina | `/en/…` | `/en/manicure-prague-2/` |
| Němčina | `/de/…` | `/de/manikuere-prag-2/` |

- Vlajky v hlavičce (a v mobilním menu) vedou vždy na **stejnou stránku v jiném jazyce**. Web nikoho automaticky nepřesměrovává.
- Každá stránka má přeložený slug, `hreflang` a v `sitemap.xml` vazby mezi jazykovými verzemi (jakmile je známá doména).
- Čeština je zdroj. Angličtina a němčina jsou překladové vrstvy:

| Co | Soubor |
|---|---|
| Texty rozhraní, úvodní stránka, rozcestníky, ceník, kontakt, FAQ | `src/i18n/ui.cs.mjs`, `ui.en.mjs`, `ui.de.mjs` |
| Názvy v ceníku (služby, balíčky, „v ceně“) | `src/i18n/prices.en.mjs`, `prices.de.mjs` (klíčem je český název) |
| Stránky služeb (EN / DE) | `src/i18n/content.en.mjs`, `content.de.mjs` (klíčem je český slug) |
| Slugy a URL | `src/i18n/index.mjs` (`SLUGS`) |

- Interní odkazy se v textech píší **česky** (`<a href="/cenik/">`), do cílového jazyka je při generování přepíše `localizeLinks()`.
- Build **selže**, když v překladu něco chybí, ztratí se `{placeholder}` nebo odkaz. `npm run check` navíc hlídá zbytky češtiny
  v EN/DE stránkách a že každá částka v textu odpovídá ceníku.
- Měna: v češtině `Kč`, v EN/DE `CZK` (`1,050 CZK` / `1.050 CZK`).

## Doména (důležité pro SEO)

Canonical, `hreflang`, `og:url`, absolutní URL ve schema a `sitemap.xml` se vytvoří až ve chvíli, kdy je známá doména:

```bash
SITE_URL=https://www.vase-domena.cz npm run build
```

nebo vyplňte `url` v `src/data.mjs`. Bez domény se tyto věci záměrně přeskakují (a stará `sitemap.xml` se maže).

## Kde co upravit

| Co | Soubor |
|---|---|
| Název, adresa, telefon, **IČO**, **otevírací doba**, sítě, recenze, tým, galerie | `src/data.mjs` → `site` |
| **Ceník** (tabulky, karty i „od … Kč“ berou ceny odsud) | `src/data.mjs` → `priceGroups` |
| Texty stránek služeb (česky) | `src/content.mjs` → `servicePagesBase` |
| Úvodní stránka, rozcestníky, ceník, kontakt (šablony) | `src/pages.mjs` |
| Hlavička, patička, přepínač jazyků, schema.org, komponenty | `src/layout.mjs` |
| Vzhled | `css/style.css` (barvy jsou na začátku v `:root`) |

> Částky napsané přímo v textech (FAQ, popisky) se píšou ručně – po změně ceníku je `npm run check` upozorní, pokud nesedí.

### Změna ceny
Upravte `priceGroups` v `src/data.mjs`, pak `npm run build && npm run check`. Pokud se cena objevuje i v textu služby
(FAQ, popisek), check ji ukáže – opravte ji ve všech třech jazycích.

### Nová služba / stránka
1. Přidejte položky do `priceGroups` (`src/data.mjs`) a jejich názvy do `prices.en.mjs` a `prices.de.mjs`.
2. Přidejte objekt do `servicePagesBase` (`src/content.mjs`) a překlady do `content.en.mjs` / `content.de.mjs`.
3. Přidejte slug do `SLUGS` v `src/i18n/index.mjs` (EN a DE).
4. `npm run build && npm run check`. Stránka se sama objeví v menu, patičce, ceníku a sitemapě.

### Nový jazyk
Zkopírujte `ui.en.mjs`, `prices.en.mjs`, `content.en.mjs`, přeložte, zaregistrujte jazyk v `src/i18n/index.mjs`
(`LANGS`, `LANG_META`, `SLUGS`, slovníky) a přidejte vlajku do `FLAGS` v `src/layout.mjs`.

### Fotky místo ilustrací
Ilustrace služeb jsou v `images/art/*.svg`. Až budou skutečné fotky, nahraďte je takto: nahrajte `.webp` do `images/`,
v `src/content.mjs` přidejte fotku do `photos` a u dané služby nastavte `photo: 'klíč'` (viz `manikura`, `panske-strihy`).
Karty ve výpisech dál používají ilustrace; hero a úvod stránky služby použije fotku.
Galerie (`/galerie/`) se zapne sama, jakmile naplníte `site.gallery`.

## Stránky služeb: SEO + CRO vrstva (`src/service-extras.mjs`)

Každá ze 9 služeb má vlastní strukturu, ne jen jiné klíčové slovo na stejné šabloně:

| Služba | Signature blok (z dat v ceníku) | Pořadí sekcí |
|---|---|---|
| Manikúra | porovnání Klasická / Gellak / CND Shellac vč. hand spa a odstranění laku | vlastní |
| Gelové a akrylové nehty | průvodce tvary nehtů (SVG) + porovnání gel / akryl / Gel X | vlastní |
| Pedikúra | „Co chcete od pedikúry?“ → varianta + cena + objednání | výchozí |
| Prodlužování řas | hustota 1:1 → Volume → Mega (SVG) | výchozí |
| Obočí a kosmetika | porovnání úprava / barvení / péče o obličej | výchozí |
| Head Spa | pětikrokový rituál + cenová karta | bez ceníkové tabulky/variant |
| Pánský střih | matice „co je v ceně“ generovaná z ceníku + cena při stříhání každé 2 týdny | bez ceníkové tabulky |
| Úprava vousů | tvar obličeje → tvar vousů (SVG) | výchozí |
| Pánská kosmetika | tipy počítané z ceníku (rozdíly cen) | vlastní |

Co je na všech stránkách služeb:
- **Ilustrace služby v hero** (`images/art/*.svg`) a miniatury v kombinacích.
- **CTA všude**: hero, každá varianta, sloupce porovnání, 2× CTA pás (jiný text na každé stránce), kombinace, FAQ, lokalita, závěrečné CTA, hlavička a patička.
- **Zpráva ve WhatsApp/SMS se předvyplní podle služby i varianty** (`setOrderMessage()` v `data.mjs`, texty v `i18n/extras.<jazyk>.mjs`).
- **Sticky CTA** jen na mobilu a tabletu: pevná spodní lišta (Volat · SMS · Objednat + „od … Kč“). Na desktopu žádná plovoucí lišta není – tam je objednávací menu v hlavičce.
- **Měření**: každé kliknutí na WhatsApp / telefon / SMS pošle do `dataLayer` událost `cta_click` s `cta_placement` (hero, option, table, band, combo, sticky, final …; `js/cta.js`), `cta_channel`, `page_route`, `lang`.
- **Kombinace** („střih + vousy“, „manikúra + pedikúra“ …) s cenou každé služby z ceníku – bez součtů a bez vymyšlených slev.
- Odkazy „Na této stránce“ (kotvy) pod hlavičkou.

### Barvy: jen dvě pozadí
Celý web má přesně dvě barvy pozadí: **černou** (`--black`) a **krémovou** (`--cream`). `--paper` a `--cream-deep` jsou jen aliasy na krémovou.
Pravidlo: černá = hlavička, hero, CTA pásy, závěrečné CTA a patička (na úvodní stránce i „Proč ICONO“); veškerý obsah je krémový.
Dvě krémové sekce za sebou se oddělují tenkou linkou, karty a tabulky jsou jen obrysové (bez další výplně). Ilustrace v `images/art`
(`npm run art`) jsou vykreslené na stejné černé a krémové.

### Ceny na stránkách služeb
Na webu se tiskne jen doslovná položka ceníku (nebo „od …“ tak, jak je v ceníku). Žádné součty, rozdíly ani dopočítané slevy –
kombinace ukazují cenu každé služby zvlášť; sleva „−100 Kč každé 2 týdny“ je citovaná z ceníku a nikde se neaplikuje.
`npm run check` hlídá, že každá částka v textu je v ceníku.

### Důkazy, které nelze vymyslet
Šablona umí zobrazit skutečné realizace a recenze **u konkrétní služby**, jakmile je majitel dodá:
`site.gallery[].services = ['manikura-praha-2']` a `site.reviews[].service = 'manikura-praha-2'` (viz `src/data.mjs`).
Zatím je prázdno, takže se nezobrazuje nic. Další vhodné podklady (nevymýšlet): fotky práce, reálné recenze, délka jednotlivých služeb,
dotazy, které zákazníci opravdu kladou.

### Nová služba nebo úprava
1. Položky do `priceGroups` + stránku do `servicePages` (viz výše).
2. V `src/service-extras.mjs` přidejte záznam do `CFG` (pořadí sekcí, signature blok, kombinace) a texty do
   `i18n/extras.cs|en|de.mjs` (stejná struktura; build selže, pokud něco chybí). Částky se do textů nepíšou ručně – jsou `{zástupné}`.
3. `npm run build && npm run check`. Kontrola hlídá: ilustraci v hero, signature blok, ≥ 2 CTA pásy, předvyplněné zprávy,
   unikátní kostru stránky a podíl sdíleného textu mezi službami (limit 50 %).

## Nasazení na Vercel
Web je statický, na Vercel se nahrává jen hotový výstup (bez `src/`, `scripts/`, `images/source/` a `_legacy-webild-bundle/`).
Konfigurace je ve `vercel.json` (adresáře končí lomítkem, bezpečnostní hlavičky, **`X-Robots-Tag: noindex`** – dokud web běží jen na
adrese `*.vercel.app`, aby se neindexovala duplicita; až bude vlastní doména, hlavičku odstraňte a postavte web s `SITE_URL`).

```bash
npm run build
D=$(mktemp -d)/icono-studio && mkdir -p "$D"
rsync -a --exclude _legacy-webild-bundle --exclude src --exclude scripts --exclude images/source \
  --exclude README.md --exclude package.json --exclude .git ./ "$D/"
cd "$D" && npx vercel@latest link --yes --project icono-studio && npx vercel@latest deploy --prod --yes
```

## Co je záměrně prázdné
Nevymýšlíme: recenze, tým, galerie, Instagram/Facebook, odkaz na Google profil. Pole jsou v `site` (`null` / `[]`) a šablony je
vynechají. Jakmile je doplníte, objeví se na webu i ve schema.org.

## SEO v kostce
- Každá služba má vlastní stránku v každém jazyce (800+ slov, unikátní title/description, FAQ, ceník, související služby).
- `LocalBusiness` schema s IČO, souřadnicemi, otevírací dobou a cenovým rozpětím; `Service` + `OfferCatalog` na stránkách služeb; `BreadcrumbList`.
- `FAQPage` schema se záměrně nepřidává (Google FAQ rich results od 7. 5. 2026 nezobrazuje).
- Po nasazení: založit/ověřit Google Business Profile se stejným NAP (název, adresa, telefon), poslat `sitemap.xml` do Search Console a Bing Webmaster.
