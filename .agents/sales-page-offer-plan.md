# Esküvői Újság — Sales Page & Offer Optimization

*Last updated: 2026-07-12*
*Kontextus: `product-marketing.md`, `offers-pricing-plan.md`, `funnel-optimization-plan.md`, `copywriting-notes.md`. Ez a dokumentum nem ismétli meg ezek tartalmát, hanem EGY KOHERENS "sales system"-be rendezi őket, és kitölti azt, ami eddig hiányzott: egy tényleges FAQ-blokk (megírva, ÉS élesítve az oldalon), és egy explicit objection-handling keretrendszer minden elemhez rendelt pszichológiai indoklással.*

**Fontos keret:** ennél a terméknél nincs KÜLÖN "sales page" egy külön "product" oldaltól — a típus-választó (`#typeSelect`) + a bemutató-lapozó (`#introShowcase`) EGYBEN a sales page ÉS a termék előnézete. Ez maga is egy erős konverziós elv (ld. lent, Endowment effect), nem hiányosság.

---

## 1. Value proposition & offer positioning — állapot

Már véglegesítve a `product-marketing.md`-ben. Rövid összefoglaló, hogy ez a dokumentum önmagában is érthető legyen:

- **Fő ígéret:** percek alatt elkészíthető, vicces/személyes esküvői kiadvány (Újság/Meghívó/Save the Date), amit a fizetés ELŐTT láthatsz és szerkeszthetsz.
- **Konkrét differenciáló ok (a legerősebb, amit használunk):** "nálunk azonnal látod, mielőtt fizetnél — a [névvel azonosítható] versenytárs e-mailben, vakon küldi ki a kész terméket."
- **Jelenlegi élő megfogalmazás a landing oldalon** (`type_highlight` kulcs): *"✦ Nem kell e-mailre várnod: itt azonnal látod és szerkesztheted a kész eredményt — mielőtt egy fillért is fizetnél."* — ez már live, jó helyen (a 3 kártya FÖLÖTT, tehát az első dolog, amit a látogató a döntés előtt lát).

---

## 2. Pricing strategy — állapot

Már részletesen kidolgozva az `offers-pricing-plan.md`-ben (Value Equation, charm vs. kerek árak tudatos döntése, willingness-to-pay kutatás terve). Itt csak az, ami a SALES PAGE szempontjából releváns:

**Jelenlegi árazás megjelenítése a "Kész" modalban** (nem a landing oldalon — ez tudatos: az ár csak AKKOR jelenik meg, amikor a vevő MÁR látja a kész, saját termékét — ez erősíti az Endowment effect-et, ld. lent).

---

## 3. Testimonials / social proof — állapot és FONTOS figyelmeztetés

A landing oldal review-karusszele (18 db, mindhárom terméktípusra) **jelenleg illusztratív minta-szöveg, NEM valós ügyfél-vélemény** — ezt a `product-marketing.md` Proof Points szekciója már rögzítette, és a Validációs folyamat (`business-operating-system.md` 2. szakasz, Stage 4) megadja, MIKOR érdemes ezeket valósra cserélni.

**Ide vonatkozó direct-response elv, amit már jól alkalmazunk:** a review-karusszel közvetlenül a végső CTA ELŐTT van elhelyezve (`funnel-optimization-plan.md` már megerősítette ezt CRO-szempontból helyesnek) — ez a klasszikus "social proof az objection-handling UTÁN, a döntés PILLANATA előtt" elhelyezés.

---

## 4. FAQ — ÚJ, most megírva ÉS élesítve az oldalon

*Ez volt a legkonkrétabb hiány: eddig NEM volt dedikált FAQ-blokk a landing oldalon, ami a fizetés/vásárlás körüli objekciókat kezelné, mielőtt a látogató belekezdene a varázslóba. Az alábbi 6 kérdés mindegyike VALÓS, ellenőrizhető tényre épül a kódból — nem találtam ki választ olyan kérdésre, amire nincs biztos válaszunk (ld. a nyomtatási határidő kezelése lent).*

