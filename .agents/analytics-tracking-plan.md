# Esküvői Újság — Tracking Plan

*Last updated: 2026-07-08*

## Overview
- Tools: GA4 (`G-5H6Z3C3VEZ`) + Meta Pixel (`1765633421037449`) — mindkettő csak GDPR süti-elfogadás UTÁN töltődik be (`localStorage.cookieConsent==='accepted'`).
- Minden esemény egyetlen `trackEvent(name, params)` helperen megy át (index.html, a Meta Pixel/GA4 betöltő IIFE-k után), ami mindkét eszközbe elküldi, ha épp be van töltve.
- Kontextus: a termék most lett public, 0 fizetős rendelés — a cél ELSŐSORBAN a tölcsér mérhetővé tétele (hol esnek ki az emberek), nem egy meglévő tölcsér finomhangolása. Ld. `.agents/product-marketing.md`.

## Events

| Event Name | Description | Properties | Trigger |
|------------|-------------|------------|---------|
| `product_type_selected` | Látogató kiválasztja a 3 terméktípus egyikét | `product_type` (ujsag/meghivo/savethedate) | Típus-választó kártyára kattintás (`pickProduct()`) |
| `wizard_started` | Első mezőkitöltés az adott termék varázslójában | `product_type` | Első `input` esemény a varázsló-konténeren belül (termékenként csak egyszer) |
| `generate_clicked` | "Generálás" gombra kattintás | `product_type`, `size`, `pages` | `generate()` függvény eleje |
| `generate_failed` | A generálás elakadt | `product_type`, `reason` (`missing_required` / `content_too_large`), `needed_pages` | `generate()` validációs ágai |
| `generate_succeeded` | A generálás sikeres, a szerkesztő megnyílik | `product_type`, `size`, `pages` | `generate()` vége, mielőtt a szerkesztő megjelenik |
| `done_modal_opened` | "Kész" gomb — a legjobb korai vásárlási-szándék jelzés | `product_type` | `showDoneModal()` eleje |
| `email_captured` | E-mail cím sikeresen elmentve | `source` (`early` / `done_modal`), `product_type` | Korai e-mail-mező sikeres mentése, VAGY a "Kész" modal rendelés-mentésének sikeres visszatérése |
| `order_submitted` | Rendelés ténylegesen rögzítve | `product_type`, `digital` (bool), `print` (bool), `print_qty`, `value` | `saveOrder()` sikeres visszatérése |
| `pdf_downloaded` | Vízjeles PDF letöltés gomb | `product_type` | "PDF letöltése" gomb kattintás |

## Funnel (a legfontosabb, amit ez méri)

```
product_type_selected → wizard_started → generate_clicked → generate_succeeded
                                                            → done_modal_opened → order_submitted
```

A `generate_failed` külön ágon jelzi, ha valaki a `generate_clicked` UTÁN, de a `generate_succeeded` ELŐTT elakad — ez a legkonkrétabb "hol esnek ki" jelzés induláskor.

## Conversions (GA4 Admin-ban jelölendő)

| Conversion | Event | Megjegyzés |
|------------|-------|------------|
| Fő konverzió | `order_submitted` | Ez a tényleges üzleti cél, de induláskor ritka lesz |
| Korai proxy-konverzió | `done_modal_opened` | Amíg nincs elég `order_submitted` adat, ez a legjobb korai jelzés vásárlási szándékra |
| Lead-konverzió | `email_captured` | Erős jelzés akkor is, ha nem lesz azonnal fizetős rendelés |

## Nincs még, de érdemes lenne (jövőbeli bővítés)
- UTM-paraméterek szisztematikus használata, amint elindulnak a hirdetési/social kampányok (`utm_source`, `utm_medium`, `utm_campaign`) — enélkül a `product_type_selected`/`generate_succeeded` adatokból nem derül ki, MELYIK csatorna hozta a látogatót.
- `pickFmt()` (formátum-választás) és a rovat be/kikapcsolás (`optToggle()`) egyelőre NINCS külön követve — ha később kiderül, hogy ez fontos döntési pont, könnyen hozzáadható ugyanezzel a `trackEvent()` mintával.
