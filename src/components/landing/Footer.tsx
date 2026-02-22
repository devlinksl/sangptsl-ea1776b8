import { Link } from "react-router-dom";
import sangptLogo from "@/assets/sangpt-logo.png";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Download", href: "/download" },
  { label: "Features", href: "/#features" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Open Source License", href: "/license" },
  { label: "FAQ", href: "/#faq" },
];

export function Footer() {
  return (
    <footer id="contact" className="border-t border-border py-12" style={{ background: "hsla(0, 0%, 100%, 0.6)", backdropFilter: "blur(20px)" }}>
      <div className="mx-auto max-w-7xl px-4 lg:px-8 lg:pl-24">
        <div className="grid md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <img src={sangptLogo} alt="Sangpt" className="w-8 h-8 rounded-lg" />
              <span className="font-display text-lg font-bold text-foreground">Sangpt</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Your personal AI companion, built by Dev-Link. Smart, secure, and always learning.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4 text-sm text-foreground">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4 text-sm text-foreground">Legal</h4>
            <div className="flex flex-col gap-2">
              {legalLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4 text-sm text-foreground">Stay Updated</h4>
            <p className="text-sm text-muted-foreground mb-3">Get the latest news and updates.</p>
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
