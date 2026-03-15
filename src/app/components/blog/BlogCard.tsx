import { Link } from "react-router-dom";
import { TagBadge } from "./TagBadge";

interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  cover_image_url: string | null;
  tags: string[];
  published_at: string | null;
}

interface BlogCardProps {
  post: Post;
}

export function BlogCard({ post }: BlogCardProps) {
  const date = post.published_at
    ? new Date(post.published_at).toLocaleDateString("ja-JP", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";

  return (
    <Link to={`/blog/${post.slug}`} className="group block">
      <article className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
        {post.cover_image_url && (
          <div className="aspect-video overflow-hidden">
            <img
              src={post.cover_image_url}
              alt={post.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}
        <div className="p-5">
          <div className="flex flex-wrap gap-1.5 mb-3">
            {post.tags.map((tag) => (
              <TagBadge key={tag} tag={tag} />
            ))}
          </div>
          <h2
            className="text-foreground text-[16px] font-medium leading-snug mb-2 group-hover:text-primary transition-colors"
            style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
          >
            {post.title}
          </h2>
          {post.excerpt && (
            <p
              className="text-muted-foreground text-[13px] leading-relaxed line-clamp-3"
              style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
            >
              {post.excerpt}
            </p>
          )}
          {date && (
            <p className="text-muted-foreground text-[12px] mt-3">{date}</p>
          )}
        </div>
      </article>
    </Link>
  );
}
