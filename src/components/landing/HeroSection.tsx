import { motion } from "framer-motion";
import { ArrowRight, Download, Bot, Zap, Brain, Smartphone } from "lucide-react";
import { fadeUp } from "@/lib/animations";

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen pt-24 pb-16 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: "var(--gradient-hero)" }} />
      <div className="absolute top-1/4 left-1/3 w-96 h-96 rounded-full bg-primary/5 blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-accent/5 blur-3xl animate-float" style={{ animationDelay: "3s" }} />

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8 lg:pl-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          <motion.div {...fadeUp(0)} className="md:col-span-2 glass-hover rounded-2xl p-8 lg:p-10 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold mb-6 w-fit">
              <Zap className="h-3.5 w-3.5" /> Powered by Dev-Link
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-4">
              Meet <span className="gradient-text">Sangpt</span>
              <br />
              <span className="text-muted-foreground text-3xl sm:text-4xl lg:text-5xl font-semibold">
                Your Personal AI Companion
              </span>
            </h1>
            <p className="text-muted-foreground text-base lg:text-lg max-w-xl mb-8 leading-relaxed">
              Smart, adaptive, and designed to assist you with daily tasks. Experience the next generation of AI-powered productivity.
            </p>
            <div className="flex flex-wrap gap-3">
              <button className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/20">
                <Download className="h-4 w-4" /> Download Now
              </button>
              <button className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass-hover font-semibold text-foreground">
                Learn More <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </motion.div>

          <motion.div {...fadeUp(0.15)} className="glass-hover rounded-2xl p-6 flex flex-col items-center justify-center text-center min-h-[260px]">
            <div className="w-24 h-24 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 animate-pulse-glow">
              <Bot className="h-12 w-12 text-primary" />
            </div>
            <h3 className="font-display text-lg font-semibold mb-1">AI-Powered</h3>
            <p className="text-sm text-muted-foreground">Advanced neural architecture for natural conversations</p>
          </motion.div>

          <motion.div {...fadeUp(0.2)} className="glass-hover rounded-2xl p-6 flex items-start gap-4">
            <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
              <Brain className="h-5 w-5 text-accent" />
            </div>
            <div>
              <h3 className="font-display font-semibold mb-1">Smart Chat</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Context-aware conversations that understand your needs and adapt over time.</p>
            </div>
          </motion.div>

          <motion.div {...fadeUp(0.25)} className="glass-hover rounded-2xl p-6 flex items-start gap-4">
            <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
              <Zap className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-display font-semibold mb-1">Task Assistance</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Automate repetitive tasks and boost your productivity with AI-driven workflows.</p>
            </div>
          </motion.div>

          <motion.div {...fadeUp(0.3)} className="glass-hover rounded-2xl p-6 flex items-start gap-4">
            <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
              <Smartphone className="h-5 w-5 text-accent" />
            </div>
            <div>
              <h3 className="font-display font-semibold mb-1">Multi-Platform</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Available on Windows, Mac, Linux, and mobile. Your AI companion everywhere.</p>
            </div>
          </motion.div>
        </div>

        <motion.div {...fadeUp(0.4)} className="mt-8 glass rounded-2xl p-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "2+", label: "Years in Development" },
            { value: "10K+", label: "Test Interactions" },
            { value: "99.9%", label: "Uptime Guarantee" },
            { value: "∞", label: "Possibilities" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-2xl lg:text-3xl font-bold gradient-text">{stat.value}</div>
              <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
