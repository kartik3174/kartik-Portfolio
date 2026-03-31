import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Github, Eye, Zap, Shield, BarChart3, CheckCircle2 } from "lucide-react";

const features = [
  { Icon: Eye, text: "Real-time tracking & monitoring" },
  { Icon: BarChart3, text: "Intelligent dashboard visualization" },
  { Icon: Zap, text: "AI-powered data processing" },
  { Icon: Shield, text: "Secure & scalable architecture" },
];

const techStack = ["Artificial Intelligence", "IoT", "Web Technologies", "Python", "JavaScript", "Data Analytics"];

export default function FeaturedProject() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">Spotlight</span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-2 mb-4">
            Featured <span className="gradient-text">Project</span>
          </h2>
          <div className="section-divider mx-auto" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="glass-card rounded-3xl overflow-hidden relative"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-500 bg-[length:200%] animate-[gradient-shift_4s_ease_infinite]" />

          <div className="grid lg:grid-cols-2 gap-0">
            {/* Visual side */}
            <div className="relative h-64 lg:h-auto min-h-[320px] bg-gradient-to-br from-cyan-500/10 via-purple-500/5 to-cyan-500/10 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage: "radial-gradient(circle at 30% 40%, rgba(0,212,255,0.3), transparent 50%), radial-gradient(circle at 70% 70%, rgba(124,58,237,0.2), transparent 50%)"
                }}
              />
              {/* Animated dashboard mock */}
              <div className="relative z-10 w-72 space-y-3 p-2">
                <motion.div
                  animate={{ y: [0, -4, 0] }}
                  transition={{ repeat: Infinity, duration: 3 }}
                  className="rounded-xl p-3 border border-cyan-500/30 bg-black/40 backdrop-blur"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-cyan-400 font-semibold">Live Monitor</span>
                    <span className="flex items-center gap-1 text-xs text-emerald-400">
                      <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                      Active
                    </span>
                  </div>
                  <div className="space-y-1.5">
                    {[80, 60, 90].map((w, i) => (
                      <div key={i} className="h-1.5 rounded-full bg-white/10 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${w}%` } : { width: 0 }}
                          transition={{ duration: 1.5, delay: 0.5 + i * 0.2 }}
                          className="h-full rounded-full"
                          style={{ background: "linear-gradient(90deg, #00d4ff, #7c3aed)" }}
                        />
                      </div>
                    ))}
                  </div>
                </motion.div>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { label: "Tracked", value: "1.2K" },
                    { label: "Alerts", value: "24" },
                  ].map(({ label, value }) => (
                    <div key={label} className="rounded-xl p-3 border border-white/10 bg-black/40 backdrop-blur text-center">
                      <div className="text-lg font-bold text-cyan-400">{value}</div>
                      <div className="text-xs text-muted-foreground">{label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Content side */}
            <div className="p-8 lg:p-10">
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/15 border border-cyan-500/30 text-cyan-400">
                  AI + IoT
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/15 border border-purple-500/30 text-purple-400">
                  Hackathon Project
                </span>
              </div>

              <h3 className="text-3xl font-bold text-foreground mb-2">
                W.A.T.C.H
              </h3>
              <p className="text-primary font-medium mb-4">Smart AI-Based Monitoring System</p>

              <div className="mb-5">
                <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-1">Problem</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Traditional monitoring systems lack real-time intelligence, making it difficult to detect anomalies and take proactive decisions in critical environments.
                </p>
              </div>

              <div className="mb-6">
                <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-1">Solution</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  W.A.T.C.H leverages AI and IoT to provide real-time smart monitoring, intelligent data analysis, and automated alerting through an intuitive dashboard.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-3 mb-6">
                {features.map(({ Icon, text }, i) => (
                  <motion.div
                    key={text}
                    initial={{ opacity: 0, x: -10 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.5 + i * 0.08 }}
                    className="flex items-center gap-2.5"
                  >
                    <div className="w-7 h-7 rounded-lg bg-primary/15 border border-primary/30 flex items-center justify-center shrink-0">
                      <Icon className="w-3.5 h-3.5 text-primary" />
                    </div>
                    <span className="text-xs text-muted-foreground">{text}</span>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-wrap gap-1.5 mb-7">
                {techStack.map((t) => (
                  <span key={t} className="px-2.5 py-1 rounded-full text-xs font-medium glass neon-border text-primary">
                    {t}
                  </span>
                ))}
              </div>

              <motion.a
                href="https://github.com/kartik3174/W.A.T.C.H-AI-NEW"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold neon-glow hover:bg-primary/90 transition-all"
              >
                <Github className="w-4 h-4" />
                View on GitHub
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
