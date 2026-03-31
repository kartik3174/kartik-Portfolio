import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart, Code2 } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/5 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => scrollTo("hero")}
          >
            <div className="w-8 h-8 rounded-lg bg-primary/20 border border-primary/40 flex items-center justify-center">
              <Code2 className="w-4 h-4 text-primary" />
            </div>
            <span className="font-bold text-lg gradient-text">Kartik.dev</span>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            {["hero", "about", "projects", "contact"].map((id) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="hover:text-primary transition-colors capitalize"
              >
                {id}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {[
              { href: "https://github.com/kartik3174", Icon: Github },
              { href: "https://www.linkedin.com/in/kartik-singh-p-2a2509345", Icon: Linkedin },
              { href: "mailto:kartiksinghrajpoot2000@gmail.com", Icon: Mail },
            ].map(({ href, Icon }, i) => (
              <motion.a
                key={i}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-9 h-9 rounded-lg glass border border-white/10 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all"
              >
                <Icon className="w-4 h-4" />
              </motion.a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 text-center text-sm text-muted-foreground">
          <p className="flex items-center justify-center gap-1.5">
            © {year} Kartik Singh. Built with
            <Heart className="w-3.5 h-3.5 text-red-400 fill-red-400" />
            and passion for technology.
          </p>
        </div>
      </div>
    </footer>
  );
}
