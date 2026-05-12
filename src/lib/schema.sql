create extension if not exists pgcrypto;

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create table if not exists public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  name text not null,
  email text unique not null,
  school text not null default 'Cornell University',
  avatar_url text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.user_progress (
  user_id uuid primary key references public.profiles (id) on delete cascade,
  season_id text not null default 's04-lakeside-spring',
  vitality integer not null default 280,
  season_lit integer not null default 14,
  streak_days integer not null default 14,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.task_completions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles (id) on delete cascade,
  task_id text not null,
  task_type text not null,
  reward integer not null default 0,
  completed_at timestamptz not null default now()
);

create table if not exists public.badge_progress (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles (id) on delete cascade,
  badge_key text not null,
  progress integer not null default 0,
  unlocked boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (user_id, badge_key)
);

create table if not exists public.play_joins (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles (id) on delete cascade,
  play_id text not null,
  joined_at timestamptz not null default now()
);

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, name, email)
  values (
    new.id,
    coalesce(new.raw_user_meta_data ->> 'name', split_part(new.email, '@', 1), 'Campus Quest User'),
    new.email
  )
  on conflict (id) do update
  set
    name = excluded.name,
    email = excluded.email,
    updated_at = now();

  insert into public.user_progress (user_id)
  values (new.id)
  on conflict (user_id) do nothing;

  insert into public.badge_progress (user_id, badge_key, progress, unlocked)
  values
    (new.id, 'lakeside-explorer', 0, false),
    (new.id, 'spring-play', 0, false),
    (new.id, 'recovery-rhythm', 0, false)
  on conflict (user_id, badge_key) do nothing;

  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
after insert on auth.users
for each row execute procedure public.handle_new_user();

drop trigger if exists profiles_set_updated_at on public.profiles;
create trigger profiles_set_updated_at
before update on public.profiles
for each row execute procedure public.set_updated_at();

drop trigger if exists progress_set_updated_at on public.user_progress;
create trigger progress_set_updated_at
before update on public.user_progress
for each row execute procedure public.set_updated_at();

drop trigger if exists badge_progress_set_updated_at on public.badge_progress;
create trigger badge_progress_set_updated_at
before update on public.badge_progress
for each row execute procedure public.set_updated_at();

alter table public.profiles enable row level security;
alter table public.user_progress enable row level security;
alter table public.task_completions enable row level security;
alter table public.badge_progress enable row level security;
alter table public.play_joins enable row level security;

drop policy if exists "profiles_select_own" on public.profiles;
create policy "profiles_select_own"
on public.profiles
for select
to authenticated
using (auth.uid() = id);

drop policy if exists "profiles_update_own" on public.profiles;
create policy "profiles_update_own"
on public.profiles
for update
to authenticated
using (auth.uid() = id)
with check (auth.uid() = id);

drop policy if exists "user_progress_select_own" on public.user_progress;
create policy "user_progress_select_own"
on public.user_progress
for select
to authenticated
using (auth.uid() = user_id);

drop policy if exists "user_progress_insert_own" on public.user_progress;
create policy "user_progress_insert_own"
on public.user_progress
for insert
to authenticated
with check (auth.uid() = user_id);

drop policy if exists "user_progress_update_own" on public.user_progress;
create policy "user_progress_update_own"
on public.user_progress
for update
to authenticated
using (auth.uid() = user_id)
with check (auth.uid() = user_id);

drop policy if exists "task_completions_select_own" on public.task_completions;
create policy "task_completions_select_own"
on public.task_completions
for select
to authenticated
using (auth.uid() = user_id);

drop policy if exists "task_completions_insert_own" on public.task_completions;
create policy "task_completions_insert_own"
on public.task_completions
for insert
to authenticated
with check (auth.uid() = user_id);

drop policy if exists "badge_progress_select_own" on public.badge_progress;
create policy "badge_progress_select_own"
on public.badge_progress
for select
to authenticated
using (auth.uid() = user_id);

drop policy if exists "badge_progress_insert_own" on public.badge_progress;
create policy "badge_progress_insert_own"
on public.badge_progress
for insert
to authenticated
with check (auth.uid() = user_id);

drop policy if exists "badge_progress_update_own" on public.badge_progress;
create policy "badge_progress_update_own"
on public.badge_progress
for update
to authenticated
using (auth.uid() = user_id)
with check (auth.uid() = user_id);

drop policy if exists "play_joins_select_own" on public.play_joins;
create policy "play_joins_select_own"
on public.play_joins
for select
to authenticated
using (auth.uid() = user_id);

drop policy if exists "play_joins_insert_own" on public.play_joins;
create policy "play_joins_insert_own"
on public.play_joins
for insert
to authenticated
with check (auth.uid() = user_id);
