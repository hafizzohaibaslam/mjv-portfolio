import { CALENDLY_URL } from "@/constants/calendly";

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

/**
 * Opens the Calendly scheduling popup. Falls back to opening the URL in a new tab
 * if the Calendly script hasn't loaded yet.
 */
export function openCalendly(): void {
  if (typeof window === "undefined") return;
  if (window.Calendly) {
    window.Calendly.initPopupWidget({ url: CALENDLY_URL });
  } else {
    window.open(CALENDLY_URL, "_blank", "noopener,noreferrer");
  }
}
