-- =========================
-- TABLES
-- =========================

create table public.seats (
  id uuid not null default gen_random_uuid(),
  seat_name text not null,
  zone text not null,
  created_at timestamp with time zone default now(),
  is_blocked boolean not null default false,
  constraint seats_pkey primary key (id)
);

create table public.profiles (
  id uuid not null,
  full_name text,
  role text not null default 'user',
  created_at timestamp with time zone default now(),
  constraint profiles_pkey primary key (id),
  constraint profiles_id_fkey foreign key (id) references auth.users (id) on delete cascade
);

create table public.reservations (
  id uuid not null default gen_random_uuid(),
  seat_id uuid,
  date date not null,
  start_time text not null,
  end_time text not null,
  status text not null,
  created_at timestamp with time zone default now(),
  user_id uuid not null,
  constraint reservations_pkey primary key (id),
  constraint reservations_seat_date_unique unique (seat_id, date, start_time, end_time),
  constraint reservations_seat_id_fkey foreign key (seat_id) references seats (id) on delete cascade,
  constraint reservations_user_id_fkey foreign key (user_id) references auth.users (id) on update cascade on delete cascade,
  constraint reservations_status_check check (
    status = any (array['pending','confirmed','cancelled'])
  )
);

create table public.cafeteria_items (
  id uuid not null default gen_random_uuid(),
  title text not null,
  price numeric(10,2),
  image_url text,
  description text,
  display_order integer not null default 0,
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now(),
  section text,
  meal_type text not null,
  description_format text default 'paragraph',
  disabled_for_date date,
  constraint cafeteria_items_pkey primary key (id),
  constraint cafeteria_items_description_format_check check (
    description_format = any (array['paragraph','numbered'])
  ),
  constraint cafeteria_items_meal_type_check check (
    meal_type = any (array['breakfast','lunch','snacks','bakery'])
  )
);

create table public.cafeteria_item_days (
  id uuid not null default gen_random_uuid(),
  item_id uuid not null,
  day_of_week smallint not null,
  created_at timestamp with time zone default now(),
  constraint cafeteria_item_days_pkey primary key (id),
  constraint cafeteria_item_days_item_id_day_of_week_key unique (item_id, day_of_week),
  constraint cafeteria_item_days_item_id_fkey foreign key (item_id) references cafeteria_items (id) on delete cascade,
  constraint cafeteria_item_days_day_of_week_check check (
    day_of_week >= 1 and day_of_week <= 7
  )
);

create table public.cafeteria_item_comments (
  id uuid not null default gen_random_uuid(),
  item_id uuid not null,
  user_id uuid not null,
  rating integer not null,
  comment text not null,
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now(),
  constraint cafeteria_item_comments_pkey primary key (id),
  constraint cafeteria_item_comments_item_id_user_id_key unique (item_id, user_id),
  constraint cafeteria_item_comments_item_id_fkey foreign key (item_id) references cafeteria_items (id) on delete cascade,
  constraint cafeteria_item_comments_user_id_fkey foreign key (user_id) references auth.users (id) on delete cascade,
  constraint cafeteria_item_comments_rating_check check (
    rating >= 1 and rating <= 5
  )
);

create table public.cafeteria_comment_likes (
  id uuid not null default gen_random_uuid(),
  comment_id uuid not null,
  user_id uuid not null,
  created_at timestamp with time zone default now(),
  constraint cafeteria_comment_likes_pkey primary key (id),
  constraint cafeteria_comment_likes_comment_id_user_id_key unique (comment_id, user_id),
  constraint cafeteria_comment_likes_comment_id_fkey foreign key (comment_id) references cafeteria_item_comments (id) on delete cascade,
  constraint cafeteria_comment_likes_user_id_fkey foreign key (user_id) references auth.users (id) on delete cascade
);

-- =========================
-- ENABLE RLS
-- =========================

alter table profiles enable row level security;
alter table seats enable row level security;
alter table reservations enable row level security;
alter table cafeteria_items enable row level security;
alter table cafeteria_item_days enable row level security;
alter table cafeteria_item_comments enable row level security;
alter table cafeteria_comment_likes enable row level security;

-- =========================
-- POLICIES
-- =========================

-- PROFILES
create policy "user_select_profile"
on profiles for select
using (auth.uid() = id);

create policy "user_insert_profile"
on profiles for insert
with check (auth.uid() = id);

create policy "user_update_profile"
on profiles for update
using (auth.uid() = id);

-- SEATS
create policy "public_select_seats"
on seats for select
using (true);

create policy "admin_manage_seats"
on seats for all
using (
  exists (
    select 1 from profiles
    where profiles.id = auth.uid()
    and profiles.role = 'admin'
  )
)
with check (
  exists (
    select 1 from profiles
    where profiles.id = auth.uid()
    and profiles.role = 'admin'
  )
);

-- RESERVATIONS
create policy "public_select_reservations"
on reservations for select
using (true);

create policy "user_insert_reservations"
on reservations for insert
with check (auth.uid() = user_id);

create policy "user_update_reservations"
on reservations for update
using (auth.uid() = user_id);

create policy "user_delete_reservations"
on reservations for delete
using (auth.uid() = user_id);

-- CAFETERIA ITEMS
create policy "public_select_items"
on cafeteria_items for select
using (true);

-- ITEM DAYS
create policy "public_select_item_days"
on cafeteria_item_days for select
using (true);

-- COMMENTS
create policy "public_select_comments"
on cafeteria_item_comments for select
using (true);

create policy "user_insert_comments"
on cafeteria_item_comments for insert
with check (auth.uid() = user_id);

create policy "user_update_comments"
on cafeteria_item_comments for update
using (auth.uid() = user_id);

create policy "user_delete_comments"
on cafeteria_item_comments for delete
using (auth.uid() = user_id);

-- LIKES
create policy "public_select_likes"
on cafeteria_comment_likes for select
using (true);

create policy "user_insert_likes"
on cafeteria_comment_likes for insert
with check (auth.uid() = user_id);

-- =========================
-- INDEXES
-- =========================

create index idx_reservations_user on reservations(user_id);
create index idx_reservations_seat on reservations(seat_id);
create index idx_reservations_date on reservations(date);
create index idx_cafeteria_item_days_item on cafeteria_item_days(item_id);