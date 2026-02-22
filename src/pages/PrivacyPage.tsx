import { motion } from "framer-motion";
import { Shield, Eye, Lock, Server, Users, Globe } from "lucide-react";
import { fadeUp } from "@/lib/animations";
import { PageLayout } from "@/components/layout/PageLayout";

const sections = [
  {
    icon: Eye,
    title: "Information We Collect",
    content: "Sangpt collects minimal data required for functionality. This includes device type, operating system version, and anonymized usage analytics. We do not collect personal messages, files, or browsing history.",
  },
  {
    icon: Lock,
    title: "How We Use Your Data",
    content: "Data collected is used solely to improve the Sangpt experience, fix bugs, and optimize performance. We never sell your data to third parties or use it for targeted advertising.",
  },
  {
    icon: Server,
    title: "Data Storage & Security",
    content: "All data is encrypted in transit using TLS 1.3 and at rest using AES-256 encryption. Our infrastructure is hosted on SOC 2 compliant data centers with regular security audits.",
  },
  {
    icon: Users,
    title: "Third-Party Services",
    content: "Sangpt may use third-party analytics services that collect anonymized usage data. These services are bound by their own privacy policies and we ensure they meet our security standards.",
  },
  {
    icon: Globe,
    title: "International Data Transfers",
    content: "If you access Sangpt from outside the primary hosting region, your data may be transferred internationally. We ensure all transfers comply with applicable data protection laws including GDPR.",
  },
  {
    icon: Shield,
    title: "Your Rights",
    content: "You have the right to access, correct, delete, or export your personal data at any time. You can also opt out of analytics collection through the app settings. Contact us at privacy@devlink.ai for requests.",
  },
];

const PrivacyPage = () => {
  return (
    <PageLayout>
      <div className="py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <motion.div {...fadeUp()} className="text-center mb-16">
            <div className="w-14 h-14 rounded-2xl bg-secondary border border-border flex items-center justify-center mx-auto mb-6">
              <Shield className="h-7 w-7 text-foreground" />
            </div>
            <h1 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-4">Privacy Policy</h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Your privacy is fundamental to how we build Sangpt. Last updated: February 2026.
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

export default PrivacyPage;
