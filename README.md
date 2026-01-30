# VetPulse

A veterinary market intelligence platform built with Astro + Strapi.

## How to Run Locally

### Frontend

```bash
cd vetpulse-astro
npm install
echo "STRAPI_URL=http://localhost:1337" > .env.local
npm run dev
```

Visit `http://localhost:3000`

### Backend

```bash
cd strapi-backend
npm install
npm run develop
```

Visit `http://localhost:1337/admin`

### Docker (Optional)

```bash
docker-compose up --build
```

## Blog Architecture

- Posts stored in Strapi CMS
- Fetched at build time via `/api/posts`
- Static HTML generated for each post at `src/pages/blog/[slug].astro`
- Uses `getStaticPaths()` to pre-render all posts
- Markdown content rendered with `marked` library
- Images handled via `getStrapiMedia()` utility

## Contact Flow

1. User fills form on `/contact` page
2. Form validates client-side
3. POST to `/api/contact` endpoint
4. Server validates with Zod schema
5. Email sent via Resend
6. Response returned to client
7. Success/error message displayed

## Known Limitations

- **Blog requires rebuild** - New posts don't appear until `npm run build`
- **No image optimization** - Images served directly from Strapi
- **Contact form email** - Requires Resend API key for production
- **No on-demand ISR** - Static generation only at build time
- **Local Strapi only** - Backend runs locally, not deployed

---

**Stack:** Astro + Strapi + PostgreSQL + Docker
