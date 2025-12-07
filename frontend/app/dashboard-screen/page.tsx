"use client";

import { useEffect, useState } from "react";
import { Header } from "@/components/Header";
import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
    CardDescription,
} from "@/components/ui/card";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Post } from "@/types/post";

export default function DashboardPage() {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        fetch("http://localhost:8080/posts")
            .then((res) => res.json())
            .then((data) => setPosts(data))
            .catch((err) => console.error(err));
    }, []);

    const recentPosts = posts.slice(0, 3); // 最新3件を表示

    return (
        <div className="min-h-screen bg-gray-50">
            <Header />
            <main className="container mx-auto py-10 px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">
                    ダッシュボード
                </h2>

                {/* 最近の投稿テーブル */}
                <Card>
                    <CardHeader>
                        <CardTitle>最新の投稿</CardTitle>
                        <CardDescription>最近投稿された記事の一覧です。</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="w-[100px]">ID</TableHead>
                                    <TableHead>タイトル</TableHead>
                                    <TableHead>著者</TableHead>
                                    <TableHead className="text-right">日付</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {recentPosts.map((post) => (
                                    <TableRow key={post.id}>
                                        <TableCell className="font-medium">{post.id}</TableCell>
                                        <TableCell>{post.title}</TableCell>
                                        <TableCell>{post.author}</TableCell>
                                        <TableCell className="text-right">{post.date}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </main>
        </div>
    );
}
