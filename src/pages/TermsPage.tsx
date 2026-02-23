import { motion } from "framer-motion";
import { FileText, AlertCircle, CheckCircle, Ban, RefreshCw, Scale, Users, Shield, Globe, Gavel, BookOpen, Eye } from "lucide-react";
import { fadeUp } from "@/lib/animations";
import { PageLayout } from "@/components/layout/PageLayout";

const sections = [
  {
    icon: CheckCircle,
    title: "1. Acceptance of Terms",
    content: [
      "By downloading, installing, accessing, or using Sangpt (the \"Service\"), you acknowledge that you have read, understood, and agree to be bound by these Terms of Service (\"Terms\"). These Terms constitute a legally binding agreement between you and Dev-Link (\"Company,\" \"we,\" \"us,\" or \"our\").",
      "If you do not agree to these Terms, you must not access or use the Service. If you are accessing or using the Service on behalf of a business or entity, you represent and warrant that you have the authority to bind that business or entity to these Terms, and your acceptance of these Terms will be treated as acceptance by that business or entity.",
      "We reserve the right to update or modify these Terms at any time without prior notice. Your continued use of the Service after any such changes constitutes your acceptance of the new Terms. We encourage you to review these Terms periodically."
    ],
  },
  {
    icon: Users,
    title: "2. User Responsibilities",
    content: [
      "As a user of Sangpt, you agree to use the Service responsibly and in compliance with all applicable local, national, and international laws and regulations. You are solely responsible for your conduct and any data, text, information, or other materials that you submit, post, or display while using the Service.",
      "You agree to maintain the security of your device and any credentials associated with your use of Sangpt. You must not share your access with unauthorized parties or attempt to circumvent any security measures implemented within the application.",
      "You are responsible for ensuring that your use of Sangpt does not infringe upon the rights of any third party, including intellectual property rights, privacy rights, or any other legal rights."
    ],
  },
  {
    icon: Ban,
    title: "3. Acceptable Use Policy",
    content: [
      "You may not use Sangpt for any purpose that is illegal, harmful, or otherwise objectionable. This includes, but is not limited to: generating content that promotes violence, discrimination, or harassment; attempting to reverse-engineer, decompile, or disassemble the software; distributing malware or malicious code through the platform.",
      "You may not use the Service to send unsolicited communications (spam), impersonate any person or entity, or misrepresent your affiliation with any person or entity. Automated scraping, data mining, or extraction of content from the Service without express written permission is strictly prohibited.",
      "Any violation of this Acceptable Use Policy may result in immediate termination of your access to the Service, without notice or refund. We reserve the right to investigate and take appropriate legal action against anyone who violates this provision."
    ],
  },
  {
    icon: Globe,
    title: "4. Service Availability & Modifications",
    content: [
      "While we strive to provide a reliable and uninterrupted Service, we do not guarantee that Sangpt will be available at all times. The Service may be subject to temporary interruptions due to maintenance, updates, server issues, or circumstances beyond our control.",
      "We reserve the right to modify, suspend, or discontinue any aspect of the Service at any time, with or without notice. This includes adding or removing features, changing system requirements, or altering the terms under which the Service is provided.",
      "We shall not be liable to you or any third party for any modification, suspension, or discontinuance of the Service. We recommend that you regularly back up any important data that you store or process through Sangpt."
    ],
  },
  {
    icon: BookOpen,
    title: "5. Intellectual Property",
    content: [
      "All intellectual property rights in and to the Sangpt application, including but not limited to the software, algorithms, user interface design, documentation, trademarks, and branding, are owned by Dev-Link or its licensors. These rights are protected by copyright, trademark, patent, and other intellectual property laws.",
      "The open-source components of Sangpt are licensed under the MIT License, as described on our License page. This license grants you certain rights to use, modify, and distribute the software, subject to the conditions outlined in the license agreement.",
      "Any content you create or generate using Sangpt remains your property. However, by using the Service, you grant Dev-Link a non-exclusive, worldwide, royalty-free license to use anonymized usage data for the purpose of improving the Service."
    ],
  },
  {
    icon: AlertCircle,
    title: "6. Limitation of Liability",
    content: [
      "TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, DEV-LINK AND ITS OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES.",
      "Our total liability arising out of or in connection with these Terms or your use of the Service shall not exceed the amount you have paid us in the twelve (12) months preceding the claim. If you have not paid us any amounts, our maximum liability shall be limited to fifty US dollars ($50).",
      "Some jurisdictions do not allow the exclusion or limitation of certain damages. In such jurisdictions, our liability shall be limited to the maximum extent permitted by law. Nothing in these Terms shall exclude or limit our liability for death or personal injury caused by our negligence."
    ],
  },
  {
    icon: Gavel,
    title: "7. Termination",
    content: [
      "We may terminate or suspend your access to the Service immediately, without prior notice or liability, for any reason, including but not limited to a breach of these Terms. Upon termination, your right to use the Service will immediately cease.",
      "You may terminate your use of the Service at any time by uninstalling the application and discontinuing all use. All provisions of these Terms which by their nature should survive termination shall survive, including ownership provisions, warranty disclaimers, and limitations of liability.",
      "Upon termination, we will make reasonable efforts to allow you to export your data, subject to technical feasibility and applicable legal requirements. After a reasonable period following termination, we reserve the right to delete any data associated with your use of the Service."
    ],
  },
  {
    icon: Scale,
    title: "8. Governing Law & Dispute Resolution",
    content: [
      "These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which Dev-Link is incorporated, without regard to its conflict of law provisions. Any disputes arising under or in connection with these Terms shall be resolved through binding arbitration.",
      "Before initiating any formal dispute resolution proceedings, you agree to first attempt to resolve any dispute informally by contacting us at legal@devlink.ai. If the dispute cannot be resolved informally within thirty (30) days, either party may initiate binding arbitration.",
      "Any arbitration shall be conducted in English and shall be administered by a mutually agreed-upon arbitration body. The arbitrator's decision shall be final and binding. Each party shall bear its own costs and expenses in connection with the arbitration, unless the arbitrator determines otherwise."
    ],
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
              Please read these terms carefully before using Sangpt. By using our Service, you agree to be bound by these terms. Last updated: February 2026.
            </p>
          </motion.div>

          <motion.div {...fadeUp(0.05)} className="glass rounded-2xl p-6 lg:p-8 mb-8">
            <p className="text-muted-foreground text-sm leading-relaxed">
              <strong className="text-foreground">Summary:</strong> These Terms of Service govern your use of the Sangpt application developed by Dev-Link. They cover your rights and responsibilities, our intellectual property, liability limitations, and how disputes are resolved. By using Sangpt, you agree to these terms in their entirety.
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
              If you have any questions about these Terms of Service, please contact us at{" "}
              <strong className="text-foreground">legal@devlink.ai</strong>. We're happy to clarify any provisions.
            </p>
          </motion.div>
        </div>
      </div>
    </PageLayout>
  );
};

export default TermsPage;
