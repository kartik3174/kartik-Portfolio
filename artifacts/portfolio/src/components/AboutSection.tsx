import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, Lightbulb, Trophy, Users, Code2 } from "lucide-react";

const stats = [
  { value: "3+", label: "Projects Built" },
  { value: "2x", label: "Hackathon Winner" },
  { value: "2+", label: "Certifications" },
  { value: "AI/ML", label: "Specialization" },
];

const traits = [
  {
    Icon: Lightbulb,
    title: "Problem Solver",
    desc: "Passionate about tackling complex challenges with innovative, data-driven solutions.",
  },
  {
    Icon: Code2,
    title: "Full Stack Developer",
    desc: "Building end-to-end applications from responsive frontends to scalable backends.",
  },
  {
    Icon: Trophy,
    title: "Hackathon Champion",
    desc: "Multiple-time hackathon winner with a proven track record of delivering under pressure.",
  },
  {
    Icon: Users,
    title: "Team Collaborator",
    desc: "Active participant in technical communities, events, and interdisciplinary teams.",
  },
];

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">About Me</span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-2 mb-4">
            Who <span className="gradient-text">I Am</span>
          </h2>
          <div className="section-divider mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass-card rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-purple-500" />
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/20 border border-primary/40 flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">B.Tech in AI & Data Science</p>
                  <p className="text-sm text-muted-foreground">2023 – Present</p>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-4">
                I'm a highly motivated Computer Science Engineering student with a deep passion for{" "}
                <span className="text-primary">Artificial Intelligence</span>,{" "}
                <span className="text-primary">Machine Learning</span>, and{" "}
                <span className="text-primary">Cloud Computing</span>. I thrive on turning complex
                ideas into real-world applications.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                With hands-on experience in building AI-powered tools, web applications, and cloud
                deployments, I enjoy participating in hackathons and continuously learning emerging
                technologies that shape the future.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Whether it's crafting an NLP chatbot, deploying on AWS, or building a full-stack
                app, I bring curiosity, dedication, and technical depth to every project I take on.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map(({ value, label }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                className="glass-card rounded-2xl p-6 text-center"
              >
                <div className="text-3xl font-bold gradient-text mb-1">{value}</div>
                <div className="text-sm text-muted-foreground">{label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {traits.map(({ Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
              className="glass-card rounded-2xl p-6 text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center mx-auto mb-4">
                <Icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
