# Esküvői Újság — Digital Product Business Operating System

*Last updated: 2026-07-12*
*Ez a dokumentum a "digital product entrepreneur operating system" promptra adott válasz — de NEM ismétli meg, amit a `.agents/` mappa többi terve már részletesen lefed. Ehelyett: (1) egy oldalas áttekintést ad, ami mindenhez linkel, (2) kitölti azt a 4 valódi hiányt, amit a meglévő tervek még nem fedtek le explicit módon: alapító/erőforrás-profil, validációs folyamat, megtartás-stratégia (egyszeri vásárlású termékre értelmezve), analitikai dashboard, és egy hosszabb távú (3/6/12 hónapos) skálázási térkép.*

---

## 0. Az egész rendszer egy oldalon

| Réteg | Dokumentum | Státusz |
|---|---|---|
| Pozicionálás, célközönség, versenytárs | `product-marketing.md` | ✅ Kész, founderrel megerősítve |
| Árazás-pszichológia | `offers-pricing-plan.md` | ✅ Kész — nyitott kérdés: willingness-to-pay teszt |
| Tölcsér-audit (CRO/onboarding) | `funnel-optimization-plan.md` | ✅ Strukturális audit kész, A/B tesztek forgalomra várnak |
| Mérés | `analytics-tracking-plan.md` | ✅ Élesben fut (GA4 + Meta Pixel) |
| Forgalom — social | `social-content-plan.md` | ✅ Kész terv |
| Forgalom — fizetett | `ads-plan.md` | ✅ Kész terv, korábbi TikTok-teszt diagnosztizálva |
| Forgalom — launch | `launch-plan.md` | ✅ Kész terv |
| Forgalom — közösség | `community-marketing-plan.md` | ✅ Kész terv |
| Forgalom — PR | `pr-plan.md` | ✅ Kész terv |
| Forgalom — katalógusok | `directory-submissions-plan.md` | ✅ Kész terv |
| Szöveg | `copywriting-notes.md` | ✅ 2 quick win elvégezve |
| Fizetési pillanat | `paywall-audit.md` | ✅ Audit kész |
| Technikai SEO / AI-láthatóság | `technical-seo-notes.md` | ✅ Implementálva |
| Tartalom/versenytárs | `content-competitor-plan.md` | ✅ Váz kész, versenytárs nevére vár |
| E-mail | `email-sequences.md` | ✅ 3 kézzel küldhető e-mail kész |
| Egyéb növekedés (referral, co-marketing) | `growth-extras-plan.md` | ✅ Kész terv |
| Szintézis / prioritált 4-6 hetes idővonal | `marketing-master-plan.md` | ✅ Kész |
| **Alapító/erőforrás-profil** | *ez a dokumentum, 1. szakasz* | 🆕 Új |
| **Validációs folyamat** | *ez a dokumentum, 2. szakasz* | 🆕 Új |
| **Megtartás/hűség (egyszeri vásárlásra értelmezve)** | *ez a dokumentum, 3. szakasz* | 🆕 Új |
| **Analitikai dashboard** | *ez a dokumentum, 4. szakasz* | 🆕 Új |
| **Skálázási térkép (3/6/12 hó)** | *ez a dokumentum, 5. szakasz* | 🆕 Új |

**Az egy mondatos helyzetkép:** most publikussá vált termék, **0 fizetős rendelés**, 2 wizard-kitöltő, kicsi (30-50e Ft/hó) hirdetési keret, valós (nem kitalált) differenciáló üzenet ("azonnal látod, mielőtt fizetnél — a versenytárs e-mailben küldi ki"), és egy most frissen kibővült termékvonal (Újság + Meghívó + Save the Date, mindhárom teljesen kétnyelvű HU/EN).

---

## 1. Alapító- és erőforrás-profil

*A prompt "elemezd a képességeimet, tudásomat, érdeklődésemet, közönségemet, versenytársaimat, elérhető erőforrásaimat és hosszú távú céljaimat" kérését csak részben tudom kitölteni valós adatból — amit nem tudok, azt ❓-lel jelölöm, nem találom ki.*

