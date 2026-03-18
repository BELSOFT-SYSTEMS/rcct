import HeroSection from "@/components/sections/HeroSection";
import TickerBanner from "@/components/ui/TickerBanner";
import AboutPreview from "@/components/sections/AboutPreview";
import ServicesPreview from "@/components/sections/ServicesPreview";
import PartnersStrip from "@/components/sections/PartnersStrip";
import CTABanner from "@/components/sections/CTABanner";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TickerBanner />
      <AboutPreview />
      <ServicesPreview />
      <PartnersStrip />
      <CTABanner />
    </>
  );
}
