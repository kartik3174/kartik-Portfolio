import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, Code2, Trophy, Cpu, Leaf, Eye, Bot, Cloud } from "lucide-react";

const events = [
  {
    year: "2023",
    month: "Aug",
    title: "Started B.Tech – AI & Data Science",
    description: "Enrolled in B.Tech Artificial Intelligence & Data Science program. Began exploring Python, ML fundamentals, and data structures.",
    Icon: GraduationCap,
    color: "#00d4ff",
    type: "Education",
  },
  {
    year: "2023",
    month: "Dec",
    title: "First Web Development Projects",
    description: "Started building web applications using HTML, CSS, JavaScript and React.js. Developed foundational full-stack skills.",
    Icon: Code2,
    color: "#7c3aed",
    type: "Milestone",
  },
  {
    year: "2024",
    month: "Mar",
    title: "AWS Academy Certification",
    description: "Completed AWS Academy Cloud Training, gaining hands-on knowledge of cloud computing, EC2, S3, and core AWS services.",
    Icon: Cloud,
    color: "#f59e0b",
    type: "Certification",
  },
  {
    year: "2024",
    month: "Aug",
    title: "Built NyayaBot – AI Legal Assistant",
    description: "Developed an AI-powered chatbot using NLP to assist users with legal queries and document guidance.",
    Icon: Bot,
    color: "#00d4ff",
    type: "Project",
  },
  {
    year: "2024",
    month: "Nov",
    title: "EcoSort AI – Waste Classification",
    description: "Built an AI-based waste classification system using computer vision and image recognition for environment-focused automation.",
    Icon: Leaf,
    color: "#10b981",
    type: "Project",
  },
  {
    year: "2025",
    month: "Feb",
    title: "Runner Up – Solveathon 4.0",
    description: "Won 2nd Prize in the Solveathon 4.0 intercollege hackathon, competing against top engineering teams.",
    Icon: Trophy,
    color: "#f59e0b",
    type: "Achievement",
  },
  {
    year: "2025",
    month: "Jun",
    title: "W.A.T.C.H – Smart Monitoring System",
    description: "Developed a real-time AI and IoT based monitoring system with intelligent data processing and dashboard visualization.",
    Icon: Eye,
    color: "#7c3aed",
    type: "Project",
  },
  {
    year: "2026",
    month: "Jan",
    title: "Runner Up – Innovathon 4.0",
    description: "Secured 2nd Prize in Innovathon 4.0, showcasing strong problem-solving and rapid prototyping skills.",
    Icon: Trophy,
    color: "#f43f5e",
    type: "Achievement",
  },
  {
    year: "2026",
    month: "Present",
    title: "Continuing – AI & Cloud Exploration",
    description: "Actively learning advanced ML, deep learning, and cloud-native development. Open to internships and collaborative projects.",
    Icon: Cpu,
    color: "#00d4ff",
    type: "Current",
  },
];

const typeColors: Record<string, string> = {
  Education: "#00d4ff",
  Milestone: "#7c3aed",
  Certification: "#f59e0b",
  Project: "#10b981",
  Achievement: "#f43f5e",
  Current: "#00d4ff",
};

export default function TimelineSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">Journey</span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-2 mb-4">
            My <span className="gradient-text">Timeline</span>
          </h2>
          <div className="section-divider mx-auto" />
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent md:-translate-x-px" />

          <div className="space-y-10">
            {events.map(({ year, month, title, description, Icon, color, type }, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className={`relative flex items-start gap-4 md:gap-0 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"} pl-16 md:pl-0`}
                >
                  {/* Dot on the line */}
                  <div
                    className="absolute left-4 md:left-1/2 top-4 w-5 h-5 rounded-full border-2 border-background md:-translate-x-1/2 z-10 flex items-center justify-center"
                    style={{ background: color, boxShadow: `0 0 12px ${color}80` }}
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-white" />
                  </div>

                  {/* Card */}
                  <div className={`w-full md:w-[45%] ${isLeft ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"}`}>
                    <div className="glass-card rounded-2xl p-5 relative overflow-hidden">
                      <div
                        className="absolute top-0 left-0 w-full h-0.5"
                        style={{ background: `linear-gradient(90deg, ${color}, transparent)` }}
                      />
                      <div className="flex items-start justify-between mb-2 gap-2">
                        <div className="flex items-center gap-2">
                          <div
                            className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                            style={{ background: `${color}15`, border: `1px solid ${color}40` }}
                          >
                            <Icon className="w-4 h-4" style={{ color }} />
                          </div>
                          <div>
                            <p className="text-xs font-semibold" style={{ color }}>{type}</p>
                            <p className="text-xs text-muted-foreground">{month} {year}</p>
                          </div>
                        </div>
                        {type === "Current" && (
                          <span className="flex items-center gap-1 text-xs text-emerald-400 shrink-0">
                            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                            Now
                          </span>
                        )}
                      </div>
                      <h3 className="font-semibold text-foreground text-sm mb-1">{title}</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">{description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
