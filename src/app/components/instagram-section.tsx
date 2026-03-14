import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";
import { Instagram, Heart, MessageCircle, ArrowUpRight } from "lucide-react";

const posts = [
  {
    id: "1",
    image:
      "https://images.unsplash.com/photo-1707045130951-bc2d9d87126d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXBhbmVzZSUyMGNvdW50cnlzaWRlJTIwd29vZGVuJTIwd29ya3Nob3B8ZW58MXx8fHwxNzcwNjg3OTcyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    caption: "冬の工房。薪ストーブの温もりに包まれながら、黙々と手を動かす時間。",
    likes: 124,
    comments: 8,
    date: "2026.01.28",
  },
  {
    id: "2",
    image:
      "https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kbWFkZSUyMGNyYWZ0JTIwcG90dGVyeSUyMGNlcmFtaWNzfGVufDF8fHx8MTc3MDY4Nzk3M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    caption:
      "陶芸ワークショップ開催しました。土に触れると、頭の中がクリアになる感覚。",
    likes: 203,
    comments: 15,
    date: "2026.01.15",
  },
  {
    id: "3",
    image:
      "https://images.unsplash.com/photo-1762608206423-be8c07645de7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3dvcmtpbmclMjBjb21tdW5pdHklMjBnYXRoZXJpbmclMjB0YWJsZXxlbnwxfHx8fDE3NzA2ODc5NzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    caption:
      "月イチの交流会。クリエイター、農家、エンジニアが同じテーブルで語り合う夜。",
    likes: 178,
    comments: 22,
    date: "2026.01.10",
  },
  {
    id: "4",
    image:
      "https://images.unsplash.com/photo-1636958926605-2016302f4e35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXR1bW4lMjBhcHBsZSUyMGhhcnZlc3QlMjBiYXNrZXR8ZW58MXx8fHwxNzcwNjg3OTc0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    caption:
      "りんごの季節。今年も地元農家さんと一緒に収穫。この赤、会津の宝物です。",
    likes: 312,
    comments: 31,
    date: "2025.10.22",
  },
  {
    id: "5",
    image:
      "https://images.unsplash.com/photo-1641893979088-87d4d9604c36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kd29ya2luZyUyMGhhbmRtYWRlJTIwZnVybml0dXJlfGVufDF8fHx8MTc3MDY4Nzk3NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    caption:
      "手づくりスツール完成。木目の表情ひとつひとつが、この土地の記憶を宿している。",
    likes: 156,
    comments: 12,
    date: "2025.09.18",
  },
  {
    id: "6",
    image:
      "https://images.unsplash.com/photo-1761052877503-c76a2801ed5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3JuaW5nJTIwbWlzdCUyMHJ1cmFsJTIwbW91bnRhaW4lMjBqYXBhbnxlbnwxfHx8fDE3NzA2ODc5NzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    caption:
      "早朝の里山。朝霧が晴れていく瞬間、ここにしかない景色が広がる。",
    likes: 267,
    comments: 19,
    date: "2025.08.05",
  },
];

export function InstagramSection() {
  return (
    <section className="py-24 md:py-32 bg-secondary">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div>
            <div className="flex items-center gap-3 mb-3">
              <Instagram className="w-5 h-5 text-[#C17B3A]" />
              <p
                className="text-[#C17B3A] text-[11px] tracking-[0.3em] uppercase"
                style={{
                  fontFamily: "'Noto Sans JP', sans-serif",
                  fontWeight: 500,
                }}
              >
                Instagram
              </p>
            </div>
            <h2
              className="text-foreground text-[28px] md:text-[36px] leading-[1.3] tracking-tight"
              style={{
                fontFamily: "'Noto Sans JP', sans-serif",
                fontWeight: 600,
              }}
            >
              日々のこと。
            </h2>
          </div>
          <a
            href="https://www.instagram.com/sugiyamabase/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary text-[13px] tracking-wide hover:gap-3 transition-all duration-300 group"
            style={{
              fontFamily: "'Noto Sans JP', sans-serif",
              fontWeight: 500,
            }}
          >
            @sugiyamabase をフォロー
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </motion.div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {posts.map((post, index) => (
            <motion.a
              key={post.id}
              href="https://www.instagram.com/sugiyamabase/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden rounded-sm bg-[#EDE7DD]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: "easeOut",
              }}
            >
              <ImageWithFallback
                src={post.image}
                alt={post.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-[#2C2418]/0 group-hover:bg-[#2C2418]/70 transition-all duration-400 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-4">
                  {/* Engagement */}
                  <div className="flex items-center justify-center gap-5 mb-4">
                    <span className="flex items-center gap-1.5 text-white">
                      <Heart className="w-4 h-4" />
                      <span
                        className="text-[13px]"
                        style={{
                          fontFamily: "'Noto Sans JP', sans-serif",
                          fontWeight: 500,
                        }}
                      >
                        {post.likes}
                      </span>
                    </span>
                    <span className="flex items-center gap-1.5 text-white">
                      <MessageCircle className="w-4 h-4" />
                      <span
                        className="text-[13px]"
                        style={{
                          fontFamily: "'Noto Sans JP', sans-serif",
                          fontWeight: 500,
                        }}
                      >
                        {post.comments}
                      </span>
                    </span>
                  </div>
                  {/* Caption (truncated) */}
                  <p
                    className="text-white/80 text-[12px] leading-relaxed line-clamp-2 hidden md:block"
                    style={{
                      fontFamily: "'Noto Sans JP', sans-serif",
                      fontWeight: 300,
                    }}
                  >
                    {post.caption}
                  </p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Follow CTA - Mobile */}
        <div className="mt-8 text-center md:hidden">
          <a
            href="https://www.instagram.com/sugiyamabase/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-border text-foreground px-6 py-3 rounded-sm text-[13px] tracking-wide hover:bg-white transition-colors"
            style={{
              fontFamily: "'Noto Sans JP', sans-serif",
              fontWeight: 500,
            }}
          >
            <Instagram className="w-4 h-4" />
            Instagramで見る
          </a>
        </div>
      </div>
    </section>
  );
}