| # | Kérdés | Válasz | Miért ez, és miért itt |
|---|---|---|---|
| 1 | Tényleg ingyenes a szerkesztő? | Igen — a teljes varázsló és szerkesztő ingyenes, vízjeles ("MINTA") előnézettel. Csak a vízjel nélküli digitális letöltés vagy a nyomtatott, kiszállított példány fizetős. | **Loss-aversion feloldása:** a leggyakoribb hallgatólagos félelem ("mibe fogok belesétálni?") azonnal, elsőként eloszlatva. |
| 2 | Mikor kell fizetnem? | Csak akkor, ha már látod és jóváhagytad a kész eredményt — a szerkesztésnek, próbálgatásnak nincs fizetési korlátja. | **Risk reversal a garancia HELYETT** (ld. lent) — amíg nincs formális garancia, ez a tényszerű "nem kockáztatsz semmit a fizetésig" üzenet ugyanazt a funkciót tölti be. |
| 3 | Fel tudom tölteni a saját fotóimat? | Igen — a generálás után, a szerkesztőben bármelyik `+` jelű mezőre kattintva tölthetsz fel és pozícionálhatsz fotókat, amennyit csak szeretnél. | **Feature-objection kezelése:** eloszlatja azt a feltételezést, hogy ez egy "üres sablon", amit egyedül, fotók nélkül kellene megcsinálni. |
| 4 | Mi van, ha nem vagyok jó szövegíró? | A legtöbb mezőnél van egy 💡 Tipp gomb, ami kész szövegjavaslatot ír be helyetted — ezt utána szabadon átírhatod, vagy hagyhatod úgy. | **Self-efficacy objection:** a "nem vagyok elég kreatív hozzá" a leggyakoribb ok, ami miatt valaki egyáltalán bele sem kezd — ez konkrét, ellenőrizhető válasz rá. |
| 5 | Angolul is elkészíthetjük? | Igen — a kezdőlap tetején váltható magyar/angol nyelv, és minden (a varázsló, a szerkesztő, a generált tartalom) mindkét nyelven elérhető. | Új funkció (ld. i18n munka) — érdemes explicit módon kimondani, mert nem magától értetődő egy magyar landing oldalon. |
| 6 | Mennyi idő alatt kapom meg a nyomtatott példányt? | ❓ **Ezt a választ SZÁNDÉKOSAN nem írtam meg konkrét napszámmal** — a kódban jelenleg egy `ORDER_PRINT_LEADTIME_DAYS` PLACEHOLDER-érték van (ld. `offers-pricing-plan.md`), amit még nem erősítettél meg. Amíg nincs valós szám, a FAQ-ban egy általános, igaz mondat szerepel: *"A digitális verzió azonnal elkészül; nyomtatott rendelésnél a rendelés rögzítésekor (24 órán belül) pontos, a te esküvőd dátumához igazított határidőt kapsz e-mailben."* — ez nem hazudik, de nem ígér konkrét napszámot, amit esetleg nem tudtok tartani. |

**Élesítve:** ez a 6 kérdés most már megjelenik a landing oldal bemutató-részén (`#introShowcase`), közvetlenül a vélemények UTÁN és a végső CTA ELŐTT — pontosan a klasszikus direct-response sorrend szerint: érdeklődés → bizonyíték (review-k) → objekció-kezelés (FAQ) → cselekvésre hívás (CTA).

---

## 5. Guarantee — MÉG MINDIG NYITOTT, nem implementáltam

Az `offers-pricing-plan.md` már jelezte: a garancia az offer-anatómia egy kötelező eleme, és jelenleg NINCS. **Ezen a promptra sem találtam ki egyet a nevedben** — ez egy valódi üzleti ígéret lenne, amit be is kell tudni tartani.

