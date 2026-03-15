import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import MDEditor from "@uiw/react-md-editor";
import { supabase } from "../../../lib/supabase";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { Label } from "../../components/ui/label";
import { Textarea } from "../../components/ui/textarea";

const PRESET_TAGS = [
  "IT", "IoT", "デザイン", "クリエイティブ", "農作業", "バイク", "DIY", "イベント", "日記",
];

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[\s　]+/g, "-")
    .replace(/[^a-z0-9\-]/g, "")
    .replace(/--+/g, "-")
    .replace(/^-|-$/g, "");
}

export function PostEditor() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const isEdit = !!id;

  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [content, setContent] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [coverImageUrl, setCoverImageUrl] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [customTag, setCustomTag] = useState("");
  const [loading, setLoading] = useState(isEdit);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!isEdit) return;

    async function fetchPost() {
      const { data } = await supabase
        .from("posts")
        .select("*")
        .eq("id", id)
        .single();

      if (data) {
        setTitle(data.title);
        setSlug(data.slug);
        setContent(data.content);
        setExcerpt(data.excerpt ?? "");
        setCoverImageUrl(data.cover_image_url ?? "");
        setSelectedTags(data.tags ?? []);
      }
      setLoading(false);
    }

    fetchPost();
  }, [id, isEdit]);

  const handleTitleChange = (val: string) => {
    setTitle(val);
    if (!isEdit) {
      setSlug(slugify(val));
    }
  };

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const addCustomTag = () => {
    const trimmed = customTag.trim();
    if (trimmed && !selectedTags.includes(trimmed)) {
      setSelectedTags((prev) => [...prev, trimmed]);
    }
    setCustomTag("");
  };

  const save = async (status: "draft" | "published") => {
    setError("");
    if (!title.trim()) {
      setError("タイトルを入力してください");
      return;
    }
    if (!slug.trim()) {
      setError("スラッグを入力してください");
      return;
    }
    if (!content.trim()) {
      setError("本文を入力してください");
      return;
    }

    setSaving(true);

    const computedExcerpt = excerpt.trim() || content.slice(0, 150);
    const publishedAt =
      status === "published" ? new Date().toISOString() : null;

    const payload = {
      title: title.trim(),
      slug: slug.trim(),
      content,
      excerpt: computedExcerpt,
      cover_image_url: coverImageUrl.trim() || null,
      tags: selectedTags,
      status,
      updated_at: new Date().toISOString(),
      ...(status === "published" ? { published_at: publishedAt } : {}),
    };

    let err;
    if (isEdit) {
      const result = await supabase.from("posts").update(payload).eq("id", id);
      err = result.error;
    } else {
      const result = await supabase.from("posts").insert(payload);
      err = result.error;
    }

    setSaving(false);

    if (err) {
      setError(err.message);
      return;
    }

    navigate("/admin");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <span className="text-muted-foreground text-[14px]">読み込み中...</span>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen bg-background"
      style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
    >
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#FAF8F5]/90 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/admin" className="text-muted-foreground text-[13px] hover:text-foreground transition-colors">
            ← 記事一覧
          </Link>
          <h1 className="text-[15px] font-semibold text-foreground">
            {isEdit ? "記事を編集" : "新規作成"}
          </h1>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => save("draft")}
              disabled={saving}
              className="text-[13px] border-border"
            >
              下書き保存
            </Button>
            <Button
              size="sm"
              onClick={() => save("published")}
              disabled={saving}
              className="bg-primary text-primary-foreground hover:opacity-90 text-[13px]"
            >
              公開
            </Button>
          </div>
        </div>
      </header>

      <main className="pt-24 pb-16 max-w-4xl mx-auto px-6 lg:px-8 space-y-6">
        {error && (
          <div className="bg-destructive/10 border border-destructive/30 rounded-md px-4 py-3 text-destructive text-[13px]">
            {error}
          </div>
        )}

        {/* Title */}
        <div>
          <Label htmlFor="title" className="text-[13px] text-foreground mb-1.5 block">
            タイトル <span className="text-destructive">*</span>
          </Label>
          <Input
            id="title"
            value={title}
            onChange={(e) => handleTitleChange(e.target.value)}
            placeholder="記事のタイトル"
            className="bg-input-background border-border text-[15px]"
          />
        </div>

        {/* Slug */}
        <div>
          <Label htmlFor="slug" className="text-[13px] text-foreground mb-1.5 block">
            スラッグ <span className="text-destructive">*</span>
          </Label>
          <Input
            id="slug"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            placeholder="url-friendly-slug"
            className="bg-input-background border-border text-[13px] font-mono"
          />
          <p className="text-muted-foreground text-[11px] mt-1">
            URL: /blog/{slug || "..."}
          </p>
        </div>

        {/* Content */}
        <div>
          <Label className="text-[13px] text-foreground mb-1.5 block">
            本文 <span className="text-destructive">*</span>
          </Label>
          <div data-color-mode="light">
            <MDEditor
              value={content}
              onChange={(val) => setContent(val ?? "")}
              height={400}
              preview="live"
            />
          </div>
        </div>

        {/* Excerpt */}
        <div>
          <Label htmlFor="excerpt" className="text-[13px] text-foreground mb-1.5 block">
            抜粋（省略時はコンテンツ先頭150文字）
          </Label>
          <Textarea
            id="excerpt"
            value={excerpt}
            onChange={(e) => setExcerpt(e.target.value)}
            placeholder="記事の要約を入力（省略可）"
            rows={3}
            className="bg-input-background border-border text-[13px]"
          />
        </div>

        {/* Cover Image URL */}
        <div>
          <Label htmlFor="cover" className="text-[13px] text-foreground mb-1.5 block">
            カバー画像URL
          </Label>
          <Input
            id="cover"
            value={coverImageUrl}
            onChange={(e) => setCoverImageUrl(e.target.value)}
            placeholder="https://..."
            className="bg-input-background border-border text-[13px]"
          />
        </div>

        {/* Tags */}
        <div>
          <Label className="text-[13px] text-foreground mb-2 block">タグ</Label>
          <div className="flex flex-wrap gap-2 mb-3">
            {PRESET_TAGS.map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => toggleTag(tag)}
                className={`px-3 py-1 rounded-full text-[12px] transition-colors border ${
                  selectedTags.includes(tag)
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-secondary text-secondary-foreground border-border hover:bg-muted"
                }`}
                style={{ fontFamily: "'Noto Sans JP', sans-serif", fontWeight: 500 }}
              >
                {tag}
              </button>
            ))}
          </div>
          <div className="flex gap-2">
            <Input
              value={customTag}
              onChange={(e) => setCustomTag(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), addCustomTag())}
              placeholder="カスタムタグを追加"
              className="bg-input-background border-border text-[13px] max-w-[200px]"
            />
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={addCustomTag}
              className="text-[12px] border-border"
            >
              追加
            </Button>
          </div>
          {selectedTags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mt-3">
              {selectedTags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1 bg-primary/10 text-primary px-2.5 py-0.5 rounded-full text-[12px]"
                >
                  {tag}
                  <button
                    type="button"
                    onClick={() => toggleTag(tag)}
                    className="hover:text-destructive transition-colors leading-none"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Bottom save buttons */}
        <div className="flex gap-3 pt-4 border-t border-border">
          <Button
            variant="outline"
            onClick={() => save("draft")}
            disabled={saving}
            className="text-[13px] border-border"
          >
            下書き保存
          </Button>
          <Button
            onClick={() => save("published")}
            disabled={saving}
            className="bg-primary text-primary-foreground hover:opacity-90 text-[13px]"
          >
            {saving ? "保存中..." : "公開する"}
          </Button>
        </div>
      </main>
    </div>
  );
}
