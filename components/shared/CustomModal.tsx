"use client";
import { cn } from "@/lib/utils";
import { useEffect, useCallback, useState } from "react";
import { createPortal } from "react-dom";

type CustomModalProps = {
  trigger?: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
  className?: string;
  overlayClassName?: string;
  closeOnOverlayClick?: boolean;
  closeOnEscape?: boolean;
};

const CustomModal = ({
  trigger,
  open,
  onOpenChange,
  children,
  className = "",
  overlayClassName = "",
  closeOnOverlayClick = true,
  closeOnEscape = true,
}: CustomModalProps) => {
  const [internalOpen, setInternalOpen] = useState(false);
  const isControlled =
    typeof open === "boolean" && typeof onOpenChange === "function";
  const openState = isControlled ? open : internalOpen;
  const openStateChange = isControlled ? onOpenChange : setInternalOpen;

  const openModal = useCallback(() => {
    openStateChange(true);
  }, [openStateChange]);

  const closeModal = useCallback(() => {
    openStateChange(false);
  }, [openStateChange]);

  const handleEscape = useCallback(
    (e: KeyboardEvent) => {
      if (closeOnEscape && e.key === "Escape") closeModal();
    },
    [closeModal, closeOnEscape]
  );

  useEffect(() => {
    if (!openState) return;
    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [openState, handleEscape]);

  const triggerElement = trigger ? (
    <span
      role="button"
      tabIndex={0}
      onClick={openModal}
      onKeyDown={(e) => e.key === "Enter" && openModal()}
      className="inline-block cursor-pointer"
    >
      {trigger}
    </span>
  ) : null;

  if (!openState || typeof document === "undefined") {
    return triggerElement;
  }

  const modalContent = (
    <div
      className={cn(
        "fixed inset-0 z-9999 flex items-center justify-center",
        overlayClassName
      )}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="absolute inset-0 bg-black-05"
        aria-hidden="true"
        onClick={closeOnOverlayClick ? closeModal : undefined}
      />
      <div
        className={cn(
          "relative z-10 h-full lg:max-h-[90vh] overflow-auto rounded-lg bg-white p-6 shadow-lg",
          className
        )}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );

  return (
    <>
      {triggerElement}
      {createPortal(modalContent, document.body)}
    </>
  );
};

export default CustomModal;
