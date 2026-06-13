import { motion } from "motion/react";

export function CTA() {
  return (
    <section className="py-10 px-6 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-[1440px] mx-auto relative overflow-hidden text-center py-20 px-8"
        style={{
          background: "linear-gradient(135deg, #6c04de 0%, #2e5bff 100%)",
          borderRadius: 16,
        }}
      >
        {/* noise texture overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "rgba(255,255,255,0.03)", mixBlendMode: "overlay" }}
        />
        {/* radial highlight */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 60% 60% at 50% 0%, rgba(255,255,255,0.12) 0%, transparent 70%)" }}
        />

        <h2
          className="relative"
          style={{
            fontFamily: "Space Grotesk, sans-serif",
            fontSize: "clamp(28px, 4vw, 48px)",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            color: "#ffffff",
          }}
        >
          Start Your Transformation
        </h2>
        <p
          className="relative mt-4 max-w-lg mx-auto"
          style={{ fontFamily: "Geist, sans-serif", fontSize: 16, lineHeight: 1.6, color: "rgba(255,255,255,0.72)" }}
        >
          Partner with the experts in AI engineering. Let's discuss how we can build the future of your business together.
        </p>

        <div className="relative mt-10 flex flex-wrap gap-3 justify-center">
          <a
            href="#"
            className="px-6 py-3 transition-all hover:shadow-lg"
            style={{
              fontFamily: "Geist, sans-serif",
              fontSize: 15,
              fontWeight: 500,
              color: "#2e5bff",
              background: "#ffffff",
              borderRadius: 4,
            }}
          >
            Book a Discovery Partner
          </a>
          <a
            href="#"
            className="px-6 py-3 transition-all hover:bg-white/10"
            style={{
              fontFamily: "Geist, sans-serif",
              fontSize: 15,
              fontWeight: 500,
              color: "#ffffff",
              border: "1px solid rgba(255,255,255,0.4)",
              borderRadius: 4,
            }}
          >
            View Case Studies
          </a>
        </div>
      </motion.div>
    </section>
  );
}
