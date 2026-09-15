# Portfolio admin backend (Cloudflare Worker)

This tiny free Worker makes the admin editor **actually secure and actually persistent**:

- Your password is verified **on Cloudflare's servers**, never shipped in the page. There is no PIN or password anywhere in the site source to read or bypass.
- Login returns a short-lived **signed session token** (HMAC‑SHA256). A browser can't forge it.
- Content you save is stored in **Workers KV** and served to every visitor — so edits publish for real, instead of only living in your own browser.

Your site stays exactly where it is on GitHub Pages. It just talks to this Worker.

---

## One-time setup (~15 minutes)

You need [Node.js](https://nodejs.org) installed. All commands below are run **from inside this `worker/` folder**.

### 1. Create a free Cloudflare account
Sign up at <https://dash.cloudflare.com/sign-up>. No card, no paid plan — the free Workers tier (100,000 requests/day) is far more than a personal site needs.

### 2. Log in from your machine
```bash
npx wrangler login
```
This opens a browser to authorize Wrangler (Cloudflare's CLI). No install step needed — `npx` fetches it.

### 3. Create the KV namespace (where content is stored)
```bash
npx wrangler kv namespace create PORTFOLIO_KV
```
It prints something like:
```
[[kv_namespaces]]
binding = "PORTFOLIO_KV"
id = "abc123def456..."
```
Copy that **`id`** value into `wrangler.toml`, replacing `REPLACE_WITH_YOUR_KV_NAMESPACE_ID`.

### 4. Set your admin password (kept as an encrypted secret)
```bash
npx wrangler secret put ADMIN_PASSWORD
```
It prompts you to type the password. Pick a strong one — it is never stored in any file, only encrypted in Cloudflare. Change it anytime by running this command again.

### 5. Deploy
```bash
npx wrangler deploy
```
On success it prints your Worker URL, e.g.:
```
https://portfolio-admin.YOUR-SUBDOMAIN.workers.dev
```
Copy that URL.

### 6. Point the site at the Worker
Open `../data.js`, find this line near the top:
```js
const API_BASE = '';
```
and set it to your Worker URL (no trailing slash):
```js
const API_BASE = 'https://portfolio-admin.YOUR-SUBDOMAIN.workers.dev';
```
Commit and push. That's it.

---

## How it behaves

- **`API_BASE` empty** → the site runs fully static from the seed data in `data.js`, and the admin page shows "backend not configured" (no editing, nothing to attack).
- **`API_BASE` set** → visiting `admin.html`, entering your password, logging in, and editing all go through the Worker. Saves publish to KV and appear for all visitors.

## Notes

- **CORS is locked** to the origin in `wrangler.toml` (`ALLOWED_ORIGIN`). If you ever move to a custom domain, update that value and redeploy.
- **KV is eventually consistent** — a fresh edit can take up to ~60 seconds to appear worldwide. Fine for a portfolio.
- **Rotating the password** (`wrangler secret put ADMIN_PASSWORD` again) signs out existing sessions, because the password is also the token-signing key. That's intended.
- **Sessions** last 8 hours, then you log in again. Change `TOKEN_TTL_SECONDS` in `src/worker.js` to adjust.
- **Backups**: the admin panel's *Export All JSON* button downloads your full content anytime.

## Local test (optional)
```bash
echo "ADMIN_PASSWORD=test-password" > .dev.vars
npx wrangler dev
```
Then temporarily point `API_BASE` at the printed `http://localhost:8787` to try it before deploying.
