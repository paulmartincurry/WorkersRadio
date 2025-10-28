# Workers Lofi Radio

A minimal, free tier web app for a 24/7 global lofi radio stream built with Next.js and
Tailwind CSS. This project is designed to be hosted on Vercel and uses Supabase
(free plan) as its data store. It demonstrates the core pieces of a radio station
site—stream player, now playing card, ticker, request form, schedule, library,
about page and an admin placeholder—without requiring paid services or long‑running
servers.

## Getting Started

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Set up Supabase**

   - Create a free project at [supabase.com](https://supabase.com/).
   - Open the SQL editor and run the statements in `supabase.sql` to create the
     necessary tables.

3. **Configure environment variables**

   Copy `.env.example` to `.env.local` and fill in the values:

   - `NEXT_PUBLIC_YOUTUBE_EMBED_URL` – the embed URL for your YouTube Live stream
     (include `?autoplay=1&mute=1` if desired).
   - `SITE_TITLE` – the name of your site (e.g. “Workers Lofi Radio”).
   - `TAGLINE` – a short description shown in metadata.
   - `ADMIN_SECRET` – a long random string used for admin authentication in a full
     implementation (unused in the minimal version).
   - `SUPABASE_URL` – your Supabase project URL.
   - `SUPABASE_SERVICE_ROLE_KEY` – your Supabase service role key (used for server
     writes in an expanded version).

4. **Run the development server**

   ```bash
   npm run dev
   ```

   The app will start on [http://localhost:3000](http://localhost:3000).

## Features

- **Home page** – Shows the embedded YouTube stream, a Now Playing card and a
  scrolling ticker. Placeholder content is used by default.
- **Request form** – Collects name, city and a message from listeners. In the
  minimal version the data is not persisted; integrate an API route and Supabase
  table to store requests.
- **Schedule** – Lists the eight regional blocks that rotate through the 24‑hour
  stream.
- **Library** – A small curated list of resources about labor movements. Extend
  this page with your own articles, songs and links.
- **About** – Describes the project’s mission and goals.
- **Admin** – Placeholder page describing future admin features (approving
  requests, managing the ticker and updating the now playing info).

## Deploying to Vercel

1. Push this repository to GitHub (or another Git provider).
2. In Vercel, choose “Import Project” and select your repository.
3. In the Vercel dashboard, define the environment variables from
   `.env.example` in the project settings.
4. Deploy. The build should complete quickly since there are no external
   dependencies.

## Notes

- This minimal version does not implement Supabase interactions or admin
  functionality. The structure and file layout are designed so that you can
  incrementally add server actions and database queries as you grow the
  project.
- See the accompanying planning document for guidance on expanding this
  project with cron jobs, AI features and a full admin dashboard.
- Feel free to change the colour palette and typography by editing
  `tailwind.config.js`.
