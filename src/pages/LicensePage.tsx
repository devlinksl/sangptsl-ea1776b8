import { motion } from "framer-motion";
import { Scale, Code, GitBranch, Heart, FileCode, BookOpen, AlertTriangle, Copyright, Users, CheckCircle } from "lucide-react";
import { fadeUp } from "@/lib/animations";
import { PageLayout } from "@/components/layout/PageLayout";

const LicensePage = () => {
  return (
    <PageLayout>
      <div className="py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <motion.div {...fadeUp()} className="text-center mb-16">
            <div className="w-14 h-14 rounded-2xl bg-secondary border border-border flex items-center justify-center mx-auto mb-6">
              <Scale className="h-7 w-7 text-foreground" />
            </div>
            <h1 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-4">Open Source License</h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Sangpt is built with open source at its core. Transparency, collaboration, and freedom are central to everything we do.
            </p>
          </motion.div>

          {/* Ownership */}
          <motion.div {...fadeUp(0.05)} className="glass-hover rounded-2xl p-6 lg:p-8 mb-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-secondary border border-border flex items-center justify-center mt-0.5">
                <Copyright className="h-5 w-5 text-foreground" />
              </div>
              <div>
                <h2 className="font-display font-semibold text-lg mb-3 text-foreground">Ownership & Copyright</h2>
                <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                  Sangpt is developed, maintained, and owned by <strong className="text-foreground">Dev-Link</strong>. All original source code, documentation, branding assets (including the Sangpt name, logo, and visual identity), and proprietary algorithms are the intellectual property of Dev-Link, protected under applicable copyright and trademark laws.
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  While the source code is released under an open-source license, the Sangpt trademark and branding remain the exclusive property of Dev-Link. Use of the Sangpt name or logo in derivative works requires prior written permission from Dev-Link.
                </p>
              </div>
            </div>
          </motion.div>

          {/* License card */}
          <motion.div {...fadeUp(0.1)} className="glass rounded-3xl p-8 lg:p-10 mb-6">
            <div className="flex items-center gap-3 mb-6">
              <FileCode className="h-6 w-6 text-foreground" />
              <h2 className="font-display text-xl font-bold text-foreground">MIT License</h2>
            </div>
            <div className="bg-secondary/50 rounded-xl p-6 font-mono text-sm text-muted-foreground leading-relaxed">
              <p className="mb-4">Copyright (c) 2024–2026 Dev-Link</p>
              <p className="mb-4">
                Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
              </p>
              <p className="mb-4">
                The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
              </p>
              <p>
                THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
              </p>
            </div>
          </motion.div>

          {/* User rights */}
          <motion.div {...fadeUp(0.15)} className="glass-hover rounded-2xl p-6 lg:p-8 mb-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-secondary border border-border flex items-center justify-center mt-0.5">
                <Users className="h-5 w-5 text-foreground" />
              </div>
              <div>
                <h2 className="font-display font-semibold text-lg mb-3 text-foreground">Your Usage Rights</h2>
                <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                  Under the MIT License, you are granted broad rights to use Sangpt. You may use the software for any purpose — personal, educational, commercial, or otherwise — without restriction. You may install the software on any number of devices you own or control.
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                  You are free to study how the software works and modify it to suit your needs. You may create derivative works, integrate Sangpt into your own projects, or use it as a component of a larger system. You may also distribute copies of the original or modified software to others.
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  The only requirement is that you include the original copyright notice and MIT license text in all copies or substantial portions of the software. This ensures that attribution is maintained and that downstream users are aware of the license terms.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Restrictions */}
          <motion.div {...fadeUp(0.2)} className="glass-hover rounded-2xl p-6 lg:p-8 mb-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-secondary border border-border flex items-center justify-center mt-0.5">
                <AlertTriangle className="h-5 w-5 text-foreground" />
              </div>
              <div>
                <h2 className="font-display font-semibold text-lg mb-3 text-foreground">Restrictions & Trademark Notice</h2>
                <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                  While the MIT License is permissive, certain restrictions apply outside of the source code license. The Sangpt name, logo, and visual branding are registered trademarks of Dev-Link and are NOT covered by the MIT License. You may not use these marks in a way that suggests endorsement by or affiliation with Dev-Link without prior written consent.
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  If you create a derivative work based on Sangpt, you must clearly distinguish it from the original product. You may not use the Sangpt name, logo, or branding in your derivative work's name, icon, or marketing materials unless you have obtained explicit permission from Dev-Link.
                </p>
              </div>
            </div>
          </motion.div>

          {/* What this means */}
          <div className="grid sm:grid-cols-3 gap-5 mb-8">
            {[
              { icon: Code, title: "Use Freely", desc: "Use Sangpt for personal, commercial, or educational projects. No restrictions on purpose or scale." },
              { icon: GitBranch, title: "Fork & Modify", desc: "Create your own version, add features, fix bugs, and customize to your exact needs." },
              { icon: Heart, title: "Contribute Back", desc: "We welcome pull requests, bug reports, feature ideas, and community contributions." },
            ].map((item, i) => (
              <motion.div key={item.title} {...fadeUp(0.25 + i * 0.06)} className="glass-hover rounded-2xl p-6 group text-center">
                <div className="w-12 h-12 rounded-xl bg-secondary border border-border flex items-center justify-center mx-auto mb-4 group-hover:bg-accent transition-colors">
                  <item.icon className="h-6 w-6 text-foreground" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Attribution */}
          <motion.div {...fadeUp(0.4)} className="glass-hover rounded-2xl p-6 lg:p-8">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-secondary border border-border flex items-center justify-center mt-0.5">
                <BookOpen className="h-5 w-5 text-foreground" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-foreground mb-2">Third-Party Attributions</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                  Sangpt uses various open-source libraries, frameworks, and tools, each governed by their own respective licenses. We are grateful to the open-source community for their contributions, which make projects like Sangpt possible.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  A complete list of third-party dependencies, their versions, and their respective license texts is available in the NOTICE file within the Sangpt source code repository. We regularly update this file to ensure accuracy and compliance.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div {...fadeUp(0.45)} className="mt-10 glass rounded-2xl p-6 lg:p-8 text-center">
            <p className="text-sm text-muted-foreground">
              For licensing inquiries or trademark usage requests, please contact us at{" "}
              <strong className="text-foreground">legal@devlink.ai</strong>.
            </p>
          </motion.div>
        </div>
      </div>
    </PageLayout>
  );
};

export default LicensePage;
