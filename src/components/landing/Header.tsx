import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import sangptLogo from "@/assets/sangpt-logo.png";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Journal", href: "/journal" },
  { label: "Download", href: "/download" },
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "License", href: "/license" },
];

export function Header() {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: "hsla(0, 0%, 100%, 0.45)",
        backdropFilter: "blur(40px) saturate(1.4)",
        WebkitBackdropFilter: "blur(40px) saturate(1.4)",
        borderBottom: "1px solid hsla(0, 0%, 100%, 0.25)",
        boxShadow: "0 4px 30px hsla(0, 0%, 0%, 0.04), inset 0 -1px 0 hsla(0, 0%, 100%, 0.15)",
      }}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center px-4 lg:px-8 gap-4">
        {/* Mobile sidebar toggle — visible & accessible */}
        <button
          className="lg:hidden flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-200 hover:bg-foreground/5 active:scale-95 flex-shrink-0"
          onClick={() => {
            // Dispatch custom event for sidebar
            window.dispatchEvent(new CustomEvent("toggle-sidebar"));
          }}
          aria-label="Open menu"
        >
          <Menu className="h-5 w-5 text-foreground" />
        </button>

        <Link to="/" className="flex items-center gap-2.5 group">
          <img src={sangptLogo} alt="Sangpt" className="h-9 w-9 rounded-xl transition-transform duration-300 group-hover:scale-110" />
          <span className="font-display text-xl font-bold tracking-tight text-foreground">
            Sangpt
          </span>
        </Link>

        {/* Spacer */}
        <div className="flex-1" />

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-all duration-300 rounded-full hover:bg-white/50 hover:shadow-[inset_0_1px_0_hsla(0,0%,100%,0.4),0_2px_8px_hsla(0,0%,0%,0.04)]"
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/download"
            className="ml-2 px-5 py-2 text-sm font-semibold rounded-full bg-foreground text-background hover:bg-foreground/90 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_hsla(0,0%,0%,0.15)]"
          >
            Get Started
          </Link>
        </nav>
      </div>
    </header>
  );
}
