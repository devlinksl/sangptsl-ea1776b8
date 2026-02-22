import { motion } from "framer-motion";
import { Download, Monitor, Apple, Terminal, Smartphone } from "lucide-react";
import { fadeUp } from "@/lib/animations";

const platforms = [
  { icon: Monitor, name: "Windows", version: "v2.1.0", size: "85 MB" },
  { icon: Apple, name: "macOS", version: "v2.1.0", size: "92 MB" },
  { icon: Terminal, name: "Linux", version: "v2.1.0", size: "78 MB" },
  { icon: Smartphone, name: "Mobile", version: "Coming Soon", size: "—" },
];

export function DownloadSection() {
  return (
    <section id="download" className="py-24 relative">
      <div className="mx-auto max-w-7xl px-4 lg:px-8 lg:pl-24">
        <motion.div {...fadeUp()} className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">Download</span>
          <h2 className="font-display text-3xl lg:text-5xl font-bold mt-3 mb-4">
            Get <span className="gradient-text">Sangpt</span> Now
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base lg:text-lg">
            Available on all major platforms. Download and start your AI-powered journey today.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {platforms.map((p, i) => (
            <motion.div key={p.name} {...fadeUp(i * 0.1)} className="glass-hover rounded-2xl p-6 flex flex-col items-center text-center group">
              <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <p.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-lg">{p.name}</h3>
              <p className="text-xs text-muted-foreground mt-1">{p.version} · {p.size}</p>
              <button className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary/10 text-primary font-semibold text-sm hover:bg-primary hover:text-primary-foreground transition-all w-full justify-center">
                <Download className="h-4 w-4" /> Download
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div {...fadeUp(0.4)} className="mt-8 glass rounded-2xl p-6">
          <h3 className="font-display font-semibold mb-3">System Requirements</h3>
          <div className="grid sm:grid-cols-3 gap-4 text-sm text-muted-foreground">
            <div><span className="text-foreground font-medium">OS:</span> Windows 10+, macOS 12+, Ubuntu 20.04+</div>
            <div><span className="text-foreground font-medium">RAM:</span> 4 GB minimum, 8 GB recommended</div>
            <div><span className="text-foreground font-medium">Storage:</span> 200 MB available space</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
