import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Bot, Zap, Brain, MessageSquare, ArrowRight, Shield, Globe, Cpu,
  Sparkles, Lock, Eye, Lightbulb, BookOpen, Layers, Clock,
  GraduationCap, Briefcase, PenTool, Code, HeartHandshake, ChevronRight,
  Smartphone, Download, Play
} from "lucide-react";
import { fadeUp } from "@/lib/animations";
import sangptLogo from "@/assets/sangpt-logo.png";
import devlinkLogo from "@/assets/devlink-logo.png";
import { AiDemoChat } from "./AiDemoChat";

const capabilities = [
  { icon: MessageSquare, title: "Natural Language Chat", desc: "Communicate naturally in English and Krio with context-aware AI that understands nuance, intent, and follow-ups across long conversations." },
  { icon: Zap, title: "Intelligent Automation", desc: "Automate repetitive workflows with triggers, schedules, and smart conditions — saving hours every week for Sierra Leonean professionals." },
  { icon: BookOpen, title: "Knowledge Retrieval", desc: "Search, summarize, and extract insights from documents, web pages, and local knowledge bases instantly." },
  { icon: Lock, title: "End-to-End Encryption", desc: "All conversations and data are encrypted. Zero-knowledge architecture ensures only you can access your information." },
  { icon: Globe, title: "Built for Sierra Leone", desc: "Designed with the needs of Sierra Leonean users in mind — from students in Freetown to entrepreneurs across the provinces." },
  { icon: Layers, title: "Plugin Ecosystem", desc: "Extend functionality with community-built plugins for calendar, email, coding, writing, and more." },
  { icon: Cpu, title: "Offline Processing", desc: "Core features work without internet — essential for areas with limited connectivity across Sierra Leone." },
  { icon: Sparkles, title: "Adaptive Learning", desc: "Sangpt learns your preferences, writing style, and workflows over time — becoming more useful the more you use it." },
];

const useCases = [
  { icon: GraduationCap, title: "Students & Researchers", desc: "Summarize papers, draft essays, organize research notes, and prepare presentations. Sangpt accelerates academic work for students at Fourah Bay College, IPAM, and universities across Sierra Leone." },
  { icon: Briefcase, title: "Business Professionals", desc: "Draft emails, prepare meeting agendas, analyze reports, and automate routine tasks. Sangpt integrates into your daily workflow to boost productivity for businesses in Freetown and beyond." },
  { icon: PenTool, title: "Content Creators", desc: "Generate ideas, outline scripts, write drafts, and refine copy. Whether you're a blogger, YouTuber, or marketer in Sierra Leone, Sangpt helps you create faster without sacrificing quality." },
  { icon: Code, title: "Developers & Engineers", desc: "Debug code, generate documentation, explain complex algorithms, and scaffold projects. Sangpt is helping grow Sierra Leone's emerging tech ecosystem." },
];