**Amit ehelyett most csinálunk (ld. FAQ #2 fent):** egy tényszerű, garancia NÉLKÜLI, de mégis kockázat-csökkentő üzenet ("csak akkor fizetsz, ha már látod és jóváhagytad") — ez jó ideiglenes helyettesítő, de NEM egyenértékű egy explicit garanciával.

**Ha szeretnéd formálisan is bevezetni:** a korábban felvetett, alacsony kockázatú opció újra itt van, döntésre várva: *"Nem tetszik az eredmény? Egyszer ingyen újratervezzük veletek."* Ha ezt megerősíted, a FAQ #2 sora és a "Kész" modal is frissíthető rá.

---

## 6. Call-to-action — audit

| CTA | Helyzet | Pszichológiai elv |
|---|---|---|
| "Elkészítem a sajátomat! →" (`introStartBtn`) | Fő CTA, közvetlenül a FAQ (most hozzáadva) után | **Aktív, birtokló nyelvezet** ("elkészítem", nem "kezdés" vagy "tovább") — a vevő már MOST magáénak érzi a folyamatot. |
| "Kihagyom, ugrás a kitöltésre" (`introSkipBtn`) | Másodlagos, alacsony súrlódású kiugrási pont | Helyes UX: nem kényszeríti végig a bemutatót, aki már döntött. |
| "✦ Tovább a szerkesztőbe — Generálás ✦" (varázsló alján) | A varázsló kitöltése után | **Goal-gradient**: a "✦" díszítés és a "Tovább a szerkesztőbe" megfogalmazás egyértelművé teszi, hogy ez még NEM a végső fizetési lépés — csökkenti a kattintás előtti súrlódást. |
| "✅ Kész" (szerkesztő eszköztár) | A szerkesztőben bármikor elérhető | Nem "Fizetés" vagy "Vásárlás" — a "Kész" szó a MUNKA lezárását jelzi, nem egy pénzügyi commitment-et, ami csökkenti a kattintás előtti hezitálást, miközben ide van beépítve a tényleges fizetési/rendelési lehetőség is. |

**Nincs mit változtatni ezen egyelőre** — mind a négy CTA már tudatos, jó döntés mögött van.

---

## 7. Objection-handling framework — kibővítve

A `product-marketing.md` Objections táblázata (3 sor) itt egy teljesebb keretté bővül, minden objekcióhoz hozzárendelve, HOL kezeljük:

| Objekció | Hol kezeljük | Válasz |
|---|---|---|
| "Túl 'vicces'/laza lesz, nem elég elegáns?" | Stílus-csomag váltó a szerkesztőben (Klasszikus/Romantikus/Modern/Magazinos) | Már megoldva termékben, nem kell rá landing-oldali szöveg |
| "Nem bízom a nyomtatás/kiszállítás minőségében" | ❓ Nyitott — nincs még garancia/minőségi ígéret, ld. 5. szakasz | Amíg nincs valós tapasztalat, ne ígérjünk túl sokat |
| "Túl bonyolultnak tűnik ennyi rovattal" | Élő előnézet + "elfér-e" jelző a varázslóban | Már megoldva termékben |
| "Mibe fogok belesétálni, mennyibe kerül ez?" | **FAQ #1-2 (most hozzáadva)** | "Ingyenes a szerkesztő, csak a végén fizetsz, ha tetszik" |
| "Egyedül nem fogom tudni megírni a szövegeket" | **FAQ #4 (most hozzáadva)** | 💡 Tipp gombok mindenhol |
| "Mikor kapom meg a nyomtatott példányt, ha sürgős?" | **FAQ #6 (most hozzáadva, konkrét szám nélkül)** | Lásd 5. szakasz — ez a leggyengébb láncszem, amíg nincs megerősített átfutási idő |

---

## 8. Psychology cheat-sheet — minden elemhez

| Elem | Elv | Miért működik itt |
|---|---|---|
| "Nem kell e-mailre várnod..." highlight | **Kontraszt-elv / konkrét versenytárs-differenciálás** | Nem elvont "mi vagyunk a legjobbak", hanem egy konkrét, hihető, ellenőrizhető különbség egy valós alternatívával szemben. |
| Review-karusszel a CTA előtt | **Social proof + döntési pillanat közelsége** | A bizonyíték közvetlenül a döntés előtt van, nem elveszve az oldal tetején. |
| FAQ a review-k után, CTA előtt | **Objection-handling utolsó akadály-elhárítás** | A maradék kételyeket PONT azelőtt oszlatja el, hogy a látogató döntene — ha korábban lenne, elveszne a figyelem; ha később, már túl késő (a látogató már elpattant). |
| "Csak akkor fizetsz, ha már látod" (FAQ #2) | **Risk reversal garancia nélkül** | Amíg nincs formális garancia, ez a tényszerű, igaz állítás ugyanazt a szorongás-csökkentő funkciót tölti be. |
| Árazás csak a "Kész" modalban jelenik meg | **Endowment effect** | A vevő addigra már ÉRZELMILEG birtokolja a saját, elkészített termékét — ekkor sokkal kevésbé árérzékeny, mint egy elvont landing-oldali ár-táblázat esetén lenne. |
| 💡 Tipp gombok | **Self-efficacy támogatás + IKEA effect** | Csökkenti az "üres lap szindrómát", DE a végeredményt mégis sajátnak érzi, mert szabadon átírhatja. |
