import { MapPin, Clock, Phone, Mail, Instagram, ArrowUpRight } from "lucide-react";

export function FooterSection() {
  return (
    <footer id="access" className="bg-[#2C2418] text-white">
      {/* CTA Section */}
      <div className="border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20 md:py-28">
          <div className="text-center space-y-6 max-w-2xl mx-auto">
            <p
              className="text-[#C17B3A] text-[11px] tracking-[0.3em] uppercase"
              style={{ fontFamily: "'Noto Sans JP', sans-serif", fontWeight: 500 }}
            >
              Visit Us
            </p>
            <h2
              className="text-[28px] md:text-[40px] leading-[1.3] tracking-tight"
              style={{ fontFamily: "'Noto Sans JP', sans-serif", fontWeight: 600 }}
            >
              まずは、見に来てください。
            </h2>
            <p
              className="text-white/60 text-[14px] leading-relaxed"
              style={{ fontFamily: "'Noto Sans JP', sans-serif", fontWeight: 300 }}
            >
              写真や言葉では伝えきれない空気感があります。
              里山の風、木の匂い、光の入り方——五感で感じてもらうのが一番です。
            </p>
            <div className="pt-4">
              <a
                href="mailto:hello@sugiyamabase.jp"
                className="inline-flex items-center gap-2 bg-[#C17B3A] text-white px-8 py-3.5 rounded-sm text-[14px] tracking-wide hover:bg-[#A86A30] transition-colors shadow-lg shadow-[#C17B3A]/20"
                style={{ fontFamily: "'Noto Sans JP', sans-serif", fontWeight: 500 }}
              >
                内覧予約をする
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Map & Info Section */}
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Map */}
          <div className="lg:col-span-7">
            <div className="rounded-sm overflow-hidden h-[300px] md:h-[360px] bg-[#3a3228]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25468.5!2d139.82!3d37.56!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f8a9c0e0e0e0e0f%3A0x0!2z5Lya5rSl5Z2C5LiL55S6!5e0!3m2!1sja!2sjp!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(30%) contrast(95%)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Sugiyamabaseアクセスマップ"
              />
            </div>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h3
                className="text-[18px] tracking-tight mb-6"
                style={{ fontFamily: "'Noto Sans JP', sans-serif", fontWeight: 600 }}
              >
                アクセス情報
              </h3>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <MapPin className="w-4 h-4 text-[#C17B3A] mt-0.5 shrink-0" />
                  <div>
                    <p
                      className="text-white/90 text-[13px]"
                      style={{
                        fontFamily: "'Noto Sans JP', sans-serif",
                        fontWeight: 400,
                      }}
                    >
                      〒969-6500
                    </p>
                    <p
                      className="text-white/90 text-[13px]"
                      style={{
                        fontFamily: "'Noto Sans JP', sans-serif",
                        fontWeight: 400,
                      }}
                    >
                      福島県河沼郡会津坂下町
                    </p>
                    <p
                      className="text-white/50 text-[12px] mt-1"
                      style={{
                        fontFamily: "'Noto Sans JP', sans-serif",
                        fontWeight: 300,
                      }}
                    >
                      JR只見線 会津坂下駅より車で10分
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-4 h-4 text-[#C17B3A] mt-0.5 shrink-0" />
                  <div>
                    <p
                      className="text-white/90 text-[13px]"
                      style={{
                        fontFamily: "'Noto Sans JP', sans-serif",
                        fontWeight: 400,
                      }}
                    >
                      営業時間: 9:00 - 18:00
                    </p>
                    <p
                      className="text-white/50 text-[12px] mt-1"
                      style={{
                        fontFamily: "'Noto Sans JP', sans-serif",
                        fontWeight: 300,
                      }}
                    >
                      定休日: 水曜日（イベント時は変動あり）
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Mail className="w-4 h-4 text-[#C17B3A] shrink-0" />
                  <a
                    href="mailto:hello@sugiyamabase.jp"
                    className="text-white/90 text-[13px] hover:text-[#C17B3A] transition-colors"
                    style={{
                      fontFamily: "'Noto Sans JP', sans-serif",
                      fontWeight: 400,
                    }}
                  >
                    hello@sugiyamabase.jp
                  </a>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="pt-4">
              <a
                href="https://www.instagram.com/sugiyamabase/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-white/60 hover:text-[#C17B3A] transition-colors group"
              >
                <Instagram className="w-5 h-5" />
                <span
                  className="text-[13px] tracking-wide"
                  style={{
                    fontFamily: "'Noto Sans JP', sans-serif",
                    fontWeight: 400,
                  }}
                >
                  @sugiyamabase
                </span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-primary rounded-sm flex items-center justify-center">
              <span
                className="text-white text-[8px] tracking-tight"
                style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
              >
                SB
              </span>
            </div>
            <span
              className="text-white/40 text-[12px] tracking-wide"
              style={{ fontFamily: "'Noto Sans JP', sans-serif", fontWeight: 400 }}
            >
              Sugiyamabase
            </span>
          </div>
          <p
            className="text-white/30 text-[11px]"
            style={{ fontFamily: "'Noto Sans JP', sans-serif", fontWeight: 300 }}
          >
            &copy; 2026 NOREGION Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