| Terület | Amit tudunk | Forrás |
|---|---|---|
| Közönség | Magyar, önkiszolgáló, esküvőre készülő párok (elsősorban a menyasszony a domináns kitöltő) | `product-marketing.md` |
| Versenytárs | Egy megnevezett, azonos árazású magyar szolgáltató, e-mailes ("fekete doboz") kiszállítási folyamattal | `product-marketing.md` |
| Erőforrás — fejlesztés | A termék maga (ez a kódbázis) AI-asszisztált fejlesztéssel épül/bővül — ez gyors iterációt tesz lehetővé (pl. a teljes 3-in-1 bővítés és a kétnyelvűsítés is egy munkameneten belül elkészült) | Munkamenet-történet |
| Erőforrás — hirdetési keret | Kicsi teszt-keret: 30-50 ezer Ft/hó | Korábbi megerősítés |
| Erőforrás — idő | Közepes ráfordítás (heti 3-5 óra) social/marketing tevékenységre | Korábbi megerősítés |
| Erőforrás — PR | Van kapacitás egy komolyabb, több hétig tartó médiamegkeresési körre | Korábbi megerősítés |
| Korábbi tapasztalat | 1 db TikTok "hogyan készül" videó-hirdetés, kb. 20e Ft-ból, 20e megtekintés, alacsony átkattintás a weboldalra | Korábbi megerősítés, `ads-plan.md`-ben diagnosztizálva |
| Készségek/érdeklődés | ❓ *Nincs rögzítve — ha szeretnéd, hogy a tartalom-stratégia (pl. mely social-formátumok, mely témák) jobban illeszkedjen a saját erősségeidhez/érdeklődésedhez (pl. szeretsz-e kamera előtt lenni, van-e design/fotó háttered stb.), ezt érdemes lenne külön megosztani.* |
| Hosszú távú cél | Jelenleg: **ismertség növelése** (mert 0 eladás volt) — a `product-marketing.md` Goals szekciója szerint ez az elsődleges, nem egy konkrét bevételi/darabszám-cél | `product-marketing.md` |

**Mit jelent ez gyakorlatban:** az "operating system" minden eleme (validáció, pricing, marketing) ennek a valós helyzetnek (korai szakasz, kis erőforrás, gyors fejlesztési ciklus, még nincs bevételi adat) van alárendelve — NEM egy feltételezett, érett, tőkeerős vállalkozásnak.

---

## 2. Validációs folyamat

*Ez az a rész, amit a meglévő tervek EMLÍTENEK (pl. "amint lesz 10-15 kitöltő..."), de eddig nem volt egy összefüggő, lépcsőzetes FOLYAMATTÁ összerakva. Ez a hiányzó darab.*

A validáció itt nem egyetlen esemény, hanem 4 egymásra épülő lépcső — mindegyiknek van egy konkrét, mérhető BELÉPÉSI küszöbe (nem naptári dátum), és egy konkrét, elvégzendő akciója.

### Stage 0 — Alapok (✅ kész)
- Analitika él (GA4 + Meta Pixel), a teljes tölcsér mérhető.
- A termék publikus, mindhárom terméktípus (Újság/Meghívó/Save the Date) és mindkét nyelv (HU/EN) elérhető.
- **Kilépési feltétel Stage 1-be:** ez már teljesült.

### Stage 1 — Első valós kitöltői visszajelzés (küszöb: 10-15 `generate_succeeded` esemény)
- **Akció:** a `product-marketing.md`-ben rögzített 4 kérdés kiküldése (mi volt a kétséged kezdés előtt / mi győzött meg, hogy végigcsináld / mennyit fizetnél érte / ajánlanád-e) — ld. `marketing-master-plan.md` "Customer research" szakasza.
- **Mit dönt el:** a jelenleg feltételezett Objections/Anti-persona (`product-marketing.md`) VALÓS-e, vagy máshol van a súrlódás.
- **Kilépési feltétel Stage 2-be:** legalább 5-8 kitöltött válasz.

