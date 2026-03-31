import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Github, GitFork, Star, Activity } from "lucide-react";

export default function GitHubStats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const username = "kartik3174";

  return (
    <div ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 bg-white/[0.02]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">Open Source</span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-2 mb-4">
            GitHub <span className="gradient-text">Activity</span>
          </h2>
          <div className="section-divider mx-auto mb-4" />
          <p className="text-muted-foreground text-sm">
            Check out my open source contributions and repositories
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-card rounded-2xl overflow-hidden"
          >
            <img
              src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=transparent&hide_border=true&title_color=00d4ff&text_color=94a3b8&icon_color=7c3aed&bg_color=00000000&count_private=true`}
              alt="GitHub Stats"
              className="w-full"
              loading="lazy"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="glass-card rounded-2xl overflow-hidden"
          >
            <img
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=transparent&hide_border=true&title_color=00d4ff&text_color=94a3b8&bg_color=00000000`}
              alt="Top Languages"
              className="w-full"
              loading="lazy"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="glass-card rounded-2xl overflow-hidden mb-6"
        >
          <img
            src={`https://github-readme-streak-stats.herokuapp.com?user=${username}&theme=transparent&hide_border=true&stroke=00d4ff30&ring=00d4ff&fire=7c3aed&currStreakNum=ffffff&sideNums=94a3b8&currStreakLabel=00d4ff&sideLabels=94a3b8&dates=64748b`}
            alt="GitHub Streak"
            className="w-full"
            loading="lazy"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center"
        >
          <motion.a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass neon-border text-primary font-semibold hover:bg-primary/10 transition-all"
          >
            <Github className="w-5 h-5" />
            View Full GitHub Profile
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}
