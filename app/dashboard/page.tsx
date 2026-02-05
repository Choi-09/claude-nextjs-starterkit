import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function DashboardPage() {
  return (
    <div className="container mx-auto py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold">대시보드</h1>
        <p className="text-muted-foreground mt-2">
          shadcn/ui 컴포넌트 활용 예제입니다.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>예제 카드 1</CardTitle>
            <CardDescription>카드 컴포넌트 예제</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              shadcn/ui의 Card 컴포넌트를 사용한 예제입니다.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>폼 예제</CardTitle>
            <CardDescription>Input과 Label 활용</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">이름</Label>
              <Input id="name" placeholder="이름을 입력하세요" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">이메일</Label>
              <Input id="email" type="email" placeholder="email@example.com" />
            </div>
            <Button className="w-full">제출</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>버튼 스타일</CardTitle>
            <CardDescription>다양한 버튼 variants</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            <Button>Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="destructive">Destructive</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>예제 카드 2</CardTitle>
            <CardDescription>추가 정보</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              이곳에 원하는 콘텐츠를 추가할 수 있습니다.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>예제 카드 3</CardTitle>
            <CardDescription>커스터마이징</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              TailwindCSS 클래스로 자유롭게 스타일을 조정하세요.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>예제 카드 4</CardTitle>
            <CardDescription>반복 패턴</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              필요한 만큼 카드를 복제하여 사용할 수 있습니다.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
