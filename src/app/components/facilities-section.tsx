import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Wifi, Monitor, Printer, Wrench, Cpu, Sprout } from "lucide-react";

const deskImage =
  "https://images.unsplash.com/photo-1615374918148-d84197a41396?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjBkZXNrJTIwd29vZGVuJTIwd2FybSUyMGNvd29ya2luZ3xlbnwxfHx8fDE3NzA2ODY0MjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

const printerImage =
  "https://images.unsplash.com/photo-1707735325033-af8b8ad6a01f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzRCUyMHByaW50ZXIlMjB3b3Jrc2hvcCUyMG1ha2Vyc3BhY2V8ZW58MXx8fHwxNzcwNjg2NDE5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

const toolsImage =
  "https://images.unsplash.com/photo-1685320198649-781e83a61de4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kd29ya2luZyUyMHBvd2VyJTIwdG9vbHMlMjB3b3Jrc2hvcHxlbnwxfHx8fDE3NzA2ODY0MTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

const electronicsImage =
  "https://images.unsplash.com/photo-1767448068187-5be3cbc848c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJvbmljcyUyMHNvbGRlcmluZyUyMG1ha2VyJTIwd29ya3Nob3B8ZW58MXx8fHwxNzcwNjg2NDE5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

const gardenImage =
  "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmdhbmljJTIwZ2FyZGVuJTIwdmVnZXRhYmxlcyUyMHJvd3N8ZW58MXx8fHwxNzcwNjg2NDIzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

interface FacilityCardProps {
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  image?: string;
  className?: string;
  variant?: "default" | "accent" | "dark";
}

function FacilityCard({
  title,
  subtitle,
  description,
  icon,
  image,
  className = "",
  variant = "default",
}: FacilityCardProps) {
  const bgClass =
    variant === "dark"
      ? "bg-[#2C2418] text-white"
      : variant === "accent"
      ? "bg-[#5A6E2E] text-white"
      : "bg-white";

  const textClass = variant === "default" ? "text-foreground" : "text-white";
  const subtextClass =
    variant === "default" ? "text-muted-foreground" : "text-white/70";
  const iconBg =
    variant === "default"
      ? "bg-secondary"
      : variant === "accent"
      ? "bg-white/15"
      : "bg-white/10";

  return (
    <div
      className={`rounded-sm overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 ${bgClass} ${className}`}
    >
      {image && (
        <div className="relative overflow-hidden">
          <ImageWithFallback
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      )}
      <div className="p-5 md:p-6 flex flex-col h-full">
        <div
          className={`w-9 h-9 ${iconBg} rounded-sm flex items-center justify-center mb-4`}
        >
          {icon}
        </div>
        <div className="flex items-baseline gap-2 mb-2">
          <h3
            className={`text-[16px] md:text-[18px] tracking-tight ${textClass}`}
            style={{ fontFamily: "'Noto Sans JP', sans-serif", fontWeight: 600 }}
          >
            {title}
          </h3>
          <span
            className={`text-[10px] tracking-[0.15em] uppercase ${subtextClass}`}
            style={{ fontFamily: "'Noto Sans JP', sans-serif", fontWeight: 400 }}
          >
            {subtitle}
          </span>
        </div>
        <p
          className={`text-[13px] leading-relaxed ${subtextClass}`}
          style={{ fontFamily: "'Noto Sans JP', sans-serif", fontWeight: 300 }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}

export function FacilitiesSection() {
  return (
    <section id="facilities" className="py-24 md:py-32 bg-secondary">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p
            className="text-[#C17B3A] text-[11px] tracking-[0.3em] uppercase mb-3"
            style={{ fontFamily: "'Noto Sans JP', sans-serif", fontWeight: 500 }}
          >
            Facilities
          </p>
          <h2
            className="text-foreground text-[28px] md:text-[36px] leading-[1.3] tracking-tight"
            style={{ fontFamily: "'Noto Sans JP', sans-serif", fontWeight: 600 }}
          >
            あなたの「つくる」を支える設備
          </h2>
          <p
            className="text-muted-foreground text-[14px] mt-4 max-w-lg mx-auto leading-relaxed"
            style={{ fontFamily: "'Noto Sans JP', sans-serif", fontWeight: 300 }}
          >
            デジタルからフィジカルまで。多様な創作活動に対応する設備を揃えています。
          </p>
        </div>

        {/* Bento Box Grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
          {/* WiFi & Desk - Large card */}
          <div className="md:col-span-4">
            <FacilityCard
              title="ワークスペース"
              subtitle="Workspace"
              description="高速WiFi完備のデスクスペース。集中できる個人デスクと、コラボレーションに最適な共有テーブルを用意。里山の景色を眺めながらの作業は、都会では得られないインスピレーションを与えてくれます。"
              icon={<Wifi className="w-4 h-4 text-primary" />}
              image={deskImage}
              className="h-full [&_img]:h-[220px]"
            />
          </div>

          {/* 3D Printer */}
          <div className="md:col-span-2">
            <FacilityCard
              title="3Dプリンタ"
              subtitle="3D Printer"
              description="プロトタイプ制作やアート作品の造形に。アイデアをすぐに形にできる環境。"
              icon={<Printer className="w-4 h-4 text-white" />}
              image={printerImage}
              variant="dark"
              className="h-full [&_img]:h-[220px]"
            />
          </div>

          {/* Power Tools */}
          <div className="md:col-span-2">
            <FacilityCard
              title="電動工具"
              subtitle="Power Tools"
              description="木工DIYに必要な工具一式を完備。本格的なものづくりが可能です。"
              icon={<Wrench className="w-4 h-4 text-white" />}
              variant="accent"
              image={toolsImage}
              className="h-full [&_img]:h-[180px]"
            />
          </div>

          {/* Electronics */}
          <div className="md:col-span-2">
            <FacilityCard
              title="電子工作"
              subtitle="Electronics"
              description="はんだごて、オシロスコープ、Arduino/Raspberry Piなど電子工作環境を整備。"
              icon={<Cpu className="w-4 h-4 text-foreground" />}
              image={electronicsImage}
              className="h-full [&_img]:h-[180px]"
            />
          </div>

          {/* Garden */}
          <div className="md:col-span-2">
            <FacilityCard
              title="畑"
              subtitle="Garden"
              description="里山の土に触れる体験。季節の野菜づくりを通じて、自然のリズムを感じる。"
              icon={<Sprout className="w-4 h-4 text-white" />}
              variant="dark"
              image={gardenImage}
              className="h-full [&_img]:h-[180px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
