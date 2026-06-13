import { motion } from "motion/react";
import { Mail, Phone, MapPin } from "lucide-react";

const contactItems = [
  { icon: Mail, label: "EMAIL", value: "sales.imagine.ai@gmail.com" },
  { icon: Phone, label: "PHONE", value: "+1 (555) 000-0000" },
  { icon: MapPin, label: "LOCATION", value: "Covent Garden" },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-6 max-w-5xl mx-auto text-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span
          style={{
            fontFamily: "JetBrains Mono, monospace",
            fontSize: 11,
            letterSpacing: "0.15em",
            color: "#2dd4bf",
          }}
        >
          GET IN TOUCH
        </span>
        <h2
          className="mt-3 mb-12"
          style={{
            fontFamily: "Space Grotesk, sans-serif",
            fontSize: "clamp(28px, 3.5vw, 44px)",
            fontWeight: 700,
            letterSpacing: "-0.015em",
            color: "#ffffff",
          }}
        >
          Contact Us
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {contactItems.map((item, i) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center gap-3 py-9 px-6"
              style={{
                background: "#13131a",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: 12,
              }}
            >
              <Icon
                size={20}
                color="#818cf8"
                strokeWidth={1.5}
              />
              <span
                style={{
                  fontFamily: "JetBrains Mono, monospace",
                  fontSize: 10,
                  letterSpacing: "0.14em",
                  color: "rgb(146 152 161)",
                }}
              >
                {item.label}
              </span>
              <span
                style={{
                  fontFamily: "Geist, sans-serif",
                  fontSize: 14,
                  color: "#9ca3af",
                }}
              >
                {item.value}
              </span>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}