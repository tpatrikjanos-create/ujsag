# Esküvői Újság — E-mail szövegek

*Last updated: 2026-07-08*
*Kontextus: nagyon korai szakasz (0 rendelés) — NEM egy automatizált ESP-drip-rendszert javaslok most (Mailchimp/Customer.io beállítása felesleges overhead ekkora volumenre), hanem 3 KÉSZ, kézzel is kiküldhető e-mail szöveget, ami a már meglévő 2 e-mail-gyűjtési ponthoz (korai feliratkozás + "Kész" modal) kapcsolódik.*

## 1. "Nem fejezted be" emlékeztető
**Trigger:** valaki megadta a korai e-mail-címét (`early-email-box`), de 48 órán belül nem jutott el a `generate_succeeded` eseményig (ez az admin-panelben/Firebase-ben manuálisan ellenőrizhető ekkora volumennél).

```
Tárgy: Ott hagytad a félbeszakadt esküvői [újságodat/meghívódat] 👀
Előnézeti szöveg: 2 perc, és kész is van — folytasd, ahol abbahagytad.

Szia!

Nemrég belekezdtél az esküvői [újságod/meghívód/save the date-ed]
elkészítésébe — de úgy tűnik, nem jutottál el a végéig.

Semmi gond, a munkád nem veszett el: [link], és onnan folytathatod,
ahol abbahagytad.

Emlékeztetőül: az egész ingyenes, és a kész eredményt is láthatod,
mielőtt bármit fizetnél.

Ha elakadtál valamiben, csak válaszolj erre az e-mailre — szívesen
segítünk.

Szeretettel,
[Név]
```

## 2. Rendelés-visszaigazolás
**Trigger:** `order_submitted` esemény (ld. `analytics-tracking-plan.md`) — jelenleg a UI-ban már ígéri a 24 órás választ, ez az e-mail ezt az ígéretet váltja valóra.

```
Tárgy: Megkaptuk a rendelésed! 🎉
Előnézeti szöveg: 24 órán belül jelentkezünk a fizetés részleteivel.

Szia!

Köszönjük a rendelésed — sikeresen rögzítettük.

Amit rendeltél:
[digitális változat / X db nyomtatott példány]

Mi jön most: 24 órán belül e-mailben küldjük a fizetés részleteit.
[Ha nyomtatott rendelés volt:] A gyártás+postázás kb. [X] napot vesz
igénybe a fizetés beérkezése után — ha van konkrét határidőd (pl. az
esküvő dátuma), írd meg, és igyekszünk figyelembe venni.

Ha bármi kérdésed van, válaszolj erre az e-mailre.

Szeretettel,
[Név]
```

## 3. Utólagos köszönő + vélemény-kérés (JÖVŐBENI, csak valós leszállítás után)
**Trigger:** manuálisan, kb. 1-2 héttel a kézbesítés/letöltés után — **csak akkor küldjétek, ha ténylegesen volt már valós leszállítás**, ne korábban.

```
Tárgy: Hogy sikerült a nagy nap? 💍
Előnézeti szöveg: Örülnénk, ha megosztanád velünk a tapasztalatodat.

Szia!

Remélem, jól sikerült az esküvőtök, és az [újság/meghívó/save the
date] elnyerte a vendégeitek tetszését!

Ha van két perced, örülnénk egy őszinte visszajelzésnek — ez segít
nekünk (és a következő pároknak is). [link a visszajelzéshez]

Ha bármi nem volt tökéletes, azt is szívesen halljuk — ebből tanulunk
a legtöbbet.

Szeretettel,
[Név]
```

## Miért nincs itt egy teljes 7 e-mailes automata onboarding-szekvencia
A skill alap-javaslata (5-7 e-mailes welcome-sorozat, ESP-automatizációval) ekkora volumennél (2 kitöltő, 0 rendelés) felesleges infrastrukturális beruházás lenne. A fenti 3 e-mail KÉZZEL is kiküldhető, és pontosan a tényleges tölcsér-pontokhoz (`analytics-tracking-plan.md`) illeszkedik. **Mikor érdemes automatizálni:** amint heti szinten already több mint 5-10 e-mail-cím gyűlik össze, egy egyszerű eszköz (pl. Mailchimp ingyenes csomagja) már megéri a beállítást.
