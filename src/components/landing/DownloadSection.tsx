import { motion } from "framer-motion";
import { Download, Monitor, Apple, Terminal, Smartphone, Star, ArrowRight, ChevronLeft, Grid3X3 } from "lucide-react";
import { fadeUp } from "@/lib/animations";

const platforms = [
  { icon: Monitor, name: "Windows", version: "v2.1.0", size: "85 MB" },
  { icon: Apple, name: "macOS", version: "v2.1.0", size: "92 MB" },
  { icon: Terminal, name: "Linux", version: "v2.1.0", size: "78 MB" },
  { icon: Smartphone, name: "Mobile", version: "Coming Soon", size: "—" },
];

const thumbnails = [
  "Chat Interface",
  "Task Manager",
  "Knowledge Search",
  "Settings Panel",
];

export function DownloadSection() {
  return (
    <section id="download" className="py-24 relative">
      <div className="mx-auto max-w-7xl px-4 lg:px-8 lg:pl-24">
        <motion.div {...fadeUp()} className="text-center mb-16">
          <span className="text-muted-foreground text-sm font-semibold tracking-widest uppercase">Download</span>
          <h2 className="font-display text-3xl lg:text-5xl font-bold mt-3 mb-4 text-foreground">
            Get Sangpt Now
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base lg:text-lg">
            Available on all major platforms. Download and start your AI-powered journey today.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left: Hero card like reference left panel */}
          <motion.div
            {...fadeUp(0.1)}
            className="relative rounded-3xl overflow-hidden min-h-[520px] flex flex-col justify-between"
            style={{
              background: "linear-gradient(180deg, hsla(30, 30%, 70%, 0.3) 0%, hsla(25, 20%, 40%, 0.8) 60%, hsla(20, 15%, 25%, 0.95) 100%)",
            }}
          >
            {/* Top nav icons */}
            <div className="flex items-center justify-between p-6">
              <div className="w-9 h-9 rounded-full bg-card/20 backdrop-blur-sm flex items-center justify-center">
                <ChevronLeft className="h-4 w-4 text-card" />
              </div>
              <div className="w-9 h-9 rounded-full bg-card/20 backdrop-blur-sm flex items-center justify-center">
                <Grid3X3 className="h-4 w-4 text-card" />
              </div>
            </div>

            {/* Spacer for "image" area */}
            <div className="flex-1" />

            {/* Bottom content overlay */}
            <div className="p-6 pt-0">
              {/* Star rating */}
              <div className="flex items-center gap-1 mb-3">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <h3 className="font-display text-2xl font-bold text-card mb-2">
                Sangpt AI Assistant
              </h3>
              <p className="text-card/80 text-sm leading-relaxed mb-4">
                The intelligent companion built with love and innovation by Dev-Link.
              </p>

              {/* Thumbnail gallery */}
              <div className="flex gap-2 mb-5">
                {thumbnails.map((t) => (
                  <div
                    key={t}
                    className="w-14 h-10 rounded-lg bg-card/15 backdrop-blur-sm border border-card/20 flex items-center justify-center"
                  >
                    <span className="text-[8px] text-card/60 font-medium text-center leading-tight px-1">{t}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="flex items-center gap-3">
                <button className="flex-1 px-6 py-3.5 rounded-2xl bg-foreground text-background font-semibold text-sm hover:bg-foreground/90 transition-all">
                  Download Now
                </button>
                <div className="w-12 h-12 rounded-2xl bg-foreground flex items-center justify-center hover:bg-foreground/90 transition-colors cursor-pointer">
                  <ArrowRight className="h-5 w-5 text-background" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Platform cards + system requirements */}
          <div className="flex flex-col gap-4">
            {platforms.map((p, i) => (
              <motion.div
                key={p.name}
                {...fadeUp(0.15 + i * 0.05)}
                className="glass-hover rounded-2xl p-5 flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary border border-border flex items-center justify-center group-hover:bg-accent transition-colors">
                  <p.icon className="h-6 w-6 text-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-semibold text-foreground">{p.name}</h3>
                  <p className="text-xs text-muted-foreground">{p.version} · {p.size}</p>
                </div>
                <button className="px-4 py-2 rounded-xl bg-foreground text-background text-sm font-semibold hover:bg-foreground/90 transition-all">
                  <Download className="h-4 w-4" />
                </button>
              </motion.div>
            ))}

            <motion.div {...fadeUp(0.4)} className="glass rounded-2xl p-5 mt-2">
              <h3 className="font-display font-semibold mb-3 text-foreground text-sm">System Requirements</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div><span className="text-foreground font-medium">OS:</span> Windows 10+, macOS 12+, Ubuntu 20.04+</div>
                <div><span className="text-foreground font-medium">RAM:</span> 4 GB minimum, 8 GB recommended</div>
                <div><span className="text-foreground font-medium">Storage:</span> 200 MB available space</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
