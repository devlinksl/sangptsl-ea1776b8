import { motion } from "framer-motion";
import { Search, Bot, Zap, Brain, Smartphone, MessageSquare, Sparkles, Heart } from "lucide-react";
import { fadeUp } from "@/lib/animations";

const categories = [
  { icon: Bot, label: "Chat", color: "text-foreground" },
  { icon: Brain, label: "Analyze", color: "text-foreground" },
  { icon: Zap, label: "Automate", color: "text-foreground" },
  { icon: MessageSquare, label: "Create", color: "text-foreground" },
];

const popularCards = [
  { title: "Smart Conversations", subtitle: "AI-Powered", accent: "bg-muted" },
  { title: "Task Automation", subtitle: "Productivity", accent: "bg-muted" },
  { title: "Knowledge Base", subtitle: "Retrieval", accent: "bg-muted" },
  { title: "Multi-Platform", subtitle: "Everywhere", accent: "bg-muted" },
];

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen pt-24 pb-16 overflow-hidden">
      {/* Subtle warm background */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: "var(--gradient-hero)" }} />

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8 lg:pl-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          
          {/* Left: Headline + CTA */}
          <motion.div {...fadeUp(0)} className="flex flex-col justify-center pt-8 lg:pt-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary border border-border text-foreground text-xs font-semibold mb-6 w-fit">
              <Sparkles className="h-3.5 w-3.5" /> Powered by Dev-Link
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-4 text-foreground">
              Meet Sangpt
              <br />
              <span className="text-muted-foreground text-3xl sm:text-4xl lg:text-5xl font-semibold">
                Your Personal AI Companion
              </span>
            </h1>
            <p className="text-muted-foreground text-base lg:text-lg max-w-xl mb-8 leading-relaxed">
              Smart, adaptive, and designed to assist you with daily tasks. Experience the next generation of AI-powered productivity.
            </p>
            <div className="flex flex-wrap gap-3">
              <button className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-foreground text-background font-semibold hover:bg-foreground/90 transition-all hover:shadow-lg">
                Download Now
              </button>
              <button className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border bg-card text-foreground font-semibold hover:bg-secondary transition-all">
                Learn More
              </button>
            </div>

            {/* Stats row */}
            <motion.div {...fadeUp(0.3)} className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { value: "2+", label: "Years in Dev" },
                { value: "10K+", label: "Interactions" },
                { value: "99.9%", label: "Uptime" },
                { value: "∞", label: "Possibilities" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-display text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Explore-style card (like reference image) */}
          <motion.div {...fadeUp(0.15)} className="glass rounded-3xl p-6 lg:p-8">
            {/* Top bar */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-display text-2xl font-bold text-foreground">Explore</h2>
              <div className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center">
                <Search className="h-4 w-4 text-muted-foreground" />
              </div>
            </div>

            {/* Search bar */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex-1 px-4 py-3 rounded-xl bg-secondary/60 border border-border text-sm text-muted-foreground">
                Search features...
              </div>
              <div className="w-10 h-10 rounded-xl bg-foreground flex items-center justify-center">
                <Search className="h-4 w-4 text-background" />
              </div>
            </div>

            {/* Category icons */}
            <div className="flex justify-between mb-8">
              {categories.map((cat) => (
                <div key={cat.label} className="flex flex-col items-center gap-2 group cursor-pointer">
                  <div className="w-12 h-12 rounded-xl bg-secondary border border-border flex items-center justify-center group-hover:bg-accent transition-colors">
                    <cat.icon className={`h-5 w-5 ${cat.color}`} />
                  </div>
                  <span className="text-xs text-muted-foreground font-medium">{cat.label}</span>
                </div>
              ))}
            </div>

            {/* Popular section */}
            <h3 className="font-display text-lg font-bold text-foreground mb-4">Popular</h3>
            <div className="grid grid-cols-2 gap-3">
              {popularCards.map((card, i) => (
                <motion.div
                  key={card.title}
                  {...fadeUp(0.2 + i * 0.05)}
                  className="group relative rounded-2xl overflow-hidden bg-secondary/50 border border-border p-4 hover:bg-secondary transition-all cursor-pointer"
                >
                  {/* Placeholder image area */}
                  <div className={`w-full h-24 rounded-xl ${card.accent} mb-3 flex items-center justify-center`}>
                    <Sparkles className="h-6 w-6 text-muted-foreground/40" />
                  </div>
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm font-semibold text-foreground leading-tight">{card.title}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{card.subtitle}</p>
                    </div>
                    <Heart className="h-4 w-4 text-muted-foreground/40 group-hover:text-foreground transition-colors" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
