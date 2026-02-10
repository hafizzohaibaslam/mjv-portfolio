"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Logo from "./Logo";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { ROUTES } from "@/constants/routes";
import CustomButton from "./CustomButton";
import { X } from "lucide-react";

const NAV_LINKS = [
  {
    label: "Services",
    href: "#services",
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
  const pathname = usePathname();
  const router = useRouter();

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (href.includes("#")) {
      e.preventDefault();
      const hash = href.startsWith("#") ? href : href.split("#")[1];
      const elementId = hash.startsWith("#") ? hash : `#${hash}`;

      if (pathname === "/") {
        // On home page, smooth scroll directly
        const element = document.querySelector(elementId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        // On other pages, navigate to home with hash
        router.push(`/${elementId}`);
      }
    }
  };

  // Handle scroll after navigation from another page
  useEffect(() => {
    if (pathname === "/" && window.location.hash) {
      const element = document.querySelector(window.location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
    setTimeout(() => {
      handleClose(); // Close menu on navigation
    }, 0);
  }, [pathname]);
  return (
    <header className="relative w-full bg-white-01 border-b border-black-02 h-[70px]">
      <nav className="w-full max-w-[1265px] mx-auto flex items-center justify-between gap-4 px-4 py-4.5">
        <Logo className="w-[89px] h-[28px] flex justify-center items-center" />
        <div className="hidden md:flex md:items-center md:gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              href={link.href}
              key={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
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
          <nav className="flex flex-col gap-6">
            {NAV_LINKS.map((link) => (
              <Link
                href={link.href}
                key={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="font-medium text-[16px] leading-6 tracking-[-0.31px] text-gray-01 hover:text-black-01 transition-all duration-300 hover:underline"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Book a call button */}
          <CustomButton
            variant="secondary"
            className="w-full py-[10px] px-4 rounded-full font-medium text-[18px] leading-[28px] tracking-[-0.44px] shadow-primary border-[0.56px] border-black-02 text-black-01 hover:bg-black-01 hover:text-white-01"
          >
            Book a call
          </CustomButton>
        </div>
      </div>
    </header>
  );
};

export default Header;
