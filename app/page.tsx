import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import Sponsors from "@/components/landing/Sponsors";
import Image from "next/image";

const LandingPage = () => {
  return (
    <div>
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex flex-col gap-6 relative">
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
      </div>
    </div>
  );
};

export default LandingPage;
