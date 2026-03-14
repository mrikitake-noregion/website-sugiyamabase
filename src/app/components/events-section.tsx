import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Calendar, Users, ArrowRight } from "lucide-react";

const festivalImage =
  "https://images.unsplash.com/photo-1759893050474-cff51eb7329b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcHBsZSUyMGhhcnZlc3QlMjBmZXN0aXZhbCUyMGF1dHVtbnxlbnwxfHx8fDE3NzA2ODY0MjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

const communityImage =
  "https://images.unsplash.com/photo-1760156789161-453c29817e92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBmZXN0aXZhbCUyMG91dGRvb3IlMjBnYXRoZXJpbmclMjBqYXBhbmVzZXxlbnwxfHx8fDE3NzA2ODY0MjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

const events = [
  {
    id: "apple-festival",
    title: "りんご祭り",
    subtitle: "Apple Festival",
    date: "毎年10月開催",
    description:
      "会津坂下町の特産・りんごを軸にした秋の収穫祭。地元農家との交流、りんごを使ったクリエイティブワークショップ、マルシェなど、里山の恵みを五感で楽しむイベントです。",
    image: festivalImage,
    tags: ["季節イベント", "地域交流", "ワークショップ"],
  },
  {
    id: "collab-project",
    title: "共同プロジェクト",
    subtitle: "Collaborative Projects",
    date: "通年・不定期開催",
    description:
      "クリエイター同士や地域住民と共に取り組む、ジャンルを超えたプロジェクト。地域課題の解決からアート制作まで、多様な共創の場を提供しています。",
    image: communityImage,
    tags: ["共創", "プロジェクト", "コミュニティ"],
  },
];

const upcomingEvents = [
  {
    id: "1",
    title: "木工ワークショップ — はじめてのスツールづくり",
    date: "2026.03.15",
    category: "Workshop",
  },
  {
    id: "2",
    title: "里山デザインスプリント vol.3",
    date: "2026.04.06",
    category: "Design",
  },
  {
    id: "3",
    title: "電子工作ナイト — IoTで畑を見守る",
    date: "2026.04.20",
    category: "Tech",
  },
];

export function EventsSection() {
  return (
    <section id="events" className="py-24 md:py-32 bg-[#FAF8F5]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <p
            className="text-[#C17B3A] text-[11px] tracking-[0.3em] uppercase mb-3"
            style={{ fontFamily: "'Noto Sans JP', sans-serif", fontWeight: 500 }}
          >
            Events & Community
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2
              className="text-foreground text-[28px] md:text-[36px] leading-[1.3] tracking-tight"
              style={{ fontFamily: "'Noto Sans JP', sans-serif", fontWeight: 600 }}
            >
              ここから始まる、
              <br className="hidden md:block" />
              つながり。
            </h2>
            <p
              className="text-muted-foreground text-[14px] max-w-md leading-relaxed"
              style={{ fontFamily: "'Noto Sans JP', sans-serif", fontWeight: 300 }}
            >
              季節のイベントや共同プロジェクトを通じて、新しい仲間と出会い、
              里山ならではの体験を分かち合う。
            </p>
          </div>
        </div>

        {/* Main Events */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
          {events.map((event) => (
            <div
              key={event.id}
              className="group bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="relative h-[240px] overflow-hidden">
                <ImageWithFallback
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2C2418]/50 to-transparent" />
                <div className="absolute bottom-4 left-4 flex gap-2">
                  {event.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-white/20 backdrop-blur-sm text-white text-[10px] px-3 py-1 rounded-sm tracking-wide"
                      style={{
                        fontFamily: "'Noto Sans JP', sans-serif",
                        fontWeight: 400,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Calendar className="w-3.5 h-3.5 text-[#C17B3A]" />
                  <span
                    className="text-[#C17B3A] text-[12px] tracking-wide"
                    style={{
                      fontFamily: "'Noto Sans JP', sans-serif",
                      fontWeight: 500,
                    }}
                  >
                    {event.date}
                  </span>
                </div>

                <div className="flex items-baseline gap-3 mb-3">
                  <h3
                    className="text-foreground text-[20px] tracking-tight"
                    style={{
                      fontFamily: "'Noto Sans JP', sans-serif",
                      fontWeight: 600,
                    }}
                  >
                    {event.title}
                  </h3>
                  <span
                    className="text-muted-foreground text-[11px] tracking-[0.1em]"
                    style={{
                      fontFamily: "'Noto Sans JP', sans-serif",
                      fontWeight: 400,
                    }}
                  >
                    {event.subtitle}
                  </span>
                </div>

                <p
                  className="text-muted-foreground text-[13px] leading-relaxed"
                  style={{
                    fontFamily: "'Noto Sans JP', sans-serif",
                    fontWeight: 300,
                  }}
                >
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Upcoming Events List */}
        <div className="bg-white rounded-sm p-6 md:p-8 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <Users className="w-4 h-4 text-primary" />
            <h3
              className="text-foreground text-[16px] tracking-tight"
              style={{ fontFamily: "'Noto Sans JP', sans-serif", fontWeight: 600 }}
            >
              今後のイベント
            </h3>
          </div>

          <div className="divide-y divide-border">
            {upcomingEvents.map((event) => (
              <div
                key={event.id}
                className="group flex items-center justify-between py-4 cursor-pointer"
              >
                <div className="flex items-center gap-4 md:gap-6">
                  <span
                    className="text-muted-foreground text-[12px] tracking-wide w-20 shrink-0"
                    style={{
                      fontFamily: "'Noto Sans JP', sans-serif",
                      fontWeight: 400,
                    }}
                  >
                    {event.date}
                  </span>
                  <span
                    className="bg-secondary text-secondary-foreground text-[10px] px-2.5 py-0.5 rounded-sm tracking-wide hidden sm:inline"
                    style={{
                      fontFamily: "'Noto Sans JP', sans-serif",
                      fontWeight: 500,
                    }}
                  >
                    {event.category}
                  </span>
                  <p
                    className="text-foreground text-[14px] group-hover:text-primary transition-colors"
                    style={{
                      fontFamily: "'Noto Sans JP', sans-serif",
                      fontWeight: 400,
                    }}
                  >
                    {event.title}
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
