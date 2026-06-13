import { motion } from "motion/react";
import logoImg from "../../imports/ChatGPT_Image_May_20__2026__04_54_09_PM-removebg-preview-1.png";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
      {/* Subtle radial glow behind logo */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 55% 45% at 50% 38%, rgba(80,40,200,0.13) 0%, transparent 70%)",
        }}
      />

      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mb-8"
      >
        <img
          src={logoImg}
          alt="Imagine AI logo"
          style={{
            width: 130,
            height: 130,
            objectFit: "contain",
            margin: "0 auto",
          }}
        />
      </motion.div>

      {/* Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.75,
          delay: 0.2,
          ease: "easeOut",
        }}
        className="max-w-2xl"
        style={{
          fontFamily: "Space Grotesk, sans-serif",
          fontSize: "clamp(34px, 5.5vw, 64px)",
          fontWeight: 700,
          lineHeight: 1.1,
          letterSpacing: "-0.02em",
          color: "#ffffff",
        }}
      >
        Engineering the <span>Intelligent Future.</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.35 }}
        className="mt-5 max-w-lg"
        style={{
          fontFamily: "Geist, sans-serif",
          fontSize: 15,
          lineHeight: 1.7,
          color: "#6b7280",
        }}
      >
        Bespoke AI solutions and cutting-edge software
        engineered for tomorrow's challenges. We transform
        complex data into decisive competitive advantage.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mt-9"
      >
        <a
          href="#solutions"
          className="px-8 py-3 text-white transition-all hover:bg-white/10"
          style={{
            fontFamily: "Geist, sans-serif",
            fontSize: 14,
            fontWeight: 500,
            border: "1px solid rgba(255,255,255,0.25)",
            borderRadius: 6,
          }}
        >
          View Solutions
        </a>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.8 }}
        className="absolute bottom-[20px] flex flex-col items-center gap-2"
      >
        <span
          style={{
            fontFamily: "JetBrains Mono, monospace",
            fontSize: 9,
            letterSpacing: "0.16em",
            color: "#374151",
          }}
        >
          EXPLORE
        </span>
        <div
          className="w-px h-10"
          style={{
            background:
              "linear-gradient(to bottom, #374151, transparent)",
          }}
        />
      </motion.div>
    </section>
  );
}