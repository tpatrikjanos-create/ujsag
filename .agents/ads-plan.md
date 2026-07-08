# Esküvői Újság — Ads Plan

*Last updated: 2026-07-08*
*Kontextus: `.agents/product-marketing.md`. Havi keret: 30-50 ezer Ft. Volt már 1 korábbi TikTok-hirdetés.*

## A korábbi TikTok-hirdetés diagnózisa

**Amit tudunk:** "Így készül?" sped-up demó videó, mintaképpel az elején, női hang alámondással. 20 000 Ft költés → **20 000 megtekintés** (≈1 Ft/megtekintés — kiugróan olcsó, a TikTok szállítás/reach-oldal SZUPERÜL teljesített). De: kevesen próbálták ki ténylegesen a weboldalt.

**Ez NEM reach-probléma, hanem átkattintási probléma.** A leggyakoribb okok, sorrendben, hogy melyik a legvalószínűbb:
1. **Nem volt elég erős, explicit CTA** a videóban (sem szóban, sem szövegben) — a nézők tetszettek, de nem kaptak egyértelmű "kattints ide, és próbáld ki MOST" utasítást.
2. **A hirdetés-beállítás maga** (TikTok Ads Manager) nem feltétlenül "Forgalom"/"Konverzió" célra volt állítva megfelelő link-gombbal — ezt érdemes újra ellenőrizni.
3. **Nem volt mérve pontosan** — akkor MÉG nem volt egyedi esemény-követés (csak most építettük ki a GA4-et/Meta egyedi eseményeket, ld. `analytics-tracking-plan.md`), szóval a "kevesen próbálták ki" inkább benyomás, mint pontos szám. **Ez a legfontosabb tanulság: a következő kör már valós adatra fog épülni**, mert a `generate_succeeded`/`done_modal_opened` események most már mérve vannak.

## Technikai előkészítés (megtörtént ma)
A Meta Pixel mostantól a saját egyedi eseményeink (pl. `done_modal_opened`) MELLETT a Meta **szabvány-eseményeit** is küldi a 3 legfontosabb ponton — ez azért kritikus, mert a Meta hirdetés-optimalizálás (és a "konverzióra optimalizálás" kampánycél) csak szabvány-eseményekre tud megbízhatóan építeni, egyedi eseményre nem:

| Mi történik | Meta szabvány-esemény |
|---|---|
| E-mail cím elmentve | `Lead` |
| "Kész" modal megnyitva (legjobb korai vásárlási-szándék jelzés) | `InitiateCheckout` |
| Rendelés rögzítve | `Purchase` (értékkel) |

Ez azt jelenti: egy jövőbeli Meta-kampányban be lehet állítani, hogy a rendszer az `InitiateCheckout` (vagy akár `Purchase`) eseményre optimalizáljon, nem csak kattintásra/megtekintésre.

## Javasolt platform-elosztás (30-50 ezer Ft/hó)

A kicsi keret miatt **ne** ossz szét 3+ platformra — 1-2 csatorna, de azon belül **több kreatív variáns** (ez a 2026-os Meta/TikTok algoritmus-korszak kulcs-elve: a kreatív MAGA a célzás, ne szűrőkkel próbáld megtalálni a jó közönséget).

| Csatorna | Keret-arány | Miért |
|---|---|---|
| **Meta (Instagram/Facebook)** | ~60% | Már fut rajta a Pixel + most a szabvány-események is — azonnal optimalizálható konverzióra. Vizuális termékhez illik. |
| **TikTok** | ~40% | A korábbi teszt bizonyította, hogy a reach/CPM itt kiváló — csak a CTA-hiányosságot kell javítani, nem a platformot lecserélni. |

Google Search-öt **egyelőre kihagynám** — ehhez már kell egy minimális havi keret (a kis kulcsszó-volumen miatt drágább lehet kattintásonként, mint amennyit itt egy egész hónapra szánnátok), és nincs még konverziós adat, amire optimalizálni lehetne.

## Kreatív terv — Meta (3 variáns, hogy legyen mit tesztelni)

A 2026-os Meta-algoritmus (Andromeda) SZÉLES célzást + SOK kreatív-variánst jutalmaz, nem szűk célzást — induláskor NE szűkíts (kor/érdeklődés) egyetlen dimenzióra sem, csak ország (Magyarország) + hozzávetőleges korsáv (23-40).

1. **"Lásd, mielőtt fizetsz" (a legerősebb differenciáló üzenet)** — statikus kép vagy rövid videó, szöveg: *"A legtöbb helyen megadod az adataid, és VÁRSZ egy e-mailre. Nálunk rögtön látod, mielőtt fizetnél."* Screen recording snippet a szerkesztőről.
2. **A bevált "így készül" demó, DE erős CTA-val** — ugyanaz a koncept, mint a TikTok-videó, de a végén explicit, szóban ÉS szövegben kimondott felhívás: *"Kattints a linkre — ingyen kipróbálhatod, mielőtt egy fillért is fizetnél."*
3. **Design-showcase statikus kép** — egy gyönyörű kész mintaoldal, egyszerű felirattal: *"Esküvői meghívó, ami tényleg a tiétek — percek alatt."*

## Kreatív terv — TikTok (a meglévő videó javítása)

Ne dobjátok el a működő koncepciót (a reach bizonyítottan jó) — vágjátok újra:
- Az első 3 másodpercbe kerüljön BE a végeredmény (ne csak a folyamat eleje) — a TikTok-nézők 3 másodperc alatt döntenek.
- A videó VÉGÉRE kerüljön egy explicit, felirat + hang CTA: *"Linkben kipróbálhatod ingyen"* — jelenleg ez feltehetően hiányzott.
- Ellenőrizzétek a TikTok Ads Manager kampánycélját: legyen **"Forgalom"** vagy **"Konverziók"**, ne **"Elérés"/"Megtekintés"** — ha az első hirdetés "elérés"-re volt optimalizálva, az pontosan megmagyarázná a nagy megtekintés-számot ÉS a kevés átkattintást egyszerre.

## Mérés — mit nézzetek meg a jövő héten

Mivel most már működik a GA4 + Meta szabvány-esemény, a következő kör után nézzétek meg konkrétan:
- Hányan jutottak el `wizard_started`-ig (ebből látszik, hogy a hirdetésből érkezők egyáltalán elkezdik-e)
- Hányan jutottak el `generate_succeeded`-ig (ebből látszik, hogy nem akadnak-e el a kitöltésben)
- Hányan nyitották meg a `done_modal_opened`-et / `InitiateCheckout`-ot (ez az igazi vásárlási szándék jelzése)

Ez adja meg a választ arra, hogy a KÖVETKEZŐ optimalizálás hol legyen: ha sokan jutnak el a `wizard_started`-ig, de kevesen a `generate_succeeded`-ig, az a wizard/UX problémája (→ `cro` skill). Ha sokan generálnak, de kevesen nyitják meg a `done_modal`-t, az a szöveg/ár problémája (→ `copywriting`/`pricing`/`offers`).
