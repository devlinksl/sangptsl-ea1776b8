import { Info, Download, Scale, FileText, Shield, MessageSquare, Layers, Zap } from "lucide-react";

const sidebarLinks = [
  { icon: Info, label: "About", href: "#about" },
  { icon: Zap, label: "Features", href: "#features" },
  { icon: Download, label: "Download", href: "#download" },
  { icon: Scale, label: "License", href: "#license" },
  { icon: FileText, label: "Terms", href: "#terms" },
  { icon: Shield, label: "Privacy", href: "#privacy" },
  { icon: MessageSquare, label: "FAQ", href: "#faq" },
  { icon: Layers, label: "Contact", href: "#contact" },
];

export function Sidebar() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <aside className="hidden lg:flex fixed left-0 top-16 bottom-0 z-40 w-[72px] flex-col items-center py-6 glass border-r border-border">
      <nav className="flex flex-col gap-1 mt-2">
        {sidebarLinks.map((link) => (
          <button
            key={link.href}
            onClick={() => scrollTo(link.href)}
            className="group flex flex-col items-center gap-1 p-2.5 rounded-xl text-muted-foreground hover:text-foreground hover:bg-secondary/60 transition-all duration-200"
            title={link.label}
          >
            <link.icon className="h-[18px] w-[18px] group-hover:text-primary transition-colors" />
            <span className="text-[10px] font-medium leading-none">{link.label}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
}
