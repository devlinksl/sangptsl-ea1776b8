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
    <div className="min-h-screen bg-background">
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
