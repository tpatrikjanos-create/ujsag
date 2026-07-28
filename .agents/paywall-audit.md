# Esküvői Újság — Paywall / "Kész" modal audit

*Last updated: 2026-07-08*

## A jelenlegi felállás a keretrendszer szerint

| Elem | Állapot | Megjegyzés |
|---|---|---|
| Érték az ajánlat ELŐTT | ✅ Kiváló | A felhasználó a TELJES kész terméket látja, vízjellel — ez erősebb, mint a legtöbb SaaS-paywall (ott gyakran csak ígéretet kap az ember, itt a valóságot). |
| Trigger időzítése | ✅ Felhasználó-indított | A "Kész" gombot ő nyomja meg, amikor készen áll — nincs erőltetett/idő-alapú megszakítás. Ez a LEGJOBB lehetséges időzítés a keretrendszer szerint. |
| Csomag-összehasonlítás | ✅ Megvan | Digitális vs. nyomtatott, árral. |
| Kiút ("nem most") | ✅ Megvan | "Vissza a szerkesztéshez" — nincs csapda, nincs elrejtett bezárás. |
| Társadalmi bizonyíték A MODALBAN | ❌ Hiányzik | A vélemény-karusszel a tölcsér korábbi pontján van, nem itt, a fizetési döntés pillanatában. |
| Garancia/kockázat-csökkentés | ❌ Hiányzik | Ahogy a `product-marketing.md` is jelezte: nincs még garancia-ígéret (0 valós rendelés miatt ez érthető). |

## Amit NEM javaslok most megváltoztatni
A modal szerkezete már jól illeszkedik a keretrendszer elveihez — nem force-olnék bele változtatást megalapozott adat nélkül egy monetizáció-kritikus felületen. Ehelyett:

## Egy konkrét, alacsony kockázatú teszt-ötlet későbbre
Amint lesz néhány valós `done_modal_opened`→`order_submitted` adat (ld. `analytics-tracking-plan.md`), érdemes tesztelni: **egy rövid, konkrét vélemény-idézet berakása közvetlenül a vásárlási felület fölé** (nem az egész karusszel, csak 1 kiemelt mondat) — ez pontosan a "trigger pontban lévő social proof" hiányt pótolná. **Fontos:** ezt csak akkor tegyétek meg, ha addigra van legalább 1 VALÓS vásárlói visszajelzés — addig inkább semmi, mint egy illusztratív idézet a fizetési döntés pillanatában (ez etikai/bizalmi kockázat lenne, ld. product-marketing.md Proof Points szekció).

## E-mail-kötelezettség a vízjeles PDF-nél — szándékos trade-off, nem hiba
A "Kész" modal e-mail-mezője KÖTELEZŐ még a vízjeles (ingyenes) PDF letöltéséhez is. Ez első ránézésre súrlódásnak tűnhet, de a jelenlegi cél (ismertség/lead-gyűjtés, nem azonnali bevétel) szempontjából ez tudatos csere: minden letöltés egyben egy e-mail-cím is. **Ha a jövőben a letöltési arány (nem csak az e-mail-gyűjtés) válik fontosabbá, ez egy tesztelhető pont** — de most, a jelenlegi célkitűzés mellett, hagyd, ahogy van.
