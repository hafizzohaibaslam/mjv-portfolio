import CustomButton from "../shared/CustomButton";

const SubscribeToOurCraft = () => {
  return (
    <div className="w-full lg:max-w-[903px] mx-auto flex flex-col gap-8 lg:gap-11 justify-center items-center py-[48px] px-[24px]">
      <h1 className="font-semibold text-[32px] lg:text-[48px] leading-[40px] lg:leading-[128%] tracking-[-1.44px] lg:tracking-[-3%] text-center text-black-04">
        Subscribe to MJV Craft for next week&apos;s AI-powered discourse.
      </h1>
      <CustomButton className="py-2 px-4 w-fit rounded-[32px] font-semibold text-[16px] leading-[24px] tracking-0">
        Subscribe
      </CustomButton>
    </div>
  );
};

export default SubscribeToOurCraft;