export function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden">
      {/* ─── HERO ─── */}
      <div className="relative min-h-[100svh] pt-20 pb-24 flex items-center overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 z-0 hero-gradient-bg" />

        {/* Subtle ambient glow overlays */}
        <div className="absolute top-[20%] left-[15%] w-[400px] h-[400px] rounded-full pointer-events-none z-[1]" style={{ background: "radial-gradient(circle, hsla(220, 50%, 50%, 0.1), transparent 60%)", filter: "blur(80px)" }} />
        <div className="absolute bottom-[20%] right-[10%] w-[350px] h-[350px] rounded-full pointer-events-none z-[1]" style={{ background: "radial-gradient(circle, hsla(240, 40%, 50%, 0.08), transparent 60%)", filter: "blur(80px)" }} />

        {/* Future video layer */}
        <div className="absolute inset-0 z-[1]" aria-hidden="true" data-slot="video-bg" />

        {/* Smooth gradient transition to content */}
        <div className="absolute bottom-0 left-0 right-0 h-[250px] z-[2]" style={{
          background: "linear-gradient(to top, hsl(var(--background)) 0%, hsla(var(--background) / 0.7) 40%, transparent 100%)",
        }} />

        <div className="relative z-[3] mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 lg:pl-24 w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-center">
            {/* Left: Content in glass panel */}
            <motion.div {...fadeUp(0)} className="hero-glass rounded-3xl p-6 sm:p-8 lg:p-10">
              {/* Badge */}
              <div
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-white/70 text-xs font-medium mb-8 w-fit"
                style={{
                  background: "hsla(0, 0%, 100%, 0.06)",
                  border: "1px solid hsla(0, 0%, 100%, 0.08)",
                }}
              >
                <img src={devlinkLogo} alt="Dev-Link" className="h-3.5 w-3.5 rounded" />
                <span>Built by Dev-Link</span>
                <span className="ml-0.5">🇸🇱</span>
              </div>

              {/* Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.08] tracking-tight mb-4 text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Meet Sangpt.
              </h1>

              {/* Subtitle */}
              <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-white/35 mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Sierra Leone's AI Companion
              </h2>

              {/* Description */}
              <p className="text-white/50 text-sm sm:text-base max-w-lg mb-10 leading-relaxed">
                The first AI assistant built in Sierra Leone, by Sierra Leoneans, for the world. Smart, adaptive, and private — download now on the App Store & Google Play.
              </p>

              {/* Pill buttons */}
              <div className="flex flex-wrap gap-3 mb-10">
                <Link
                  to="/download"
                  className="hero-btn-primary group inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm"
                >
                  <Download className="h-4 w-4" />
                  Download the App
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <Link
                  to="/about"
                  className="hero-btn-secondary inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-sm text-white"
                >
                  <Play className="h-3.5 w-3.5" />
                  Learn More
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-2xl hero-glass">
                {[
                  { value: "🇸🇱", label: "Made in Salone" },
                  { value: "10K+", label: "Downloads" },
                  { value: "99.9%", label: "Uptime" },
                  { value: "∞", label: "Possibilities" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center py-1.5">
                    <div className="text-xl sm:text-2xl font-bold text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{stat.value}</div>
                    <div className="text-[10px] text-white/30 mt-0.5 font-medium uppercase tracking-wider">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right: AI Demo Chat */}
            <motion.div {...fadeUp(0.15)} className="hidden lg:block">
              <AiDemoChat />
            </motion.div>
          </div>
        </div>
      </div>

      {/* ─── WHAT IS SANGPT? ─── */}
      <section className="py-20 lg:py-28 relative">
        <div className="glow-orb w-[400px] h-[400px] top-0 left-[10%]" style={{ background: "hsla(35, 40%, 85%, 0.2)" }} />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 lg:pl-24">
          <motion.div {...fadeUp()} className="text-center mb-14">
            <span className="text-muted-foreground text-xs font-semibold tracking-widest uppercase">About</span>
            <h2 className="font-display text-3xl lg:text-4xl xl:text-5xl font-bold mt-3 mb-4 text-foreground">What is Sangpt?</h2>
          </motion.div>
          <div className="grid lg:grid-cols-2 gap-6 items-start">
            <motion.div {...fadeUp(0.1)} className="glass-strong rounded-2xl p-6 lg:p-8">
              <p className="text-muted-foreground leading-relaxed mb-4 text-sm lg:text-base">
                Sangpt is Sierra Leone's first homegrown AI assistant, proudly built by <strong className="text-foreground">Dev-Link</strong> — a team of engineers, designers, and innovators based in Freetown. Sangpt represents a milestone for West African technology: a world-class AI product conceived, designed, and developed entirely in Sierra Leone.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4 text-sm lg:text-base">
                At its core, Sangpt combines large language model capabilities with a privacy-first architecture to deliver fast, intelligent responses. Whether you're a student at university, a business owner in the market, or a developer building the next big thing, Sangpt understands context, remembers your preferences, and adapts to your working style.
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm lg:text-base">
                Sangpt isn't just another chatbot — it's a comprehensive productivity platform that proves world-class innovation can come from anywhere, including Sierra Leone. Available on the App Store and Google Play.
              </p>
            </motion.div>
            <motion.div {...fadeUp(0.2)} className="glass-strong rounded-2xl p-6 lg:p-8">
              <h3 className="font-display text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                <Lightbulb className="h-5 w-5" /> Why Sangpt Exists
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4 text-sm lg:text-base">
                We built Sangpt because Sierra Leone deserves its own AI — one that understands our context, our challenges, and our aspirations. While global AI tools exist, none were built with the specific needs of Sierra Leonean users in mind.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4 text-sm lg:text-base">
                Our vision is simple: <strong className="text-foreground">AI should be accessible to every Sierra Leonean.</strong> From Freetown to Kenema, from Bo to Makeni — anyone with a smartphone should have access to intelligent assistance that helps them learn, work, and grow.
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm lg:text-base">
                Dev-Link's philosophy centers on homegrown innovation. We believe that powerful, intelligent software can and should be built in Africa, by Africans, for the world. Sangpt is proof of that belief.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── BENTO GRID ─── */}
      <section className="py-20 lg:py-28 relative">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 lg:pl-24">
          <motion.div {...fadeUp()} className="text-center mb-14">
            <span className="text-muted-foreground text-xs font-semibold tracking-widest uppercase">Features</span>
            <h2 className="font-display text-3xl lg:text-4xl xl:text-5xl font-bold mt-3 mb-4 text-foreground">What Sangpt Can Do</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm lg:text-base">Powerful AI capabilities, designed in Freetown for the world.</p>
          </motion.div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {[
              { icon: Bot, label: "Smart Chat", desc: "Context-aware conversations in English & Krio", accent: "hsla(220, 60%, 55%, 0.06)" },
              { icon: Brain, label: "Deep Analysis", desc: "Research & data-driven insights", accent: "hsla(260, 50%, 50%, 0.06)" },
              { icon: Zap, label: "Automation", desc: "Workflow triggers & actions", accent: "hsla(35, 70%, 50%, 0.06)" },
              { icon: Sparkles, label: "Adaptive AI", desc: "Learns your unique style", accent: "hsla(160, 50%, 40%, 0.06)" },
            ].map((item, i) => (
              <motion.div key={item.label} {...fadeUp(0.05 + i * 0.05)} className="glass-hover rounded-2xl p-5 sm:p-6 group relative overflow-hidden">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: item.accent }} />
                <div className="relative">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl glass-icon flex items-center justify-center mb-3 sm:mb-4">
                    <item.icon className="h-5 w-5 sm:h-6 sm:w-6 text-foreground" />
                  </div>
                  <p className="text-sm font-semibold text-foreground leading-tight">{item.label}</p>
                  <p className="text-xs text-muted-foreground mt-1 hidden sm:block">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── KEY CAPABILITIES ─── */}
      <section className="py-20 lg:py-28 relative">
        <div className="glow-orb w-[350px] h-[350px] top-20 right-[5%]" style={{ background: "hsla(40, 35%, 85%, 0.18)" }} />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 lg:pl-24">
          <motion.div {...fadeUp()} className="text-center mb-14">
            <span className="text-muted-foreground text-xs font-semibold tracking-widest uppercase">Capabilities</span>
            <h2 className="font-display text-3xl lg:text-4xl xl:text-5xl font-bold mt-3 mb-4 text-foreground">Everything You Need</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm lg:text-base">
              Powerful features designed to make your interaction with AI effortless, productive, and secure — right from your phone.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {capabilities.map((f, i) => (
              <motion.div key={f.title} {...fadeUp(i * 0.05)} className="glass-hover rounded-2xl p-5 sm:p-6 group">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl glass-icon flex items-center justify-center mb-3 sm:mb-4">
                  <f.icon className="h-5 w-5 sm:h-6 sm:w-6 text-foreground" />
                </div>
                <h3 className="font-display font-semibold text-sm sm:text-base mb-2 text-foreground">{f.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section className="py-20 lg:py-28 relative">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 lg:pl-24">
          <motion.div {...fadeUp()} className="text-center mb-14">
            <span className="text-muted-foreground text-xs font-semibold tracking-widest uppercase">Process</span>
            <h2 className="font-display text-3xl lg:text-4xl xl:text-5xl font-bold mt-3 mb-4 text-foreground">How Sangpt Works</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm lg:text-base">
              Getting started is simple. Three steps to unlock the full power of Sierra Leone's AI companion.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { step: "01", icon: Smartphone, title: "Download the App", desc: "Get Sangpt from the Apple App Store or Google Play Store. Installation takes seconds. No account required to get started." },
              { step: "02", icon: MessageSquare, title: "Start a Conversation", desc: "Open Sangpt and begin chatting naturally. The AI understands context and can handle complex, multi-turn conversations." },
              { step: "03", icon: Globe, title: "Customize & Automate", desc: "Set up plugins, create automation workflows, and personalize. Sangpt learns your preferences over time." },
            ].map((item, i) => (
              <motion.div key={item.step} {...fadeUp(0.1 + i * 0.08)} className="glass-hover rounded-2xl p-6 sm:p-8 text-center group relative overflow-hidden">
                <div className="absolute top-4 right-4 text-5xl sm:text-6xl font-bold text-foreground/[0.03] font-display">{item.step}</div>
                <div className="relative">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl glass-icon flex items-center justify-center mx-auto mb-4">
                    <item.icon className="h-6 w-6 sm:h-7 sm:w-7 text-foreground" />
                  </div>
                  <h3 className="font-display font-semibold text-base sm:text-lg text-foreground mb-3">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── USE CASES ─── */}
      <section className="py-20 lg:py-28 relative">
        <div className="glow-orb w-[400px] h-[400px] bottom-0 left-[20%]" style={{ background: "hsla(30, 35%, 88%, 0.15)" }} />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 lg:pl-24">
          <motion.div {...fadeUp()} className="text-center mb-14">
            <span className="text-muted-foreground text-xs font-semibold tracking-widest uppercase">Use Cases</span>
            <h2 className="font-display text-3xl lg:text-4xl xl:text-5xl font-bold mt-3 mb-4 text-foreground">Built for Everyone</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm lg:text-base">
              No matter your field, Sangpt adapts to your unique workflow — from Freetown to the world.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-5">
            {useCases.map((uc, i) => (
              <motion.div key={uc.title} {...fadeUp(0.1 + i * 0.08)} className="glass-hover rounded-2xl p-6 sm:p-8 group">
                <div className="flex items-start gap-4 sm:gap-5">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl glass-icon flex items-center justify-center flex-shrink-0">
                    <uc.icon className="h-6 w-6 sm:h-7 sm:w-7 text-foreground" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-base sm:text-lg text-foreground mb-2">{uc.title}</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{uc.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TRUST & SAFETY ─── */}
      <section className="py-20 lg:py-28 relative">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 lg:pl-24">
          <motion.div {...fadeUp()} className="text-center mb-14">
            <span className="text-muted-foreground text-xs font-semibold tracking-widest uppercase">Trust & Safety</span>
            <h2 className="font-display text-3xl lg:text-4xl xl:text-5xl font-bold mt-3 mb-4 text-foreground">Your Privacy, Our Priority</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm lg:text-base">
              We've built Sangpt from the ground up with security and transparency at every layer.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { icon: Lock, title: "Zero-Knowledge Architecture", desc: "Your conversations are private by design. We can't read your data — not because of a policy, but because of how the system is built." },
              { icon: Eye, title: "Full Transparency", desc: "Dev-Link operates with full transparency. We publish regular security reports and welcome community review of our privacy practices." },
              { icon: HeartHandshake, title: "No Data Monetization", desc: "We will never sell, share, or monetize your personal data. Our business model is built on software quality, not surveillance." },
            ].map((item, i) => (
              <motion.div key={item.title} {...fadeUp(0.1 + i * 0.08)} className="glass-hover rounded-2xl p-6 sm:p-8 text-center group">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl glass-icon flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-6 w-6 sm:h-7 sm:w-7 text-foreground" />
                </div>
                <h3 className="font-display font-semibold text-base sm:text-lg text-foreground mb-3">{item.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── JOURNAL CTA ─── */}
      <section className="py-20 lg:py-28 relative">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 lg:pl-24">
          <motion.div {...fadeUp()} className="glass-strong rounded-3xl p-8 lg:p-14 text-center">
            <span className="text-muted-foreground text-xs font-semibold tracking-widest uppercase mb-3 block">Journal</span>
            <h2 className="font-display text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-4">
              Go Deeper with Sangpt
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8 text-sm lg:text-base leading-relaxed">
              Read insights, updates, and ideas from the Dev-Link team in Freetown. From product announcements to deep dives on responsible AI.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link to="/journal" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-foreground text-background font-semibold hover:bg-foreground/90 transition-all duration-300 text-sm hover:scale-105">
                Read the Sangpt Journal <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/about" className="glass-btn inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-foreground font-semibold text-sm">
                Learn How Sangpt Works
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── DOWNLOAD CTA ─── */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 lg:pl-24">
          <motion.div {...fadeUp()} className="rounded-3xl p-8 lg:p-14 text-center relative overflow-hidden" style={{ background: "linear-gradient(135deg, hsl(220 15% 8%), hsl(235 18% 12%), hsl(220 20% 9%))" }}>
            {/* Glow orbs inside dark card */}
            <div className="absolute top-1/4 left-1/4 w-48 h-48 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, hsla(220, 60%, 55%, 0.12), transparent 60%)", filter: "blur(50px)" }} />
            <div className="absolute bottom-1/4 right-1/4 w-36 h-36 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, hsla(250, 50%, 50%, 0.08), transparent 60%)", filter: "blur(50px)" }} />
            <div className="relative">
              <h2 className="font-display text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4">
                Download Sierra Leone's AI
              </h2>
              <p className="text-white/45 max-w-2xl mx-auto mb-8 text-sm lg:text-base leading-relaxed">
                Join thousands of users across Sierra Leone and beyond. Available now on the App Store and Google Play.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link
                  to="/download"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105"
                  style={{
                    background: "hsla(0, 0%, 100%, 0.95)",
                    color: "hsl(0, 0%, 9%)",
                    boxShadow: "0 4px 20px hsla(0, 0%, 0%, 0.15)",
                  }}
                >
                  <Smartphone className="h-4 w-4" /> Get the App
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm text-white transition-all duration-300 hover:scale-105"
                  style={{
                    background: "hsla(0, 0%, 100%, 0.08)",
                    border: "1px solid hsla(0, 0%, 100%, 0.12)",
                  }}
                >
                  Learn More
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </section>
  );
}
