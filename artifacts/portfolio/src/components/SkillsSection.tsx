import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const skillGroups = [
  {
    category: "Programming",
    color: "#00d4ff",
    skills: [
      { name: "Python", level: 85 },
      { name: "JavaScript", level: 80 },
      { name: "HTML & CSS", level: 90 },
    ],
  },
  {
    category: "AI / ML",
    color: "#7c3aed",
    skills: [
      { name: "Machine Learning", level: 75 },
      { name: "Natural Language Processing", level: 70 },
      { name: "Deep Learning (Basics)", level: 60 },
    ],
  },
  {
    category: "Web Development",
    color: "#00d4ff",
    skills: [
      { name: "React.js", level: 78 },
      { name: "Vite", level: 72 },
      { name: "API Integration", level: 80 },
    ],
  },
  {
    category: "Cloud & DevOps",
    color: "#7c3aed",
    skills: [
      { name: "AWS (EC2, S3 Basics)", level: 65 },
      { name: "Cloud Computing", level: 70 },
      { name: "Git & GitHub", level: 85 },
    ],
  },
];

const tools = [
  "Python", "JavaScript", "React.js", "Vite", "HTML/CSS", "AWS", "Git", "GitHub",
  "VS Code", "Postman", "Figma", "Machine Learning", "NLP", "Deep Learning",
  "Cloud Computing", "API Integration", "Problem Solving",
];

export default function SkillsSection() {
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
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">Technical Expertise</span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-2 mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="section-divider mx-auto" />
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-8 mb-14">
          {skillGroups.map(({ category, color, skills }, gi) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + gi * 0.1 }}
              className="glass-card rounded-2xl p-6"
            >
              <h3 className="text-lg font-semibold mb-5" style={{ color }}>
                {category}
              </h3>
              <div className="space-y-4">
                {skills.map(({ name, level }, si) => (
                  <div key={name}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="text-foreground">{name}</span>
                      <span className="text-muted-foreground">{level}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${level}%` } : { width: 0 }}
                        transition={{ duration: 1.2, delay: 0.3 + gi * 0.1 + si * 0.1, ease: "easeOut" }}
                        className="h-full rounded-full skill-bar"
                        style={{
                          background: `linear-gradient(90deg, ${color}, ${color}99)`,
                          boxShadow: `0 0 10px ${color}55`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-center text-lg font-semibold text-muted-foreground mb-6">Tools & Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {tools.map((tool, i) => (
              <motion.span
                key={tool}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.7 + i * 0.04 }}
                whileHover={{ scale: 1.08, y: -2 }}
                className="px-4 py-1.5 rounded-full text-sm font-medium glass neon-border text-primary cursor-default"
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
