import CustomButton from "@/components/shared/CustomButton";
import Logo from "@/components/shared/Logo";
import Image from "next/image";
import HowWeWork from "@/components/about-us/HowWeWork";
import MeetTheTeam from "@/components/about-us/MeetTheTeam";
import ReadyToGetStarted from "@/components/about-us/ReadyToGetStarted";

const AboutUsPage = () => {
  return (
    <div>
      {/* Main Section */}
      <div className="lg:h-[60vh] w-full flex flex-col gap-6 lg:gap-[38px] pt-[48px] pb-[32px] px-[16px] lg:pt-[83px] lg:px-[34px] relative">
        {/* Background Gradient Image */}
        <Image
          src="/images/bg-hero.svg"
          alt="Hero Background"
          fill
          className="absolute inset-0 object-cover z-[-1]"
        />
        {/* Main Content Section */}
        <div className="w-full lg:max-w-[896px] mx-auto px-[30px] flex flex-col gap-4 justify-center items-center">
          <Logo className="w-[89px] h-[89px] flex justify-center items-center" />
          <p className="font-normal text-[20px] lg:text-[36px] leading-[26px] lg:leading-[32px] tracking-[0.07px] text-gray-01 text-center">
            A hands-on team of technologists, designers, and builders committed
            to making software that works.
          </p>
          <CustomButton
            variant="secondary"
            className="w-fit mx-auto py-[14px] px-[17px] rounded-full border-[1.25px] border-black-02 font-medium text-[16px] lg:text-[18px] leading-[28px] tracking-[-0.44px] text-black-01"
          >
            Book a call
          </CustomButton>
        </div>

        {/* Image Section */}
        <div className="relative lg:absolute lg:bottom-0 lg:left-0 lg:right-0 lg:top-100 lg:z-50 w-full lg:max-w-[800px] h-[227px] lg:h-[533px] lg:mx-auto flex justify-center items-center rounded-[10px] overflow-hidden">
          <Image
            src="/images/our-team/hero.svg"
            alt="Our Team"
            fill
            className="w-full h-full object-contain rounded-[10px]"
          />
        </div>
      </div>
      <HowWeWork />
      <MeetTheTeam />
      <ReadyToGetStarted />
    </div>
  );
};

export default AboutUsPage;
