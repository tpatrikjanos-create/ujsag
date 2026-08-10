/*
 * AI Tipp proxy — Cloudflare Worker
 * ==================================
 * Ez a fájl a weboldal (index.html) "✨ AI Tipp" gombjához tartozó szerver-oldali
 * közvetítő. A weboldal egy statikus HTML fájl (GitHub Pages), szerver/backend nélkül —
 * egy AI-szolgáltató API-kulcsát SOHA nem szabad a kliens-oldali kódba beleírni, mert
 * bárki kiolvashatná az oldal forráskódjából, és visszaélhetne vele (a te API-számládat
 * terhelve). Ez a kis Worker pontosan ezt oldja meg: a kulcs csak ITT, a szerveren van
 * jelen, titkosított környezeti változóként — a böngésző soha nem látja.
 *
 * TELEPÍTÉS (kb. 10 perc, ingyenes Cloudflare-fiókkal):
 *   1. Regisztrálj (ha még nincs) egy ingyenes Cloudflare-fiókot: https://dash.cloudflare.com/sign-up
 *   2. A bal oldali menüben: "Workers & Pages" → "Create" → "Create Worker".
 *   3. Adj neki egy nevet (pl. "ai-tipp-proxy"), majd "Deploy" egy alap sablonnal.
 *   4. A Worker szerkesztőjében ("Edit code") töröld a sablon-kódot, és illeszd be
 *      TELJES EGÉSZÉBEN ennek a fájlnak a tartalmát. Mentsd és telepítsd ("Deploy").
 *   5. A Worker beállításainál ("Settings" → "Variables and Secrets") adj hozzá egy
 *      ÚJ, titkosított (encrypted) változót:
 *         Név:   ANTHROPIC_API_KEY
 *         Érték: a saját Anthropic API-kulcsod (https://console.anthropic.com/settings/keys)
 *      Fontos: válaszd a "Secret" típust, NE a sima "Text"-et, hogy titkosítva tárolódjon.
 *   6. Az ALLOWED_ORIGINS listába (lásd lent) fel van véve a GitHub Pages cím ÉS a
 *      fontosnap.hu (www-vel és anélkül is) — ha később újabb domaint/aldomaint adsz
 *      hozzá az oldalhoz, azt is ide kell felvenni, különben az AI Tipp gomb 403-mal
 *      elutasítja a kéréseket arról a címről.
 *   7. Mentsd/telepítsd újra a Workert. A Worker oldalán megkapod a saját URL-jét
 *      (valami ilyesmi: https://ai-tipp-proxy.<a-te-cloudflare-felhasználóneved>.workers.dev).
 *   8. Ezt az URL-t illeszd be az index.html-ben az `AI_PROXY_URL` konstansba
 *      (keresd rá: "var AI_PROXY_URL="), majd told fel/élesítsd újra az oldalt.
 *      Ha ezt a lépést kihagyod, a gomb megjelenik, de kattintásra egy barátságos
 *      "még nincs bekapcsolva" üzenetet ír ki — semmi nem törik el.
 *
 * KÖLTSÉG: a Cloudflare Worker ingyenes (napi 100 000 hívásig), az Anthropic API
 * hívásonként pár tized centbe kerül (a Claude Haiku modellt használjuk, ez a
 * legolcsóbb, gyors modell — bőven elég egy pár mondatos szöveg megírásához).
 *
 * VISSZAÉLÉS ELLENI VÉDELEM (fontos, olvasd el): ez a Worker jelenleg csak azt
 * ellenőrzi, hogy a kérés a te weboldaladról érkezik-e (Origin fejléc) — ez a legtöbb
 * véletlen/gépi visszaélést kiszűri, de egy elszánt támadó ezt meg tudja kerülni
 * (pl. saját szerverről küldött kéréssel, hamis Origin fejléccel). Ha azt látod, hogy
 * a Cloudflare/Anthropic-számládon szokatlanul sok hívás fut le, érdemes erősebb
 * védelmet hozzáadni: pl. Cloudflare Turnstile (ingyenes, láthatatlan captcha) vagy
 * Cloudflare Rate Limiting szabály a Worker route-jára. Szólj, és segítek beállítani.
 */

