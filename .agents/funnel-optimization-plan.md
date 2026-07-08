# Esküvői Újság — Funnel Optimization (CRO + A/B teszt + Onboarding + Signup)

*Last updated: 2026-07-08*
*Kontextus: `.agents/product-marketing.md`. 0 fizetős rendelés, 2 kitöltő — NINCS még valós konverziós adat. Ez a dokumentum ezért STRUKTURÁLIS audit + prioritált backlog, nem A/B teszt-eredmény (azt csak akkor lehet, ha lesz elég forgalom, ld. `analytics-tracking-plan.md`).*

## Strukturális CRO-audit a jelenlegi tölcséren

### 1. Típus-választó képernyő (`#typeSelect`) — ez az, amit MINDEN látogató elsőként lát

**Jelenlegi állapot:** "Mit szeretnél elkészíteni?" + 3 kártya (Újság/Meghívó/Save the Date) + "bármikor válthatsz" alcím.

**Hiányzik a legerősebb differenciáló üzenet.** A `product-marketing.md`-ben rögzített legkonkrétabb ok, amiért minket válasszanak a versenytárs helyett ("nálunk azonnal látod, nem kell e-mailre várnod"), **sehol nem jelenik meg** ezen az oldalon — pedig ez a legmagasabb forgalmú pont. → **Quick win, azonnal implementálom** (ld. lent, `copywriting` feladat).

### 2. Bemutató-képernyő (`#introShowcase`, csak az Újság útvonalon)

**Jelenlegi headline:** "Egy vicces, személyes újság — a nagy napotokra" — jó hangvétel, de generikus, nincs benne konkrétum/szám. A `intro-sub` viszont MÁR tartalmazza a "percek alatt kész" ígéretet — ezt érdemes lenne magába a headline-ba emelni, erősebb hatásért.

**Bizalmi jelzés elhelyezése:** a vélemény-karusszel a CTA ELŐTT, közvetlenül van — ez CRO-szempontból HELYES elhelyezés (a keretrendszer szerint "közel a CTA-hoz és az állítások után"). ✅ Ezen nincs mit javítani.

### 3. CTA-szövegek

"Elkészítem a sajátomat! →" — aktív, személyes hangvétel, jó. "Kihagyom, ugrás a kitöltésre" — rendben, alacsony súrlódású kilépési opció.

### 4. Kötelező mezők (signup/friction szempontból)

Mindhárom terméknél 3-4 kötelező mező (nevek, dátum, helyszín + Újságnál a "lap címe") — ez már eleve alacsony súrlódású, nincs azonnali teendő.

### 5. Onboarding

A varázsló saját magában onboarding-folyamat, ÉS van hozzá beépített tutorial (`startWizardTutorial`/`startEditorTutorial`) — ez már megvan, jó alap. Amint lesz valós `wizard_started`→`generate_succeeded` adat (ld. analytics), ELLENŐRIZNI érdemes, hol esnek ki ténylegesen (ez adja meg, hogy a tutorial elég-e, vagy egy lépés összezavarja az embereket).

## Quick Wins (most implementálom, ld. a `copywriting` feladatot)
1. Erős differenciáló sor a típus-választó képernyőre.
2. Az Újság-headline konkrétabbá tétele.

## High-Impact Changes (üzleti döntést vagy valós adatot igényel, később)
- A "Kész" modal szövege/sorrendje — csak akkor érdemes hozzányúlni, ha lesz pár valós `done_modal_opened`→`order_submitted` adat, ami megmutatja, hol esnek ki.
- Garancia/bizalmi elem hozzáadása a fizetős lépéshez (ld. `product-marketing.md` — jelenleg nincs garancia-ígéret).

## Teszt-ötletek (csak akkor futtatható, ha van elég forgalom — ld. alább a küszöböt)

| Teszt | Hipotézis |
|---|---|
| Típus-választó headline A/B | A differenciáló üzenet (láthatóság fizetés előtt) MAGASABB `wizard_started` arányt hoz, mint a jelenlegi semleges szöveg. |
| "Kész" modal sorrendje | Ha a digitális opció kerül előre a nyomtatott elé (vagy fordítva), változik-e az `order_submitted` arány. |
| CTA-szöveg variáns | "Elkészítem a sajátomat!" vs. "Próbáld ki ingyen, fizetés nélkül" — melyik hoz több `product_type_selected`-et. |

**Mikor érdemes ezeket ténylegesen elindítani:** a `ab-testing` skill statisztikai szignifikanciához minimum forgalmat kíván — jelenlegi (2 fő) volumennel EGYETLEN teszt sem adna értékelhető eredményt. Ökölszabály: várjatok, amíg heti szinten legalább **50-100 `wizard_started` esemény** összegyűlik, mielőtt bármelyik fenti tesztet elindítanátok — előtte a kis mintaszám miatt a "eredmény" gyakorlatilag zaj lenne.

## Signup-specifikus megjegyzés
A korai e-mail-mező (`f_earlyEmail`) opcionális, nem kötelező — ez helyes döntés volt, mert egy vadonatúj, bizalom-építés alatt álló terméknél a kötelező e-mail-bekérés a kitöltés elején plusz súrlódást jelentene, mielőtt a látogató egyáltalán látta volna az értéket.
