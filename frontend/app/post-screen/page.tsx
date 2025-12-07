// 以下のshadcn/uiコンポーネントが導入済みである必要があります: Card, CardHeader, CardTitle, CardContent, Form, Label, Input, Textarea, Button
import { Header } from "@/components/Header";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { createPost } from "@/app/post-screen/actions/createPost"

export default function PostScreenPage() {

    return (
        <div className="min-h-screen bg-gray-50">
            <Header />
            <main className="container mx-auto py-10 px-4 sm:px-6 lg:px-8 max-w-2xl">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6 text-center">
                    新規投稿
                </h2>

                <Card>
                    <CardHeader>
                        <CardTitle>記事の作成</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form action={createPost} className="space-y-6">
                            <div className="space-y-2">
                                <Label htmlFor="title">タイトル</Label>
                                <Input id="title" name="title" type="text" placeholder="記事のタイトルを入力" required />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="content">内容</Label>
                                <Textarea
                                    id="content"
                                    name="content"
                                    rows={10}
                                    placeholder="記事の本文をMarkdown形式などで入力"
                                    required
                                    className="resize-none"
                                />
                            </div>

                            <Button type="submit" className="w-full">
                                投稿する
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </main>
        </div>
    );
}