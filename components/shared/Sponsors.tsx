"use client";
import Image from "next/image";
import { SPONSORS_DATA } from "@/constants/sponsors";

const Sponsors = () => {
  return (
    <div className="w-full overflow-hidden bg-white py-6">
      <div className="flex w-max animate-scroll gap-8 h-17.5">
        {[...SPONSORS_DATA, ...SPONSORS_DATA].map((sponsor, index) => (
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
