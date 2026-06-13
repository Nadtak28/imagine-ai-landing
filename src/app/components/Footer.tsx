import { Share2 } from "lucide-react";

export function Footer() {
  return (
    <footer
      className="px-6 pt-14 pb-8"
      style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-10 mb-14">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <h3
              className="mb-2"
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontSize: 28,
                fontWeight: 700,
                color: "#ffffff",
                letterSpacing: "-0.015em",
              }}
            >
              Imagine AI
            </h3>
            <p
              className="mb-6"
              style={{
                fontFamily: "Geist, sans-serif",
                fontSize: 13,
                lineHeight: 1.7,
                color: "#4b5563",
              }}
            >
              Building intelligent systems for a connected
              world.
            </p>
          </div>

          {/* Platform */}
          <div>
            <h4
              className="mb-4"
              style={{
                fontFamily: "JetBrains Mono, monospace",
                fontSize: 10,
                letterSpacing: "0.15em",
                color: "#2dd4bf",
              }}
            >
              PLATFORM
            </h4>
            <ul className="flex flex-col gap-3">
              {["Solutions", "Technology", "Security"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href="#"
                      style={{
                        fontFamily: "Geist, sans-serif",
                        fontSize: 13,
                        color: "#6b7280",
                      }}
                      className="hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="mb-4"
              style={{
                fontFamily: "JetBrains Mono, monospace",
                fontSize: 10,
                letterSpacing: "0.15em",
                color: "#2dd4bf",
              }}
            >
              CONTACT
            </h4>
            <ul className="flex flex-col gap-3">
              {[
                { label: "hello@imagine.ai", icon: "✉" },
                { label: "Palo Alto, CA", icon: "◎" },
              ].map((item) => (
                <li
                  key={item.label}
                  className="flex items-center gap-2"
                >
                  <span
                    style={{ fontSize: 11, color: "#818cf8" }}
                  >
                    {item.icon}
                  </span>
                  <a
                    href="#"
                    style={{
                      fontFamily: "Geist, sans-serif",
                      fontSize: 13,
                      color: "#6b7280",
                    }}
                    className="hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.04)",
            paddingTop: 20,
          }}
        >
          <span
            style={{
              fontFamily: "Geist, sans-serif",
              fontSize: 12,
              color: "#374151",
            }}
          >
            © 2026 Imagine AI. Engineered for the future.
          </span>
        </div>
      </div>
    </footer>
  );
}