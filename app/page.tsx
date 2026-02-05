import AiAgent from "@/components/landing/AiAgent";
import HeroSection from "@/components/landing/HeroSection";
import Sponsors from "@/components/landing/Sponsors";
import OurClientsSay from "@/components/landing/OurClientsSay";
import Image from "next/image";
import Services from "@/components/landing/Services";
import ReadyToGetStarted from "@/components/landing/ReadyToGetStarted";

const LandingPage = () => {
  return (
    <div>
      {/* Main Section */}
      <div className="min-h-[calc(100vh-70px)] flex flex-col gap-6 relative">
        {/* Background Gradient Image */}
        <Image
          src="/images/bg-hero.svg"
          alt="Hero Background"
          fill
          className="absolute inset-0 object-cover z-[-1]"
        />
        <div className="flex-1 flex flex-col px-4.5 py-12 lg:py-0">
          <HeroSection />
        </div>
        <Sponsors />
      </div>
      <AiAgent />
      <Services />
      <OurClientsSay />
      <ReadyToGetStarted />
    </div>
  );
};

export default LandingPage;
