import { motion } from "framer-motion";
import { Lightbulb, Target, Users, Globe, Zap, Heart, Shield, Code, Clock, Sparkles, ArrowRight, BookOpen } from "lucide-react";
import { fadeUp } from "@/lib/animations";
import { PageLayout } from "@/components/layout/PageLayout";
import { Link } from "react-router-dom";
import sangptLogo from "@/assets/sangpt-logo.png";

const values = [
  { icon: Target, title: "Our Mission", desc: "To democratize AI and make intelligent assistance available to everyone, regardless of technical expertise, budget, or location. We believe powerful technology should be a tool for empowerment, not a privilege reserved for a few." },
  { icon: Users, title: "Community Driven", desc: "Built with feedback from thousands of users and contributors worldwide. Every feature, design choice, and improvement in Sangpt is informed by real-world needs and community input. We listen, we iterate, and we ship." },
  { icon: Globe, title: "Global Accessibility", desc: "Available in multiple languages and across all major platforms. We're committed to removing barriers — whether linguistic, geographic, or economic — so that everyone can benefit from AI technology." },
  { icon: Heart, title: "Privacy First, Always", desc: "Your data stays yours. End-to-end encryption with zero-knowledge architecture ensures that not even we can access your conversations. Privacy isn't a feature we bolt on — it's the foundation of everything we build." },
  { icon: Code, title: "Open Source Commitment", desc: "Transparency is non-negotiable. Sangpt's core is open source, meaning anyone can audit, contribute to, or learn from our codebase. We believe openness builds trust, and trust builds great products." },
  { icon: Sparkles, title: "Continuous Innovation", desc: "Our team ships weekly updates, constantly pushing the boundaries of what local AI can do. From smarter conversations to deeper integrations, we're always working on making Sangpt better for you." },
];

const timeline = [
  { year: "2024", title: "Project Inception", desc: "Dev-Link assembles a small, passionate team of AI researchers, engineers, and designers. The vision: build an AI assistant that respects user privacy while delivering enterprise-grade intelligence. Initial prototypes prove that local-first AI is not only feasible but superior for many use cases." },
  { year: "Early 2025", title: "Alpha & Community Building", desc: "The first alpha builds are shared with a small group of testers. Feedback pours in — hundreds of feature requests, bug reports, and design suggestions. The community shapes the product's direction, and core features like natural language chat, task automation, and knowledge retrieval take form." },
  { year: "Mid 2025", title: "Public Beta Launch", desc: "Sangpt launches in public beta with support for Windows, macOS, and Linux. Over 5,000 users sign up within the first month. The beta period reveals critical insights about performance optimization, offline capabilities, and cross-platform consistency." },
  { year: "2026", title: "Version 2.0 — Full Release", desc: "Sangpt v2.0 launches with a complete feature set: intelligent chat, workflow automation, plugin ecosystem, end-to-end encryption, and seamless cross-platform sync. The product has evolved from a simple chatbot into a comprehensive productivity platform used by students, professionals, and developers worldwide." },
];

const team = [
  { role: "Engineering", desc: "A team of full-stack engineers and ML researchers building the core AI engine, desktop applications, and cloud infrastructure." },
  { role: "Design", desc: "UI/UX designers crafting intuitive interfaces, interaction patterns, and visual systems that make complex AI technology feel simple." },
  { role: "Community", desc: "Community managers and developer relations working to grow the open-source ecosystem, support contributors, and gather user feedback." },
];

