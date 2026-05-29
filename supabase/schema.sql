create extension if not exists pgcrypto;

create table if not exists public.projects (
  slug text primary key,
  title text not null,
  summary text not null,
  problem text not null,
  solution text not null,
  outcome text not null,
  role text not null,
  year text not null,
  stack text[] not null default '{}',
  image text not null,
  proof_images text[] not null default '{}',
  featured boolean not null default false,
  sort_order integer not null default 0,
  created_at timestamptz not null default now()
);

create table if not exists public.certifications (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  issuer text not null,
  issued text not null,
  credential_id text not null unique,
  image text not null,
  skills text[] not null default '{}',
  sort_order integer not null default 0,
  created_at timestamptz not null default now()
);

create table if not exists public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  subject text,
  message text not null,
  created_at timestamptz not null default now()
);

alter table public.projects enable row level security;
alter table public.certifications enable row level security;
alter table public.contact_messages enable row level security;

drop policy if exists "Public can read projects" on public.projects;
create policy "Public can read projects"
on public.projects
for select
to anon, authenticated
using (true);

drop policy if exists "Public can read certifications" on public.certifications;
create policy "Public can read certifications"
on public.certifications
for select
to anon, authenticated
using (true);

create index if not exists projects_featured_idx on public.projects (featured);
create index if not exists projects_sort_order_idx on public.projects (sort_order);
create index if not exists certifications_sort_order_idx on public.certifications (sort_order);
create index if not exists contact_messages_created_at_idx on public.contact_messages (created_at desc);

insert into public.projects (
  slug,
  title,
  summary,
  problem,
  solution,
  outcome,
  role,
  year,
  stack,
  image,
  proof_images,
  featured,
  sort_order
)
values
  (
    'inventory-dashboard',
    'Inventory Dashboard',
    'A stock monitoring dashboard with product records, low-stock alerts, and sales-ready reporting views.',
    'Small shops needed a clearer way to track products, quantities, and reorder signals without relying on scattered spreadsheets.',
    'The app organizes item records, highlights low inventory, and prepares summary views for daily operations.',
    'Improved visibility over stock movement and gave the owner a faster way to check what needs restocking.',
    'Full-stack',
    '2026',
    array['Next.js', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
    '/images/projects/inventory-dashboard.svg',
    array['/images/projects/inventory-dashboard-proof.svg', '/images/projects/inventory-dashboard.svg'],
    true,
    1
  ),
  (
    'certificate-vault',
    'Certificate Vault',
    'A personal credential archive for storing certificate images, issuer details, and verification links.',
    'Certificates were difficult to present consistently across resumes, applications, and portfolio pages.',
    'The project keeps credential details in structured data and displays proof images in a clean gallery.',
    'Made certificates easier to verify, update, and showcase from one organized source.',
    'Frontend',
    '2026',
    array['Next.js', 'TypeScript', 'Tailwind CSS', 'Content Data'],
    '/images/projects/certificate-vault.svg',
    array['/images/projects/certificate-vault-proof.svg', '/images/certifications/web-development.svg'],
    true,
    2
  ),
  (
    'campus-event-system',
    'Campus Event System',
    'An event listing and registration flow for student activities, attendance, and organizer updates.',
    'Students needed a single place to discover events, check schedules, and submit registration details.',
    'The system groups events by date, displays organizer information, and stores registration data through a backend route.',
    'Reduced repeated manual announcements and gave organizers a clearer participation record.',
    'Backend',
    '2025',
    array['Node.js', 'Express', 'MongoDB', 'REST API'],
    '/images/projects/campus-event-system.svg',
    array['/images/projects/campus-event-system-proof.svg', '/images/projects/campus-event-system.svg'],
    false,
    3
  )
on conflict (slug) do update set
  title = excluded.title,
  summary = excluded.summary,
  problem = excluded.problem,
  solution = excluded.solution,
  outcome = excluded.outcome,
  role = excluded.role,
  year = excluded.year,
  stack = excluded.stack,
  image = excluded.image,
  proof_images = excluded.proof_images,
  featured = excluded.featured,
  sort_order = excluded.sort_order;

insert into public.certifications (
  title,
  issuer,
  issued,
  credential_id,
  image,
  skills,
  sort_order
)
values
  (
    'Web Development Fundamentals',
    'Online Academy',
    'Jan 2026',
    'WEB-2026-001',
    '/images/certifications/web-development.svg',
    array['HTML', 'CSS', 'JavaScript'],
    1
  ),
  (
    'JavaScript and Node.js',
    'Tech Learning Hub',
    'Mar 2026',
    'NODE-2026-014',
    '/images/certifications/node-js.svg',
    array['Node.js', 'Express', 'APIs'],
    2
  ),
  (
    'Responsive UI Design',
    'Design Course',
    'Apr 2026',
    'UI-2026-009',
    '/images/certifications/responsive-ui.svg',
    array['Layout', 'Accessibility', 'Tailwind'],
    3
  )
on conflict (credential_id) do update set
  title = excluded.title,
  issuer = excluded.issuer,
  issued = excluded.issued,
  image = excluded.image,
  skills = excluded.skills,
  sort_order = excluded.sort_order;
