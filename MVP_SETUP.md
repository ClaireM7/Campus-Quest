# Campus Quest MVP Setup

## Stack

- `Vite + React`
- `Supabase Auth`
- `Supabase Postgres`
- static demo pages in `public/app-demo.html` and `public/web-demo.html`

## Local Run

1. Install dependencies

```bash
npm install
```

2. Create env file

```bash
cp .env.example .env
```

3. Fill in:

- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`

4. Start dev server

```bash
npm run dev
```

## MVP Scope

This project currently supports:

- landing page with product intro
- entry to app demo and web demo
- login modal
- fallback local demo login when Supabase env is missing
- Supabase-ready client setup
- starter SQL schema for user/profile/progress/task/badge/play tables

## Recommended Next Steps

1. Create Supabase project
2. Run `src/lib/schema.sql`
3. Enable email magic link login
4. Replace local demo progress with real reads/writes:
   - homepage task completion
   - map task completion
   - badge progress
   - play joins
5. Deploy to Vercel

## Notes

- The original single-file prototypes are preserved in:
  - `Campus Quest.html`
  - `Campus Quest Web.html`
  - `public/legacy-home.html`
- The Vite app uses `public/app-demo.html` and `public/web-demo.html` as embedded demo targets for now.
