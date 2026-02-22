import { motion } from "framer-motion";
import { FileText, AlertCircle, CheckCircle, Ban, RefreshCw, Scale } from "lucide-react";
import { fadeUp } from "@/lib/animations";
import { PageLayout } from "@/components/layout/PageLayout";

const sections = [
  {
    icon: CheckCircle,
    title: "Acceptance of Terms",
    content: "By downloading, installing, or using Sangpt, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the application.",
  },
  {
    icon: FileText,
    title: "Use License",
    content: "Dev-Link grants you a personal, non-transferable, non-exclusive license to use Sangpt on your devices. This license does not include the right to modify, distribute, or create derivative works without explicit permission.",
  },
  {
    icon: Ban,
    title: "Prohibited Uses",
    content: "You may not use Sangpt for any unlawful purpose, to harass others, to distribute malware, to attempt to gain unauthorized access to systems, or to violate any applicable laws or regulations.",
  },
  {
    icon: AlertCircle,
    title: "Limitation of Liability",
    content: "Sangpt is provided 'as is' without warranties of any kind. Dev-Link shall not be liable for any indirect, incidental, or consequential damages arising from your use of the application.",
  },
  {
    icon: RefreshCw,
    title: "Modifications to Terms",
    content: "Dev-Link reserves the right to modify these terms at any time. We will notify users of significant changes through the application or via email. Continued use after changes constitutes acceptance.",
  },
  {
    icon: Scale,
    title: "Governing Law",
    content: "These terms shall be governed by and construed in accordance with applicable laws. Any disputes arising from these terms will be resolved through binding arbitration.",
  },
];

const TermsPage = () => {
  return (
    <PageLayout>
      <div className="py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <motion.div {...fadeUp()} className="text-center mb-16">
            <div className="w-14 h-14 rounded-2xl bg-secondary border border-border flex items-center justify-center mx-auto mb-6">
              <FileText className="h-7 w-7 text-foreground" />
            </div>
            <h1 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-4">Terms of Service</h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Please read these terms carefully before using Sangpt. Last updated: February 2026.
            </p>
          </motion.div>

          <div className="space-y-5">
            {sections.map((s, i) => (
              <motion.div key={s.title} {...fadeUp(0.1 + i * 0.06)} className="glass-hover rounded-2xl p-6 lg:p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-secondary border border-border flex items-center justify-center">
                    <s.icon className="h-5 w-5 text-foreground" />
                  </div>
                  <div>
                    <h2 className="font-display font-semibold text-lg mb-2 text-foreground">{s.title}</h2>
                    <p className="text-muted-foreground text-sm leading-relaxed">{s.content}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default TermsPage;
