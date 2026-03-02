"use client";

import Image from "next/image";
import CustomButton from "../shared/CustomButton";
import { cn } from "@/lib/utils";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useMemo, useState } from "react";

const FeaturesCarousel = () => {
  // Mobile carousel (for remaining items)
  const [mobileEmblaRef, mobileEmblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    loop: false,
  });

  // Desktop carousel (for all items)
  const [desktopEmblaRef, desktopEmblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    loop: false,
  });

  const [mobileSelectedIndex, setMobileSelectedIndex] = useState(0);
  const [desktopSelectedIndex, setDesktopSelectedIndex] = useState(0);
  const [mobileScrollSnaps, setMobileScrollSnaps] = useState<number[]>([]);
  const [desktopScrollSnaps, setDesktopScrollSnaps] = useState<number[]>([]);

  const desktopSlides = useMemo(
    () => Array.from({ length: desktopScrollSnaps.length }, (_, i) => i),
    [desktopScrollSnaps],
  );

  // First two features for mobile hardcoded display
  const mobileHardcodedFeatures = FEATURES.slice(0, 2);
  // Remaining features for mobile carousel
  const mobileCarouselFeatures = FEATURES.slice(2);

  // Mobile carousel handlers
  const onMobileSelect = useCallback(() => {
    if (!mobileEmblaApi) return;
    setMobileSelectedIndex(mobileEmblaApi.selectedScrollSnap());
  }, [mobileEmblaApi]);

  const onMobileInit = useCallback(() => {
    if (!mobileEmblaApi) return;
    setMobileScrollSnaps(mobileEmblaApi.scrollSnapList());
  }, [mobileEmblaApi]);

  const onMobileReInit = useCallback(() => {
    onMobileInit();
    onMobileSelect();
  }, [onMobileInit, onMobileSelect]);

  useEffect(() => {
    if (!mobileEmblaApi) return;
    mobileEmblaApi.on("select", onMobileSelect);
    mobileEmblaApi.on("reInit", onMobileReInit);
    const raf = requestAnimationFrame(onMobileReInit);
    return () => {
      cancelAnimationFrame(raf);
      mobileEmblaApi.off("select", onMobileSelect);
      mobileEmblaApi.off("reInit", onMobileReInit);
    };
  }, [mobileEmblaApi, onMobileReInit, onMobileSelect]);

  const mobileScrollTo = useCallback(
    (index: number) => mobileEmblaApi?.scrollTo(index),
    [mobileEmblaApi],
  );

  // Desktop carousel handlers
  const onDesktopSelect = useCallback(() => {
    if (!desktopEmblaApi) return;
    setDesktopSelectedIndex(desktopEmblaApi.selectedScrollSnap());
  }, [desktopEmblaApi]);

  const onDesktopInit = useCallback(() => {
    if (!desktopEmblaApi) return;
    setDesktopScrollSnaps(desktopEmblaApi.scrollSnapList());
  }, [desktopEmblaApi]);

  const onDesktopReInit = useCallback(() => {
    onDesktopInit();
    onDesktopSelect();
  }, [onDesktopInit, onDesktopSelect]);

  useEffect(() => {
    if (!desktopEmblaApi) return;
    desktopEmblaApi.on("select", onDesktopSelect);
    desktopEmblaApi.on("reInit", onDesktopReInit);
    const raf = requestAnimationFrame(onDesktopReInit);
    return () => {
      cancelAnimationFrame(raf);
      desktopEmblaApi.off("select", onDesktopSelect);
      desktopEmblaApi.off("reInit", onDesktopReInit);
    };
  }, [desktopEmblaApi, onDesktopReInit, onDesktopSelect]);

  const desktopScrollPrev = useCallback(
    () => desktopEmblaApi?.scrollPrev(),
    [desktopEmblaApi],
  );
  const desktopScrollNext = useCallback(
    () => desktopEmblaApi?.scrollNext(),
    [desktopEmblaApi],
  );
  const desktopScrollTo = useCallback(
    (index: number) => desktopEmblaApi?.scrollTo(index),
    [desktopEmblaApi],
  );

  return (
    <div>
      {/* Mobile: First two hardcoded items */}
      <div className="lg:hidden py-[48px] px-[24px] flex flex-col gap-6">
        {mobileHardcodedFeatures.map((feature) => (
          <div
            key={feature.id}
            className="bg-white rounded-[16px] shadow-how-we-work flex flex-col gap-4 py-6 px-3"
          >
            <h1 className="font-semibold text-[20px] leading-[24.6px] tracking-[-0.6px] text-black-04">
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

      {/* Mobile: Carousel for remaining items */}
      <div className="lg:hidden px-[24px] pb-[48px] flex flex-col gap-8">
        <div ref={mobileEmblaRef} className="overflow-hidden p-2">
          <div className="flex gap-6">
            {mobileCarouselFeatures.map((feature) => (
              <div key={feature.id} className="min-w-0 flex-[0_0_100%]">
                <div className="bg-white rounded-[16px] shadow-how-we-work flex flex-col gap-4 py-6 px-3">
                  <h1 className="font-semibold text-[20px] leading-[24.6px] tracking-[-0.6px] text-black-04">
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
        {/* Mobile carousel dots */}
        <div className="w-full flex items-center justify-center gap-3">
          {mobileCarouselFeatures.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => mobileScrollTo(index)}
              className={cn(
                "border-none cursor-pointer w-[12px] h-[12px] rounded-full bg-black-08 opacity-10",
                mobileSelectedIndex === index && "bg-black-06 opacity-100",
              )}
            />
          ))}
        </div>
      </div>

      {/* Desktop: Full carousel with all items */}
      <div className="hidden lg:block">
        <div className="flex flex-col gap-9 w-full max-w-[1020px] mx-auto relative">
          {/* Chevrons */}
          <button
            type="button"
            onClick={desktopScrollPrev}
            className="absolute left-[-70px] top-1/2 -translate-y-1/2 w-12 h-12 p-3 rounded-full bg-white shadow-how-we-work border-none cursor-pointer"
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
            onClick={desktopScrollNext}
            className="absolute right-[-70px] top-1/2 -translate-y-1/2 w-12 h-12 p-3 rounded-full bg-white shadow-how-we-work border-none cursor-pointer"
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
          <div ref={desktopEmblaRef} className="overflow-hidden p-2">
            <div className="flex gap-[46px]">
              {FEATURES.map((feature) => (
                <div
                  key={feature.id}
                  className="min-w-0 flex-[0_0_calc((100%-92px)/3)]"
                >
                  <div className="bg-white rounded-[16px] shadow-how-we-work flex flex-col gap-4 py-6 px-3">
                    <h1 className="font-semibold text-[20px] leading-[123%] tracking-[-3%] text-black-04">
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
          {/* Desktop carousel dots */}
          <div className="w-full flex items-center justify-center gap-3">
            {desktopSlides.map((index) => (
              <button
                key={index}
                type="button"
                aria-label={`Go to slide ${index + 1}`}
                onClick={() => desktopScrollTo(index)}
                className={cn(
                  "border-none cursor-pointer w-[12px] h-[12px] rounded-full bg-black-08 opacity-10",
                  desktopSelectedIndex === index && "bg-black-06 opacity-100",
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesCarousel;

const FEATURES = [
  {
    id: "1",
    title: "Robocop's daydream, a libertarian's nightmare",
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
  {
    id: "4",
    title: "Robocop's daydream, a libertarian's nightmare",
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