const ALLOWED_ORIGINS = [
  'https://tpatrikjanos-create.github.io',
  'https://fontosnap.hu',
  'https://www.fontosnap.hu',
];

const MODEL = 'claude-haiku-4-5-20251001';
const MAX_TOKENS = 400;

function corsHeaders(origin) {
  const allowed = ALLOWED_ORIGINS.includes(origin);
  return {
    'Access-Control-Allow-Origin': allowed ? origin : 'null',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json',
  };
}

function jsonResponse(obj, status, headers) {
  return new Response(JSON.stringify(obj), { status, headers });
}

function buildPrompt(body) {
  const context = String(body.context || '').slice(0, 300);
  const currentText = String(body.currentText || '').slice(0, 2000).trim();
  const lang = body.lang === 'en' ? 'en' : 'hu';
  const names = String(body.names || '').slice(0, 100).trim();
  const date = String(body.date || '').slice(0, 60).trim();
  const venue = String(body.venue || '').slice(0, 120).trim();
  const short = !!body.short;
  const langName = lang === 'en' ? 'English' : 'Hungarian';

  const facts = `The couple's names: ${names || '(not given)'}. Wedding date: ${date || '(not given)'}. Venue: ${venue || '(not given)'}.`;
  const lengthNote = short
    ? 'IMPORTANT: this field holds a SHORT phrase or headline, not a paragraph — reply with at most 8 words, no full sentence.'
    : 'Keep it a natural length for this kind of field (usually one to a few sentences, or a short list if the field is a list).';

  if (currentText) {
    return `You are helping write text for a light-hearted, humorous mock wedding newspaper. The field you're writing for is: ${context}. ${facts}

Here is the couple's current draft text for this field:
"""${currentText}"""

Rewrite/polish this text: make it warmer, more festive and celebratory in tone, and fix any spelling or grammar issues — but KEEP the original meaning. ${lengthNote} Reply in ${langName}. Reply with ONLY the rewritten text — no quotes, no preamble, no explanation.`;
  }
  return `You are helping write text for a light-hearted, humorous mock wedding newspaper. The field you're writing for is: ${context}. ${facts}

Write a warm, festive, celebratory piece of text for this field, from the couple's own perspective. ${lengthNote} Reply in ${langName}. Reply with ONLY the text — no quotes, no preamble, no explanation.`;
}

export default {
  async fetch(request, env) {
    const origin = request.headers.get('Origin') || '';
    const headers = corsHeaders(origin);

    if (request.method === 'OPTIONS') {
      return new Response(null, { headers });
    }
    if (request.method !== 'POST') {
      return jsonResponse({ error: 'Method not allowed' }, 405, headers);
    }
    if (!ALLOWED_ORIGINS.includes(origin)) {
      return jsonResponse({ error: 'Forbidden origin' }, 403, headers);
    }
    if (!env.ANTHROPIC_API_KEY) {
      return jsonResponse({ error: 'Server misconfigured: missing ANTHROPIC_API_KEY' }, 500, headers);
    }

    let body;
    try {
      body = await request.json();
    } catch (e) {
      return jsonResponse({ error: 'Invalid JSON body' }, 400, headers);
    }

    const prompt = buildPrompt(body);

    let aiRes;
    try {
      aiRes = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': env.ANTHROPIC_API_KEY,
          'anthropic-version': '2023-06-01',
        },
        body: JSON.stringify({
          model: MODEL,
          max_tokens: MAX_TOKENS,
          messages: [{ role: 'user', content: prompt }],
        }),
      });
    } catch (e) {
      return jsonResponse({ error: 'Network error reaching AI provider' }, 502, headers);
    }

    if (!aiRes.ok) {
      const detail = await aiRes.text().catch(() => '');
      return jsonResponse({ error: 'AI request failed', detail: detail.slice(0, 300) }, 502, headers);
    }

    const aiJson = await aiRes.json();
    const text = aiJson && aiJson.content && aiJson.content[0] && aiJson.content[0].text
      ? aiJson.content[0].text.trim()
      : '';

    if (!text) {
      return jsonResponse({ error: 'Empty AI response' }, 502, headers);
    }

    return jsonResponse({ text }, 200, headers);
  },
};
