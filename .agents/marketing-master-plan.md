# Esküvői Újság — Marketing Master Plan (szintézis)

*Last updated: 2026-07-08*
*Ez a dokumentum a `.agents/` mappában lévő összes egyéb terv összefoglalója és sorrendbe rendezése — a `marketing-plan` skill "átfogó terv" kimenete, de a ténylegesen elkészült, egyedi dokumentumokra hivatkozva, nem azok megismétlésével.*

## Helyzet egy mondatban
Most publikussá vált termék, **0 fizetős rendelés**, 2 wizard-kitöltő, kicsi (30-50e Ft/hó) hirdetési keret, tudatos, valós (nem kitalált) differenciáló üzenet: *"azonnal látod, mielőtt fizetnél — a versenytárs e-mailben küldi ki."*

## Az elkészült tervek térképe

| Terület | Dokumentum | Egy mondatban |
|---|---|---|
| Alapozás | `product-marketing.md` | Pozicionálás, célközönség, a versenytárs-differenciálás rögzítve |
| Mérés | `analytics-tracking-plan.md` | GA4 + Meta szabvány-események élesítve a teljes tölcsérre |
| Forgalom — social | `social-content-plan.md` | IG/TikTok/FB, 5 pillér, 2 hetes konkrét terv |
| Forgalom — fizetett | `ads-plan.md` | A korábbi TikTok-teszt diagnózisa + Meta/TikTok terv |
| Forgalom — launch | `launch-plan.md` | A 3-in-1 bővítés koncentrált bejelentése |
| Forgalom — közösség | `community-marketing-plan.md` | Meglévő FB-csoportokban részvétel (saját közösség még korai) |
| Forgalom — PR | `pr-plan.md` | Valós magyar esküvői média-lista + pitch |
| Forgalom — katalógusok | `directory-submissions-plan.md` | Valós magyar esküvői szolgáltató-katalógusok |
| Tölcsér-audit | `funnel-optimization-plan.md` | Strukturális CRO/onboarding/signup audit, teszt-küszöb |
| Szöveg | `copywriting-notes.md` | 2 elvégzett quick win a landing oldalon |
| Fizetési pillanat | `paywall-audit.md` | A "Kész" modal már jól illeszkedik a keretrendszerhez |
| Ár/ajánlat | `offers-pricing-plan.md` | Valós (nem hamis) sürgetés hozzáadva, Van Westendorp javasolva |
| Technikai SEO | `technical-seo-notes.md` | H1-hierarchia, schema, robots.txt, llms.txt, pricing.md |
| Tartalom/versenytárs | `content-competitor-plan.md` | Kész váz, versenytárs NEVÉRE vár |
| E-mail | `email-sequences.md` | 3 kézzel kiküldhető e-mail |
| Egyéb növekedés | `growth-extras-plan.md` | Referral, co-marketing, popup (nem most), lead-magnet |

## Prioritált idővonal (a következő 4-6 hét)

**1. hét — alapok élesítése**
- GA4 valós forgalommal tesztelve ✅ (kész)
- azEskuvo.hu regisztráció (ingyenes, gyors) — `directory-submissions-plan.md`
- Az első 3 esküvői média-oldal kapcsolattartójának felkutatása — `pr-plan.md`

**2. hét — launch-pillanat**
- A "3 termék lett belőle" koncentrált bejelentés minden csatornán — `launch-plan.md`
- Meta + TikTok kreatívok elindítása a friss 30-50e Ft/hó kerettel — `ads-plan.md`

**3-4. hét — folyamatos jelenlét**
- Social tartalom a heti ritmus szerint — `social-content-plan.md`
- Az első pitch-ek kiküldése a médiumoknak — `pr-plan.md`
- Meglévő FB-csoportokban hasznos tag-szerep építése — `community-marketing-plan.md`

