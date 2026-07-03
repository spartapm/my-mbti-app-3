# 내 성격에 딱 맞는 IT 부캐 찾기 (My IT Alter-Ego MBTI)

8개의 질문으로 MBTI 4개 차원(E/I, S/N, T/F, J/P)을 진단하고, 16가지 IT 직장인 페르소나 중 나에게 맞는 유형을 알려주는 테스트입니다.

## 기술 스택

- Next.js 15 (App Router) + TypeScript
- Tailwind CSS
- Supabase (결과 적재 + 실시간 참여자 수 카운트)

## 시작하기

```bash
npm install
npm run dev
```

`http://localhost:3000` 에서 확인할 수 있습니다.

## Supabase 설정

1. `.env.local` 에 프로젝트 URL과 anon(publishable) key가 이미 설정되어 있습니다.
2. Supabase 대시보드 → SQL Editor에서 [`database/schema.sql`](./database/schema.sql) 내용을 실행해 `mbti_results` 테이블과 RLS 정책을 생성하세요.

## 폴더 구조

```
app/
  page.tsx            메인 화면 (실시간 참여자 카운터 + CTA)
  quiz/page.tsx        8문항 질문 플로우
  result/page.tsx      결과 화면 (searchParams 기반, 공유 가능한 URL)
components/            UI 컴포넌트
lib/
  questions.ts          질문 세트
  mbti.ts               MBTI 채점 로직
  personas.ts            16가지 IT 부캐 페르소나 데이터
  supabase.ts             Supabase 클라이언트
database/schema.sql      Supabase 테이블/정책 정의
```

## 결과 공유

`/result?type=INTJ` 형태의 URL로 특정 결과를 바로 공유할 수 있습니다. 결과 화면의 "결과 링크 복사하기" 버튼이 현재 결과의 공유 링크를 클립보드에 복사합니다.
