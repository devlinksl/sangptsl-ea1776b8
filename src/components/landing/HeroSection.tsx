import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Search, Bot, Zap, Brain, MessageSquare, Heart, ArrowRight, Shield, Globe, Cpu } from "lucide-react";
import { fadeUp } from "@/lib/animations";
import sangptLogo from "@/assets/sangpt-logo.png";

const categories = [
  { icon: Bot, label: "Chat" },
  { icon: Brain, label: "Analyze" },
  { icon: Zap, label: "Automate" },
  { icon: MessageSquare, label: "Create" },
];

const popularCards = [
  { title: "Smart Conversations", subtitle: "AI-Powered" },
  { title: "Task Automation", subtitle: "Productivity" },
  { title: "Knowledge Base", subtitle: "Retrieval" },
  { title: "Multi-Platform", subtitle: "Everywhere" },
];

const trustedBy = [
  "Enterprise Ready", "SOC 2 Compliant", "GDPR Ready", "ISO 27001",
];

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen pt-24 pb-16 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ background: "var(--gradient-hero)" }} />

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8 lg:pl-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          
          {/* Left: Headline + CTA */}
          <motion.div {...fadeUp(0)} className="flex flex-col justify-center pt-8 lg:pt-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary border border-border text-foreground text-xs font-semibold mb-6 w-fit">
              <img src={sangptLogo} alt="" className="h-4 w-4 rounded" /> Powered by Dev-Link
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
              <Link to="/download" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-foreground text-background font-semibold hover:bg-foreground/90 transition-all hover:shadow-lg">
                Download Now <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/about" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border bg-card text-foreground font-semibold hover:bg-secondary transition-all">
                Learn More
              </Link>
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

          {/* Right: Explore card */}
          <motion.div {...fadeUp(0.15)} className="glass rounded-3xl p-6 lg:p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-display text-2xl font-bold text-foreground">Explore</h2>
              <div className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center">
                <Search className="h-4 w-4 text-muted-foreground" />
              </div>
            </div>

            <div className="flex items-center gap-2 mb-6">
              <div className="flex-1 px-4 py-3 rounded-xl bg-secondary/60 border border-border text-sm text-muted-foreground">
                Search features...
              </div>
              <div className="w-10 h-10 rounded-xl bg-foreground flex items-center justify-center">
                <Search className="h-4 w-4 text-background" />
              </div>
            </div>

            <div className="flex justify-between mb-8">
              {categories.map((cat) => (
                <div key={cat.label} className="flex flex-col items-center gap-2 group cursor-pointer">
                  <div className="w-12 h-12 rounded-xl bg-secondary border border-border flex items-center justify-center group-hover:bg-accent transition-colors">
                    <cat.icon className="h-5 w-5 text-foreground" />
                  </div>
                  <span className="text-xs text-muted-foreground font-medium">{cat.label}</span>
                </div>
              ))}
            </div>

            <h3 className="font-display text-lg font-bold text-foreground mb-4">Popular</h3>
            <div className="grid grid-cols-2 gap-3">
              {popularCards.map((card, i) => (
                <motion.div
                  key={card.title}
                  {...fadeUp(0.2 + i * 0.05)}
                  className="group relative rounded-2xl overflow-hidden bg-secondary/50 border border-border p-4 hover:bg-secondary transition-all cursor-pointer"
                >
                  <div className="w-full h-24 rounded-xl bg-muted mb-3 flex items-center justify-center">
                    <img src={sangptLogo} alt="" className="h-8 w-8 opacity-20" />
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

        {/* Trust badges */}
        <motion.div {...fadeUp(0.4)} className="mt-16 text-center">
          <p className="text-xs text-muted-foreground mb-4 font-medium tracking-wider uppercase">Trusted & Certified</p>
          <div className="flex flex-wrap justify-center gap-4">
            {trustedBy.map((badge) => (
              <div key={badge} className="glass rounded-full px-5 py-2 text-xs font-medium text-muted-foreground flex items-center gap-2">
                <Shield className="h-3.5 w-3.5" />
                {badge}
              </div>
            ))}
          </div>
        </motion.div>

        {/* How it works */}
        <motion.div {...fadeUp(0.5)} className="mt-20">
          <h2 className="font-display text-2xl lg:text-3xl font-bold text-foreground text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { step: "01", icon: Cpu, title: "Install Sangpt", desc: "Download and install on your preferred platform in under 2 minutes." },
              { step: "02", icon: MessageSquare, title: "Start Chatting", desc: "Open the app and begin conversing with your AI companion naturally." },
              { step: "03", icon: Globe, title: "Boost Productivity", desc: "Automate tasks, retrieve knowledge, and work smarter every day." },
            ].map((item, i) => (
              <motion.div key={item.step} {...fadeUp(0.55 + i * 0.08)} className="glass-hover rounded-2xl p-6 text-center group">
                <div className="text-xs font-bold text-muted-foreground mb-3">{item.step}</div>
                <div className="w-14 h-14 rounded-2xl bg-secondary border border-border flex items-center justify-center mx-auto mb-4 group-hover:bg-accent transition-colors">
                  <item.icon className="h-7 w-7 text-foreground" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Banner */}
        <motion.div {...fadeUp(0.6)} className="mt-20 rounded-3xl p-8 lg:p-12 text-center" style={{ background: "linear-gradient(135deg, hsl(0 0% 9%), hsl(0 0% 18%))" }}>
          <h2 className="font-display text-2xl lg:text-4xl font-bold text-background mb-4">
            Ready to Transform Your Workflow?
          </h2>
          <p className="text-background/60 max-w-xl mx-auto mb-8 text-base">
            Join thousands of users who are already experiencing the future of AI-powered productivity.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/download" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-background text-foreground font-semibold hover:bg-background/90 transition-all">
              Download Free <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/about" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl border border-background/20 text-background font-semibold hover:bg-background/10 transition-all">
              Learn More
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
