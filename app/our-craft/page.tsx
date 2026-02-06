import Logo from "@/components/shared/Logo";
import Image from "next/image";
import WhatHappeningToday from "@/components/our-craft/WhatHappeningToday";
import SubscribeToOurCraft from "@/components/our-craft/SubscribeToOurCraft";
import ThinkInPublic from "@/components/our-craft/ThinkInPublic";
import FeaturesCarousel from "@/components/our-craft/FeaturesCarousel";

const OurCraftPage = () => {
  return (
    <div>
      {/* Main Section */}
      <div className="lg:min-h-[calc(100vh-70px)] w-full pt-[20px] px-[24px] pb-[44px] lg:flex lg:flex-col lg:justify-center lg:items-center relative">
        {/* Background Gradient Image */}
        <Image
          src="/images/bg-hero.svg"
          alt="Hero Background"
          fill
          className="absolute inset-0 object-cover z-[-1]"
        />
        {/* Main Content Section */}
        <div className="flex flex-col gap-4 justify-center items-center px-3 lg:px-0 w-full lg:max-w-[896px] mx-auto">
          <Logo className="w-[89px] h-[89px] flex justify-center items-center" />
          <h1 className="w-full md:max-w-[90%] mx-auto font-semibold text-[36px] md:text-[64px] leading-[40px] md:leading-[72px] tracking-[0.12px] text-gradient-secondary text-center">
            MJV Craft, Competing Al Systems to debate the biggest stories in
            politics, business, and culture.
          </h1>
        </div>
      </div>
      <WhatHappeningToday />
      <ThinkInPublic />
      <FeaturesCarousel />
      <SubscribeToOurCraft />
    </div>
  );
};

export default OurCraftPage;
