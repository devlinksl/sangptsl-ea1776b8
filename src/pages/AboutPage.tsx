import { motion } from "framer-motion";
import { Lightbulb, Target, Users, Globe, Zap, Heart } from "lucide-react";
import { fadeUp } from "@/lib/animations";
import { PageLayout } from "@/components/layout/PageLayout";
import sangptLogo from "@/assets/sangpt-logo.png";

const values = [
  { icon: Target, title: "Our Mission", desc: "To democratize AI and make intelligent assistance available to everyone. We believe technology should work for you." },
  { icon: Users, title: "Community Driven", desc: "Built with feedback from thousands of users and contributors. Sangpt evolves based on real-world needs." },
  { icon: Globe, title: "Global Reach", desc: "Available in multiple languages and platforms, making AI accessible across borders and devices." },
  { icon: Heart, title: "Privacy First", desc: "Your data stays yours. End-to-end encryption with zero-knowledge architecture by default." },
];

const timeline = [
  { year: "2024", title: "Project Started", desc: "Dev-Link begins development of Sangpt with a small team of AI enthusiasts." },
  { year: "2025", title: "Beta Launch", desc: "First public beta released with core chat and task automation features." },
  { year: "2026", title: "v2.0 Release", desc: "Full release with knowledge retrieval, multi-platform support, and offline mode." },
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
              Built by Dev-Link to enhance daily productivity and make AI interaction seamless, intuitive, and accessible for everyone.
            </p>
          </motion.div>

          {/* Values */}
          <div className="grid sm:grid-cols-2 gap-5 mb-20">
            {values.map((v, i) => (
              <motion.div key={v.title} {...fadeUp(0.1 + i * 0.08)} className="glass-hover rounded-2xl p-6 group">
                <div className="w-12 h-12 rounded-xl bg-secondary border border-border flex items-center justify-center mb-4 group-hover:bg-accent transition-colors">
                  <v.icon className="h-6 w-6 text-foreground" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2 text-foreground">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Timeline */}
          <motion.div {...fadeUp(0.3)} className="mb-20">
            <h2 className="font-display text-2xl lg:text-3xl font-bold text-foreground text-center mb-12">Our Journey</h2>
            <div className="space-y-6">
              {timeline.map((item, i) => (
                <motion.div key={item.year} {...fadeUp(0.35 + i * 0.08)} className="glass-hover rounded-2xl p-6 flex items-start gap-5">
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-foreground text-background flex items-center justify-center font-display font-bold text-lg">
                    {item.year}
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Quote */}
          <motion.div {...fadeUp(0.5)} className="glass rounded-3xl p-8 lg:p-12 text-center">
            <Lightbulb className="h-8 w-8 text-muted-foreground mx-auto mb-4" />
            <blockquote className="italic text-lg text-foreground leading-relaxed max-w-2xl mx-auto mb-4">
              "Sangpt represents our vision of AI that truly understands and adapts to individual needs — a companion that grows with you."
            </blockquote>
            <p className="text-sm text-muted-foreground font-semibold">— Dev-Link Team</p>
          </motion.div>
        </div>
      </div>
    </PageLayout>
  );
};

export default AboutPage;
