# 예서의 한글 학습 게임

6세 아이(예서)를 위한 한글 학습 모바일 웹앱. 주차별로 자음/모음을 배우고 게임으로 복습.

## 기술 스택

- **React 18 + Vite 5** (JSX, hooks 기반 함수형 컴포넌트)
- **Supabase** — 진도(progress) 저장 (없으면 localStorage 폴백)
- **Web Speech API** — 한국어 TTS (`ko-KR`, rate 0.8)
- **Vercel** 배포
- CSS: `src/index.css` 단일 파일 + 인라인 style 객체
- 테스트 프레임워크 없음, TypeScript 없음, 상태관리 라이브러리 없음

## 명령어

```bash
npm run dev      # 로컬 개발 서버 (Vite)
npm run build    # 프로덕션 빌드 → dist/
npm run preview  # 빌드 결과 미리보기
```

## 프로젝트 구조

```
src/
├── App.jsx              # 라우팅 (screen state로 화면 전환)
├── main.jsx             # 엔트리
├── index.css            # 글로벌 CSS (.app, .topbar, .btn-* 등)
├── supabase.js          # Supabase 클라이언트 (env 없으면 null)
├── data/
│   ├── week1.js         # 1주차 데이터 (CHARS, LESSONS, WORD_QS) + WEEK_META
│   └── week2.js         # 2주차 데이터 (CHARS, LESSONS, WORD_QS)
├── hooks/
│   ├── useProgress.js   # 진도 관리 (localStorage + Supabase 동기화)
│   └── useSpeech.js     # TTS 훅
└── components/
    ├── HomeScreen.jsx   # 홈 — 주차 탭 + 레슨 목록
    ├── LearnScreen.jsx  # 학습 — 글자 카드 넘기기
    ├── GameAScreen.jsx  # 게임A — 글자→소리 4지선다
    ├── GameBScreen.jsx  # 게임B — 그림→단어 4지선다
    └── ResultScreen.jsx # 결과 — 점수/별 표시
public/images/           # SVG 이미지 (child.svg, mother.svg)
```

## 핵심 아키텍처

### 화면 전환
App.jsx의 `screen` state (`{name, ...params}`)로 전환. 라우터 없음.
`home → learn/game-a/game-b → result → home` 플로우.

### 주차 데이터 구조
각 `weekN.js`는 3개 export:
- `CHARS[]` — `{c, sound, word, emoji, ex, img?}` 학습 글자 배열
- `LESSONS[]` — `{id, title, sub, icon, bg, type, chars}` 레슨 정의. type: `learn` | `game-a` | `game-b`
- `WORD_QS[]` — `{emoji, img?, correct, wrong[]}` 그림-단어 퀴즈
- `WEEK_META` — week1.js에만 존재. `{title, sub, color, bg}` 주차 메타 (모든 주차 포함)

### 진도 저장 (useProgress)
- user_id 하드코딩: `'예서'`
- localStorage 우선 로드 → Supabase에서 비동기 갱신
- 별점: 정확도 80%↑→3, 60%↑→2, 그외→1

### 스타일 컨벤션
- 공통 클래스는 `index.css` (`.app`, `.topbar`, `.btn-primary` 등)
- 컴포넌트별 레이아웃은 인라인 `style={{}}` 객체
- 테마 색상: 보라 `#534ab7`, 초록 `#0f6e56`/`#1d9e75`, 배경 `#f5f4f0`/`#f9f8f5`

## 코드 컨벤션

- 한국어 UI 텍스트, 한국어 주석
- 세미콜론 없음 (Vite 기본)
- `export default function` 패턴 (컴포넌트)
- `export function` + named export (hooks)
- 데이터 파일은 `export const`
- 새 주차 추가 시: `src/data/weekN.js` 생성 → `App.jsx`의 `WEEK_DATA`에 등록 → `HomeScreen.jsx`의 `WEEKS` 배열에 추가 → `WEEK_META`에 메타 추가

## 환경변수

`.env.local` (gitignore됨):
```
VITE_SUPABASE_URL=...
VITE_SUPABASE_KEY=...
```
없어도 앱 동작 (localStorage만 사용).