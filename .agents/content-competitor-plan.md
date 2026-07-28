# Esküvői Újság — Content Strategy, Programmatic SEO, Competitor Pages

*Last updated: 2026-07-08*

## Előfeltétel, ami blokkolja a teljes megvalósítást

A `competitors`/`content-strategy`/`programmatic-seo` skillek mind **külön aloldalak** létrehozását javasolják (pl. `/alternatives/[versenytárs]`, `/blog/...`) — a termék jelenleg **egyetlen, egyoldalas HTML-alkalmazás**, nincs routing/aloldal-infrastruktúra. Ez nem akadálya a TARTALOM megtervezésének, de a TÉNYLEGES publikálásnak igen — ld. a `directory-submissions-plan.md`-ben és a korábbi audit `site-architecture` pontjában is jelzett "később" besorolást.

**Kettő közül választhattok, amikor eljön az ideje:**
1. A jelenlegi single-page HTML-t egy valódi, több-oldalas site váltja fel (pl. egy statikus site generátorral), ÉS akkor a lenti tartalom-tervek élesíthetők aloldalként.
2. Vagy a tartalom BLOG-formában él egy külön platformon (pl. Substack, WordPress), ami visszalinkel a fő alkalmazásra — ez gyorsabb induláshoz, de kevésbé egységes márka-élmény.

## Versenytárs-oldal — ami MOST hiányzik: a versenytárs NEVE

A `product-marketing.md`-ben rögzítettük, hogy van egy konkrét, megnevezett magyar versenytárs, ugyanolyan árazással, aki e-mailben szállítja a kész terméket (nincs élő szerkesztő). **Ez a legerősebb versenytárs-differenciáló sztori, amit a `competitors` skill formátumaival (Format 3: "Ti vs [Versenytárs]") ki lehetne aknázni** — DE a skill elve szerint (**"Honesty builds trust... readers will verify claims"**) egy ilyen oldalt csak a versenytárs PONTOS nevével és ellenőrzött, valós adataival szabad megírni, különben jogi/hitelességi kockázat. **Én itt nem nevezek meg vagy találok ki senkit** — ha megadjátok a versenytárs nevét és nyilvános árazását, azonnal meg tudom írni a teljes "Ti vs [Név]" oldal-tervet a skill sablonja szerint.

**Addig is, itt a kész VÁZ**, amit csak ki kell tölteni:

```
TL;DR: [Mi] azonnal, élőben megmutatjuk a kész terméket, mielőtt fizetnél.
[Versenytárs név] e-mailben küldi ki, előzetes betekintés nélkül.

Kinek jó [Versenytárs]? Akinek nem fontos a fizetés előtti előnézet,
és szívesen bízza valaki másra a tördelést.

Kinek jó nálunk? Akik szeretnék MAGUK látni és alakítani az eredményt,
és nem szeretnének várni egy e-mailre.
```

## Content-strategy: mit érdemes majd megírni (blog/aloldal-tartalom terv)

Ezek a témák illeszkednének a célközönség tényleges kereséseihez (kapcsolódás a `programmatic-seo`-hoz: mindegyik saját aloldal lehetne, ha lesz hozzá infrastruktúra):

| Téma | Kulcsszó-irány | Miért |
|---|---|---|
| "Esküvői programfüzet ötletek" | esküvői programfüzet, lagzi programfüzet | Közvetlenül a fő termékhez kapcsolódik, valós keresési szándék |
| "Mit írjunk a save the date-be?" | save the date szöveg, save the date ötletek | Alacsony konkurencia, közvetlen termék-kapcsolat |
| "Esküvői meghívó minták stílusonként" | esküvői meghívó minta, esküvői meghívó ötletek | A meglévő 4 stílus-csomag (Klasszikus/Romantikus/Modern/Magazinos) bemutatására épülhetne |
| "[Versenytárs] alternatíva" | [versenytárs neve] alternatíva | Csak akkor, ha megvan a név, és etikusan, pontosan megírható |

## Amikor eljön az ideje: a lépések sorrendje
1. Döntés a site-architektúráról (statikus site generátor vs. külön blog-platform).
2. A versenytárs nevének/adatainak megadása → "Ti vs [Név]" oldal megírása.
3. A fenti content-strategy témák közül 2-3 megírása, a `copywriting` skill elveivel.
4. Ekkor (és csak ekkor) érdemes visszatérni a `directory-submissions-plan.md`-ben félretett Tier 1-11 SaaS-directory apparátusra is átgondolni, hogy van-e már hova mutatnia a backlinkeknek.
