# 예서의 한글 🇰🇷

6세 아이를 위한 한글 학습 웹앱

## 기술 스택
- React 18 + Vite
- Supabase (진도 저장)
- Vercel (배포)

## 로컬 실행
```bash
npm install
npm run dev
```

## 환경변수 설정
`.env.local` 파일에 Supabase 키 입력:
```
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_KEY=your-publishable-key
```

## Supabase 테이블
```sql
create table progress (
  id         bigint generated always as identity primary key,
  user_id    text not null,
  week       int  not null,
  lesson_id  int  not null,
  stars      int  not null default 0,
  updated_at timestamptz default now(),
  unique(user_id, week, lesson_id)
);
```
