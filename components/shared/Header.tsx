"use client";
import { useState } from "react";
import Image from "next/image";
import Logo from "./Logo";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ROUTES } from "@/constants/routes";
import CustomButton from "./CustomButton";
import { X } from "lucide-react";

const NAV_LINKS = [
  {
    label: "Services",
    href: ROUTES.LANDING,
  },
  {
    label: "Our Work",
    href: ROUTES.OUR_WORK,
  },
  {
    label: "About Us",
    href: ROUTES.ABOUT_US,
  },
  {
    label: "Blog",
    href: ROUTES.BLOG,
  },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <header className="relative w-full bg-white-01 border-b border-black-02 h-[70px]">
      <nav className="w-full max-w-[1265px] mx-auto flex items-center justify-between gap-4 px-4 py-4.5">
        <Logo className="w-[89px] h-[28px] flex justify-center items-center" />
        <div className="hidden md:flex md:items-center md:gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              href={link.href}
              key={link.href}
              className="font-medium text-[16px] leading-6 tracking-[-0.31px] text-gray-01 hover:text-black-01 transition-all duration-300 hover:underline"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <CustomButton
          variant="secondary"
          className="hidden md:block py-2 px-4 rounded-[8px] font-medium text-[14px] leading-5 tracking-[-0.15px] text-black-01 hover:bg-black-01 hover:text-white-01"
        >
          Book a call
        </CustomButton>
        <button className="block md:hidden p-2" onClick={handleOpen}>
          <Image src="/icons/hamburger.svg" alt="Menu" width={24} height={24} />
        </button>
      </nav>
      {/* Small screen menu */}
      <div
        className={cn(
          "fixed inset-0 bg-white-01/50 backdrop-blur-sm z-50 translate-x-full transition-all duration-300 ease-in-out md:translate-x-full",
          isOpen && "translate-x-0",
        )}
      >
        <div className="relative bg-white w-full h-full flex flex-col gap-4 px-6 py-6">
          {/* Header with logo and close button */}
          <div className="flex items-center justify-between">
            <Logo className="w-[89px] h-[28px] flex justify-center items-center relative " />
            <button
              onClick={handleClose}
              className="bg-white p-2 rounded-full shadow-md flex items-center justify-center"
            >
              <X />
            </button>
          </div>

          {/* Navigation links */}
          <nav className="flex flex-col gap-6 border-2 border-green-500">
            {NAV_LINKS.map((link) => (
              <Link
                href={link.href}
                key={link.href}
                onClick={handleClose}
                className="font-medium text-[16px] leading-6 tracking-[-0.31px] text-gray-01 hover:text-black-01 transition-all duration-300 hover:underline"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Book a call button */}
          <CustomButton
            variant="secondary"
            className="w-full py-3 px-4 rounded-[8px] font-medium text-[14px] leading-5 tracking-[-0.15px] text-black-01 hover:bg-black-01 hover:text-white-01"
          >
            Book a call
          </CustomButton>
        </div>
      </div>
    </header>
  );
};

export default Header;
