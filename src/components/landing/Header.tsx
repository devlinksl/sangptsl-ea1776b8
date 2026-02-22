import { useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Features", href: "#features" },
  { label: "About", href: "#about" },
  { label: "Download", href: "#download" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-strong">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:px-8">
        {/* Logo */}
        <button onClick={() => scrollTo("#home")} className="flex items-center gap-2 group">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/20 group-hover:bg-primary/30 transition-colors">
            <Sparkles className="h-5 w-5 text-primary" />
          </div>
          <span className="font-display text-xl font-bold tracking-tight text-foreground">
            San<span className="gradient-text">gpt</span>
          </span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-secondary/50"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("#download")}
            className="ml-2 px-5 py-2 text-sm font-semibold rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Get Started
          </button>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-muted-foreground hover:text-foreground"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-strong border-t border-border overflow-hidden"
          >
            <nav className="flex flex-col p-4 gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-lg text-left transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => scrollTo("#download")}
                className="mt-2 px-5 py-3 text-sm font-semibold rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Get Started
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
