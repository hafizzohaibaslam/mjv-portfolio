"use client";
import { SolutionsType } from "@/constants/solutions";
import CustomModal from "../shared/CustomModal";
import CustomButton from "../shared/CustomButton";
import { X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

type SolutionModalProps = {
  solution: SolutionsType;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
};

const SolutionModal = ({ solution }: SolutionModalProps) => {
  const [open, setOpen] = useState(false);

  const trigger = (
    <CustomButton className="w-fit py-3 px-6 rounded-[32px] font-medium text-[16px] leading-[24px] tracking-0">
      Show me more
    </CustomButton>
  );
  return (
    <CustomModal
      trigger={trigger}
      className="w-full lg:max-w-[90%] relative flex flex-col gap-4 bg-white-05"
      open={open}
      onOpenChange={setOpen}
    >
      <button
        onClick={() => setOpen(false)}
        className="ml-auto cursor-pointer p-2 rounded-full flex items-center justify-center hover:bg-gray-02 transition-all duration-300 ease-in-out"
      >
        <X />
      </button>
      <div className="flex-1 flex lg:justify-center lg:items-center lg:max-w-[1248px] lg:mx-auto">
        <div className="flex-1 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-[41px]">
          {/* Content Section */}
          <div className="w-full lg:max-w-[581px] flex flex-col gap-[41px] lg:gap-[32px]">
            <h1 className="font-semibold text-[50px] lg:text-[56px] leading-[48px] tracking-[-3px] text-black-01">
              {solution.title}
            </h1>
            {/* Tags */}
            <div className="flex items-center flex-wrap gap-2">
              {solution.moreDetails.tags.map((tag) => (
                <span
                  key={tag}
                  className="py-[5px] px-2 rounded-[4px] bg-gray-04 font-semibold text-[12px] leading-[12px] tracking-0 text-black-05"
                >
                  {tag}
                </span>
              ))}
            </div>
            {/* Content */}
            <div className="flex flex-col gap-8">
              {solution.moreDetails.content.map((content) => (
                <p
                  key={content}
                  className="font-normal text-[22px] leading-[28px] tracking-[-0.44px] text-gray-01"
                >
                  {content}
                </p>
              ))}
            </div>
            {/* Action Buttons */}
            <div className="hidden lg:flex gap-6 lg:flex-row lg:items-center">
              <CustomButton
                variant="secondary"
                className="w-full lg:w-fit py-3 px-6 rounded-[32px] font-medium text-[16px] leading-[24px] tracking-0 bg-white"
              >
                Book a call
              </CustomButton>
              <CustomButton className="w-full lg:w-fit py-3 px-6 rounded-[32px] font-medium text-[16px] leading-[24px] tracking-0">
                Send a message
              </CustomButton>
            </div>
          </div>
          {/* Image Section */}
          <div className="flex-1 flex flex-col gap-[41px]">
            <div
              className={cn(
                "flex items-center justify-center rounded-[16px] overflow-hidden",
                `w-[${solution.moreDetails.modalImageWidth[0]}px] h-[${solution.moreDetails.modalImageHeight[0]}px] lg:w-[${solution.moreDetails.modalImageWidth[1]}px] lg:h-[${solution.moreDetails.modalImageHeight[1]}px]`
              )}
            >
              <Image
                src={solution.moreDetails.modalImageUrl}
                alt={solution.title}
                width={100}
                height={100}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-6 lg:hidden">
              <CustomButton
                variant="secondary"
                className="w-full lg:w-fit py-3 px-6 rounded-[32px] font-medium text-[16px] leading-[24px] tracking-0 bg-white"
              >
                Book a call
              </CustomButton>
              <CustomButton className="w-full lg:w-fit py-3 px-6 rounded-[32px] font-medium text-[16px] leading-[24px] tracking-0">
                Send a message
              </CustomButton>
            </div>
          </div>
        </div>
      </div>
    </CustomModal>
  );
};

export default SolutionModal;
