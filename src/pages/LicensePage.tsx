import { motion } from "framer-motion";
import { Scale, Code, GitBranch, Heart, FileCode, BookOpen } from "lucide-react";
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
              Sangpt is built with open source at its core. Here's how you can use and contribute.
            </p>
          </motion.div>

          {/* License card */}
          <motion.div {...fadeUp(0.1)} className="glass rounded-3xl p-8 lg:p-10 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <FileCode className="h-6 w-6 text-foreground" />
              <h2 className="font-display text-xl font-bold text-foreground">MIT License</h2>
            </div>
            <div className="bg-secondary/50 rounded-xl p-6 font-mono text-sm text-muted-foreground leading-relaxed">
              <p className="mb-4">Copyright (c) 2026 Dev-Link</p>
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

          {/* What this means */}
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              { icon: Code, title: "Use Freely", desc: "Use Sangpt for personal, commercial, or educational projects without restrictions." },
              { icon: GitBranch, title: "Fork & Modify", desc: "Create your own version, add features, and customize to your needs." },
              { icon: Heart, title: "Contribute Back", desc: "We welcome pull requests, bug reports, and community contributions." },
            ].map((item, i) => (
              <motion.div key={item.title} {...fadeUp(0.2 + i * 0.08)} className="glass-hover rounded-2xl p-6 group text-center">
                <div className="w-12 h-12 rounded-xl bg-secondary border border-border flex items-center justify-center mx-auto mb-4 group-hover:bg-accent transition-colors">
                  <item.icon className="h-6 w-6 text-foreground" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Attribution */}
          <motion.div {...fadeUp(0.4)} className="mt-8 glass-hover rounded-2xl p-6 flex items-start gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-secondary border border-border flex items-center justify-center">
              <BookOpen className="h-5 w-5 text-foreground" />
            </div>
            <div>
              <h3 className="font-display font-semibold text-foreground mb-1">Third-Party Attributions</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Sangpt uses various open-source libraries and tools. Full attribution list and their respective licenses are available in the project repository's NOTICE file.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </PageLayout>
  );
};

export default LicensePage;
