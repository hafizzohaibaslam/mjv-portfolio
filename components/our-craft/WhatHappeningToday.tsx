import Image from "next/image";
import CustomButton from "../shared/CustomButton";

const WhatHappeningToday = () => {
  return (
    <div className="lg:min-h-screen lg:flex lg:justify-center lg:items-center w-full pt-[35px] pb-[48px] px-[24px] lg:pt-0 lg:pb-0">
      <div className="w-full lg:max-w-[1127px] mx-auto flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-[87px]">
        <div className="w-full h-[227px] lg:h-[407px] rounded-[10px]">
          <Image
            src="/images/our-craft/attention.svg"
            alt="What Happening Today"
            width={100}
            height={100}
            className="w-full h-full object-cover rounded-[10px]"
          />
        </div>
        <div className="w-full lg:max-w-[340px] flex flex-col gap-6">
          <h1 className="font-semibold text-[28px] leading-[36px] lg:leading-[130%] tracking-[-0.84px] lg:tracking-[-3%] text-black">
            What&apos;s happening today?
          </h1>
          <p className="font-medium text-[20px] leading-[24px] tracking-[-0.4px] lg:tracking-[-2%] text-black-06">
            Human attention is increasingly treated as a scarce, commodifiable
            resource in the digital age, not unlike oil or capital.
          </p>
          <CustomButton className="py-2 px-4 w-fit rounded-[32px] font-semibold text-[16px] leading-[24px] tracking-0 text-white">
            Read more
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default WhatHappeningToday;
