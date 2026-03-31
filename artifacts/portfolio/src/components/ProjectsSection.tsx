import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Github, Bot, Eye, Leaf, Heart } from "lucide-react";

const filters = ["All", "AI/ML", "IoT", "Web", "Cloud"];

const projects = [
  {
    id: 1,
    title: "NyayaBot – AI Legal Assistant",
    description:
      "An AI-powered legal assistant chatbot that helps users with legal queries using NLP. Provides real-time chatbot interaction, legal query assistance, and document-related guidance.",
    features: [
      "Real-time chatbot interaction",
      "Legal query assistance",
      "Document-related guidance",
    ],
    tags: ["AI/ML", "Web"],
    tech: ["AI/ML", "NLP", "Web Technologies", "Python", "React"],
    Icon: Bot,
    color: "#00d4ff",
    github: "https://github.com/kartik3174/NyayaBot",
    demo: null,
    gradient: "from-cyan-500/10 to-blue-600/10",
  },
  {
    id: 2,
    title: "W.A.T.C.H – Smart Monitoring System",
    description:
      "A smart AI-based monitoring system designed to track and analyze real-time data efficiently, featuring intelligent data processing and dashboard visualization.",
    features: [
      "Real-time tracking system",
      "Intelligent data processing",
      "Dashboard visualization",
    ],
    tags: ["AI/ML", "IoT", "Web"],
    tech: ["AI", "IoT", "Web Technologies", "Python", "JavaScript"],
    Icon: Eye,
    color: "#7c3aed",
    github: "https://github.com/kartik3174/W.A.T.C.H-AI-NEW",
    demo: null,
    gradient: "from-purple-500/10 to-violet-600/10",
  },
  {
    id: 3,
    title: "EcoSort AI – Waste Management System",
    description:
      "AI-based waste classification system that helps in sorting and managing waste efficiently using image-based waste detection and smart classification.",
    features: [
      "Image-based waste detection",
      "Smart classification system",
      "Environment-focused solution",
    ],
    tags: ["AI/ML", "Web"],
    tech: ["AI/ML", "Computer Vision", "Python", "Deep Learning"],
    Icon: Leaf,
    color: "#10b981",
    github: "https://github.com/kartik3174/EcoSort-AI-3.0",
    demo: null,
    gradient: "from-emerald-500/10 to-green-600/10",
  },
  {
    id: 4,
    title: "HealthSecure – Healthcare System",
    description:
      "A healthcare-focused web application for managing and securing health-related data with a user-friendly interface and robust health monitoring support.",
    features: [
      "Secure data handling",
      "User-friendly interface",
      "Health monitoring support",
    ],
    tags: ["Web"],
    tech: ["Web Development", "Backend Integration", "JavaScript", "HTML/CSS"],
    Icon: Heart,
    color: "#f43f5e",
    github: "https://github.com/kartik3174/HealthSecure",
    demo: null,
    gradient: "from-rose-500/10 to-pink-600/10",
  },
];

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("All");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const filtered = projects.filter(
    (p) => activeFilter === "All" || p.tags.includes(activeFilter)
  );

  return (
    <div ref={ref} className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">Portfolio</span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-2 mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="section-divider mx-auto mb-8" />

          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((filter) => (
              <motion.button
                key={filter}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeFilter === filter
                    ? "bg-primary text-primary-foreground neon-glow"
                    : "glass neon-border text-muted-foreground hover:text-primary"
                }`}
              >
                {filter}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <AnimatePresence mode="popLayout">
          <motion.div
            layout
            className="grid md:grid-cols-2 gap-6"
          >
            {filtered.map((project, i) => {
              const { Icon } = project;
              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="glass-card rounded-2xl overflow-hidden group"
                >
                  <div className={`h-40 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
                    <div
                      className="absolute inset-0 opacity-20"
                      style={{
                        backgroundImage: `radial-gradient(circle at 50% 50%, ${project.color}40, transparent 70%)`,
                      }}
                    />
                    <motion.div
                      animate={{ rotate: [0, 4, -4, 0] }}
                      transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                      className="w-18 h-18 rounded-2xl flex items-center justify-center"
                      style={{
                        background: `linear-gradient(135deg, ${project.color}20, ${project.color}40)`,
                        border: `1px solid ${project.color}50`,
                        boxShadow: `0 0 30px ${project.color}30`,
                        width: "72px",
                        height: "72px",
                      }}
                    >
                      <Icon className="w-9 h-9" style={{ color: project.color }} />
                    </motion.div>
                    <div className="absolute top-3 right-3 flex flex-wrap gap-1 justify-end max-w-[60%]">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded-full text-xs font-medium"
                          style={{
                            background: `${project.color}20`,
                            border: `1px solid ${project.color}40`,
                            color: project.color,
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                      {project.description}
                    </p>

                    <ul className="space-y-1 mb-4">
                      {project.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-xs text-muted-foreground">
                          <span
                            className="w-1.5 h-1.5 rounded-full shrink-0"
                            style={{ background: project.color }}
                          />
                          {f}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-muted-foreground"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.97 }}
                        className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl glass neon-border text-primary text-sm font-medium hover:bg-primary/10 transition-all"
                      >
                        <Github className="w-4 h-4" />
                        View Code
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16 text-muted-foreground"
          >
            No projects match this filter.
          </motion.div>
        )}
      </div>
    </div>
  );
}
