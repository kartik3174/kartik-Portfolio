import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";

interface Message {
  id: number;
  from: "bot" | "user";
  text: string;
}

const quickReplies = [
  "Tell me about your projects",
  "What are your skills?",
  "How to contact you?",
  "What hackathons did you win?",
];

function getBotResponse(input: string): string {
  const q = input.toLowerCase();

  if (q.includes("project") || q.includes("work") || q.includes("build")) {
    return "I've built 4 exciting projects:\n• 🤖 NyayaBot – AI Legal Assistant using NLP\n• 👁️ W.A.T.C.H – Smart AI Monitoring System\n• 🌿 EcoSort AI – Waste Classification using Computer Vision\n• 🏥 HealthSecure – Healthcare Management System\n\nScroll to the Projects section to explore them!";
  }
  if (q.includes("skill") || q.includes("technolog") || q.includes("stack")) {
    return "My core skills include:\n• 🧠 AI/ML: Machine Learning, NLP, Deep Learning\n• 🌐 Web: React.js, JavaScript, HTML/CSS, Vite\n• ☁️ Cloud: AWS EC2, S3, Cloud Computing\n• 🛠️ Tools: Git, GitHub, VS Code, Postman, Figma\n• 💻 Programming: Python, JavaScript";
  }
  if (q.includes("contact") || q.includes("reach") || q.includes("email") || q.includes("hire")) {
    return "You can reach Kartik at:\n📧 kartiksinghrajpoot2000@gmail.com\n💼 LinkedIn: linkedin.com/in/kartik-singh-p-2a2509345\n🐙 GitHub: github.com/kartik3174\n\nOr scroll to the Contact section to send a message!";
  }
  if (q.includes("hackathon") || q.includes("win") || q.includes("achiev") || q.includes("prize")) {
    return "🏆 Hackathon Achievements:\n• 🥈 Runner Up – Solveathon 4.0 (2025)\n• 🥈 Runner Up – Innovathon 4.0 (2026)\n• 🏆 Runner Up – Chakravyuha 1.0 · National Level 24-Hour Hackathon in AI/ML (2025)\n\nKartik has competed in multiple intercollege and national-level hackathons, consistently delivering innovative AI-powered solutions!";
  }
  if (q.includes("education") || q.includes("college") || q.includes("study") || q.includes("degree")) {
    return "🎓 Education:\n• B.Tech in AI & Data Science (2023 – Present)\n• Specializing in Artificial Intelligence, Machine Learning, and Cloud Computing\n• Active in hackathons, workshops, and tech events";
  }
  if (q.includes("resume") || q.includes("cv") || q.includes("download")) {
    return "📄 You can download Kartik's resume using the 'Download Resume' button at the top of the page! It contains his full academic and project details.";
  }
  if (q.includes("certif")) {
    return "📜 Certifications:\n• ☁️ AWS Academy Cloud Training\n• 🤖 AI/ML Workshop Certificate\n\nCheck the Certifications section for more details!";
  }
  if (q.includes("hello") || q.includes("hi") || q.includes("hey") || q.includes("start")) {
    return "👋 Hi there! I'm Kartik's portfolio assistant. I can tell you about:\n• His projects & tech stack\n• Skills and expertise\n• Hackathon achievements\n• Contact information\n\nWhat would you like to know?";
  }
  if (q.includes("who") || q.includes("kartik") || q.includes("about")) {
    return "👨‍💻 Kartik Singh is a passionate CS student specializing in AI/ML, Cloud Computing, and Full Stack Development. He loves solving complex problems, building impactful applications, and participating in hackathons. Open to exciting opportunities!";
  }

  return "🤔 I'm not sure about that. Try asking me about:\n• Projects I've built\n• My skills & tech stack\n• Hackathon achievements\n• How to contact Kartik\n• Education & certifications";
}

