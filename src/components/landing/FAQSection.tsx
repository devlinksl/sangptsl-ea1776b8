import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "Can Sangpt be used offline?", a: "Yes, Sangpt has an offline mode that provides core functionality without an internet connection. Some advanced features require connectivity for real-time processing." },
  { q: "Is my data safe with Sangpt?", a: "Absolutely. We use end-to-end encryption and a zero-knowledge architecture. Your data is never shared with third parties and you maintain full control over your information." },
  { q: "What platforms does Sangpt support?", a: "Sangpt is available on Windows, macOS, and Linux. A mobile version is currently in development and will be released soon." },
  { q: "Is Sangpt free to use?", a: "Sangpt offers a free tier with essential features. Premium plans unlock advanced capabilities, priority support, and extended usage limits." },
  { q: "How does Sangpt differ from other AI assistants?", a: "Sangpt is built with a privacy-first approach, adapts to your personal style over time, and runs locally on your device for maximum security and speed." },
];

export function FAQSection() {
  return (
    <section id="faq" className="py-24 relative">
      <div className="mx-auto max-w-3xl px-4 lg:px-8">
        <motion.div {...fadeUp()} className="text-center mb-16">
          <span className="text-muted-foreground text-sm font-semibold tracking-widest uppercase">FAQ</span>
          <h2 className="font-display text-3xl lg:text-5xl font-bold mt-3 mb-4 text-foreground">
            Common Questions
          </h2>
        </motion.div>

        <motion.div {...fadeUp(0.1)} className="glass rounded-2xl p-6 lg:p-8">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border-border/50">
                <AccordionTrigger className="text-left font-display font-medium hover:no-underline hover:text-foreground/70 transition-colors py-5 text-foreground">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
