import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(8,8,12,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.04)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-14">
        <span style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 700, fontSize: 18, color: "#ffffff" }}>
          Imagine AI
        </span>

        <div className="hidden md:flex items-center gap-10">
          {["Solutions", "Technology", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              style={{ fontFamily: "Geist, sans-serif", fontSize: 14, color: "#9ca3af" }}
              className="hover:text-white transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)} style={{ color: "#9ca3af" }}>
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden px-6 pb-5 flex flex-col gap-5" style={{ background: "rgba(8,8,12,0.97)" }}>
          {["Solutions", "Technology", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              style={{ fontFamily: "Geist, sans-serif", fontSize: 15, color: "#9ca3af" }}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
