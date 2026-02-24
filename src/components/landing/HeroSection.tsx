import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Bot, Zap, Brain, MessageSquare, ArrowRight, Shield, Globe, Cpu,
  Sparkles, Lock, Eye, Lightbulb, BookOpen, Layers, Clock,
  GraduationCap, Briefcase, PenTool, Code, HeartHandshake, ChevronRight
} from "lucide-react";
import { fadeUp } from "@/lib/animations";
import sangptLogo from "@/assets/sangpt-logo.png";

const capabilities = [
  { icon: MessageSquare, title: "Natural Language Chat", desc: "Communicate naturally with context-aware AI that understands nuance, intent, and follow-ups across long conversations." },
  { icon: Zap, title: "Intelligent Automation", desc: "Automate repetitive workflows with triggers, schedules, and smart conditions — saving hours every week." },
  { icon: BookOpen, title: "Knowledge Retrieval", desc: "Search, summarize, and extract insights from documents, web pages, and personal knowledge bases instantly." },
  { icon: Lock, title: "End-to-End Encryption", desc: "All conversations and data are encrypted locally. Zero-knowledge architecture ensures only you can access your information." },
  { icon: Globe, title: "Cross-Platform Sync", desc: "Seamlessly switch between desktop, web, and mobile. Your data and preferences follow you everywhere." },
  { icon: Layers, title: "Plugin Ecosystem", desc: "Extend functionality with community-built plugins for calendar, email, coding, writing, and more." },
  { icon: Cpu, title: "Offline Processing", desc: "Core features work without internet. Local AI models ensure privacy and availability even without connectivity." },
  { icon: Sparkles, title: "Adaptive Learning", desc: "Sangpt learns your preferences, writing style, and workflows over time — becoming more useful the more you use it." },
];

const useCases = [
  { icon: GraduationCap, title: "Students & Researchers", desc: "Summarize papers, draft essays, organize research notes, and prepare presentations. Sangpt accelerates academic work while maintaining your original voice and critical thinking." },
  { icon: Briefcase, title: "Business Professionals", desc: "Draft emails, prepare meeting agendas, analyze reports, and automate routine tasks. Sangpt integrates into your daily workflow to boost productivity by up to 40%." },
  { icon: PenTool, title: "Content Creators", desc: "Generate ideas, outline scripts, write drafts, and refine copy. Whether you're a blogger, YouTuber, or marketer, Sangpt helps you create faster without sacrificing quality." },
  { icon: Code, title: "Developers & Engineers", desc: "Debug code, generate documentation, explain complex algorithms, and scaffold projects. Sangpt understands dozens of programming languages and frameworks." },
];

