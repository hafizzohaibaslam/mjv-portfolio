import CustomButton from "../shared/CustomButton";

const ChooseYourIndustry = () => {
  return (
    <div className="pt-5 px-5 pb-8 lg:pt-[45px] lg:px-[65px] lg:pb-[25px] bg-white rounded-[16px] shadow-how-we-work flex flex-col gap-6 lg:gap-8 w-full lg:max-w-[1000px] mx-auto">
      {/* Title and Description */}
      <div className="flex flex-col gap-4 lg:gap-[18px]">
        <h1 className="font-semibold text-[20px] lg:text-[24px] leading-[30px] lg:leading-[150%] tracking-[-0.72px] lg:tracking-[-3%] text-black-04">
          Step 1: Choose your industry
        </h1>
        <p className="font-normal text-[14px] lg:text-[16px] leading-[21px] lg:leading-[150%] tracking-[-0.48px] lg:tracking-[-3%] text-black-05">
          Please choose one of the options below.
        </p>
      </div>
      {/* List */}
      <div className="grid grid-cols-1 gap-6 lg:gap-x-10 lg:gap-y-[26px] lg:grid-cols-3 w-full lg:max-w-[85%]">
        {TAGS.map((tag) => (
          <span
            key={tag}
            className="py-[6px] px-4 rounded-[6px] bg-gray-04 font-semibold text-[12px] leading-[17px] tracking-0 text-black-05 text-center"
          >
            {tag}
          </span>
        ))}
      </div>
      <CustomButton
        variant="form"
        className="w-[111px] mx-auto lg:mx-0 lg:ml-auto py-[10px] rounded-full font-medium text-[12px] leading-[18px] tracking-0"
      >
        Next
      </CustomButton>
    </div>
  );
};

export default ChooseYourIndustry;

const TAGS = [
  "Marketing & Advertising",
  "Finance & Real Estate ",
  "Education / Non-profit ",
  "Government Organization",
  "Pharmaceutical and Healthcare ",
  "Lifestyle ",
];
