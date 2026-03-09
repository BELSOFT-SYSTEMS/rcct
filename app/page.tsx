import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import OrgChartSection from "@/components/sections/OrgChartSection";
import PartnersSection from "@/components/sections/PartnersSection";
import ContactSection from "@/components/sections/ContactSection";
import TickerBanner from "@/components/ui/TickerBanner";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <TickerBanner />
        <AboutSection />
        <ServicesSection />
        <ExperienceSection />
        <OrgChartSection />
        <PartnersSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
