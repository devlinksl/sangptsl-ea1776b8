import { useState } from "react";
import { 
  Home, Info, Download, Scale, FileText, Shield, MessageSquare, 
  Zap, Settings, ChevronLeft, ChevronRight, Sparkles
} from "lucide-react";

const mainLinks = [
  { icon: Home, label: "Home", href: "#home" },
  { icon: Info, label: "About", href: "#about" },
  { icon: Zap, label: "Features", href: "#features" },
  { icon: Download, label: "Download", href: "#download" },
  { icon: MessageSquare, label: "FAQ", href: "#faq" },
];

const secondaryLinks = [
  { icon: Scale, label: "License", href: "#license" },
  { icon: FileText, label: "Terms", href: "#terms" },
  { icon: Shield, label: "Privacy", href: "#privacy" },
  { icon: Settings, label: "Settings", href: "#contact" },
];

export function Sidebar() {
  const [expanded, setExpanded] = useState(false);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <aside
      className={`hidden lg:flex fixed left-0 top-16 bottom-0 z-40 flex-col transition-all duration-300 ${
        expanded ? "w-52" : "w-[72px]"
      }`}
      style={{
        background: "hsla(0, 0%, 100%, 0.75)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        borderRight: "1px solid hsla(0, 0%, 0%, 0.06)",
        boxShadow: "4px 0 24px hsla(0, 0%, 0%, 0.04)",
      }}
    >
      {/* Logo area */}
      <div className="flex items-center justify-center py-5 border-b border-border/50">
        {expanded ? (
          <span className="font-display text-base font-bold text-foreground tracking-tight">
            San<span className="text-muted-foreground">gpt</span>
          </span>
        ) : (
          <div className="w-8 h-8 rounded-lg bg-foreground/5 flex items-center justify-center">
            <Sparkles className="h-4 w-4 text-foreground" />
          </div>
        )}
      </div>

      {/* Menu label */}
      <div className="px-4 pt-5 pb-2">
        <span className="text-[10px] font-semibold text-muted-foreground tracking-widest uppercase">
          {expanded ? "Menu" : ""}
        </span>
      </div>

      {/* Main nav */}
      <nav className="flex flex-col gap-0.5 px-2">
        {mainLinks.map((link) => (
          <button
            key={link.href}
            onClick={() => scrollTo(link.href)}
            className={`group flex items-center gap-3 rounded-xl transition-all duration-200 text-muted-foreground hover:text-foreground hover:bg-secondary/80 ${
              expanded ? "px-3 py-2.5" : "justify-center p-2.5"
            }`}
            title={link.label}
          >
            <link.icon className="h-[18px] w-[18px] flex-shrink-0 group-hover:text-foreground transition-colors" />
            {expanded && (
              <span className="text-sm font-medium">{link.label}</span>
            )}
          </button>
        ))}
      </nav>

      {/* Separator */}
      <div className="mx-4 my-3 h-px bg-border/60" />

      {/* Secondary nav */}
      <nav className="flex flex-col gap-0.5 px-2">
        {secondaryLinks.map((link) => (
          <button
            key={link.href}
            onClick={() => scrollTo(link.href)}
            className={`group flex items-center gap-3 rounded-xl transition-all duration-200 text-muted-foreground hover:text-foreground hover:bg-secondary/80 ${
              expanded ? "px-3 py-2.5" : "justify-center p-2.5"
            }`}
            title={link.label}
          >
            <link.icon className="h-[18px] w-[18px] flex-shrink-0 group-hover:text-foreground transition-colors" />
            {expanded && (
              <span className="text-sm font-medium">{link.label}</span>
            )}
          </button>
        ))}
      </nav>

      {/* Expand/collapse toggle at bottom */}
      <div className="mt-auto px-2 pb-4">
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