### Stage 2 — Árazás-validáció (küszöb: Stage 1 lezárva, VAGY az első fizető vásárló megjelenik)
- **Akció:** Van Westendorp 4 kérdéses ár-teszt (ld. `offers-pricing-plan.md`) — ha van már fizető vásárló, KIEGÉSZÍTVE azzal, hogy mennyi volt számukra a ténylegesen kifizetett/elfogadott ár.
- **Mit dönt el:** marad-e az 5000 Ft/500 Ft-os árazás, vagy módosítani kell — ÉS eldönthető-e végre a garancia kérdése (ld. `offers-pricing-plan.md`, jelenleg nyitott).
- **Kilépési feltétel Stage 3-ba:** az árazás megerősítve VAGY tudatosan módosítva.

### Stage 3 — Forgalom-kísérletezés (küszöb: heti 50-100 `wizard_started` esemény)
- **Akció:** a `funnel-optimization-plan.md`-ben felsorolt A/B tesztek (típus-választó headline, "Kész" modal sorrend, CTA-variánsok) ténylegesen elindíthatók — ez alatt a küszöb alatt bármilyen "eredmény" statisztikai zaj lenne.
- **Mit dönt el:** melyik konkrét szövegváltoztatás hoz ténylegesen több konverziót, nem csak feltételezés alapján.

### Stage 4 — Social proof csere (küszöb: az első 5-10 VALÓS, önkéntes vélemény befolyik)
- **Akció:** a landing oldal jelenlegi 18 db illusztratív (nem valós) véleménye fokozatosan lecserélhető valós vélemények egy részhalmazára — ld. `product-marketing.md` Proof Points figyelmeztetése és `paywall-audit.md`.
- **Mit dönt el:** mikor válik etikailag/jogilag biztonságossá a jelenlegi minta-szöveg helyett valós social proofot mutatni.

**Miért fontos ez a lépcsőzetesség:** minden korábbi terv (pricing, CRO, A/B) explicit módon FIGYELMEZTETETT, hogy korai adat nélkül csak találgatás — ez a szakasz adja meg a SORRENDET és a KONKRÉT belépési feltételeket, hogy ne próbáljuk meg egyszerre az összeset, mielőtt bármelyikhez elég adat lenne.

---

## 3. Megtartás / hűség — újraértelmezve egyszeri vásárlású termékre

*A prompt "customer retention strategy"-t kér — de fontos tisztázni: ez a termék NEM előfizetéses, és egy pár jellemzően PONTOSAN EGYSZER házasodik. A hagyományos "retention" (visszatérő vásárlás, churn-ráta, LTV-növelés ismételt vásárlással) itt NEM értelmezhető úgy, mint egy SaaS-nál — ezt tudatosan nem próbálom mesterségesen ráerőltetni.*

**Amit a "retention" itt ténylegesen jelent:**

1. **Ajánlás/word-of-mouth, mint a valódi "megtartási" mutató.** Mivel a vásárló maga nem tér vissza, az egyetlen módja annak, hogy egy elégedett vásárlóból újabb bevétel legyen, ha AJÁNL valaki mást. Ez már részben tervezve van (`growth-extras-plan.md` — a 3. e-mail egyszerű, kód nélküli ajánlás-kérdéssel: "honnan hallottál rólunk?").
   - **Javasolt új mutató a dashboardra (ld. 4. szakasz):** "hányan jelezték, hogy ajánlás útján jöttek" — ez helyettesíti a hagyományos retention-rátát.

2. **Márka-affinitás / hosszú távú emlékezet.** A review-k ("a család még mindig emlegeti") azt mutatják, hogy a termék EMLÉKEZETES marad hónapokkal/évekkel az esküvő után is — ez nem közvetlen bevétel, de erős, hiteles ajánlási alapanyag (ld. `email-sequences.md` 3. e-mail, ami pont erre az érzelmi pillanatra épít).

