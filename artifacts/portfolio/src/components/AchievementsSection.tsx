import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Trophy, Medal, Zap, Users } from "lucide-react";

const achievements = [
  {
    title: "Runner Up – Solveathon 4.0",
    subtitle: "Intercollege Hackathon",
    year: "2025",
    prize: "2nd Prize",
    description:
      "Secured 2nd place in the prestigious Solveathon 4.0 intercollege hackathon, competing against teams from multiple institutions with an innovative tech solution.",
    Icon: Trophy,
    color: "#f59e0b",
    badge: "🥈",
  },
  {
    title: "Runner Up – Innovathon 4.0",
    subtitle: "Intercollege Hackathon",
    year: "2026",
    prize: "2nd Prize",
    description:
      "Achieved 2nd place in Innovathon 4.0, demonstrating exceptional problem-solving skills and the ability to build impactful solutions within tight deadlines.",
    Icon: Medal,
    color: "#00d4ff",
    badge: "🥈",
  },
  {
    title: "Runner Up – Chakravyuha 1.0",
    subtitle: "National Level 24-Hour Hackathon · AI/ML Domain",
    year: "2025",
    prize: "2nd Prize",
    description:
      "Won 2nd place at Chakravyuha 1.0, a national-level 24-hour hackathon in the AI/ML domain, competing against top teams from across the country with an innovative AI-powered solution.",
    Icon: Trophy,
    color: "#f59e0b",
    badge: "🏆",
  },
];

const participations = [
  {
    Icon: Zap,
    label: "Multiple Hackathons",
    desc: "Active participant in various technical hackathons",
  },
  {
    Icon: Users,
    label: "AI/ML Events",
    desc: "Regular attendee at AI & ML workshops and seminars",
  },
];

export default function AchievementsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">Recognition</span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-2 mb-4">
            Achievements & <span className="gradient-text">Participations</span>
          </h2>
          <div className="section-divider mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {achievements.map(({ title, subtitle, year, prize, description, Icon, color, badge }, i) => (
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
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                    style={{ background: `${color}15`, border: `1px solid ${color}40` }}
                  >
                    {badge}
                  </div>
                  <div>
                    <span
                      className="text-xs font-semibold px-2.5 py-0.5 rounded-full"
                      style={{
                        background: `${color}15`,
                        border: `1px solid ${color}40`,
                        color,
                      }}
                    >
                      {prize}
                    </span>
                    <p className="text-xs text-muted-foreground mt-1">{year}</p>
                  </div>
                </div>
                <Icon className="w-6 h-6" style={{ color }} />
              </div>

              <h3 className="text-xl font-bold text-foreground mb-1">{title}</h3>
              <p className="text-sm text-primary mb-3">{subtitle}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="glass-card rounded-2xl p-8"
        >
          <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
            <span className="w-6 h-6 rounded bg-primary/20 border border-primary/40 flex items-center justify-center text-xs text-primary">🎤</span>
            Participations & Community Involvement
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {participations.map(({ Icon, label, desc }, i) => (
              <div key={label} className="flex items-center gap-4 p-4 rounded-xl bg-white/3 border border-white/5">
                <div className="w-10 h-10 rounded-lg bg-primary/15 border border-primary/30 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground text-sm">{label}</p>
                  <p className="text-xs text-muted-foreground">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
