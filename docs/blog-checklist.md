# Checklist pro psaní blogových článků (ICONO STUDIO)

Zdroje: Semrush – „How to Write an SEO Blog Post“ (13 kroků, přečteno celé), ověřená SEO/GEO doporučení (seo-geo, blog-geo),
vlastní rešerše SERPu (české dotazy jsou obsazené hlavně agregátory a slevovými portály, srovnávací obsah s cenami chybí).
Položky označené ⚙ hlídá `npm run check`.

## Před psaním
1. Jeden primární dotaz + příbuzné fráze/otázky. Primární: „shellac vs gellak“, „pánský střih Praha 2“, „pedikúra Footlogix“; lokální: nail salon Praha, barber Praha 2, barber I. P. Pavlova.
2. Záměr hledání ověřen na SERPu: porovnání / cena / „co zvolit“ → formát = srovnávací tabulka + rozhodovací seznam.
3. Non-commodity: každý článek má vlastní data (ceník, obsah služeb), kterou konkurence nemá. Žádné vymyšlené statistiky ani citace.

## Struktura a text
4. ⚙ Primární klíčové slovo v title (blízko začátku), H1, URL slugu, meta description a prvních ~100 slovech.
5. ⚙ Title ≤ 55 znaků, unikátní. ⚙ Meta description 120–160 znaků, hlavní sdělení v prvních ~105 znacích, končí výzvou.
6. ⚙ Krátká URL ve složce /blog/, HTTPS, klíčové slovo ve slugu.
7. ⚙ Box „Stručně“ (TL;DR) hned pod nadpisem: odpověď první.
8. ⚙ H2 jako otázky nebo jasná tvrzení; každá sekce začíná hlavním závěrem, pak detail. ⚙ Alespoň 7 H2 (včetně FAQ).
9. ⚙ Odstavce max. ~3 věty (kontrola: ≤ 75 slov). Jeden nápad na odstavec.
10. Klíčová slova přirozeně, synonyma (nail salon / nehtové studio, barber / barbershop), žádné nacpávání.
11. ⚙ Porovnávací tabulka s popisky sloupců (`<th scope>`), seznam kroků, FAQ.

## Důvěryhodnost (E-E-A-T) a čerstvost
12. ⚙ Viditelné datum vydání i aktualizace u nadpisu + „ceny platné k“.
13. ⚙ Blok „O autorovi“ na konci (zatím jen tým studia – viz TODO níže).
14. Statistiky jen z otevřených a ověřených zdrojů, s odkazem; jedna až dvě věty. Zdroje shrnuty v bloku „Zdroje“ ⚙ (externí odkazy `rel="noopener"`).
15. Zdravotní témata: jen opatrné formulace, upozornění „nenahrazuje lékaře“.

## Odkazy a média
16. ⚙ Min. 4 interní odkazy na služby/ceník s popisným textem odkazu, jen na aktuální (kanonická) URL s lomítkem.
17. ⚙ Obrázek se smysluplným `alt`, rozměry a lazy loading; jen skutečné fotky studia. Stránky zůstávají rychlé.
18. Odkaz na blog **jen v patičce** ⚙ (nikde jinde než uvnitř blogu).

## Technické a GEO
19. ⚙ Kanonická URL, `BlogPosting` JSON-LD (autor = organizace, publisher = @id podniku, datum, citace zdrojů), breadcrumbs.
20. ⚙ Zařazeno do sitemap.xml, v llms.txt; robots.txt povoluje Googlebot, Bingbot, OAI-SearchBot, Claude-SearchBot, PerplexityBot.
21. Samostatné odpovědi (self-contained) v každé sekci; entity pojmenovány stejně v celém textu (ICONO STUDIO, Bělehradská 643/77, I. P. Pavlova).
22. Po publikaci: přidat web do Search Console + Bing Webmaster, požádat o indexaci, po 4 týdnech zkontrolovat dotazy a pozice; články aktualizovat při změně ceníku.

## TODO od majitele (nelze doplnit bez nich)
- Jméno a krátké bio konkrétního barbera / nail technika jako autora (zvýší důvěryhodnost, pak lze použít `Person` schema).
- Krátký citát odborníka ze studia pro každý článek.
- Potvrdit tvrzení k Footlogixu a zdravotním skupinám (cukrovka) – web výrobce je nepotvrzuje, v článku proto nejsou.
