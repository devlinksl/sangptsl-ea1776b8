import { motion } from "framer-motion";
import { Lightbulb, Target, Users } from "lucide-react";
import { fadeUp } from "@/lib/animations";

export function AboutSection() {
  return (
    <section id="about" className="py-24 relative">
      <div className="mx-auto max-w-7xl px-4 lg:px-8 lg:pl-24">
        <motion.div {...fadeUp()} className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">About</span>
          <h2 className="font-display text-3xl lg:text-5xl font-bold mt-3 mb-4">
            Built by <span className="gradient-text">Dev-Link</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base lg:text-lg leading-relaxed">
            Sangpt was created to enhance daily productivity and make AI interaction seamless, intuitive, and accessible for everyone.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          <motion.div {...fadeUp(0.1)} className="glass-hover rounded-2xl p-1 min-h-[320px] flex items-center justify-center">
            <div className="w-full h-full rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="h-10 w-10 text-primary" />
                </div>
                <p className="text-muted-foreground text-sm">AI Illustration Placeholder</p>
              </div>
            </div>
          </motion.div>

          <div className="flex flex-col gap-5">
            <motion.div {...fadeUp(0.15)} className="glass-hover rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Target className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg mb-2">Our Mission</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    To democratize AI and make intelligent assistance available to everyone. We believe technology should work for you, not the other way around.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div {...fadeUp(0.2)} className="glass-hover rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Users className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg mb-2">Community Driven</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Built with feedback from thousands of users and contributors. Sangpt evolves based on real-world needs and community input.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div {...fadeUp(0.25)} className="glass-hover rounded-2xl p-6 border-primary/20">
              <blockquote className="italic text-muted-foreground text-sm leading-relaxed">
                "Sangpt represents our vision of AI that truly understands and adapts to individual needs — a companion that grows with you."
              </blockquote>
              <p className="text-xs text-primary mt-3 font-semibold">— Dev-Link Team</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
