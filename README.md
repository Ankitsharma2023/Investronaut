# 🚀 Investronaut

**AI-powered startup–investor matchmaking.** Describe your startup in plain English and
Investronaut returns a ranked shortlist of investors that would realistically fund it —
with the reasoning behind each match.

---

## 🔍 Key Features

- 🧠 **AI matchmaking** — type your idea (any phrasing) and get the 6 most relevant investors, ranked best-fit first.
- ❓ **Smart clarifying questions** — if your input is too thin, the terminal asks a few MCQ-style questions (stage, geography, team size) before searching.
- 💡 **"Reason" per investor** — one click explains *why* each investor fits, with key terms highlighted.
- ➕ **Load more** — keep paginating through ranked matches until there are no more strong fits.
- 🔐 **Firebase Authentication** — Email/Password + Google sign-in.
- 📝 **Feedback form** — collects user feedback via Web3Forms.

---

## 🛠️ Tech Stack

- **Next.js 15** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS 4**
- **Firebase Authentication** (Email/Password + Google)
- **OpenAI API** — server-side, powers the matchmaking and reasoning (`/api/find_investors`, `/api/explain`)
- **Web3Forms** — feedback submissions
- **Vercel** — hosting

---

## ⚡ Quick Start

Requirements: **Node.js 20+**.

```bash
npm install
cp .env.example .env.local      # then add your OpenAI key inside
npm run dev                     # http://localhost:3000
```

`.env.local`:

```
OPENAI_API_KEY=sk-...
```

> Get a key at https://platform.openai.com/api-keys

See **[HANDOFF.md](./HANDOFF.md)** for full setup, GitHub, and Vercel deployment steps.

---

## 📁 Project Structure

- `app/` — routes (home, customers, documentation, results, auth) + API routes
- `app/api/find_investors` — matchmaking endpoint (validate → ask / match)
- `app/api/explain` — per-investor reasoning endpoint
- `app/firebase/` — Firebase config and auth helpers
- `components/` — UI (terminal input, investor cards, testimonials, footer, etc.)
- `public/logos/` — bundled brand logos

---

## 📝 Notes

- Investor matches are **AI-generated** (no fixed dataset) — use them as research starting points.
- The API routes are currently **public and not rate-limited**; add auth/rate-limiting before a real public launch.

---

Built to simplify startup–investor discovery with AI 🚀
