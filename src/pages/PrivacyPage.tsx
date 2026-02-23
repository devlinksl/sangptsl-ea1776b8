import { motion } from "framer-motion";
import { Shield, Eye, Lock, Server, Users, Globe, Cookie, Bell, FileText, Database, UserCheck, RefreshCw } from "lucide-react";
import { fadeUp } from "@/lib/animations";
import { PageLayout } from "@/components/layout/PageLayout";

const sections = [
  {
    icon: Eye,
    title: "1. Information We Collect",
    content: [
      "Sangpt is designed with privacy at its core. We collect the minimum amount of data necessary to provide, maintain, and improve the Service. The types of information we may collect include:",
      "Device Information: We may collect information about the device you use to access Sangpt, including the operating system, device model, unique device identifiers, and mobile network information. This helps us optimize the application for your specific platform.",
      "Usage Analytics: We collect anonymized usage statistics such as feature usage frequency, session duration, and crash reports. This data is aggregated and cannot be used to identify individual users. You can opt out of analytics collection at any time through the app settings.",
      "Account Information: If you choose to create an account for cloud sync features, we collect your email address and display name. This information is stored securely and used solely for authentication and account management purposes."
    ],
  },
  {
    icon: Lock,
    title: "2. How We Use Your Information",
    content: [
      "We use the information we collect exclusively to improve your experience with Sangpt and to maintain the quality and security of the Service. Specifically, we use your information to:",
      "Provide and maintain the Service, including troubleshooting, data analysis, testing, and research. Improve, personalize, and expand our Service based on aggregated usage patterns. Communicate with you about updates, security alerts, and support messages when necessary.",
      "We do NOT use your data for advertising, profiling, or any form of behavioral targeting. We do NOT sell, rent, or share your personal information with third parties for their marketing purposes. Our business model is based on providing excellent software, not monetizing user data."
    ],
  },
  {
    icon: Database,
    title: "3. Data Storage & Security",
    content: [
      "Your conversations, documents, and personal data processed by Sangpt are stored locally on your device by default. We employ industry-leading security measures to protect any data that is transmitted to our servers (for features like cloud sync).",
      "All data in transit is encrypted using TLS 1.3 (Transport Layer Security). Data at rest is encrypted using AES-256 encryption. Our infrastructure is hosted on SOC 2 Type II certified data centers with 24/7 physical security, biometric access controls, and continuous monitoring.",
      "We conduct regular security audits, penetration testing, and vulnerability assessments. Our security team monitors for threats around the clock. In the unlikely event of a data breach, we will notify affected users within 72 hours as required by applicable regulations.",
      "We retain your data only for as long as necessary to provide the Service and fulfill the purposes described in this policy. When you delete your account or data, we permanently remove it from our active systems within 30 days and from backup systems within 90 days."
    ],
  },
  {
    icon: UserCheck,
    title: "4. Your Rights & Controls",
    content: [
      "We believe you should have full control over your personal data. Depending on your jurisdiction, you may have the following rights:",
      "Right to Access: You can request a copy of all personal data we hold about you at any time. Right to Rectification: You can correct any inaccurate or incomplete personal data. Right to Erasure: You can request the deletion of your personal data (\"right to be forgotten\").",
      "Right to Data Portability: You can export your data in a standard, machine-readable format. Right to Object: You can object to certain types of data processing. Right to Withdraw Consent: You can withdraw your consent to data processing at any time.",
      "To exercise any of these rights, please contact us at privacy@devlink.ai. We will respond to your request within 30 days. We will not discriminate against you for exercising any of your privacy rights."
    ],
  },
  {
    icon: Cookie,
    title: "5. Cookies & Tracking Technologies",
    content: [
      "The Sangpt desktop application does not use traditional web cookies. However, if you access our website or web-based features, we may use the following technologies:",
      "Essential Cookies: Strictly necessary for the website to function properly. These cannot be disabled. They include session management and security tokens. Analytics Cookies: Help us understand how visitors interact with our website. These are anonymized and can be disabled in your browser settings.",
      "We do NOT use advertising cookies, tracking pixels, or any third-party tracking technologies that follow your activity across the web. We do NOT participate in any advertising networks or data broker ecosystems."
    ],
  },
  {
    icon: Users,
    title: "6. Third-Party Services",
    content: [
      "Sangpt may integrate with third-party services (such as calendar apps, email clients, or cloud storage providers) at your request. When you enable these integrations, the third-party service may have access to certain data as necessary to provide their service.",
      "We carefully vet all third-party services for security and privacy compliance before making them available as integrations. However, we are not responsible for the privacy practices of third-party services. We encourage you to review the privacy policies of any third-party services you connect to Sangpt.",
      "We may use third-party analytics providers that process anonymized, aggregated data on our behalf. These providers are contractually bound to use this data only for the purposes we specify and to maintain appropriate security measures."
    ],
  },
  {
    icon: Globe,
    title: "7. International Data Transfers",
    content: [
      "If you access Sangpt from outside the primary hosting region, your data may be transferred to servers located in different jurisdictions. We ensure all international data transfers comply with applicable data protection laws, including the General Data Protection Regulation (GDPR) and other relevant frameworks.",
      "We use Standard Contractual Clauses (SCCs) approved by the European Commission to safeguard data transfers outside the European Economic Area. We also maintain compliance with other international data transfer mechanisms as applicable to your jurisdiction."
    ],
  },
  {
    icon: RefreshCw,
    title: "8. Updates to This Policy",
    content: [
      "We may update this Privacy Policy from time to time to reflect changes in our practices, technologies, legal requirements, or other factors. When we make material changes, we will notify you through the Sangpt application, via email (if you have an account), or by posting a prominent notice on our website.",
      "We encourage you to review this policy periodically to stay informed about how we protect your information. Your continued use of Sangpt after any changes to this policy constitutes your acceptance of the updated terms. The 'Last Updated' date at the top of this page indicates when this policy was last revised."
    ],
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
              Your privacy is fundamental to how we build Sangpt. This policy explains what data we collect, how we use it, and the controls you have. Last updated: February 2026.
            </p>
          </motion.div>

          <motion.div {...fadeUp(0.05)} className="glass rounded-2xl p-6 lg:p-8 mb-8">
            <p className="text-muted-foreground text-sm leading-relaxed">
              <strong className="text-foreground">Our Commitment:</strong> Sangpt is built with a privacy-first architecture. Your conversations and personal data are stored locally on your device by default. We collect only minimal, anonymized analytics to improve the product. We never sell your data, and you have full control over what information you share with us.
            </p>
          </motion.div>

          <div className="space-y-6">
            {sections.map((s, i) => (
              <motion.div key={s.title} {...fadeUp(0.1 + i * 0.04)} className="glass-hover rounded-2xl p-6 lg:p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-secondary border border-border flex items-center justify-center mt-0.5">
                    <s.icon className="h-5 w-5 text-foreground" />
                  </div>
                  <div>
                    <h2 className="font-display font-semibold text-lg mb-3 text-foreground">{s.title}</h2>
                    <div className="space-y-3">
                      {s.content.map((p, j) => (
                        <p key={j} className="text-muted-foreground text-sm leading-relaxed">{p}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeUp(0.5)} className="mt-10 glass rounded-2xl p-6 lg:p-8 text-center">
            <p className="text-sm text-muted-foreground">
              If you have any questions about this Privacy Policy, please contact our privacy team at{" "}
              <strong className="text-foreground">privacy@devlink.ai</strong>. We're committed to addressing your concerns promptly and transparently.
            </p>
          </motion.div>
        </div>
      </div>
    </PageLayout>
  );
};

export default PrivacyPage;
