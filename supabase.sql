-- Enable pgcrypto for UUID generation
create extension if not exists pgcrypto;

-- Table for listener requests
create table if not exists public.requests (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text check (char_length(name) <= 80),
  city text check (char_length(city) <= 80),
  text text not null check (char_length(text) <= 240),
  status text not null default 'pending' check (status in ('pending','approved','rejected'))
);

-- Table for ticker items (approved messages)
create table if not exists public.ticker (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  text text not null check (char_length(text) <= 140),
  is_live boolean not null default false,
  position integer generated always as identity
);

-- Single-row table for the currently playing track or segment
create table if not exists public.now_playing (
  id integer primary key default 1,
  updated_at timestamptz not null default now(),
  title text not null,
  subhead text,
  link text
);

insert into public.now_playing (id, title)
values (1, 'Initializing stream')
on conflict (id) do nothing;

-- Table for featured resources
create table if not exists public.features (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  title text not null,
  url text not null,
  description text,
  region text
);