export function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden">
      {/* ─── HERO ─── */}
      <div className="relative min-h-[85vh] pt-24 pb-16 flex items-center">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "var(--gradient-hero)" }} />
        <div className="relative mx-auto max-w-7xl px-4 lg:px-8 lg:pl-24 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Headline */}
            <motion.div {...fadeUp(0)} className="flex flex-col justify-center">
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
                Smart, adaptive, and designed to assist you with daily tasks. Experience the next generation of AI-powered productivity — private, powerful, and always learning.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to="/download" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-foreground text-background font-semibold hover:bg-foreground/90 transition-all hover:shadow-lg">
                  Download Now <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/about" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border bg-card text-foreground font-semibold hover:bg-secondary transition-all">
                  Learn More
                </Link>
              </div>
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

            {/* Right: Feature highlights bento */}
            <motion.div {...fadeUp(0.15)} className="glass rounded-3xl p-6 lg:p-8">
              <h2 className="font-display text-2xl font-bold text-foreground mb-2">What Sangpt Can Do</h2>
              <p className="text-sm text-muted-foreground mb-6">Powerful AI capabilities, running privately on your device.</p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: Bot, label: "Smart Chat", desc: "Context-aware conversations" },
                  { icon: Brain, label: "Deep Analysis", desc: "Research & data insights" },
                  { icon: Zap, label: "Automation", desc: "Workflow triggers & actions" },
                  { icon: Sparkles, label: "Adaptive AI", desc: "Learns your style" },
                ].map((item) => (
                  <div key={item.label} className="rounded-2xl bg-secondary/50 border border-border p-4 hover:bg-secondary transition-all cursor-default group">
                    <div className="w-10 h-10 rounded-xl bg-card border border-border flex items-center justify-center mb-3 group-hover:bg-accent transition-colors">
                      <item.icon className="h-5 w-5 text-foreground" />
                    </div>
                    <p className="text-sm font-semibold text-foreground leading-tight">{item.label}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Trust badges */}
          <motion.div {...fadeUp(0.4)} className="mt-16 text-center">
            <p className="text-xs text-muted-foreground mb-4 font-medium tracking-wider uppercase">Trusted & Certified</p>
            <div className="flex flex-wrap justify-center gap-4">
              {["Enterprise Ready", "SOC 2 Compliant", "GDPR Ready", "ISO 27001"].map((badge) => (
                <div key={badge} className="glass rounded-full px-5 py-2 text-xs font-medium text-muted-foreground flex items-center gap-2">
                  <Shield className="h-3.5 w-3.5" />
                  {badge}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* ─── WHAT IS SANGPT? ─── */}
      <section className="py-24 relative">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 30% 50%, hsla(35, 40%, 93%, 0.5) 0%, transparent 60%)" }} />
        <div className="relative mx-auto max-w-7xl px-4 lg:px-8 lg:pl-24">
          <motion.div {...fadeUp()} className="text-center mb-12">
            <span className="text-muted-foreground text-sm font-semibold tracking-widest uppercase">About</span>
            <h2 className="font-display text-3xl lg:text-5xl font-bold mt-3 mb-4 text-foreground">What is Sangpt?</h2>
          </motion.div>
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <motion.div {...fadeUp(0.1)} className="glass rounded-3xl p-8 lg:p-10">
              <p className="text-muted-foreground leading-relaxed mb-4">
                Sangpt is a next-generation AI assistant built by <strong className="text-foreground">Dev-Link</strong> — a team of engineers, designers, and researchers passionate about creating technology that genuinely helps people. Unlike cloud-only assistants that route every query through remote servers, Sangpt is designed with a privacy-first, local-first architecture.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                At its core, Sangpt combines large language model capabilities with on-device processing to deliver fast, intelligent responses without compromising your privacy. Whether you're drafting an email, analyzing a dataset, or brainstorming ideas, Sangpt understands context, remembers your preferences, and adapts to your working style over time.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Sangpt isn't just another chatbot — it's a comprehensive productivity platform. With support for plugins, automation workflows, knowledge retrieval, and cross-platform sync, it's designed to be the last AI tool you'll ever need.
              </p>
            </motion.div>
            <motion.div {...fadeUp(0.2)} className="glass rounded-3xl p-8 lg:p-10">
              <h3 className="font-display text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <Lightbulb className="h-5 w-5" /> Why Sangpt Exists
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We built Sangpt because we saw a gap in the AI landscape. Most AI assistants require a constant internet connection, store your conversations on remote servers, and offer limited customization. We believed there was a better way.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our vision is simple: <strong className="text-foreground">AI should work for you, not the other way around.</strong> It should respect your privacy, run on your hardware when possible, and adapt to your unique needs rather than forcing you into a one-size-fits-all experience.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Dev-Link's philosophy centers on democratizing AI. We believe that powerful, intelligent software should be accessible to everyone — students, professionals, creators, and developers alike — regardless of budget or technical expertise.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── KEY CAPABILITIES ─── */}
      <section className="py-24 relative">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 70% 30%, hsla(40, 30%, 92%, 0.4) 0%, transparent 50%)" }} />
        <div className="relative mx-auto max-w-7xl px-4 lg:px-8 lg:pl-24">
          <motion.div {...fadeUp()} className="text-center mb-16">
            <span className="text-muted-foreground text-sm font-semibold tracking-widest uppercase">Capabilities</span>
            <h2 className="font-display text-3xl lg:text-5xl font-bold mt-3 mb-4 text-foreground">Everything You Need</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-base lg:text-lg">
              Powerful features designed to make your interaction with AI effortless, productive, and secure.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {capabilities.map((f, i) => (
              <motion.div key={f.title} {...fadeUp(i * 0.06)} className="glass-hover rounded-2xl p-6 group">
                <div className="w-12 h-12 rounded-xl bg-secondary border border-border flex items-center justify-center mb-4 group-hover:bg-accent transition-colors">
                  <f.icon className="h-6 w-6 text-foreground" />
                </div>
                <h3 className="font-display font-semibold text-base mb-2 text-foreground">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section className="py-24 relative">
        <div className="relative mx-auto max-w-7xl px-4 lg:px-8 lg:pl-24">
          <motion.div {...fadeUp()} className="text-center mb-16">
            <span className="text-muted-foreground text-sm font-semibold tracking-widest uppercase">Process</span>
            <h2 className="font-display text-3xl lg:text-5xl font-bold mt-3 mb-4 text-foreground">How Sangpt Works</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Getting started is simple. Three steps to unlock the full power of your personal AI companion.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { step: "01", icon: Cpu, title: "Install Sangpt", desc: "Download the app for your platform — Windows, macOS, or Linux. Installation takes less than 2 minutes. No account required to get started; your data stays local by default." },
              { step: "02", icon: MessageSquare, title: "Start a Conversation", desc: "Open Sangpt and begin chatting naturally. Ask questions, give instructions, or describe what you need. The AI understands context and can handle complex, multi-turn conversations." },
              { step: "03", icon: Globe, title: "Customize & Automate", desc: "Set up plugins, create automation workflows, and personalize your experience. Sangpt learns your preferences over time, becoming more helpful with every interaction." },
            ].map((item, i) => (
              <motion.div key={item.step} {...fadeUp(0.1 + i * 0.08)} className="glass-hover rounded-2xl p-8 text-center group">
                <div className="text-xs font-bold text-muted-foreground mb-3 tracking-widest">{item.step}</div>
                <div className="w-14 h-14 rounded-2xl bg-secondary border border-border flex items-center justify-center mx-auto mb-4 group-hover:bg-accent transition-colors">
                  <item.icon className="h-7 w-7 text-foreground" />
                </div>
                <h3 className="font-display font-semibold text-lg text-foreground mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── USE CASES ─── */}
      <section className="py-24 relative">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 50% 80%, hsla(30, 30%, 93%, 0.5) 0%, transparent 50%)" }} />
        <div className="relative mx-auto max-w-7xl px-4 lg:px-8 lg:pl-24">
          <motion.div {...fadeUp()} className="text-center mb-16">
            <span className="text-muted-foreground text-sm font-semibold tracking-widest uppercase">Use Cases</span>
            <h2 className="font-display text-3xl lg:text-5xl font-bold mt-3 mb-4 text-foreground">Built for Everyone</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              No matter your field or expertise level, Sangpt adapts to your unique workflow.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6">
            {useCases.map((uc, i) => (
              <motion.div key={uc.title} {...fadeUp(0.1 + i * 0.08)} className="glass-hover rounded-2xl p-8 group">
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-secondary border border-border flex items-center justify-center flex-shrink-0 group-hover:bg-accent transition-colors">
                    <uc.icon className="h-7 w-7 text-foreground" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg text-foreground mb-2">{uc.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{uc.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TRUST & SAFETY ─── */}
      <section className="py-24 relative">
        <div className="relative mx-auto max-w-7xl px-4 lg:px-8 lg:pl-24">
          <motion.div {...fadeUp()} className="text-center mb-16">
            <span className="text-muted-foreground text-sm font-semibold tracking-widest uppercase">Trust & Safety</span>
            <h2 className="font-display text-3xl lg:text-5xl font-bold mt-3 mb-4 text-foreground">Your Privacy, Our Priority</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We've built Sangpt from the ground up with security and transparency at every layer.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Lock, title: "Zero-Knowledge Architecture", desc: "Your conversations never leave your device unless you explicitly choose to sync. We can't read your data — by design, not by policy." },
              { icon: Eye, title: "Full Transparency", desc: "Sangpt is open source. Every line of code is auditable. We publish regular security reports and welcome community review of our privacy practices." },
              { icon: HeartHandshake, title: "No Data Monetization", desc: "We will never sell, share, or monetize your personal data. Our business model is built on software quality, not surveillance. Your trust is our foundation." },
            ].map((item, i) => (
              <motion.div key={item.title} {...fadeUp(0.1 + i * 0.08)} className="glass-hover rounded-2xl p-8 text-center group">
                <div className="w-14 h-14 rounded-2xl bg-secondary border border-border flex items-center justify-center mx-auto mb-4 group-hover:bg-accent transition-colors">
                  <item.icon className="h-7 w-7 text-foreground" />
                </div>
                <h3 className="font-display font-semibold text-lg text-foreground mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── JOURNAL CTA ─── */}
      <section className="py-24 relative">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 60% 50%, hsla(35, 35%, 92%, 0.5) 0%, transparent 55%)" }} />
        <div className="relative mx-auto max-w-7xl px-4 lg:px-8 lg:pl-24">
          <motion.div {...fadeUp()} className="glass rounded-3xl p-10 lg:p-16 text-center">
            <span className="text-muted-foreground text-sm font-semibold tracking-widest uppercase mb-3 block">Journal</span>
            <h2 className="font-display text-3xl lg:text-5xl font-bold text-foreground mb-4">
              Go Deeper with Sangpt
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8 text-base lg:text-lg leading-relaxed">
              Read insights, updates, and ideas from the team building Sangpt. From product announcements to deep dives on responsible AI — stay informed and inspired.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/journal" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-foreground text-background font-semibold hover:bg-foreground/90 transition-all text-base">
                Read the Sangpt Journal <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/about" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-border text-foreground font-semibold hover:bg-secondary transition-all text-base">
                Learn How Sangpt Works
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 lg:pl-24">
          <motion.div {...fadeUp()} className="rounded-3xl p-8 lg:p-16 text-center" style={{ background: "linear-gradient(135deg, hsl(0 0% 9%), hsl(0 0% 18%))" }}>
            <h2 className="font-display text-3xl lg:text-5xl font-bold text-background mb-4">
              Ready to Transform Your Workflow?
            </h2>
            <p className="text-background/60 max-w-2xl mx-auto mb-8 text-base lg:text-lg leading-relaxed">
              Join thousands of users who are already experiencing the future of AI-powered productivity. Download Sangpt today and start working smarter, not harder.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/download" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-background text-foreground font-semibold hover:bg-background/90 transition-all text-base">
                Download Free <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/about" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-background/20 text-background font-semibold hover:bg-background/10 transition-all text-base">
                Learn More
              </Link>
              <Link to="/license" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-background/20 text-background font-semibold hover:bg-background/10 transition-all text-base">
                View License <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </section>
  );
}
