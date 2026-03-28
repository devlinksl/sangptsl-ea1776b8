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
    <footer id="contact" className="border-t border-border py-12 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 lg:pl-24">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
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
                <Link key={link.href} to={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4 text-sm text-foreground">Legal</h4>
            <div className="flex flex-col gap-2">
              {legalLinks.map((link) => (
                <Link key={link.href} to={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
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
                className="flex-1 min-w-0 px-4 py-2.5 rounded-full text-sm text-foreground bg-background placeholder:text-muted-foreground border border-border focus:outline-none focus:ring-1 focus:ring-ring transition-all duration-200"
              />
              <button className="px-4 py-2.5 rounded-full bg-foreground text-background text-sm font-semibold hover:bg-foreground/90 transition-all duration-200 hover:scale-105 flex-shrink-0">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">© 2026 Dev-Link · Freetown, Sierra Leone 🇸🇱 · All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
