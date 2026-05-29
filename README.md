This is a Next.js portfolio structure for showcasing projects, proof images, certifications, skills, and contact links.

## Folder Structure

```txt
src/
  app/
    api/
      projects/route.ts
      certifications/route.ts
      contact/route.ts
    page.tsx
    projects/
      page.tsx
      [slug]/page.tsx
    certifications/page.tsx
    contact/page.tsx
  components/
    layout/
    sections/
    ui/
  content/
    certifications.ts
    projects.ts
    site.ts
    skills.ts
  lib/
    portfolio-data.ts
    supabase/
  types/
    database.ts
    portfolio.ts
supabase/
  schema.sql
public/
  images/
    profile/
    projects/
    certifications/
  documents/
```

## Edit Your Content

- Update your name, email, location, and links in `src/content/site.ts`.
- Add project case studies and proof images in `src/content/projects.ts`.
- Add certificates in `src/content/certifications.ts`.
- Place project screenshots in `public/images/projects/`.
- Place certificate images in `public/images/certifications/`.
- Place your resume at `public/documents/resume.pdf`.

## Node.js API Routes

- `GET /api/projects` returns all project case studies from Supabase, with local fallback data when Supabase is not configured.
- `GET /api/certifications` returns all certificate records from Supabase, with local fallback data when Supabase is not configured.
- `POST /api/contact` stores contact form messages in Supabase.

## Supabase Setup

1. Create a Supabase project.
2. Run `supabase/schema.sql` in the Supabase SQL editor.
3. Copy `.env.example` to `.env.local`.
4. Fill in:

```bash
NEXT_PUBLIC_SUPABASE_URL=your-project-url
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=your-publishable-key
SUPABASE_SECRET_KEY=your-secret-key
```

Keep `SUPABASE_SECRET_KEY` server-only. It is used by the contact API route to save messages while keeping message reads private. Legacy `SUPABASE_SERVICE_ROLE_KEY` also works.

## Getting Started

Run the development server:

```bash
npm run dev
```

Open http://localhost:3000 in your browser.
