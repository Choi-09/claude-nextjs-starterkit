# Next.js Starter Kit

Next.js 16 App Router를 기반으로 한 프로덕션 레디 스타터 킷입니다.

## 기술 스택

- **Next.js 16** - App Router, Server Components, Server Actions
- **TypeScript** - 타입 안전성
- **TailwindCSS v4** - CSS 기반 설정 (설정 파일 불필요)
- **shadcn/ui** - 재사용 가능한 UI 컴포넌트
- **lucide-react** - 아이콘 라이브러리

## 시작하기

### 의존성 설치

```bash
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

### 빌드

```bash
npm run build
```

### 프로덕션 실행

```bash
npm start
```

## 디렉토리 구조

```
├── app/                    # Next.js App Router 페이지 및 레이아웃
│   ├── page.tsx           # 홈페이지
│   ├── layout.tsx         # 루트 레이아웃
│   ├── globals.css        # 글로벌 스타일 (TailwindCSS v4)
│   ├── api/               # API 라우트
│   └── dashboard/         # 대시보드 섹션
├── components/            # React 컴포넌트
│   ├── ui/               # shadcn/ui 컴포넌트
│   └── layout/           # 레이아웃 컴포넌트 (Header, Footer)
├── lib/                  # 유틸리티 함수, 상수, 타입
│   ├── utils.ts
│   ├── constants.ts
│   └── types.ts
├── hooks/                # 커스텀 React 훅
│   ├── use-mounted.ts
│   └── use-media-query.ts
├── public/               # 정적 파일
└── package.json
```

## shadcn/ui 컴포넌트 추가

```bash
npx shadcn@latest add [component-name]
```

예시:

```bash
npx shadcn@latest add button
npx shadcn@latest add form
```

## TailwindCSS v4 커스터마이징

`app/globals.css`의 `@theme` 블록에서 CSS 변수로 테마를 커스터마이징할 수 있습니다:

```css
@theme {
  --color-primary: oklch(0.45 0.25 264);
  --font-sans: "Inter", system-ui, sans-serif;
}
```

## API 라우트

`/api/example` 경로에 샘플 API 라우트가 있습니다.

### GET 요청

```bash
curl http://localhost:3000/api/example
```

### POST 요청

```bash
curl -X POST http://localhost:3000/api/example \
  -H "Content-Type: application/json" \
  -d '{"message": "Hello"}'
```

## 환경 변수

프로젝트 루트에 `.env.local` 파일을 생성하여 환경 변수를 설정할 수 있습니다:

```
# .env.local
NEXT_PUBLIC_API_URL=https://api.example.com
API_KEY=your_secret_key
```

## 라이선스

MIT
