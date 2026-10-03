# AdsOptima

Marketing site and customer dashboard for **AdsOptima**, a PPC management product. It's built with Next.js 14 (App Router), React 18, Tailwind CSS v4 and PostgreSQL.

## Features

- **Marketing site:** home, 21 solution pages, pricing, blog, case studies, comparisons, webinars and labs. It works on phones, tablets and desktops.
- **Accounts:** sign-up with automatic sign-in, sign-in, and sign-out. Passwords are hashed with bcrypt, and sessions are signed JWTs stored in an httpOnly cookie.
- **Dashboard:** setup checklist, trial status, ad-account connection requests, profile editing and password changes.
- **Contact and demo requests:** a validated form whose requests are stored in PostgreSQL.
- **Protection:** route guarding in middleware, safe post-login redirects, rate limiting on sign-in, sign-up, password and contact endpoints, a honeypot field on the contact form, and case-insensitive unique emails.

## Requirements

- Node.js 18.18 or newer
- PostgreSQL 12 or newer

## Getting started

```bash
# 1. Install dependencies
npm install

# 2. Configure the environment
cp .env.example .env.local      # then edit DATABASE_URL and JWT_SECRET

# 3. Create the database and its tables
createdb adsoptima               # or: CREATE DATABASE adsoptima;
npm run setup:db

# 4. Start the dev server
npm run dev                      # http://localhost:7000
```

You can run `npm run setup:db` as often as you like. It creates any missing tables and indexes and never drops data.

## Scripts

| Command            | Description                                  |
| ------------------ | -------------------------------------------- |
| `npm run dev`      | Start the development server on port 7000    |
| `npm run build`    | Create a production build                    |
| `npm run start`    | Serve the production build on port 7000      |
| `npm run setup:db` | Create or upgrade the database schema        |

## Environment variables

| Variable               | Required | Description                                                         |
| ---------------------- | -------- | ------------------------------------------------------------------- |
| `DATABASE_URL`         | Yes      | PostgreSQL connection string                                        |
| `JWT_SECRET`           | Yes      | Session signing secret. At least 32 characters in production        |
| `DATABASE_SSL`         | No       | `true` to connect over SSL (most hosted databases need this)        |
| `DATABASE_POOL_MAX`    | No       | Maximum pooled connections (default `10`)                           |
| `NEXT_PUBLIC_SITE_URL` | No       | Public site URL used in metadata (default `http://localhost:7000`)  |

## API

All endpoints accept and return JSON. Errors use the shape `{ "error": "message", "fields": { "field": "message" } }`. The `fields` part is included when individual inputs fail validation.

| Method  | Path                 | Auth | Description                                                                     |
| ------- | -------------------- | ---- | ------------------------------------------------------------------------------- |
| `POST`  | `/api/signup`        |      | Create an account and sign in. Body: `email`, `password`, `firstName?`, `lastName?` |
| `POST`  | `/api/signin`        |      | Sign in. Body: `email`, `password`                                              |
| `POST`  | `/api/signout`       |      | Clear the session cookie                                                        |
| `GET`   | `/api/session`       |      | `{ authenticated, user? }`, read from the token only (no database query)        |
| `GET`   | `/api/user`          | ✓    | Current user's profile                                                          |
| `PATCH` | `/api/user`          | ✓    | Update `firstName` and/or `lastName`                                            |
| `POST`  | `/api/user/password` | ✓    | Change password. Body: `currentPassword`, `newPassword`                         |
| `POST`  | `/api/contact`       |      | Submit a sales, demo, onboarding, support or partnership request                |
| `GET`   | `/api/health`        |      | Health probe: `200 { status: "ok" }` or `503` when the database is down         |

Authenticated endpoints read the `auth-token` cookie. Non-browser clients can send `Authorization: Bearer <token>` instead.

Rate limits are kept in server memory, so each server instance counts separately. Behind several instances, move them to a shared store such as Redis (see `src/lib/rate-limit.js`).

## Project structure

```
src/
├── app/
│   ├── api/             # Route handlers (auth, user, contact, health)
│   ├── contact/         # Contact and demo request page
│   ├── dashboard/       # Signed-in area (server-rendered)
│   ├── signin/, signup/ # Auth pages
│   ├── solutions/       # Product and solution pages
│   └── ...              # Other marketing pages
├── components/
│   ├── auth/            # Auth layout and sign-in form
│   ├── dashboard/       # Dashboard UI
│   ├── forms/           # Shared form inputs, buttons and alerts
│   └── ...              # Marketing sections
├── lib/
│   ├── db.js            # PostgreSQL pool and query helper
│   ├── session.js       # Session token signing and verification (Edge-safe)
│   ├── auth.js          # Password hashing and session cookie helpers
│   ├── validation.js    # Validation shared by the browser and the server
│   └── rate-limit.js    # In-memory rate limiter
└── middleware.js        # Protects /dashboard and redirects signed-in users away from the auth pages
scripts/setup-db.js      # Schema setup
```

## License

Proprietary. All rights reserved.
