-- "내 성격에 딱 맞는 IT 부캐 찾기" MBTI 테스트
-- Supabase SQL Editor에서 아래 쿼리를 실행해 테이블과 정책을 생성하세요.

create table if not exists public.mbti_results (
  id uuid primary key default gen_random_uuid(),
  mbti_type text not null check (mbti_type ~ '^[EI][SN][TF][JP]$'),
  answers jsonb not null,
  created_at timestamptz not null default now()
);

-- 실시간 참여자 수 배너 및 결과 적재를 위해 RLS를 켜고
-- anon 역할에 한해 insert(적재)와 select(카운트 조회)만 허용합니다.
alter table public.mbti_results enable row level security;

drop policy if exists "Allow public insert" on public.mbti_results;
create policy "Allow public insert"
  on public.mbti_results
  for insert
  to anon
  with check (true);

drop policy if exists "Allow public read" on public.mbti_results;
create policy "Allow public read"
  on public.mbti_results
  for select
  to anon
  using (true);

create index if not exists mbti_results_mbti_type_idx on public.mbti_results (mbti_type);
create index if not exists mbti_results_created_at_idx on public.mbti_results (created_at desc);
