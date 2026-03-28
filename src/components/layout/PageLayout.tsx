import { Header } from "@/components/landing/Header";
import { Sidebar } from "@/components/landing/Sidebar";
import { Footer } from "@/components/landing/Footer";

interface PageLayoutProps {
  children: React.ReactNode;
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Sidebar />
      <main className="lg:pl-60 pt-16">
        {children}
      </main>
      <Footer />
    </div>
  );
}
