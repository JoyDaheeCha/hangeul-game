# Supabase

오픈소스 Firebase 대안. PostgreSQL 기반의 **BaaS**(Backend as a Service).

## Supabase가 제공하는 것

백엔드 서버를 직접 만들지 않아도 아래 기능을 바로 쓸 수 있다:

| 기능 | 설명 |
|------|------|
| **Database** | PostgreSQL DB를 웹 대시보드에서 관리 |
| **Auth** | 이메일/소셜 로그인 등 인증 |
| **Storage** | 파일(이미지 등) 저장 |
| **Realtime** | DB 변경사항을 실시간 구독 |
| **Edge Functions** | 서버리스 함수 실행 |

## 이 프로젝트에서의 사용

학습 진도(별 점수)를 저장하는 용도로만 사용 중.

### 연결 설정 (`src/supabase.js`)

```js
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)
```

- `createClient()`로 Supabase 인스턴스 생성
- URL과 Key는 `.env.local`의 환경변수에서 가져옴
- 환경변수가 없으면 `null` 반환 → localStorage만으로 동작 (오프라인 폴백)

### 테이블 구조 (`progress`)

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

### 데이터 읽기 (select)

```js
const { data, error } = await supabase
  .from('progress')            // 테이블 이름
  .select('lesson_id, stars')  // 가져올 컬럼
  .eq('user_id', '예서')       // WHERE 조건
  .eq('week', 1)
```

### 데이터 쓰기 (upsert)

```js
await supabase.from('progress').upsert({
  user_id: '예서',
  week: 1,
  lesson_id: 0,
  stars: 3,
  updated_at: new Date().toISOString(),
})
```

- `upsert` = insert + update. 같은 키가 있으면 업데이트, 없으면 삽입
- `unique(user_id, week, lesson_id)` 제약 조건 덕분에 중복 없이 동작

## 핵심 개념

- **anon key**: 클라이언트에서 사용하는 공개 키. RLS(Row Level Security) 정책으로 접근 제어
- **RLS**: 테이블 단위로 "누가 어떤 행을 읽고/쓸 수 있는지" 정의하는 PostgreSQL 기능
- **실시간 폴백 전략**: 이 프로젝트는 Supabase 연결 실패 시 localStorage로 폴백하는 구조

## Firebase와의 차이

| | Supabase | Firebase |
|---|----------|----------|
| DB | PostgreSQL (SQL) | Firestore (NoSQL) |
| 오픈소스 | O | X |
| 셀프호스팅 | 가능 | 불가 |
| 쿼리 | SQL 사용 가능 | 독자적 쿼리 API |
