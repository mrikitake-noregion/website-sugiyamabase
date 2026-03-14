import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Facilities", href: "#facilities" },
  { label: "Events", href: "#events" },
  { label: "Works", href: "#works" },
  { label: "Access", href: "#access" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FAF8F5]/90 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center">
              <span className="text-primary-foreground text-[11px] tracking-tight" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>SB</span>
            </div>
            <span
              className="text-foreground tracking-wide text-[15px]"
              style={{ fontFamily: "'Noto Sans JP', sans-serif", fontWeight: 600 }}
            >
              Sugiyamabase
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors text-[13px] tracking-wide"
                style={{ fontFamily: "'Noto Sans JP', sans-serif", fontWeight: 400 }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#access"
              className="bg-primary text-primary-foreground px-5 py-2 rounded-sm text-[13px] tracking-wide hover:opacity-90 transition-opacity"
              style={{ fontFamily: "'Noto Sans JP', sans-serif", fontWeight: 500 }}
            >
              内覧予約
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-6 pt-2 border-t border-border">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors text-[14px] py-1"
                  style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#access"
                className="bg-primary text-primary-foreground px-5 py-2.5 rounded-sm text-[14px] text-center tracking-wide hover:opacity-90 transition-opacity mt-2"
                style={{ fontFamily: "'Noto Sans JP', sans-serif", fontWeight: 500 }}
                onClick={() => setIsOpen(false)}
              >
                内覧予約
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}