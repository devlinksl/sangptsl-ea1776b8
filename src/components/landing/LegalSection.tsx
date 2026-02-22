import { motion } from "framer-motion";
import { Scale, FileText, Shield } from "lucide-react";
import { fadeUp } from "@/lib/animations";

const sections = [
  { id: "license", icon: Scale, title: "Open Source License", content: "Sangpt is released under the MIT License. You are free to use, modify, and distribute this software in accordance with the terms of the license. Full license text and attributions are available in the project repository." },
  { id: "terms", icon: FileText, title: "Terms of Service", content: "By using Sangpt, you agree to our terms of service. These terms govern your use of the application and related services. We reserve the right to update these terms at any time. Continued use constitutes acceptance of any modifications." },
  { id: "privacy", icon: Shield, title: "Privacy Policy", content: "Your privacy is important to us. Sangpt collects minimal data required for functionality. We do not sell or share your personal information with third parties. All data is encrypted in transit and at rest using industry-standard protocols." },
];

export function LegalSection() {
  return (
    <section className="py-24 relative">
      <div className="mx-auto max-w-7xl px-4 lg:px-8 lg:pl-24">
        <motion.div {...fadeUp()} className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">Legal</span>
          <h2 className="font-display text-3xl lg:text-5xl font-bold mt-3 mb-4">
            Transparency & <span className="gradient-text">Trust</span>
          </h2>
        </motion.div>

        <div className="grid gap-5">
          {sections.map((s, i) => (
            <motion.div key={s.id} id={s.id} {...fadeUp(i * 0.1)} className="glass-hover rounded-2xl p-6 lg:p-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <s.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-xl mb-3">{s.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed max-w-3xl">{s.content}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
