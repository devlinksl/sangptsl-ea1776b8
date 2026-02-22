import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Download, Monitor, Apple, Terminal, Smartphone, Star, ArrowRight, ChevronLeft, Grid3X3, Check } from "lucide-react";
import { fadeUp } from "@/lib/animations";
import { PageLayout } from "@/components/layout/PageLayout";
import sangptLogo from "@/assets/sangpt-logo.png";

const platforms = [
  { icon: Monitor, name: "Windows", version: "v2.1.0", size: "85 MB", available: true },
  { icon: Apple, name: "macOS", version: "v2.1.0", size: "92 MB", available: true },
  { icon: Terminal, name: "Linux", version: "v2.1.0", size: "78 MB", available: true },
  { icon: Smartphone, name: "Mobile", version: "Coming Soon", size: "—", available: false },
];

const features = [
  "AI-Powered Smart Chat",
  "Task Automation Engine",
  "Knowledge Retrieval",
  "Multi-Platform Support",
  "End-to-End Encryption",
  "Offline Mode",
];

const DownloadPage = () => {
  return (
    <PageLayout>
      <div className="py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          {/* Hero card */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <motion.div
              {...fadeUp(0)}
              className="relative rounded-3xl overflow-hidden min-h-[520px] flex flex-col justify-between"
              style={{
                background: "linear-gradient(180deg, hsla(30, 30%, 75%, 0.3) 0%, hsla(25, 20%, 40%, 0.8) 60%, hsla(20, 15%, 20%, 0.95) 100%)",
              }}
            >
              <div className="flex items-center justify-between p-6">
                <Link to="/" className="w-9 h-9 rounded-full bg-card/20 backdrop-blur-sm flex items-center justify-center hover:bg-card/30 transition-colors">
                  <ChevronLeft className="h-4 w-4 text-card" />
                </Link>
                <div className="w-9 h-9 rounded-full bg-card/20 backdrop-blur-sm flex items-center justify-center">
                  <Grid3X3 className="h-4 w-4 text-card" />
                </div>
              </div>

              <div className="flex-1 flex items-center justify-center">
                <motion.img
                  src={sangptLogo}
                  alt="Sangpt"
                  className="w-32 h-32 rounded-3xl"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                />
              </div>

              <div className="p-6 pt-0">
                <div className="flex items-center gap-1 mb-3">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-card/60 text-xs ml-2">5.0</span>
                </div>
                <h1 className="font-display text-3xl font-bold text-card mb-2">Sangpt AI</h1>
                <p className="text-card/70 text-sm leading-relaxed mb-6">
                  The intelligent companion built with love and innovation by Dev-Link.
                </p>
                <div className="flex items-center gap-3">
                  <button className="flex-1 px-6 py-3.5 rounded-2xl bg-card text-foreground font-semibold text-sm hover:bg-card/90 transition-all">
                    Download Now
                  </button>
                  <div className="w-12 h-12 rounded-2xl bg-card flex items-center justify-center hover:bg-card/90 transition-colors cursor-pointer">
                    <ArrowRight className="h-5 w-5 text-foreground" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Platform list */}
            <div className="flex flex-col gap-4">
              <motion.div {...fadeUp(0.1)}>
                <h2 className="font-display text-2xl font-bold text-foreground mb-2">Choose Your Platform</h2>
                <p className="text-muted-foreground text-sm mb-6">Download Sangpt for your operating system.</p>
              </motion.div>
              
              {platforms.map((p, i) => (
                <motion.div key={p.name} {...fadeUp(0.15 + i * 0.05)} className="glass-hover rounded-2xl p-5 flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-secondary border border-border flex items-center justify-center group-hover:bg-accent transition-colors">
                    <p.icon className="h-6 w-6 text-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display font-semibold text-foreground">{p.name}</h3>
                    <p className="text-xs text-muted-foreground">{p.version} · {p.size}</p>
                  </div>
                  <button
                    className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                      p.available
                        ? "bg-foreground text-background hover:bg-foreground/90"
                        : "bg-secondary text-muted-foreground cursor-not-allowed"
                    }`}
                    disabled={!p.available}
                  >
                    {p.available ? <Download className="h-4 w-4" /> : "Soon"}
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

          {/* What's included */}
          <motion.div {...fadeUp(0.5)} className="glass rounded-3xl p-8 lg:p-12">
            <h2 className="font-display text-2xl font-bold text-foreground mb-8 text-center">What's Included</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {features.map((f) => (
                <div key={f} className="flex items-center gap-3 p-3 rounded-xl">
                  <div className="w-6 h-6 rounded-full bg-foreground flex items-center justify-center flex-shrink-0">
                    <Check className="h-3.5 w-3.5 text-background" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{f}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </PageLayout>
  );
};

export default DownloadPage;
