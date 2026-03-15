# 残タスク一覧

## 🔴 必須（Supabase連携）

### 1. Supabaseプロジェクトを作成する
- [ ] https://supabase.com でプロジェクト作成
- [ ] Project URL と anon key を取得

### 2. .env.local を実際の値に更新する
```
VITE_SUPABASE_URL=https://xxxxxxxx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJ...
```
現在は `placeholder` 値が入っているためデータの読み書き不可。

### 3. DBスキーマを適用する
- [ ] Supabase ダッシュボード → SQL Editor を開く
- [ ] `supabase/migrations/001_blog.sql` の内容を貼り付けて実行

### 4. 管理ユーザーを作成する
- [ ] Supabase ダッシュボード → Authentication → Users → "Invite user"
- [ ] またはSQL: `select auth.create_user('email', 'password')` で作成
- [ ] `/admin/login` でログインできることを確認

---

## 🟡 動作確認（Supabase連携後）

- [ ] `/blog` — 記事一覧が表示される（最初は空）
- [ ] `/admin/login` — ログインできる
- [ ] `/admin/posts/new` — 記事を作成・公開できる
- [ ] `/blog` — 公開した記事が表示される
- [ ] `/blog/:slug` — 記事詳細・Markdownが正しくレンダリングされる
- [ ] タグフィルターで絞り込みができる
- [ ] `/admin` — 記事の編集・削除ができる

---

## 🟢 任意（あとで対応）

### コンテンツ
- [ ] ホームページに「Blog」セクションを追加（最新記事3件を表示）
- [ ] OGPタグ追加（記事ごとのSNSシェア対応）

### 機能追加
- [ ] 画像アップロード（現在はURL入力のみ）→ Supabase Storage 連携
- [ ] ページネーション（記事数が増えたとき）
- [ ] 記事の公開日時を指定できるようにする

### デプロイ
- [ ] Vercel / Netlify などにデプロイ
- [ ] 本番用の環境変数を設定

---

## 📁 参考：作成済みファイル

| ファイル | 用途 |
|---------|------|
| `supabase/migrations/001_blog.sql` | DBスキーマ（Supabaseに手動適用） |
| `.env.local` | 環境変数（要書き換え） |
| `src/lib/supabase.ts` | Supabaseクライアント |
| `src/app/pages/BlogPage.tsx` | ブログ一覧 |
| `src/app/pages/BlogPostPage.tsx` | 記事詳細 |
| `src/app/pages/admin/AdminLogin.tsx` | 管理画面ログイン |
| `src/app/pages/admin/AdminDashboard.tsx` | 記事管理 |
| `src/app/pages/admin/PostEditor.tsx` | 記事作成・編集 |
