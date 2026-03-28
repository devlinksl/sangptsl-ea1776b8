import { useState, useCallback } from "react";
import { Header } from "@/components/landing/Header";
import { Sidebar } from "@/components/landing/Sidebar";
import { HeroSection } from "@/components/landing/HeroSection";
import { FAQSection } from "@/components/landing/FAQSection";
import { Footer } from "@/components/landing/Footer";
import { SplashScreen } from "@/components/landing/SplashScreen";

const Index = () => {
  const [splashDone, setSplashDone] = useState(false);

  const handleSplashComplete = useCallback(() => {
    setSplashDone(true);
  }, []);

  return (
    <>
      {!splashDone && <SplashScreen onComplete={handleSplashComplete} />}
      <div
        className="min-h-screen bg-background"
        style={{
          opacity: splashDone ? 1 : 0,
          transition: "opacity 0.6s ease",
        }}
      >
        <Header />
        <Sidebar />
        <main className="lg:pl-60">
          <HeroSection />
          <FAQSection />
          <Footer />
        </main>
      </div>
    </>
  );
};

export default Index;
