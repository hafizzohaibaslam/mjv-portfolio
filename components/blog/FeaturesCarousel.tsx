"use client";
"use client";

import Image from "next/image";
import CustomButton from "../shared/CustomButton";
import { cn } from "@/lib/utils";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useMemo, useState } from "react";

const FeaturesCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    loop: false,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const slides = useMemo(
    () => Array.from({ length: scrollSnaps.length }, (_, i) => i),
    [scrollSnaps]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  const onInit = useCallback(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
  }, [emblaApi]);

  const onReInit = useCallback(() => {
    onInit();
    onSelect();
  }, [onInit, onSelect]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onReInit);
    const raf = requestAnimationFrame(onReInit);
    return () => {
      cancelAnimationFrame(raf);
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onReInit);
    };
  }, [emblaApi, onReInit, onSelect]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi]
  );

  return (
    <div>
      <div className="py-[48px] lg:py-0 px-[24px] lg:px-0 flex flex-col gap-8 lg:gap-9 w-full lg:max-w-[992px] mx-auto relative">
        {/* Chevrons */}
        <button
          type="button"
          onClick={scrollPrev}
          className="hidden lg:block absolute left-[-70px] top-1/2 -translate-y-1/2 w-12 h-12 p-3 rounded-full bg-white shadow-how-we-work border-none cursor-pointer"
        >
          <Image
            src="/icons/chevron-left.svg"
            alt="Chevron Left"
            width={100}
            height={100}
            className="w-full h-full object-cover"
          />
        </button>
        <button
          type="button"
          onClick={scrollNext}
          className="hidden lg:block absolute right-[-70px] top-1/2 -translate-y-1/2 w-12 h-12 p-3 rounded-full bg-white shadow-how-we-work border-none cursor-pointer"
        >
          <Image
            src="/icons/chevron-right.svg"
            alt="Chevron Right"
            width={100}
            height={100}
            className="w-full h-full object-cover"
          />
        </button>
        {/* Carousel List */}
        <div ref={emblaRef} className="overflow-hidden p-2">
          <div className="flex gap-6 lg:gap-[46px]">
            {FEATURES.map((feature) => (
              <div
                key={feature.id}
                className="min-w-0 flex-[0_0_100%] lg:flex-[0_0_calc((100%-92px)/3)]"
              >
                <div className="bg-white rounded-[16px] shadow-how-we-work flex flex-col gap-4 py-6 px-3">
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
              </div>
            ))}
          </div>
        </div>
        {/* Buttons */}
        <div className="w-full flex items-center justify-center gap-3">
          {slides.map((index) => (
            <button
              key={index}
              type="button"
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => scrollTo(index)}
              className={cn(
                "border-none cursor-pointer w-[12px] h-[12px] rounded-full bg-black-08 opacity-10",
                selectedIndex === index && "bg-black-06 opacity-100"
              )}
            />
          ))}
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
  // Addtional
  {
    id: "4",
    title: "Robocop’s daydream, a libertarian's nightmare",
    imageUrl: "/images/our-craft/img-1.svg",
  },
  {
    id: "5",
    title: "Image Synthesis's Innovation vs. Privacy Crisis",
    imageUrl: "/images/our-craft/img-2.svg",
  },
  {
    id: "6",
    title: "The Big, Beautiful Bill's Decade-Long AI Free Pass",
    imageUrl: "/images/our-craft/img-3.svg",
  },
];
