# Vite

프론트엔드 개발용 빌드 도구. (프랑스어로 "빠른"이라는 뜻)

## 핵심 역할

1. **개발 서버** (`npm run dev`): 코드 수정 시 브라우저에 즉시 반영 (HMR)
2. **번들러** (`npm run build`): 배포용으로 JS/CSS 파일을 최적화해서 묶어줌

## 왜 Vite를 쓰는가?

이전의 Webpack(Create React App 등)에 비해:

- **개발 서버 시작이 빠름** - ES 모듈을 네이티브로 활용, 전체 번들링 없이 바로 시작
- **코드 수정 반영이 즉각적** - 변경된 파일만 교체
- **설정이 간단** - 최소한의 설정으로 동작

## 이 프로젝트에서의 사용

```bash
npm run dev      # vite         - 로컬 개발 서버
npm run build    # vite build   - Vercel 배포용 빌드
npm run preview  # vite preview - 빌드 결과 미리보기
```

## 핵심 개념

- **React**는 UI 라이브러리, **Vite**는 그 코드를 브라우저가 이해할 수 있게 변환하고 서빙하는 도구
- `@vitejs/plugin-react` 플러그인을 통해 React(JSX)를 지원
- 환경변수는 `VITE_` 접두사를 붙여야 클라이언트에서 접근 가능 (예: `VITE_SUPABASE_URL`)
