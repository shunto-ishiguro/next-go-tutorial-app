"use client";
//Header.tsx

import Link from "next/link";
import { User } from "@/types/user";

const DUMMY_USER: User = {
    id: 1,
    name: "山田 太郎",
    email: "taro.yamada@example.com",
};

export function Header() {
    return (
        <header className="border-b bg-white">
            <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
                {/* ロゴとナビゲーション */}
                <div className="flex items-center space-x-6">
                    <Link href="/" className="text-xl font-bold tracking-tight text-blue-600">
                        チュートリアルアプリ
                    </Link>
                    <nav className="hidden md:flex space-x-4">
                        <Link href="/dashboard-screen" className="text-sm font-medium transition-colors hover:text-blue-600">
                            ダッシュボードページ
                        </Link>
                        <Link href="/post-screen" className="text-sm font-medium transition-colors hover:text-blue-600">
                            投稿ページ
                        </Link>
                    </nav>
                </div>

                {/* ユーザー情報とアクション */}
                <div className="flex items-center space-x-4">
                    <span className="text-sm font-medium hidden sm:block">
                        ようこそ、**{DUMMY_USER.name}** さん
                    </span>
                </div>
            </div>
        </header>
    );
}

//