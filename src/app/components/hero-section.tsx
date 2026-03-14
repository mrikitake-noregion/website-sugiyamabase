import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";

const heroImage =
  "https://images.unsplash.com/photo-1768947813899-8c5012e9abce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXBhbmVzZSUyMG1vdW50YWluJTIwdmlsbGFnZSUyMGF1dHVtbiUyMGdyZWVufGVufDF8fHx8MTc3MDY4NjQyNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

const workspaceImage =
  "https://images.unsplash.com/photo-1766802981801-4b4a9a1d8f1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb3dwcmtpbmclMjB3b29kZW4lMjB3b3Jrc3BhY2UlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzA2ODY0MTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-end pb-20 pt-32 lg:pt-16 lg:items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src={heroImage}
          alt="会津坂下町の里山風景"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#2C2418]/80 via-[#2C2418]/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2C2418]/60 via-transparent to-[#2C2418]/20" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end lg:items-center">
          {/* Text Content */}
          <motion.div
            className="lg:col-span-7 space-y-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="space-y-2">
              <p
                className="text-[#C17B3A] text-[12px] tracking-[0.3em] uppercase"
                style={{ fontFamily: "'Noto Sans JP', sans-serif", fontWeight: 500 }}
              >
                Creative Coworking in Satoyama
              </p>
              <h1
                className="text-white text-[36px] md:text-[52px] lg:text-[60px] leading-[1.15] tracking-tight"
                style={{ fontFamily: "'Noto Sans JP', sans-serif", fontWeight: 700 }}
              >
                里山で、
                <br />
                <span className="text-[#C17B3A]">感性</span>が交差する。
              </h1>
            </div>
            <p
              className="text-white/75 max-w-md text-[14px] md:text-[15px] leading-relaxed"
              style={{ fontFamily: "'Noto Sans JP', sans-serif", fontWeight: 300 }}
            >
              福島県会津坂下町の里山に佇むクリエイティブ・コワーキングスペース。
              自然、手仕事、テクノロジーが混ざり合い、新しい視点が生まれる秘密基地。
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href="#access"
                className="inline-flex items-center justify-center bg-[#C17B3A] text-white px-7 py-3 rounded-sm text-[14px] tracking-wide hover:bg-[#A86A30] transition-colors shadow-lg shadow-[#C17B3A]/20"
                style={{ fontFamily: "'Noto Sans JP', sans-serif", fontWeight: 500 }}
              >
                内覧予約はこちら
              </a>
              <a
                href="#about"
                className="inline-flex items-center justify-center border border-white/30 text-white px-7 py-3 rounded-sm text-[14px] tracking-wide hover:bg-white/10 transition-colors"
                style={{ fontFamily: "'Noto Sans JP', sans-serif", fontWeight: 400 }}
              >
                もっと知る
              </a>
            </div>
          </motion.div>

          {/* Floating Workspace Image */}
          <motion.div
            className="hidden lg:block lg:col-span-5"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-sm p-2 shadow-2xl">
                <ImageWithFallback
                  src={workspaceImage}
                  alt="Sugiyamabaseのワークスペース"
                  className="w-full h-[340px] object-cover rounded-sm"
                />
              </div>
              {/* Decorative tag */}
              <div className="absolute -bottom-4 -left-4 bg-[#FAF8F5] px-4 py-2 rounded-sm shadow-lg">
                <p
                  className="text-foreground text-[11px] tracking-wider"
                  style={{ fontFamily: "'Noto Sans JP', sans-serif", fontWeight: 500 }}
                >
                  Est. 2024 / Aizu-Bange, Fukushima
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <span
            className="text-[10px] tracking-[0.2em] uppercase"
            style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
          >
            Scroll
          </span>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
}