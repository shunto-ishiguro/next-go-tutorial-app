# Next.js + Go Tutorial App

Next.jsとGoを使用したフルスタックチュートリアルアプリケーションです。

## 目次

- [プロジェクト構成](#プロジェクト構成)
- [必要な環境](#必要な環境)
- [セットアップ](#セットアップ)
- [起動方法](#起動方法)
- [開発](#開発)
- [トラブルシューティング](#トラブルシューティング)

## プロジェクト構成

```
next-go-tutorial-app/
├── backend/          # Go バックエンド
├── frontend/         # Next.js フロントエンド
├── docker/           # Docker設定ファイル
│   ├── Dockerfile.backend
│   ├── Dockerfile.frontend
│   ├── docker-compose.yml
│   ├── docker-compose.backend.yml
│   └── docker-compose.frontend.yml
└── README.md
```

## 必要な環境

- [Docker](https://www.docker.com/get-started) (20.10.0以上推奨)
- [Docker Compose](https://docs.docker.com/compose/install/) (2.0.0以上推奨)
- Git

## セットアップ

### 1. リポジトリのクローン

```bash
git clone <repository-url> next-go-tutorial-app
cd next-go-tutorial-app
```

### 2. 初回起動（イメージのビルド）

初回起動時は `--build` オプションをつけてDockerイメージをビルドします。

#### 全体を起動する場合

```bash
docker compose -f docker/docker-compose.yml up --build
```

#### バックエンドのみ起動する場合

```bash
docker compose -f docker/docker-compose.backend.yml up --build
```

#### フロントエンドのみ起動する場合

```bash
docker compose -f docker/docker-compose.frontend.yml up --build
```

## 起動方法

2回目以降の起動では、コードに変更がない場合は `--build` オプションを省略できます。

### 全体を起動

```bash
docker compose -f docker/docker-compose.yml up
```

バックグラウンドで起動する場合は `-d` オプションを追加：

```bash
docker compose -f docker/docker-compose.yml up -d
```

### バックエンドのみ起動

```bash
docker compose -f docker/docker-compose.backend.yml up
```

### フロントエンドのみ起動

```bash
docker compose -f docker/docker-compose.frontend.yml up
```

### 停止方法

#### フォアグラウンドで起動している場合

`Ctrl + C` で停止できます。

#### バックグラウンドで起動している場合

```bash
# 全体を停止
docker compose -f docker/docker-compose.yml down

# バックエンドのみ停止
docker compose -f docker/docker-compose.backend.yml down

# フロントエンドのみ停止
docker compose -f docker/docker-compose.frontend.yml down
```

## 開発

### アクセスURL

- **フロントエンド**: http://localhost:3000
- **バックエンド**: http://localhost:8080

### ログの確認

```bash
# 全体のログを表示
docker compose -f docker/docker-compose.yml logs

# 特定のサービスのログを表示
docker compose -f docker/docker-compose.yml logs backend
docker compose -f docker/docker-compose.yml logs frontend

# リアルタイムでログを追跡
docker compose -f docker/docker-compose.yml logs -f
```

### コンテナの状態確認

```bash
docker compose -f docker/docker-compose.yml ps
```

### コンテナに入る

```bash
# バックエンドコンテナに入る
docker compose -f docker/docker-compose.yml exec backend sh

# フロントエンドコンテナに入る
docker compose -f docker/docker-compose.yml exec frontend sh
```

### イメージの再ビルド

コードを変更した場合は、再ビルドが必要です：

```bash
docker compose -f docker/docker-compose.yml up --build
```

キャッシュを使わずに完全に再ビルドする場合：

```bash
docker compose -f docker/docker-compose.yml build --no-cache
docker compose -f docker/docker-compose.yml up
```

### クリーンアップ

```bash
# コンテナ、ネットワーク、ボリュームを削除
docker compose -f docker/docker-compose.yml down -v

# 未使用のDockerリソースを削除
docker system prune -a
```

## トラブルシューティング

### ポートが既に使用されている

エラー: `Bind for 0.0.0.0:3000 failed: port is already allocated`

**解決方法**: 既に起動しているサービスを停止するか、docker-compose.ymlでポート番号を変更してください。

```bash
# 使用中のポートを確認
lsof -i :3000
lsof -i :8080
```

### コンテナが起動しない

**解決方法**: ログを確認して原因を特定してください。

```bash
docker compose -f docker/docker-compose.yml logs
```

### 変更が反映されない

**解決方法**: コンテナを再起動し、必要に応じて再ビルドしてください。

```bash
docker compose -f docker/docker-compose.yml down
docker compose -f docker/docker-compose.yml up --build
```

### ディスク容量不足

**解決方法**: 未使用のDockerリソースをクリーンアップしてください。

```bash
docker system prune -a --volumes
```

## その他

### 環境変数の設定

環境変数を使用する場合は、`.env` ファイルを作成してください：

```bash
# プロジェクトルートに .env ファイルを作成
cp .env.example .env
```

### 本番環境へのデプロイ

本番環境用のDocker Composeファイルを別途作成することを推奨します。

---

## ライセンス

[ライセンス情報を記載]

## コントリビューター

[コントリビューター情報を記載]
