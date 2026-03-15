import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../../../lib/supabase";
import { Button } from "../../components/ui/button";
import { TagBadge } from "../../components/blog/TagBadge";

interface Post {
  id: string;
  title: string;
  slug: string;
  status: string;
  tags: string[];
  created_at: string;
  published_at: string | null;
}

export function AdminDashboard() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts();
  }, []);

  async function fetchPosts() {
    setLoading(true);
    const { data } = await supabase
      .from("posts")
      .select("id, title, slug, status, tags, created_at, published_at")
      .order("created_at", { ascending: false });
    setPosts(data ?? []);
    setLoading(false);
  }

  async function handleDelete(id: string) {
    if (!confirm("この記事を削除しますか？")) return;
    await supabase.from("posts").delete().eq("id", id);
    fetchPosts();
  }

  async function handleLogout() {
    await supabase.auth.signOut();
    navigate("/admin/login");
  }

  return (
    <div
      className="min-h-screen bg-background"
      style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
    >
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#FAF8F5]/90 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center">
              <span className="text-primary-foreground text-[11px] font-semibold">SB</span>
            </div>
            <span className="text-foreground text-[15px] font-semibold">管理画面</span>
          </Link>
          <Button
            variant="ghost"
            onClick={handleLogout}
            className="text-[13px] text-muted-foreground hover:text-foreground"
          >
            ログアウト
          </Button>
        </div>
      </header>

      <main className="pt-24 pb-16 max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-[22px] font-medium text-foreground">記事一覧</h1>
          <Button
            asChild
            className="bg-primary text-primary-foreground hover:opacity-90 text-[13px]"
          >
            <Link to="/admin/posts/new">+ 新規作成</Link>
          </Button>
        </div>

        {loading ? (
          <div className="text-center py-20 text-muted-foreground text-[14px]">
            読み込み中...
          </div>
        ) : posts.length === 0 ? (
          <div className="text-center py-20 text-muted-foreground text-[14px]">
            記事がまだありません
          </div>
        ) : (
          <div className="border border-border rounded-lg overflow-hidden">
            <table className="w-full text-[13px]">
              <thead className="bg-secondary">
                <tr>
                  <th className="text-left px-4 py-3 text-muted-foreground font-medium">タイトル</th>
                  <th className="text-left px-4 py-3 text-muted-foreground font-medium">ステータス</th>
                  <th className="text-left px-4 py-3 text-muted-foreground font-medium hidden md:table-cell">タグ</th>
                  <th className="text-left px-4 py-3 text-muted-foreground font-medium hidden lg:table-cell">作成日</th>
                  <th className="px-4 py-3"></th>
                </tr>
              </thead>
              <tbody>
                {posts.map((post, i) => (
                  <tr
                    key={post.id}
                    className={i % 2 === 0 ? "bg-card" : "bg-background"}
                  >
                    <td className="px-4 py-3 text-foreground font-medium max-w-[200px] truncate">
                      {post.title}
                    </td>
                    <td className="px-4 py-3">
                      <span
                        className={`inline-block px-2 py-0.5 rounded-full text-[11px] font-medium ${
                          post.status === "published"
                            ? "bg-primary/10 text-primary"
                            : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {post.status === "published" ? "公開" : "下書き"}
                      </span>
                    </td>
                    <td className="px-4 py-3 hidden md:table-cell">
                      <div className="flex flex-wrap gap-1">
                        {post.tags.slice(0, 2).map((tag) => (
                          <TagBadge key={tag} tag={tag} />
                        ))}
                        {post.tags.length > 2 && (
                          <span className="text-muted-foreground text-[11px]">
                            +{post.tags.length - 2}
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="px-4 py-3 text-muted-foreground hidden lg:table-cell">
                      {new Date(post.created_at).toLocaleDateString("ja-JP")}
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2 justify-end">
                        <Button
                          variant="ghost"
                          size="sm"
                          asChild
                          className="text-[12px] h-7 px-3"
                        >
                          <Link to={`/admin/posts/${post.id}/edit`}>編集</Link>
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleDelete(post.id)}
                          className="text-[12px] h-7 px-3 text-destructive hover:text-destructive"
                        >
                          削除
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </main>
    </div>
  );
}
