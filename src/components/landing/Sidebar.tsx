import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { 
  Home, Info, Download, Scale, FileText, Shield, MessageSquare, 
  Zap, Search, ChevronLeft, ChevronRight, User
} from "lucide-react";
import sangptLogo from "@/assets/sangpt-logo.png";

const mainLinks = [
  { icon: Home, label: "Overview", href: "/" },
  { icon: Zap, label: "Features", href: "/#features" },
  { icon: Info, label: "About", href: "/about" },
  { icon: Download, label: "Download", href: "/download" },
  { icon: MessageSquare, label: "FAQ", href: "/#faq" },
];

const legalLinks = [
  { icon: Scale, label: "License", href: "/license" },
  { icon: FileText, label: "Terms", href: "/terms" },
  { icon: Shield, label: "Privacy", href: "/privacy" },
];

export function Sidebar() {
  const [expanded, setExpanded] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNav = (href: string) => {
    if (href.startsWith("/#")) {
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          const el = document.querySelector(href.replace("/", ""));
          el?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else {
        const el = document.querySelector(href.replace("/", ""));
        el?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const isActive = (href: string) => {
    if (href.startsWith("/#")) return false;
    return location.pathname === href;
  };

  return (
    <aside
      className={`hidden lg:flex fixed left-0 top-16 bottom-0 z-40 flex-col transition-all duration-300 ${
        expanded ? "w-60" : "w-[72px]"
      }`}
      style={{
        background: "hsla(0, 0%, 100%, 0.8)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        borderRight: "1px solid hsla(0, 0%, 0%, 0.06)",
        boxShadow: "4px 0 24px hsla(0, 0%, 0%, 0.03)",
      }}
    >
      {/* Logo + Brand */}
      <div className={`flex items-center gap-3 border-b border-border/40 ${expanded ? "px-5 py-5" : "justify-center py-5"}`}>
        <img src={sangptLogo} alt="Sangpt" className="w-9 h-9 rounded-xl" />
        {expanded && (
          <span className="font-display text-lg font-bold text-foreground tracking-tight">
            Sangpt
          </span>
        )}
      </div>

      {/* Search */}
      {expanded && (
        <div className="px-4 pt-4">
          <div className="flex items-center gap-2 px-3 py-2.5 rounded-xl bg-secondary/60 border border-border">
            <Search className="h-4 w-4 text-muted-foreground flex-shrink-0" />
            <span className="text-sm text-muted-foreground">Search...</span>
          </div>
        </div>
      )}

      {/* Menu label */}
      <div className={`pt-5 pb-2 ${expanded ? "px-5" : "px-3"}`}>
        <span className="text-[10px] font-semibold text-muted-foreground tracking-widest uppercase">
          {expanded ? "Menu" : "•••"}
        </span>
      </div>

      {/* Main nav */}
      <nav className="flex flex-col gap-0.5 px-3">
        {mainLinks.map((link) => {
          const active = isActive(link.href);
          const isHashLink = link.href.startsWith("/#");
          
          const content = (
            <div
              className={`group flex items-center gap-3 rounded-xl transition-all duration-200 cursor-pointer ${
                expanded ? "px-3 py-2.5" : "justify-center p-2.5"
              } ${
                active 
                  ? "bg-foreground text-background" 
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary/80"
              }`}
            >
              <link.icon className={`h-[18px] w-[18px] flex-shrink-0 transition-colors ${active ? "text-background" : ""}`} />
              {expanded && (
                <span className="text-sm font-medium">{link.label}</span>
              )}
              {expanded && active && (
                <div className="ml-auto w-2 h-2 rounded-full bg-background/50" />
              )}
            </div>
          );

          if (isHashLink) {
            return (
              <button key={link.href} onClick={() => handleNav(link.href)} title={link.label}>
                {content}
              </button>
            );
          }

          return (
            <Link key={link.href} to={link.href} title={link.label}>
              {content}
            </Link>
          );
        })}
      </nav>

      {/* Separator */}
      <div className="mx-5 my-4 h-px bg-border/60" />

      {/* Legal label */}
      <div className={`pb-2 ${expanded ? "px-5" : "px-3"}`}>
        <span className="text-[10px] font-semibold text-muted-foreground tracking-widest uppercase">
          {expanded ? "Legal" : ""}
        </span>
      </div>

      {/* Legal nav */}
      <nav className="flex flex-col gap-0.5 px-3">
        {legalLinks.map((link) => {
          const active = isActive(link.href);
          return (
            <Link
              key={link.href}
              to={link.href}
              title={link.label}
              className={`group flex items-center gap-3 rounded-xl transition-all duration-200 ${
                expanded ? "px-3 py-2.5" : "justify-center p-2.5"
              } ${
                active 
                  ? "bg-foreground text-background" 
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary/80"
              }`}
            >
              <link.icon className={`h-[18px] w-[18px] flex-shrink-0 transition-colors ${active ? "text-background" : ""}`} />
              {expanded && (
                <span className="text-sm font-medium">{link.label}</span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Spacer */}
      <div className="flex-1" />

      {/* User profile area */}
      <div className="mx-3 mb-3 p-3 rounded-xl bg-secondary/40 border border-border/40">
        <div className={`flex items-center gap-3 ${expanded ? "" : "justify-center"}`}>
          <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
            <User className="h-4 w-4 text-muted-foreground" />
          </div>
          {expanded && (
            <div className="min-w-0">
              <p className="text-sm font-medium text-foreground truncate">Guest User</p>
              <p className="text-[11px] text-muted-foreground truncate">visitor@sangpt.ai</p>
            </div>
          )}
        </div>
      </div>

      {/* Expand/collapse */}
      <div className="px-3 pb-4">
        <button
          onClick={() => setExpanded(!expanded)}
          className={`flex items-center gap-3 rounded-xl transition-all duration-200 text-muted-foreground hover:text-foreground hover:bg-secondary/80 w-full ${
            expanded ? "px-3 py-2.5" : "justify-center p-2.5"
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
    </aside>
  );
}
