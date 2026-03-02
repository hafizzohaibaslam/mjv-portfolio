import { extractInitials } from "@/utils/extract-initials";
import Image from "next/image";

const OurClientsSay = () => {
  return (
    <div className="bg-white flex flex-col gap-12 lg:gap-10 pt-[72px] pb-[24px] px-[34px] lg:pt-[80px] lg:pb-[80px]">
      {/* Title and Description */}
      <div className="w-full lg:max-w-[1221px] mx-auto flex flex-col justify-center items-center">
        <h1 className="font-semibold text-[36px] lg:text-[56px] leading-[54px] lg:leading-[150%] tracking-0 lg:tracking-[-3%] text-black-04 text-center">
          What Our Clients Say
        </h1>
        <p className="font-normal text-[18px] lg:text-[24px] leading-[27px] lg:leading-[130%] tracking-0 lg:tracking-[-3%] text-black-05 text-center">
          Hear from our clients about their experience working with us.
        </p>
      </div>
      {/* Grid of Testimonials */}
      <div className="w-full lg:max-w-[1221px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
        {TESTIMONIALS.map((testimonial) => (
          <div
            key={testimonial.id}
            className="rounded-[14px] p-6 lg:p-8 flex flex-col gap-6 lg:gap-8 bg-white border-[0.56px] border-black-02"
          >
            <div className="opacity-0 lg:opacity-100 w-12 h-12 flex items-center justify-center">
              <Image
                src="/icons/quotes.svg"
                alt="Quotes"
                width={48}
                height={48}
                className="w-full h-full object-contain"
              />
            </div>
            <p className="font-normal italic text-[16px] leading-[28px] tracking-[-0.44px] text-black-01">
              &quot;{testimonial.testimonial}&quot;
            </p>
            <div className="mt-auto flex items-start gap-3 lg:gap-4">
              <span className="w-10 h-10 p-2 rounded-full bg-black-03 text-white flex items-center justify-center font-normal text-[16px] leading-[24px] tracking-[-0.31px]">
                {extractInitials(testimonial.name)}
              </span>
              <div className="flex-1 flex flex-col gap-1">
                <h3 className="font-normal text-[16px] leading-[24px] tracking-[-0.31px] text-black-01">
                  {testimonial.name}
                </h3>
                <p className="font-normal text-[12px] leading-[20px] tracking-[-0.15px] text-gray-01 text-wrap">
                  {testimonial.role}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurClientsSay;

const TESTIMONIALS = [
  {
    id: "1",
    name: "Michelle Park Michelini",
    role: "Executive Director at Behavioral Insights and Parenting Lab | The University of Chicago",
    testimonial:
      "MJ Ventures came in at just the right time and took our program to the next level, leveraging Al to personalize how parents and kids engage with our platform..",
  },
  {
    id: "2",
    name: "Ryan Davis",
    role: "Co-Founder and COO of People First",
    testimonial:
      "MJV played a crucial role in the successful launch of our Client and Creator Portals, projects that significantly enhanced our company's efficiency and streamlined our processes.",
  },
  {
    id: "3",
    name: "Brooke McKean",
    role: "President and Co-CEO of REACH Pathways",
    testimonial:
      "The Al tools have been incredibly valuable in helping us think through how to leverage innovative technology to provide the best possible experience for students.",
  },
];