export default function ChatbotWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 0,
      from: "bot",
      text: "👋 Hi! I'm Kartik's portfolio assistant. Ask me anything about his projects, skills, or achievements!",
    },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  const sendMessage = (text: string) => {
    if (!text.trim()) return;
    const userMsg: Message = { id: Date.now(), from: "user", text };
    setMessages((m) => [...m, userMsg]);
    setInput("");
    setTyping(true);

    setTimeout(() => {
      const botMsg: Message = {
        id: Date.now() + 1,
        from: "bot",
        text: getBotResponse(text),
      };
      setMessages((m) => [...m, botMsg]);
      setTyping(false);
    }, 700 + Math.random() * 400);
  };

  return (
    <>
      {/* Toggle button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: "spring" }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setOpen((o) => !o)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-2xl bg-primary neon-glow flex items-center justify-center shadow-2xl"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
              <X className="w-6 h-6 text-primary-foreground" />
            </motion.div>
          ) : (
            <motion.div key="chat" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
              <MessageCircle className="w-6 h-6 text-primary-foreground" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
            className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 rounded-2xl overflow-hidden shadow-2xl"
            style={{ background: "hsl(222, 47%, 7%)", border: "1px solid rgba(0,212,255,0.2)" }}
          >
            {/* Header */}
            <div className="px-4 py-3 border-b border-white/5 flex items-center gap-3"
              style={{ background: "linear-gradient(135deg, rgba(0,212,255,0.1), rgba(124,58,237,0.1))" }}>
              <div className="w-9 h-9 rounded-xl bg-primary/20 border border-primary/40 flex items-center justify-center">
                <Bot className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-sm text-foreground">Portfolio Assistant</p>
                <p className="text-xs text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                  Online
                </p>
              </div>
            </div>

            {/* Messages */}
            <div className="h-72 overflow-y-auto px-4 py-3 space-y-3 scrollbar-thin">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex gap-2 ${msg.from === "user" ? "flex-row-reverse" : "flex-row"}`}
                >
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                    msg.from === "bot"
                      ? "bg-primary/20 border border-primary/30"
                      : "bg-purple-500/20 border border-purple-500/30"
                  }`}>
                    {msg.from === "bot"
                      ? <Bot className="w-3.5 h-3.5 text-primary" />
                      : <User className="w-3.5 h-3.5 text-purple-400" />}
                  </div>
                  <div
                    className={`max-w-[80%] rounded-2xl px-3 py-2 text-xs leading-relaxed whitespace-pre-line ${
                      msg.from === "bot"
                        ? "bg-white/5 border border-white/8 text-foreground rounded-tl-sm"
                        : "bg-primary/20 border border-primary/30 text-primary rounded-tr-sm"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}

              {typing && (
                <div className="flex gap-2">
                  <div className="w-7 h-7 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center shrink-0">
                    <Bot className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <div className="bg-white/5 border border-white/8 rounded-2xl rounded-tl-sm px-3 py-2 flex gap-1 items-center">
                    {[0, 0.2, 0.4].map((d, i) => (
                      <motion.div
                        key={i}
                        animate={{ y: [0, -4, 0] }}
                        transition={{ repeat: Infinity, duration: 0.8, delay: d }}
                        className="w-1.5 h-1.5 bg-primary/60 rounded-full"
                      />
                    ))}
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick replies */}
            <div className="px-3 py-2 border-t border-white/5 flex gap-1.5 overflow-x-auto">
              {quickReplies.map((q) => (
                <button
                  key={q}
                  onClick={() => sendMessage(q)}
                  className="shrink-0 text-xs px-2.5 py-1 rounded-full glass border border-primary/20 text-primary hover:bg-primary/10 transition-colors"
                >
                  {q}
                </button>
              ))}
            </div>

            {/* Input */}
            <div className="px-3 py-3 border-t border-white/5 flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage(input)}
                placeholder="Ask me anything..."
                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-xs text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary/40 transition-colors"
              />
              <button
                onClick={() => sendMessage(input)}
                disabled={!input.trim()}
                className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center text-primary-foreground disabled:opacity-40 disabled:cursor-not-allowed hover:bg-primary/90 transition-colors"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
