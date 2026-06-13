import { motion } from "motion/react";
import { Eye, Bot, Code2, Palette, Network } from "lucide-react";

const solutions = [
  {
    icon: Eye,
    accent: "#818cf8",
    accentBg: "rgba(129,140,248,0.1)",
    title: "AI Vision",
    desc: "Advanced computer vision systems for real-time object detection, facial recognition, and automated visual inspection.",
  },
  {
    icon: Bot,
    accent: "#818cf8",
    accentBg: "rgba(129,140,248,0.1)",
    title: "AI Agents",
    desc: "Autonomous intelligent agents designed to streamline complex workflows and enhance decision-making processes.",
  },
  {
    icon: Code2,
    accent: "#2dd4bf",
    accentBg: "rgba(45,212,191,0.1)",
    title: "Software Engineering",
    desc: "Robust, scalable software architectures built with modern technologies to solve your most complex business problems.",
  },
  {
    icon: Palette,
    accent: "#818cf8",
    accentBg: "rgba(129,140,248,0.1)",
    title: "UI UX Designing",
    desc: "User-centric design that blends aesthetic excellence with intuitive functionality for seamless digital experiences.",
  },
  {
    icon: Network,
    accent: "#818cf8",
    accentBg: "rgba(129,140,248,0.1)",
    title: "IT Solutions",
    desc: "Comprehensive IT infrastructure management and strategic consulting to optimize your digital ecosystem.",
  },
];

export function Solutions() {
  return (
    <section id="solutions" className="py-20 px-6 max-w-7xl mx-auto">
      <div className="mb-2">
        <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 11, letterSpacing: "0.15em", color: "#2dd4bf" }}>
          OUR ECOSYSTEM
        </span>
      </div>
      <h2
        className="mb-10"
        style={{
          fontFamily: "Space Grotesk, sans-serif",
          fontSize: "clamp(26px, 3.5vw, 40px)",
          fontWeight: 700,
          letterSpacing: "-0.015em",
          color: "#ffffff",
        }}
      >
        Precision-Engineered Solutions
      </h2>

      {/* 3-col top row, 2-col bottom row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        {solutions.slice(0, 3).map((s, i) => {
          const Icon = s.icon;
          return (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="p-6 flex flex-col gap-4 group cursor-pointer transition-all duration-300 hover:-translate-y-0.5"
              style={{
                background: "#13131a",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: 12,
              }}
            >
              <div
                className="w-9 h-9 flex items-center justify-center"
                style={{ background: s.accentBg, borderRadius: 8 }}
              >
                <Icon size={17} color={s.accent} strokeWidth={1.5} />
              </div>
              <h3
                style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: 20, fontWeight: 700, color: "#ffffff", letterSpacing: "-0.01em" }}
              >
                {s.title}
              </h3>
              <p style={{ fontFamily: "Geist, sans-serif", fontSize: 13, lineHeight: 1.7, color: "#6b7280" }}>
                {s.desc}
              </p>
            </motion.div>
          );
        })}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {solutions.slice(3).map((s, i) => {
          const Icon = s.icon;
          return (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i + 3) * 0.08 }}
              className="p-6 flex flex-col gap-4 group cursor-pointer transition-all duration-300 hover:-translate-y-0.5"
              style={{
                background: "#13131a",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: 12,
              }}
            >
              <div
                className="w-9 h-9 flex items-center justify-center"
                style={{ background: s.accentBg, borderRadius: 8 }}
              >
                <Icon size={17} color={s.accent} strokeWidth={1.5} />
              </div>
              <h3
                style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: 20, fontWeight: 700, color: "#ffffff", letterSpacing: "-0.01em" }}
              >
                {s.title}
              </h3>
              <p style={{ fontFamily: "Geist, sans-serif", fontSize: 13, lineHeight: 1.7, color: "#6b7280" }}>
                {s.desc}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
