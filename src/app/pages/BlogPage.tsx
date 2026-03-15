import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";
import { Navbar } from "../components/navbar";
import { FooterSection } from "../components/footer-section";
import { BlogCard } from "../components/blog/BlogCard";
import { TagFilter } from "../components/blog/TagFilter";

const ALL_TAGS = [
  "IT", "IoT", "デザイン", "クリエイティブ", "農作業", "バイク", "DIY", "イベント", "日記",
];

interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  cover_image_url: string | null;
  tags: string[];
  published_at: string | null;
}

export function BlogPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      setLoading(true);
      let query = supabase
        .from("posts")
        .select("id, title, slug, excerpt, cover_image_url, tags, published_at")
        .eq("status", "published")
        .order("published_at", { ascending: false });

      if (selectedTags.length > 0) {
        query = query.overlaps("tags", selectedTags);
      }

      const { data } = await query;
      setPosts(data ?? []);
      setLoading(false);
    }

    fetchPosts();
  }, [selectedTags]);

  return (
    <div
      className="min-h-screen bg-background"
      style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
    >
      <Navbar />
      <main className="pt-24 pb-16 max-w-6xl mx-auto px-6 lg:px-8">
        <div className="mb-10">
          <h1 className="text-[28px] font-medium text-foreground mb-2">Blog</h1>
          <p className="text-muted-foreground text-[14px]">
            Sugiyamabaseからの最新情報をお届けします
          </p>
        </div>

        <div className="mb-8">
          <p className="text-[12px] text-muted-foreground mb-3">タグで絞り込む</p>
          <TagFilter
            tags={ALL_TAGS}
            selected={selectedTags}
            onChange={setSelectedTags}
          />
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        )}
      </main>
      <FooterSection />
    </div>
  );
}
