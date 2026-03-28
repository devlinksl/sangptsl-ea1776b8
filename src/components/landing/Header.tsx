import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import sangptLogo from "@/assets/sangpt-logo.png";
import { ThemeToggle } from "./ThemeToggle";

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
    <header className="fixed top-0 left-0 right-0 z-50 glass-strong" style={{ borderBottom: "1px solid hsla(var(--glass-border))" }}>
      <div className="mx-auto flex h-16 max-w-7xl items-center px-4 lg:px-8 gap-3">
        {/* Mobile sidebar toggle */}
        <button
          className="lg:hidden flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-200 hover:bg-foreground/5 active:scale-95 flex-shrink-0"
          onClick={() => window.dispatchEvent(new CustomEvent("toggle-sidebar"))}
          aria-label="Open menu"
        >
          <Menu className="h-5 w-5 text-foreground" />
        </button>

        <Link to="/" className="flex items-center gap-2.5 group">
          <img src={sangptLogo} alt="Sangpt" className="h-8 w-8 rounded-xl transition-transform duration-300 group-hover:scale-105" />
          <span className="font-display text-lg font-bold tracking-tight text-foreground">
            Sangpt
          </span>
        </Link>

        <div className="flex-1" />

        <nav className="hidden md:flex items-center gap-0.5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="px-3.5 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 rounded-lg"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <ThemeToggle />

        <Link
          to="/download"
          className="hidden md:inline-flex ml-1 px-5 py-2 text-sm font-semibold rounded-full bg-foreground text-background hover:bg-foreground/90 transition-all duration-300 hover:scale-105"
        >
          Get Started
        </Link>
      </div>
    </header>
  );
}
