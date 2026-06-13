import { motion } from "motion/react";

const techs = [
  {
    name: "PYTORCH",
    svg: (
      <svg
        viewBox="0 0 32 32"
        width="22"
        height="22"
        fill="none"
      >
        <path
          d="M16 4C9.373 4 4 9.373 4 16s5.373 12 12 12 12-5.373 12-12S22.627 4 16 4zm0 21a9 9 0 110-18 9 9 0 010 18z"
          fill="#818cf8"
        />
        <circle cx="20" cy="12" r="2" fill="#818cf8" />
      </svg>
    ),
    color: "#818cf8",
  },
  {
    name: "REACT NATIVE",
    svg: (
      <svg
        viewBox="0 0 32 32"
        width="22"
        height="22"
        fill="none"
      >
        <rect
          x="13"
          y="6"
          width="6"
          height="20"
          rx="3"
          stroke="#818cf8"
          strokeWidth="1.5"
        />
        <rect
          x="13"
          y="6"
          width="6"
          height="20"
          rx="3"
          fill="none"
        />
        <circle cx="16" cy="14" r="1.5" fill="#818cf8" />
      </svg>
    ),
    color: "#818cf8",
  },
  {
    name: "REACT",
    label: "JS",
    svg: null,
    color: "#818cf8",
    isText: true,
  },
  {
    name: "FLUTTER",
    svg: (
      <svg
        viewBox="0 0 32 32"
        width="22"
        height="22"
        fill="none"
      >
        <path
          d="M8 16l8-12h8L16 16l8 12h-8L8 16z"
          fill="#38bdf8"
          fillOpacity="0.8"
        />
        <path d="M16 16l8 12h-8l-4-6 4-6z" fill="#818cf8" />
      </svg>
    ),
    color: "#38bdf8",
  },
  {
    name: "LARAVEL",
    label: "PHP",
    svg: null,
    color: "#818cf8",
    isText: true,
  },
  {
    name: "NODE_JS",
    svg: null,
    color: "#ffffff",
    isLargeText: true,
  },
  {
    name: "NEXT.JS",
    svg: (
      <svg
        viewBox="0 0 32 32"
        width="22"
        height="22"
        fill="none"
      >
        <rect
          x="4"
          y="4"
          width="24"
          height="24"
          rx="4"
          stroke="#818cf8"
          strokeWidth="1.5"
        />
        <path
          d="M12 21V11l12 12"
          stroke="#818cf8"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M12 11h5"
          stroke="#818cf8"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    color: "#818cf8",
  },
  {
    name: "PYTHON",
    svg: (
      <svg
        viewBox="0 0 32 32"
        width="22"
        height="22"
        fill="none"
      >
        <path
          d="M10 8h6a2 2 0 012 2v4H10a2 2 0 01-2-2v-2a2 2 0 012-2z"
          stroke="#818cf8"
          strokeWidth="1.5"
        />
        <path
          d="M22 24h-6a2 2 0 01-2-2v-4h10a2 2 0 012 2v2a2 2 0 01-2 2z"
          stroke="#818cf8"
          strokeWidth="1.5"
        />
        <path
          d="M18 8v4M14 24v-4"
          stroke="#818cf8"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    color: "#818cf8",
  },
];

export function TechStack() {
  return (
    <section
      id="technology"
      className="py-24 px-6 relative overflow-hidden"
      style={{ background: "#0d0d14" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(60,40,180,0.07) 0%, transparent 70%)",
        }}
      />
      <div className="max-w-5xl mx-auto text-center relative">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            fontFamily: "Space Grotesk, sans-serif",
            fontSize: "clamp(24px, 3vw, 38px)",
            fontWeight: 700,
            letterSpacing: "-0.015em",
            color: "#ffffff",
          }}
        >
          Powering the Edge of Innovation
        </motion.h2>
        <p
          className="mt-3 mb-14"
          style={{
            fontFamily: "Geist, sans-serif",
            fontSize: 14,
            color: "#4b5563",
            lineHeight: 1.7,
          }}
        >
          We leverage the most advanced technologies to build
          resilient, high-speed applications.
        </p>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
          {techs.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="flex flex-col items-center justify-center gap-2 py-5 px-2 group transition-all duration-300 hover:-translate-y-0.5"
              style={{
                background: "#13131a",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: 10,
                minHeight: 80,
              }}
            >
              {t.isLargeText ? (
                <span
                  style={{
                    fontFamily: "Space Grotesk, sans-serif",
                    fontSize: 11,
                    fontWeight: 700,
                    color: t.color,
                    letterSpacing: "0.05em",
                  }}
                >
                  NODE_JS
                </span>
              ) : t.isText ? (
                <span
                  style={{
                    fontFamily: "JetBrains Mono, monospace",
                    fontSize: 11,
                    fontWeight: 500,
                    color: t.color,
                    letterSpacing: "0.08em",
                  }}
                >
                  {t.label}
                </span>
              ) : (
                t.svg
              )}
              <span
                style={{
                  fontFamily: "JetBrains Mono, monospace",
                  fontSize: 8,
                  letterSpacing: "0.12em",
                  color: "rgb(146 152 161)",
                }}
              >
                {t.name === "NODE_JS" ? "" : t.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}