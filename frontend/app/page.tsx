import Link from "next/link";
import { Header } from "@/components/Header";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// ダミーデータはこのファイルに直接含めるか、適宜インポートしてください

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-10 text-center">
          チュートリアルアプリ
        </h1>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle>ダッシュボード画面</CardTitle>
              <CardDescription>
                ユーザーの概要や最近の投稿一覧を確認します。
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/dashboard-screen" passHref>
                <Button className="w-full">
                  画面へ移動
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle>投稿画面</CardTitle>
              <CardDescription>
                新規投稿の作成や、既存の投稿の編集を行います。
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/post-screen" passHref>
                <Button className="w-full" variant="secondary">
                  画面へ移動
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}