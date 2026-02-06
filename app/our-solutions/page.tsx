import Sponsors from "@/components/shared/Sponsors";
import CustomButton from "@/components/shared/CustomButton";
import Logo from "@/components/shared/Logo";
import Image from "next/image";
import SolutionList from "@/components/our-solutions/SolutionList";
import SingleReview from "@/components/our-solutions/SingleReview";
import ChooseYourIndustry from "@/components/our-solutions/ChooseYourIndustry";

const OurSolutionsPage = () => {
  return (
    <div>
      {/* Main Section */}
      <div className="w-full lg:max-w-[894px] mx-auto flex flex-col gap-4 justify-center items-center py-12 px-4">
        <Image
          src="/images/bg-hero.svg"
          alt="Hero Background"
          fill
          className="absolute inset-0 object-cover z-[-1]"
        />
        <Logo className="w-[89px] h-[89px] flex justify-center items-center" />
        <h1 className="w-[90%] mx-auto md:w-full font-semibold text-[36px] md:text-[60px] leading-[40px] md:leading-[72px] tracking-[0.12px] text-gradient-secondary text-center">
          We’ve delivered AI-powered solutions for 35+ organizations
        </h1>
        <p className="font-normal text-[24px] leading-[32px] tracking-[0.07px] text-center text-gray-01">
          From Fortune 500s to scrappy startups and award-winning nonprofits.
        </p>
        <CustomButton
          variant="secondary"
          className="py-[10px] px-4 font-medium text-[18px] leading-[28px] tracking-[-0.44px] rounded-full shadow-primary"
        >
          Book a call
        </CustomButton>
      </div>
      {/* Remaing Sections */}
      <div className="bg-white py-[30px] lg:py-[110px] flex flex-col gap-[60px] lg:gap-[110px]">
        <Sponsors />
        <div className="px-[22px] w-full lg:max-w-[1042px] mx-auto">
          <h1 className="text-center font-normal text-[20px] lg:text-[36px] leading-[24px] lg:leading-[140%] tracking-[-1.08px] lg:tracking-[-3%] text-black-05">
            From healthcare and finance to real estate and marketing, we turn
            complex problems into smart solutions.
          </h1>
        </div>
        <SolutionList />
        <SingleReview />
        <div className="w-[90%] mx-auto lg:max-w-[1020px]">
          <h1 className="font-semibold text-[32px] lg:text-[56px] leading-[48px] lg:leading-[150%] tracking-[-1.68px] lg:tracking-[-3%] text-center text-black-04">
            Curious what your software might cost?
          </h1>
          <p className="font-normal text-[24px] lg:text-[40px] leading-[36px] lg:leading-[150%] tracking-[-1.68px] lg:tracking-[-3%] text-black-09 text-center">
            Let&apos;s find out.
          </p>
        </div>
        <div className="w-[90%] mx-auto lg:max-w-[1104px]">
          <p className="font-normal text-[16px] lg:text-[24px] leading-[24px] lg:leading-[150%] tracking-[-0.72px] lg:tracking-[-3%] text-black-05 text-center">
            Answer a few quick questions, and we’ll instantly estimate the cost
            of your{" "}
            <span className="font-semibold">custom AI or software build</span>.
            Whether you&apos;re a startup, agency, or enterprise team, get a
            clear sense of budget before you commit.
          </p>
        </div>
        <ChooseYourIndustry />
      </div>
    </div>
  );
};

export default OurSolutionsPage;
