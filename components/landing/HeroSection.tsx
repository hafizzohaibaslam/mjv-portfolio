import Image from "next/image";
import Logo from "../shared/Logo";
import CustomButton from "../shared/CustomButton";
import { ROUTES } from "@/constants/routes";

const HERO_CARDS = [
  {
    title: "98%",
    description: "Task Automation Rate",
  },
  {
    title: "10x",
    description: "Faster Decision Making",
  },
  {
    title: "Day 1",
    description: "ROI Delivery",
  },
];

const HeroSection = () => {
  return (
    <div className="flex-1 w-full max-w-[910px] mx-auto px-4 flex flex-col items-center">
      <Logo className="w-[89px] h-[89px] flex justify-center items-center" />
      <div className="w-full flex flex-col gap-6">
        <h1 className="w-full md:max-w-[90%] mx-auto font-semibold text-[36px] md:text-[64px] leading-[40px] md:leading-[72px] tracking-[0.12px] text-gradient-primary text-center">
          We help <span className="text-gradient-secondary">organizations</span>{" "}
          design, <span className="text-gradient-secondary">develop, and</span>{" "}
          deploy{" "}
          <span className="text-gradient-secondary">Custom AI Agents</span>
        </h1>
        <p className="w-full md:max-w-[80%] mx-auto font-normal text-[18px] md:text-[24px] leading-[29px] md:leading-[32px] tracking-0 md:tracking-[0.07] text-gray-01 text-center">
          Delivering ROI on day one with autonomous AI solutions that make
          decisions, adapt, and work on your behalf.
        </p>
      </div>
      {/* Action Buttons */}
      <div className="w-full flex flex-col sm:flex-row sm:items-center sm:justify-center gap-4 my-12">
        <CustomButton
          href={ROUTES.OUR_WORK}
          className="py-2.5 px-4 font-medium text-[18px] leading-7 tracking-[-0.44px] rounded-full shadow-primary"
        >
          Show me more
          <Image src="/icons/arrow.svg" alt="Arrow" width={16} height={16} />
        </CustomButton>

        <CustomButton
          variant="secondary"
          href={ROUTES.ABOUT_US}
          className="py-[10px] px-4 font-medium text-[18px] leading-7 tracking-[-0.44px] rounded-full shadow-primary border-[0.56px] border-black-02"
        >
          Book a call
        </CustomButton>
      </div>
      {/* Cards */}
      <div className="lg:mb-[78px] w-full md:max-w-[80%] mx-auto flex flex-col md:flex-row md:items-center md:justify-center gap-8">
        {HERO_CARDS.map((card) => (
          <HeroCard key={card.title} {...card} />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;

type HeroCardProps = {
  title: string;
  description: string;
};

const HeroCard = ({ title, description }: HeroCardProps) => {
  return (
    <div className="flex flex-col gap-2 p-6 rounded-[16px] border-[0.56px] border-[#E5E7EB] bg-white-03 w-full">
      <h3 className="font-normal text-[32px] md:text-[36px] leading-12 md:leading-10 tracking-0 md:tracking-[0.37px] text-black-01 text-center">
        {title}
      </h3>
      <p className="font-normal text-[14px] leading-5 tracking-[-0.15px] text-gray-01 text-center">
        {description}
      </p>
    </div>
  );
};
