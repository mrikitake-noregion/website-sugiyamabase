import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";
import {
  ArrowUpRight,
  Palette,
  Globe,
  PenTool,
  Code,
  Cpu,
  Layers,
} from "lucide-react";

const juiceLabelImage =
  "https://images.unsplash.com/photo-1626120032630-b51c96a544f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcHBsZSUyMGp1aWNlJTIwYm90dGxlJTIwbGFiZWwlMjBkZXNpZ258ZW58MXx8fHwxNzcwNjg3OTE3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

const corporateSiteImage =
  "https://images.unsplash.com/photo-1744230673231-865d54a0aba4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyZSUyMGNvcnBvcmF0ZSUyMHdlYnNpdGUlMjBsYXB0b3AlMjBtb2NrdXB8ZW58MXx8fHwxNzcwNjg3OTE4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

const toteBagImage =
  "https://images.unsplash.com/photo-1631208839946-a717f388917a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW52YXMlMjB0b3RlJTIwYmFnJTIwbG9nbyUyMGJyYW5kaW5nfGVufDF8fHx8MTc3MDY4NzkxOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

const services = [
  {
    icon: <Palette className="w-4 h-4" />,
    label: "グラフィックデザイン",
  },
  {
    icon: <Globe className="w-4 h-4" />,
    label: "Web制作",
  },
  {
    icon: <PenTool className="w-4 h-4" />,
    label: "ブランディング",
  },
  {
    icon: <Code className="w-4 h-4" />,
    label: "システム開発",
  },
  {
    icon: <Cpu className="w-4 h-4" />,
    label: "IoTプロトタイピング",
  },
  {
    icon: <Layers className="w-4 h-4" />,
    label: "パッケージデザイン",
  },
];

const works = [
  {
    id: "apple-juice-label",
    title: "リンゴジュースラベル",
    subtitle: "Package Design",
    client: "地元りんご農家",
    year: "2025",
    category: "パッケージデザイン",
    description:
      "会津坂下町産りんごの魅力を伝えるジュースラベルデザイン。里山の四季と手摘みの丁寧さを表現し、産直販売から道の駅まで幅広い販路で手に取られるパッケージに仕上げました。",
    image: juiceLabelImage,
    color: "#C17B3A",
  },
  {
    id: "agri-corporate-site",
    title: "農業法人コーポレートサイト",
    subtitle: "Web Design & Development",
    client: "地域農業法人",
    year: "2025",
    category: "Web制作",
    description:
      "「土地に根ざし、未来を耕す」という理念を体現するコーポレートサイト。ドローン空撮による圃場ビジュアルと、スタッフの声を軸にした構成で、採用と販路拡大の両面を支援。",
    image: corporateSiteImage,
    color: "#5A6E2E",
  },
  {
    id: "novelty-tote-bag",
    title: "ノベルティトートバッグ",
    subtitle: "Logo & Goods Design",
    client: "地域イベント実行委員会",
    year: "2024",
    category: "ロゴデザイン",
    description:
      "地域イベントの記念ノベルティとして制作したトートバッグのロゴデザイン。里山のシルエットとイベントのアイデンティティを融合し、日常使いしたくなるデザインに。",
    image: toteBagImage,
    color: "#2C2418",
  },
];

