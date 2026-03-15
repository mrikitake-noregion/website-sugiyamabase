# ブログ機能実装計画 — sugiyamabase_Figmamake

## Context
Figma Makeで生成されたReact/Viteプロジェクトにブログ機能と管理画面を追加する。
現状、`src/app/` のReactコードはViteエントリーポイント未設定・React未インストールで**完全に未接続**。
まずReactアプリを正しく起動できる状態にしてから、ブログ機能を実装する。

---

## 現状の問題
- `index.html` がルートに存在しない（`static/index.html` は純粋なHTML/CSS/JS版）
- `src/main.tsx` が存在しない（Reactマウントポイントなし）
- `react` / `react-dom` が `peerDependencies`（optional）のみで未インストール

---

## 技術構成

| 用途 | パッケージ |
|------|-----------|
| ルーティング | `react-router-dom` |
| バックエンド | `@supabase/supabase-js` |
| Markdownエディター | `@uiw/react-md-editor` |
| Markdownレンダリング | `react-markdown` + `remark-gfm` |
| 認証 | Supabase Auth（メール+パスワード） |

---

## 実装ステップ

### Step 1: Reactアプリを起動できる状態にする

**新規作成:**
- `/workspace/sugiyamabase_Figmamake/index.html`
  - Viteエントリー。`<div id="root">` + `<script type="module" src="/src/main.tsx">`
  - Google Fonts（Noto Sans JP）のリンクを含める
- `/workspace/sugiyamabase_Figmamake/src/main.tsx`
  - `ReactDOM.createRoot(document.getElementById('root')).render(<App />)`
  - `src/styles/index.css` をimport

**インストール:**
```bash
npm install react react-dom react-router-dom @supabase/supabase-js @uiw/react-md-editor react-markdown remark-gfm
npm install -D @types/react @types/react-dom
```

**修正:**
- `src/app/App.tsx`: `<BrowserRouter>` + `<Routes>` でラップ、ルーティング追加

---

### Step 2: Supabaseスキーマ

**新規作成:** `supabase/migrations/001_blog.sql`

```sql
CREATE TABLE posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  content TEXT NOT NULL,          -- Markdown本文
  excerpt TEXT,                   -- 一覧用の抜粋
  cover_image_url TEXT,
  status TEXT DEFAULT 'draft',    -- 'draft' | 'published'
  tags TEXT[] DEFAULT '{}',       -- タグ配列
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  published_at TIMESTAMPTZ
);

-- RLS: 公開記事は誰でも読める / 書き込みは認証ユーザーのみ
ALTER TABLE posts ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public can read published posts" ON posts FOR SELECT USING (status = 'published');
CREATE POLICY "Auth users can manage posts" ON posts USING (auth.role() = 'authenticated');
```

**新規作成:** `src/lib/supabase.ts`
- `createClient(url, anonKey)` で初期化
- `.env.local` から `VITE_SUPABASE_URL` / `VITE_SUPABASE_ANON_KEY` を読む

---

### Step 3: ルーティング設計

| パス | コンポーネント | 説明 |
|------|--------------|------|
| `/` | `HomePage` | 既存のApp.tsx内容をそのまま使用 |
| `/blog` | `BlogPage` | 記事一覧 + タグフィルター |
| `/blog/:slug` | `BlogPostPage` | 記事詳細（Markdownレンダリング） |
| `/admin/login` | `AdminLogin` | メール+パスワードログイン |
| `/admin` | `AdminDashboard` | 記事一覧・管理（protected） |
| `/admin/posts/new` | `PostEditor` | 新規作成（protected） |
| `/admin/posts/:id/edit` | `PostEditor` | 編集（protected） |

**ProtectedRoute**: Supabase Auth セッションがなければ `/admin/login` にリダイレクト

---

### Step 4: ブログ公開側

**新規作成:**
- `src/app/pages/BlogPage.tsx`
  - Supabaseから公開済み記事を取得
  - タグフィルターUI（複数選択可）
  - 記事カード一覧（タイトル・日付・タグ・抜粋）
- `src/app/pages/BlogPostPage.tsx`
  - slugで記事を取得
  - `react-markdown` + `remark-gfm` でMarkdownをレンダリング
  - カバー画像・タグ表示
- `src/app/components/blog/BlogCard.tsx`
- `src/app/components/blog/TagBadge.tsx`（既存のtheme.cssのカラートークン使用）
- `src/app/components/blog/TagFilter.tsx`

**Navbarに「Blog」リンクを追加:** `src/app/components/navbar.tsx`

---

### Step 5: 管理画面

**新規作成:**
- `src/app/pages/admin/AdminLogin.tsx`
  - `supabase.auth.signInWithPassword()` 使用
  - 既存shadcn/ui の `Input`, `Button` コンポーネント活用
- `src/app/pages/admin/AdminDashboard.tsx`
  - 記事一覧テーブル（タイトル・ステータス・日付・タグ）
  - 新規作成ボタン / 編集・削除ボタン
  - ログアウトボタン
- `src/app/pages/admin/PostEditor.tsx`
  - タイトル入力 → slugを自動生成（編集可）
  - `@uiw/react-md-editor` でMarkdown入力（左:編集 / 右:プレビュー）
  - タグ選択UI: 定義済みタグをボタンで選択 + カスタムタグを追加可能
  - カバー画像URL入力
  - 抜粋入力（省略時はcontentの先頭150文字から自動生成）
  - 下書き保存 / 公開ボタン
- `src/app/components/admin/ProtectedRoute.tsx`

**定義済みタグ一覧（PostEditorで提示）:**
`IT`, `IoT`, `デザイン`, `クリエイティブ`, `農作業`, `バイク`, `DIY`, `イベント`, `日記`

---

### Step 6: 環境変数

`.env.local` に追記:
```
VITE_SUPABASE_URL=your-project-url
VITE_SUPABASE_ANON_KEY=your-anon-key
```

---

## 変更するファイル

| ファイル | 変更内容 |
|---------|---------|
| `src/app/App.tsx` | BrowserRouter + Routes追加、ホームのコンテンツを`HomePage`に切り出し |
| `src/app/components/navbar.tsx` | `/blog` リンクを追加 |

## 新規作成するファイル（14ファイル）

- `index.html`（Viteルートエントリー）
- `src/main.tsx`
- `src/lib/supabase.ts`
- `supabase/migrations/001_blog.sql`
- `src/app/pages/BlogPage.tsx`
- `src/app/pages/BlogPostPage.tsx`
- `src/app/pages/admin/AdminLogin.tsx`
- `src/app/pages/admin/AdminDashboard.tsx`
- `src/app/pages/admin/PostEditor.tsx`
- `src/app/components/blog/BlogCard.tsx`
- `src/app/components/blog/TagBadge.tsx`
- `src/app/components/blog/TagFilter.tsx`
- `src/app/components/admin/ProtectedRoute.tsx`

---

## 動作確認

1. `npm run dev`（= `npx vite`）でReactアプリが起動することを確認
2. `/blog` でブログ一覧が表示される（Supabase未接続時は空）
3. `/admin/login` でログイン画面が表示される
4. ログイン後 `/admin/posts/new` で記事作成・保存できる
5. 保存後 `/blog` に記事が表示される
6. タグフィルターで絞り込みができる