**Folyamatos, adat alapján**
- Amint van 10-15 kitöltő: Van Westendorp árazás-felmérés — `offers-pricing-plan.md`
- Amint van valós rendelés: a review-karusszel lecserélése valós véleményekre; a "Kész" modal social proof tesztje — `paywall-audit.md`, `product-marketing.md`
- Heti/kétheti szinten: GA4 tölcsér-számok átnézése (`wizard_started`→`generate_succeeded`→`done_modal_opened`→`order_submitted`) — ha egy adott lépésnél nagy a kiesés, OTT kell keresni a következő fejlesztést, nem találgatni.

## Marketing Council — egy gyors, több nézőpontú állásfoglalás a legvitatottabb kérdésről

**Kérdés:** *0 eladással és kis kerettel most a fizetett hirdetésre vagy az organikus/PR-re fókuszáljunk elsőként?*

- **"Növekedés-hacker" nézőpont:** a fizetett hirdetés gyors, mérhető adatot ad — akár rossz hírt is, de AZONNAL. Kis budget mellett is érdemes elindítani, mert a tanulás sebessége számít, nem a mennyiség.
- **"Márkaépítő" nézőpont:** egy vadonatúj, még bizalmat építő terméknél a fizetett hirdetés hidegen landol social proof nélkül — előbb pár valós, organikus felhasználói történet kellene, hogy a hirdetés egyáltalán hiteles legyen.
- **Szintézis (ez itt a javaslat):** **mindkettő, párhuzamosan, de más célra** — a hirdetés célja MOST ne a közvetlen eladás legyen (ahhoz még korai), hanem a tölcsér-adat gyűjtése (hányan jutnak el `wizard_started`-ig egy hideg közönségből); az organikus/PR célja pedig a hitelesség és az első valós vélemények megszerzése, amik aztán VISSZA is táplálhatók a hirdetés-kreatívba. A kettő nem versenyez egymással, hanem egymást erősíti.

## Customer research — mit kérdezzünk az első valós felhasználóktól

A `product-marketing.md`-ben több `❓` pont is arra várt, hogy legyen valós ügyfél-visszajelzés. Amint a 2 jelenlegi (vagy a következő néhány) kitöltő elérhető, egy rövid, 4 kérdéses megkeresés sokat segítene:
1. "Mi volt a legnagyobb kétséged/félelmed, mielőtt elkezdted kitölteni?"
2. "Mi győzött meg, hogy végigcsináld?" (vagy: "mi miatt hagytad abba, ha nem fejezted be?")
3. "Mennyit fizetnél szívesen ezért, ha meg kellene határoznod egy árat?" (Van Westendorp előfutára)
4. "Ajánlanád másoknak? Kinek?"

## Image / vizuális anyagok — specifikáció (nincs képgeneráló eszköz ebben a környezetben)

Nem tudok ebben a munkamenetben ténylegesen képet generálni — de itt a pontos specifikáció, amit egy designer/Canva/AI-képgeneráló eszköz azonnal fel tud használni:
- **Social/hirdetés-grafika 1:** négyzetes (1080×1080), a 3 terméktípus mintaoldala egymás mellett, felirat: "1 eszköz, 3 esküvői kiadvány".
- **Social/hirdetés-grafika 2:** függőleges (1080×1920, Reels/Stories), split-screen: bal oldalon "Máshol: várj egy e-mailre 📧⏳", jobb oldalon "Nálunk: lásd azonnal 👀✨".
- **Sajtó-kit képek:** 3 db tiszta mintaoldal-screenshot (Újság/Meghívó/Save the Date), 1920×1080, vízjel nélkül (ld. `pr-plan.md` sajtó-kit checklist).

## Amit ez a szintézis SZÁNDÉKOSAN nem ismétel meg
`marketing-ideas` (általános ötletbörze) és `marketing-loops` (visszatérő munkafolyamat automatizálása) — ezek metaeszközök, amik akkor válnak hasznossá, ha a fenti konkrét tervek végrehajtása során elakadtok, vagy ha már több csatorna fut egyszerre és ütemezni kell az ellenőrzésüket. `site-architecture` — ld. `content-competitor-plan.md`, egyértelműen "később" (ha a site túlnő az egyoldalas formán).
