import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Award, Cloud, Brain, CheckCircle2 } from "lucide-react";

const certifications = [
  {
    title: "AWS Academy Cloud Training",
    issuer: "Amazon Web Services",
    year: "2024",
    description:
      "Comprehensive cloud training covering AWS fundamentals, EC2, S3, and core cloud computing concepts through the AWS Academy program.",
    Icon: Cloud,
    color: "#f59e0b",
    badge: "☁️",
    tags: ["Cloud", "AWS", "Infrastructure"],
  },
  {
    title: "AI/ML Workshop Certificate",
    issuer: "Technical Institute",
    year: "2024",
    description:
      "Hands-on workshop covering artificial intelligence and machine learning fundamentals, including supervised learning, neural networks, and real-world ML applications.",
    Icon: Brain,
    color: "#00d4ff",
    badge: "🤖",
    tags: ["AI", "Machine Learning", "Workshop"],
  },
];

export default function CertificationsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">Credentials</span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-2 mb-4">
            <span className="gradient-text">Certifications</span>
          </h2>
          <div className="section-divider mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map(({ title, issuer, year, description, Icon, color, badge, tags }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
              className="glass-card rounded-2xl p-6 relative overflow-hidden"
            >
              <div
                className="absolute top-0 left-0 w-full h-1"
                style={{ background: `linear-gradient(90deg, ${color}, transparent)` }}
              />

              <div className="flex items-start gap-4 mb-4">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl shrink-0"
                  style={{ background: `${color}15`, border: `1px solid ${color}40` }}
                >
                  {badge}
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-lg font-bold text-foreground leading-tight">{title}</h3>
                    <span
                      className="text-xs font-semibold px-2.5 py-0.5 rounded-full shrink-0"
                      style={{
                        background: `${color}15`,
                        border: `1px solid ${color}40`,
                        color,
                      }}
                    >
                      {year}
                    </span>
                  </div>
                  <p className="text-sm text-primary mt-0.5">{issuer}</p>
                </div>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{description}</p>

              <div className="flex flex-wrap gap-2 mb-3">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-2 text-xs text-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Verified Certificate</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
