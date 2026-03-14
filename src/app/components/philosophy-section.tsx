import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";

const landscapeImage =
  "https://images.unsplash.com/photo-1760243875588-458d1917c946?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydXJhbCUyMGphcGFuZXNlJTIwbGFuZHNjYXBlJTIwcmljZSUyMGZpZWxkcyUyMG1vdW50YWluc3xlbnwxfHx8fDE3NzA2ODY0MjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

const pillars = [
  {
    number: "01",
    title: "伝える",
    subtitle: "Communicate",
    description:
      "里山の暮らしから生まれる知恵と技術を、現代のクリエイティブと掛け合わせて発信する。土地に根ざした物語を、新しいかたちで世界へ届ける拠点。",
  },
  {
    number: "02",
    title: "集う",
    subtitle: "Gather",
    description:
      "異なる背景を持つ人々が交わり、予期せぬ化学反応が生まれる場所。クリエイター、起業家、地域の人々が自然体で集い、共に新しい価値をつくる。",
  },
];

export function PhilosophySection() {
  return (
    <section id="about" className="py-24 md:py-32 bg-[#FAF8F5]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <motion.div
            className="lg:col-span-5 space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="space-y-3">
              <p
                className="text-[#C17B3A] text-[11px] tracking-[0.3em] uppercase"
                style={{ fontFamily: "'Noto Sans JP', sans-serif", fontWeight: 500 }}
              >
                Philosophy
              </p>
              <h2
                className="text-foreground text-[28px] md:text-[36px] leading-[1.3] tracking-tight"
                style={{ fontFamily: "'Noto Sans JP', sans-serif", fontWeight: 600 }}
              >
                つくる、伝える、集う。
              </h2>
            </div>
            <p
              className="text-muted-foreground text-[14px] leading-relaxed"
              style={{ fontFamily: "'Noto Sans JP', sans-serif", fontWeight: 300 }}
            >
              Sugiyamabaseは、NOREGIONの理念のもと生まれたクリエイティブ・コワーキングスペースです。
              地域と都市、伝統とテクノロジー、自然と人工物——対立しがちな概念を融合し、
              まだ誰も見たことのない景色をつくり出す場所を目指しています。
            </p>

            {/* Image */}
            <div className="relative mt-8">
              <ImageWithFallback
                src={landscapeImage}
                alt="会津坂下町の里山風景"
                className="w-full h-[240px] md:h-[300px] object-cover rounded-sm"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2C2418]/30 to-transparent rounded-sm" />
            </div>
          </motion.div>

          {/* Pillars */}
          <motion.div
            className="lg:col-span-7 lg:pt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            <div className="space-y-8">
              {pillars.map((pillar) => (
                <div
                  key={pillar.number}
                  className="group border-l-2 border-[#EDE7DD] hover:border-[#C17B3A] pl-6 md:pl-8 py-4 transition-colors duration-300"
                >
                  <div className="flex items-baseline gap-4 mb-3">
                    <span
                      className="text-[#C17B3A]/40 text-[32px] md:text-[40px] leading-none group-hover:text-[#C17B3A] transition-colors"
                      style={{ fontFamily: "'Noto Sans JP', sans-serif", fontWeight: 700 }}
                    >
                      {pillar.number}
                    </span>
                    <div>
                      <h3
                        className="text-foreground text-[22px] md:text-[26px] tracking-tight"
                        style={{ fontFamily: "'Noto Sans JP', sans-serif", fontWeight: 600 }}
                      >
                        {pillar.title}
                      </h3>
                      <span
                        className="text-muted-foreground text-[11px] tracking-[0.2em] uppercase"
                        style={{ fontFamily: "'Noto Sans JP', sans-serif", fontWeight: 400 }}
                      >
                        {pillar.subtitle}
                      </span>
                    </div>
                  </div>
                  <p
                    className="text-muted-foreground text-[14px] leading-relaxed max-w-lg"
                    style={{ fontFamily: "'Noto Sans JP', sans-serif", fontWeight: 300 }}
                  >
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>

            {/* NOREGION Badge */}
            <div className="mt-12 inline-flex items-center gap-3 bg-secondary px-5 py-3 rounded-sm">
              <div className="w-1 h-8 bg-primary rounded-full" />
              <div>
                <p
                  className="text-foreground text-[13px]"
                  style={{ fontFamily: "'Noto Sans JP', sans-serif", fontWeight: 500 }}
                >
                  Operated by NOREGION
                </p>
                <p
                  className="text-muted-foreground text-[11px]"
                  style={{ fontFamily: "'Noto Sans JP', sans-serif", fontWeight: 300 }}
                >
                  「つくる、伝える、集う」を体現する活動体
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}