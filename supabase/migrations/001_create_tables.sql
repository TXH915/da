-- 创建用户表
create table users (
  id uuid primary key default gen_random_uuid(),
  email text unique not null,
  name text,
  role text default 'student',
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 创建课程表
create table courses (
  id serial primary key,
  title text not null,
  description text,
  category text,
  level text,
  duration integer,
  instructor text,
  image_url text,
  price numeric default 0,
  is_premium boolean default false,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 创建课程内容表
create table lessons (
  id serial primary key,
  course_id integer references courses(id) on delete cascade,
  title text not null,
  content text,
  video_url text,
  order_index integer,
  is_premium boolean default false,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 创建练习表
create table practice_exercises (
  id serial primary key,
  lesson_id integer references lessons(id) on delete cascade,
  title text not null,
  description text,
  difficulty text,
  instructions text,
  starter_code text,
  solution text,
  is_premium boolean default false,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 创建课程报名记录表
create table course_enrollments (
  id serial primary key,
  user_id uuid references users(id) on delete cascade,
  course_id integer references courses(id) on delete cascade,
  enrolled_at timestamp with time zone default timezone('utc'::text, now()) not null,
  completed_at timestamp with time zone,
  unique(user_id, course_id)
);

-- 创建学习进度表
create table learning_progress (
  id serial primary key,
  user_id uuid references users(id) on delete cascade,
  lesson_id integer references lessons(id) on delete cascade,
  completed boolean default false,
  completed_at timestamp with time zone,
  last_accessed timestamp with time zone default timezone('utc'::text, now()) not null,
  unique(user_id, lesson_id)
);

-- 创建练习提交记录表
create table practice_submissions (
  id serial primary key,
  user_id uuid references users(id) on delete cascade,
  exercise_id integer references practice_exercises(id) on delete cascade,
  code text,
  output text,
  is_correct boolean,
  submitted_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 创建徽章表
create table badges (
  id serial primary key,
  name text not null,
  description text,
  image_url text,
  condition text,
  points integer default 0,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 创建成就表
create table achievements (
  id serial primary key,
  user_id uuid references users(id) on delete cascade,
  badge_id integer references badges(id) on delete cascade,
  earned_at timestamp with time zone default timezone('utc'::text, now()) not null,
  unique(user_id, badge_id)
);

-- 启用行级安全策略
alter table users enable row level security;
alter table courses enable row level security;
alter table lessons enable row level security;
alter table practice_exercises enable row level security;
alter table course_enrollments enable row level security;
alter table learning_progress enable row level security;
alter table practice_submissions enable row level security;
alter table badges enable row level security;
alter table achievements enable row level security;

-- 创建用户表的安全策略
create policy "任何人都可以查看自己的用户信息"
  on users for select
  using (auth.uid() = id);

create policy "用户可以更新自己的信息"
  on users for update
  using (auth.uid() = id);

-- 创建课程表的安全策略
create policy "任何人都可以查看公开课程"
  on courses for select
  using (true);

-- 创建课程内容的安全策略
create policy "任何人都可以查看公开课程内容"
  on lessons for select
  using (true);

-- 创建练习的安全策略
create policy "任何人都可以查看公开练习"
  on practice_exercises for select
  using (true);

-- 创建徽章的安全策略
create policy "任何人都可以查看徽章"
  on badges for select
  using (true);

-- 创建报名记录的安全策略
create policy "用户可以查看自己的报名记录"
  on course_enrollments for select
  using (auth.uid() = user_id);

create policy "用户可以创建自己的报名记录"
  on course_enrollments for insert
  with check (auth.uid() = user_id);

create policy "用户可以更新自己的报名记录"
  on course_enrollments for update
  using (auth.uid() = user_id);

-- 创建学习进度的安全策略
create policy "用户可以查看自己的学习进度"
  on learning_progress for select
  using (auth.uid() = user_id);

create policy "用户可以创建自己的学习进度"
  on learning_progress for insert
  with check (auth.uid() = user_id);

create policy "用户可以更新自己的学习进度"
  on learning_progress for update
  using (auth.uid() = user_id);

-- 创建练习提交记录的安全策略
create policy "用户可以查看自己的提交记录"
  on practice_submissions for select
  using (auth.uid() = user_id);

create policy "用户可以创建自己的提交记录"
  on practice_submissions for insert
  with check (auth.uid() = user_id);

-- 创建成就的安全策略
create policy "用户可以查看自己的成就"
  on achievements for select
  using (auth.uid() = user_id);

create policy "用户可以创建自己的成就记录"
  on achievements for insert
  with check (auth.uid() = user_id);