const AboutPage = () => {
  return (
    <PageLayout>
      <div className="py-16 lg:py-24">
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          {/* Hero */}
          <motion.div {...fadeUp()} className="text-center mb-20">
            <img src={sangptLogo} alt="Sangpt" className="w-20 h-20 rounded-2xl mx-auto mb-6" />
            <h1 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-4">About Sangpt</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-base lg:text-lg leading-relaxed">
              Built by Dev-Link to enhance daily productivity and make AI interaction seamless, intuitive, and accessible for everyone. This is the story of why we exist and where we're going.
            </p>
          </motion.div>

          {/* Long-form intro */}
          <motion.div {...fadeUp(0.05)} className="glass rounded-3xl p-8 lg:p-10 mb-16">
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">The Story Behind Sangpt</h2>
            <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
              <p>
                Sangpt began as a side project — a weekend experiment by a small group of engineers who were frustrated with the state of AI assistants. Every tool they tried either required a constant internet connection, stored conversations on remote servers with vague privacy policies, or offered a generic, one-size-fits-all experience that didn't adapt to individual needs.
              </p>
              <p>
                The team asked a simple question: <strong className="text-foreground">What if we could build an AI assistant that was genuinely private, ran locally on your device, and actually got smarter the more you used it?</strong> That question became the founding principle of Sangpt.
              </p>
              <p>
                Over two years, the project grew from a command-line prototype into a full-featured desktop application with a beautiful interface, powerful automation capabilities, and a thriving open-source community. Today, Sangpt is used by thousands of people worldwide — from university students researching papers to Fortune 500 professionals managing complex workflows.
              </p>
              <p>
                But we're just getting started. Our roadmap includes mobile apps, deeper third-party integrations, advanced reasoning capabilities, and collaborative features for teams. We're building the AI companion we always wished existed, and we're doing it in the open, with the community, every step of the way.
              </p>
            </div>
          </motion.div>

          {/* Values */}
          <motion.div {...fadeUp(0.1)} className="text-center mb-12">
            <span className="text-muted-foreground text-sm font-semibold tracking-widest uppercase">Values</span>
            <h2 className="font-display text-3xl lg:text-4xl font-bold mt-3 text-foreground">What We Stand For</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
            {values.map((v, i) => (
              <motion.div key={v.title} {...fadeUp(0.12 + i * 0.05)} className="glass-hover rounded-2xl p-6 group">
                <div className="w-12 h-12 rounded-xl bg-secondary border border-border flex items-center justify-center mb-4 group-hover:bg-accent transition-colors">
                  <v.icon className="h-6 w-6 text-foreground" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2 text-foreground">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Timeline */}
          <motion.div {...fadeUp(0.2)} className="mb-20">
            <div className="text-center mb-12">
              <span className="text-muted-foreground text-sm font-semibold tracking-widest uppercase">Journey</span>
              <h2 className="font-display text-3xl lg:text-4xl font-bold mt-3 text-foreground">Our Timeline</h2>
            </div>
            <div className="space-y-6">
              {timeline.map((item, i) => (
                <motion.div key={item.year} {...fadeUp(0.25 + i * 0.06)} className="glass-hover rounded-2xl p-6 lg:p-8 flex items-start gap-5">
                  <div className="flex-shrink-0 w-20 h-14 rounded-2xl bg-foreground text-background flex items-center justify-center font-display font-bold text-sm">
                    {item.year}
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Team */}
          <motion.div {...fadeUp(0.3)} className="mb-20">
            <div className="text-center mb-12">
              <span className="text-muted-foreground text-sm font-semibold tracking-widest uppercase">Team</span>
              <h2 className="font-display text-3xl lg:text-4xl font-bold mt-3 text-foreground">The People Behind Sangpt</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mt-3">
                Dev-Link is a distributed team of passionate builders who believe that AI should be private, powerful, and accessible to everyone.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-5">
              {team.map((t, i) => (
                <motion.div key={t.role} {...fadeUp(0.35 + i * 0.06)} className="glass-hover rounded-2xl p-6 text-center group">
                  <div className="w-14 h-14 rounded-2xl bg-secondary border border-border flex items-center justify-center mx-auto mb-4 group-hover:bg-accent transition-colors">
                    <Users className="h-7 w-7 text-foreground" />
                  </div>
                  <h3 className="font-display font-semibold text-foreground mb-2">{t.role}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Quote */}
          <motion.div {...fadeUp(0.4)} className="glass rounded-3xl p-8 lg:p-12 text-center mb-16">
            <Lightbulb className="h-8 w-8 text-muted-foreground mx-auto mb-4" />
            <blockquote className="italic text-lg text-foreground leading-relaxed max-w-2xl mx-auto mb-4">
              "Sangpt represents our vision of AI that truly understands and adapts to individual needs — a companion that grows with you, respects your privacy, and empowers you to do your best work."
            </blockquote>
            <p className="text-sm text-muted-foreground font-semibold">— The Dev-Link Team</p>
          </motion.div>

          {/* CTA */}
          <motion.div {...fadeUp(0.45)} className="rounded-3xl p-8 lg:p-12 text-center" style={{ background: "linear-gradient(135deg, hsl(0 0% 9%), hsl(0 0% 18%))" }}>
            <h2 className="font-display text-2xl lg:text-3xl font-bold text-background mb-4">Join Our Community</h2>
            <p className="text-background/60 max-w-xl mx-auto mb-8">
              Whether you want to contribute code, report bugs, suggest features, or just say hi — we'd love to hear from you.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link to="/download" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-background text-foreground font-semibold hover:bg-background/90 transition-all">
                Download Sangpt <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/license" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl border border-background/20 text-background font-semibold hover:bg-background/10 transition-all">
                View License
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </PageLayout>
  );
};

export default AboutPage;
