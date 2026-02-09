"use client";
import Image from "next/image";
import { SolutionsType } from "@/constants/solutions";
import { cn } from "@/lib/utils";
import SolutionModal from "./SolutionModal";

type SolutionSectionProps = {
  solution: SolutionsType;
  inverted: boolean;
};

const SolutionSection = ({ solution, inverted }: SolutionSectionProps) => {
  return (
    <div
      className={cn(
        "flex flex-col gap-[32px] lg:gap-[48px] lg:items-center lg:justify-between p-5",
        inverted ? "lg:flex-row-reverse" : "lg:flex-row"
      )}
    >
      {/* Content Section */}
      <div className="w-full lg:max-w-[403px] flex flex-col gap-3">
        <span className="uppercase font-light text-[14px] leading-[21px] lg:leading-[150%] tracking-[-0.42px] lg:tracking-[-3%] text-black-04">
          {solution.role}
        </span>
        <div className="flex flex-col gap-8">
          <h1 className="font-medium text-[36px] leading-[32px] tracking-0 text-black-06">
            {solution.title}
          </h1>
          <p className="font-normal text-[24px] leading-[31px] lg:leading-[130%] tracking-[-0.72px] lg:tracking-[-3%] text-black-05">
            {solution.description}
          </p>
          <SolutionModal solution={solution} />
        </div>
      </div>
      {/* Image Section */}
      <div className="w-full lg:max-w-[571px] lg:h-[380px] flex items-center justify-center bg-white py-[14px] px-[25px] rounded-[16px] shadow-our-solutions overflow-hidden">
        <Image
          src={solution.imageUrl}
          alt={solution.title}
          width={solution.width}
          height={solution.height}
          className={cn("object-contain")}
        />
      </div>
    </div>
  );
};

export default SolutionSection;
