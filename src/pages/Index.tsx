import { Header } from "@/components/landing/Header";
import { Sidebar } from "@/components/landing/Sidebar";
import { HeroSection } from "@/components/landing/HeroSection";
import { AboutSection } from "@/components/landing/AboutSection";
import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { DownloadSection } from "@/components/landing/DownloadSection";
import { LegalSection } from "@/components/landing/LegalSection";
import { FAQSection } from "@/components/landing/FAQSection";
import { Footer } from "@/components/landing/Footer";

const Index = () => {
  return (
    <div
      className="min-h-screen"
      style={{
        background: `
          radial-gradient(ellipse at 0% 0%, hsla(40, 40%, 93%, 0.7) 0%, transparent 50%),
          radial-gradient(ellipse at 100% 20%, hsla(30, 30%, 94%, 0.5) 0%, transparent 40%),
          radial-gradient(ellipse at 50% 80%, hsla(35, 25%, 95%, 0.4) 0%, transparent 50%),
          hsl(0, 0%, 98%)
        `,
      }}
    >
      <Header />
      <Sidebar />
      <main className="lg:pl-[72px]">
        <HeroSection />
        <AboutSection />
        <FeaturesSection />
        <DownloadSection />
        <LegalSection />
        <FAQSection />
        <Footer />
      </main>
    </div>
  );
};

export default Index;
