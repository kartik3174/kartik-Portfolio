import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, Calendar, MapPin, BookOpen } from "lucide-react";

const courses = [
  "Artificial Intelligence",
  "Machine Learning",
  "Data Structures & Algorithms",
  "Cloud Computing",
  "Web Development",
  "Data Science",
  "Python Programming",
  "Database Management",
];

export default function EducationSection() {
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
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">Academic Background</span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-2 mb-4">
            My <span className="gradient-text">Education</span>
          </h2>
          <div className="section-divider mx-auto" />
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card rounded-2xl p-8 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-purple-500" />

            <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-purple-500/5 rounded-full blur-2xl" />

            <div className="flex items-start gap-5 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-primary/20 border border-primary/40 flex items-center justify-center shrink-0">
                <GraduationCap className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-1">
                  B.Tech in AI & Data Science
                </h3>
                <p className="text-primary font-medium">
                  Artificial Intelligence & Data Science
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/3 border border-white/5">
                <Calendar className="w-4 h-4 text-primary shrink-0" />
                <div>
                  <p className="text-xs text-muted-foreground">Duration</p>
                  <p className="text-sm font-medium text-foreground">2023 – Present</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/3 border border-white/5">
                <MapPin className="w-4 h-4 text-primary shrink-0" />
                <div>
                  <p className="text-xs text-muted-foreground">Status</p>
                  <p className="text-sm font-medium text-emerald-400">Currently Enrolled</p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="w-4 h-4 text-primary" />
                <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                  Key Courses
                </h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {courses.map((course, i) => (
                  <motion.span
                    key={course}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.5 + i * 0.06 }}
                    className="px-3 py-1.5 rounded-full text-sm font-medium glass neon-border text-primary"
                  >
                    {course}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
