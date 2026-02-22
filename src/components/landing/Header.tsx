import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import sangptLogo from "@/assets/sangpt-logo.png";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Download", href: "/download" },
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: "hsla(0, 0%, 100%, 0.85)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        borderBottom: "1px solid hsla(0, 0%, 0%, 0.06)",
      }}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:px-8">
        <Link to="/" className="flex items-center gap-2.5 group">
          <img src={sangptLogo} alt="Sangpt" className="h-9 w-9 rounded-xl" />
          <span className="font-display text-xl font-bold tracking-tight text-foreground">
            Sangpt
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-secondary/60"
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/download"
            className="ml-2 px-5 py-2 text-sm font-semibold rounded-lg bg-foreground text-background hover:bg-foreground/90 transition-colors"
          >
            Get Started
          </Link>
        </nav>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-muted-foreground hover:text-foreground"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-border overflow-hidden"
            style={{ background: "hsla(0, 0%, 100%, 0.95)", backdropFilter: "blur(24px)" }}
          >
            <nav className="flex flex-col p-4 gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/60 rounded-lg text-left transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/download"
                onClick={() => setMobileOpen(false)}
                className="mt-2 px-5 py-3 text-sm font-semibold rounded-lg bg-foreground text-background hover:bg-foreground/90 transition-colors text-center"
              >
                Get Started
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
