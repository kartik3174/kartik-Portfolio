import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download, ArrowRight, Cpu, Brain, Cloud } from "lucide-react";

const typingTexts = [
  "AI/ML Enthusiast",
  "Full Stack Developer",
  "Cloud Engineer",
  "Problem Solver",
  "CS Student",
];

export default function HeroSection() {
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = typingTexts[textIndex];
    const speed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < currentText.length) {
          setDisplayText(currentText.slice(0, charIndex + 1));
          setCharIndex((c) => c + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        if (charIndex > 0) {
          setDisplayText(currentText.slice(0, charIndex - 1));
          setCharIndex((c) => c - 1);
        } else {
          setIsDeleting(false);
          setTextIndex((i) => (i + 1) % typingTexts.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-pulse-glow" />
        <div className="absolute top-40 right-20 w-1 h-1 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-primary rounded-full animate-pulse" style={{ animationDelay: "2s" }} />
        <div className="absolute bottom-20 right-10 w-2 h-2 bg-cyan-300 rounded-full animate-pulse-glow" style={{ animationDelay: "0.5s" }} />
        <div className="absolute top-1/2 left-5 w-1 h-1 bg-purple-300 rounded-full animate-pulse" style={{ animationDelay: "1.5s" }} />
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-0.5 bg-white/20 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass neon-border text-sm text-primary mb-6">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse-glow" />
            <span>Open to Opportunities</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-4"
        >
          <div className="flex justify-center gap-6 mb-6">
            {[
              { Icon: Cpu, label: "AI/ML" },
              { Icon: Brain, label: "Deep Learning" },
              { Icon: Cloud, label: "Cloud" },
            ].map(({ Icon, label }) => (
              <div key={label} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Icon className="w-3.5 h-3.5 text-primary" />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4"
        >
          <span className="text-foreground">Hi, I'm </span>
          <span className="gradient-text">Kartik</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-xl sm:text-2xl md:text-3xl font-medium text-muted-foreground mb-6 h-10 flex items-center justify-center"
        >
          <span className="text-primary">{displayText}</span>
          <span className="cursor-blink text-primary ml-0.5">|</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          A passionate Computer Science student specializing in{" "}
          <span className="text-primary">Artificial Intelligence</span>,{" "}
          <span className="text-primary">Machine Learning</span>, and{" "}
          <span className="text-primary">Cloud Computing</span>. Building real-world impactful
          applications and solving complex problems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => scrollTo("projects")}
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold neon-glow hover:bg-primary/90 transition-all duration-200"
          >
            View Projects
            <ArrowRight className="w-4 h-4" />
          </motion.button>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            href={`${import.meta.env.BASE_URL}resume.pdf`}
            download="Kartik_Singh_Resume.pdf"
            className="flex items-center gap-2 px-6 py-3 rounded-xl glass neon-border text-primary font-semibold hover:bg-primary/10 transition-all duration-200"
          >
            <Download className="w-4 h-4" />
            Download Resume
          </motion.a>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => scrollTo("contact")}
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-foreground font-semibold hover:bg-white/10 transition-all duration-200"
          >
            Connect with Me
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex items-center justify-center gap-4"
        >
          {[
            {
              href: "https://github.com/kartik3174",
              Icon: Github,
              label: "GitHub",
            },
            {
              href: "https://www.linkedin.com/in/kartik-singh-p-2a2509345",
              Icon: Linkedin,
              label: "LinkedIn",
            },
            {
              href: "mailto:kartiksinghrajpoot2000@gmail.com",
              Icon: Mail,
              label: "Email",
            },
          ].map(({ href, Icon, label }) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="w-11 h-11 rounded-xl glass neon-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-200"
              title={label}
            >
              <Icon className="w-5 h-5" />
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-16 flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-6 h-10 rounded-full border-2 border-primary/40 flex items-start justify-center pt-1.5 cursor-pointer"
            onClick={() => scrollTo("about")}
          >
            <div className="w-1.5 h-2.5 bg-primary rounded-full animate-bounce" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
