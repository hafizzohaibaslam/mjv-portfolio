import CustomButton from "../shared/CustomButton";
import RegistrationForm from "../shared/RegistrationForm";

const ReadyToGetStarted = () => {
  return (
    <div className="bg-white py-[48px] px-[16px]">
      <div className="flex flex-col gap-8 lg:gap-[87px]">
        {/* Main Content */}
        <div className="flex flex-col justify-center items-center gap-4 lg:gap-7 w-full lg:max-w-[1300px] mx-auto">
          <h1 className="text-center font-semibold text-[32px] lg:text-[56px] leading-[38px] lg:leading-[150%] tracking-[-1.68px] lg:tracking-[-3%] text-black-04">
            Ready to Get Started?
          </h1>
          <p className="text-center font-normal text-[18px] lg:text-[28px] leading-[24px] lg:leading-[130%] tracking-[-0.84px] lg:tracking-[-3%] text-black-07">
            Tell us about your project and let&apos;s build something amazing
            together.
          </p>
          <CustomButton className="w-fit mx-auto py-3 px-6 rounded-[32px] font-medium text-[14px] leading-[24px] tracking-0 mb-[40px] lg:mb-0">
            Book a call
          </CustomButton>
        </div>
        {/* Form Section */}
        <div className="w-full lg:max-w-[584px] mx-auto">
          <RegistrationForm />
        </div>
      </div>
    </div>
  );
};

export default ReadyToGetStarted;
