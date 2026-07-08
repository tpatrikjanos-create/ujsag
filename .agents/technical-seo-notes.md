# Esküvői Újság — Technikai SEO / Schema / AI-SEO jegyzetek

*Last updated: 2026-07-08*

## Elvégzett változtatások

### 1. Heading-hierarchia javítva (seo-audit finding)
Az oldal statikus HTML-je korábban **5 db `<h1>`-et** tartalmazott egyszerre (típus-választó, bemutató-headline, és mind a 3 termék-varázsló saját headline-je) — ez rontja az AI-idézési esélyt (a skill szerint az egy-H1-es oldalak 2,8×-szer nagyobb eséllyel idézettek). Most **1 db statikus `<h1>`** maradt (a típus-választó "Mit szeretnél elkészíteni?"), a többi `<h2>`-re lett cserélve — vizuálisan semmi nem változott (CSS osztály alapú stílus, nem tag-alapú).

*(A 3 db, a generált kiadvány CÍMLAPJÁN belüli `<h1>` — pár neve/lap címe — csak generálás UTÁN, futásidőben kerül a DOM-ba egy `display:none` konténerbe, ez nem számít bele a statikus crawl-felületbe.)*

### 2. Title/meta description/OG/Twitter frissítve
Korábban csak "Esküvői Újság" — most mindhárom terméktípust (Újság, Meghívó, Save the Date) és a legerősebb differenciáló üzenetet ("azonnal látod, mielőtt fizetnél") is tartalmazza.

### 3. Schema.org JSON-LD hozzáadva (`SoftwareApplication` + `Offer`)
A fejlécbe bekerült egy strukturált adat blokk, ami a valós `ORDER_*` árakat tükrözi (5 000 Ft digitális, 500 Ft/db nyomtatott) — **nincs kitalált adat** benne (se `url`, se `logo` mező, mert nincs megbízhatóan megadható publikus URL/logó-kép).

### 4. `robots.txt` létrehozva
Explicit engedélyezi az AI-idéző botokat (GPTBot, ClaudeBot, PerplexityBot, Google-Extended, Bingbot) — ezek blokkolása azt jelentené, hogy az adott AI-motor SOSEM tudna hivatkozni rátok. Az `?admin=1` admin-nézet (ami amúgy is Firebase-bejelentkezéssel védett) explicit ki van zárva az indexelésből.

### 5. `llms.txt` létrehozva
Rövid, gépileg olvasható kontextus-fájl az AI-rendszereknek (ChatGPT, Claude, Perplexity) a termékről — a Google szerint NEM kötelező, de a többi AI-motornál segíthet.

### 6. `pricing.md` létrehozva
Strukturált, gépileg olvasható árazási adat — ez azért fontos, mert egyre több AI-ügynök (agent) hasonlítja össze termékeket automatikusan vásárlás előtt, és ha az árazás csak JS-mögötti modálban van (mint most, a "Kész" gombra kattintva), az ügynök simán kihagyhatja a terméket, mert nem tudja kiolvasni az árat anélkül, hogy végigmenne a teljes varázslón.

## Amit NEM csináltam (és miért)

- **FAQ schema** — nincs a site-on valós, önálló FAQ-szekció (a "GYIK" a generált ÚJSÁG egyik opcionális rovata, nem a marketing-oldal saját tartalma) — nem akartam kitalált FAQ-tartalmat gyártani csak a schema kedvéért.
- **Sitemap.xml** — egyetlen oldalból áll a site, egy sitemap ebben az esetben nem adna érdemi értéket. Ha a jövőben blog/aloldalak épülnek (ld. `content-strategy` rész), akkor érdemes lesz.
- **Google Search Console / AI-láthatóság monitorozás beállítása** — ehhez a tényleges hosztolt domainre és GSC-hozzáférésre van szükség, amit én innen nem tudok beállítani; ha megvan a végleges domain, ez egy 10 perces feladat (GSC property + a fenti fájlok URL-jeinek beküldése).

## Következő lépés nektek
Ha megvan a végleges publikus domain (URL), érdemes:
1. A JSON-LD-be visszatenni egy `"url"` mezőt a valós címmel.
2. Google Search Console-ba felvenni a domaint, és beküldeni a `robots.txt`/`llms.txt` elérhetőségét.
3. Havonta egyszer manuálisan leellenőrizni (ChatGPT/Perplexity/Google), hogy megjelenik-e a termék releváns kérdésekre (pl. "esküvői meghívó generátor") — ld. `ai-seo` skill "DIY Monitoring" szakasza.
