"use client";

import CustomButton from "./CustomButton";
import { openCalendly } from "@/lib/calendly";
import { cn } from "@/lib/utils";

type BookACallButtonProps = {
  variant?: "primary" | "secondary" | "tertiary" | "form";
  className?: string;
  children?: React.ReactNode;
};

const BookACallButton = ({
  variant = "secondary",
  className,
  children = "Book a call",
}: BookACallButtonProps) => {
  return (
    <CustomButton
      variant={variant}
      className={cn(className)}
      onClick={openCalendly}
    >
      {children}
    </CustomButton>
  );
};

export default BookACallButton;
