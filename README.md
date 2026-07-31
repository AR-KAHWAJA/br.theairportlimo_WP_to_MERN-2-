# BlinkRide (MERN)

A MERN rebuild of the br.theairportlimo.com WordPress/Elementor site — same 10 pages, copy, images, and colors, running on React + Express + MongoDB instead of WordPress.

## Project structure

```
blinkride-mern/
├── client/                     React + Vite frontend
│   ├── public/
│   │   └── images/             All site images (referenced as static assets)
│   ├── src/
│   │   ├── components/         Shared components (Header, Footer, Hero, section components, etc.)
│   │   ├── pages/               One file per route (Home, Services, Drivers, Customers,
│   │   │                        Affiliates, AboutUs, Fleet, ContactUs, ContactUs2, GetTheApp, NotFound)
│   │   ├── config/
│   │   │   └── site.js          Single source of truth for contact info, branding, and app store links
│   │   ├── styles/               global.css / tokens.css (shared tokens + base styles)
│   │   ├── api.js                Client-side HTTP layer for the two form endpoints
│   │   └── App.jsx               Route definitions
│   ├── index.html
│   └── vite.config.js
├── server/                     Express + Mongoose API
│   ├── src/
│   │   ├── config/
│   │   │   ├── db.js            MongoDB connection
│   │   │   └── mailer.js        Nodemailer notification emails (with BCC support)
│   │   ├── models/               Booking.js, ContactMessage.js
│   │   ├── routes/               bookings.js (POST /api/bookings), contact.js (POST /api/contact)
│   │   ├── app.js                Express app (serves the built client in production)
│   │   └── index.js              Entry point
│   ├── .env.example
│   └── .env                     Your local secrets — not committed (see Setup below)
├── package.json                 Root workspace scripts (npm run dev / build / start)
└── CLAUDE.md                    Notes for AI coding agents working in this repo
```

## Setup

1. `npm install` (installs both workspaces from the root)
2. Copy `server/.env.example` to `server/.env` and fill in:
   - `MONGODB_URI` — a MongoDB connection string. A free [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) cluster works well; no local MongoDB install is required.
   - `SMTP_HOST` / `SMTP_PORT` / `SMTP_USER` / `SMTP_PASS` / `NOTIFY_EMAIL` — optional. If left blank, form submissions still save to MongoDB, they just won't trigger an email notification.
   - `NOTIFY_BCC` — optional, comma-separated. BCC'd on every notification email.
3. `npm run dev` — runs the React dev server (http://localhost:5173) and the Express API (http://localhost:4000) together.

Without a valid `MONGODB_URI`, the API still starts but logs a warning and form submissions return a 503 (database not connected). Without SMTP credentials, submissions still save to MongoDB, they just skip the notification email — this is expected until real credentials are added to `server/.env`.

## Production

- `npm run build` — builds the React app into `client/dist`
- `npm start` — runs Express in production mode, serving the built client and the API from one process (set `NODE_ENV=production`)

## Forms

- Home page booking form → `POST /api/bookings`
- Contact Us form → `POST /api/contact`

Both save to MongoDB and are set up to send an email notification (with optional BCC) if SMTP is configured.

## Site-wide configuration

`client/src/config/site.js` centralizes contact details, branding, and app store links — edit that one file to change the phone number, email (+ CC list), address, logo, favicon, or iOS/Android store links everywhere on the site at once.
