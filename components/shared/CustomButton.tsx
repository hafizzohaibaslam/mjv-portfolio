import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

type CustomButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "tertiary" | "form";
  href?: string;
};

const CustomButton = ({
  children,
  onClick,
  className = "",
  disabled = false,
  type = "button",
  variant = "primary",
  href = "",
}: CustomButtonProps) => {
  const baseClass =
    "cursor-pointer border-none flex items-center justify-center gap-1 transition-all duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed";

  const variantClasses = {
    primary: "bg-black-03 text-white hover:bg-black-03/80",
    secondary: "bg-white-02 text-black-01 hover:bg-white-02/80",
    form: "bg-blue-01 text-white hover:bg-blue-01/80",
  };

  if (href) {
    return (
      <Link
        href={href}
        className={cn(
          baseClass,
          variantClasses[variant as keyof typeof variantClasses],
          className
        )}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={type}
      className={cn(
        baseClass,
        variantClasses[variant as keyof typeof variantClasses],
        className
      )}
    >
      {children}
    </button>
  );
};

export default CustomButton;