3. **Adjacens alkalmak — NEM most, csak megjegyzésként.** Elméletileg ugyanez a motor (kártya/kiadvány-generátor, rovat-rendszer) más életesemény-alkalmakra is bővíthető lenne (pl. eljegyzés, évforduló, baba-váró) — ez visszahozhatná UGYANAZT a vásárlót egy MÁSIK alkalomra. **Ezt szándékosan nem javaslom most elkezdeni** — ez egy jövőbeli, teljesen új termékvonal lenne, nem "retention" a jelenlegi termékre, és jelenleg 0 eladással korai lenne erre energiát fordítani. Ha egyszer felmerül, ez legyen külön beszélgetés téma.

4. **Csapat/vőfély-kapcsolatok, mint kvázi-B2B "retention".** A `co-marketing`/`growth-extras-plan.md`-ben már szerepel: esküvőszervezők/helyszínek/vőfélyek, akik TÖBBSZÖR ajánlhatják a terméket különböző pároknak — ők az egyetlen szereplők, akiknél a hagyományos "ismételt kapcsolat" értelmezhető. Ez a legígéretesebb valódi "retention"-egyenérték ennél a terméknél.

**Összegzés egy mondatban:** a klasszikus retention-mutatók (churn, LTV, visszatérő vásárlás) helyett kövessük az **ajánlási rátát** és a **B2B-partner (vőfély/helyszín) ismételt ajánlásait** — ezek az egyetlen valódi "megtartás"-egyenértékek egy esküvőnként-egyszer terméknél.

---

## 4. Analitikai dashboard

*Az `analytics-tracking-plan.md` már definiálja az EGYES eseményeket — ez a szakasz azt adja hozzá, amit a prompt kifejezetten kér: egy DASHBOARD (mit nézzünk, milyen gyakran, milyen eszközzel).*

**Eszköz:** jelenleg nincs szükség fizetős BI-eszközre — a GA4 saját (ingyenes) Felfedezések (Explore) felülete elég erre a volumenre. Ha majd a forgalom nagyobb lesz, egy Looker Studio-dashboard (szintén ingyenes, GA4-re köthető) érdemes lehet, de MOST felesleges overhead lenne.

**Nézési gyakoriság:** heti egyszer, kb. 15 perc — ennél gyakrabban a jelenlegi kis volumen mellett nem hoz új infót, csak zajt.

**A dashboard 3 blokkja:**

### Blokk A — Tölcsér-egészség (heti nézet)
```
product_type_selected → wizard_started → generate_clicked → generate_succeeded → done_modal_opened → order_submitted
```
- **Amit keresünk:** a legnagyobb arányú kiesés HOL van két lépés között — ott kell keresni a következő fejlesztést, NEM találgatással (ld. `marketing-master-plan.md` már rögzítette ezt az elvet, itt csak konkretizáljuk a heti rutinná).
- Terméktípusonként (`product_type`) bontva is érdemes nézni — lehet, hogy az Újság/Meghívó/Save the Date más ponton esik ki.

### Blokk B — Forrás/csatorna (amint lesz UTM-adat — ld. `analytics-tracking-plan.md` nyitott pontja)
- Melyik csatorna (social, ads, PR, katalógus) hozza a `product_type_selected`-eket, és melyiknél a legjobb a `wizard_started`-ig jutási arány.
- **Előfeltétel:** UTM-paraméterek szisztematikus használata minden kimenő linknél — ez még nincs kész, ld. `analytics-tracking-plan.md` "Nincs még" szakasza.

### Blokk C — Üzleti mag (amint van adat)
- `order_submitted` darabszám + `value` összesen, digitális/nyomtatott megbontásban.
- `email_captured` darabszám (early + done_modal forrásbontásban) — ez a lead-generálás mérőszáma, akkor is fontos, ha még nincs sok rendelés.
- **Új, retention-helyettesítő mutató (ld. 3. szakasz):** hányan jelölték meg, hogy ajánlás útján érkeztek (ehhez a `email-sequences.md` 3. e-mailjének "honnan hallottál rólunk?" kérdésére adott válaszokat kézzel kell összesíteni egyelőre — nincs even automatizálva, ez rendben van ekkora volumennél).

