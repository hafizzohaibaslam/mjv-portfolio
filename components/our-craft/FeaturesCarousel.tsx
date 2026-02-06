import Image from "next/image";
import CustomButton from "../shared/CustomButton";
import { cn } from "@/lib/utils";

const FeaturesCarousel = () => {
  return (
    <div className="">
      <div className="py-[48px] lg:py-0 px-[24px] lg:px-0 flex flex-col gap-8 lg:gap-9 w-full lg:max-w-[992px] mx-auto relative">
        {/* Chevrons */}
        <button className="hidden lg:block absolute left-[-70px] top-1/2 -translate-y-1/2 w-12 h-12 p-3 rounded-full bg-white shadow-how-we-work border-none cursor-pointer">
          <Image
            src="/icons/chevron-left.svg"
            alt="Chevron Left"
            width={100}
            height={100}
            className="w-full h-full object-cover"
          />
        </button>
        <button className="hidden lg:block absolute right-[-70px] top-1/2 -translate-y-1/2 w-12 h-12 p-3 rounded-full bg-white shadow-how-we-work border-none cursor-pointer">
          <Image
            src="/icons/chevron-right.svg"
            alt="Chevron Left"
            width={100}
            height={100}
            className="w-full h-full object-cover"
          />
        </button>
        {/* Carousel List */}
        <div className="flex flex-col gap-6 lg:gap-[46px] lg:flex-row lg:items-center lg:justify-between">
          {FEATURES.map((feature) => (
            <div
              key={feature.id}
              className="flex-1 bg-white rounded-[16px] shadow-how-we-work flex flex-col gap-4 py-6 px-3"
            >
              <h1 className="font-semibold text-[20px] leading-[24.6px] lg:leading-[123%] tracking-[-0.6px] lg:tracking-[-3%] text-black-04">
                {feature.title}
              </h1>

              <Image
                src={feature.imageUrl}
                alt={feature.title}
                width={100}
                height={100}
                className="w-full h-full object-contain"
              />
              <CustomButton className="w-fit mx-auto py-2 px-6 rounded-full font-medium text-[10px] leading-[15px] tracking-0">
                Read More
              </CustomButton>
            </div>
          ))}
        </div>
        {/* Buttons */}
        <div className="w-full flex items-center justify-center gap-3">
          <button
            className={cn(
              "border-none cursor-pointer w-[12px] h-[12px] rounded-full bg-black-08 opacity-10",
              "bg-black-06 opacity-100"
            )}
          />
          <button className="border-none cursor-pointer w-3 h-3 rounded-full bg-black-08 opacity-10" />
          <button className="border-none cursor-pointer w-3 h-3 rounded-full bg-black-08 opacity-10" />
        </div>
      </div>
    </div>
  );
};

export default FeaturesCarousel;

const FEATURES = [
  {
    id: "1",
    title: "Robocop’s daydream, a libertarian's nightmare",
    imageUrl: "/images/our-craft/img-1.svg",
  },
  {
    id: "2",
    title: "Image Synthesis's Innovation vs. Privacy Crisis",
    imageUrl: "/images/our-craft/img-2.svg",
  },
  {
    id: "3",
    title: "The Big, Beautiful Bill's Decade-Long AI Free Pass",
    imageUrl: "/images/our-craft/img-3.svg",
  },
];
