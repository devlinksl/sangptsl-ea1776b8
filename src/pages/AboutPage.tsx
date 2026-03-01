import { motion } from "framer-motion";
import { Lightbulb, Target, Users, Globe, Zap, Heart, Shield, Code, Clock, Sparkles, ArrowRight, BookOpen, Smartphone } from "lucide-react";
import { fadeUp } from "@/lib/animations";
import { PageLayout } from "@/components/layout/PageLayout";
import { Link } from "react-router-dom";
import sangptLogo from "@/assets/sangpt-logo.png";

const values = [
  { icon: Target, title: "Our Mission", desc: "To put world-class AI into the hands of every Sierra Leonean. We believe powerful technology should be a tool for empowerment — accessible from Freetown to the farthest village." },
  { icon: Users, title: "Community Driven", desc: "Built with feedback from thousands of users across Sierra Leone and the diaspora. Every feature is informed by real-world needs from our community." },
  { icon: Globe, title: "Proudly Sierra Leonean", desc: "Sangpt is designed, developed, and maintained in Freetown by Dev-Link. We're proving that world-class AI innovation can come from West Africa." },
  { icon: Heart, title: "Privacy First, Always", desc: "Your data stays yours. End-to-end encryption with zero-knowledge architecture ensures that not even we can access your conversations." },
  { icon: Code, title: "African Innovation", desc: "We're part of a growing movement of African tech companies building products for the continent and the world. Sangpt is Sierra Leone's contribution to the global AI landscape." },
  { icon: Sparkles, title: "Continuous Innovation", desc: "Our team in Freetown ships regular updates, constantly pushing the boundaries of what mobile AI can do. We're always working on making Sangpt better for you." },
];

const timeline = [
  { year: "2024", title: "Project Inception", desc: "Dev-Link assembles a passionate team of engineers and designers in Freetown, Sierra Leone. The vision: build an AI assistant that serves Sierra Leoneans and the world. Initial prototypes prove that homegrown AI is not only feasible but powerful." },
  { year: "Early 2025", title: "Alpha & Community Building", desc: "The first alpha builds are shared with testers across Freetown. Feedback pours in from students, professionals, and entrepreneurs. The community shapes the product's direction, and core features take form." },
  { year: "Mid 2025", title: "Public Beta on Mobile", desc: "Sangpt launches in public beta on iOS and Android. Over 5,000 users sign up within the first month across Sierra Leone and the diaspora. The beta reveals critical insights about mobile-first AI usage in West Africa." },
  { year: "2026", title: "Version 2.0 — Full Release", desc: "Sangpt v2.0 launches on the Apple App Store and Google Play Store. The product has evolved from a simple chatbot into a comprehensive AI companion used by students, professionals, and developers across Sierra Leone and beyond." },
];

const team = [
  { role: "Engineering", desc: "Full-stack engineers and ML researchers in Freetown building the core AI engine, mobile applications, and cloud infrastructure." },
  { role: "Design", desc: "UI/UX designers crafting intuitive mobile interfaces that work beautifully for Sierra Leonean users and the global market." },
  { role: "Community", desc: "Community managers across Sierra Leone working to grow the user base, gather feedback, and support users from all backgrounds." },
];

const AboutPage = () => {
  return (
    <PageLayout>
      <div className="py-16 lg:py-24">
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          {/* Hero */}
          <motion.div {...fadeUp()} className="text-center mb-20">
            <img src={sangptLogo} alt="Sangpt" className="w-20 h-20 rounded-2xl mx-auto mb-6" />
            <h1 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-4">About Sangpt 🇸🇱</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-base lg:text-lg leading-relaxed">
              Sierra Leone's first AI assistant, proudly built by Dev-Link in Freetown. This is the story of why we exist and where we're going.
            </p>
          </motion.div>

          {/* Long-form intro */}
          <motion.div {...fadeUp(0.05)} className="glass rounded-3xl p-8 lg:p-10 mb-16">
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">The Story Behind Sangpt</h2>
            <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
              <p>
                Sangpt began in Freetown, Sierra Leone — born from a simple idea by a group of passionate engineers at Dev-Link who believed that Africa shouldn't just be a consumer of AI technology, but a creator of it. Every AI tool they tried was built elsewhere, for other markets, with other priorities.
              </p>
              <p>
                The team asked a simple question: <strong className="text-foreground">What if Sierra Leone built its own AI — one that understood our context, our challenges, and our aspirations?</strong> That question became the founding principle of Sangpt.
              </p>
              <p>
                Over two years of development in Freetown, the project grew from a prototype into a full-featured mobile application available on the Apple App Store and Google Play Store. Today, Sangpt is used by thousands of people — from university students in Freetown to entrepreneurs in Bo, from professionals in Makeni to Sierra Leoneans in the diaspora.
              </p>
              <p>
                Sangpt represents something bigger than just an app. It's proof that world-class technology can be built in Sierra Leone. It's a statement that African innovation belongs on the global stage. And it's just the beginning of what Dev-Link plans to build for Sierra Leone and the world.
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
                Dev-Link is a Freetown-based team of passionate builders who believe that AI should be accessible to every Sierra Leonean.
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
              "Sangpt is Sierra Leone's gift to the world of AI. It represents our belief that innovation knows no borders, and that the brightest ideas can come from anywhere — including Freetown."
            </blockquote>
            <p className="text-sm text-muted-foreground font-semibold">— The Dev-Link Team, Freetown 🇸🇱</p>
          </motion.div>

          {/* CTA */}
          <motion.div {...fadeUp(0.45)} className="rounded-3xl p-8 lg:p-12 text-center" style={{ background: "linear-gradient(135deg, hsl(0 0% 9%), hsl(0 0% 18%))" }}>
            <h2 className="font-display text-2xl lg:text-3xl font-bold text-background mb-4">Download Sangpt Today</h2>
            <p className="text-background/60 max-w-xl mx-auto mb-8">
              Available now on the Apple App Store and Google Play Store. Join thousands of Sierra Leoneans already using AI to work smarter.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link to="/download" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-background text-foreground font-semibold hover:bg-background/90 transition-all">
                <Smartphone className="h-4 w-4" /> Get the App
              </Link>
              <Link to="/journal" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl border border-background/20 text-background font-semibold hover:bg-background/10 transition-all">
                Read the Journal
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </PageLayout>
  );
};

export default AboutPage;
