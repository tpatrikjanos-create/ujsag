# Esküvői Újság — Copywriting / Copy-editing jegyzetek

*Last updated: 2026-07-08*

## Elvégzett változtatások (index.html)

### 1. Típus-választó képernyő — differenciáló sor hozzáadva
**Előtte:** csak "Válassz a három lehetőség közül — bármikor válthatsz, ha meggondolod magad."
**Utána, új sor:** *"✦ Nem kell e-mailre várnod: itt azonnal látod és szerkeszted a kész eredményt — mielőtt egy fillért is fizetnél."*
**Miért:** ez a legkonkrétabb, legerősebb differenciáló ok (ld. `product-marketing.md`), és korábban NEM jelent meg a legmagasabb forgalmú oldalon (a `cro`-audit talált rá, ld. `funnel-optimization-plan.md`).

**Alternatívák, amiket mérlegeltem:**
- Option A (választott): *"Nem kell e-mailre várnod: itt azonnal látod..."* — direkt, a versenytárs gyenge pontjára épít anélkül, hogy megnevezné.
- Option B: *"Láss mindent élőben — fizetés előtt."* — rövidebb, de kevésbé konkrét (nem mondja ki, MI ellen versenyez).
- Option C: *"90 másodperc, és már látod a kész eredményt."* — időbeli konkrétum, de ezt még nem mértük (a `wizard_started`→`generate_succeeded` idő GA4-ben mostantól mérhető — ha lesz rá adat, érdemes ezzel a variánssal tesztelni).

### 2. Újság-bemutató headline pontosítása
**Előtte:** "Egy vicces, személyes újság — a nagy napotokra"
**Utána:** "Egy vicces, személyes újság — **percek alatt kész**, a nagy napotokra"
**Miért:** a "percek alatt kész" ígéret már ott volt az alcímben, de a headline-ban nem — a copywriting-elv szerint a konkrétum (időkeret) a headline-ba tartozik, nem csak az alcímbe.

## Amit szándékosan NEM változtattam most
- A "Kész" modal szövege és a vásárlási felület — ehhez valós `done_modal_opened`/`order_submitted` adat kellene előbb (ld. `funnel-optimization-plan.md`).
- A review-karusszel szövegei — ezek jelenleg illusztratívak (ld. `product-marketing.md`), NEM copywriting-kérdés, hanem előbb tisztázandó, hogy valós vagy jelölt tartalomként kezeljük-e őket.
