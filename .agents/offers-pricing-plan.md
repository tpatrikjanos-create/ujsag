# Esküvői Újság — Offers, Pricing & Psychology

*Last updated: 2026-07-08*
*Kontextus: `.agents/product-marketing.md`. Egyszeri (nem előfizetéses) B2C vásárlás — a `pricing`/`offers` skillek SaaS-alapelvei közül csak a value-alapú gondolkodás és a value equation vonatkozik közvetlenül, a tier/seat-alapú keretrendszer nem.*

## Value Equation — mi a jelenlegi ajánlat gyenge láncszeme?

```
Dream outcome (magas) × Perceived likelihood (magas, hiszen a vevő LÁTJA a kész terméket fizetés előtt)
──────────────────────────────────────────────────────────────────────────────────────────────────
Time delay (a nyomtatottnál ISMERETLEN — nincs közölve átfutási idő) × Effort (alacsony, önkiszolgáló)
```

**A leggyengébb láncszem: Time delay a nyomtatott rendelésnél.** Sehol nem volt közölve, mennyi idő alatt érkezik meg a nyomtatott példány — ez pont a legnagyobb szorongást okozó pont egy határidős (esküvő-dátumos) vásárlásnál. **Ezt már javítottam** (ld. lent, kódváltozás).

## Elvégzett változtatás: valós (nem hamis) sürgetés

A "Kész" modal nyomtatott opciója mellé bekerült: *"📦 Nyomtatott rendelésnél kérünk legalább [X] napot az esküvő előtt rendelni, hogy biztosan időben megérkezzen."*

Ez a `marketing-psychology` skill **Scarcity/Urgency** elvét alkalmazza, de **valódi** formában (nem hamis visszaszámláló) — a wedding date TÉNYLEG determinisztikus határidő, ez nem manipuláció, hanem hasznos infó, ami csökkenti a "time delay" szorongást ÉS cselekvésre ösztönöz.

**❓ FONTOS, VALÓDI ADAT KELL:** a kódba egy `ORDER_PRINT_LEADTIME_DAYS=10` placeholder került (a `# ❓ EZT ELLENŐRIZNI KELL` komment jelzi a kódban) — ezt a TÉNYLEGES gyártási+postázási átfutási idővel kell felülírni, mielőtt élesben bárki nyomtatott rendelést adna le. Amíg nem tudjátok pontosan, inkább egy óvatos (hosszabb) becslést hagyjatok bent, mint egy túl optimistát, amit aztán nem tudtok tartani.

## Garancia — még mindig hiányzik (offer anatómia szerint kötelező elem)

A `offers` skill anatómiája szerint a garancia a 6 kötelező elem egyike, és most még nincs. **Nem találok ki egyet a ti nevetekben** (a skill kifejezetten tiltja a túlígérést) — ehelyett egy KONKRÉT kérdés: tudnátok-e vállalni valami ilyesmit: *"Nem tetszik az eredmény? Egyszer ingyen újratervezzük veletek."* Ha igen, ez egy alacsony kockázatú, valódi garancia lenne (nem pénz-visszafizetés, hanem erőfeszítés-visszaadás) — ha bizonytalanok vagytok, inkább várjunk, amíg lesz pár valós rendelés tapasztalata.

## Árazás-pszichológia: charm vs. kerek árak — TUDATOS döntés, NEM változtattam

A jelenlegi árak (5000 Ft, 500 Ft/db, 1250 Ft, 5000 Ft) mind kerek számok, nem "charm pricing" (4990 Ft stb.). **Ezt szándékosan hagytam így**: a márka hangvétele meleg, őszinte, "nem trükközünk" jellegű (ld. product-marketing.md Brand Voice) — a kerek árak ezt erősítik, a .99-es végződések inkább "kirakati akció" érzetet keltenek, ami nem illik ide. Ha a jövőben adat mutatja, hogy ez számít, tesztelhető, de alapból nem javaslom a váltást.

## Willingness-to-pay kutatás — a legnagyobb nyitott kérdés

A `product-marketing.md`-ben rögzítettétek: nem tudjátok, mennyit hajlandóak fizetni az emberek. Erre a **Van Westendorp módszer** a legkézenfekvőbb (4 kérdés: mikor lenne túl drága / túl olcsó / drága de még megfontolható / jó ár). Ezt legegyszerűbben a "Kész" modal `doneFeedbackText` mezőjén keresztül, VAGY egy külön, rövid kérdőívvel lehetne felmérni azoknál, akik befejezték a varázslót, de nem vásároltak. **Javaslat:** várjatok, amíg lesz kb. 10-15 kitöltő, és akkor küldjetek nekik egy rövid, 4 kérdéses e-mailt (van már e-mail-címük az early-email-box-ból) — ez pontosabb képet adna, mint bármilyen találgatás most.

## Kapcsolódó pszichológiai elvek, amik MÁR jól működnek a termékben (nem kell változtatni)
- **Endowment effect / "látod, mielőtt fizetsz":** a vevő gyakorlatilag már "birtokolja" érzelmileg a kész terméket, mielőtt fizetne — ez az egyik legerősebb konverziós elv, és a termék architektúrája már erre épül.
- **IKEA effect:** a felhasználó saját maga szerkeszti/tölti fel a fotókat — a saját befektetett munka miatt magasabbra fogja értékelni a végeredményt.
- **Goal-gradient effect:** az "élő előnézet" és a "fitbar" (elfér-e a tartalom) folyamatosan mutatja a haladást a kitöltés közben — ez már megvan, jól teszi a dolgát.
