# Luchetti Auto - Premium Dealership Platform

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen.svg)](https://luchettiauto.com)

A fast, serverless, and GDPR-compliant digital showroom designed for car sales.

## Architecture Overview

This project addresses the common issues faced by dealership websites, such as slow load times, bulky WordPress themes, and a high risk of attacks.

Rather than relying on a large content management system, this platform features a decoupled design. It combines a fully optimized static frontend with a highly secure, serverless Supabase (PostgreSQL) backend. This setup guarantees instant page loads, excellent local SEO rankings, and no database maintenance for the client.

## Features
*   **Public Showroom:** Dynamic rendering of available inventory directly from the database.
*  [ **Custom Admin Dashboard:**](https://github.com/lucaa3/luchettiauto-dashboard) A secured, hidden route for the dealership owner to perform full CRUD operations (add cars, update pricing, upload images, remove sold inventory) without writing code.

## Tech Stack
*   **Frontend:** HTML5, CSS3 (Bootstrap 4), Vanilla JavaScript
*   **Backend, Database & API:** Supabase (PostgreSQL)
*   **Infrastructure & CDN:** Cloudflare (DNS management, caching, edge delivery)

## Performance and SEO
Built to deliver high performance and rank efficiently in local search results.
*   **Lightning Fast:** By removing heavy JavaScript frameworks and tracking bloat, the site achieves near-instant Time to Interactive (TTI).
*   **Extreme Media Optimization:** Features a 1080p hero background video aggressively compressed to just **~2.5 MB**, ensuring a premium visual experience without sacrificing loading speeds.
*   **Localized SEO:** Implements strict `<html lang="it">` tagging, Open Graph meta tags, and JSON-LD schema for Local Business, explicitly mapping the physical dealership to Google Maps crawlers. 

## Security First (Zero-Trust Backend)
The backend is completely locked down against malicious actors and injection attacks.
*   **Immune to SQL Injection:** Database interactions are handled via Supabase's PostgREST API, meaning all inputs from the custom admin dashboard are strictly parameterized.
*   **Row Level Security (RLS):** Read/Write access is strictly enforced at the database level. The public API can only `SELECT` vehicles. Only authenticated sessions with a verified `auth.uid()` can execute `INSERT`, `UPDATE`, or `DELETE` commands.
*   **Closed Ecosystem:** Public user registration is explicitly disabled at the auth-provider level to prevent fake account generation and brute-force API attacks.

## Privacy and Compliance (GDPR)
*   **Zero-Tracker Footprint:** The application was built without invasive third-party tracking scripts, Google Analytics, or Meta Pixels.
*   **Cookie-Free:** Operates entirely without non-essential cookies, completely eliminating the need for UX-ruining cookie consent banners while remaining 100% compliant with EU data privacy laws.

## Local Setup
To run this project locally:
1. Clone the repository: `git clone https://github.com/lucaa3/luchettiauto.git`
2. Open the project folder and launch a local live server (e.g., VS Code Live Server extension).
3. *Note:* You will need to supply your own Supabase URL and Anon Key in the config file to interact with the database.
