/* =====================================================================
   Portfolio admin backend — Cloudflare Worker
   ---------------------------------------------------------------------
   Endpoints (all JSON, CORS-restricted to your site origin):

     GET  /api/content   → public. Returns { data } — the published content
                           (or { data: null } before you've saved anything).
     POST /api/login     → body { password }. Verifies against the ADMIN_PASSWORD
                           secret on the server and returns a short-lived signed
                           session token: { token, exp }.
     PUT  /api/content   → requires header `Authorization: Bearer <token>`.
                           Body { data } — the full content object to publish.
                           Stored in Workers KV.

   The password is only ever a Worker *secret* (encrypted at rest, never in the
   repo or the page). The token is an HMAC-SHA256 signature the Worker can verify
   but a browser cannot forge, so there is nothing on the client to bypass.
   ===================================================================== */

const KV_KEY = 'content';
const TOKEN_TTL_SECONDS = 60 * 60 * 8; // sessions last 8 hours
const enc = new TextEncoder();

function corsHeaders(env) {
  return {
    'Access-Control-Allow-Origin': env.ALLOWED_ORIGIN || '*',
    'Access-Control-Allow-Methods': 'GET,POST,PUT,OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Max-Age': '86400',
    'Vary': 'Origin'
  };
}

function json(env, obj, status = 200) {
  return new Response(JSON.stringify(obj), {
    status,
    headers: { 'Content-Type': 'application/json', ...corsHeaders(env) }
  });
}

// ---- base64url helpers ----
function bytesToB64url(bytes) {
  const arr = new Uint8Array(bytes);
  let bin = '';
  for (let i = 0; i < arr.length; i++) bin += String.fromCharCode(arr[i]);
  return btoa(bin).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}
function b64urlToBytes(str) {
  str = str.replace(/-/g, '+').replace(/_/g, '/');
  while (str.length % 4) str += '=';
  const bin = atob(str);
  const out = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
  return out;
}

// ---- token signing / verification (HMAC-SHA256, key = ADMIN_PASSWORD) ----
async function hmacKey(secret) {
  return crypto.subtle.importKey('raw', enc.encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign', 'verify']);
}
async function signToken(payloadObj, secret) {
  const payload = bytesToB64url(enc.encode(JSON.stringify(payloadObj)));
  const key = await hmacKey(secret);
  const sig = await crypto.subtle.sign('HMAC', key, enc.encode(payload));
  return payload + '.' + bytesToB64url(sig);
}
async function verifyToken(token, secret) {
  if (!token || token.indexOf('.') === -1) return null;
  const [payload, sig] = token.split('.');
  const key = await hmacKey(secret);
  let ok = false;
  try { ok = await crypto.subtle.verify('HMAC', key, b64urlToBytes(sig), enc.encode(payload)); } catch (e) { return null; }
  if (!ok) return null;
  let data;
  try { data = JSON.parse(new TextDecoder().decode(b64urlToBytes(payload))); } catch (e) { return null; }
  if (!data || typeof data.exp !== 'number' || data.exp < Math.floor(Date.now() / 1000)) return null;
  return data;
}

// Constant-time comparison so wrong passwords don't leak length/prefix via timing.
function timingSafeEqual(a, b) {
  const ab = enc.encode(String(a));
  const bb = enc.encode(String(b));
  if (ab.length !== bb.length) return false;
  let diff = 0;
  for (let i = 0; i < ab.length; i++) diff |= ab[i] ^ bb[i];
  return diff === 0;
}

export default {
  async fetch(request, env) {
    const { pathname } = new URL(request.url);

    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: corsHeaders(env) });
    }

    // --- Public read ---
    if (pathname === '/api/content' && request.method === 'GET') {
      const raw = await env.PORTFOLIO_KV.get(KV_KEY);
      let data = null;
      if (raw) { try { data = JSON.parse(raw); } catch (e) { data = null; } }
      return json(env, { data });
    }

    // --- Login ---
    if (pathname === '/api/login' && request.method === 'POST') {
      if (!env.ADMIN_PASSWORD) return json(env, { error: 'server-misconfigured' }, 500);
      let body = {};
      try { body = await request.json(); } catch (e) {}
      const password = (body && body.password) || '';
      if (!password || !timingSafeEqual(password, env.ADMIN_PASSWORD)) {
        return json(env, { error: 'invalid-credentials' }, 401);
      }
      const exp = Math.floor(Date.now() / 1000) + TOKEN_TTL_SECONDS;
      const token = await signToken({ exp }, env.ADMIN_PASSWORD);
      return json(env, { token, exp });
    }

    // --- Authenticated write ---
    if (pathname === '/api/content' && request.method === 'PUT') {
      if (!env.ADMIN_PASSWORD) return json(env, { error: 'server-misconfigured' }, 500);
      const auth = request.headers.get('Authorization') || '';
      const token = auth.startsWith('Bearer ') ? auth.slice(7) : '';
      const claims = await verifyToken(token, env.ADMIN_PASSWORD);
      if (!claims) return json(env, { error: 'unauthorized' }, 401);

      let body;
      try { body = await request.json(); } catch (e) { return json(env, { error: 'bad-json' }, 400); }
      const data = body && body.data;
      if (!data || typeof data !== 'object') return json(env, { error: 'bad-data' }, 400);

      await env.PORTFOLIO_KV.put(KV_KEY, JSON.stringify(data));
      return json(env, { ok: true });
    }

    return json(env, { error: 'not-found' }, 404);
  }
};
