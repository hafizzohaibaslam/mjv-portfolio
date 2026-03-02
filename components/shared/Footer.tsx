import Logo from "./Logo";
import { ROUTES } from "@/constants/routes";
import Link from "next/link";

const FOOTER_SECTIONS = {
  services: {
    title: "Services",
    items: [
      { label: "AI Agents", href: "#" },
      { label: "High Fidelity Designs", href: "#" },
      { label: "Custom Apps", href: "#" },
    ],
  },
  company: {
    title: "Company",
    items: [
      { label: "About Us", href: ROUTES.ABOUT_US },
      { label: "Blog", href: ROUTES.BLOG },
    ],
  },
};

const Footer = () => {
  return (
    <div className="pt-[48px] px-[16px] pb-[24px] bg-black-06 md:px-[34px] md:pb-[48px]  w-full">
      <div className="flex flex-col gap-8 w-full md:max-w-[1274px] mx-auto">
        {/* Top */}
        <div className="flex flex-col gap-8 md:flex-row md:justify-between md:items-center">
          {/* Logo and Description */}
          <div className="flex flex-col gap-4">
            <Logo
              className="w-[89px] h-[23px] relative left-[-20px]"
              imageClassName="invert filter-invert"
            />
            <p className="w-[194px] md:w-[250px] font-normal text-[14px] leading-[20px] tracking-[-0.15px] text-white">
              We help organizations design, develop, and deploy Custom AI
              Agents.
            </p>
          </div>
          {Object.entries(FOOTER_SECTIONS).map(([key, section]) => (
            <div key={key} className="flex flex-col gap-4">
              <h1 className="font-normal text-[16px] leading-[24px] tracking-[-0.31px] text-blue-01">
                {section.title}
              </h1>
              <div className="flex flex-col gap-2">
                {section.items.map((item) => {
                  if (key === "company") {
                    return (
                      <Link
                        href={item?.href}
                        key={item?.href}
                        className="font-normal text-[14px] leading-[20px] tracking-[-0.15px] text-white"
                      >
                        {item?.label}
                      </Link>
                    );
                  }
                  return (
                    <span
                      key={item?.href}
                      className="font-normal text-[14px] leading-[20px] tracking-[-0.15px] text-white"
                    >
                      {item?.label}
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
        {/* Bottom */}
        <div className="border-t-[1.25px] border-blue-01 pt-[32px] flex flex-col justify-center items-center gap-4 md:flex-row md:justify-between md:items-center md:pt-[16px] md:pb-[16px]">
          <span className="font-normal text-[14px] leading-[20px] tracking-[-0.15px] text-gray-04">
            © 2026 MJ Ventures. All rights reserved.
          </span>
          <span className="font-normal text-[14px] leading-[20px] tracking-[-0.15px] text-gray-04">
            Chicago, Illinois
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
