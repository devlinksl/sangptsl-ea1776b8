import { motion } from "framer-motion";
import { MessageSquare, Workflow, BookOpen, UserCog, Globe, ShieldCheck } from "lucide-react";
import { fadeUp } from "@/lib/animations";

const features = [
  { icon: MessageSquare, title: "Smart Conversation", desc: "Natural language understanding with context-aware responses that feel genuinely human." },
  { icon: Workflow, title: "Task Automation", desc: "Streamline your workflows by automating repetitive tasks with intelligent triggers." },
  { icon: BookOpen, title: "Knowledge Retrieval", desc: "Instant access to information with AI-powered search and summarization capabilities." },
  { icon: UserCog, title: "Personalized Responses", desc: "Adapts to your style and preferences over time for a tailored experience." },
  { icon: Globe, title: "Multi-Platform", desc: "Seamlessly available on desktop, web, and mobile — your AI companion everywhere." },
  { icon: ShieldCheck, title: "Privacy First", desc: "Your data stays yours. End-to-end encryption with zero-knowledge architecture." },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 relative">
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 50% 0%, hsla(40, 30%, 92%, 0.5) 0%, transparent 50%)" }} />
      <div className="relative mx-auto max-w-7xl px-4 lg:px-8 lg:pl-24">
        <motion.div {...fadeUp()} className="text-center mb-16">
          <span className="text-muted-foreground text-sm font-semibold tracking-widest uppercase">Features</span>
          <h2 className="font-display text-3xl lg:text-5xl font-bold mt-3 mb-4 text-foreground">
            Everything You Need
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base lg:text-lg">
            Powerful capabilities designed to make your interaction with AI effortless and productive.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <motion.div key={f.title} {...fadeUp(i * 0.08)} className="glass-hover rounded-2xl p-6 group">
              <div className="w-12 h-12 rounded-xl bg-secondary border border-border flex items-center justify-center mb-4 group-hover:bg-accent transition-colors">
                <f.icon className="h-6 w-6 text-foreground" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2 text-foreground">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
