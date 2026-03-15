import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { supabase } from "../../lib/supabase";
import { Navbar } from "../components/navbar";
import { FooterSection } from "../components/footer-section";
import { TagBadge } from "../components/blog/TagBadge";

interface Post {
  id: string;
  title: string;
  slug: string;
  content: string;
  cover_image_url: string | null;
  tags: string[];
  published_at: string | null;
}

export function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    async function fetchPost() {
      if (!slug) return;
      setLoading(true);
      const { data } = await supabase
        .from("posts")
        .select("id, title, slug, content, cover_image_url, tags, published_at")
        .eq("slug", slug)
        .eq("status", "published")
        .single();

      if (data) {
        setPost(data);
      } else {
        setNotFound(true);
      }
      setLoading(false);
    }

    fetchPost();
  }, [slug]);

  const date = post?.published_at
    ? new Date(post.published_at).toLocaleDateString("ja-JP", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";

  return (
    <div
      className="min-h-screen bg-background"
      style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
    >
      <Navbar />
      <main className="pt-24 pb-16 max-w-3xl mx-auto px-6 lg:px-8">
        {loading ? (
          <div className="text-center py-20 text-muted-foreground text-[14px]">
            読み込み中...
          </div>
        ) : notFound || !post ? (
          <div className="text-center py-20">
            <p className="text-muted-foreground text-[14px] mb-4">
              記事が見つかりませんでした
            </p>
            <Link
              to="/blog"
              className="text-primary text-[13px] hover:underline"
            >
              ← ブログ一覧に戻る
            </Link>
          </div>
        ) : (
          <>
            <div className="mb-2">
              <Link
                to="/blog"
                className="text-muted-foreground text-[12px] hover:text-foreground transition-colors"
              >
                ← Blog
              </Link>
            </div>

            {post.cover_image_url && (
              <div className="aspect-video overflow-hidden rounded-lg mb-8">
                <img
                  src={post.cover_image_url}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            <div className="flex flex-wrap gap-1.5 mb-4">
              {post.tags.map((tag) => (
                <TagBadge key={tag} tag={tag} />
              ))}
            </div>

            <h1
              className="text-[26px] font-medium text-foreground leading-snug mb-3"
              style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
            >
              {post.title}
            </h1>

            {date && (
              <p className="text-muted-foreground text-[12px] mb-10">{date}</p>
            )}

            <div className="prose prose-neutral max-w-none text-[15px] leading-8 text-foreground">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {post.content}
              </ReactMarkdown>
            </div>
          </>
        )}
      </main>
      <FooterSection />
    </div>
  );
}
