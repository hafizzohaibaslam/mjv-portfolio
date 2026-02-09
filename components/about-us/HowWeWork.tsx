import CustomButton from "../shared/CustomButton";

const HowWeWork = () => {
  return (
    <div className="bg-white py-[48px] lg:py-0 lg:pt-[500px] lg:pb-[24px] px-[16px] lg:px-[34px]">
      <div className="flex flex-col gap-8 lg:gap-9 w-full lg:max-w-[1100px] mx-auto">
        <h1 className="font-semibold text-[32px] lg:text-[56px] leading-[38px] lg:leading-[150%] tracking-[-1.68px] lg:tracking-[-3%] text-black-04 text-center">
          This is how we work
        </h1>
        {/* List  */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-9">
          {HOW_WE_WORK_LIST.map((item) => (
            <div
              key={item.title}
              className="w-full bg-white rounded-[16px] shadow-how-we-work px-[12px] flex items-center gap-1"
            >
              <h1 className="font-semibold text-[128px] leading-[130%] tracking-[-3%] text-transparent outlined-text-our-team">
                {item.id}
              </h1>
              <div className="flex flex-col">
                <h3 className="font-semibold text-[20px] leading-[150%] tracking-[-3%] text-black-04">
                  {item.title}
                </h3>
                <p className="font-normal text-[16px] leading-[111%] tracking-[-3%] text-black-05">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <CustomButton
          variant="primary"
          className="w-fit mx-auto py-[8px] px-[16px] rounded-[32px] font-semibold text-[16px] leading-[24px] tracking-0"
        >
          Book a call
        </CustomButton>
      </div>
    </div>
  );
};

export default HowWeWork;

const HOW_WE_WORK_LIST = [
  {
    id: "1",
    title: "Align on Goals",
    description:
      "We start by understanding your vision, pain points, and priorities through a focused strategy session.",
    imageUrl: "",
  },
  {
    id: "2",
    title: "Build the Right Solution",
    description:
      "Our team designs and develops custom software or AI tools tailored to your specific needs, fast, lean, and reliable.",
    imageUrl: "",
  },
  {
    id: "3",
    title: "Launch and Improve",
    description:
      "We ship, test, and refine with you in the loop, ensuring long-term success and real business impact.",
    imageUrl: "",
  },
];
