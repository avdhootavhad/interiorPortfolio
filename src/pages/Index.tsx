import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import StatsBar from "@/components/home/StatsBar";
import PortfolioPreview from "@/components/home/PortfolioPreview";
import ServicesPreview from "@/components/home/ServicesPreview";
import MagazinePreview from "@/components/home/MagazinePreview";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <StatsBar />
        <PortfolioPreview />
        <ServicesPreview />
        <MagazinePreview />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
