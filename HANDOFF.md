# Investronaut — Setup & Deployment Guide

AI-powered startup–investor matchmaking. **Next.js 15 + React 19 + Tailwind 4 + Firebase Auth + OpenAI.**

---

## 1. Run it on your laptop

Requirements: **Node.js 20+** and npm.

```bash
# 1. install dependencies
npm install

# 2. create your local env file (NOT committed)
cp .env.example .env.local
#    then edit .env.local and paste a real OpenAI key:
#    OPENAI_API_KEY=sk-...

# 3. start the dev server
npm run dev
```

Open **http://localhost:3000** (it uses 3001 if 3000 is busy).

> Get an OpenAI key at https://platform.openai.com/api-keys

---

## 2. What's already wired up

- **Firebase Auth** — config is in `app/firebase/firebase.js`. Email/Password + Google
  sign-in are already enabled on the Firebase project. (Firebase web config is meant to
  be public — security is enforced by Firebase rules + Authorized Domains.)
- **OpenAI** — used by the API routes `app/api/find_investors` and `app/api/explain`.
  The key is read **server-side** from `OPENAI_API_KEY`; it never reaches the browser.
- **Feedback form** — uses Web3Forms (public access key, safe in client code); submissions
  email to the configured inbox.
- **Brand logos** — bundled locally in `public/logos/` (no runtime network calls).

---

## 3. Push to GitHub

```bash
git add .
git commit -m "Investronaut: Next.js app with OpenAI matchmaking"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo>.git
git push -u origin main
```

`.env.local` is gitignored, so **your OpenAI key will NOT be pushed** — good.

---

## 4. Deploy on Vercel

1. Go to https://vercel.com → **Add New → Project** → import the GitHub repo
   (auto-detected as Next.js).
2. **Settings → Environment Variables** → add `OPENAI_API_KEY` = your key
   (Production, Preview, Development).
3. Deploy.
4. **Firebase Console → Authentication → Settings → Authorized domains** → add your
   Vercel domain (e.g. `your-app.vercel.app`) so login works in production.

---

## 5. Important notes

- 🔴 **Rotate the OpenAI key** before going public if it was ever shared, and keep it only
  in `.env.local` / Vercel env vars.
- ⚠️ The API routes (`/api/find_investors`, `/api/explain`) are currently **public and not
  rate-limited**. Anyone who finds the URL could call them and spend OpenAI credits.
  Before a real public launch, add auth (require a logged-in Firebase user) and/or a rate
  limit.
- Investor matches are **AI-generated** (no fixed dataset) — treat them as research
  starting points, not verified facts.

---

## Useful scripts

```bash
npm run dev     # local dev
npm run build   # production build
npm run start   # serve the production build
npm run lint    # lint
```
