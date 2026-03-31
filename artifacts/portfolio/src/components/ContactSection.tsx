import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Linkedin, Github, Send, MapPin, MessageCircle } from "lucide-react";

const contactLinks = [
  {
    label: "Email",
    value: "kartiksinghrajpoot2000@gmail.com",
    href: "mailto:kartiksinghrajpoot2000@gmail.com",
    Icon: Mail,
    color: "#00d4ff",
    desc: "Reach out for any opportunities or collaborations",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/kartik-singh-p-2a2509345",
    href: "https://www.linkedin.com/in/kartik-singh-p-2a2509345",
    Icon: Linkedin,
    color: "#0a66c2",
    desc: "Connect with me professionally",
  },
  {
    label: "GitHub",
    value: "github.com/kartik3174",
    href: "https://github.com/kartik3174",
    Icon: Github,
    color: "#e2e8f0",
    desc: "Explore my open source projects",
  },
];

export default function ContactSection() {
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
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">Get in Touch</span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-2 mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <div className="section-divider mx-auto mb-4" />
          <p className="text-muted-foreground max-w-xl mx-auto">
            I'm always open to exciting opportunities, collaborations, or just a friendly chat about tech. Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-5"
          >
            {contactLinks.map(({ label, value, href, Icon, color, desc }, i) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                whileHover={{ scale: 1.02, x: 4 }}
                className="flex items-center gap-4 p-5 glass-card rounded-2xl group"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-all duration-200 group-hover:scale-110"
                  style={{ background: `${color}15`, border: `1px solid ${color}40` }}
                >
                  <Icon className="w-6 h-6" style={{ color }} />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-muted-foreground">{label}</p>
                  <p className="font-medium text-foreground text-sm truncate group-hover:text-primary transition-colors">
                    {value}
                  </p>
                  <p className="text-xs text-muted-foreground/70">{desc}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass-card rounded-2xl p-8 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-purple-500" />

            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary/20 border border-primary/40 flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">Send a Message</h3>
                <p className="text-xs text-muted-foreground">I'll get back to you soon</p>
              </div>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                window.location.href = "mailto:kartiksinghrajpoot2000@gmail.com";
              }}
              className="space-y-4"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-muted-foreground mb-1.5">Your Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-foreground placeholder-muted-foreground text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs text-muted-foreground mb-1.5">Email Address</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-foreground placeholder-muted-foreground text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs text-muted-foreground mb-1.5">Subject</label>
                <input
                  type="text"
                  placeholder="Project Collaboration"
                  className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-foreground placeholder-muted-foreground text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all"
                />
              </div>
              <div>
                <label className="block text-xs text-muted-foreground mb-1.5">Message</label>
                <textarea
                  placeholder="Tell me about your project or inquiry..."
                  rows={4}
                  className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-foreground placeholder-muted-foreground text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all resize-none"
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-primary text-primary-foreground font-semibold neon-glow hover:bg-primary/90 transition-all duration-200"
              >
                <Send className="w-4 h-4" />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
