import { Link } from "react-router-dom";
import sangptLogo from "@/assets/sangpt-logo.png";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Download", href: "/download" },
  { label: "Journal", href: "/journal" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "License", href: "/license" },
];

export function Footer() {
  return (
    <footer
      id="contact"
      className="border-t py-12"
      style={{
        background: "hsla(0, 0%, 100%, 0.4)",
        backdropFilter: "blur(32px)",
        WebkitBackdropFilter: "blur(32px)",
        borderColor: "hsla(0, 0%, 100%, 0.25)",
        boxShadow: "inset 0 1px 0 hsla(0, 0%, 100%, 0.3)",
      }}
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-8 lg:pl-24">
        <div className="grid md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <img src={sangptLogo} alt="Sangpt" className="w-8 h-8 rounded-lg" />
              <span className="font-display text-lg font-bold text-foreground">Sangpt 🇸🇱</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Sierra Leone's AI companion, proudly built by Dev-Link in Freetown. Available on the App Store and Google Play.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4 text-sm text-foreground">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <Link key={link.href} to={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4 text-sm text-foreground">Legal</h4>
            <div className="flex flex-col gap-2">
              {legalLinks.map((link) => (
                <Link key={link.href} to={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4 text-sm text-foreground">Stay Updated</h4>
            <p className="text-sm text-muted-foreground mb-3">Get the latest news from Freetown.</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-2.5 rounded-full text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-foreground/20 transition-all duration-300"
                style={{
                  background: "hsla(0, 0%, 100%, 0.5)",
                  border: "1px solid hsla(0, 0%, 100%, 0.3)",
                  backdropFilter: "blur(12px)",
                  boxShadow: "inset 0 1px 0 hsla(0, 0%, 100%, 0.3)",
                }}
              />
              <button className="px-4 py-2.5 rounded-full bg-foreground text-background text-sm font-semibold hover:bg-foreground/90 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_16px_hsla(0,0%,0%,0.12)]">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 text-center" style={{ borderTop: "1px solid hsla(0, 0%, 100%, 0.2)" }}>
          <p className="text-xs text-muted-foreground">© 2026 Dev-Link · Freetown, Sierra Leone 🇸🇱 · All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
