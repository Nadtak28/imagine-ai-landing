import { motion } from "motion/react";

const companies = [
  "Anthropic", "DeepMind", "OpenAI", "Mistral", "Cohere",
  "Hugging Face", "Scale AI", "Weights & Biases", "Pinecone", "Databricks",
];

export function Marquee() {
  return (
    <section className="py-14 overflow-hidden" style={{ borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
      <p className="text-center mb-8" style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 11, letterSpacing: "0.14em", color: "#434656" }}>
        TRUSTED BY INDUSTRY LEADERS
      </p>
      <div className="relative">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 22, ease: "linear", repeat: Infinity }}
          className="flex gap-16 whitespace-nowrap"
        >
          {[...companies, ...companies].map((name, i) => (
            <span
              key={i}
              style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: 15, fontWeight: 600, color: "#33343b", letterSpacing: "0.02em" }}
            >
              {name}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