**Riasztási küszöb, amit ÉRDEMES figyelni:** ha egy adott hétre 0 `product_type_selected` esemény jön össze, az azt jelzi, hogy valamelyik forgalmi csatorna (social poszt, hirdetés) leállt vagy nem fut — ez az egyetlen mutató, amit akkor is érdemes azonnal észrevenni, ha nincs időnk a heti teljes átnézésre.

---

## 5. Skálázási térkép (3 / 6 / 12 hónap)

*A `marketing-master-plan.md` már ad egy 4-6 hetes, konkrét cselekvési idővonalat — ez a szakasz azt egészíti ki egy HOSSZABB TÁVÚ nézettel. FONTOS: ezek MÉRFÖLDKŐ-alapú (nem naptári dátum-alapú) lépcsők — a tényleges időzítés attól függ, milyen gyorsan érnek be az egyes szakaszok, ld. 2. szakasz (Validációs folyamat).*

### "0-3 hónap" horizont — Alapítás → Első bevétel
- Cél: kilépni a 0 fizetős rendelés állapotból.
- Fókusz: Stage 1-2 validáció (2. szakasz) + a `marketing-master-plan.md` 1-2. heti akciói (directory, PR-lista, launch-pillanat, social ritmus).
- **Sikerkritérium a következő szakaszba lépéshez:** legalább 1-3 valós `order_submitted` esemény, ÉS a Stage 1 kvalitatív kutatás lezajlott.

### "3-6 hónap" horizont — Ismételhető csatorna keresése
- Cél: kideríteni, MELYIK forgalmi csatorna (social organikus, fizetett hirdetés, PR, katalógus, community) hozza a legjobb `wizard_started`→`order_submitted` arányt — ne mindegyikbe egyformán fektessünk tovább, hanem oda súlyozzunk át, ami MŰKÖDIK.
- Fókusz: Blokk B (Forrás/csatorna dashboard) aktiválása UTM-mel, Stage 3 A/B tesztek (ha a forgalom eléri a küszöböt).
- Új döntési pont: érdemes-e a hirdetési keretet (jelenleg 30-50e Ft/hó) növelni — csak akkor, ha van már legalább egy csatorna, ami bizonyítottan pozitív arányban hoz `order_submitted`-et.
- **Sikerkritérium:** azonosítva legalább 1 csatorna, ami megbízhatóan, ismételhetően hoz konverziót (nem véletlenszerűen).

### "6-12 hónap" horizont — Megerősítés és óvatos bővítés
- Cél: a bevált csatorna(k) megerősítése, ÉS csak ekkor érdemes elgondolkodni a `growth-extras-plan.md`-ben "később" kategóriába sorolt tételeken:
  - Automatizált e-mail-eszköz (ha heti 5-10+ e-mail-cím gyűlik össze).
  - Formális kód-alapú ajánló-rendszer (ha 10+ visszatérő ajánlás van).
  - Saját közösség építése (ha a meglévő FB-csoportokban való jelenlét már nem elég).
- **Ekkor, és csak ekkor** érdemes újra megnyitni a "Nem alkalmazott skillek" (`not-applicable-skills.md`) listáját — ha időközben változott az üzleti modell (pl. felmerül egy B2B/vőfély-viszonteladói csatorna, ami miatt a `sales-enablement`/`prospecting`/`cold-email` már releváns lenne).
- **Sikerkritérium:** stabil, hónapról hónapra megismételhető rendelés-volumen (a konkrét szám ehhez a pillanathoz még nem határozható meg — az 3-6 hónapos szakasz adatai fogják megadni a reális bázist).

**Amit ez a térkép TUDATOSAN nem tartalmaz:** konkrét bevételi célszámokat vagy naptári határidőket. Ennek oka egyszerű és a `product-marketing.md`/`marketing-master-plan.md` már többször rögzített elve: 0 eladással minden számszerű cél puszta találgatás lenne — a Validációs folyamat (2. szakasz) adja meg azt a valós adatalapot, amiből 3 hónap múlva már lehet (és kell is) konkrét, számszerű célokat kitűzni.
