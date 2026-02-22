import { Sparkles } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "Features", href: "#features" },
  { label: "About", href: "#about" },
  { label: "Download", href: "#download" },
  { label: "License", href: "#license" },
  { label: "Terms", href: "#terms" },
  { label: "Privacy", href: "#privacy" },
  { label: "FAQ", href: "#faq" },
];

export function Footer() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer id="contact" className="border-t border-border py-12" style={{ background: "hsla(0, 0%, 100%, 0.6)", backdropFilter: "blur(20px)" }}>
      <div className="mx-auto max-w-7xl px-4 lg:px-8 lg:pl-24">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center">
                <Sparkles className="h-4 w-4 text-foreground" />
              </div>
              <span className="font-display text-lg font-bold text-foreground">Sangpt</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Your personal AI companion, built by Dev-Link. Smart, secure, and always learning.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4 text-sm text-foreground">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {links.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4 text-sm text-foreground">Stay Updated</h4>
            <p className="text-sm text-muted-foreground mb-3">Get the latest news and updates from Sangpt.</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-2.5 rounded-xl bg-secondary/60 border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-foreground/20"
              />
              <button className="px-4 py-2.5 rounded-xl bg-foreground text-background text-sm font-semibold hover:bg-foreground/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">© 2026 Dev-Link. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
