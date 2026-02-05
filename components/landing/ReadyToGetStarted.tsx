import CustomButton from "../shared/CustomButton";
import RegistrationForm from "../shared/RegistrationForm";

const ReadyToGetStarted = () => {
  return (
    <div className="py-[48px] px-[34px] lg:py-0 lg:pt-[96px] lg:pb-[155px] flex justify-center items-center bg-white">
      <div className="w-full lg:max-w-[1216px] mx-auto flex flex-col gap-8 lg:gap-12 lg:flex-row lg:items-center lg:justify-between">
        {/* Left Section */}
        <div className="w-full lg:max-w-[584px] flex flex-col">
          <h1 className="font-semibold text-[40px] lg:text-[56px] leading-[50px] lg:leading-[150px] tracking-0 lg:tracking-[-3px] text-black-01">
            Ready to Get Started?
          </h1>
          <p className="font-normal text-[20px] lg:text-[28px] leading-[30px] lg:leading-[28px] tracking-0 lg:tracking-[-0.45px] text-gray-01">
            Tell us about your project and let&apos;s build something amazing
            together.
          </p>
          <CustomButton className="mt-6 w-fit py-[10px] px-[24px] rounded-[32px] font-medium text-[14px] leading-[20px] tracking-[-0.15px]">
            Book a call
          </CustomButton>
        </div>
        {/* Right Section */}
        <div className="w-full lg:max-w-[584px]">
          <RegistrationForm />
        </div>
      </div>
    </div>
  );
};

export default ReadyToGetStarted;
