import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Smartphone, Star, ArrowRight, ChevronLeft, Apple, Play, Download, Shield, Zap, Globe, Lock } from "lucide-react";
import { fadeUp } from "@/lib/animations";
import { PageLayout } from "@/components/layout/PageLayout";
import sangptLogo from "@/assets/sangpt-logo.png";

const APK_URL = "/download/sangpt.apk";

const features = [
  { icon: Zap, title: "AI-Powered Smart Chat", desc: "Natural conversations in English & Krio" },
  { icon: Globe, title: "Built for Sierra Leone", desc: "Designed for local needs and contexts" },
  { icon: Lock, title: "End-to-End Encryption", desc: "Your data stays completely private" },
  { icon: Shield, title: "Offline Mode", desc: "Core features work without internet" },
];

const DownloadPage = () => {
  return (
    <PageLayout>
      <div className="py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">

          {/* Hero Section */}
          <div className="grid lg:grid-cols-2 gap-10 mb-20 items-center">
            {/* Left — App Preview Card */}
            <motion.div
              {...fadeUp(0)}
              className="relative rounded-3xl overflow-hidden min-h-[560px] flex flex-col justify-between"
              style={{
                background: "linear-gradient(160deg, hsla(250, 30%, 18%, 1) 0%, hsla(220, 25%, 10%, 1) 50%, hsla(250, 20%, 8%, 1) 100%)",
              }}
            >
              {/* Glow effects */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full" style={{ background: "radial-gradient(circle, hsla(220, 80%, 60%, 0.15), transparent 60%)", filter: "blur(40px)" }} />
                <div className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full" style={{ background: "radial-gradient(circle, hsla(280, 60%, 50%, 0.1), transparent 60%)", filter: "blur(40px)" }} />
              </div>

              <div className="flex items-center justify-between p-6 relative z-10">
                <Link to="/" className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110" style={{ background: "hsla(0,0%,100%,0.08)", border: "1px solid hsla(0,0%,100%,0.1)", backdropFilter: "blur(12px)" }}>
                  <ChevronLeft className="h-4 w-4 text-white" />
                </Link>
                <div className="flex items-center gap-1.5">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-white/50 text-xs ml-1.5">5.0</span>
                </div>
              </div>

              <div className="flex-1 flex items-center justify-center relative z-10">
                <motion.div
                  className="relative"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="absolute inset-0 rounded-3xl" style={{ boxShadow: "0 0 60px hsla(220, 80%, 60%, 0.2), 0 0 120px hsla(280, 60%, 50%, 0.1)" }} />
                  <img src={sangptLogo} alt="Sangpt AI" className="w-36 h-36 rounded-3xl relative z-10" />
                </motion.div>
              </div>

              <div className="p-8 pt-0 relative z-10">
                <h1 className="text-3xl font-bold text-white mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  Sangpt AI 🇸🇱
                </h1>
                <p className="text-white/50 text-sm leading-relaxed mb-6">
                  Sierra Leone's AI companion — smart, private, and built with love by Dev-Link in Freetown.
                </p>
                <a
                  href={APK_URL}
                  download="sangpt.apk"
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-full font-semibold text-sm transition-all duration-300 group hover:scale-[1.02]"
                  style={{
                    background: "hsla(0, 0%, 100%, 0.95)",
                    color: "hsl(0, 0%, 9%)",
                    boxShadow: "0 0 0 1px hsla(0,0%,100%,0.3), 0 4px 20px hsla(0,0%,0%,0.15), 0 0 40px hsla(0,0%,100%,0.08)",
                  }}
                >
                  <Download className="h-4 w-4" />
                  Download APK
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>
            </motion.div>

            {/* Right — Download Options */}
            <div className="flex flex-col gap-5">
              <motion.div {...fadeUp(0.1)}>
                <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-3">
                  Get Sangpt on Your Phone
                </h2>
                <p className="text-muted-foreground text-base leading-relaxed mb-2">
                  Download Sierra Leone's AI companion. Available on App Store, Google Play, or directly as an APK.
                </p>
              </motion.div>

              {/* Store Buttons — Glass Cards */}
              <motion.a
                {...fadeUp(0.15)}
                href={APK_URL}
                download="sangpt.apk"
                className="glass-hover rounded-2xl p-5 flex items-center gap-4 group cursor-pointer"
              >
                <div className="w-14 h-14 rounded-xl bg-foreground flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <Download className="h-7 w-7 text-background" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-semibold text-foreground text-lg">Direct Download</h3>
                  <p className="text-xs text-muted-foreground">APK File · Android · v2.1.0 · 95 MB</p>
                </div>
                <div className="px-5 py-2.5 rounded-full bg-foreground text-background text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_16px_hsla(0,0%,0%,0.12)]">
                  Get APK
                </div>
              </motion.a>

              <motion.a
                {...fadeUp(0.2)}
                href="#"
                className="glass-hover rounded-2xl p-5 flex items-center gap-4 group cursor-pointer"
              >
                <div className="w-14 h-14 rounded-xl glass-icon flex items-center justify-center">
                  <Apple className="h-7 w-7 text-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-semibold text-foreground text-lg">App Store</h3>
                  <p className="text-xs text-muted-foreground">iOS 15+ · v2.1.0 · 120 MB</p>
                </div>
                <div className="glass-btn px-5 py-2.5 rounded-full text-foreground text-sm font-semibold">
                  Get
                </div>
              </motion.a>

              <motion.a
                {...fadeUp(0.25)}
                href="#"
                className="glass-hover rounded-2xl p-5 flex items-center gap-4 group cursor-pointer"
              >
                <div className="w-14 h-14 rounded-xl glass-icon flex items-center justify-center">
                  <Play className="h-7 w-7 text-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-semibold text-foreground text-lg">Google Play</h3>
                  <p className="text-xs text-muted-foreground">Android 10+ · v2.1.0 · 95 MB</p>
                </div>
                <div className="glass-btn px-5 py-2.5 rounded-full text-foreground text-sm font-semibold">
                  Get
                </div>
              </motion.a>

              {/* Device Requirements */}
              <motion.div {...fadeUp(0.3)} className="glass-strong rounded-2xl p-5">
                <h3 className="font-display font-semibold mb-3 text-foreground text-sm">Device Requirements</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div><span className="text-foreground font-medium">iOS:</span> iPhone 8 or later, iOS 15+</div>
                  <div><span className="text-foreground font-medium">Android:</span> Android 10+, 3 GB RAM minimum</div>
                  <div><span className="text-foreground font-medium">Storage:</span> 150 MB available space</div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Features Grid */}
          <motion.div {...fadeUp(0.35)} className="mb-20">
            <h2 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-8 text-center">What's Inside</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {features.map((f, i) => (
                <motion.div key={f.title} {...fadeUp(0.4 + i * 0.05)} className="glass-hover rounded-2xl p-6 text-center group">
                  <div className="w-12 h-12 rounded-xl glass-icon flex items-center justify-center mx-auto mb-4">
                    <f.icon className="h-6 w-6 text-foreground" />
                  </div>
                  <h3 className="font-display font-semibold text-foreground mb-1">{f.title}</h3>
                  <p className="text-xs text-muted-foreground">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Why Mobile Only */}
          <motion.div {...fadeUp(0.5)} className="glass-strong rounded-3xl p-8 lg:p-12 text-center max-w-3xl mx-auto">
            <Smartphone className="h-8 w-8 text-foreground mx-auto mb-4" />
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">Why Mobile First?</h2>
            <p className="text-muted-foreground leading-relaxed">
              Sangpt is designed as a mobile-first AI companion. We believe the best AI assistant lives in your pocket — always accessible, whether you're in Freetown, Bo, Kenema, or anywhere in the world. In Sierra Leone, smartphone penetration far exceeds desktop usage, making mobile the natural home for Sangpt.
            </p>
          </motion.div>
        </div>
      </div>
    </PageLayout>
  );
};

export default DownloadPage;
