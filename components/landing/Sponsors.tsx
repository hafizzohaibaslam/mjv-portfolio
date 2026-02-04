"use client";
import Image from "next/image";

const Sponsors = () => {
  return (
    <div className="w-full overflow-hidden bg-white py-6">
      <div className="flex w-max animate-scroll gap-8 h-17.5">
        {[...SPONSORS, ...SPONSORS].map((sponsor, index) => (
          <div
            className="flex h-full w-full items-center justify-center"
            key={`${sponsor.name}-${index}`}
          >
            <Image
              src={sponsor.image}
              alt={sponsor.name}
              width={100}
              height={100}
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sponsors;

const SPONSORS = [
  {
    name: "People First",
    image: "/images/landing/sponsors/people-first.svg",
  },
  {
    name: "Ground",
    image: "/images/landing/sponsors/ground.svg",
  },
  {
    name: "Madison Rose",
    image: "/images/landing/sponsors/madison-rose.svg",
  },
  {
    name: "Lowe's",
    image: "/images/landing/sponsors/lrc.svg",
  },
  {
    name: "University of Chicago",
    image: "/images/landing/sponsors/u-chicago.svg",
  },
  {
    name: "Reach",
    image: "/images/landing/sponsors/reach.svg",
  },
  {
    name: "Clinical Enrollment",
    image: "/images/landing/sponsors/clinical-enrollment.svg",
  },
  {
    name: "Mucker Captial",
    image: "/images/landing/sponsors/mucker-capital.svg",
  },
  {
    name: "Path",
    image: "/images/landing/sponsors/path.svg",
  },
  {
    name: "Pathos",
    image: "/images/landing/sponsors/pathos.svg",
  },
];

{
  /* <div className="w-full py-6 px-0 md:py-5 md:px-11 bg-white flex items-center gap-7 md:gap-8">
  {SPONSORS.map((sponsor) => (
    <div key={sponsor.name} className="w-[100px] h-[100px]">
      <Image
        src={sponsor.image}
        alt={sponsor.name}
        width={100}
        height={100}
        className="w-full h-full object-contain"
      />
    </div>
  ))}
</div>; */
}
