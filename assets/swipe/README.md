# Tinder-swipe rovat-válogató — példaképek

Ide kerülnek a rovat-válogató swipe-kártyák példaképei. Amíg egy fájl hiányzik, a kártya
egy semleges, ikonos háttérrel jelenik meg helyette — a funkció képek nélkül is működik,
csak a hiányzó kártyák kevésbé mutatósak.

## Fájlnév-konvenció

Minden fájl neve pontosan `<rovat-azonosító>.jpg` legyen, ebben a mappában
(`assets/swipe/`). A várt fájlnevek:

- szuloknek.jpg — Köszönet a szülőknek
- stats.jpg — Számokban a szerelmünk
- sztori.jpg — A sztorink dióhéjban
- childhood.jpg — Gyerekkori képek
- ismerkedes.jpg — Hogyan ismerkedtünk meg?
- legelsokep.jpg — A legelső közös kép
- years.jpg — Minden évből egy kép
- lanykeres.jpg — A lánykérés
- jegyesfoto.jpg — A jegyesfotózás képei
- utazas.jpg — Utazási rovat
- bakancslista.jpg — Közös bakancslistánk
- csapat.jpg — A csapatunk
- memorial.jpg — Akik fentről ünnepelnek
- negylabu.jpg — Otthonról ünneplő négylábú
- szulok.jpg — Szerelmek, melyekből születtünk
- szinglik.jpg — A szinglik
- dijak.jpg — Díjnyerteseink
- igazhamis.jpg — Igaz-Hamis
- jatekok.jpg — Játékok (sudoku, keresztrejtvény, szókereső)
- lagziszab.jpg — A lagzi szabályzata
- masnapos.jpg — Útmutató másnaposság ellen
- horoszkop.jpg — Horoszkóp — ma éjjelre
- gyik.jpg — Gyakran Ismételt Kérdések
- interju.jpg — Exkluzív interjú
- szinezo.jpg — Gyerekeknek színező
- qr.jpg — QR-kód
- robbantsd.jpg — Robbantsd fel a telefonunkat!
- fotovadasz.jpg — Fotóvadász játék
- message.jpg — Vendégkönyv
- naszut.jpg — A nászútunk

## Ajánlott méret

Kb. 4:3 arányú kép (pl. 800×600 vagy nagyobb, ugyanabban az arányban) — a kártya ezt az
arányt vágja ki (`object-fit: cover`), úgyhogy a kép közepén legyen a lényeg.

Ha egy fájlt ide (`assets/swipe/`) feltöltesz a pontos névvel, a kártya automatikusan
megjeleníti — nincs szükség kódmódosításra.
