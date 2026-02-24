import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home, Info, Download, FileText, Shield, Scale,
  ChevronLeft, ChevronRight, BookOpen, Mail, X, Menu
} from "lucide-react";
import sangptLogo from "@/assets/sangpt-logo.png";

const mainLinks = [
  { icon: Home, label: "Home", href: "/" },
  { icon: Info, label: "About Sangpt", href: "/about" },
  { icon: Download, label: "Download", href: "/download" },
  { icon: BookOpen, label: "Journal", href: "/journal" },
  { icon: Mail, label: "Contact / Support", href: "/#contact" },
];

const legalLinks = [
  { icon: FileText, label: "Terms of Service", href: "/terms" },
  { icon: Shield, label: "Privacy Policy", href: "/privacy" },
  { icon: Scale, label: "License", href: "/license" },
];

interface SidebarContentProps {
  expanded: boolean;
  onToggle: () => void;
  onNavClick?: () => void;
}

function SidebarInner({ expanded, onToggle, onNavClick }: SidebarContentProps) {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNav = (href: string) => {
    if (href.startsWith("/#")) {
      const hash = href.replace("/", "");
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
        }, 150);
      } else {
        document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
      }
    }
    onNavClick?.();
  };

  const isActive = (href: string) => {
    if (href.startsWith("/#")) return false;
    if (href === "/journal") return location.pathname.startsWith("/journal");
    return location.pathname === href;
  };

  const renderLink = (link: typeof mainLinks[0]) => {
    const active = isActive(link.href);
    const isHash = link.href.startsWith("/#");

    const inner = (
      <div
        className={`group flex items-center gap-3 rounded-2xl transition-all duration-200 cursor-pointer ${
          expanded ? "px-4 py-3" : "justify-center p-3"
        } ${
          active
            ? "bg-foreground text-background shadow-md"
            : "text-muted-foreground hover:text-foreground hover:bg-secondary/80 hover:shadow-sm"
        }`}
      >
        <link.icon className={`h-[18px] w-[18px] flex-shrink-0 transition-all duration-200 ${
          active ? "text-background" : "group-hover:scale-110"
        }`} />
        {expanded && <span className="text-sm font-medium">{link.label}</span>}
      </div>
    );

    if (isHash) {
      return (
        <button key={link.href} onClick={() => handleNav(link.href)} title={link.label} className="text-left">
          {inner}
        </button>
      );
    }

    return (
      <Link key={link.href} to={link.href} title={link.label} onClick={onNavClick}>
        {inner}
      </Link>
    );
  };

  return (
    <>
      <div className={`flex items-center gap-3 ${expanded ? "px-5 py-5" : "justify-center py-5"}`}>
        <img src={sangptLogo} alt="Sangpt" className="w-9 h-9 rounded-xl" />
        {expanded && (
          <span className="font-display text-lg font-bold text-foreground tracking-tight">Sangpt</span>
        )}
      </div>

      <div className="h-px mx-4 bg-border/40" />

      <div className={`pt-5 pb-2 ${expanded ? "px-5" : "px-3"}`}>
        <span className="text-[10px] font-semibold text-muted-foreground tracking-widest uppercase">
          {expanded ? "Menu" : "•••"}
        </span>
      </div>

      <nav className="flex flex-col gap-0.5 px-3">
        {mainLinks.map(renderLink)}
      </nav>

      <div className="mx-5 my-4 h-px bg-border/40" />

      <div className={`pb-2 ${expanded ? "px-5" : "px-3"}`}>
        <span className="text-[10px] font-semibold text-muted-foreground tracking-widest uppercase">
          {expanded ? "Legal" : ""}
        </span>
      </div>

      <nav className="flex flex-col gap-0.5 px-3">
        {legalLinks.map(renderLink)}
      </nav>

      <div className="flex-1" />

      <div className="px-3 pb-4 hidden lg:block">
        <button
          onClick={onToggle}
          className={`flex items-center gap-3 rounded-2xl transition-all duration-200 text-muted-foreground hover:text-foreground hover:bg-secondary/80 w-full ${
            expanded ? "px-4 py-3" : "justify-center p-3"
          }`}
        >
          {expanded ? (
            <>
              <ChevronLeft className="h-[18px] w-[18px]" />
              <span className="text-sm font-medium">Collapse</span>
            </>
          ) : (
            <ChevronRight className="h-[18px] w-[18px]" />
          )}
        </button>
      </div>
    </>
  );
}

export function Sidebar() {
  const [expanded, setExpanded] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <aside
        className={`hidden lg:flex fixed left-0 top-16 bottom-0 z-40 flex-col transition-all duration-300 ${
          expanded ? "w-60" : "w-[72px]"
        }`}
        style={{
          background: "hsla(0, 0%, 100%, 0.75)",
          backdropFilter: "blur(28px)",
          WebkitBackdropFilter: "blur(28px)",
          borderRight: "1px solid hsla(0, 0%, 0%, 0.06)",
          boxShadow: "4px 0 30px hsla(0, 0%, 0%, 0.04)",
        }}
      >
        <SidebarInner expanded={expanded} onToggle={() => setExpanded(!expanded)} />
      </aside>

      <button
        onClick={() => setMobileOpen(true)}
        className="lg:hidden fixed top-[18px] left-4 z-50 p-2 rounded-xl text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors"
        aria-label="Open sidebar"
      >
        <Menu className="h-5 w-5" />
      </button>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden fixed inset-0 z-[60] bg-foreground/20 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 300 }}
              className="lg:hidden fixed left-0 top-0 bottom-0 z-[70] w-72 flex flex-col overflow-y-auto"
              style={{
                background: "hsla(0, 0%, 100%, 0.92)",
                backdropFilter: "blur(32px)",
                WebkitBackdropFilter: "blur(32px)",
                borderRight: "1px solid hsla(0, 0%, 0%, 0.06)",
                boxShadow: "4px 0 40px hsla(0, 0%, 0%, 0.1)",
              }}
            >
              <button
                onClick={() => setMobileOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-xl text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors"
                aria-label="Close sidebar"
              >
                <X className="h-5 w-5" />
              </button>
              <SidebarInner expanded={true} onToggle={() => {}} onNavClick={() => setMobileOpen(false)} />
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
