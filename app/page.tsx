import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight, Sparkles, Zap, Shield } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-24 text-center">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border bg-muted px-4 py-2 text-sm">
          <Sparkles className="h-4 w-4" />
          <span>Next.js 16 + TailwindCSS v4 + shadcn/ui</span>
        </div>

        <h1 className="mb-6 text-5xl font-bold tracking-tight lg:text-7xl">
          빠르게 시작하는
          <br />
          <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            웹 개발 Starter Kit
          </span>
        </h1>

        <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
          최신 기술 스택으로 구성된 프로덕션 레디 템플릿입니다. TypeScript, App
          Router, Server Components를 즉시 사용하세요.
        </p>

        <div className="flex items-center justify-center gap-4">
          <Button size="lg" asChild>
            <Link href="/dashboard">
              시작하기 <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="#features">더 알아보기</Link>
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-4 py-24">
        <h2 className="mb-12 text-center text-3xl font-bold">주요 기능</h2>

        <div className="grid gap-8 md:grid-cols-3">
          <Card>
            <CardHeader>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900">
                <Zap className="h-6 w-6 text-blue-600 dark:text-blue-300" />
              </div>
              <CardTitle>초고속 개발</CardTitle>
              <CardDescription>
                TailwindCSS v4 + shadcn/ui로 빠른 개발
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                설정 파일 없이 CSS로 직접 테마를 정의하고, 재사용 가능한 UI
                컴포넌트로 생산성을 극대화합니다.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 dark:bg-green-900">
                <Shield className="h-6 w-6 text-green-600 dark:text-green-300" />
              </div>
              <CardTitle>타입 안전성</CardTitle>
              <CardDescription>
                TypeScript로 안전한 코드 작성
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                엄격한 타입 체킹으로 런타임 에러를 사전에 방지하고, 자동완성으로
                개발 경험을 향상시킵니다.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-900">
                <Sparkles className="h-6 w-6 text-purple-600 dark:text-purple-300" />
              </div>
              <CardTitle>최신 기술</CardTitle>
              <CardDescription>
                Next.js 16 App Router & React Server Components
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                서버 컴포넌트로 성능을 최적화하고, App Router로 강력한 라우팅
                기능을 활용합니다.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="border-t bg-muted/50 py-24">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">
            기술 스택
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              { name: "Next.js 16", desc: "App Router 기반" },
              { name: "TypeScript", desc: "타입 안전성" },
              { name: "TailwindCSS v4", desc: "CSS 기반 설정" },
              { name: "shadcn/ui", desc: "UI 컴포넌트" },
              { name: "lucide-react", desc: "아이콘 라이브러리" },
              { name: "ESLint", desc: "코드 품질" },
              { name: "React 19", desc: "최신 React" },
              { name: "App Router", desc: "고급 라우팅" },
            ].map((tech) => (
              <div key={tech.name} className="text-center">
                <p className="font-semibold">{tech.name}</p>
                <p className="text-sm text-muted-foreground">{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
