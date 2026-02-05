# CLAUDE.md

이 파일은 Claude Code(claude.ai/code)가 이 저장소에서 작업할 때 필요한 지침을 제공합니다.

## 개발 명령어

### 핵심 명령어
- `npm run dev` - 개발 서버 시작 (http://localhost:3000)
- `npm run build` - 프로덕션 빌드
- `npm start` - 프로덕션 빌드 로컬 실행
- `npm run lint` - ESLint 실행

### shadcn/ui 컴포넌트 추가
새로운 shadcn/ui 컴포넌트를 추가하려면:
```bash
npx shadcn@latest add [컴포넌트-이름]
```

## 아키텍처 개요

### 레이아웃 시스템
애플리케이션은 계층적 레이아웃 구조를 사용합니다:

**RootLayout** (`app/layout.tsx`):
- `ThemeProvider`(next-themes)로 다크모드 지원
- 전체 앱을 `Toaster` 컴포넌트로 감싸서 알림 기능 제공
- body는 flex 레이아웃 사용: `flex flex-col min-h-screen` (footer를 하단에 고정)
- Geist Sans/Mono 폰트 변수를 CSS 커스텀 프로퍼티로 주입

**DashboardLayout** (`app/dashboard/layout.tsx`):
- Flex 레이아웃 사용: `flex flex-col min-h-screen`
- Header (sticky), main 콘텐츠 영역 (flex-1), Footer 포함
- `min-h-screen`은 레이아웃이 항상 viewport 높이 이상을 차지하도록 보장

**핵심 패턴**: 모든 레이아웃 컨테이너는 `flex flex-col min-h-screen`을 사용하여 다음을 보장:
1. Header가 상단에 유지
2. 메인 콘텐츠가 사용 가능한 공간을 확장
3. Footer가 하단에 배치

### 페이지 구조
- `/` - 홈페이지 (특별한 레이아웃 없음, 독립적인 Header/Footer)
- `/dashboard` - 대시보드 페이지 (DashboardLayout 사용)
- `/api/example` - 샘플 API 라우트

### 테마 시스템
- **Provider**: `ThemeProvider` (`components/providers/theme-provider.tsx`)가 next-themes 감싸기
- **모드**: CSS 클래스 방식 사용 (`<html>` 요소에 `.dark` 클래스)
- **토글**: Header의 `ThemeToggle` 컴포넌트로 라이트/다크 전환 가능
- **변수**: 모든 색상은 `app/globals.css`에서 OKLch 색상 공간을 사용하는 CSS 커스텀 프로퍼티로 정의
- **기본값**: 시스템 설정 감지 활성화 (`enableSystem: true`)

### 컴포넌트 구조
- `components/ui/` - shadcn/ui 컴포넌트 (편집하지 말 것, `npx shadcn@latest add`로 재생성)
- `components/layout/` - Header, Footer, ThemeToggle (애플리케이션별 레이아웃)
- `components/providers/` - Context providers (ThemeProvider 래퍼)

### 스타일링 접근
- **TailwindCSS v4**: CSS 우선 방식 (설정 파일 불필요)
- **테마 커스터마이징**: `app/globals.css`에서 CSS 변수 편집 (라이트 모드는 `:root`, 다크 모드는 `.dark`)
- **색상 공간**: 더 나은 인지적 균일성을 위해 OKLch 색상 포맷 사용
- **커스텀 variant**: 다크 모드 유틸리티를 위해 `@custom-variant dark` 정의

### 유틸리티 & 상수
- `lib/utils.ts` - `cn()` 같은 헬퍼 함수 (clsx + tailwind-merge로 className 병합)
- `lib/constants.ts` - 사이트 설정 (이름, 링크) 및 네비게이션 항목
- `lib/types.ts` - 공유되는 TypeScript 타입

### 훅
- `hooks/use-mounted.ts` - Hydration 불일치 방지 (클라이언트 전용 기능용)
- `hooks/use-media-query.ts` - 반응형 디자인 쿼리

## 중요한 구현 세부사항

### Hydration
- `<html>` 요소의 `suppressHydrationWarning`은 테마 hydration을 위해 필수 (next-themes)
- localStorage나 window 객체에 접근하는 컴포넌트에는 `use-mounted` 훅 사용
- 항상 hydration 가드로 테마 의존 로직을 감싸기

### 반응형 디자인
- TailwindCSS 반응형 접두사 사용: `md:` (768px), `lg:` (1024px) 등
- JavaScript 기반 반응형 로직에는 `use-media-query` 훅 사용
- 컨테이너 쿼리: 명시적으로 사용하지 않음, `mx-auto max-w-7xl` 패턴으로 미디어 쿼리 사용

### 상태 관리
- 전역 상태 라이브러리 없음 (Redux, Zustand 등)
- 가능하면 React Server Components 사용
- UI 전용 상태는 로컬 컴포넌트 상태 사용

### TypeScript
- 엄격 모드 활성화
- 불변 객체에 `as const` 사용 (`lib/constants.ts` 참조)
- Server Components의 읽기 전용 props에 `Readonly<>` 사용

## API 라우트
- `app/api/` 디렉토리에 위치
- Next.js Route Handlers 패턴 사용
- 샘플: `app/api/example/route.ts` (GET/POST 시연)

## 환경 변수
- 클라이언트 측: `NEXT_PUBLIC_` 접두사 붙이기 (예: `NEXT_PUBLIC_API_URL`)
- 서버 측: 접두사 없이 사용
- 파일: `.env.local` (gitignore됨)

## 자주 사용하는 작업

### 새 페이지 추가
1. `app/[경로]/page.tsx`에 파일 생성
2. 레이아웃이 필요하면 `app/[경로]/layout.tsx` 생성
3. 커스텀 레이아웃인 경우 항상 Header/Footer import

### 새 컴포넌트 추가
1. `components/` 디렉토리에 배치
2. 상호작용이 필요하면 `"use client"` 사용
3. 가능하면 Server Components 선호

### 테마 색상 업데이트
1. `app/globals.css`에서 CSS 변수 편집
2. `:root` (라이트 모드)와 `.dark` (다크 모드) 모두 업데이트
3. 일관성을 위해 OKLch 색상 공간 사용

### UI 변경사항 테스트
1. `npm run dev` 실행
2. 헤더의 Sun/Moon 버튼으로 다크모드 토글
3. DevTools로 반응형 디자인 테스트

## 알려진 패턴 & 제약사항

### Fragment 경고
- DashboardLayout은 이전에 Fragment `<>`를 사용했지만 flex 레이아웃을 깨뜨림
- 명시적 `<div className="flex flex-col min-h-screen">`으로 변경
- 절대로 Fragment를 레이아웃 래퍼로 사용하지 말 것 - 명시적 div에 flex 속성 사용

### 다크모드 감지
- 시스템 설정을 자동으로 감지
- localStorage에 저장된 설정으로 폴백
- 헤더의 라이트/다크 토글은 시스템 설정 재정의

### Import 경로
- `tsconfig.json`에 설정된 `@/` alias 사용 (절대 경로)
- `../../../components/...` 같은 상대 경로 사용 금지

## 최근 변경사항
- **Hydration 수정**: 서버/클라이언트 렌더링 불일치 해결을 위해 ThemeProvider 추가
- **다크모드 구현**: next-themes를 통한 구현 및 커스텀 Provider 래퍼 추가
- **Footer 수정**: DashboardLayout을 Fragment에서 `min-h-screen`을 가진 flex 컨테이너로 변경
- **알림 시스템**: Toast 알림을 위해 Sonner Toaster 컴포넌트 추가