export function WorksSection() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="works" className="py-24 md:py-32 bg-[#FAF8F5]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p
            className="text-[#C17B3A] text-[11px] tracking-[0.3em] uppercase mb-3"
            style={{
              fontFamily: "'Noto Sans JP', sans-serif",
              fontWeight: 500,
            }}
          >
            Works & Services
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <h2
                className="text-foreground text-[28px] md:text-[36px] leading-[1.3] tracking-tight"
                style={{
                  fontFamily: "'Noto Sans JP', sans-serif",
                  fontWeight: 600,
                }}
              >
                つくることで、
                <br className="hidden md:block" />
                伝える力になる。
              </h2>
            </div>
            <p
              className="text-muted-foreground text-[14px] max-w-md leading-relaxed"
              style={{
                fontFamily: "'Noto Sans JP', sans-serif",
                fontWeight: 300,
              }}
            >
              Sugiyamabaseは、オープンスペースとしてだけでなく、デザイン・ブランディング・Web制作・IoTなどのクリエイティブワークを受注しています。地域に寄り添いながら、確かな技術で想いを形にします。
            </p>
          </div>

          {/* Services Tags */}
          <div className="flex flex-wrap gap-3 mt-8">
            {services.map((service) => (
              <div
                key={service.label}
                className="inline-flex items-center gap-2 bg-secondary px-4 py-2 rounded-sm"
              >
                <span className="text-primary">{service.icon}</span>
                <span
                  className="text-foreground text-[12px] tracking-wide"
                  style={{
                    fontFamily: "'Noto Sans JP', sans-serif",
                    fontWeight: 400,
                  }}
                >
                  {service.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Works Grid */}
        <div className="space-y-6">
          {works.map((work, index) => (
            <motion.div
              key={work.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut",
              }}
            >
              <div
                className="group bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500 cursor-pointer"
                onMouseEnter={() => setHoveredId(work.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 ${
                    index % 2 === 1 ? "lg:direction-rtl" : ""
                  }`}
                >
                  {/* Image */}
                  <div
                    className={`lg:col-span-5 relative overflow-hidden ${
                      index % 2 === 1 ? "lg:order-2" : ""
                    }`}
                  >
                    <div className="relative h-[260px] lg:h-full min-h-[280px]">
                      <ImageWithFallback
                        src={work.image}
                        alt={work.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div
                        className="absolute inset-0 opacity-20 mix-blend-multiply transition-opacity duration-500"
                        style={{ backgroundColor: work.color }}
                      />
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span
                          className="bg-white/90 backdrop-blur-sm text-[#2C2418] text-[10px] px-3 py-1.5 rounded-sm tracking-wide"
                          style={{
                            fontFamily: "'Noto Sans JP', sans-serif",
                            fontWeight: 500,
                          }}
                        >
                          {work.category}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div
                    className={`lg:col-span-7 p-6 md:p-8 lg:p-10 flex flex-col justify-center ${
                      index % 2 === 1 ? "lg:order-1" : ""
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <span
                        className="text-muted-foreground text-[11px] tracking-[0.15em] uppercase"
                        style={{
                          fontFamily: "'Noto Sans JP', sans-serif",
                          fontWeight: 400,
                        }}
                      >
                        {work.subtitle}
                      </span>
                      <span className="w-6 h-px bg-border" />
                      <span
                        className="text-muted-foreground text-[11px] tracking-wide"
                        style={{
                          fontFamily: "'Noto Sans JP', sans-serif",
                          fontWeight: 400,
                        }}
                      >
                        {work.year}
                      </span>
                    </div>

                    <h3
                      className="text-foreground text-[22px] md:text-[26px] tracking-tight mb-2"
                      style={{
                        fontFamily: "'Noto Sans JP', sans-serif",
                        fontWeight: 600,
                      }}
                    >
                      {work.title}
                    </h3>

                    <p
                      className="text-muted-foreground text-[12px] mb-4"
                      style={{
                        fontFamily: "'Noto Sans JP', sans-serif",
                        fontWeight: 400,
                      }}
                    >
                      Client: {work.client}
                    </p>

                    <p
                      className="text-muted-foreground text-[14px] leading-[1.8] max-w-lg"
                      style={{
                        fontFamily: "'Noto Sans JP', sans-serif",
                        fontWeight: 300,
                      }}
                    >
                      {work.description}
                    </p>

                    <div className="mt-6">
                      <span
                        className="inline-flex items-center gap-2 text-primary text-[13px] tracking-wide group-hover:gap-3 transition-all duration-300"
                        style={{
                          fontFamily: "'Noto Sans JP', sans-serif",
                          fontWeight: 500,
                        }}
                      >
                        詳しく見る
                        <ArrowUpRight
                          className={`w-4 h-4 transition-transform duration-300 ${
                            hoveredId === work.id
                              ? "translate-x-0.5 -translate-y-0.5"
                              : ""
                          }`}
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="bg-secondary rounded-sm p-8 md:p-10 inline-block w-full max-w-2xl">
            <p
              className="text-foreground text-[16px] md:text-[18px] tracking-tight mb-3"
              style={{
                fontFamily: "'Noto Sans JP', sans-serif",
                fontWeight: 600,
              }}
            >
              制作のご相談、お気軽にどうぞ。
            </p>
            <p
              className="text-muted-foreground text-[13px] leading-relaxed mb-6"
              style={{
                fontFamily: "'Noto Sans JP', sans-serif",
                fontWeight: 300,
              }}
            >
              ブランディング、デザイン、Web、IoTまで。
              <br className="hidden sm:block" />
              地域のことばで、地域の想いを形にします。
            </p>
            <a
              href="mailto:hello@sugiyamabase.jp"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3 rounded-sm text-[14px] tracking-wide hover:opacity-90 transition-opacity"
              style={{
                fontFamily: "'Noto Sans JP', sans-serif",
                fontWeight: 500,
              }}
            >
              お問い合わせ
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
