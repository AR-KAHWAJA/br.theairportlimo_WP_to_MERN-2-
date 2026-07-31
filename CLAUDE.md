# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

BlinkRide is a MERN rebuild of the br.theairportlimo.com WordPress/Elementor site — same 10 pages, copy, images, and colors, running on React + Express + MongoDB instead of WordPress. It's an npm workspaces monorepo with two packages: `client/` (React + Vite) and `server/` (Express + Mongoose).

## Commands

Run from the repo root unless noted:

- `npm install` — installs both workspaces
- `npm run dev` — runs client (Vite, http://localhost:5173) and server (nodemon, http://localhost:4000) together via `concurrently`
- `npm run build` — builds the client into `client/dist`
- `npm start` — runs Express in production mode (set `NODE_ENV=production`), serving the built client and API from one process

Per-workspace (from `client/` or `server/`, or via `-w client` / `-w server` from root):
- `npm run dev -w client` — Vite dev server only
- `npm run dev -w server` — nodemon on `server/src/index.js` only
- `npm run build -w client` — Vite production build

There is no test suite and no lint config in this repo currently.

### Server environment

Copy `server/.env.example` to `server/.env` before running the server:
- `MONGODB_URI` — MongoDB connection string (Atlas free tier recommended; no local mongod). Without it, the API still starts but form submissions fail to save.
- `PORT` — Express port (default 4000)
- `SMTP_HOST` / `SMTP_PORT` / `SMTP_USER` / `SMTP_PASS` / `NOTIFY_EMAIL` — optional; without these, submissions still save to MongoDB but skip the notification email.

## Architecture

### Client (`client/`)
- Vite + React 18, routed with `react-router-dom` (`BrowserRouter` assumed to be set up in `main.jsx`).
- `src/App.jsx` defines all top-level routes, each mapping directly to a page in `src/pages/` (Home, Services, Customers, Drivers, Affiliates, AboutUs, Fleet, ContactUs, ContactUs2, GetTheApp, NotFound catch-all). `Header` and `Footer` wrap every route.
- `src/components/` holds shared, mostly presentational pieces (one `.jsx` + matching `.css` per component — styles are not co-located in CSS modules, just plain per-component stylesheets).
- `src/api.js` is the single client-side HTTP layer: a `request()` helper that calls `/api/*` (proxied to the Express server by Vite in dev, see `vite.config.js`) and throws on non-OK responses using the server's `message` field. `submitBooking()` and `submitContact()` are the only two API calls in the app — add new endpoints here rather than calling `fetch` directly from components.
- `LocationAutocomplete.jsx` is the address-search input used in booking/contact forms. It queries the public Photon (Komoot) geocoding API directly from the browser (no server involvement, no API key), biased toward Pakistan coordinates (`lat=30.3753&lon=69.3451`), and reports back `{ address, latitude, longitude }` via `onChange`.
- Images live in `client/public/images` and are referenced as static assets (WordPress-exported filenames, kept as-is for parity with the original site).

### Server (`server/`)
- Express app assembled in `src/app.js`, entry point in `src/index.js` (loads `dotenv`, connects to MongoDB via `src/config/db.js`, then starts listening).
- Two REST resources, each with router + Mongoose model:
  - `POST /api/bookings` (`src/routes/bookings.js`, `src/models/Booking.js`)
  - `POST /api/contact` (`src/routes/contact.js`, `src/models/ContactMessage.js`)
  - Both routes follow the same pattern: validate a `REQUIRED_FIELDS` list → 400 if missing → check `mongoose.connection.readyState` → 503 if DB not connected → create the document → fire-and-forget `sendNotificationEmail()` (not awaited, so email failures never fail the request) → 201 with the saved document.
- `GET /api/health` is a plain liveness check.
- `src/config/mailer.js` lazily builds a single Nodemailer transporter from `SMTP_*` env vars; if they're not all set, `sendNotificationEmail()` no-ops with a console warning instead of throwing.
- In production (`NODE_ENV=production`), `app.js` serves the built client from `client/dist` and falls back to `index.html` for any non-API route (SPA history fallback), so the same Express process serves both the API and the frontend.

### Adding a new form/endpoint
Follow the existing booking/contact pattern: define a Mongoose schema in `src/models/`, a router in `src/routes/` with a `REQUIRED_FIELDS` guard and the DB-readyState check, mount it in `src/app.js`, and add a corresponding function in `client/src/api.js` for the frontend to call.
